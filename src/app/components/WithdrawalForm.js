import { useState } from "react";

export default function WithdrawalForm() {
  const [amount, setAmount] = useState("");
  const [accountId, setAccountId] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const withdrawalData = {
      amount,
      accountId,
      status: "pending",
    };

    try {
      const response = await fetch("/api/savings/withdrawal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(withdrawalData),
      });

      if (!response.ok) {
        throw new Error("Failed to process withdrawal");
      }

      const result = await response.json();
      setStatus(result.message);
      setAmount("");
      setAccountId("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold">Withdrawal Form</h2>
      {error && <p className="text-red-500">{error}</p>}
      {status && <p className="text-green-500">{status}</p>}
      <div>
        <label htmlFor="amount" className="block text-sm font-medium">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label htmlFor="accountId" className="block text-sm font-medium">
          Account ID
        </label>
        <input
          type="text"
          id="accountId"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit Withdrawal
      </button>
    </form>
  );
}