import type { ReactNode } from 'react'

/**
 * The three text steps that carry sentences, all constrained to `measure` so
 * no paragraph on this page runs past the width it was derived for. A width
 * applied here rather than at each callsite is the reason no section can quietly
 * set prose across the full track.
 *
 * Colour: Lede and Body are houselights (16.99:1) because they are read; Note
 * is haze (5.09:1) because it is glanced at. Neither is under 4.5:1.
 */

export function Lede({ children }: { children: ReactNode }) {
  return <p className="max-w-measure text-pretty text-lead text-houselights">{children}</p>
}

export function Body({ children }: { children: ReactNode }) {
  return <p className="max-w-measure text-pretty text-body text-houselights">{children}</p>
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="max-w-measure text-pretty text-note uppercase text-haze">{children}</p>
}
