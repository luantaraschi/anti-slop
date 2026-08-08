import "./globals.css"

export const metadata = { title: "Dashboard" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-white dark:bg-gray-900">{children}</body>
    </html>
  )
}
