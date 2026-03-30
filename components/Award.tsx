"use client";
import { content, Lang } from "../data/i18n";

interface Props { lang: Lang; }

export default function Award({ lang }: Props) {
  const { award } = content[lang];
  return (
    <div className="award">
      <div className="aw-glyph">◈</div>
      <div className="aw-body">
        <div className="aw-ttl">{award.title}</div>
        <div className="aw-sub">{award.sub}</div>
      </div>
      <div className="aw-tag">{award.tag}</div>
    </div>
  );
}
