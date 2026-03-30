"use client";
import { content, Lang } from "../data/i18n";

interface Props { lang: Lang; }

export default function Experience({ lang }: Props) {
  const { experience } = content[lang];
  return (
    <section className="sec">
      <div className="sec-hd">
        <span className="sec-ttl">{experience.sectionTitle}</span>
        <span className="sec-meta">{experience.sectionMeta}</span>
      </div>
      <div className="exp-list">
        {experience.items.map((exp, i) => (
          <div key={i} className="exp-row">
            <div className="exp-date">{exp.date}</div>
            <div className="exp-content">
              <span className="exp-badge">{exp.badge}</span>
              <div className="exp-co">{exp.company}</div>
              <div className="exp-rl">{exp.role}</div>
              <div className="exp-ds">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
