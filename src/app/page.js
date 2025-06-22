'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-100 via-white to-orange-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow border-b border-emerald-200">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-emerald-700 tracking-tight">
            Nimatallahi Muslim Cooperative
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-emerald-700 font-semibold hover:text-orange-600 transition">Login</Link>
          <Link href="/register" className="text-orange-600 font-semibold hover:text-emerald-700 transition">Sign Up</Link>
          <Link href="/loans" className="text-emerald-700 font-semibold hover:text-orange-600 transition">Loan</Link>
          <Link href="/savings" className="text-orange-600 font-semibold hover:text-emerald-700 transition">Savings</Link>
          <Link href="#" className="text-emerald-700 font-semibold border border-emerald-200 rounded px-3 py-1 ml-2 bg-amber-50">Member ID</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-emerald-100 via-white to-orange-50">
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">
            Welcome to Nimatallahi Muslim Cooperative Society
          </h1>
          <p className="text-lg text-orange-700 mb-6">
            Empowering our members with interest-free loans, secure savings, and a supportive community. Join us and take control of your financial future.
          </p>
          <div className="flex space-x-4">
            <Link href="/register" className="bg-emerald-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
              Get Started
            </Link>
            <Link href="/login" className="bg-orange-100 hover:bg-emerald-100 text-emerald-700 font-semibold px-6 py-3 rounded-lg border border-emerald-200 transition">
              Member Login
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Cooperative"
            className="rounded-2xl shadow-lg border-4 border-emerald-100 w-full max-w-md"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-emerald-400 p-6 flex flex-col items-center">
          <div className="bg-emerald-100 rounded-full p-4 mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z" />
              <path d="M5 20h14a2 2 0 002-2v-7a2 2 0 00-2-2h-1V7a5 5 0 00-10 0v2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Secure Savings</h3>
          <p className="text-orange-700 text-center">Save monthly with peace of mind and watch your funds grow in a safe, interest-free environment.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-orange-400 p-6 flex flex-col items-center">
          <div className="bg-orange-100 rounded-full p-4 mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-orange-600 mb-2">Interest-Free Loans</h3>
          <p className="text-emerald-700 text-center">Access non-interest loans with flexible repayment plans and transparent terms.</p>
        </div>
        {/* Deposit Card */}
        <Link href="/savings" className="bg-white rounded-xl shadow-lg border-t-4 border-emerald-400 p-6 flex flex-col items-center hover:shadow-xl transition">
          <div className="bg-emerald-100 rounded-full p-4 mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 20V10m0 0l-3 3m3-3l3 3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Deposit</h3>
          <p className="text-orange-700 text-center">Make a deposit to your cooperative savings account.</p>
        </Link>
        {/* Withdrawal Card */}
        <Link href="/withdrawal" className="bg-white rounded-xl shadow-lg border-t-4 border-orange-400 p-6 flex flex-col items-center hover:shadow-xl transition">
          <div className="bg-orange-100 rounded-full p-4 mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 4v10m0 0l-3-3m3 3l3-3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-orange-600 mb-2">Withdrawal</h3>
          <p className="text-emerald-700 text-center">Withdraw funds from your cooperative savings account.</p>
        </Link>
        {/* Member Support Card */}
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-emerald-400 p-6 flex flex-col items-center">
          <div className="bg-emerald-100 rounded-full p-4 mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 9V7a5 5 0 00-10 0v2" />
              <rect x="5" y="11" width="14" height="10" rx="2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Member Support</h3>
          <p className="text-orange-700 text-center">Enjoy dedicated support and a vibrant community focused on your financial well-being.</p>
        </div>
      </section>

      {/* Segments Section */}
      <section className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 rounded-xl p-8 shadow flex flex-col justify-center">
          <h4 className="text-emerald-700 text-2xl font-bold mb-2">How to Join</h4>
          <ul className="list-disc list-inside text-orange-700 space-y-1">
            <li>Sign up as a new member</li>
            <li>Verify your details</li>
            <li>Start saving and enjoy our benefits</li>
          </ul>
        </div>
        <div className="bg-orange-50 rounded-xl p-8 shadow flex flex-col justify-center">
          <h4 className="text-orange-600 text-2xl font-bold mb-2">Why Choose Us?</h4>
          <ul className="list-disc list-inside text-emerald-700 space-y-1">
            <li>Shariah-compliant, non-interest operations</li>
            <li>Transparent and member-focused</li>
            <li>Easy access to loans and savings</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-6 mt-auto">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-2 md:mb-0 font-semibold">
            &copy; {new Date().getFullYear()} Nimatallahi Muslim Cooperative Society
          </div>
        </div>
      </footer>
    </div>
  );
}