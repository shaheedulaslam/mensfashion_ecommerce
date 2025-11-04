/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Customer from '@/models/Customer';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    const query: any = {};
    
    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }
    
    const skip = (page - 1) * limit;
    const sort: any = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

    const [customers, total] = await Promise.all([
      Customer.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .select('-__v'),
      Customer.countDocuments(query)
    ]);

    return NextResponse.json({ 
      success: true, 
      data: customers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Check if customer already exists
    const existingCustomer = await Customer.findOne({ email: body.email });
    if (existingCustomer) {
      return NextResponse.json(
        { success: false, error: 'Customer with this email already exists' },
        { status: 400 }
      );
    }

    const customer = await Customer.create(body);
    
    return NextResponse.json({ success: true, data: customer }, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create customer' },
      { status: 500 }
    );
  }
}