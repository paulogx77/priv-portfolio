"use client";
import { Lang } from "../data/i18n";
import LangToggle from "./LangToggle";

interface Props {
  lang: Lang;
  onToggle: () => void;
  ver: string;
  status: string;
  loc: string;
}

export default function StatusBar({ lang, onToggle, ver, status, loc }: Props) {
  return (
    <div className="sbar">
      <span>PAULOGX77 &nbsp;·&nbsp; {ver} &nbsp;·&nbsp; BOOT OK</span>
      <span className="sbar-center">
        {status}
        <LangToggle lang={lang} onToggle={onToggle} />
        <span className="blink">█</span>
      </span>
      <span className="sbar-right">{loc} &nbsp;·&nbsp; github.com/paulogx77</span>
    </div>
  );
}
