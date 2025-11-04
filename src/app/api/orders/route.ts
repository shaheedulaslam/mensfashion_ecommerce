/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import Customer from '@/models/Customer';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const status = searchParams.get('status');

    let query = {};
    if (email) {
      query = { 'customerInfo.email': email };
    }
    if (status && status !== 'all') {
      query = { ...query, orderStatus: status };
    }

    const orders = await Order.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create order
    const order = await Order.create({
      ...body,
      orderId
    });

    // Update or create customer record
    if (body.saveCustomer) {
      await updateCustomerRecord(body.customerInfo, order.totalAmount, order._id);
    }
    
    return NextResponse.json({ success: true, data: order }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

// Helper function to update customer record
async function updateCustomerRecord(customerInfo: any, totalAmount: number, orderId: any) {
  try {
    let customer = await Customer.findOne({ email: customerInfo.email });
    
    if (customer) {
      // Update existing customer
      customer.totalOrders += 1;
      customer.totalSpent += totalAmount;
      customer.lastOrderDate = new Date();
      customer.orders.push(orderId);
      await customer.save();
    } else {
      // Create new customer
      // Parse address to extract components (simplified)
      const addressParts = customerInfo.address.split(', ');
      customer = await Customer.create({
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
        address: {
          street: addressParts[0] || customerInfo.address,
          city: addressParts[1] || '',
          state: addressParts[2] || '',
          zipCode: addressParts[3]?.match(/\d{6}/)?.[0] || '',
          country: 'India'
        },
        orders: [orderId],
        totalOrders: 1,
        totalSpent: totalAmount,
        lastOrderDate: new Date()
      });
    }
  } catch (error) {
    console.error('Error updating customer record:', error);
    // Don't throw error - order should still be created even if customer update fails
  }
}