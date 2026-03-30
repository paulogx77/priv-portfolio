"use client";
import { content, Lang } from "../data/i18n";

interface Props { lang: Lang; }

export default function Projects({ lang }: Props) {
  const { projects } = content[lang];
  return (
    <section className="sec">
      <div className="sec-hd">
        <span className="sec-ttl">{projects.sectionTitle}</span>
        <span className="sec-meta">{projects.sectionMeta}</span>
      </div>
      <div className="proj-grid">
        {projects.items.map((p, i) => (
          <div key={i} className={`pc${p.wide ? " wide" : ""}`}>
            <div className={`ps ${p.statusClass}`}>{p.status}</div>
            <div className="pn">{p.name}</div>
            <div className="pr">{p.role}</div>
            <div className="pd">{p.desc}</div>
            <div className="tags">
              {p.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
            </div>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="repo-link">
                [ VIEW REPO → ]
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
