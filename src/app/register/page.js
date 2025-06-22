'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    memberId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    nin: "",
    nepaBill: "",
    profilePicture: null,
    password: "",
    bvn: "",
    nextOfKin: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      router.push("/login");
    } else {
      // Handle error
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-emerald-100 via-emerald-50 to-amber-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-emerald-200 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-emerald-700 text-center tracking-tight">
          Register
        </h2>
        <input
          type="text"
          name="memberId"
          placeholder="Member ID"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="date"
          name="dateOfBirth"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 text-emerald-700"
        />
        <input
          type="text"
          name="nin"
          placeholder="NIN"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="text"
          name="nepaBill"
          placeholder="NEPA Bill"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="file"
          name="profilePicture"
          onChange={handleFileChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-white text-emerald-700"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="text"
          name="BVN"
          placeholder="BVN"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-4 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <input
          type="text"
          name="nextOfKin"
          placeholder="Next of Kin"
          onChange={handleChange}
          required
          className="border border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg p-3 mb-6 w-full bg-amber-50 placeholder-emerald-400 text-black"
        />
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold p-3 rounded-lg w-full shadow-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}