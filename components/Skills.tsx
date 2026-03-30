"use client";
import { content, Lang } from "../data/i18n";

interface Props { lang: Lang; }

export default function Skills({ lang }: Props) {
  const { skills } = content[lang];
  return (
    <section className="sec">
      <div className="sec-hd">
        <span className="sec-ttl">{skills.sectionTitle}</span>
        <span className="sec-meta">{skills.sectionMeta}</span>
      </div>
      <div className="sk-groups">
        {skills.groups.map((g, i) => (
          <div key={i} className="sk-row">
            <div className="sk-lbl">{g.label}</div>
            <div className="chips">
              {g.chips.map((c, j) => (
                <span key={j} className="chip">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
