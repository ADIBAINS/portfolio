"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ScanFace, Sparkles, Droplets, Brush, FlaskConical } from "lucide-react";
import { Reveal } from "./ui";

type Technique = {
  id: string;
  name: string;
  code: string;
  skin: string;
  finish: string;
  longevity: number;
  tools: string[];
  products: string[];
  method: string[];
  variables: { label: string; value: string }[];
  insight: string;
};

const TECHNIQUES: Technique[] = [
  {
    id: "satin-base",
    name: "Diffused Satin Bridal Base",
    code: "TX-214 · Base",
    skin: "Combination · Warm undertone · Light texture",
    finish: "Satin, second-skin",
    longevity: 9.2,
    tools: ["Damp micro-sponge", "Stippling brush 02", "Cooling spatula"],
    products: ["Silicone-grip primer", "Serum foundation N3", "Micro-setting mist"],
    method: ["Thin cross-hatch layers", "Press — don't drag", "Mist between layers"],
    variables: [
      { label: "Humidity", value: "68% → -0.4h wear" },
      { label: "Layer thickness", value: "0.3mm optimal" },
      { label: "Set time", value: "90s between coats" },
    ],
    insight:
      "Pressing vs. buffing improves edge diffusion by 31% on textured zones. Mist-sealing layer 2 extends wear past hour 8 in humidity.",
  },
  {
    id: "soft-sculpt",
    name: "Soft-Sculpt Cream Contour",
    code: "TX-187 · Sculpt",
    skin: "Dry · Neutral undertone · Fine lines",
    finish: "Lifted, soft-shadow",
    longevity: 8.4,
    tools: ["Angled sculpt brush", "Fingertip blend", "Fan seal brush"],
    products: ["Cream sculpt S2", "Translucent veil powder", "Hydra-prep balm"],
    method: ["Map in natural light", "Melt edges upward", "Veil, don't bake"],
    variables: [
      { label: "Placement", value: "+1.2cm above hollow" },
      { label: "Blend time", value: "45s per side" },
      { label: "Powder ratio", value: "0.4g full face" },
    ],
    insight:
      "Raising placement 1.2cm reduces Nasolabial emphasis in 3/4 face shapes. Over-powdering is the top longevity killer for dry skin.",
  },
  {
    id: "air-matte",
    name: "Air-Matte Editorial Eye",
    code: "TX-309 · Eye",
    skin: "Oily lids · Deep-set · Hooded",
    finish: "Diffused matte, no fallout",
    longevity: 10.1,
    tools: ["Flat packing brush", "Tapered diffuser", "Silicone shield"],
    products: ["Eye grip base", "Pressed matte palette", "Fixing veil"],
    method: ["Sheer wash first", "Build outer-V in 3 passes", "Seal with veil"],
    variables: [
      { label: "Primer cure", value: "60s full cure" },
      { label: "Fallout", value: "-72% with shield" },
      { label: "Humidity test", value: "Stable to 80%" },
    ],
    insight:
      "Full 60s primer cure is the single biggest variable. Skipping it drops crease-resistance from 10h to under 6h on oily lids.",
  },
];

