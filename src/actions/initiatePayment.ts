/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import crypto from "crypto";

function sha256(fullURL: string): string {
  return crypto.createHash("sha256").update(fullURL).digest("hex");
}

export async function initiatePayment(amount: number, orderData: any) {
  try {
    await connectDB();
    
    // First create order in database
    const order = await Order.create({
      ...orderData,
      totalAmount: amount,
      paymentStatus: 'pending',
      orderStatus: 'pending',
      orderId: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });

    const transactionId = "Tr-" + Math.random().toString(36).substring(2, 8);

    const payload = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      merchantTransactionId: transactionId,
      merchantUserId: "MUID-" + Math.random().toString(36).substring(2, 8),
      amount: amount * 100, // Convert to paise
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/status/${transactionId}?orderId=${order.orderId}`,
      redirectMode: "REDIRECT",
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/callback`,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const dataPayload = JSON.stringify(payload);
    const dataBase64 = Buffer.from(dataPayload).toString("base64");

    const fullURL = dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
    const dataSha256 = sha256(fullURL);

    const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;

    const UAT_PAY_API_URL = `${process.env.NEXT_PUBLIC_PHONE_PAY_HOST_URL}/pg/v1/pay`;

    const response = await axios.post(
      UAT_PAY_API_URL,
      { request: dataBase64 },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
      },
    );

    // Update order with transaction ID
    await Order.findByIdAndUpdate(order._id, {
      transactionId: transactionId,
      phonePeTransactionId: response.data.data.transactionId
    });

    return {
      redirectUrl: response.data.data.instrumentResponse.redirectInfo.url,
      transactionId: transactionId,
      orderId: order.orderId
    };
  } catch (error) {
    console.error("Error in server action:", error);
    throw error;
  }
}