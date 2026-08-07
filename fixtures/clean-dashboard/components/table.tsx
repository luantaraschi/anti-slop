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
      <div className="rounded-panel border border-rule px-5 py-6 dark:border-rule/25">
        <p className="text-body">No invoice matches “{filter}”.</p>
        {/* 12 = 5 + 7: the panel's radius is the control's radius plus the
            padding around it, so the gap between the two curves stays even. */}
        <div className="mt-3 inline-block rounded-panel border border-rule p-[7px] dark:border-rule/25">
          <Button asChild size="row">
            <Link href="/invoices">Show every invoice</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (invoices.length === 0) {
    return (
      <div className="rounded-panel border border-rule px-5 py-8 dark:border-rule/25">
        <h3 className="font-display text-figure text-balance">
          This is where your invoices land
        </h3>
        <p className="mt-2 max-w-md text-body text-ink/70 dark:text-paper/70">
          Write one and it shows up here the moment it is sent, matched against
          the bank feed as soon as the money arrives.
        </p>
        <Button className="mt-5">Write your first invoice</Button>
      </div>
    )
  }

  return (
    <div className="rounded-panel border border-rule px-5 py-2 dark:border-rule/25">
      {invoices.map((invoice) => (
        <InvoiceRow key={invoice.number} invoice={invoice} />
      ))}
    </div>
  )
}
