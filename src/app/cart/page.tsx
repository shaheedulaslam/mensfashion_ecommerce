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
  Building,
  Wallet,
  Smartphone,
  QrCode,
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

type PaymentMethod = 'razorpay' | 'phonepe' | 'googlepay';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('phonepe');
  const router = useRouter(); 
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  const message = `🛒 Order from 90s Shop:%0A${cart
    .map((c) => `${c.title} - ₹${c.price}`)
    .join("%0A")}%0A----------------%0ATotal: ₹${total}`;
  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${message}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  // PhonePe Payment Integration
  const handlePay = async () => {
    try {
      const result = await initiatePayment(total);
      if (result) {
        router.push(result.redirectUrl); // Redirect to status check page
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  // Main Payment Handler
  const handlePayment = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert("Please fill in all required customer details");
      return;
    }

    setIsProcessing(true);

    try {
      switch (selectedPaymentMethod) {
        case 'phonepe':
          await handlePay();
          break;
      }
    } catch (error) {
      console.error('Payment error:', error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8 text-black" />
          <h2 className="text-4xl font-extrabold tracking-tight">Your Cart</h2>
        </div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
            <a
              href="/"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-black text-white font-medium hover:bg-neutral-800 transition-colors"
            >
              Continue Shopping
            </a>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-5">
                    <div className="relative w-24 h-24 overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="font-medium">₹{item.price}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.tags.join(" • ")}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Checkout Box */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold">Total</span>
                <span className="text-2xl font-bold">₹{total}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowPaymentSection(true)}
                  className="flex-1 flex items-center justify-center gap-3 bg-black text-white py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <CreditCard className="w-5 h-5" />
                  Secure Checkout
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Checkout via WhatsApp
                </a>
                <button
                  onClick={clearCart}
                  className="px-6 py-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </motion.div>

            {/* Secure Payment Section */}
            <AnimatePresence>
              {showPaymentSection && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white p-8 rounded-xl shadow-lg border-2 border-black"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-2xl font-bold">Secure Payment</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Customer Information */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Customer Information
                      </h4>

                      <div className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={customerInfo.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          required
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          required
                        />
                        <input
                          type="text"
                          name="address"
                          placeholder="Delivery Address"
                          value={customerInfo.address}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">Choose Payment Method</h4>

                      {/* Payment Method Selection */}
                      <div className="grid grid-cols-1 gap-3">                       

                        {/* PhonePe Option */}
                        <div 
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedPaymentMethod === 'phonepe' 
                              ? 'border-[#5F259E] bg-[#5F259E] text-white' 
                              : 'border-gray-300 hover:border-[#5F259E]'
                          }`}
                          onClick={() => setSelectedPaymentMethod('phonepe')}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Smartphone className="w-5 h-5" />
                              <span className="font-semibold">PhonePe UPI</span>
                            </div>
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-[#5F259E] rounded-full"></div>
                            </div>
                          </div>
                          <p className="text-sm mt-2 opacity-80">
                            Fast UPI payments with PhonePe
                          </p>
                        </div>
                      </div>

                      {/* Pay Button */}
                      <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard className="w-5 h-5" />
                            Pay ₹{total} with {
                              selectedPaymentMethod === 'razorpay' ? 'Razorpay' :
                              selectedPaymentMethod === 'phonepe' ? 'PhonePe' : 'Google Pay'
                            }
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Shield className="w-4 h-4" />
                        <span>
                          Your payment is secured with 256-bit SSL encryption
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Supported Payment Methods */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="text-sm font-semibold text-gray-600 mb-4">
                      All Supported Payment Methods
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {/* Your existing payment method icons */}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
}