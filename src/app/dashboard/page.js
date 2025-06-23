'use client';
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session || !session.user?.id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-50">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Access Denied</h2>
          <p className="mb-4 text-orange-700">You must be logged in to view this page.</p>
          <Link href="/login" className="text-emerald-600 underline">Go to Login</Link>
        </div>
      </div>
    );
  }

  const userId = session.user.id;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-100 via-white to-orange-50">
      {/* Responsive Navbar */}
      <nav className="w-full bg-white shadow border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-extrabold text-emerald-700">Nimatallahi Muslim Cooperative</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <Link href={`/profile?id=${userId}`} className="text-emerald-700 font-semibold hover:text-orange-600 transition">Profile</Link>
              <Link href="/dashboard" className="text-orange-600 font-semibold hover:text-emerald-700 transition">Dashboard</Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="text-emerald-700 font-semibold hover:text-orange-600 transition"
              >
                Logout
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-emerald-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4">
              <Link
                href={`/profile?id=${userId}`}
                className="block px-4 py-2 text-emerald-700 font-semibold hover:text-orange-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-orange-600 font-semibold hover:text-emerald-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  signOut({ callbackUrl: "/login" });
                }}
                className="block w-full text-left px-4 py-2 text-emerald-700 font-semibold hover:text-orange-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Cards Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-2 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          <Link href={`/deposit?id=${userId}`} className="bg-white rounded-xl shadow-lg border-t-4 border-emerald-400 p-6 flex flex-col items-center hover:shadow-xl transition w-full">
            <div className="bg-emerald-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 20V10m0 0l-3 3m3-3l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-700 mb-2">Deposit</h3>
            <p className="text-orange-700 text-center">Make a deposit to your cooperative savings account.</p>
          </Link>
          <Link href={`/withdrawal?id=${userId}`} className="bg-white rounded-xl shadow-lg border-t-4 border-orange-400 p-6 flex flex-col items-center hover:shadow-xl transition w-full">
            <div className="bg-orange-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 4v10m0 0l-3-3m3 3l3-3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">Withdrawal</h3>
            <p className="text-emerald-700 text-center">Withdraw funds from your cooperative savings account.</p>
          </Link>
          <Link href={`/loans?id=${userId}`} className="bg-white rounded-xl shadow-lg border-t-4 border-emerald-400 p-6 flex flex-col items-center hover:shadow-xl transition w-full">
            <div className="bg-emerald-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-700 mb-2">Loan</h3>
            <p className="text-orange-700 text-center">Apply for a non-interest cooperative loan.</p>
          </Link>
          <Link href={`/minutes?id=${userId}`} className="bg-white rounded-xl shadow-lg border-t-4 border-orange-400 p-6 flex flex-col items-center hover:shadow-xl transition w-full">
            <div className="bg-orange-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z" />
                <path d="M5 20h14a2 2 0 002-2v-7a2 2 0 00-2-2h-1V7a5 5 0 00-10 0v2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">Minutes</h3>
            <p className="text-emerald-700 text-center">View monthly minutes deductions.</p>
          </Link>
          <Link href={`/transactions?id=${userId}`} className="bg-white rounded-xl shadow-lg border-t-4 border-emerald-400 p-6 flex flex-col items-center hover:shadow-xl transition w-full">
            <div className="bg-emerald-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 9V7a5 5 0 00-10 0v2" />
                <rect x="5" y="11" width="14" height="10" rx="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-700 mb-2">Transaction History</h3>
            <p className="text-orange-700 text-center">See all your cooperative transactions.</p>
          </Link>
          <Link href={`/profile?id=${userId}`} className="bg-white rounded-xl shadow-lg border-t-4 border-orange-400 p-6 flex flex-col items-center hover:shadow-xl transition w-full">
            <div className="bg-orange-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">User</h3>
            <p className="text-emerald-700 text-center">View and update your profile information.</p>
          </Link>
        </div>
      </main>

      {/* Centered Footer */}
      <footer className="bg-emerald-700 text-white py-6 mt-auto">
        <div className="container mx-auto flex justify-center">
          <div className="font-semibold text-center w-full">
            &copy; {new Date().getFullYear()} Nimatallahi Muslim Cooperative Society
          </div>
        </div>
      </footer>
    </div>
  );
}