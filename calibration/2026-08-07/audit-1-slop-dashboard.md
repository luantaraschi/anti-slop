Verdict — a stock dashboard whose theme was never populated: `tailwind.config.ts`
declares no colors, radii, or type scale, so `Button` and `Card` sit unused in
`components/ui/` while every card, input, and toolbar button hand-rolls the
same `rounded-2xl border-gray-200 shadow-lg` by hand (down to a card nested
inside an identical card), and the few details that were wired once — dark
mode, the disabled button, the live stat numbers — were only ever checked in
that one spot.

ROOT
A1  Palette nobody picked          tailwind.config.ts:5    fixes A3, A4, A10, C1
C10 Dark mode wired on <body> only app/layout.tsx:8

THEN
C12 Status carried by dot color alone   components/table.tsx:19
W3  Invoices page dead-ends empty       components/table.tsx:13
C3  Stat numbers jitter every 5s        components/stat-card.tsx:5
A6  p-6 at every level of the tree      app/page.tsx:33
C11 Disabled button looks clickable     app/page.tsx:64
F2  One <title> across both routes      app/layout.tsx:3
F1  <html> without lang                 app/layout.tsx:7

---

## Findings

### ROOT — A1: Palette nobody picked
`tailwind.config.ts:5` — `theme: { extend: {} }` is completely empty: no
colors, no radii, no font sizes, nothing. `app/globals.css` backs that up —
its only content is a `@keyframes` block, no custom properties under `:root`.
Every color in the tree is a bare Tailwind default (`text-gray-500`,
`border-gray-200`, `bg-red-500`/`bg-green-500`/`bg-gray-400` for status,
`bg-white`/`bg-gray-900`).

This absence is also why the installed shadcn primitives went unused. Both
`components/ui/button.tsx` and `components/ui/card.tsx` are the stock,
unpruned files — every CVA variant intact, referencing `bg-primary`,
`bg-card`, `text-muted-foreground`, `ring-ring` — semantic tokens that resolve
to nothing, because no color was ever named in the theme they'd map to. Given
tokens that don't render anything, every call site abandoned the primitive and
retyped its own version instead: `components/stat-card.tsx:3`,
`components/table.tsx:16`, `components/filter-panel.tsx:7`, and the raw `div`
at `app/page.tsx:54` all hand-roll `rounded-2xl border border-gray-200
shadow-lg p-6` from scratch. `Card` is imported exactly once
(`app/page.tsx:50`), and even that call overrides most of what it imports —
`rounded-2xl`/`shadow-lg` in place of the primitive's own `rounded-lg`/
`shadow-sm` — so the one import doesn't earn the exemption (A10's "single
importer among a dozen hand-rolled ones" clause). `Button` fares the same:
imported once for "New invoice" (`app/page.tsx:42`), then hand-rolled three
more times in the same toolbar — Export CSV (`:61`), Send reminders (`:64`),
Filters (`:67`).

One direct casualty of that hand-rolling: `app/page.tsx:50` wraps `Card`
around `InvoiceTable`, and `InvoiceTable` wraps its rows in its own
`rounded-2xl border shadow-lg p-6` (`components/table.tsx:16`) — a card
nested inside a card, both declaring the identical radius with only the 24px
of `p-6` between them (C1: the outer radius needed to be inner-radius-plus-
padding to read as concentric; equal, the inner corner reads crooked).

The same missing scale is why `A3` (`rounded-2xl` on cards, inputs, and
buttons alike) and `A4` (`shadow-lg` stacked with `border` and `rounded` on
every one of those same elements) both fire uniformly across the tree —
there was never a scale to pick a smaller radius or a resting/elevated pair
from.

**Fix** — name colors in `theme.extend.colors` (and wire the shadcn CSS
variables so `bg-primary`/`bg-card`/etc. resolve to something), declare two
or three radii and an elevation pair, then route every hand-rolled card and
button through the primitives that are already sitting in the tree unused.

