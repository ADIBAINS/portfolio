import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { ProfileEntry } from "@/lib/profile";

export function ProfileRow({ entry }: { entry: ProfileEntry }) {
  const icon = (
    <span className="row-avatar" data-color={entry.color} aria-hidden="true">
      {entry.logo !== undefined ? (
        <Image className="institute-logo" src={entry.logo} width={44} height={44} alt="" />
      ) : (
        <entry.icon size={24} strokeWidth={2.2} />
      )}
    </span>
  );
  const text = (
    <span className="row-text">
      <span className="row-title">{entry.name}{entry.description && <ChevronRight size={14} aria-hidden="true" />}</span>
      <span className="row-subtitle">{entry.subtitle}</span>
    </span>
  );
  const meta = <span className="row-meta">{entry.meta}</span>;

  if (!entry.description) {
    return <li className="profile-row">{icon}{text}{meta}</li>;
  }

  return (
    <li>
      <details className="entry">
        <summary className="profile-row">
          {icon}{text}
          {meta}
        </summary>
        <div className="entry-description">
          <p>{entry.description}</p>
          {entry.href && <a href={entry.href}>View on GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>}
        </div>
      </details>
    </li>
  );
}
