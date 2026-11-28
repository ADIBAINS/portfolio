import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ProfileDock } from "@/components/profile-dock";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Adil Bains", template: "%s · Adil Bains" },
  description: "Adil Bains, a computer science student in Delhi building backend systems, search tools, and developer software.",
  icons: { icon: "/assets/icon.png" },
};

const initializeTheme = "try{if(localStorage.getItem('portfolio-theme')==='light')document.documentElement.dataset.theme='light'}catch{}";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: initializeTheme }} /></head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <ProfileDock />
      </body>
    </html>
  );
}
