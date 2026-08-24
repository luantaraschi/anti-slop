# Audit — dashboard-run

Stack found: Next.js App Router + Tailwind, with a `components/ui/` pair (`Card`,
`Button`) installed from shadcn (via `class-variance-authority` and
`@radix-ui/react-slot`). No translation needed — every tell below is read
directly against its native Tailwind/Next form.

## Verdict

The craft that exists here — an asymmetric panel that transitions instead of
keyframing, borders paired correctly in both themes, a disabled button whose
opacity and attribute agree, tabular numbers on the one value that updates —
was spent everywhere except the theme file and the two shadcn primitives that
depend on it, so `Button` and `Card` now render color, radius and focus-ring
tokens (`bg-primary`, `bg-card`, `ring-ring`) that nobody ever declared, while
every hand-rolled sibling around them re-decided the same gray border and the
same 16px radius on its own. This does not cleanly match the catalog's "stock
dashboard" mold despite firing most of its usual tells (A1, A3, A4, A5, A10):
that mold's own escape clause is a domain-specific component, and this tree has
three (`StatCard`, `InvoiceTable`, `FilterPanel`) that were clearly built for
this product, not copied in. What is missing is not attention — it is a
declared design system for that attention to land on.

ROOT
| id | finding | site | fixes |
|---|---|---|---|
| A1 | Palette and tokens nobody declared — `Button`/`Card` render `bg-primary`, `bg-card`, `ring-ring` against custom properties that don't exist | `tailwind.config.ts:5`, `app/globals.css` (no `:root` block) | — |
| A10 | Primitives installed, then hand-rolled beside them at every real site | `components/ui/card.tsx:12`, `components/ui/button.tsx:8` vs. `app/page.tsx:66,70`, `components/table.tsx:16`, `components/filter-panel.tsx:27`, `components/stat-card.tsx:3` | fixes A3, A4, C1 |
| A5 | No type scale, no chosen family — text sizes are Tailwind's raw steps and the family is whatever the browser reaches for | `tailwind.config.ts:5` | — |
| A6 | Uniform rhythm — `p-6` and `space-y-4` repeat from the page wrapper down through section, card and row with nothing marking a level | `app/page.tsx:38,39,61,66,70`, `components/stat-card.tsx:3`, `components/table.tsx:16` | — |

THEN
| id | finding | site | fixes |
|---|---|---|---|
| F10 | No sitemap or robots, and `/invoices` is reachable only by typing the URL — nothing on the dashboard links to it | app root (no `sitemap.ts`/`robots.ts`); `app/page.tsx` (no `Link` to `/invoices`) | — |
| S2 | Sort order and the overdue-only toggle name the view and live only in component state — refresh loses them, no link can be shared with them set | `components/filter-panel.tsx:6-7` | — |
| W3 | "No items found" on an empty invoice list, with no first action and no distinction from a filtered-to-zero result | `components/table.tsx:13` | — |
| F2 | One `<title>` — "Dashboard" — shared by `/` and `/invoices`, neither route overrides it | `app/layout.tsx:3` | — |
| A3 | Two radii nobody reconciled: `rounded-2xl` everywhere hand-built, `rounded-md` on the one place `Button` is actually used | `components/ui/button.tsx:8` vs. `app/page.tsx:50` | — |
| A4 | The one `Card` instance stacks border, shadow and radius on the same element — three separation devices doing one job | `app/page.tsx:66` (via `components/ui/card.tsx:12`) | — |
| C1 | `Card` wraps `InvoiceTable`'s own bordered `rounded-2xl` div at the identical radius, with exactly 24px of padding between them | `app/page.tsx:66`, `components/table.tsx:16` | — |
| F9 | No canonical link on a multi-route site | `app/layout.tsx:3` | — |
| F3 | No meta description | `app/layout.tsx:3` | — |
| F4 | No Open Graph tags | `app/layout.tsx:3` | — |
| C15 | The Export CSV / Send reminders / Filters row has no wrap or stacking variant, while the header and the stat grid around it both do | `app/page.tsx:76-92` | — |
| C4 | `text-pretty` was added to the 404 page's body copy but not to the stats error banner, the only other short text block in the tree | `app/not-found.tsx:7` vs. `app/page.tsx:56` | — |

16 findings, none dropped — the report cap is suspended for this run.

By axis: Surface 6 (A1, A10, A3, A4, A5, A6), Craft 3 (C1, C4, C15), States 1
(S2), Words 1 (W3), Finish 5 (F2, F3, F4, F9, F10). Total 16.

## Repairs that fixed the site, not the cause

**`app/not-found.tsx:7` got `text-pretty`; `app/page.tsx:56` didn't.** The 404
page's body copy — "That address is not part of this workspace." — carries
`text-pretty`. The only other short text block in the tree, the stats-refresh
error banner ("Couldn't refresh — showing the last values received.") at
`app/page.tsx:56`, does not. Both are one-sentence paragraphs of the kind C4
describes. Someone noticed the wrap risk once, on the page they were looking
at, and never turned it into a habit the rest of the tree could inherit — there
is no shared text style or convention recording that short paragraphs get this
treatment, only one instance that has it.

