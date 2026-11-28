import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";

export const metadata: Metadata = { title: "Notes" };

export default function NotesPage() {
  return (
    <main id="main" className="site-page notes">
      <Link href="/" className="back-link"><ArrowLeft size={15} aria-hidden="true" /> Home</Link>
      <header className="arrive">
        <h1>How I build</h1>
        <p>Three notes from my backend projects.</p>
      </header>
      <section aria-labelledby="relevance">
        <h2 id="relevance">Make search results explainable.</h2>
        <p>CampusMatch filters internships by things that can rule them out, such as eligibility and location. It combines text and semantic ranking for the rest, then shows excerpts from employer listings when comparing results.</p>
      </section>
      <section aria-labelledby="recovery">
        <h2 id="recovery">Think through the retry path.</h2>
        <p>In TaskQueue, a worker can disappear halfway through a job. Renewable locks let the scheduler detect abandoned work and retry it. Jobs that exhaust their retries stay available for inspection in a dead-letter queue.</p>
      </section>
      <section aria-labelledby="data">
        <h2 id="data">Keep less data when you can.</h2>
        <p>Uzip’s analytics pipeline removes raw IP addresses before recording click events in ClickHouse. It can still report traffic for each customer’s links.</p>
      </section>
      <footer><a className="back-link" href={profile.github}>Find the code on GitHub <ArrowUpRight size={14} aria-hidden="true" /></a></footer>
    </main>
  );
}
