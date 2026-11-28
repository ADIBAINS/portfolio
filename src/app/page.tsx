import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { DelhiTime } from "@/components/delhi-time";
import { ProfileRow } from "@/components/profile-row";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { education, profile, projects } from "@/lib/profile";

export default function HomePage() {
  return (
    <main id="main" className="site-page">
      <header className="intro">
        <div>
          <h1>Hi, Adil here.</h1>
          <p><DelhiTime /></p>
        </div>
        <Image
          className="profile-avatar"
          src={profile.avatar}
          alt="Illustrated retro computer with a green terminal prompt"
          width={112}
          height={112}
          priority
        />
      </header>

      <section aria-labelledby="about">
        <h2 id="about">About</h2>
        <div className="prose">
          <p>I’m a CS student at MSIT in Delhi. I build search tools and backend systems.</p>
          <p>Recent projects range from finding internships in Telegram to recovering jobs when a worker goes offline.</p>
          <p><Link href="/quotes/">My favorite quotes</Link></p>
        </div>
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects">things I’ve built</h2>
        <ul className="profile-list">{projects.map(entry => <ProfileRow key={entry.name} entry={entry} />)}</ul>
      </section>

      <section aria-labelledby="education">
        <h2 id="education">education</h2>
        <ul className="profile-list">{education.map(entry => <ProfileRow key={entry.name} entry={entry} />)}</ul>
      </section>

      <section className="updates" aria-labelledby="updates">
        <h2 id="updates">stay updated</h2>
        <p>Follow what I’m building on GitHub.</p>
        <a className={buttonVariants()} href={profile.github}><Github size={16} aria-hidden="true" /> Follow on GitHub</a>
      </section>

      <section aria-labelledby="skills">
        <h2 id="skills">skills</h2>
        <ul className="skills">{profile.skills.map(skill => <li key={skill}><Badge>{skill}</Badge></li>)}</ul>
      </section>

      <footer className="contact">
        <span className="footer-mark" aria-hidden="true"></span>
        <p>say hello by <a href={"mailto:" + profile.email}>email <ArrowUpRight size={13} aria-hidden="true" /></a></p>
        <a className="resume-text" href={profile.resume} target="_blank" rel="noopener">résumé <ArrowUpRight size={12} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
