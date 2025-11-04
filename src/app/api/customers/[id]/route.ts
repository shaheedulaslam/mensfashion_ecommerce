import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Customer from '@/models/Customer';
import Order from '@/models/Order';

// Use the proper type from Next.js
interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    
    // Await the params to get the actual values
    const { id } = await params;
    
    const customer = await Customer.findById(id)
      .populate('orders', 'orderId totalAmount orderStatus createdAt')
      .select('-__v');

    if (!customer) {
      return NextResponse.json(
        { success: false, error: 'Customer not found' },
        { status: 404 }
      );
    }

    // Get customer's recent orders
    const recentOrders = await Order.find({ 'customerInfo.email': customer.email })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('orderId totalAmount orderStatus createdAt');

    const customerData = {
      ...customer.toObject(),
      recentOrders
    };

    return NextResponse.json({ success: true, data: customerData });
  } catch (error) {
    console.error('Error fetching customer:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch customer' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    
    // Await the params to get the actual values
    const { id } = await params;
    const body = await request.json();
    
    const customer = await Customer.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!customer) {
      return NextResponse.json(
        { success: false, error: 'Customer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: customer });
  } catch (error) {
    console.error('Error updating customer:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update customer' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    
    // Await the params to get the actual values
    const { id } = await params;
    
    const customer = await Customer.findByIdAndDelete(id);

    if (!customer) {
      return NextResponse.json(
        { success: false, error: 'Customer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    console.error('Error deleting customer:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete customer' },
      { status: 500 }
    );
  }
}