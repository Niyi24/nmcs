import { useState } from "react";

const SavingsForm = () => {
  const [amount, setAmount] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderAccount, setSenderAccount] = useState("");
  const [senderBank, setSenderBank] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const depositData = {
      amount,
      senderName,
      senderAccount,
      senderBank,
      status,
    };

    try {
      const response = await fetch("/api/savings/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(depositData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Deposit successful!");
        // Reset form fields
        setAmount("");
        setSenderName("");
        setSenderAccount("");
        setSenderBank("");
      } else {
        alert(result.message || "Deposit failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <label htmlFor="senderName" className="block text-sm font-medium">
          Sender Name
        </label>
        <input
          type="text"
          id="senderName"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label htmlFor="senderAccount" className="block text-sm font-medium">
          Sender Account
        </label>
        <input
          type="text"
          id="senderAccount"
          value={senderAccount}
          onChange={(e) => setSenderAccount(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label htmlFor="senderBank" className="block text-sm font-medium">
          Sender Bank
        </label>
        <input
          type="text"
          id="senderBank"
          value={senderBank}
          onChange={(e) => setSenderBank(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit Deposit
      </button>
    </form>
  );
};

export default SavingsForm;