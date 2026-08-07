import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-10 py-12">
      <h1 className="font-display text-title text-balance">
        That invoice is not here
      </h1>
      <p className="mt-2 max-w-lg text-pretty text-body text-ink/70 dark:text-paper/70">
        The number in the address does not match anything in this workspace.
        Invoices keep their number after they are voided, so a voided one still
        opens from the ledger.
      </p>
      <Link
        href="/invoices"
        className="mt-6 inline-block text-note text-ledger underline"
      >
        Search the ledger
      </Link>
    </main>
  )
}
