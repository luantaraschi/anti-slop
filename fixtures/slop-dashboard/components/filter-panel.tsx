"use client"

export function FilterPanel({ open }: { open: boolean }) {
  if (!open) {
    return <div style={{ display: "none" }} />
  }
  return (
    <div className="animate-[slideIn_200ms_ease-out_forwards] rounded-2xl border border-gray-200 shadow-lg p-6">
      <h3 className="text-sm font-bold">Filters</h3>
    </div>
  )
}
