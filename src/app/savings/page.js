'use client';
import React, { useState } from 'react';
import SavingsForm from '../components/SavingsForm';

const SavingsPage = () => {
  // Utility function to format Naira amounts
  function formatNaira(amount) {
    if (amount >= 1_000_000) return `₦${(amount / 1_000_000).toFixed(2)}M`;
    if (amount >= 1_000) return `₦${(amount / 1_000).toFixed(2)}K`;
    return `₦${Number(amount).toLocaleString()}`;
  }

  const [message, setMessage] = useState('');

  const handleDeposit = async (depositData) => {
    try {
      const response = await fetch('/api/savings/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(depositData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Deposit successful!');
      } else {
        setMessage(result.error || 'Deposit failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-orange-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-emerald-200 p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-emerald-700 text-center tracking-tight">
          Savings Management
        </h1>
        {message && (
          <p
            className={`mb-4 text-center font-semibold ${
              message.includes('successful')
                ? 'text-emerald-600'
                : 'text-orange-600'
            }`}
          >
            {message}
          </p>
        )}
        <div className="mb-6 text-black">
          <SavingsForm onDeposit={handleDeposit} formatNaira={formatNaira} />
        </div>
        <div className="text-center text-sm text-gray-400 mt-4">
          <span className="inline-block px-2 py-1 rounded bg-orange-100 text-orange-700 font-medium">
            Nimatallahi Muslim Cooperative Society
          </span>
        </div>
      </div>
    </div>
  );
};

export default SavingsPage;