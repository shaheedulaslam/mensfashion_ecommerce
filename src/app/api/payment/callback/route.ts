/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import crypto from 'crypto';
import axios from 'axios';

function sha256(fullURL: string): string {
  return crypto.createHash("sha256").update(fullURL).digest("hex");
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { response } = body;
    
    // Decode the response
    const decodedResponse = JSON.parse(Buffer.from(response, 'base64').toString());
    
    const { merchantId, transactionId, merchantTransactionId } = decodedResponse;
    
    // Verify the checksum
    const st = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + process.env.NEXT_PUBLIC_SALT_KEY;
    const dataSha256 = sha256(st);
    const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
    
    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_PHONE_PAY_HOST_URL}/pg/v1/status/${merchantId}/${merchantTransactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId,
      },
    };
    
    const statusResponse = await axios.request(options);
    
    if (statusResponse.data.code === "PAYMENT_SUCCESS") {
      // Update order status
      await Order.findOneAndUpdate(
        { transactionId: merchantTransactionId },
        {
          paymentStatus: 'completed',
          orderStatus: 'confirmed'
        }
      );
    } else {
      await Order.findOneAndUpdate(
        { transactionId: merchantTransactionId },
        {
          paymentStatus: 'failed'
        }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in payment callback:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}