/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export default function PaymentStatus({ params }: any) {
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/payment/status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: params.transactionId }),
        });

        const data = await response.json();

        if (data.status === 'PAYMENT_SUCCESS') {
          setStatus('success');
        } else {
          setStatus('failed');
        }
      } catch (error) {
        setStatus('failed');
      }
    };

    checkStatus();
  }, [params?.transactionId]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        {status === 'loading' && (
          <>
            <Clock className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Processing Payment</h2>
            <p>Please wait while we confirm your payment...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="mb-4">Your order has been confirmed.</p>
            <p className="text-sm text-gray-600">Order ID: {orderId}</p>
            <button
              onClick={() => (window.location.href = '/')}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Continue Shopping
            </button>
          </>
        )}

        {status === 'failed' && (
          <>
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Payment Failed</h2>
            <p className="mb-4">There was an issue processing your payment.</p>
            <button
              onClick={() => (window.location.href = '/cart')}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
