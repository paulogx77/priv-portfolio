"use client";
import { Lang } from "../data/i18n";

interface Props { lang: Lang; onToggle: () => void; }

export default function LangToggle({ lang, onToggle }: Props) {
  return (
    <button className="lang-btn" onClick={onToggle}>
      [ {lang === "en" ? "PT" : "EN"} ]
    </button>
  );
}
