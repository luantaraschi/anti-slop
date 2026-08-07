export function InvoiceTable({ rows }: { rows: { id: string; total: string }[] }) {
  if (rows.length === 0) {
    return <p className="text-sm text-gray-500">No items found</p>
  }
  return (
    <div className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-4">
      {rows.map((row) => (
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">{row.id}</span>
          <span className="text-sm font-bold">{row.total}</span>
        </div>
      ))}
    </div>
  )
}
