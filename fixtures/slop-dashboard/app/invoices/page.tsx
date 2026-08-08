import { InvoiceTable } from "@/components/table"

const rows: { id: string; total: string; status: "overdue" | "paid" | "draft" }[] = []

export default function InvoicesPage() {
  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between p-6">
        <h1 className="text-2xl font-bold">Invoices</h1>
      </div>
      <div className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-4">
        <p className="text-sm text-gray-500">All invoices</p>
        <InvoiceTable rows={rows} />
      </div>
    </main>
  )
}