export default function Hero() {
  const [activeId, setActiveId] = useState(TECHNIQUES[0].id);
  const [humidity, setHumidity] = useState(68);
  const active = useMemo(() => TECHNIQUES.find((t) => t.id === activeId)!, [activeId]);

  const adjustedLongevity = Math.max(
    4,
    active.longevity - Math.max(0, humidity - 55) * 0.04
  ).toFixed(1);

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 grain">
      {/* ambient */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#2a2118] blur-[140px] opacity-80" />
        <div className="absolute top-40 -left-40 h-[400px] w-[400px] rounded-full bg-bronze/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(#8a7a65 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        <div>
          <Reveal>
            <p className="eyebrow text-bronze">
              <span className="inline-block h-px w-8 bg-bronze" aria-hidden /> Technique Intelligence Lab
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 text-5xl md:text-7xl leading-[0.98] font-medium tracking-tight">
              The Intelligence Behind the{" "}
              <em className="italic font-light text-bronze-2">Next Generation</em> of Beauty.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/65 font-light leading-relaxed">
              An AI-powered research and learning platform helping beauty professionals
              discover, analyze and develop the techniques shaping tomorrow&apos;s industry.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#platform"
                className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-ink hover:bg-bronze-2 transition-colors"
              >
                Explore the platform <ArrowRight size={16} />
              </a>
              <a
                href="#lab"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-ivory hover:border-bronze hover:text-bronze-2 transition-colors"
              >
                <Play size={14} /> See how it works
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-6 text-[12px] tracking-wide text-white/40">
              Early-stage prototype · Built with artists &amp; educators · No fake claims, just research
            </p>
          </Reveal>
        </div>

        {/* Interactive product card */}
        <Reveal delay={0.2} y={32}>
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[28px] bg-gradient-to-b from-bronze/20 to-transparent blur-2xl" />
            <div className="relative rounded-[24px] hairline bg-ink-2/90 overflow-hidden shadow-2xl">
              {/* window bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 text-[12px] text-white/60">
                  <ScanFace size={15} className="text-bronze" />
                  <span className="tracking-[0.14em] uppercase">Beauty Technique Intelligence</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              {/* technique tabs */}
              <div className="flex gap-2 px-5 pt-4 overflow-x-auto" role="tablist" aria-label="Example techniques">
                {TECHNIQUES.map((t) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={t.id === activeId}
                    onClick={() => setActiveId(t.id)}
                    className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] border transition-colors ${
                      t.id === activeId
                        ? "bg-bronze text-ink border-bronze font-medium"
                        : "border-white/15 text-white/60 hover:border-white/30 hover:text-ivory"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="p-5 grid sm:grid-cols-2 gap-4"
                >
                  {/* left: image + scan */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0c0a08] min-h-[280px]">
                    <img
                      src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop"
                      alt="Close-up of professional makeup application"
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />
                    {/* scanning line */}
                    <motion.div
                      aria-hidden
                      className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-bronze/30 to-transparent border-y border-bronze/40"
                      animate={{ top: ["4%", "82%", "4%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] tracking-wider text-bronze-2 border border-white/15">
                      {active.code} · AI ANALYZING
                    </div>
                    <div className="absolute bottom-3 inset-x-3 rounded-xl bg-black/60 backdrop-blur border border-white/12 p-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Skin context</p>
                      <p className="text-[13px] mt-1 text-ivory">{active.skin}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[12px] text-white/60">Finish · {active.finish}</span>
                        <span className="rounded-full bg-emerald-400/15 text-emerald-300 px-2.5 py-1 text-[12px] font-medium border border-emerald-300/20">
                          {adjustedLongevity}h wear
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* right: breakdown */}
                  <div className="space-y-3 text-[13px]">
                    <div className="rounded-xl border border-white/10 p-3 bg-white/[0.03]">
                      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-bronze"><Brush size={12}/> Tools</p>
                      <ul className="mt-1.5 space-y-1 text-white/75">{active.tools.map(t => <li key={t}>· {t}</li>)}</ul>
                    </div>
                    <div className="rounded-xl border border-white/10 p-3 bg-white/[0.03]">
                      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-bronze"><Droplets size={12}/> Products</p>
                      <ul className="mt-1.5 space-y-1 text-white/75">{active.products.map(t => <li key={t}>· {t}</li>)}</ul>
                    </div>
                    <div className="rounded-xl border border-white/10 p-3 bg-white/[0.03]">
                      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-bronze"><FlaskConical size={12}/> Variables</p>
                      <ul className="mt-1.5 space-y-1 text-white/75">{active.variables.map(v => <li key={v.label}>· <span className="text-white/50">{v.label}:</span> {v.value}</li>)}</ul>
                    </div>
                  </div>

                  {/* bottom full width */}
                  <div className="sm:col-span-2 rounded-xl border border-bronze/25 bg-bronze/[0.07] p-4">
                    <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-bronze"><Sparkles size={12}/> AI insight</p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ivory/85">{active.insight}</p>
                    <label className="mt-3 block">
                      <span className="flex justify-between text-[11px] uppercase tracking-[0.16em] text-white/50">
                        <span>Test environment · Humidity {humidity}%</span>
                        <span>Live recalculation</span>
                      </span>
                      <input
                        type="range"
                        min={40}
                        max={90}
                        value={humidity}
                        onChange={(e) => setHumidity(Number(e.target.value))}
                        className="mt-2 w-full accent-[#c9a87c]"
                        aria-label="Simulate humidity"
                      />
                    </label>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="px-5 pb-4 flex items-center justify-between text-[11px] text-white/40">
                <span>Application · {active.method.join(" → ")}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
