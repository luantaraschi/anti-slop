/**
 * A figure with the period it covers. Resting surface: border only, never a
 * shadow — elevation is reserved for the one panel that floats.
 */
export function LedgerStat({
  label,
  amount,
  period,
  tone = "neutral",
}: {
  label: string
  amount: string
  period: string
  tone?: "neutral" | "overdue"
}) {
  return (
    <div className="rounded-panel border border-rule px-5 py-4">
      <p className="text-note uppercase tracking-wide text-ink/60">{label}</p>
      <p
        className={`mt-1 font-figure text-figure tabular-nums ${
          tone === "overdue" ? "text-flag" : "text-ink"
        }`}
      >
        {amount}
      </p>
      <p className="mt-3 text-note text-ink/60">{period}</p>
    </div>
  )
}
