import Link from "next/link"

export default function NotFound() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-sm text-gray-500">
        That address is not part of this workspace.
      </p>
      <Link className="text-sm font-bold" href="/">
        Back to the dashboard
      </Link>
    </main>
  )
}
