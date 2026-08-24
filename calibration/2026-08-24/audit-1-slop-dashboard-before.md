# Audit — dashboard-run (full run: Surface, Craft, States, Words, Finish)

Stack found: Next.js App Router + Tailwind + a shadcn `components/ui/` install
(`button.tsx`, `card.tsx` using `cva`, `class-variance-authority`, `@radix-ui/react-slot`).
Nothing was translated to reach this tree — every tell below was read against its
literal Tailwind/Next form, not an analogue.

## A fact outside the catalog, read first

No tell in this catalog names it, but it changes how every finding below should be
weighed: `app/globals.css` contains only a `@keyframes` block. It has no
`@tailwind base; @tailwind components; @tailwind utilities;` directive (or the
`@import "tailwindcss"` a v4 project would use instead). Without one of those,
Tailwind emits no CSS for any utility class in the project — not the framework
defaults, not the custom ones this report asks for. Separately, `components/ui/button.tsx`
and `components/ui/card.tsx` both `import { cn } from "@/lib/utils"`, and no
`lib/utils.ts` exists anywhere in the twelve files. Both are build-breaking, not
aesthetic, and both sit directly upstream of the Surface and Craft findings below,
which assume the classes they name actually reach the page. I did not invent a tell
to hold these two facts — they aren't in the catalog — so they're recorded here
rather than folded into a scored row.

## Verdict

Verdict — a stock dashboard whose shadcn primitives were installed and then rebuilt
by hand next to a theme file nobody ever opened, so the color, radius, shadow, type
and spacing decisions those primitives and their neighbors depend on were never
made, and the interface has not been looked at again since shipping — not at a
phone's width, not in the dark theme it half-declares, not with a keyboard, and not
after the one network request it makes has a chance to fail.

This matches the catalog's own "stock dashboard" mold almost exactly: of the six
tells that mold predicts (A1, A3, A4, A5, A10, C16), all six fired here.

## Findings

29 tells fired. 28 rows appear below — C1 is folded into A3's `fixes` column per
the report's own convention (a caused finding is named in its root's fourth column
rather than repeated as its own row); nothing else is folded, and nothing is cut
for length. Every finding judged real is listed, ranked last where it is weak
rather than dropped.

### ROOT

| id | finding | location | |
|---|---|---|---|
| A1 | A palette nobody picked, and the tokens a stock primitive depends on were never defined | `tailwind.config.ts:5` | fixes C16 |
| A10 | Primitives installed and then hand-rolled beside them | `components/ui/button.tsx:12` | |
| A3 | One radius for everything | `tailwind.config.ts:5` | fixes C1 |
| C15 | A page only ever seen at one width | `app/page.tsx:45` | |
| C9 | Nothing happens when you press — no control in the tree has an active state | `components/ui/button.tsx:8` | |
| C10 | Dark mode declared on the background and nowhere else | `app/layout.tsx:8` | |
| S1 | The one request in the app has no failure branch | `app/page.tsx:25` | |
| A4 | Elevation without a system — border, radius and shadow stacked on every surface | `components/stat-card.tsx:3` | |
| A5 | No type scale, one weight, no chosen family | `tailwind.config.ts:5` | |
| A6 | Uniform rhythm — the same spacing value at every level of nesting | `app/page.tsx:33` | |

**A1 — `tailwind.config.ts:5`.** `theme: { extend: {} }` is empty, and `app/globals.css` declares no `:root` custom properties either — no colour is named anywhere in this project. Every colour on the page is a framework default called by number (`bg-white`, `border-gray-200`, `text-gray-500`, `bg-red-500`) except the ones the shadcn primitives reach for: `bg-primary`, `text-primary-foreground`, `ring-ring`, `ring-offset-background`, `bg-card`, `text-card-foreground`, `border-input`, `bg-accent`, `bg-secondary`, `bg-destructive`, `text-muted-foreground` (`components/ui/button.tsx:12-20`, `components/ui/card.tsx:12-73`). None of those keys exist in the theme, so Tailwind cannot generate CSS for them at all — the one Button actually used in the app (`app/page.tsx:42`, "New invoice") renders with no background, no text colour and no focus ring, because every class that would give it one references a token that was never defined. This is the exact scenario the tell's own principle names: "its `bg-primary` and `ring-ring` resolve against custom properties nobody defined, so a second color vocabulary sits in the tree rendering as nothing." Naming four to six colours in the theme and wiring the shadcn CSS variables to them fixes this row and makes C16's broken focus ring paint.

