"use client";
import { useState } from "react";
import { Lang } from "../data/i18n";

import AsciiBackground from "../components/AsciiBackground";
import StatusBar       from "../components/StatusBar";
import Hero            from "../components/Hero";
import Award           from "../components/Award";
import Education       from "../components/Education";
import Experience      from "../components/Experience";
import Projects        from "../components/Projects";
import Skills          from "../components/Skills";
import { content }     from "../data/i18n";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <>
      {/* Overlays */}
      <div className="scanlines" />
      <div className="vignette"  />

      {/* Animated ASCII face */}
      <AsciiBackground />

      {/* Page content */}
      <main className="wrap">
        <StatusBar
          lang={lang}
          onToggle={() => setLang(l => l === "en" ? "pt" : "en")}
          ver={t.statusBar.ver}
          status={t.statusBar.status}
          loc={t.statusBar.loc}
        />

        <Hero       lang={lang} />
        <Award      lang={lang} />
        <Education  lang={lang} />
        <Experience lang={lang} />
        <Projects   lang={lang} />
        <Skills     lang={lang} />

        <footer className="footer">
          <span>PAULOGX77</span> · {t.footer} · <span className="blink">█</span>
        </footer>
      </main>
    </>
  );
}
