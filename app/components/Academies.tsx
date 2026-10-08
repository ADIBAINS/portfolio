import { BookOpenCheck, Layers, RefreshCw, UserRoundSearch, Route, Archive } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const ITEMS = [
  { icon: BookOpenCheck, title: "Build intelligent curricula", copy: "Assemble modules from real techniques — each with method, variables and assessment checkpoints." },
  { icon: Layers, title: "Organize technique libraries", copy: "Every academy gets a searchable home for base, eye, sculpt, brow and prep — versioned like software." },
  { icon: RefreshCw, title: "Keep material current", copy: "When a technique evolves, the curriculum updates. Students never learn last year's method." },
  { icon: UserRoundSearch, title: "Identify student difficulties", copy: "See where cohorts struggle — blending time, placement, product choice — and intervene early." },
  { icon: Route, title: "Personalized learning paths", copy: "Dry-skin beginners and humid-climate bridal artists shouldn't follow the same track." },
  { icon: Archive, title: "Preserve instructor expertise", copy: "A senior educator's 20 years of tricks becomes structured lessons, not lost when they leave." },
];

export default function Academies() {
  return (
    <section id="academies" aria-labelledby="acad-h" className="py-20 md:py-28 bg-ivory text-[#171310]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            dark
            eyebrow="For beauty academies"
            title={<span id="acad-h">Your curriculum, finally as alive as the industry.</span>}
            copy="Academies teach timeless foundations — but techniques, products and client expectations change every season. Luméa keeps training structured, current and personal."
          />
          <Reveal delay={0.2}>
            <div className="mt-7 rounded-2xl hairline-dark bg-white p-5 flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop"
                alt="Beauty academy classroom"
                className="h-16 w-16 rounded-xl object-cover"
                loading="lazy"
              />
              <div className="text-sm">
                <p className="font-medium">Example: 12-week Bridal Mastery</p>
                <p className="text-[#7a6f62] mt-0.5">38 techniques · 6 assessments · auto-updated when TX-214 v3 ships</p>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="space-y-3">
          {ITEMS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
              <li className="rounded-2xl hairline-dark bg-white p-5 md:p-6 flex gap-4 hover:shadow-[0_20px_50px_-30px_rgba(23,19,16,0.4)] transition-shadow">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#171310] text-bronze-2">
                  <f.icon size={18} />
                </span>
                <div>
                  <h3 className="font-medium text-[16px]">{f.title}</h3>
                  <p className="text-[14px] text-[#5c5348] mt-1 leading-relaxed">{f.copy}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
