import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paulo Guilherme — Portfolio",
  description: "Full Stack Developer · Microelectronics Resident · Cloud & AI",
  authors: [{ name: "Paulo Guilherme Costa Nascimento" }],
  keywords: ["portfolio", "developer", "full stack", "microelectronics", "Next.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
