"use client";  
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        // Store token and redirect
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard/member"); // Redirect to member dashboard
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };
// ...existing code...
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl mb-4 text-black">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-emerald-400 focus:border-orange-400 focus:ring-emerald-200 p-2 w-full rounded bg-amber-50 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-emerald-400 focus:border-orange-400 focus:ring-emerald-200 p-2 w-full rounded bg-amber-50 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-orange-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
// ...existing code...
 
}