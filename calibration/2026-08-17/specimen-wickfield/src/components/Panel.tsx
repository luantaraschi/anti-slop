import type { ReactNode } from 'react'

/**
 * Panel — a resting surface with a border.
 *
 * Extracted because the same six classes were about to be typed in
 * WhenItBreaks and again in Pricing. Two callsites is the threshold.
 *
 * SUBTRACTION: no `elevated` variant, no `hover` variant, no `interactive`
 * variant. A panel here does not float (the theme declares no shadow scale)
 * and does not respond to a pointer, because nothing on this site is a
 * clickable card. What separates it from the page is the 1px `silt-rule`
 * border, which is the whole mechanism.
 */

type Props = {
  children: ReactNode
  /** `wash` tints the panel with the water stop. Used once, by the stepper
   *  tray, where the tint says "this part is yours to change". */
  tone?: 'bed' | 'wash'
  className?: string
}

export function Panel({ children, tone = 'bed', className = '' }: Props) {
  const surface = tone === 'bed' ? 'bg-loam-bed' : 'bg-water-wash'

  return (
    <div className={`${surface} border border-silt-rule rounded-panel ${className}`}>
      {children}
    </div>
  )
}
