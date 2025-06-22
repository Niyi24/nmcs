import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/admin/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const handleApprove = async (transactionId) => {
    // Logic to approve the transaction
  };

  const handleReject = async (transactionId) => {
    // Logic to reject the transaction
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Dashboard>
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {loading ? (
          <p>Loading transactions...</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border-b p-2">Transaction ID</th>
                <th className="border-b p-2">Amount</th>
                <th className="border-b p-2">Status</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border-b p-2">{transaction.id}</td>
                  <td className="border-b p-2">{transaction.amount}</td>
                  <td className="border-b p-2">{transaction.status}</td>
                  <td className="border-b p-2">
                    <button onClick={() => handleApprove(transaction.id)} className="text-green-500">Approve</button>
                    <button onClick={() => handleReject(transaction.id)} className="text-red-500 ml-2">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Dashboard>
    </div>
  );
};

export default AdminDashboard;