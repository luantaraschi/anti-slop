import { Hero } from "./Hero"

const morning = [
  {
    id: "2026-08-06-1041",
    line: "TRF BRAGA & FILHAS",
    amount: "2,400.00",
    verdict: "Invoice 1041, paid in full",
  },
  {
    id: "2026-08-06-1039",
    line: "TRF OURIVESARIA LUME",
    amount: "11,000.00",
    verdict: "Invoice 1039 is 12,190.00 — 1,190.00 short",
  },
  {
    id: "2026-08-06-fee",
    line: "SEPA FEE",
    amount: "3.40",
    verdict: "No invoice. Recurring since March",
  },
  {
    id: "2026-08-05-9902",
    line: "TRF CAIS EDITORA",
    amount: "310.00",
    verdict: "Invoice 1038, paid nine days early",
  },
]

export default function App() {
  return (
    <main className="bg-chalk text-ink">
      <Hero />

      <section className="border-b border-ink/10 px-8 py-20">
        <h2 className="text-2xl">What was waiting this morning</h2>
        <p className="mt-3 max-w-xl text-body text-ink/70">
          Four lines from a real Tuesday at a two-partner firm. Three matched
          themselves; the fourth is the one worth ten minutes.
        </p>
        <div className="mt-8 max-w-2xl">
          {morning.map((entry) => (
            <div
              key={entry.id}
              className="flex items-baseline gap-4 border-b border-ink/10 py-3 last:border-b-0"
            >
              <span className="w-52 text-note text-ink/60">{entry.line}</span>
              <span className="w-28 text-right text-body tabular-nums">
                {entry.amount}
              </span>
              <span className="flex-1 text-note">{entry.verdict}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-ink/10 px-8 py-20">
        <h2 className="text-2xl">Where the numbers come from</h2>
        <p className="mt-3 max-w-xl text-body text-ink/70">
          Ledgerline connects to the bank over the same open-banking feed your
          accountant already uses, and reads invoices out of whatever you send
          them from. Nothing is typed twice.
        </p>
        <dl className="mt-8 max-w-2xl divide-y divide-ink/10">
          <div className="flex gap-8 py-3">
            <dt className="w-40 text-note text-ink/60">Bank feed</dt>
            <dd className="text-body">
              Read-only, refreshed at 6am and again at noon.
            </dd>
          </div>
          <div className="flex gap-8 py-3">
            <dt className="w-40 text-note text-ink/60">Invoices</dt>
            <dd className="text-body">
              Imported from Moloni, InvoiceXpress, or a folder of PDFs.
            </dd>
          </div>
          <div className="flex gap-8 py-3">
            <dt className="w-40 text-note text-ink/60">Credit notes</dt>
            <dd className="text-body">
              Matched to the invoice they cancel, so a refund stops reading as a
              gap.
            </dd>
          </div>
          <div className="flex gap-8 py-3">
            <dt className="w-40 text-note text-ink/60">Bank charges</dt>
            <dd className="text-body">
              Recognised and set aside, instead of counted as an unexplained
              line.
            </dd>
          </div>
          <div className="flex gap-8 py-3">
            <dt className="w-40 text-note text-ink/60">Your notes</dt>
            <dd className="text-body">
              Whatever you wrote against a line last month is still there this
              month.
            </dd>
          </div>
        </dl>
      </section>

      <section className="px-8 py-20">
        <h2 className="text-2xl">Two hundred invoices a month or fewer</h2>
        <p className="mt-3 max-w-xl text-body text-ink/70">
          Above that, the reconciliation stops being the hard part and the
          workflow does. We say so on the pricing page rather than after you
          sign up.
        </p>
        <a
          href="/pricing"
          className="mt-8 inline-block rounded-control border border-ink/20 px-5 py-2.5 text-body"
        >
          See what it costs
        </a>
      </section>

      <footer className="border-t border-ink/10 px-8 py-12 text-note text-ink/70">
        <p>Ledgerline, Rua do Almada 42, Porto. Registered in Portugal.</p>
        <div className="mt-4 flex gap-6">
          <a href="/pricing">Pricing</a>
          <a href="/security">How we hold bank credentials</a>
          <a href="mailto:hello@ledgerline.co">hello@ledgerline.co</a>
        </div>
      </footer>
    </main>
  )
}
