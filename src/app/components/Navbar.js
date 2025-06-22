import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Nimatallahi Coop</div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/login" className="text-white hover:underline">
            Login
          </Link>
          <Link href="/register" className="text-white hover:underline">
            Register
          </Link>
          <Link href="/savings" className="text-white hover:underline">
            Savings
          </Link>
          <Link href="/loans" className="text-white hover:underline">
            Loans
          </Link>
          <Link href="/profile" className="text-white hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}