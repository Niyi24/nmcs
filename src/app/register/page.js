'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/login");
      } else {
        setError(data.error || "Registration failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">Register</h2>
        {error && (
          <div className="text-red-600 mb-2" aria-live="polite">
            {error}
          </div>
        )}
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded text-black"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded text-black"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-emerald-700 text-white py-2 rounded font-semibold"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}