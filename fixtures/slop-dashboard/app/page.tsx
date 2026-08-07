"use client"

import { useEffect, useState } from "react"
import { StatCard } from "@/components/stat-card"
import { InvoiceTable } from "@/components/table"
import { FilterPanel } from "@/components/filter-panel"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const POLL_MS = 5000

const rows = [
  { id: "INV-1041", total: "$2,400.00" },
  { id: "INV-1042", total: "$860.00" },
  { id: "INV-1043", total: "$12,190.00" },
  { id: "INV-1044", total: "$310.00" },
]

export default function DashboardPage() {
  const [stats, setStats] = useState({ revenue: 48120, invoices: 128, overdue: 12 })
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      fetch("/api/stats")
        .then((r) => r.json())
        .then(setStats)
    }, POLL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <button className="size-5" aria-label="Refresh">
            <svg viewBox="0 0 20 20" className="size-5" fill="currentColor">
              <path d="M10 3a7 7 0 1 0 6.7 9h-2.1A5 5 0 1 1 10 5v3l4-4-4-4v3Z" />
            </svg>
          </button>
          <Button>New invoice</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 p-6">
        <StatCard label="Revenue" value={`$${stats.revenue.toLocaleString()}`} />
        <StatCard label="Invoices" value={String(stats.invoices)} />
        <StatCard label="Overdue" value={String(stats.overdue)} />
      </div>
      <Card className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-4">
        <p className="text-sm text-gray-500">Recent invoices</p>
        <InvoiceTable rows={rows} />
      </Card>
      <div className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-4">
        <h2 className="text-lg font-bold">Invoices</h2>
        <input
          className="rounded-2xl border border-gray-200 px-4 py-2 text-sm text-gray-500"
          placeholder="Search invoices"
        />
        <div className="flex gap-3">
          <button className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-bold hover:bg-gray-50">
            Export CSV
          </button>
          <button disabled className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-bold">
            Send reminders
          </button>
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-bold hover:bg-gray-50"
          >
            Filters
          </button>
        </div>
      </div>
      <FilterPanel open={filtersOpen} />
    </main>
  )
}
