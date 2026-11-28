import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { title: "Favorite quotes" };

export default function QuotesPage() {
  return (
    <main id="main" className="site-page notes">
      <Link href="/" className="back-link"><ArrowLeft size={15} aria-hidden="true" /> Home</Link>
      <header className="arrive">
        <h1>Favorite quotes</h1>
        <p>I’ll add a few favorites here soon.</p>
      </header>
    </main>
  );
}