**Every hand-rolled callsite re-decided the same gray, and the theme was never
asked to hold it.** `border-gray-200 dark:border-gray-800`, `text-gray-500
dark:text-gray-400`, and `text-gray-900 dark:text-gray-100` are typed out,
correctly and consistently, at every one of roughly ten sites across
`app/page.tsx`, `app/invoices/page.tsx`, `app/not-found.tsx`,
`components/stat-card.tsx`, `components/table.tsx`, and
`components/filter-panel.tsx`. That repetition is itself evidence someone kept
making the same right call — but the call was never lifted into
`tailwind.config.ts`'s `theme.extend` or a `:root` block, so the two components
that actually depend on a theme (`components/ui/card.tsx`'s `bg-card
text-card-foreground`, `components/ui/button.tsx`'s `bg-primary
text-primary-foreground ring-ring`) are the only two surfaces in the tree still
resolving colors that were never chosen. The fix landed at every location where
the problem was visible and never at the one place — the theme file — that
would have made the primitives usable instead of decorative dead weight. This
is the same defect as the `text-pretty` case at a larger scale: a decision made
by hand repeatedly, at the surface, instead of once, at the source.

**The refresh button got a hit-area fix and nothing else.** `app/page.tsx:42-43`
extends the 20px refresh icon to a 40px target with `-m-2.5 flex size-10` and
`touch-manipulation` — a specific, correct, C5-aware technique applied to
exactly the one control in the tree small enough to need it. But that same
button carries no `hover:` or `active:` class, while every other clickable
element in the file (`Export CSV`, `Send reminders`, `Filters`, `Overdue only`,
and the shadcn `Button`) pairs `hover:` with `active:scale-[0.97]`. Whoever
tuned the touch target didn't extend the same pass to give it the interaction
feedback its siblings have — a smaller version of the same pattern: attention
spent on the symptom that was in front of them, not carried to the rest of
what the control needed.

## Rules I had to supply

**A3 — "Count the distinct radii the project actually uses."** No threshold
follows. The tree is dominated by one value, `rounded-2xl`, at every
hand-rolled site, with a single outlier — `rounded-md` in
`buttonVariants`'s base class — surfacing at the one site `Button` is actually
rendered (`app/page.tsx:50`). Nothing in the Signal says whether two raw
values across roughly a dozen sites, with one of them confined to a single
unreconciled callsite, counts as "one radius for everything" or as a
deliberate two-step scale. I treated it as the former — a stray default
fighting a hand-rolled convention, not a chosen pair — because neither value
appears in `theme.extend.borderRadius` (which is empty) and nothing marks the
`rounded-md` outlier as intentional. A reader who weighs the count differently
would not fire this the same way.

**F3, F4, F9 — "The route is internal... behind authentication... " / "internal, or has only a single route."** None of these tells define "internal," and this tree carries no login page, no `middleware.ts`, and no session check to confirm or rule it out either way. F3's own text argues against reading its exemption narrowly — *"an internal tool with no visible auth layer took a finding it could not act on"* — but that argument is scoped to F3 by its own words; F4 and F9 don't repeat it. I chose not to import F3's leniency into F4 and F9, and to require demonstrated evidence (a route the tree itself marks as internal, or an auth check the tree itself performs) before granting any of the three an exemption. Absent that evidence, all three fire. A reader willing to infer "internal" from the subject matter alone — an invoice dashboard, not a marketing page — would release some or all of these three instead.

**C4 — "Five treated headings against one untreated is an oversight, and three against three is the pattern."** The tree has exactly two short-text-block sites (the 404 body copy and the stats error banner), one with `text-pretty` and one without — a population the Signal's own examples don't cover. I read 1-for-1 as not meeting "more carry the property than miss it," since it is not literally *more*, and fired the finding rather than releasing it as an oversight. A reader treating any non-minority split as insufficient evidence of a pattern would decline this one.

**W7 — dashboard stat cards as a "stats strip."** The Signal's examples (features, bullets, steps, pricing tiers, "three numbers in the stats strip") are written for marketing pages; nothing in the tell says whether three KPI cards on an internal dashboard count as the same pattern. I read Revenue/Invoices/Overdue as plausible genuine business metrics rather than an unconsidered count, particularly since the tree also has an unrelated three-button toolbar (`Export CSV`/`Send reminders`/`Filters`) that would make "three" look systemic if I fired on it — but that toolbar's count is a coincidence I can't verify either way from the code. I declined W7 under the Not-slop clause on that reading; a reader who treats two independent triads in one small file as suspicious rather than coincidental would fire it.

**C16 — assuming Tailwind's Preflight does not strip the browser's default focus outline.** None of the twelve files declare an `outline: none` reset, and I concluded from that absence that the hand-rolled buttons, the input, and the select keep native focus indication. That conclusion rests on knowledge of Tailwind's Preflight behavior that isn't demonstrated anywhere in this tree — the files are silent on it either way. If Preflight (or a browser default) behaves differently than I assumed, every hand-rolled control's focus visibility is unverified rather than confirmed.

## Declines

**Condition never arose in this tree**
- A2 — no gradient anywhere
- A7 — no decorative icon; the one icon (refresh) identifies a recurring action and stands in for its label
- A8 — no hero, feature grid, or bento layout; this is a dashboard, not a marketing page
- A11 — no transition shares one duration across an order-of-magnitude difference in travel distance (a supplied judgment — see above list; borderline enough to flag here too, since no theme scale exists to check against)
- A12 — no `z-index` anywhere in the tree
- A13 — no decorative background shape, blur panel, dot grid, or fake chrome
- C2 — no asymmetric icon sits inside any control
- C5 — the one control under 40px (refresh) is extended to exactly 40px; no failing site exists
- C6 — no content `<img>` anywhere in the tree
- C14 — no async boundary swaps a differently-shaped pending state for its resolved one; stats update in place at constant size
- S3 — no destructive action and no mutating submit exist anywhere in the tree (`Export CSV` has no handler at all; `Send reminders` is permanently disabled)
- W1 — no catalog label ("Submit", "Learn More", "Click here"); every button names its outcome
- W2 — no confirmation dialog exists to check its verb against a trigger's
- W5 — no implementation-level name leaks into the UI
- W8 — no testimonial, logo, rating, or count claiming a source
- F1 — `<html lang="en">` is present; the missing-attribute condition never arose
- F5 — `app/icon.svg` is a custom mark, not a framework default
- F6 — every route (`/`, `/invoices`, not-found) carries exactly one `<h1>`
- F7 — no content `<img>` exists to need `alt` text
- F12 — no lorem ipsum, `href="#"`, `TODO`, or "Coming soon" anywhere
- F13 — the tree collects nothing from a visitor: no form submits anywhere, no analytics script, no third-party embed, no cookie beyond the session; the obligation F13 describes never attaches

**`Not slop when` clause excused it**
- A14 — the app has no marketing route at all; every page is the product itself
- W7 — see "Rules I had to supply" above; read as three genuine metrics rather than an unconsidered count

**Code already does the right thing**
- A9 — every transition names its properties (`transition-[background-color,transform]`, `transition-[opacity,transform]`, `transition-[color,background-color,transform]`); no `transition-all` and no hover-grow transform anywhere
- C3 — the one number that updates in place (`StatCard`'s value, polled every 5s) already carries `tabular-nums`
- C7 — `FilterPanel`'s exit (120ms) is shorter than its entrance (200ms), the asymmetry C7 asks for
- C8 — `FilterPanel` drives open/close through a CSS transition retargeted by state, not a `@keyframes` block, and says so in its own comment
- C9 — every control carrying `hover:` also carries `active:scale-[0.97]`, hand-rolled and shadcn alike
- C10 — every border and text color pairs a light value with a `dark:` value; no divider disappears in the second theme
- C11 — `Send reminders`'s `disabled` attribute and its `opacity-50 cursor-not-allowed` visual arrive together, and so does `Button`'s `disabled:pointer-events-none disabled:opacity-50`
- C12 — every status dot in `InvoiceTable` sits beside its own text label ("overdue", "paid", "draft"); color never carries the status alone
- C13 — `app/globals.css` carries a `prefers-reduced-motion: reduce` block that zeroes animation and transition duration globally
- C16 — `Button`'s `focus-visible:ring-2 focus-visible:ring-ring` is a correctly-shaped focus treatment (see the C16 note in "Rules I had to supply" for what this decline assumes about the rest of the tree, and see A1 for why the ring's own color is not actually defined)
- F8 — `app/not-found.tsx` is a real, custom 404, not the framework default
- F11 — `InvoiceTable`'s `.map` keys on `row.id`, a stable identifier, not on index
- S1 — the one `fetch` in the tree (`app/page.tsx:26`) has a `.catch` and renders a specific, non-apologetic status message on failure
- W4 — "Couldn't refresh — showing the last values received." names what happened and what's true of the displayed data; it does not apologize or say nothing

## What repairs this

`anti-slop fix` can take every finding above except the ones that need a fact
or a decision only the person shipping this can supply: **A1** (naming the
palette itself — the fixer can wire tokens once told what colors the product
uses, but choosing the colors is not a code-reading act), **A5** (choosing a
type family and a scale is the same kind of decision), and the "internal or
not" question behind **F3, F4, F9** (whichever way that's answered changes
whether those three are findings at all). Everything else — A10's routing,
A3's radius reconciliation, A4's device stacking, A6's rhythm, C1's nesting,
C4's `text-pretty` parity, C15's responsive wrap, F2's per-route titles, F10's
sitemap/robots and the orphaned `/invoices` link, S2's URL state, and W3's
empty-state copy — reads directly off the code and needs no answer from
outside it.
