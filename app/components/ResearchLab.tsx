"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, BarChart3, FlaskConical, GitCompareArrows, RefreshCcw, Lightbulb } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const STEPS = [
  {
    id: "observe",
    icon: Eye,
    label: "OBSERVE",
    title: "Document an existing technique",
    copy: "An educator films a classic smoky diffused eye. The platform breaks it into 14 steps, tools, products and skin contexts — no manual note-taking.",
    meta: "Input: 6-min demo video + product list",
  },
  {
    id: "analyze",
    icon: BarChart3,
    label: "ANALYZE",
    title: "AI maps variables & risks",
    copy: "AI flags 3 high-impact variables: primer cure time, brush density and fallout shield. It predicts creasing risk on oily lids at 72% humidity.",
    meta: "17 variables extracted · 2 risk flags",
  },
  {
    id: "experiment",
    icon: FlaskConical,
    label: "EXPERIMENT",
    title: "Test two controlled variations",
    copy: "Artist tests Variation A (60s primer cure) vs. Variation B (silicone shield + sheer first pass) on matched models, same lighting.",
    meta: "A/B · Same model profile · Same day",
  },
  {
    id: "compare",
    icon: GitCompareArrows,
    label: "COMPARE",
    title: "Side-by-side wear data",
    copy: "Hour-8 check: Variation A holds 9.1h with zero crease. Variation B cuts fallout 72% but needs 2 extra minutes. Trade-off is now visible.",
    meta: "9.1h vs 8.6h · Photo-verified",
  },
  {
    id: "refine",
    icon: RefreshCcw,
    label: "REFINE",
    title: "Lock the improved method",
    copy: "Combine both: full cure + shield. New standard method saved as TX-309 v2 with updated lesson notes and product substitutes.",
    meta: "TX-309 v2 published to academy library",
  },
  {
    id: "discover",
    icon: Lightbulb,
    label: "DISCOVER",
    title: "A new teachable technique",
    copy: "What was one artist's trick is now a named, structured, searchable technique every student can learn — with proof.",
    meta: "Pattern added to knowledge graph",
  },
];

export default function ResearchLab() {
  const [idx, setIdx] = useState(0);
  const step = STEPS[idx];

  return (
    <section id="lab" aria-labelledby="lab-h" className="py-20 md:py-28 bg-[#0d0b09] border-y border-white/8 relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[700px] bg-bronze/10 blur-[120px] rounded-full" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <SectionHeading
          eyebrow="Research lab"
          title={<span id="lab-h">From observation → experimentation → better technique.</span>}
          copy="How an artist or educator documents a technique, tests variations and uses AI to identify real improvements — with evidence, not opinion."
        />

        {/* stepper */}
        <Reveal delay={0.1}>
          <ol className="mt-10 flex gap-2 overflow-x-auto pb-2" aria-label="Workflow steps">
            {STEPS.map((s, i) => (
              <li key={s.id} className="shrink-0">
                <button
                  onClick={() => setIdx(i)}
                  aria-current={i === idx ? "step" : undefined}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[11px] tracking-[0.18em] border transition-colors ${
                    i === idx
                      ? "bg-ivory text-ink border-ivory font-semibold"
                      : i < idx
                        ? "border-bronze/50 text-bronze"
                        : "border-white/15 text-white/50 hover:text-ivory hover:border-white/30"
                  }`}
                >
                  <s.icon size={13} /> {s.label}
                </button>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-[24px] hairline bg-ink-2 p-7 md:p-10"
            >
              <p className="eyebrow text-bronze">Step {idx + 1} / 6 · {step.label}</p>
              <h3 className="font-display text-3xl md:text-4xl mt-4">{step.title}</h3>
              <p className="mt-4 text-white/65 leading-relaxed">{step.copy}</p>
              <p className="mt-5 inline-block rounded-full bg-white/8 border border-white/12 px-4 py-1.5 text-[12px] text-white/60">{step.meta}</p>
              <div className="mt-7 flex gap-3">
                <button
                  onClick={() => setIdx(Math.max(0, idx - 1))}
                  disabled={idx === 0}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] disabled:opacity-30 hover:border-bronze transition-colors"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setIdx(Math.min(STEPS.length - 1, idx + 1))}
                  disabled={idx === STEPS.length - 1}
                  className="rounded-full bg-bronze px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] text-ink font-semibold disabled:opacity-30 hover:bg-bronze-2 transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <Reveal delay={0.1}>
            <div className="h-full rounded-[24px] overflow-hidden border border-white/10 relative min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop"
                alt="Makeup palette and brushes in a studio"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Live experiment · TX-309</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {[
                    { k: "Wear A", v: "9.1h" },
                    { k: "Wear B", v: "8.6h" },
                    { k: "Fallout ↓", v: "72%" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl bg-black/55 backdrop-blur border border-white/15 px-3 py-2.5">
                      <p className="text-[11px] text-white/55">{s.k}</p>
                      <p className="font-display text-2xl text-ivory">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
