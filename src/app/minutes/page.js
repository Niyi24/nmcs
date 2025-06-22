'use client';
import React, { useEffect, useState } from 'react';

export default function MinutesPage() {
  const [minutes, setMinutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMinutes = async () => {
      try {
        const response = await fetch('/api/minutes');
        const data = await response.json();
        setMinutes(data);
      } catch (error) {
        setMinutes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMinutes();
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-emerald-700">Monthly Minutes Deductions</h1>
      {loading ? (
        <div className="text-emerald-600">Loading...</div>
      ) : minutes.length === 0 ? (
        <div className="text-orange-600">No minutes deductions found.</div>
      ) : (
        <table className="min-w-full bg-white border border-emerald-200 rounded-lg shadow">
          <thead className="bg-emerald-100">
            <tr>
              <th className="py-2 px-4 border-b border-emerald-200 text-emerald-700">Member ID</th>
              <th className="py-2 px-4 border-b border-emerald-200 text-orange-600">Amount</th>
              <th className="py-2 px-4 border-b border-emerald-200 text-emerald-700">Date</th>
              <th className="py-2 px-4 border-b border-emerald-200 text-orange-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {minutes.map((minute) => (
              <tr key={minute._id} className="hover:bg-emerald-50">
                <td className="py-2 px-4 border-b border-emerald-100 text-emerald-700">{minute.memberId}</td>
                <td className="py-2 px-4 border-b border-emerald-100 text-orange-600">₦{minute.amount}</td>
                <td className="py-2 px-4 border-b border-emerald-100 text-emerald-700">
                  {new Date(minute.date).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b border-emerald-100 text-orange-600">{minute.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}