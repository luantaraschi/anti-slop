import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { default: "Ledgerline", template: "%s — Ledgerline" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-paper font-body text-body text-ink">{children}</body>
    </html>
  )
}
