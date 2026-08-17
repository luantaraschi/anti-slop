# anti-slop audit — slop-landing

Mode: full (Surface, Craft, Words, Finish). Target:
`fixtures/slop-landing/`

Tree read in full: `index.html`, `tailwind.config.ts`, `src/Hero.tsx`, `src/App.tsx`. No
`globals.css`, no tokens file, no `components/ui/`, no router.

## Verdict

A gradient-landing template instantiated once and never revisited: the
purple-to-blue hero, the pill badge, the three-card feature grid, and the
three-stat strip are the mold's own signature rather than anything the
product earned; the copy repeats the mold's own stock lines almost word for
word ("The platform for teams that move fast," "Built on infrastructure your
team already trusts"); and the tab still reads "Vite + React" above the
Vite favicon, over a footer that copyrights "Your Company."

## Findings

```
ROOT
A8  Hero+3-card+3-stat template, unshaped by any subject   src/Hero.tsx:3  fixes A2, A7, W1, W6, W7
F2  Title still "Vite + React"                              index.html:7

THEN
A2  Purple-to-blue generator gradient, ignores theme tokens src/Hero.tsx:5
F5  Favicon still Vite's default vite.svg                   index.html:5
W7  Rule of three, four separate times on one page          src/App.tsx:12
A7  Sparkles/Zap/Rocket/TrendingUp/CheckCircle2, no function src/Hero.tsx:10
W6  Two unbacked claims lifted straight from the catalog     src/Hero.tsx:14
W1  "Get Started" / "Learn More" as the only two CTAs        src/Hero.tsx:21
F12 "Your Company" + four href="#" links to nowhere          src/App.tsx:73
```

### A8 — Template layout nobody shaped to the subject

`src/Hero.tsx:3` (hero), `src/App.tsx:12` (feature grid), `src/App.tsx:38`
(stat strip). Root finding.

The hero is a pill badge, an h1, a one-line subtitle, and two buttons
(`Hero.tsx:6-29`) — the exact structure the reference catalog names as the
template signal. Under it sits a three-card feature grid (`App.tsx:12-34`)
and a three-number stat strip (`App.tsx:38-51`). Nothing in either grid is
specific to a product: "Fast," "Scalable," "Reliable" are the generic
triad, and "10k+ / 99.9% / 24/7" are vanity numbers with no source, not
"the product's core information" the exemption asks for. Fixing this — 
opening with whatever is actually distinctive about the product instead of
the mold's slots — removes the reason the gradient exists (A2), the reason
an icon sits next to every label (A7), the reason the CTAs settled for
catalog verbs (W1), and the reason every section lands on exactly three
(W7): all four are filler for slots this template creates, not choices made
about this product.

### F2 — Title still "Vite + React"

`index.html:7`. Root finding.

The `<title>` is the framework scaffold's own default, unedited. The spec
is explicit that a surviving framework default is never exempt, single-route
app or not. This is the cheapest possible signal that nothing after
`npm create vite` was ever revisited, and it sets the floor the other three
axes get read against.

### A2 — Generator gradient

`src/Hero.tsx:5`: `bg-gradient-to-r from-purple-600 to-blue-500`.

`tailwind.config.ts:6-11` does declare a theme (`night`, `mist`, `brand`),
so the palette itself isn't the finding — but this gradient doesn't draw
from any of those three tokens. It's the raw Tailwind stops, purple-to-blue,
which is the specific pairing the catalog names as a generator's output
vintage, sitting right next to evidence that someone *did* pick colors for
everything else on the page. That gap is what makes it a finding rather
than a style choice: the one place a decision is most visible (the hero
background) is the one place the theme wasn't used.

### F5 — Favicon still Vite's default

`index.html:5`: `<link rel="icon" type="image/svg+xml" href="/vite.svg" />`.

Byte-for-byte the scaffold's own icon. Nothing in the tree suggests this is
a declared prototype that will never ship — it's a marketing landing page
with a signup link — so the exemption doesn't apply.

### W7 — Rule of three, four times over

`src/App.tsx:12` (3 feature cards), `src/App.tsx:38` (3 stat tiles),
`src/App.tsx:56` (3 checklist items), `src/App.tsx:74` (3 footer links).

Every single grouped section on this one-page site lands on exactly three
items. The exemption requires other sections to carry a different count as
evidence someone actually counted what exists; here there is no other
count anywhere to point to. Four-for-four is the strongest form this tell
takes.

### A7 — Decorative icons with no function

`src/Hero.tsx:10` (`Sparkles` inside the h1), `src/App.tsx:14,21,28`
(`Zap`, `Rocket`, `TrendingUp`, one per feature card), `src/App.tsx:58`
(`CheckCircle2`, repeated per list item).

Five icons across a four-file project, and all five are named verbatim in
the reference catalog's own signal list for this tell (`Sparkles, Zap,
Rocket, TrendingUp, CheckCircle2`). None distinguishes anything: the
`Sparkles` in the headline decorates a sentence, and the per-card icons map
one-to-one with a label the text already states. No icon system exists
elsewhere in the tree to exempt this.

### W6 — Unbacked claims

`src/Hero.tsx:14`: "The platform for teams that move fast." `src/App.tsx:31`:
"Built on infrastructure your team already trusts."

Both lines assert capability and trust with nothing behind either claim —
no named infrastructure, no comparison, no number. Neither the "brand voice
is openly promotional" door nor the "backs the claim with a verifiable
fact" door opens here.

### W1 — Catalog labels

`src/Hero.tsx:21` ("Get Started"), `src/Hero.tsx:27` ("Learn More").

The hero's only two calls to action are both stock verbs describing what a
button generically does, not what a person gets — "Get Started" names no
outcome, and "Learn More" points at `href="#"`, which doesn't even resolve
to content to learn from.

### F12 — Surviving placeholders

`src/App.tsx:73`: "© 2026 Your Company. All rights reserved." `src/Hero.tsx:24`
and `src/App.tsx:75-77`: four links (`Learn More`, `Privacy`, `Terms`,
`Contact`) all set to `href="#"`.

"Your Company" is the literal placeholder the catalog names, left in a
footer that otherwise reads as finished. Paired with four dead anchors, it's
the cheapest proof available that the page was never read again before
shipping.

## Considered and declined

- **A1** (palette), **A3** (radius), **A5** (type scale) — all have direct
  evidence in `tailwind.config.ts:6-20`: named colors, two radii tied to
  element type (`pill` on controls, `card` on panels), a declared font
  scale and two named families. Decision recorded; tell doesn't fire.
- **A4** (elevation without a system) — every card uses `border` only, no
  shadow anywhere in the tree. One separation device, used consistently:
  the exemption's own description.
- **A6** (uniform rhythm) — spacing scales with proximity (`mt-2` between a
  heading and its paragraph, `mt-12` between a heading and its grid,
  `py-20`/`py-24` between sections), not a single repeated value.
- **A9** (generic motion) — no `transition`, no `hover:scale`, no keyframe
  in the tree at all; the condition this tell checks for never arises.
- **A10** (primitives hand-rolled) — no `components/ui/` and no primitives
  installed anywhere to be bypassed.
- **C1–C3, C5–C8, C10–C12** — each requires a condition (nested radii,
  asymmetric icon in a control, a live-updating number, a sub-40px
  interactive target, a content `<img>`, an animated enter/exit, a
  keyframe-driven toggle, a dark theme, a disabled state, a color-only
  status) that doesn't exist anywhere in this four-file, no-interaction
  landing page.
- **C9** (no pressed state) — no control anywhere carries a `hover:` state
  either; the absence is uniform across the tree, which is the stated
  exemption.
- **C4** (heading/paragraph wrap) — plausible on the hero h1 at narrow
  widths, but this can't be confirmed without a render, and cutting it kept
  the list to the strongest, most certain findings.
- **W2–W5** — no confirmation dialog to disagree with a button, no empty
  list state, no error message, no implementation jargon anywhere in the
  copy. Conditions don't arise.
- **F1** — `<html lang="en">` is present and correct.
- **F6** — exactly one `<h1>` on the page.
- **F7** — no `<img>` tags; the icons are inline `lucide-react` SVG
  components, not images that could be missing `alt`.
- **F8, F9, F10** — single-route app with no router; each tell's own
  exemption for a single-path site applies directly.
- **F11** — every list in the tree is hand-written JSX, no `.map()` call
  exists to key.
- **F3** (no meta description), **F4** (no Open Graph tags) — both true and
  both would fire, but they add little the F2/F5/F12 trio doesn't already
  establish, and the report format caps at ten; cut for redundancy against
  higher-leverage Finish findings, not for a false-positive reason.
