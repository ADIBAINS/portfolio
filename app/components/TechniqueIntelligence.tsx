"use client";
import { useState } from "react";
import { Search, GitCompareArrows, Microscope, Library, FileText, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const LIBRARY = [
  { code: "TX-214", name: "Diffused Satin Bridal Base", cat: "Base · Satin", wear: "9.2h", vars: 14 },
  { code: "TX-301", name: "Laminated Brow Sculpt", cat: "Brow · Feathered", wear: "8.7h", vars: 9 },
  { code: "TX-187", name: "Soft-Sculpt Cream Contour", cat: "Sculpt · Cream", wear: "8.4h", vars: 11 },
  { code: "TX-309", name: "Air-Matte Editorial Eye", cat: "Eye · Matte", wear: "10.1h", vars: 17 },
  { code: "TX-156", name: "Glass Skin Prep Ritual", cat: "Prep · Hydra", wear: "7.9h", vars: 8 },
];

const FEATURES = [
  { icon: Search, title: "Search techniques", copy: "Filter by skin type, finish, climate, tool or product — not just keywords." },
  { icon: GitCompareArrows, title: "Compare approaches", copy: "Side-by-side method, variables and wear data for any 2–3 techniques." },
  { icon: Microscope, title: "Analyze variations", copy: "See which single variable moves longevity, texture or finish most." },
  { icon: Library, title: "Explore tools & products", copy: "Every entry lists exact shades, brushes and substitutes tested." },
  { icon: FileText, title: "Document & generate", copy: "Turn a documented technique into structured lesson material in one click." },
  { icon: Sparkles, title: "Identify patterns", copy: "AI surfaces what top-performing techniques share across artists." },
];

export default function TechniqueIntelligence() {
  const [q, setQ] = useState("");
  const results = LIBRARY.filter((t) =>
    (t.name + t.cat + t.code).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section id="platform" aria-labelledby="platform-h" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Technique intelligence"
          title={<span id="platform-h">Turn technique into intelligence.</span>}
          copy="A living library where each technique is structured — method, tools, products, skin context, environment and results — so professionals can actually study it, not just watch it."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* searchable dashboard */}
          <Reveal>
            <div className="rounded-[24px] hairline bg-ink-2 overflow-hidden">
              <div className="p-5 border-b border-white/10">
                <label className="flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-4 py-3">
                  <Search size={16} className="text-bronze shrink-0" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Try: 'humid bridal base' or 'TX-309' or 'hooded eye'…"
                    className="w-full bg-transparent text-sm placeholder:text-white/35 focus:outline-none"
                    aria-label="Search technique library"
                  />
                </label>
              </div>
              <ul className="divide-y divide-white/8">
                {results.map((t) => (
                  <li key={t.code} className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-white/[0.03] transition-colors">
                    <div>
                      <p className="text-[11px] tracking-[0.18em] text-bronze">{t.code} · {t.cat}</p>
                      <p className="font-medium mt-0.5">{t.name}</p>
                      <p className="text-[12px] text-white/50 mt-0.5">{t.vars} variables tracked</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[12px] text-emerald-300 font-medium">{t.wear}</p>
                      <p className="text-[11px] text-white/40 mt-1">avg wear</p>
                    </div>
                  </li>
                ))}
                {results.length === 0 && (
                  <li className="px-5 py-8 text-center text-white/50 text-sm">
                    No match in this prototype sample — try &quot;bridal&quot; or &quot;TX&quot;.
                  </li>
                )}
              </ul>
              <p className="px-5 py-3 text-[11px] text-white/35 border-t border-white/10">
                Sample data from prototype library · Full platform will index thousands of documented techniques
              </p>
            </div>
          </Reveal>

          {/* feature grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-bronze/40 transition-colors">
                  <f.icon size={18} className="text-bronze" />
                  <p className="mt-3 font-medium text-[15px]">{f.title}</p>
                  <p className="text-[13px] text-white/55 mt-1.5 leading-relaxed">{f.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
