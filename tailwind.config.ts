import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        vt323: ["var(--font-vt323)", "monospace"],
      },
      colors: {
        green: {
          DEFAULT: "#00ff41",
          600: "#00cc33",
          700: "#009926",
          800: "#006618",
          900: "#003d0e",
          950: "#001a06",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        sweep: "sweep 3.5s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(280%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
