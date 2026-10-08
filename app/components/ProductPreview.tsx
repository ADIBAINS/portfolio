"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Library, Bot, TrendingUp, GraduationCap, GitCompareArrows, Share2, Bookmark } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const TABS = [
  { id: "library", icon: Library, label: "Technique Library", body: "Browse 214 structured techniques. Filter by skin, finish, climate. Each card shows method, variables and verified wear.", stat: "214 techniques · 9 categories" },
  { id: "assistant", icon: Bot, label: "AI Research Assistant", body: "Ask in plain language. Answers cite techniques and applications — e.g. humid bridal wear analysis with variable breakdown.", stat: "Cited answers · No generic tips" },
  { id: "trends", icon: TrendingUp, label: "Trend Intelligence", body: "Track which techniques are rising across artists and regions — with evidence links, not hype. Example: 'diffused satin +38% in bridal'.", stat: "Weekly signals · Source-linked" },
  { id: "curriculum", icon: GraduationCap, label: "Curriculum Builder", body: "Drag techniques into a 12-week path. Auto-generates lesson notes, product lists and assessments per module.", stat: "12-week Bridal Mastery · draft ready" },
  { id: "compare", icon: GitCompareArrows, label: "Technique Comparison", body: "TX-214 vs TX-198 vs TX-221: method, variables, wear and failure modes side-by-side for humid outdoor briefs.", stat: "3-way compare · Photo-verified" },
  { id: "graph", icon: Share2, label: "Knowledge Graph", body: "See how one product connects 14 techniques across 6 skin contexts — and where it fails.", stat: "9 node types · Live links" },
  { id: "saved", icon: Bookmark, label: "Saved Research", body: "Collections like 'Humid Bridal Kit' and 'Hooded Eye Tests' — with notes, versions and share links for teams.", stat: "6 collections · Shared with academy" },
];

export default function ProductPreview() {
  const [tab, setTab] = useState(TABS[0].id);
  const current = TABS.find((t) => t.id === tab)!;

  return (
    <section aria-labelledby="preview-h" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Product preview"
          title={<span id="preview-h">A real product, already taking shape.</span>}
          copy="Early-stage prototype — these previews show the working direction, not final UI. Everything is being built with artists and academies."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-[24px] hairline bg-ink-2 overflow-hidden">
            <div className="flex gap-2 px-4 pt-4 overflow-x-auto border-b border-white/10 pb-4" role="tablist" aria-label="Product areas">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={t.id === tab}
                  onClick={() => setTab(t.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[12px] border transition-colors ${
                    t.id === tab ? "bg-ivory text-ink border-ivory font-medium" : "border-white/15 text-white/60 hover:text-ivory hover:border-white/30"
                  }`}
                >
                  <t.icon size={13} /> {t.label}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-[1fr_1fr] gap-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35 }}
                  className="p-7 md:p-10"
                >
                  <p className="eyebrow text-bronze">{current.label}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/70">{current.body}</p>
                  <p className="mt-5 inline-block rounded-full bg-emerald-400/10 border border-emerald-300/20 px-4 py-1.5 text-[12px] text-emerald-300">{current.stat}</p>
                </motion.div>
              </AnimatePresence>
              <div className="relative min-h-[280px] border-t md:border-t-0 md:border-l border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop"
                  alt="Professional cosmetics and brushes flat lay"
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714] via-[#1a1714]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 backdrop-blur border border-white/15 p-4 text-[12px] text-white/70">
                  Dashboard preview · {current.label} · Prototype v0.3 — data shown is a realistic sample
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
