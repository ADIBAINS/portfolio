"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${
        dark ? "text-[#6b5f52]" : "text-bronze"
      }`}
    >
      <span
        className={`inline-block h-px w-8 ${dark ? "bg-[#6b5f52]" : "bg-bronze"}`}
        aria-hidden
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <Reveal>
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display mt-5 text-4xl leading-[1.05] md:text-6xl font-medium tracking-tight ${
            dark ? "text-[#171310]" : "text-ivory"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {copy ? (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-base md:text-lg leading-relaxed font-light ${
              dark ? "text-[#5c5348]" : "text-white/60"
            }`}
          >
            {copy}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
