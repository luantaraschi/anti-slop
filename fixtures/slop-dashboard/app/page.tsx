import { StatCard } from "@/components/stat-card"
import { InvoiceTable } from "@/components/table"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const rows = [
  { id: "INV-1041", total: "$2,400.00" },
  { id: "INV-1042", total: "$860.00" },
  { id: "INV-1043", total: "$12,190.00" },
  { id: "INV-1044", total: "$310.00" },
]

export default function Page() {
  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button>New invoice</Button>
      </div>
      <div className="grid grid-cols-3 gap-6 p-6">
        <StatCard label="Revenue" value="$48,120" />
        <StatCard label="Invoices" value="128" />
        <StatCard label="Overdue" value="12" />
      </div>
      <Card className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-4">
        <p className="text-sm text-gray-500">Recent invoices</p>
        <InvoiceTable rows={rows} />
      </Card>
      <div className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-4">
        <input
          className="rounded-2xl border border-gray-200 px-4 py-2 text-sm text-gray-500"
          placeholder="Search invoices"
        />
        <button className="rounded-2xl border border-gray-200 shadow-lg px-4 py-2 text-sm font-bold">
          Export CSV
        </button>
      </div>
    </main>
  )
}
