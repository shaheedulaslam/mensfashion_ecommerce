/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Trash2,
  CreditCard,
  Shield,
  Lock,
  User,
  Mail,
  Phone,
  MapPin,
  Plus,
  Minus,
  IndianRupee,
} from "lucide-react";
import { useState } from "react";
import { initiatePayment } from "@/actions/initiatePayment";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
    google?: any;
  }
}

type PaymentMethod = "razorpay" | "phonepe" | "googlepay";

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>("phonepe");
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [saveCustomerInfo, setSaveCustomerInfo] = useState(true);

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 99 : 0; // Free shipping over ₹1999
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handlePay = async (amount: number, orderData: any) => {
    try {
      const result = await initiatePayment(amount, orderData);
      if (result) {
        router.push(
          `/status/${result.transactionId}?orderId=${result.orderId}`
        );
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const handlePayment = async () => {
    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "pincode",
    ];
    const missingFields = requiredFields.filter(
      (field) => !customerInfo[field as keyof CustomerInfo]
    );

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate phone number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(customerInfo.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setIsProcessing(true);

    try {
      // Prepare order data
      const orderData = {
        customerInfo: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          address: `${customerInfo.address}, ${customerInfo.city}, ${customerInfo.state} - ${customerInfo.pincode}, ${customerInfo.country}`,
        },
        items: cart.map((item) => ({
          productId: item.id,
          title: item.title,
          price: item.price,
          img: item.img,
          quantity: item.quantity,
        })),
        totalAmount: total,
        paymentMethod: selectedPaymentMethod,
        saveCustomer: saveCustomerInfo,
      };

      switch (selectedPaymentMethod) {
        case "phonepe":
          await handlePay(total, orderData);
          break;
        // Add other payment methods...
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8 text-black" />
          <h2 className="text-4xl font-extrabold tracking-tight">
            Your Shopping Cart
          </h2>
        </div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-white rounded-2xl shadow-sm"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
            <a
              href="/"
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-black text-white font-medium hover:bg-neutral-800 transition-colors"
            >
              Continue Shopping
            </a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-24 h-24 overflow-hidden rounded-lg border border-gray-200 flex-shrink-0">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="font-medium text-xl text-green-600 mb-3">
                          <IndianRupee className="w-4 h-4 inline" />
                          {item.price}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          {item.tags.join(" • ")}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold">
                          <IndianRupee className="w-4 h-4 inline" />
                          {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary & Checkout */}
            <div className="space-y-6">
              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      <IndianRupee className="w-4 h-4 inline" />
                      {subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600" : ""}>
                      {shipping === 0 ? (
                        "FREE"
                      ) : (
                        <>
                          <IndianRupee className="w-4 h-4 inline" />
                          {shipping}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (GST 18%)</span>
                    <span>
                      <IndianRupee className="w-4 h-4 inline" />
                      {tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-green-600">
                        <IndianRupee className="w-4 h-4 inline" />
                        {total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowPaymentSection(true)}
                  className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <CreditCard className="w-5 h-5" />
                  Proceed to Checkout
                </button>
              </motion.div>

              {/* Secure Checkout Features */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold">Secure Checkout</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>256-bit SSL secured payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Your data is protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Section Modal */}
        {/* Payment Section Modal */}
        <AnimatePresence>
          {showPaymentSection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Complete Your Order</h2>
                    <button
                      onClick={() => setShowPaymentSection(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Customer Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <User className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-semibold">
                          Customer Information
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={customerInfo.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="your@email.com"
                              value={customerInfo.email}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="10-digit number"
                              value={customerInfo.phone}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address *
                          </label>
                          <input
                            type="text"
                            name="address"
                            placeholder="Street address, building, floor"
                            value={customerInfo.address}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              name="city"
                              placeholder="City"
                              value={customerInfo.city}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              State *
                            </label>
                            <input
                              type="text"
                              name="state"
                              placeholder="State"
                              value={customerInfo.state}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Pincode *
                            </label>
                            <input
                              type="text"
                              name="pincode"
                              placeholder="Pincode"
                              value={customerInfo.pincode}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Country
                          </label>
                          <select
                            name="country"
                            value={customerInfo.country}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          >
                            <option value="India">India</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={saveCustomerInfo}
                            onChange={(e) =>
                              setSaveCustomerInfo(e.target.checked)
                            }
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-600">
                            Save my information for faster checkout
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Payment Method</h3>

                      <div className="space-y-3">
                        <div
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedPaymentMethod === "phonepe"
                              ? "border-[#5F259E] bg-[#5F259E] text-white shadow-md"
                              : "border-gray-300 hover:border-[#5F259E] hover:shadow-sm"
                          }`}
                          onClick={() => setSelectedPaymentMethod("phonepe")}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  selectedPaymentMethod === "phonepe"
                                    ? "bg-white"
                                    : "bg-[#5F259E]"
                                }`}
                              >
                                <span
                                  className={`font-bold text-sm ${
                                    selectedPaymentMethod === "phonepe"
                                      ? "text-[#5F259E]"
                                      : "text-white"
                                  }`}
                                >
                                  PhonePe
                                </span>
                              </div>
                              <span className="font-semibold">PhonePe UPI</span>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                selectedPaymentMethod === "phonepe"
                                  ? "bg-white"
                                  : "bg-gray-200"
                              }`}
                            >
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  selectedPaymentMethod === "phonepe"
                                    ? "bg-[#5F259E]"
                                    : "bg-transparent"
                                }`}
                              ></div>
                            </div>
                          </div>
                          <p
                            className={`text-sm mt-2 ${
                              selectedPaymentMethod === "phonepe"
                                ? "opacity-90"
                                : "text-gray-600"
                            }`}
                          >
                            Fast and secure UPI payments
                          </p>
                        </div>
                      </div>

                      {/* Order Summary in Payment */}
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold mb-3">Order Summary</h4>
                        <div className="space-y-2 text-sm">
                          {cart.map((item) => (
                            <div key={item.id} className="flex justify-between">
                              <span className="text-gray-700">
                                {item.title} × {item.quantity}
                              </span>
                              <span className="font-medium">
                                <IndianRupee className="w-3 h-3 inline" />
                                {item.price * item.quantity}
                              </span>
                            </div>
                          ))}
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-semibold text-base">
                              <span>Total</span>
                              <span className="text-green-600">
                                <IndianRupee className="w-4 h-4 inline" />
                                {total.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pay Button */}
                      <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing Payment...
                          </>
                        ) : (
                          <>
                            <CreditCard className="w-5 h-5" />
                            Pay <IndianRupee className="w-4 h-4 inline" />
                            {total.toFixed(2)}
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span>
                          Your payment is secured with 256-bit SSL encryption
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
