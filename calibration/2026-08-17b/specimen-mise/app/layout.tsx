import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SERVICE } from "@/lib/service";

export const metadata: Metadata = {
  title: `${SERVICE.name} · ${SERVICE.day} — Mise`,
  description:
    "Shift board for restaurant kitchens. One service at a time: who is on which station, who has not confirmed, and where the gaps are.",
  applicationName: "Mise",
  openGraph: {
    type: "website",
    siteName: "Mise",
    title: `${SERVICE.name} · ${SERVICE.day} — Mise`,
    description:
      "Shift board for restaurant kitchens. One service at a time: who is on which station, who has not confirmed, and where the gaps are.",
    locale: "en_GB",
  },
};

/**
 * One theme, declared and meant — see the reasoning in tailwind.config.ts. The
 * board is a fixed installation and there is no light variant to switch to, so
 * `themeColor` is a single value rather than a media-matched pair.
 */
export const viewport: Viewport = {
  themeColor: "#0E1013",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="h-full bg-range font-board text-body text-chalk">{children}</body>
    </html>
  );
}
