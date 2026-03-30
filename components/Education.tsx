"use client";
import { content, Lang } from "../data/i18n";

interface Props { lang: Lang; }

export default function Education({ lang }: Props) {
  const { education } = content[lang];
  return (
    <section className="sec">
      <div className="sec-hd">
        <span className="sec-ttl">{education.sectionTitle}</span>
        <span className="sec-meta">{education.sectionMeta}</span>
      </div>
      <div className="edu-grid">
        {education.items.map((edu, i) => (
          <div key={i} className="edu-card">
            <div className="edu-inst">{edu.inst}</div>
            {edu.badge && <span className="edu-badge">{edu.badge}</span>}
            {edu.degree && <div className="edu-degree">{edu.degree}</div>}
            <div className="edu-course">{edu.course}</div>
            <div className="edu-period">{edu.period}</div>
            <ul className="edu-items">
              {edu.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
