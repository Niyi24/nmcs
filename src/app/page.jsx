'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      router.replace('/dashboard');
    }
  }, [status, session, router]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-100 via-white to-orange-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16 py-2 md:py-0">
            <div className="flex-shrink-0 mb-2 md:mb-0">
              <span className="text-xl font-extrabold text-emerald-700">Nimatallahi Muslim Cooperative</span>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <Link href="/login" className="text-emerald-700 font-semibold hover:text-orange-600 transition text-center">
                Login
              </Link>
              <Link href="/register" className="text-orange-600 font-semibold hover:text-emerald-700 transition text-center">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-8 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4 text-center">
          Welcome to Nimatallahi Muslim Cooperative Society
        </h1>
        <p className="text-base sm:text-lg text-orange-700 mb-8 text-center max-w-2xl">
          Empowering our members with interest-free loans, secure savings, and a supportive community. Join us and take control of your financial future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-xs sm:max-w-none justify-center">
          <Link href="/register" className="bg-emerald-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow transition text-center">
            Get Started
          </Link>
          <Link href="/login" className="bg-orange-100 hover:bg-emerald-100 text-emerald-700 font-semibold px-6 py-3 rounded-lg border border-emerald-200 transition text-center">
            Member Login
          </Link>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-8 w-full max-w-md text-center">
          <h2 className="text-lg sm:text-xl font-bold text-emerald-700 mb-2">Our Address</h2>
          <p className="text-orange-700 text-sm sm:text-base">
            123 Nimatallahi Street, Central District, Lagos, Nigeria
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 w-full max-w-md text-center">
          <h2 className="text-lg sm:text-xl font-bold text-emerald-700 mb-4">Contact Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Phone */}
            <a href="tel:+2348012345678" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group min-w-[70px]">
              <svg className="w-8 h-8 text-emerald-600 group-hover:text-orange-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm14-14a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2h2zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z" />
              </svg>
              <span className="mt-2 text-xs sm:text-sm text-emerald-700 group-hover:text-orange-600 break-all">+234 801 234 5678</span>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group min-w-[70px]">
              <svg className="w-8 h-8 text-green-500 group-hover:text-orange-600 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A12 12 0 003.48 20.52l-1.32 4.84a1 1 0 001.22 1.22l4.84-1.32A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 1110-10 10 10 0 01-10 10zm4.29-7.71l-1.13-.33a1 1 0 00-1 .26l-.54.54a8.13 8.13 0 01-3.54-3.54l.54-.54a1 1 0 00.26-1l-.33-1.13a1 1 0 00-1-.7H8.09a1 1 0 00-1 1A7 7 0 0016 16a1 1 0 001-1v-1.13a1 1 0 00-.7-1z"/>
              </svg>
              <span className="mt-2 text-xs sm:text-sm text-green-700 group-hover:text-orange-600 break-all">WhatsApp</span>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/nimatallahicoop" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group min-w-[70px]">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-orange-600 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.2v-2.9h2.2V9.5c0-2.17 1.3-3.37 3.3-3.37.96 0 1.97.17 1.97.17v2.17h-1.11c-1.1 0-1.44.68-1.44 1.38v1.65h2.45l-.39 2.9h-2.06v7.05A10 10 0 0022 12z"/>
              </svg>
              <span className="mt-2 text-xs sm:text-sm text-blue-700 group-hover:text-orange-600 break-all">Facebook</span>
            </a>
          </div>
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