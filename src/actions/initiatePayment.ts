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
    
    // Validate environment variables
    const requiredEnvVars = [
      'NEXT_PUBLIC_MERCHANT_ID',
      'NEXT_PUBLIC_SALT_KEY',
      'NEXT_PUBLIC_SALT_INDEX',
      'NEXT_PUBLIC_PHONE_PAY_HOST_URL',
      'NEXT_PUBLIC_BASE_URL'
    ];

    const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
    if (missingVars.length > 0) {
      throw new Error(`Missing environment variables: ${missingVars.join(', ')}`);
    }

    console.log('Environment check:', {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      saltKey: process.env.NEXT_PUBLIC_SALT_KEY ? 'Present' : 'Missing',
      saltIndex: process.env.NEXT_PUBLIC_SALT_INDEX,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      hostUrl: process.env.NEXT_PUBLIC_PHONE_PAY_HOST_URL
    });

    // First create order in database
    const order = await Order.create({
      ...orderData,
      totalAmount: amount,
      paymentStatus: 'pending',
      orderStatus: 'pending',
      orderId: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });

    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 6)}`.toUpperCase();

    const payload = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      merchantTransactionId: transactionId,
      merchantUserId: `MUID${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to paise
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/status/${transactionId}?orderId=${order.orderId}`,
      redirectMode: "REDIRECT",
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/callback`,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    console.log('Payment payload:', payload);

    const dataPayload = JSON.stringify(payload);
    const dataBase64 = Buffer.from(dataPayload).toString("base64");

    const fullURL = dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
    const dataSha256 = sha256(fullURL);

    const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;

    console.log('Checksum generated:', checksum);

    const UAT_PAY_API_URL = `${process.env.NEXT_PUBLIC_PHONE_PAY_HOST_URL}/pg/v1/pay`;

    console.log('Making request to:', UAT_PAY_API_URL);

    const response = await axios.post(
      UAT_PAY_API_URL,
      { request: dataBase64 },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
        timeout: 30000,
      },
    );

    console.log('PhonePe API response status:', response.status);
    console.log('PhonePe API response data:', JSON.stringify(response.data, null, 2));

    if (response.data.success === true) {
      const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url;
      
      // Update order with transaction ID
      await Order.findByIdAndUpdate(order._id, {
        transactionId: transactionId,
        phonePeTransactionId: response.data.data.transactionId,
        merchantTransactionId: transactionId
      });

      return {
        success: true,
        redirectUrl: redirectUrl,
        transactionId: transactionId,
        orderId: order.orderId
      };
    } else {
      throw new Error(response.data.message || 'Payment initiation failed');
    }

  } catch (error: any) {
    console.error("Error in server action:");
    
    if (error.response) {
      // Server responded with error status
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // No response received
      console.error('No response received:', error.request);
    } else {
      // Other errors
      console.error('Error:', error.message);
    }
    
    console.error('Full error:', error);
    
    throw new Error(error.response?.data?.message || error.message || 'Payment initiation failed');
  }
}