### ROOT — C10: Dark mode wired on the body background only
`app/layout.tsx:8` — `<body className="bg-white dark:bg-gray-900">` is the
only `dark:` variant in the entire codebase. Every `border-gray-200` in
`components/stat-card.tsx`, `components/table.tsx`, `components/filter-
panel.tsx`, and both hand-rolled panels in `app/page.tsx` stays light-mode
gray against a near-black background — the border all but disappears. Every
`text-gray-500` secondary label (row totals' sibling text, "Recent
invoices," "All invoices," the empty-state message) keeps its light-mode
contrast ratio in the dark theme too. Whoever wired `dark:` did it in exactly
the one place a person looks first — the root background — and never opened
the rest of the tree to check.

**Fix** — move the border and secondary-text colors into semantic tokens
declared for both themes, the way the background already is, so a single
token change propagates instead of a per-element retrofit.

### C12 — Status carried by dot color alone
`components/table.tsx:19` — `<span className="inline-block size-2 rounded-
full ${STATUS_COLOR[row.status]}" />` is the only place `overdue`/`paid`/
`draft` is communicated. No text label, no differing shape, no icon sits
next to it anywhere the row renders (dashboard's "Recent invoices" panel and
the dedicated `/invoices` page both use the same component). A screenshot
converted to grayscale — or a red-green colorblind reader — cannot tell
which invoice is overdue.

**Fix** — add the status word or an icon next to the dot so color reinforces
the state instead of being the only channel carrying it.

### W3 — Invoices page dead-ends on an empty state
`components/table.tsx:13` — `return <p ...>No items found</p>` fires for
real on `/invoices`: `app/invoices/page.tsx:3` hardcodes `rows = []`, so a
person landing on the one dedicated invoices route in the app sees a flat
sentence and nothing else — no explanation of what the space is for, no
"New invoice" action within reach (that button only exists on the dashboard
route, `app/page.tsx:42`). This isn't a filtered search result where empty
is itself the answer; it's the screen's default state.

**Fix** — say what the page is for and repeat the create action here, not
only on the dashboard.

### C3 — Stat numbers jitter on every poll
`components/stat-card.tsx:5` — `<p className="text-2xl font-bold">{value}
</p>` renders `stats.revenue`/`invoices`/`overdue`, which `app/page.tsx:23-29`
refetches from `/api/stats` every `POLL_MS` (5000ms) via `setInterval`. No
`tabular-nums` appears anywhere in the project. Proportional digits mean
each of the three headline numbers on the dashboard can reflow its own
width every five seconds for as long as the page is open.

**Fix** — `font-variant-numeric: tabular-nums` on the value in `StatCard`,
since it's explicitly the one number in the tree that's wired to update in
place.

### A6 — p-6 at every level of the hierarchy
`app/page.tsx:33` — the page wrapper (`p-6 space-y-4`), the header row
(`p-6`, `:34`), the stat grid (`p-6`, `:45`), the `Card` (`p-6`, `:50`), the
raw invoices panel (`p-6`, `:54`), `StatCard` (`p-6`, `components/stat-
card.tsx:3`), `InvoiceTable`'s wrapper (`p-6`, `components/table.tsx:16`),
and `FilterPanel` (`p-6`, `components/filter-panel.tsx:7`) all carry the
identical value, from the outermost `<main>` down to the smallest card. No
container anywhere in the tree uses a different amount of space for its
level, so nothing reads as nested inside anything else — everything sits at
the same distance from everything.

**Fix** — scale padding to nesting level: more between the page's own
sections, less inside the smallest cards, so proximity communicates the
grouping the content already has.

### C11 — Disabled button looks clickable
`app/page.tsx:64` — `<button disabled className="rounded-2xl border
border-gray-200 px-4 py-2 text-sm font-bold">Send reminders</button>` carries
no opacity reduction, no muted text color, no `cursor-not-allowed` — nothing
distinguishes it visually from the enabled "Export CSV" button one line above
except the missing `hover:bg-gray-50` and `shadow-lg`, neither of which
reads as "disabled" on its own. A reader has no way to tell this control is
inert without clicking it first.

**Fix** — reduce opacity and drop the pointer cursor together with the
`disabled` attribute, so the two ways of reading "can I click this" agree.

### F2 — One title across both routes
`app/layout.tsx:3` — `export const metadata = { title: "Dashboard" }` is
declared once at the root and never overridden. Neither `app/page.tsx` nor
`app/invoices/page.tsx` exports its own `metadata`, so the browser tab, the
history entry, and the back button all read "Dashboard" whether the person
is looking at the summary view or the invoices list.

**Fix** — give `/invoices` its own title (`Invoices — Dashboard` or similar)
and let the root title stand for the summary route alone.

### F1 — <html> without lang
`app/layout.tsx:7` — `<html>` has no `lang` attribute. A screen reader has
no signal for which phoneme set to use on any text in the app.

**Fix** — `<html lang="en">` (or whatever the product's actual language is).

---

## Considered and declined

- **F11 (array `.map` without key)** — `components/table.tsx:17` renders
  rows with no `key`. Both current call sites (`app/page.tsx:12-17` and
  `app/invoices/page.tsx:3`) pass a hardcoded, never-filtered, never-
  reordered array — the `FilterPanel` toggle doesn't touch `rows` anywhere
  in the code shown. The tell's own exemption ("the list is genuinely
  immutable — never reordered, never filtered") applies to what's actually
  on the page today, even though the presence of a Filters affordance makes
  it likely this list stops being static later.
- **F3/F4/F9 (meta description, Open Graph, canonical)** — no evidence
  either way of whether this dashboard sits behind auth or is ever indexed;
  nothing in the tree confirms or rules out a login wall. Declined rather
  than assumed.
- **F10 (sitemap/robots)** — exempt outright: two routes, both reachable
  from navigation, under the ten-page threshold.
- **F5 (framework favicon)** — `app/icon.svg` is a real, designed mark (dark
  rounded square, a monogram built from an invoice glyph), not a scaffold
  default. Not slop.
- **F6/F7/F8** — one `<h1>` per route; no `<img>` anywhere in the tree so no
  alt text can be missing; `app/not-found.tsx` is a real custom 404 with its
  own copy and a way back.
- **C7/C8 (FilterPanel enter/exit, keyframe on toggle)** — real, but the
  weakest of the Craft findings here next to C10 and C12, which touch every
  card/row in the tree rather than one panel; cut for budget rather than
  because they don't fire.
- **C5 (20px refresh button hit target)** — real (`app/page.tsx:37`, `size-5`
  icon button, no extension), but a single low-traffic control; cut for
  budget.
- **C9 (hover with no active state)** — hover exists widely
  (`hover:bg-gray-50`, the primitive's `hover:bg-primary/90`) with no
  `active:` anywhere, which does fire the tell, but it's the same underlying
  "primitives never touched" story already carried by A1/A10; folding it in
  separately would pad the count rather than add a new root.
- **W7 (rule of three)** — three stat cards (revenue/invoices/overdue), but
  they're the plausible actual core metrics for an invoicing dashboard, and
  nothing else in the tree is arbitrarily tripled to compare it against.
  Declined.
- **A2, A7, A8, A9 (gradient, decorative icons, template hero, generic
  motion)** — none of the triggering patterns appear anywhere in the tree.
