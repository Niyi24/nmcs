import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch('/api/members/me'); // Endpoint to get current user data
      const data = await res.json();
      if (data.error) {
        router.push('/login'); // Redirect to login if not authenticated
      } else {
        setUserData(data);
      }
    };

    const fetchTransactions = async () => {
      const res = await fetch('/api/admin/transactions'); // Endpoint to get transactions
      const data = await res.json();
      setTransactions(data);
    };

    fetchUserData();
    fetchTransactions();
  }, [router]);

  return (
    <div className="p-4">
      {userData && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome, {userData.firstName}</h1>
          <p>Email: {userData.email}</p>
          <p>Member ID: {userData.memberId}</p>
        </div>
      )}
      <h2 className="text-xl font-semibold">Pending Transactions</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Transaction ID</th>
            <th className="border border-gray-300 p-2">Amount</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border border-gray-300 p-2">{transaction.id}</td>
              <td className="border border-gray-300 p-2">{transaction.amount}</td>
              <td className="border border-gray-300 p-2">{transaction.status}</td>
              <td className="border border-gray-300 p-2">{new Date(transaction.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;