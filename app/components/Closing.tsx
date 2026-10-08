"use client";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";
import { COMPANY } from "../site";

export function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-h" className="relative py-24 md:py-36 bg-ivory text-[#171310] overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.5]">
        <img
          src="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/70 to-ivory" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="eyebrow text-[#8a6a5a] justify-center flex">Our vision</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="vision-h" className="font-display mt-6 text-4xl md:text-6xl leading-[1.05] font-medium">
            We&apos;re building the intelligence layer for an industry built on{" "}
            <em className="italic text-[#8a6a5a]">human creativity.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 text-base md:text-lg text-[#5c5348] leading-relaxed max-w-2xl mx-auto">
            The goal isn&apos;t to replace makeup artists or educators. AI should help capture
            expertise, accelerate experimentation, and make professional knowledge easier to
            discover, compare and develop — so creativity compounds instead of disappearing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="early-access" aria-labelledby="cta-h" className="relative py-20 md:py-28 grain">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="rounded-[28px] hairline bg-gradient-to-b from-[#211b14] to-[#12100e] p-8 md:p-14 text-center relative overflow-hidden">
            <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-bronze/20 blur-[110px] rounded-full" />
            <p className="eyebrow text-bronze justify-center flex relative">Early access · Artists · Educators · Academies</p>
            <h2 id="cta-h" className="font-display relative mt-5 text-4xl md:text-6xl">
              Help shape what beauty looks like next.
            </h2>
            <p className="relative mt-4 text-white/60 max-w-xl mx-auto">
              We&apos;re onboarding a small group of professionals and academies to test the
              prototype, contribute techniques and define what gets built first.
            </p>
            <form
              className="relative mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="cta-email" className="sr-only">Email address</label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="you@studio.com"
                className="flex-1 rounded-full border border-white/20 bg-black/40 px-5 py-3.5 text-sm placeholder:text-white/35 focus:outline-none focus:border-bronze"
              />
              <button
                type="submit"
                className="rounded-full bg-ivory px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-ink hover:bg-bronze-2 transition-colors"
              >
                Join the early access
              </button>
            </form>
            <div className="relative mt-5 flex flex-wrap justify-center gap-4 text-[13px]">
              <a href="#platform" className="inline-flex items-center gap-1 text-bronze-2 hover:text-ivory transition-colors">
                Explore the technology <ArrowUpRight size={14} />
              </a>
              <span className="text-white/25">·</span>
              <a href={`mailto:${COMPANY.email}`} className="text-white/60 hover:text-ivory transition-colors">
                {COMPANY.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-[1.2fr_2fr] gap-10">
        <div>
          <p className="text-[15px] font-medium tracking-[0.28em]">{COMPANY.name}</p>
          <p className="text-[11px] tracking-[0.22em] uppercase text-white/40 mt-1">{COMPANY.tagline}</p>
          <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">{COMPANY.description}</p>
          <p className="mt-3 text-[12px] text-bronze/80">{COMPANY.status}</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Company</p>
            <ul className="mt-3 space-y-2 text-white/65">
              <li><a href="#platform" className="hover:text-ivory">Technology</a></li>
              <li><a href="#lab" className="hover:text-ivory">Research</a></li>
              <li><a href="#academies" className="hover:text-ivory">Academy</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Access</p>
            <ul className="mt-3 space-y-2 text-white/65">
              <li><a href="#early-access" className="hover:text-ivory">Early Access</a></li>
              <li><a href="#professionals" className="hover:text-ivory">Professionals</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-ivory">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Connect</p>
            <ul className="mt-3 space-y-2 text-white/65">
              <li><a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="hover:text-ivory">LinkedIn</a></li>
              <li><a href="#top" className="hover:text-ivory">Back to top ↑</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8 mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-white/35">
        <span>© {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.</span>
        <span>Prototype preview — product in active development.</span>
      </div>
    </footer>
  );
}
