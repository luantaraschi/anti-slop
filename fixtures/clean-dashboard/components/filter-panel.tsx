"use client"

import { useState } from "react"

import { Button } from "./ui/button"

/**
 * The ledger's one open-and-close, with the trigger that owns it.
 */
export function FilterControls() {
  const [open, setOpen] = useState(false)
  const [overdueOnly, setOverdueOnly] = useState(false)

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
        onToggle={() => setOverdueOnly((wasOn) => !wasOn)}
        onClear={() => setOverdueOnly(false)}
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
        "transition-[opacity,transform]",
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
