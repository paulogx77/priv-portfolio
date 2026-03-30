"use client";
import { useState, useEffect } from "react";
import { content, Lang } from "../data/i18n";

interface Props { lang: Lang; }

export default function Hero({ lang }: Props) {
  const [typed, setTyped] = useState("");
  const t = content[lang];

  useEffect(() => {
    let pi = 0, ci = 0, del = false;
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const phrase = t.typingPhrases[pi];
      if (!del) {
        ci++;
        setTyped(phrase.slice(0, ci));
        if (ci === phrase.length) { del = true; timer = setTimeout(tick, 1900); return; }
      } else {
        ci--;
        setTyped(phrase.slice(0, ci));
        if (ci === 0) { del = false; pi = (pi + 1) % t.typingPhrases.length; }
      }
      timer = setTimeout(tick, del ? 36 : 68);
    }
    tick();
    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <section className="hero">
      <p className="prompt">
        <span className="prompt-path">C:\USERS\PAULOGX77&gt;</span>
        <span className="prompt-cmd"> whoami --verbose</span>
      </p>
      <h1 className="name-vt">{t.hero.name}</h1>
      <p className="name-sub">{t.hero.fullName}</p>
      <p className="typing-row">&gt; {typed}<span className="cur">█</span></p>
      <p className="bio">{t.hero.bio}</p>
      <div className="links">
        <a className="lbtn" href="https://github.com/paulogx77" target="_blank" rel="noopener noreferrer">
          {t.hero.github}
        </a>
        <a className="lbtn" href="https://linkedin.com/in/paulo-guilherme-77x/" target="_blank" rel="noopener noreferrer">
          {t.hero.linkedin}
        </a>
        <a className="lbtn" href="mailto:seuemail@gmail.com">{t.hero.email}</a>
      </div>
    </section>
  );
}
