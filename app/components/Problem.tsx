"use client";
import { motion } from "framer-motion";
import { Instagram, Youtube, GraduationCap, User, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const SOURCES = [
  { icon: GraduationCap, label: "Classrooms", detail: "Instructor demo once, then gone" },
  { icon: Instagram, label: "Social feeds", detail: "30s clips, no method notes" },
  { icon: Youtube, label: "Video tutorials", detail: "Hours long, unstructured" },
  { icon: User, label: "Individual experience", detail: "Locked in one artist's head" },
  { icon: MessageCircle, label: "Peer chat", detail: "Tips scattered, untested" },
];

export default function Problem() {
  return (
    <section aria-labelledby="problem-h" className="relative bg-ivory text-[#171310] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          dark
          eyebrow="The problem"
          title={<span id="problem-h">Beauty evolves faster than traditional education.</span>}
          copy="Professional techniques evolve daily — through artists, academies, new products, experimentation and trends. But that knowledge stays fragmented across classrooms, social media, videos and personal experience. Nobody can search it, compare it, or build on it."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
          {/* fragmented cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {SOURCES.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-2xl hairline-dark bg-white p-5 shadow-[0_10px_40px_-20px_rgba(23,19,16,0.25)]">
                  <s.icon size={20} className="text-[#8a6a5a]" />
                  <p className="mt-3 font-medium">{s.label}</p>
                  <p className="text-sm text-[#7a6f62] mt-1">{s.detail}</p>
                  <p className="mt-3 inline-block rounded-full bg-[#f2ebe0] px-2.5 py-1 text-[11px] tracking-wide text-[#8a6a5a]">
                    FRAGMENTED
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="sm:col-span-2">
              <p className="text-center text-[12px] uppercase tracking-[0.24em] text-[#8a6a5a]">
                ↓ 5 scattered sources · 0 shared structure ↓
              </p>
            </Reveal>
          </div>

          {/* converging system */}
          <Reveal delay={0.15}>
            <div className="relative rounded-[24px] bg-[#12100e] text-ivory p-7 md:p-9 overflow-hidden grain">
              <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[500px] bg-bronze/20 blur-[100px] rounded-full" />
              <p className="eyebrow text-bronze">One intelligent system</p>
              <h3 className="font-display text-3xl md:text-4xl mt-3">Fragmented knowledge → structured intelligence</h3>
              <ul className="mt-6 space-y-3 text-[14px]">
                {[
                  "Every technique broken into tools, products, method, variables & results",
                  "Variations compared side-by-side, not guessed from comments",
                  "Trends traced to real applications, not viral clips",
                  "Instructor expertise preserved as searchable curriculum",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-white/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                    {t}
                  </li>
                ))}
              </ul>
              {/* animated convergence */}
              <div className="mt-7 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="text-[12px] text-white/60">Ingesting 5 sources…</span>
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      className="h-2 w-8 rounded-full bg-bronze"
                      animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
                <span className="text-[12px] text-emerald-300 font-medium">Structured ✓</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
