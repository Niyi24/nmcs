'use client';
import React, { useEffect, useState } from 'react';

const LoansPage = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch('/api/loans');
        const data = await response.json();
        setLoans(data);
      } catch (error) {
        console.error('Error fetching loans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) {
    return <div className="text-emerald-600">Loading...</div>;
  }

  return (
    <div className="p-8 bg-amber-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-emerald-700">Loans</h1>
      <table className="min-w-full bg-white border border-emerald-200 rounded-lg shadow">
        <thead className="bg-emerald-100">
          <tr>
            <th className="border-b-2 border-emerald-200 px-4 py-2 text-emerald-700">Loan ID</th>
            <th className="border-b-2 border-emerald-200 px-4 py-2 text-orange-600">Amount</th>
            <th className="border-b-2 border-emerald-200 px-4 py-2 text-emerald-700">Non-Interest</th>
            <th className="border-b-2 border-emerald-200 px-4 py-2 text-orange-600">Repayment Date</th>
            <th className="border-b-2 border-emerald-200 px-4 py-2 text-emerald-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="hover:bg-orange-50">
              <td className="border-b border-emerald-100 px-4 py-2 text-emerald-700">{loan.id}</td>
              <td className="border-b border-emerald-100 px-4 py-2 text-orange-600">{loan.amount}</td>
              <td className="border-b border-emerald-100 px-4 py-2 text-emerald-700">{loan.nonInterest ? 'Yes' : 'No'}</td>
              <td className="border-b border-emerald-100 px-4 py-2 text-orange-600">{loan.repaymentDate}</td>
              <td className="border-b border-emerald-100 px-4 py-2 text-emerald-700">{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoansPage;