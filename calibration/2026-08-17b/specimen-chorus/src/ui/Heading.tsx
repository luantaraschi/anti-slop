import type { ReactNode } from 'react'

/**
 * The three heading levels this page renders. None of them takes a size prop,
 * because a heading's size here is decided by which heading it is and not by
 * the callsite's taste.
 *
 * `Subhead` exists because its class stack was typed out at four callsites —
 * once in HowItWorks, once in Settlement, twice in Price — before anyone
 * noticed that four places had each independently re-decided the same thing.
 */

export function Display({
  children,
  as: Tag = 'h2',
}: {
  children: ReactNode
  as?: 'h1' | 'h2'
}) {
  return (
    <Tag className="max-w-measure text-balance font-display text-display font-extrabold text-houselights">
      {children}
    </Tag>
  )
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-measure text-balance font-display text-title font-extrabold text-houselights">
      {/*
        The gel rule that opens a section. It is the accent doing the work an
        eyebrow label was doing in the draft — marking where a section starts —
        without asking the reader to read a second, smaller version of the
        heading directly above the heading.

        aria-hidden because it says nothing; the heading below it already does.
      */}
      <span aria-hidden="true" className="mb-group block h-inline w-block bg-gel" />
      {children}
    </h2>
  )
}

export function Subhead({ children }: { children: ReactNode }) {
  return (
    <h3 className="max-w-measure text-balance font-display text-lead font-extrabold text-houselights">
      {children}
    </h3>
  )
}
