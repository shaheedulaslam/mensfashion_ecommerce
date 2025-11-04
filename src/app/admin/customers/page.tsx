/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Mail,
  Phone,
  MapPin,
  User,
  Download,
  Plus,
  Calendar,
  IndianRupee,
  Package
} from 'lucide-react';
import axios from 'axios';

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  totalOrders: number;
  totalSpent: number;
  lastOrderDate?: string;
  createdAt: string;
}

interface CustomerStats {
  totalCustomers: number;
  newCustomersThisMonth: number;
  customersWithOrders: number;
  customersWithoutOrders: number;
  topSpenders: Customer[];
  averageOrderValue: number;
}

interface ApiResponse {
  success: boolean;
  data: Customer[];
}

interface StatsApiResponse {
  success: boolean;
  data: CustomerStats;
}

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [stats, setStats] = useState<CustomerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  useEffect(() => {
    fetchCustomers();
    fetchStats();
  }, [searchTerm, sortBy, sortOrder]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      params.append('sortBy', sortBy);
      params.append('sortOrder', sortOrder);

      const response = await axios.get<ApiResponse>(`/api/customers?${params}`);
      const data = response.data;

      if (data.success && Array.isArray(data.data)) {
        setCustomers(data.data);
      } else {
        console.error('Invalid response format:', data);
        setCustomers([]);
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
      setCustomers([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get<StatsApiResponse>('/api/customers/stats');
      const data = response.data;

      if (data.success && data.data) {
        setStats(data.data);
      } else {
        console.error('Invalid stats response format:', data);
        setStats(null);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats(null);
    }
  };

  const deleteCustomer = async (customerId: string) => {
    if (!confirm('Are you sure you want to delete this customer? This action cannot be undone.')) return;
    
    try {
      const response = await axios.delete(`/api/customers/${customerId}`);

      if (response.status === 200) {
        fetchCustomers();
        fetchStats();
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  const viewCustomerDetails = async (customer: Customer) => {
    setSelectedCustomer(customer);
    setShowCustomerModal(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Safe check for topSpenders
  const hasTopSpenders = stats?.topSpenders && Array.isArray(stats.topSpenders) && stats.topSpenders.length > 0;

  if (loading && customers.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600">Manage and view customer information</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4" />
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats - Added safe checks */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-gray-900">
              {stats.totalCustomers || 0}
            </div>
            <div className="text-gray-600">Total Customers</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-green-600">
              {stats.newCustomersThisMonth || 0}
            </div>
            <div className="text-gray-600">New This Month</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-blue-600">
              {stats.customersWithOrders || 0}
            </div>
            <div className="text-gray-600">With Orders</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-purple-600">
              {formatCurrency(stats.averageOrderValue || 0)}
            </div>
            <div className="text-gray-600">Avg. Order Value</div>
          </div>
        </div>
      )}

      {/* Top Spenders - Fixed with safe check */}
      {hasTopSpenders && (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Top Spenders</h3>
          <div className="space-y-3">
            {stats.topSpenders.map((customer, index) => (
              <div key={customer._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-gray-500">{customer.email}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">
                    {formatCurrency(customer.totalSpent || 0)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {customer.totalOrders || 0} orders
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search customers by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="createdAt">Join Date</option>
            <option value="totalSpent">Total Spent</option>
            <option value="totalOrders">Total Orders</option>
            <option value="name">Name</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {customer.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {customer.totalOrders || 0}
                    </div>
                    <div className="text-sm text-gray-500">orders</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-green-600">
                      {formatCurrency(customer.totalSpent || 0)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.lastOrderDate ? formatDate(customer.lastOrderDate) : 'No orders'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(customer.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => viewCustomerDetails(customer)}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        title="Edit Customer"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => deleteCustomer(customer._id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Delete Customer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {customers.length === 0 && (
          <div className="text-center py-12">
            <User className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No customers found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm 
                ? 'Try changing your search term' 
                : 'Get started by creating your first customer'}
            </p>
          </div>
        )}
      </div>

      {/* Customer Details Modal */}
      {showCustomerModal && selectedCustomer && (
        <CustomerDetailsModal
          customer={selectedCustomer}
          onClose={() => {
            setShowCustomerModal(false);
            setSelectedCustomer(null);
          }}
        />
      )}
    </div>
  );
}

// Customer Details Modal Component
const CustomerDetailsModal = ({ customer, onClose }: { 
  customer: Customer; 
  onClose: () => void;
}) => {
  const [customerDetails, setCustomerDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomerDetails();
  }, [customer]);

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get(`/api/customers/${customer._id}`);
      const data = response.data;

      if (data) {
        setCustomerDetails(data);
      }
    } catch (error) {
      console.error('Error fetching customer details:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Customer Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{customer.name}</h3>
                    <p className="text-gray-600">Customer since {new Date(customer.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{customer.phone}</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Address
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>{customer.address?.street || 'No address provided'}</p>
                  <p>{customer.address?.city}, {customer.address?.state} {customer.address?.zipCode}</p>
                  <p>{customer.address?.country}</p>
                </div>
              </div>

              {/* Order Statistics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{customer.totalOrders || 0}</div>
                  <div className="text-sm text-blue-800">Total Orders</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(customer.totalSpent || 0)}
                  </div>
                  <div className="text-sm text-green-800">Total Spent</div>
                </div>
              </div>

              {/* Recent Orders */}
              {customerDetails?.recentOrders && Array.isArray(customerDetails.recentOrders) && customerDetails.recentOrders.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Recent Orders</h4>
                  <div className="space-y-2">
                    {customerDetails.recentOrders.map((order: any) => (
                      <div key={order._id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{order.orderId}</div>
                          <div className="text-sm text-gray-500">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{formatCurrency(order.totalAmount || 0)}</div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            order.orderStatus === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.orderStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            order.orderStatus === 'shipped' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {order.orderStatus}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};