**A10 — `components/ui/button.tsx:12` (site to open first: `app/page.tsx:61`).** `Button` is imported and used exactly once, for "New invoice." Everywhere else the same role is rebuilt by hand: `StatCard` (`components/stat-card.tsx:3`), `FilterPanel`'s panel (`components/filter-panel.tsx:12`), the invoices page wrapper (`app/invoices/page.tsx:11`), `InvoiceTable`'s container (`components/table.tsx:16`), and four more raw `<button>` elements — Export CSV, Send reminders, Filters (`app/page.tsx:61,64,67`), and the overdue toggle (`components/filter-panel.tsx:14`) — all retype `rounded-2xl border border-gray-200 shadow-lg px-4 py-2 text-sm font-bold` at the callsite instead of using the installed `Button`. `Card` fares no better: it's imported once (`app/page.tsx:8,50`) but its entire className is overridden to raw utilities, discarding the primitive's own `rounded-lg border bg-card text-card-foreground shadow-sm` — using it as a bare `div` with a different name. This is the tell's own worked example: "A single importer among a dozen hand-rolled ones does not earn the exemption." Fixing A1 makes the one used instance render correctly; it does not make the other eight sites use it, which is what this row asks for.

**A3 — `tailwind.config.ts:5` (sites: `app/page.tsx:50`, `components/table.tsx:16`, `components/stat-card.tsx:3`, `components/filter-panel.tsx:12`, four buttons).** `rounded-2xl` is the only radius used across the entire tree except the shadcn `Button` primitive's own untouched `rounded-md` (never overridden, since Button's className is never customised where it's used) and the status dot's `rounded-full` (a pill, excluded by the tell's own note). Everything else — the page's outer cards, the table container nested inside one of those cards, the input, and every hand-rolled button — carries the identical `rounded-2xl`, with no scale in the theme relating any of them to their size. Fixes C1.

**C15 — `app/page.tsx:45`.** `grid grid-cols-3 gap-6 p-6` has no `sm:`/`md:`/`lg:` variant anywhere in the file, and no breakpoint is declared or used anywhere in the twelve files. At 375px this forces three stat cards into three cramped columns rather than reflowing to one. The header row (`app/page.tsx:34`, `flex justify-between`) has the same problem. Nothing in the tree is a single reflowing column and nothing declares itself deliberately fixed-width, so neither exemption applies.

**C9 — `components/ui/button.tsx:8` (systemic; also every raw `hover:` button in `app/page.tsx` and `components/filter-panel.tsx`).** `buttonVariants`' base class list carries `hover:bg-primary/90` and its siblings but no `active:` variant anywhere, and none of the raw buttons declare one either. Every control with a hover state in this tree lacks a pressed state — on a touch screen, none of these controls give any feedback at all until the page itself changes.

**C10 — `app/layout.tsx:8` (sites: `components/stat-card.tsx:3`, `app/page.tsx:50`, `components/table.tsx:16`, `components/filter-panel.tsx:12`, all `text-gray-500` sites).** The body flips `bg-white dark:bg-gray-900`, and nothing else in the tree carries a `dark:` variant — every `border-gray-200` and every `text-gray-500` is hard-coded to its light-mode value. In dark mode every card, table row and label keeps a light-mode border and a light-mode grey against a near-black background; the hierarchy those borders exist to create disappears, and the person who never opened dark mode is the only one who wouldn't notice.

**S1 — `app/page.tsx:25`.** `fetch("/api/stats").then((r) => r.json()).then(setStats)` inside the polling `setInterval` (`app/page.tsx:24-29`) has no `.catch`, and there is no `app/error.tsx` anywhere in the tree to catch it from above. This is the only request in the entire app, so there's no other site to check for an oversight-exemption against — it's the whole population, and it fails. Every five seconds the request can fail silently and the Revenue/Invoices/Overdue figures simply stop updating with no sign anything is wrong; the reader keeps trusting a stale number.

**A4 — `components/stat-card.tsx:3` (sites: `app/page.tsx:50`, `app/invoices/page.tsx:11`, `components/filter-panel.tsx:12`, `components/table.tsx:16`, the Export CSV button).** `rounded-2xl border border-gray-200 shadow-lg` — three separation devices stacked on the same element — is repeated verbatim on every raised surface in the tree, including a plain button (`app/page.tsx:61`). One `shadow-lg` used everywhere is not a chosen elevation level; it's the same default retyped at every callsite.

**A5 — `tailwind.config.ts:5` (site: `app/page.tsx:35`).** No `fontSize` scale is declared anywhere; every size in the tree is a raw Tailwind step (`text-2xl`, `text-lg`, `text-sm`) with no relationship recorded between them. `font-bold` is the only weight doing any emphasis anywhere — headings, stat values, row totals, every button label — and no font family is chosen; the app runs on Tailwind's default sans stack by omission, not by a decision recorded anywhere.

**A6 — `app/page.tsx:33`.** `p-6` (and its sibling `gap-6`/`space-y-4`) appears at every level of nesting in the same render: the page `<main>` (line 33), the header row inside it (line 34), the stat grid (line 45), each `StatCard` (`components/stat-card.tsx:3`), the invoices `Card` (line 50), the toolbar card (line 54), and `InvoiceTable`'s own container (`components/table.tsx:16`). This is the tell's own named example, repeated at every level named, with nothing scaling it up or down by depth.

### THEN

| id | finding | location | |
|---|---|---|---|
| W3 | "No items found" on the one route that will always be empty | `components/table.tsx:13` | |
| C13 | No `prefers-reduced-motion` handling anywhere, though the tree animates | `app/globals.css:1` | |
| F11 | `.map()` renders table rows with no `key` prop at all | `components/table.tsx:18` | |
| S2 | The filter and the sort order live only in component state | `components/filter-panel.tsx:6` | |
| C12 | Invoice status is carried by a coloured dot alone | `components/table.tsx:19` | |
| C7 | The filter panel animates open and disappears instantly on close | `components/filter-panel.tsx:11` | |
| C8 | A `@keyframes` block drives an interactive, interruptible panel | `app/globals.css:1` | |
| C5 | The refresh control is a 20px icon with nothing extending its hit area | `app/page.tsx:37` | |
| C11 | "Send reminders" is `disabled` with no visual change at all | `app/page.tsx:64` | |
| C3 | The three stat numbers update on a poll with no `tabular-nums` | `components/stat-card.tsx:5` | |
| F1 | `<html>` has no `lang` attribute | `app/layout.tsx:7` | |
| F2 | Both routes share the one title, "Dashboard" | `app/layout.tsx:3` | |
| C16 | The one wired focus ring resolves against an undefined token | `components/ui/button.tsx:8` | |
| F9 | No canonical link across two routes | `app/layout.tsx:1` | |
| F10 | No sitemap or robots file, and the second route isn't linked from anywhere | — | |
| F3 | No meta description | `app/layout.tsx:3` | |
| F4 | No Open Graph tags | `app/layout.tsx:3` | |
| C4 | One short text block in the whole tree, and it has no `text-pretty` | `app/not-found.tsx:7` | |

**W3 — `components/table.tsx:13`.** `if (rows.length === 0) return <p ...>No items found</p>` — the exact phrase the tell names. `app/invoices/page.tsx:3` hard-codes `rows = []`, so this is not a transient loading state; it is what `/invoices` always shows. No distinction between "no invoices exist yet" and "filtered to nothing," and no action offered.

**C13 — `app/globals.css:1`.** The tree does animate — `slideIn` (used at `components/filter-panel.tsx:11`) and `transition-colors` on the shadcn `Button` (`components/ui/button.tsx:8`) — and nothing anywhere honours the preference: no media query in `globals.css`, no `motion-reduce:` variant on any element, no JS hook reading it.

**F11 — `components/table.tsx:18`.** `{rows.map((row) => (<div className="flex justify-between"> ...))}` carries no `key` prop whatsoever — not even `key={row.id}`, which is sitting right there in the data. React will remount every row rather than move it whenever the list changes, which is exactly what the sort control in `FilterPanel` would trigger if it were wired to anything.

**S2 — `components/filter-panel.tsx:6-7`.** `overdueOnly` and `sort` are both textbook examples the tell names directly ("a filter... a sort order"), held in `useState` with nothing reading or writing them to the address bar — no `searchParams`, no `router.push`, anywhere in the tree. Refresh loses the filter, and a pasted link opens the unfiltered view regardless of what the sender was looking at. Separately, and worth flagging alongside this finding rather than as its own tell: neither value is actually read anywhere to filter or sort the rows passed to `InvoiceTable` — the controls change local state that nothing downstream consumes, so today they're inert as well as unaddressable.

**C12 — `components/table.tsx:19`.** `<span className={... ${STATUS_COLOR[row.status]}} />` — a 2px dot whose colour is the only signal for overdue/paid/draft. No text, shape or icon repeats the status anywhere in the row; a reader who can't distinguish red from green (or a screenshot converted to grayscale) cannot tell an overdue invoice from a paid one.

**C7 — `components/filter-panel.tsx:11-29`.** `{open && (<div className="animate-[slideIn_200ms...]">...)}` animates in on open; on close, `open` becomes `false` and the whole `div` is removed from the DOM in the same render — a conditional unmount, one of the three instant-exit forms the tell names explicitly. The entrance gets 200ms of attention and the exit gets none.

**C8 — `app/globals.css:1`, driven from `components/filter-panel.tsx:12`.** The panel's open animation is a fixed `@keyframes` timeline (`slideIn`), not a transition, even though it's triggered by an interactive toggle (`filtersOpen`) that a user could flip again mid-animation. A `@keyframes` run cannot retarget; it restarts. Best fixed alongside C7, since both concern the same element and a transition-based rewrite is the natural place to also give the exit its own animation instead of an instant unmount — but fixing one does not automatically fix the other, so both are listed.

**C5 — `app/page.tsx:37-41`.** `<button className="size-5" aria-label="Refresh">` wraps a 20px SVG with no padding, no pseudo-element, and no surrounding label text to extend its hit area — the drawing is the entire target. It is the only small icon-only control in the tree, so there's no counter-example elsewhere to grant the oversight-exemption.

**C11 — `app/page.tsx:64`.** `<button disabled className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-bold">Send reminders</button>` — identical classes to the enabled Export CSV button next to it, minus the `hover:` class, with no opacity reduction or any other visual change. It reads as fully clickable. The shadcn `Button` primitive does declare `disabled:opacity-50` (`components/ui/button.tsx:8`), but no `<Button disabled>` is ever rendered anywhere in the tree — per this axis's own rule, declared-but-unexercised code in a stock primitive isn't evidence the project handles this correctly elsewhere.

**C3 — `components/stat-card.tsx:5`.** `<p className="text-2xl font-bold">{value}</p>` renders `stats.revenue`/`stats.invoices`/`stats.overdue`, refreshed every 5 seconds by the same `fetch` named in S1, with no `tabular-nums` anywhere in the tree. Proportional digits reflow the card's width on every tick.

**F1 — `app/layout.tsx:7`.** `<html>` has no `lang` attribute.

**F2 — `app/layout.tsx:3`.** `export const metadata = { title: "Dashboard" }` is the only title declared anywhere, so both real routes — `/` and `/invoices` — share it. It isn't the framework's own template string, but it distinguishes nothing between the two screens a tab, a history entry, or a browser's back/forward preview would need to tell apart.

**C16 — `components/ui/button.tsx:8`.** `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` is declared, and unlike the raw hand-rolled buttons (which keep the browser's native default outline, since nothing in `globals.css` resets it), this is the one control in the tree that explicitly tries to draw its own focus ring — and, per A1, `ring-ring` and `ring-offset-background` reference theme keys that don't exist, so the ring most likely never paints. See the note on this row in "Rules I had to supply" below: the Signal doesn't name this exact failure mode, and confirming it fully would need a rendered pass this session doesn't have.

**F9 — `app/layout.tsx:1`.** No `<link rel="canonical">` anywhere, and the site has two routes, not one.

**F10 — no sitemap.xml/robots.txt anywhere in the tree.** See "Rules I had to supply" below — this row fires on a supplied reading of "internal," and independently on the "all reachable from navigation" half of the exemption, which fails on its own regardless of that reading: `/invoices` is not linked from `/` or from anywhere else in the app; only `not-found.tsx` links back to `/`.

**F3 — `app/layout.tsx:3`.** No meta description exists anywhere.

**F4 — `app/layout.tsx:3`.** No `og:title`, `og:description`, or `og:image` anywhere.

**C4 — `app/not-found.tsx:7-9`.** `<p className="text-sm text-gray-500">That address is not part of this workspace.</p>` is the only paragraph in the whole tree that is a complete sentence rather than a label or fragment, and it carries no `text-pretty`. No heading anywhere reaches the tell's four-word floor. Ranked last, and see "Rules I had to supply" below — the count this tell asks for has exactly one member here.

## Rules I had to supply

**F3, F4, F9, F10, F13 — what counts as "internal."** Each tell's exemption turns on whether the app is internal or sits behind authentication:

- F3: *"Not slop when: The route is internal, or sits behind authentication, and never reaches any index."*
- F4: *"Not slop when: The app is internal and its links never leave the organization."*
- F9: *"Not slop when: The site sits behind authentication, or has only a single route."*
- F10: *"Not slop when: The app is internal, or the site has fewer than ten pages, all reachable from navigation."*
- F13: *"Not slop when: The app is internal, or sits entirely behind authentication, and never receives a visitor who has not already agreed to something."*

None of these tells say how an auditor reading twelve files with no login route, no middleware, no session check, and no deployment config is supposed to decide "internal" one way or the other. This tree contains no evidence of authentication at all — not a route, not a guard, not a comment. I supplied the rule: absent any visible gate, treat the app as not verifiably internal or authenticated, and let the tell fire rather than grant the exemption on silence — because assuming the exemption by default would mean these five tells could never fire on any small app that simply doesn't show its auth layer in the files an auditor was handed, which seems like the wrong default for a catalog built to catch absence. A reader with more context (a deployment config, an auth provider, an internal-only DNS entry) could overturn F3, F4, F9, F10 and F13 immediately; nothing in the code available to me could.

**F10 — "fewer than ten pages, all reachable from navigation."** Independent of the internal-app question above, I read this as a conjunction: under ten pages *and* every one of them reachable by following links inside the app. This tree has two pages (under ten), but `/invoices` is not linked from `/` or from any other file — no nav component exists anywhere in the twelve files, and the only cross-route link in the tree (`app/not-found.tsx:10`) points back to `/`, not to `/invoices`. I treated "reachable from navigation" as requiring an actual in-app link path, which this fails regardless of how the internal-app question above is resolved.

**C1 (folded into A3, not given its own row, but the reasoning behind that fold used a Signal the reference itself flags as unresolved).** `craft.md` says of C1: *"This Signal's first sentence and its counting sentence are not the same test, and the 2026-08-17 calibration recorded that a tree can pass one and fail the other... The repair belongs to a round that can measure it."* The nested pair here — `app/page.tsx:50`'s `Card` (`rounded-2xl`) wrapping `InvoiceTable`'s own `rounded-2xl` div (`components/table.tsx:16`) with 24px of padding between them — happens to fail both readings at once (the two radii are literally equal under the first sentence's test, and the outer radius is not "inner plus padding" under the counting sentence's test either), so the ambiguity didn't change my verdict on this instance. But applying a Signal the skill's own reference describes as internally contested is still a judgment call I made rather than one the tell settled for me, and a tree where the two readings actually disagreed would have needed a different resolution than the one I had available.

**C4 — a population of one.** The audit skill's own overview names this exact problem: *"C4's count decides a case at a population of one where it can only ever come out the same way."* The only short-text-block candidate anywhere in this tree is the single sentence in `app/not-found.tsx`. Nothing in the tell says whether a population of one should count as "the whole population failing" (fire) or as too small a sample to mean anything (never mind it). I chose to report it, ranked last, rather than silently drop it, on the reasoning that the alternative — treating n=1 as automatically exempt — isn't stated anywhere either and would make C4 unable to ever fire on a small tree by construction.

**C16 — a focus treatment the Signal doesn't have a name for.** The Signal lists specific forms of a missing focus state: *"`outline: none` or `outline-none` with no replacement in the same rule, a focus ring removed at the reset and never redeclared, or a tree with no `:focus-visible` and no focus variant on any control."* What's actually in `components/ui/button.tsx:8` is a fourth form none of those three cover: a `focus-visible:ring-ring` declaration that is present in the code and is never removed, but very likely fails to paint because the colour token it names was never defined (per A1). I supplied the reading that the Principle — *"the focused state is indistinguishable from its resting state"* — governs here even though the literal Signal forms don't describe a token-resolution failure, and fired the row on that basis. I could not confirm the ring actually fails to render, since that needs a rendered pass at a real width and this session had no browser tooling; a reader with one should treat this row as a strong suspicion pending that check, not a certainty.

**A8 and W7 — how much counter-evidence the "three things" exemption needs.** Both tells exempt a repeated count of three when it's the content's real shape:

- A8: *"Not slop when: The content really is three parallel things, and the numbers really are the product's core information."*
- W7: *"Not slop when: The content really is three things, and other sections on the same page carry different counts."*

Neither says how many differently-counted sections are enough, or how directly "core information" has to be established. I judged Revenue/Invoices/Overdue as genuinely the named core metrics of an invoicing dashboard (rather than a template's arbitrary three), and treated the table's four rows and the sort control's two options as enough of a different count elsewhere on the same page to grant W7's exemption too. A stricter reader could disagree with either call.

**S2 — whether dead state still counts as a site.** The Signal describes *"a value that names the view... held in component state, with nothing reading or writing that value to the address."* It doesn't address whether state that currently has no effect on what's rendered — `overdueOnly` and `sort` in `components/filter-panel.tsx` are never consumed by anything that actually filters or sorts `rows` — still counts as a site worth firing on. I supplied the reading that it does, since the value still structurally names a view characteristic even though the wiring to make it matter is itself missing, and noted the dead-wiring issue in the finding's own paragraph rather than inventing a separate tell for it.

## Declines

**Surface**

- A2 (generator gradient) — condition never arose. No gradient of any kind appears anywhere in the twelve files.
- A7 (decorative icons) — condition never arose. The one icon in the tree (the refresh SVG) is the entire content of a labelled icon-only control, not a decoration beside text that already carries the meaning.
- A8 (template layout) — condition arose and a `Not slop when` clause excused it. The three-card stat strip exists, but Revenue/Invoices/Overdue are the dashboard's actual core figures and the exemption's own words are met: *"the numbers really are the product's core information."*
- A9 (generic motion) — condition never arose. No `transition-all` (or its plain-CSS equivalent) and no hover-scale transform appears anywhere; the one named transition in the tree (`transition-colors`) already names its property.
- A11 (motion with no scale) — condition never arose. Exactly one timed animation duration exists in the whole tree (`slideIn`, 200ms); there is no second value to be mismatched against.
- A12 (stacking order nobody declared) — condition never arose. No `z-` class and no `z-index` property appears anywhere; nothing in the tree stacks.
- A13 (furniture nobody put there) — condition never arose. No decorative background shape, dot grid, blurred panel, coloured edge strip, or fake chrome appears anywhere.
- A14 (product page that never shows the product) — condition never arose. Neither route in this tree is a public marketing route describing a product to a prospect; both are the application's own screens.

**Craft**

- C2 (centered by the box, not the eye) — condition never arose. No asymmetric icon is paired with text anywhere; the one icon in the tree is unpaired.
- C6 (image with no edge) — condition never arose. No content `<img>` appears anywhere in the tree.
- C14 (a box nobody reserved) — condition never arose. No async boundary in the tree renders a pending state of different height from its resolved state to compare (the stats poll has no loading UI at all, and both routes' row data are hard-coded rather than fetched), and no content `<img>` exists to be missing dimensions.

**States**

- S3 (an action that cannot be taken back or stopped) — condition never arose. No handler anywhere in the tree performs a delete, revoke, archive, cancel or overwrite, and no control submits a mutation — "Export CSV," "Send reminders" and the refresh button carry no `onClick` at all, and the one `fetch` in the app is a read (a stats poll), not a write.

**Words**

- W1 (catalog labels) — condition never arose. Every button and link in the tree names an outcome ("New invoice," "Export CSV," "Back to the dashboard") rather than reaching for "Submit" or "Click here."
- W2 (a verb that does not survive) — condition never arose. No toast and no confirmation dialog exists anywhere in the tree for a button's verb to disagree with.
- W4 (an error that apologizes or says nothing) — condition never arose. No error state renders any text anywhere in the tree, apologetic or otherwise — consistent with S1, nothing catches the one failure that could produce one.
- W5 (implementation names leaking) — condition never arose. Every label in the tree names something the reader of an invoicing dashboard already recognizes (Revenue, Invoices, Overdue, Filters); nothing names a mechanism.
- W6 (inflated marketing copy) — condition never arose. No marketing claim of any kind appears; this tree has no landing-page prose to carry one.
- W7 (the rule of three) — condition arose and a `Not slop when` clause excused it. See "Rules I had to supply" above.
- W8 (social proof nobody gave) — condition never arose. No testimonial, review, rating, logo, user count or funding line appears anywhere.

**Finish**

- F5 (framework favicon) — code already correct. `app/icon.svg` is a real, custom mark (a dark rounded square with a monogram), not Next's or Vite's default, and Next's App Router convention wires it up automatically.
- F6 (missing or repeated h1) — code already correct. All three routes (`/`, `/invoices`, and `not-found`) carry exactly one `<h1>` each, matching their subject.
- F7 (missing alt text) — condition never arose. No content `<img>` appears anywhere in the tree.
- F8 (no custom 404) — code already correct. `app/not-found.tsx` is a real, written route with its own heading, copy and a link home — not the framework's default wall.
- F12 (surviving placeholder) — condition never arose. No "Lorem ipsum," "Your Company," "John Doe," `example.com`, `href="#"`, `TODO`, or "Coming soon" appears anywhere in the twelve files.
- F13 (the pages a published site owes) — condition never arose. Nothing in the tree collects anything from a visitor — the search input has no submit handler, there is no analytics script, no third-party embed, and no cookie beyond the session — and the app offers no account, purchase or subscription for terms to attach to.

## What repairs this

`anti-slop fix` can take on the mechanical majority of this list on its own: F1, F2,
F6 (already fine), F9, F10, F11, C1/A3 (once a radius scale is picked), C3, C5, C7,
C8, C9, C10, C11, C12, C13, C15, C16 (once A1 supplies real tokens), S1, S2, W3, and
routing A10's hand-rolled sites through the installed primitives.

Three rows need an answer this report cannot produce by reading code, the same three
that need one on every run: **A1** (the palette itself — four to six colours have to
come from the subject, which no amount of static reading supplies), **A5** (the type
family and scale, same reason), and **F3/F4/F9/F10/F13 as a group** (whether this app
is actually internal or actually public needs a fact about deployment and auth that
isn't in these twelve files, not a repair).
