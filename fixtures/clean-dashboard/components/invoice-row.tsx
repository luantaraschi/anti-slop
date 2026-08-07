export type Invoice = {
  number: string
  client: string
  amount: string
  due: string
  state: "paid" | "sent" | "overdue"
}

const STATE_LABEL: Record<Invoice["state"], string> = {
  paid: "Paid",
  sent: "Awaiting payment",
  overdue: "Overdue",
}

const STATE_TONE: Record<Invoice["state"], string> = {
  paid: "bg-ledger/10 text-ledger",
  sent: "bg-ink/5 text-ink/70",
  overdue: "bg-flag/10 text-flag",
}

/**
 * One line of the ledger. Named after what it is, not after the primitive it
 * is built from.
 */
export function InvoiceRow({ invoice }: { invoice: Invoice }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-rule py-3 last:border-b-0">
      <span className="w-24 font-figure text-note tabular-nums text-ink/60">
        {invoice.number}
      </span>
      <span className="flex-1 text-body">{invoice.client}</span>
      <span
        className={`rounded-chip px-2 py-0.5 text-note ${STATE_TONE[invoice.state]}`}
      >
        {STATE_LABEL[invoice.state]}
      </span>
      <span className="w-28 text-right font-figure text-body tabular-nums">
        {invoice.amount}
      </span>
      <span className="w-24 text-right text-note text-ink/60">{invoice.due}</span>
    </div>
  )
}
