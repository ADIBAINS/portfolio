import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "./site";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — The Intelligence Behind the Next Generation of Beauty`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "beauty tech",
    "makeup technique intelligence",
    "AI for makeup artists",
    "beauty academy curriculum",
    "technique research platform",
  ],
  openGraph: {
    title: `${COMPANY.name} — The Intelligence Behind the Next Generation of Beauty`,
    description: COMPANY.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Technique Intelligence Lab`,
    description: COMPANY.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} antialiased bg-ink text-ivory`}
      >
        {children}
      </body>
    </html>
  );
}
