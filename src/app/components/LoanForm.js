import { useState } from "react";

const LoanForm = () => {
  const [loanData, setLoanData] = useState({
    amount: "",
    repaymentDate: "",
    repaymentPeriod: "",
    occupation: "",
    guarantorDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/loans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loanData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Loan application submitted successfully!");
      } else {
        alert(result.message || "Failed to submit loan application.");
      }
    } catch (error) {
      console.error("Error submitting loan application:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="amount" className="block text-sm font-medium">
          Loan Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={loanData.amount}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label htmlFor="repaymentDate" className="block text-sm font-medium">
          Repayment Date
        </label>
        <input
          type="date"
          name="repaymentDate"
          id="repaymentDate"
          value={loanData.repaymentDate}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label htmlFor="repaymentPeriod" className="block text-sm font-medium">
          Repayment Period
        </label>
        <select
          name="repaymentPeriod"
          id="repaymentPeriod"
          value={loanData.repaymentPeriod}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select</option>
          <option value="10 months">10 months</option>
          <option value="1 year">1 year</option>
        </select>
      </div>
      <div>
        <label htmlFor="occupation" className="block text-sm font-medium">
          Occupation
        </label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          value={loanData.occupation}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label htmlFor="guarantorDetails" className="block text-sm font-medium">
          Guarantor Details
        </label>
        <textarea
          name="guarantorDetails"
          id="guarantorDetails"
          value={loanData.guarantorDetails}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit Loan Application
      </button>
    </form>
  );
};

export default LoanForm;