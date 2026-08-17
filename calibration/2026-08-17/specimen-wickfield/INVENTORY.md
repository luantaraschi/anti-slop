# Wickfield — the four roots

Written before any code. Root 1 is the only source the copy on this site is
allowed to draw on.

---

## Root 1 — What the product concretely is

### Capabilities (all from the brief, nothing added)

- Reads the farm's soil-moisture probes.
- Reads the local 10-day forecast.
- Tells the grower which zones to water and when to skip.
- The grower sets a target moisture band per zone.
- Wickfield opens and closes the valves to hold that band.
- Sends a message when a probe stops reporting.
- Sends a message when a valve fails to close.

### Figures and names that may appear on screen

| Fact | Value |
|---|---|
| Zone naming | The grower names them |
| Zone count, typical farm | 6 to 20 |
| Probe reporting interval | every 15 minutes |
| Forecast horizon | 10 days |
| Valve controllers integrated | Hunter, Rain Bird |
| Pilot result | one 14-acre farm, 40% of its June water use saved — **citable only as a pilot figure** |
| Price | $18 per zone per month |
| Free tier | none |

### Audience

Growers running 5 to 50 acres who currently schedule irrigation on a timer and
check moisture by hand.

### Explicitly not available

No testimonials. No customer logos. No metric other than the pilot figure. No
awards. No team page. No named customer. No live zone data — the site renders
no dashboard, because every zone name in one would be invented (see the
abstention in `src/Hero.tsx`).

### Arithmetic that is allowed on the above

Multiplying real figures is not invention. Two derived numbers are used:

- `zones × $18` — the monthly cost, in `src/Pricing.tsx`.
- `(6 + 20) / 2 = 13` — the stepper's opening value, the midpoint of the
  brief's typical range.

### Copy not present in the inventory, and therefore not written

"Save water." "Grow more." "Smart irrigation." "AI-powered." Any number other
than 15, 10, 6, 20, 14, 40, 18. Any second customer.

---

## Root 2 — The voice

**The brief does not state a voice.** This is derived from the audience and
from the one behaviour that distinguishes the product — that it messages you
when it fails. Stated as a sentence a line can be tested against:

> **Wickfield says what it does and what it cannot do, in the grower's own
> nouns, and never makes a claim it cannot point at.**

Tests:

- "Revolutionise your irrigation" — fails. Not a grower's noun, nothing to
  point at.
- "Skip Zone 4 — rain Thursday" — passes.
- "Cut your water use by up to 60%" — fails. Nothing to point at.
- "One 14-acre farm used 40% less water in June. That is one farm's June." —
  passes.

Consequence for the page: the pilot figure never appears without its
attribution attached in the same sentence, and the failure messages get a
section of their own rather than a footnote.

---

## Root 3 — The visual temperature

**The brief does not state a temperature.** Derived from what the product is
trusted with: it opens and closes valves on someone's crop, unattended, and
its distinguishing feature is a failure alert. It replaces a mechanical timer
in a pump shed.

**Sober-institutional.** Nearer the extension-service bulletin than the
consumer app.

Consequences carried into the theme:

- No gradient anywhere. A sober temperature does not earn one.
- Exactly one saturated colour on the page, and it belongs to the state that
  needs a person — `wilt`. Everything else is low-chroma.
- Headings in a serif, because the register the audience already reads
  irrigation guidance in is printed, not shipped.
- Movement only where it reports interactive state. No scroll reveal, no
  count-up, no hero animation.

---

## Root 4 — The density

**The brief does not state a density.** Derived from the audience: growers who
currently check moisture by hand are evaluating whether to hand over the
valves, and the questions they arrive with — what does it read, what does it
do, what does it cost — should be answerable without scrolling through one
claim per screen.

**Dense.** Body at 16px, step ratio 1.2, five type steps, a 46rem page column.

Consequences carried into the theme and the page:

- The price appears in the first screen. A sparse page defers it; a dense page
  for a sceptical buyer does not.
- Sections are prose and rules, not a grid of cards.
- Vertical rhythm is a 6px ladder, not the framework's 4px one.

---

## Where these are recorded in code

| Root | Lands in |
|---|---|
| 1 | every string in `src/Hero.tsx`, `src/Holding.tsx`, `src/WhenItBreaks.tsx`, `src/Pricing.tsx`; the abstention on a mocked dashboard at the top of `src/Hero.tsx` |
| 2 | the copy itself; `tailwind.config.ts` `fontFamily`; the abstention on icons at the top of `src/Holding.tsx`; the pilot-figure note at the foot of `src/Pricing.tsx` |
| 3 | `src/index.css` colour tokens (both themes); `tailwind.config.ts` `boxShadow` and `transitionDuration` |
| 4 | `tailwind.config.ts` `fontSize`, `spacing`, `borderRadius`, `maxWidth` |
