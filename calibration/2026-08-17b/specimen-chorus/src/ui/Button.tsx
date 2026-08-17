import type { ReactNode } from 'react'

/**
 * The one control the page repeats. Every use of it is a navigation, so it is
 * an anchor and not a button — middle-click and copy-link both work.
 *
 * Subtraction: a third `quiet` variant — borderless, gel text — existed for the
 * control in the header. The reduction pass removed that control, and a variant
 * with no callsite is a decision nobody is making. It went with it rather than
 * staying behind as an option for the next person to reach for.
 */
type Variant = 'filled' | 'outline'

/**
 * Platform fact: hover does not exist on a touchscreen. A control that answers
 * only `hover:` says nothing back to most of the people who will use this page,
 * so every hover below is declared together with the `active:` that a finger
 * gets. They are in the same string so neither can be added without the other.
 *
 * Every state stays inside the five colours, and all six of them clear 4.5:1
 * against their own text:
 *   filled  rest / hover / press   blackbox on gel 5.72, on houselights 16.99,
 *                                  on haze 5.09
 *   outline rest / hover / press   houselights on blackbox 16.99, gel on
 *                                  blackbox 5.72, blackbox on gel 5.72
 */
const VARIANT: Record<Variant, string> = {
  filled: 'border-gel bg-gel text-blackbox hover:bg-houselights hover:border-houselights active:bg-haze active:border-haze',
  outline: 'border-haze text-houselights hover:border-gel hover:text-gel active:bg-gel active:border-gel active:text-blackbox',
}

/**
 * Platform fact: a target is at least 40px. This one is 68px drawn — the body
 * line box (32px) plus `stack` padding top and bottom (32px) plus the 2px
 * border on each side — so it needs no pseudo-element to reach the floor. The
 * border is on the filled variant too, and not only on the outline, so the two
 * occupy the same box and a row of both does not sit 4px out of alignment.
 */
export function Button({
  href,
  variant = 'filled',
  children,
}: {
  href: string
  variant?: Variant
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center rounded-pill border-2 px-block py-stack',
        'font-text text-body font-medium no-underline',
        'transition-colors duration-press',
        VARIANT[variant],
      ].join(' ')}
    >
      {children}
    </a>
  )
}
