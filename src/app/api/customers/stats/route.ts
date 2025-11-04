/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Customer from '@/models/Customer';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const [
      totalCustomers,
      newCustomersThisMonth,
      topSpenders,
      customersWithOrders
    ] = await Promise.all([
      // Total customers
      Customer.countDocuments(),
      
      // New customers this month
      Customer.countDocuments({
        createdAt: {
          $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }),
      
      // Top 5 spenders
      Customer.find()
        .sort({ totalSpent: -1 })
        .limit(5)
        .select('name email totalSpent totalOrders'),
      
      // Customers with orders
      Customer.countDocuments({ totalOrders: { $gt: 0 } })
    ]);

    const averageOrderValue = totalCustomers > 0 ? 
      await Customer.aggregate([
        { $match: { totalSpent: { $gt: 0 } } },
        { $group: { _id: null, avgSpent: { $avg: '$totalSpent' } } }
      ]) : [{ avgSpent: 0 }];

    return NextResponse.json({
      success: true,
      data: {
        totalCustomers,
        newCustomersThisMonth,
        customersWithOrders,
        customersWithoutOrders: totalCustomers - customersWithOrders,
        topSpenders,
        averageOrderValue: averageOrderValue[0]?.avgSpent || 0
      }
    });
  } catch (error) {
    console.error('Error fetching customer stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch customer statistics' },
      { status: 500 }
    );
  }
}