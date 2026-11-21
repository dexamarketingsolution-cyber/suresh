import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-gradient font-display text-7xl font-extrabold">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-slate-400">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-electric to-violet-brand px-6 py-3 font-semibold text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
