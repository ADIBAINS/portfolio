"use client";

import { usePathname } from "next/navigation";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Quote, FileText, Github, House, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/profile";

function DockItem({ label, pointer, children }: {
  label: string;
  pointer: MotionValue<number>;
  children: ReactNode;
}) {
  const item = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const diameter = useSpring(
    useTransform(pointer, position => {
      if (!item.current || reduceMotion || !Number.isFinite(position)) return 40;
      const { left, width } = item.current.getBoundingClientRect();
      const distance = Math.abs(position - (left + width / 2));
      return 40 + 20 * Math.max(0, 1 - distance / 140);
    }),
    { mass: .1, stiffness: 150, damping: 12 },
  );

  return (
    <motion.div ref={item} className="dock-item" style={{ width: diameter }}>
      {children}
      <span className="dock-label" aria-hidden="true">{label}</span>
    </motion.div>
  );
}

export function ProfileDock() {
  const pointer = useMotionValue(Infinity);
  const currentPath = usePathname().replace(/\/$/, "");
  const button = buttonVariants({ variant: "ghost", size: "icon" });
  const links = [
    { label: "Home", href: "/", icon: House },
    { label: "Favorite quotes", href: "/quotes/", icon: Quote },
    { label: "Résumé", href: profile.resume, icon: FileText, newTab: true },
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "Email", href: "mailto:" + profile.email, icon: Mail },
  ];

  function switchTheme() {
    const html = document.documentElement;
    const next = html.dataset.theme === "light" ? "dark" : "light";
    html.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      // The theme can still be changed for the current page.
    }
  }

  return (
    <nav
      aria-label="Profile shortcuts"
      className="dock"
      onPointerMove={event => {
        if (event.pointerType === "mouse") pointer.set(event.clientX);
      }}
      onPointerLeave={() => pointer.set(Infinity)}
    >
      {links.map(({ label, href, icon: Icon, newTab }) => (
        <DockItem key={label} label={label} pointer={pointer}>
          <a
            className={button}
            href={href}
            aria-label={label}
            aria-current={href.startsWith("/") && href.replace(/\/$/, "") === currentPath ? "page" : undefined}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener" : undefined}
          >
            <Icon size={16} aria-hidden="true" />
          </a>
        </DockItem>
      ))}
      <DockItem label="Theme" pointer={pointer}>
        <button className={button} type="button" onClick={switchTheme}>
          <span className="sr-only light-label">Switch to light theme</span>
          <span className="sr-only dark-label">Switch to dark theme</span>
          <Sun className="light-label" size={16} aria-hidden="true" />
          <Moon className="dark-label" size={16} aria-hidden="true" />
        </button>
      </DockItem>
    </nav>
  );
}
