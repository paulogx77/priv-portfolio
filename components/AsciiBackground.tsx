"use client";
import { useEffect, useRef } from "react";

const FACE_ROWS = [
  "           .:::::::.           ",
  "        .:::::::::::::.        ",
  "      .::::::::::::::::::.     ",
  "    .::::::::::::::::::::::::. ",
  "   :::::::::::::::::::::::::::",
  "  :::::::::::::::::::::::::::::",
  "  ::: :::  :::::::::  ::: :::::",
  "  ::  :::  :::::::::  :::  ::::",
  "  ::: :::  :::::::::  ::: :::::",
  "  :::::::::::::::::::::::::::::",
  "  :::::::::::::::::::::::::::::",
  "  ::::  ::::::::::::::::  :::::",
  "  :::   ::::::::::::::::   ::::",
  "  ::::  ::::::::::::::::  :::::",
  "  :::::  ::::::::::::::  ::::::",
  "  ::::::                :::::::",
  "  :::::::::::::::::::::::::::::",
  "  ::::::::::::::::::::::::::::  ",
  "   ::::::::::::::::::::::::::   ",
  "    ::::::::::::::::::::::::    ",
  "      ::::::::::::::::::      ",
  "         ::::::::::::         ",
  "            ::::::            ",
];

const CHARS = "@#$%&*+=<>!?01░▒▓".split("");

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CH = 22;

    type Particle = {
      bx: number; by: number;
      x: number; y: number;
      char: string;
      charTimer: number; charInterval: number;
      alpha: number; phase: number; speed: number;
    };

    let particles: Particle[] = [];
    let animId: number;
    let t = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      buildParticles();
    }

    function buildParticles() {
      particles = [];
      const cols = FACE_ROWS[0].length;
      const rows = FACE_ROWS.length;
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const offX = cx - (cols * CH) / 2;
      const offY = cy - (rows * CH) / 2;

      for (let r = 0; r < rows; r++) {
        const row = FACE_ROWS[r];
        for (let c = 0; c < row.length; c++) {
          if (row[c] !== " ") {
            particles.push({
              bx: offX + c * CH,
              by: offY + r * CH,
              x: Math.random() * canvas!.width,
              y: Math.random() * canvas!.height,
              char: CHARS[Math.floor(Math.random() * CHARS.length)],
              charTimer: 0,
              charInterval: Math.floor(Math.random() * 50 + 20),
              alpha: Math.random() * 0.45 + 0.35,
              phase: Math.random() * Math.PI * 2,
              speed: 0.012 + Math.random() * 0.01,
            });
          }
        }
      }
    }

    resize();
    window.addEventListener("resize", resize);

    const ASSEMBLE = 220;

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx.font = `${CH - 1}px 'Share Tech Mono', monospace`;

      t++;
      const prog = Math.min(t / ASSEMBLE, 1);
      const ease = prog < 1 ? prog * prog * (3 - 2 * prog) : 1;

      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const rot = t > ASSEMBLE ? Math.sin((t - ASSEMBLE) * 0.006) * 0.15 : 0;
      const scY = t > ASSEMBLE ? 1 + Math.sin((t - ASSEMBLE) * 0.009) * 0.03 : 1;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.transform(Math.cos(rot), 0, Math.sin(rot) * 0.25, scY, 0, 0);
      ctx.translate(-cx, -cy);

      for (const p of particles) {
        p.x += (p.bx - p.x) * ease * 0.07;
        p.y += (p.by - p.y) * ease * 0.07;

        p.charTimer++;
        if (p.charTimer > p.charInterval) {
          p.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          p.charTimer = 0;
          p.charInterval = Math.floor(Math.random() * 70 + 15);
        }

        const pulse = 0.65 + Math.sin(t * p.speed + p.phase) * 0.35;
        const a = ease * p.alpha * pulse;
        const bright = Math.floor(120 + Math.sin(t * p.speed * 0.6 + p.phase) * 70);
        ctx.fillStyle = `rgba(0,${Math.min(bright + 80, 255)},${Math.floor(bright * 0.1)},${a})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      ctx.restore();
      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
