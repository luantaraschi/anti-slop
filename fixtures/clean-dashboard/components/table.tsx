import Link from "next/link"

import { Invoice, InvoiceRow } from "./invoice-row"
import { Button } from "./ui/button"

/**
 * The ledger itself. Three states, because empty and filtered-to-nothing are
 * different situations and need different exits.
 */
export function InvoiceLedger({
  invoices,
  filter,
}: {
  invoices: Invoice[]
  filter?: string
}) {
  if (invoices.length === 0 && filter) {
    return (
      <div className="rounded-panel border border-rule px-5 py-6">
        <p className="text-body">No invoice matches “{filter}”.</p>
        <Link
          href="/invoices"
          className="mt-2 inline-block text-note text-ledger underline"
        >
          Show every invoice
        </Link>
      </div>
    )
  }

  if (invoices.length === 0) {
    return (
      <div className="rounded-panel border border-rule px-5 py-8">
        <h3 className="font-display text-figure">
          This is where your invoices land
        </h3>
        <p className="mt-2 max-w-md text-body text-ink/70">
          Write one and it shows up here the moment it is sent, matched against
          the bank feed as soon as the money arrives.
        </p>
        <Button className="mt-5">Write your first invoice</Button>
      </div>
    )
  }

  return (
    <div className="rounded-panel border border-rule px-5 py-2">
      {invoices.map((invoice) => (
        <InvoiceRow key={invoice.number} invoice={invoice} />
      ))}
    </div>
  )
}
