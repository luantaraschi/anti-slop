import { useState } from 'react'
import { Action } from './components/Action'
import { Panel } from './components/Panel'
import { Section } from './components/Section'
import { control } from './components/control'

/**
 * Price, and the arithmetic on it.
 *
 * Every constant here is in INVENTORY.md. The only numbers on this page that
 * are not in the brief are products of numbers that are, which is arithmetic
 * and not invention.
 */

/** Brief: $18 per zone per month, no free tier. */
const PER_ZONE_PER_MONTH = 18

/** Brief: a typical farm runs 6 to 20 zones. */
const TYPICAL_MIN = 6
const TYPICAL_MAX = 20

/** DERIVATION: the stepper opens at the midpoint of the typical range,
 *  (6 + 20) / 2 = 13, so the first number a grower sees is the middle of
 *  their own range rather than the cheapest one we could show them. */
const OPENS_AT = (TYPICAL_MIN + TYPICAL_MAX) / 2

/** ACCEPTED COST: the stepper stops at 1 and at 24. The brief's typical range
 *  is 6 to 20 and this control exists to price that range, not to model every
 *  farm — a grower running 30 zones hits the ceiling and has to multiply by
 *  18 themselves. Accepted rather than inventing an upper bound the brief
 *  does not have and presenting it as a limit of the product. */
const FLOOR = 1
const CEILING = 24

/** PLATFORM FACT: Intl formats the currency for the reader's locale rules
 *  rather than by string concatenation, which gets the separator wrong the
 *  moment the total passes a thousand. Fraction digits are pinned to zero
 *  because every total this can produce is a whole number of dollars. */
const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

/**
 * PLATFORM FACT: a disabled control's look and its `disabled` attribute have
 * to move together. They do, because this string is only ever spread onto an
 * element that also receives the attribute, and because it is written once —
 * a second copy would be free to keep greying a control after someone removed
 * the attribute, leaving something that looks unavailable and is not.
 *
 * It lives here rather than in components/control.ts because the stepper is
 * the only control on the site that can be disabled: the page's two Actions
 * are anchors, and an anchor has no `disabled` attribute to pair a look with.
 *
 * `cursor-not-allowed` is the only cursor this site sets. The pointer over a
 * live control is the browser's, which is what the reader's OS asked for.
 */
const disabledLook = [
  'disabled:cursor-not-allowed',
  'disabled:border-silt-rule',
  'disabled:bg-transparent',
  'disabled:text-silt-quiet',
].join(' ')

/**
 * StepButton — the − and the + .
 *
 * Two callsites, so it is a component. It is not an `Action` variant: an
 * Action carries a label that says what it does, and this control's meaning
 * is entirely positional — the glyph is legible only because of the number it
 * sits beside. Giving it a variant would have put a labelless button into the
 * same switch as the page's two labelled ones.
 *
 * It shares `control` with Action, which is where the 40px target, the focus
 * outline and the transition are decided once.
 */
function StepButton({
  label,
  glyph,
  onClick,
  disabled,
}: {
  label: string
  glyph: string
  onClick: () => void
  disabled: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={[
        control,
        disabledLook,
        'min-w-target',
        'rounded-control border border-silt-rule bg-loam-bed',
        'font-field text-body text-furrow',
        'hover:bg-water-mark hover:text-ink-on-water hover:border-water-mark',
        'active:bg-furrow active:text-loam-bed active:border-furrow',
      ].join(' ')}
    >
      {/* aria-hidden because the accessible name is on the button. A screen
          reader announcing "minus sign, decrease zone count" reads the
          decoration twice. */}
      <span aria-hidden="true">{glyph}</span>
    </button>
  )
}

