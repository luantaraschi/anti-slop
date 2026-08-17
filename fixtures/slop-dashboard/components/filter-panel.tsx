"use client"

import { useState } from "react"

export function FilterPanel({ open }: { open: boolean }) {
  const [overdueOnly, setOverdueOnly] = useState(false)
  const [sort, setSort] = useState("newest")

  return (
    <>
      {open && (
        <div className="animate-[slideIn_200ms_ease-out_forwards] rounded-2xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-sm font-bold">Filters</h3>
          <button
            onClick={() => setOverdueOnly((v) => !v)}
            className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-bold hover:bg-gray-50"
          >
            {overdueOnly ? "Showing overdue" : "Overdue only"}
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-2xl border border-gray-200 px-4 py-2 text-sm text-gray-500"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      )}
    </>
  )
}
