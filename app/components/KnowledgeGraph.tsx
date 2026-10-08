"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./ui";

const NODES = [
  { id: "techniques", label: "TECHNIQUES", x: 50, y: 38, big: true, detail: "214 structured techniques" },
  { id: "products", label: "PRODUCTS", x: 22, y: 22, detail: "1.4k products mapped" },
  { id: "tools", label: "TOOLS", x: 78, y: 22, detail: "320 tools & brushes" },
  { id: "skin", label: "SKIN TYPES", x: 14, y: 58, detail: "28 skin contexts" },
  { id: "methods", label: "METHODS", x: 86, y: 58, detail: "96 application methods" },
  { id: "env", label: "ENVIRONMENTS", x: 30, y: 80, detail: "humidity, light, heat…" },
  { id: "results", label: "RESULTS", x: 70, y: 80, detail: "wear, finish, photo-proof" },
  { id: "artists", label: "ARTISTS", x: 50, y: 12, detail: "contributing educators" },
  { id: "education", label: "EDUCATION", x: 50, y: 64, detail: "curricula & lessons" },
];

const LINKS: [string, string][] = [
  ["techniques", "products"],
  ["techniques", "tools"],
  ["techniques", "skin"],
  ["techniques", "methods"],
  ["techniques", "env"],
  ["techniques", "results"],
  ["techniques", "artists"],
  ["techniques", "education"],
  ["products", "skin"],
  ["tools", "methods"],
  ["env", "results"],
  ["artists", "education"],
];

export default function KnowledgeGraph() {
  const [active, setActive] = useState("techniques");
  const get = (id: string) => NODES.find((n) => n.id === id)!;
  const activeNode = get(active);

  return (
    <section aria-labelledby="kg-h" className="py-20 md:py-28 bg-[#0d0b09] border-y border-white/8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="The knowledge graph"
          title={<span id="kg-h">One intelligent layer for the whole industry.</span>}
          copy="Techniques, products, tools, skin, methods, environments, results, artists and education — connected, so every question has context. Select a node to explore."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-[24px] hairline bg-ink-2 p-4 md:p-8 grid lg:grid-cols-[1.4fr_0.6fr] gap-6">
            <div className="relative rounded-2xl bg-black/50 border border-white/10 overflow-hidden min-h-[380px]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" role="img" aria-label="Knowledge graph connecting techniques, products, tools, skin, methods, environments, results, artists and education">
                {LINKS.map(([a, b]) => {
                  const A = get(a), B = get(b);
                  const hot = a === active || b === active;
                  return (
                    <line
                      key={a + b}
                      x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                      stroke={hot ? "#c9a87c" : "rgba(255,255,255,0.14)"}
                      strokeWidth={hot ? 0.5 : 0.3}
                    />
                  );
                })}
              </svg>
              {NODES.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setActive(n.id)}
                  aria-pressed={n.id === active}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <motion.span
                    animate={n.id === active ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 1.6, repeat: n.id === active ? Infinity : 0 }}
                    className={`block rounded-full px-3 py-1.5 text-[10px] tracking-[0.16em] border backdrop-blur transition-colors ${
                      n.id === active
                        ? "bg-bronze text-ink border-bronze font-semibold"
                        : n.big
                          ? "bg-ivory/10 text-ivory border-white/25 hover:border-bronze"
                          : "bg-black/60 text-white/70 border-white/20 hover:border-bronze hover:text-ivory"
                    }`}
                  >
                    {n.label}
                  </motion.span>
                </button>
              ))}
              <p className="absolute bottom-3 left-4 text-[11px] text-white/40">Prototype visualization · Real graph in development</p>
            </div>

            <div className="rounded-2xl border border-bronze/25 bg-bronze/[0.06] p-6">
              <p className="eyebrow text-bronze">{activeNode.label}</p>
              <p className="font-display text-3xl mt-3">{activeNode.detail}</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                {active === "techniques" && "Each technique links to every product, tool, skin context and environment it was tested in — so comparisons are grounded."}
                {active === "products" && "See which products appear across top-performing techniques — and which fail in humidity, flash or on textured skin."}
                {active === "tools" && "Brush density, sponge dampness, spatula cooling — small tool choices, tracked as variables."}
                {active === "skin" && "Combination, dry, oily, textured, mature — techniques filtered by who they actually work for."}
                {active === "methods" && "Press vs. buff, cross-hatch vs. stipple — methods compared with wear data, not opinion."}
                {active === "env" && "Humid outdoor weddings, HD studios, runway lights — environment as a first-class variable."}
                {active === "results" && "Longevity hours, finish quality, photo-proof ratings — every claim tied to documented applications."}
                {active === "artists" && "Contributing artists and educators get credit. Their expertise becomes searchable, not scattered."}
                {active === "education" && "Curricula auto-update when techniques evolve. Lessons always point to current best practice."}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
