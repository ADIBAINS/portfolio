import { AudioLines, BriefcaseBusiness, ChefHat, Layers3, Link2, Terminal, type LucideIcon } from "lucide-react";

export const profile = {
  name: "Adil Bains",
  email: "adilbains.work@gmail.com",
  github: "https://github.com/ADIBAINS",
  linkedin: "https://www.linkedin.com/in/adibains/",
  resume: "/assets/adil-bains-resume.pdf",
  avatar: "/assets/terminal-avatar.webp",
  skills: ["python", "go", "typescript", "sql", "fastapi", "postgres", "redis", "kafka", "docker", "kubernetes", "aws"],
};

export type ProfileEntry = {
  name: string;
  color: "gold" | "green" | "blue" | "violet" | "peach" | "teal" | "neutral";
  subtitle: string;
  meta: string;
  description?: string;
  href?: string;
} & (
  | { icon: LucideIcon; logo?: never }
  | { logo: string; icon?: never }
);

export const projects: ProfileEntry[] = [
  {
    name: "CampusMatch",
    icon: BriefcaseBusiness,
    color: "gold",
    subtitle: "Internship search and comparison in Telegram",
    meta: "Python · FastAPI",
    description: "I combined PostgreSQL full-text ranking and pgvector similarity with filters for eligibility, pay, and location. The bot can compare listings and cite excerpts from employers.",
  },
  {
    name: "Uzip",
    icon: Link2,
    color: "green",
    subtitle: "Multi-tenant URL shortener and click analytics",
    meta: "Go · Redis · Kafka",
    href: profile.github + "/Uzip",
    description: "Redis serves repeat redirects, PostgreSQL handles tenant isolation, and Kafka streams click events to ClickHouse after raw IP addresses are removed.",
  },
  {
    name: "TaskQueue",
    icon: Layers3,
    color: "blue",
    subtitle: "Distributed queue with priority scheduling",
    meta: "TypeScript · Kafka",
    href: profile.github + "/TaskQueue",
    description: "Workers use renewable locks. If one goes offline, the scheduler can recover its jobs and retry them with backoff.",
  },
  {
    name: "CommanderD",
    icon: Terminal,
    color: "violet",
    subtitle: "Crash-log analysis and fix summaries in GitHub Actions",
    meta: "HackAVENSIS · Runner-up",
  },
  {
    name: "Rasoyee",
    icon: ChefHat,
    color: "peach",
    subtitle: "Kitchen inventory, food recommendations, and ordering",
    meta: "CTRL ALT VIBE · Top 8",
  },
  {
    name: "Garuda",
    icon: AudioLines,
    color: "teal",
    subtitle: "A digital twin for monitoring piston-engine health",
    meta: "Smart India Hackathon · College level",
  },
];

export const education: ProfileEntry[] = [
  {
    name: "Maharaja Surajmal Institute of Technology",
    logo: "/assets/msit-crest.webp",
    color: "neutral",
    subtitle: "B.Tech. in Computer Science and Engineering · 9.1 CGPA",
    meta: "2024 – 2028",
  },
];
