import type { Metadata } from "next"
import Link from "next/link"

import { FilterControls } from "@/components/filter-panel"
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
        <h1 className="font-display text-title text-balance">Overview</h1>
        <div className="flex items-center gap-4">
          <Button size="icon" aria-label="Refresh">
            <svg viewBox="0 0 20 20" className="size-5" fill="currentColor">
              <path d="M10 3a7 7 0 1 0 6.7 9h-2.1A5 5 0 1 1 10 5v3l4-4-4-4v3Z" />
            </svg>
          </Button>
          <Button>Write an invoice</Button>
        </div>
      </header>

      <section className="mt-10 grid grid-cols-3 gap-4">
        <LedgerStat
          label="Outstanding"
          metric="outstanding"
          amount="48,120.00"
          period="across 14 invoices"
        />
        <LedgerStat
          label="Overdue"
          metric="overdue"
          amount="12,190.00"
          period="one invoice, 9 days late"
          tone="overdue"
        />
        <LedgerStat
          label="Settled in August"
          metric="settled"
          amount="31,455.00"
          period="up from 27,900 in July"
        />
      </section>

      {/* The only elevated surface on the page: it floats because it is asking
          for a decision. Everything at rest is separated by border-rule. */}
      <aside className="mt-14 rounded-panel bg-paper px-5 py-4 shadow-raised dark:bg-paper/10">
        {/* Left without text-balance on purpose: the corpus needs one isolated
            oversight, so C4's second door has something to be tested against. */}
        <h2 className="font-display text-figure">Reminders</h2>
        <p className="mt-2 text-pretty text-body">
          Ourivesaria Lume has been late nine days. The last two invoices were
          paid within a week of the reminder.
        </p>
        <Button variant="quiet" size="row" className="mt-3">
          Send the reminder
        </Button>
      </aside>

      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-figure text-balance">
            Last five invoices
          </h2>
          <Link
            href="/invoices"
            className="text-note text-ledger underline dark:text-paper"
          >
            Open the full ledger
          </Link>
        </div>
        <div className="mt-4">
          <FilterControls />
        </div>
        <div className="mt-4">
          <InvoiceLedger invoices={recent} />
        </div>
      </section>

      {/* A number that never changes, so it stays proportional. tabular-nums is
          for the figures that move, and paying for it here would only widen the
          digits of a line nobody watches. */}
      <footer className="mt-16 border-t border-rule pt-4 text-note text-ink/60 dark:border-rule/25 dark:text-paper/60">
        Ledger format 3, in use since 2019.
      </footer>
    </main>
  )
}
