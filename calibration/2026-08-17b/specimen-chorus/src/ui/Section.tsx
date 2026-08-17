import type { ReactNode } from 'react'

/**
 * Every section's vertical rhythm, in one place. `py-section` is 128px, so two
 * adjacent sections sit 256px apart without either of them knowing about the
 * other. The horizontal padding steps from `stack` to `block` at the one
 * breakpoint, which is the same place the layouts inside change.
 *
 * `track` picks which of the two declared widths the section's content sits in:
 * `measure` for a section that is only prose, `wide` for one with a layout.
 *
 * Subtraction: this took an `eyebrow` prop and six sections passed one — "How
 * it works", "Settlement", "Reach", "Price", "Limits", "Get started". Every one
 * of them was a smaller, duller restatement of the heading three lines below
 * it, and the gel rule that opens a Title already says a section has started.
 * Removing them lost nothing, which is the answer. The prop went with them so
 * nobody can pass one back.
 */
export function Section({
  track = 'wide',
  children,
}: {
  track?: 'measure' | 'wide'
  children: ReactNode
}) {
  return (
    <section className="px-stack py-section lap:px-block">
      <div className={`mx-auto ${track === 'measure' ? 'max-w-measure' : 'max-w-wide'}`}>
        {children}
      </div>
    </section>
  )
}
