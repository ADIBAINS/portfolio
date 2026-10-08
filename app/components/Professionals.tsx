"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const ANALYSIS = `Based on 3 documented techniques (TX-214, TX-198, TX-221) + 42 humid-climate applications:

**Recommendation: TX-214 — Diffused Satin Bridal Base**

Why it wins outdoors:
1. **Mist-sealed layering** — setting mist between coats locks each layer. In 65-80% humidity this adds +1.6h vs. single-seal methods.
2. **Silicone-grip primer + serum foundation** — grips without heaviness. TX-198's matte primer cracks at hour 6 on combination skin.
3. **Press, don't buff** — diffusion holds on textured zones where TX-221 separates.

**Variables most likely to affect longevity:**
- Humidity >70% → expect -0.4h per +5%. Carry blotting veil, not powder.
- Layer thickness >0.5mm → creasing risk ×2. Keep 0.3mm, 90s set time.
- Outdoor heat + sweat → seal T-zone with micro-mist at hour 4.

**Suggested kit:** grip primer, serum foundation N3, micro-setting mist, damp sponge + stippling brush 02.
**Avoid for this brief:** heavy bake (TX-198) — flashback + cracking in humidity.`;

export default function Professionals() {
  const [sent, setSent] = useState(true);
  return (
    <section id="professionals" aria-labelledby="pro-h" className="py-20 md:py-28 relative overflow-hidden">
      <div aria-hidden className="absolute -right-40 top-20 h-[400px] w-[400px] bg-bronze/10 blur-[120px] rounded-full" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <SectionHeading
          eyebrow="For professionals"
          title={<span id="pro-h">An assistant that thinks like a senior artist.</span>}
          copy="Ask in your own words. Get analysis grounded in documented techniques, variables and real wear data — not generic tips."
        />

        <div className="mt-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
          <Reveal>
            <div className="rounded-[24px] hairline bg-ink-2 p-6 md:p-7">
              <h3 className="text-[13px] uppercase tracking-[0.2em] text-white/50">Try asking</h3>
              <div className="mt-4 space-y-2.5">
                {[
                  "Compare these three bridal base techniques for a humid outdoor wedding and explain which variables are most likely to affect longevity.",
                  "My soft-sculpt disappears by hour 5 on dry skin — is it placement, powder or prep?",
                  "Build a 4-step prep routine for textured combination skin under HD photography.",
                ].map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setSent(true)}
                    className={`w-full text-left rounded-xl border px-4 py-3 text-[13.5px] leading-relaxed transition-colors ${
                      i === 0
                        ? "border-bronze/50 bg-bronze/10 text-ivory"
                        : "border-white/10 text-white/60 hover:border-white/25 hover:text-ivory"
                    }`}
                  >
                    “{p}”
                  </button>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 rounded-full border border-white/15 bg-black/40 px-4 py-3 text-[13px] text-white/40">
                  Ask about a technique, product or client brief…
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ivory text-ink">
                  <Send size={16} />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-bronze/25 bg-[#151210] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 text-[12px] text-white/60">
                <Bot size={15} className="text-bronze" /> Luméa Research Assistant · citing 3 techniques + 42 applications
              </div>
              <div className="p-5 md:p-6 space-y-4 max-h-[520px] overflow-y-auto">
                <div className="flex gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10"><User size={14} /></span>
                  <p className="rounded-2xl rounded-tl-sm bg-white/8 border border-white/10 px-4 py-3 text-[13.5px] text-ivory/90 leading-relaxed">
                    Compare these three bridal base techniques for a humid outdoor wedding and explain which variables are most likely to affect longevity.
                  </p>
                </div>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-3"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bronze text-ink"><Bot size={14} /></span>
                    <div className="rounded-2xl rounded-tl-sm border border-bronze/25 bg-bronze/[0.07] px-4 py-4 text-[13.5px] leading-relaxed text-ivory/85 whitespace-pre-line">
                      {ANALYSIS}
                      <span className="mt-3 flex flex-wrap gap-2">
                        {["TX-214", "TX-198", "TX-221", "42 humid applications"].map((c) => (
                          <span key={c} className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/60">{c}</span>
                        ))}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
