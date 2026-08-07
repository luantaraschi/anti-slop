import type { Metadata } from "next"
import Link from "next/link"

import { LedgerStat } from "@/components/stat-card"
import { InvoiceLedger } from "@/components/table"
import type { Invoice } from "@/components/invoice-row"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = { title: "Overview" }

const recent: Invoice[] = [
  {
    number: "1041",
    client: "Braga & Filhas",
    amount: "2,400.00",
    due: "in 6 days",
    state: "sent",
  },
  {
    number: "1042",
    client: "Marés Studio",
    amount: "860.00",
    due: "in 12 days",
    state: "sent",
  },
  {
    number: "1039",
    client: "Ourivesaria Lume",
    amount: "12,190.00",
    due: "9 days late",
    state: "overdue",
  },
  {
    number: "1038",
    client: "Cais Editora",
    amount: "310.00",
    due: "settled",
    state: "paid",
  },
  {
    number: "1037",
    client: "Vila Cerâmica",
    amount: "4,075.00",
    due: "settled",
    state: "paid",
  },
]

export default function OverviewPage() {
  return (
    <main className="mx-auto max-w-5xl px-10 py-12">
      <header className="flex items-baseline justify-between">
        <h1 className="font-display text-title">Overview</h1>
        <Button>Write an invoice</Button>
      </header>

      <section className="mt-10 grid grid-cols-3 gap-4">
        <LedgerStat
          label="Outstanding"
          amount="48,120.00"
          period="across 14 invoices"
        />
        <LedgerStat
          label="Overdue"
          amount="12,190.00"
          period="one invoice, 9 days late"
          tone="overdue"
        />
        <LedgerStat
          label="Settled in August"
          amount="31,455.00"
          period="up from 27,900 in July"
        />
      </section>

      {/* The only elevated surface on the page: it floats because it is asking
          for a decision. Everything at rest is separated by border-rule. */}
      <aside className="mt-14 rounded-panel bg-paper px-5 py-4 shadow-raised">
        <p className="text-body">
          Ourivesaria Lume has been late nine days. The last two invoices were
          paid within a week of the reminder.
        </p>
        <Button variant="quiet" size="row" className="mt-3">
          Send the reminder
        </Button>
      </aside>

      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-figure">Last five invoices</h2>
          <Link href="/invoices" className="text-note text-ledger underline">
            Open the full ledger
          </Link>
        </div>
        <div className="mt-4">
          <InvoiceLedger invoices={recent} />
        </div>
      </section>
    </main>
  )
}
