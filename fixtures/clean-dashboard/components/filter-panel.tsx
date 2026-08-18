"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Button } from "./ui/button"

/**
 * The ledger's one open-and-close, with the trigger that owns it.
 *
 * Two pieces of state, kept in two different places on purpose. Whether the
 * panel is open is this component's business and nobody else's, so it lives in
 * React. What the ledger is filtered to is the answer to "which invoices am I
 * looking at", so it lives in the URL: a colleague you send this link to sees
 * the ledger you were reading, and the back button undoes the filter.
 */
export function FilterControls() {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const overdueOnly = params.get("overdue") === "1"

  function setOverdue(next: boolean) {
    const query = new URLSearchParams(params)
    if (next) query.set("overdue", "1")
    else query.delete("overdue")
    const search = query.toString()
    // push rather than replace: the filter is a place the reader can be, so
    // the back button has to take them out of it again.
    router.push(search ? `${pathname}?${search}` : pathname)
  }

  return (
    <div>
      <Button
        variant="quiet"
        size="row"
        aria-expanded={open}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        {open ? "Hide filters" : "Filters"}
      </Button>
      <FilterPanel
        open={open}
        overdueOnly={overdueOnly}
        onToggle={() => setOverdue(!overdueOnly)}
        onClear={() => setOverdue(false)}
      />
    </div>
  )
}

/**
 * Driven by interactive state, so it moves on a transition rather than a
 * keyframe: change your mind halfway and the panel retargets from wherever it
 * currently sits instead of restarting its timeline from the top.
 */
export function FilterPanel({
  open,
  overdueOnly,
  onToggle,
  onClear,
}: {
  open: boolean
  overdueOnly: boolean
  onToggle: () => void
  onClear: () => void
}) {
  return (
    <div
      className={[
        // 12 = 5 + 7: the panel's radius is the control's radius plus the
        // padding around it, so the two curves stay concentric.
        "mt-2 flex gap-[7px] rounded-panel border border-rule p-[7px] dark:border-rule/25",
        "transition-[opacity,transform] motion-reduce:transition-none",
        // The entrance takes its time. The exit is half as long and travels the
        // same six pixels, because whatever is leaving has already lost the eye
        // to whatever comes next.
        open
          ? "translate-y-0 opacity-100 duration-200 ease-out"
          : "pointer-events-none -translate-y-1.5 opacity-0 duration-100 ease-in",
      ].join(" ")}
    >
      <Button
        variant="quiet"
        size="row"
        aria-pressed={overdueOnly}
        onClick={onToggle}
      >
        Overdue only
      </Button>
      {/* Nothing to clear until something is on, so the button dims and the
          attribute goes with it: the look and the behaviour agree. */}
      <Button
        variant="quiet"
        size="row"
        disabled={!overdueOnly}
        onClick={onClear}
      >
        Clear
      </Button>
    </div>
  )
}
