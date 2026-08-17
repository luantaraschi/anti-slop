import type { ReactNode } from 'react'
import { control } from './control'

/**
 * Action — every call to action on the site.
 *
 * SUBTRACTION: shadcn's Button ships six variants (default, destructive,
 * outline, secondary, ghost, link) and four sizes. Two variants are declared
 * here and the other four are not written down, because this site renders
 * exactly two kinds of action:
 *
 *   solid — the thing the section it sits in exists to offer
 *   quiet — a route to somewhere else on the page
 *
 * `destructive` has nothing to destroy on a marketing page. `secondary` and
 * `ghost` are two names for the same absence of emphasis, and this page has
 * one level of it, which is `quiet`. `outline` was `quiet` with a border and
 * lost to the border-free version, because a bordered action standing beside
 * a solid one reads as a pair of equals, and these are never equals.
 *
 * SUBTRACTION: no size prop. Sizes are a variant axis only if the product
 * renders more than one action size. This one does not, so there is nothing
 * to switch on and no default to get wrong.
 *
 * SUBTRACTION (reduction pass): this component had a `<button>` branch, an
 * `onClick` and a `className` escape hatch. All three actions on the built
 * page are navigations, no callsite passed a class, and a branch nothing
 * renders is a decision nobody made. It renders an anchor and only an anchor.
 * The one control on the site that is genuinely a button — the stepper in
 * src/Pricing.tsx — is not an Action and says there why.
 */

type Variant = 'solid' | 'quiet'

const variants: Record<Variant, string> = {
  /* Root 3, sober: the solid action is flat `water-mark`. A gradient was
     available and is not here — an expressive temperature earns one and this
     product's does not.
     `ink-on-water` flips per theme in src/index.css, so this line never has
     to know which theme it is in.
     hover and active sit in the same declaration, per the rule in control.ts.
     They are deliberately different states and not two names for one: hover
     goes to ink, and active inverts to the wash — because active is the only
     one of the two a touch user will ever see, so it has to be legible as a
     press on its own rather than as a slight deepening of a hover that never
     happened. */
  solid: [
    'bg-water-mark text-ink-on-water border border-water-mark',
    'px-stack py-inline rounded-control',
    'font-field text-body',
    'hover:bg-furrow hover:border-furrow',
    'active:bg-water-wash active:text-water-mark active:border-water-mark',
  ].join(' '),

  /* The quiet action carries an underline that is already there rather than
     one that appears on hover: an underline that only exists under a pointer
     is a link that is invisible to everyone not currently pointing at it, and
     on a touchscreen that is everyone. Hover and active move the colour, not
     the decoration. */
  quiet: [
    'text-water-mark underline decoration-silt-rule underline-offset-4',
    'px-inline py-tight rounded-control border border-transparent',
    'font-field text-body',
    'hover:text-furrow hover:decoration-furrow',
    'active:text-furrow active:bg-water-wash active:decoration-furrow',
  ].join(' '),
}

type Props = {
  children: ReactNode
  href: string
  variant?: Variant
}

export function Action({ children, href, variant = 'solid' }: Props) {
  return (
    <a href={href} className={`${control} ${variants[variant]}`}>
      {children}
    </a>
  )
}
