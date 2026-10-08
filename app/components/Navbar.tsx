"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-4"
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-bronze/40 bg-ink-2 font-display text-lg text-bronze">
            L
          </span>
          <span className="leading-none">
            <span className="block text-[15px] font-medium tracking-[0.28em]">
              {COMPANY.name}
            </span>
            <span className="block text-[10px] tracking-[0.22em] text-white/50 uppercase mt-1">
              {COMPANY.tagline}
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.18em] uppercase text-white/60">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ivory transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] tracking-wide text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Prototype in development
          </span>
          <a
            href="#early-access"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ivory px-4 py-2 text-[12px] font-medium tracking-[0.12em] uppercase text-ink hover:bg-bronze-2 transition-colors"
          >
            Early access
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
