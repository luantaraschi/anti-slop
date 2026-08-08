import type { Metadata } from "next"

import { InvoiceLedger } from "@/components/table"
import type { Invoice } from "@/components/invoice-row"

export const metadata: Metadata = { title: "Invoices" }

const invoices: Invoice[] = []

export default function InvoicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-10 py-12">
      <h1 className="font-display text-title text-balance">Invoices</h1>
      <p className="mt-2 max-w-lg text-pretty text-body text-ink/70 dark:text-paper/70">
        Everything you have billed, newest first, with what the bank feed has
        matched so far.
      </p>
      <div className="mt-8">
        <InvoiceLedger invoices={invoices} />
      </div>
    </main>
  )
}
