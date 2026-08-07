"use client"

import { useEffect, useState } from "react"

const REFRESH_MS = 30_000

/**
 * A figure with the period it covers. Resting surface: border only, never a
 * shadow — elevation is reserved for the one panel that floats.
 *
 * The amount reopens the ledger every half minute while the page is up, so it
 * is set in tabular figures: the digits keep their column and the line beneath
 * never shifts when a total changes.
 */
export function LedgerStat({
  label,
  amount,
  period,
  metric,
  tone = "neutral",
}: {
  label: string
  amount: string
  period: string
  metric: string
  tone?: "neutral" | "overdue"
}) {
  const [current, setCurrent] = useState(amount)

  useEffect(() => {
    const timer = setInterval(() => {
      fetch(`/api/totals/${metric}`)
        .then((response) => response.json())
        .then((total) => setCurrent(total.amount))
    }, REFRESH_MS)
    return () => clearInterval(timer)
  }, [metric])

  return (
    <div className="rounded-panel border border-rule px-5 py-4 dark:border-rule/25">
      <p className="text-note uppercase tracking-wide text-ink/60 dark:text-paper/60">
        {label}
      </p>
      <p
        className={`mt-1 font-figure text-figure tabular-nums ${
          tone === "overdue" ? "text-flag" : "text-ink dark:text-paper"
        }`}
      >
        {current}
      </p>
      <p className="mt-3 text-note text-ink/60 dark:text-paper/60">{period}</p>
    </div>
  )
}
