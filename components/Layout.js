import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-indigo-600 text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/"><a className="text-2xl font-bold">Rentify</a></Link>
          <nav className="space-x-4">
            <Link href="/listings"><a>Listings</a></Link>
            <Link href="/add"><a>Post Ad</a></Link>
            <Link href="/profile"><a>Profile</a></Link>
            <Link href="/auth"><a className="ml-4 bg-white text-indigo-600 px-3 py-1 rounded">Sign in</a></Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto p-6">{children}</main>
    </div>
  );
}