export function Pricing() {
  const [zones, setZones] = useState(OPENS_AT)
  const monthly = zones * PER_ZONE_PER_MONTH

  return (
    <Section
      id="pricing"
      title="$18 per zone per month."
      lead="No free tier. You pay for the zones you run, and a typical farm runs six to twenty."
    >
      {/* `wash` tone: the tint says this part is yours to change. It is the
          only tinted surface on the site, which is what keeps that meaning. */}
      <Panel tone="wash" className="max-w-measure p-tight">
        {/* DERIVATION, and the reason the radius scale has two values rather
            than three arbitrary ones: this tray is padded by `tight` (6px)
            and the controls inside it carry `rounded-control` (6px), so the
            tray's own radius has to be 6 + 6 = 12px — `rounded-panel` — for
            the two curves to stay concentric. Change `p-tight` here and
            `panel` in tailwind.config.ts moves with it; the equation is
            written at that value so the next person changes both. */}
        {/* No padding on this row. The tray's own `p-tight` is the whole gap
            between the stepper's border and the tray's border, which is what
            makes 6 + 6 = 12 true rather than decorative — an inner `p-inline`
            here would have put the controls 18px in and left the panel's
            radius describing a distance nothing keeps. */}
        <div className="flex flex-wrap items-center justify-between gap-inline">
          <div className="flex items-center gap-inline">
            <StepButton
              label="One fewer zone"
              glyph="−"
              disabled={zones <= FLOOR}
              onClick={() => setZones((n) => Math.max(FLOOR, n - 1))}
            />

            <output
              /* PLATFORM FACT: tabular-nums. This number changes under a
                 button, and proportional digits have different widths, so the
                 word beside it would shift sideways on every press.
                 DERIVATION: `min-w-[2ch]` — CEILING is 24, so the widest this
                 can ever be is two digits, and reserving exactly that stops
                 the row reflowing at 9 → 10 without reserving space for a
                 digit that cannot arrive.
                 SUBTRACTION (reduction pass): this element carried
                 `htmlFor="zone-count"`, pointing at an id no element on the
                 page has — a leftover from a draft where the stepper was a
                 number input. */
              className="font-field text-body tabular-nums text-center min-w-[2ch]"
            >
              {zones}
            </output>

            <StepButton
              label="One more zone"
              glyph="+"
              disabled={zones >= CEILING}
              onClick={() => setZones((n) => Math.min(CEILING, n + 1))}
            />

            <span className="font-field text-body text-silt-quiet">
              {zones === 1 ? 'zone' : 'zones'}
            </span>
          </div>

          {/* aria-live so that a screen reader hears the total change; the
              stepper buttons keep their own labels and do not announce it. */}
          <p
            aria-live="polite"
            /* `px-inline` is optical, not structural: the total is type and
               not a bordered control, so it needs its own inset from the
               tray edge that the stepper gets from its border. */
            className="font-bulletin text-figure tabular-nums px-inline"
          >
            {usd.format(monthly)}
            <span className="font-field text-aside text-silt-quiet"> / month</span>
          </p>
        </div>
      </Panel>

      {/* SUBTRACTION — an annual total sat under the monthly one and was
          removed. It is the same fact multiplied by twelve, it invited a
          "save with annual billing" line the brief has no discount for, and
          a grower deciding on irrigation for one season does not budget in
          years. Nothing was lost: the monthly number is the number they
          will be charged. */}

      {/* ABSTENTION — the total does not count up when it changes. The
          animation was available and the number is not an event; it is a
          fact that was already true before the button was pressed, and
          animating it would make an arithmetic result look like a result. */}

      <div className="mt-stack">
        <Action href="/signup">Set up your zones</Action>
      </div>

      <p className="font-field text-aside mt-stack max-w-measure text-silt-quiet">
        In our pilot, one 14-acre farm used 40% less water in June. That is one farm and one June.
        It is the only number we have, and it is not a promise about yours.
      </p>
      {/* Root 2, the voice: the figure never appears without its attribution
          in the same breath. Splitting them — the 40% in a heading, the "in
          our pilot" in a footnote — is how a cited number becomes a claim,
          and this is the one number the brief permits, so it is the one that
          must not be overstated. */}
    </Section>
  )
}
