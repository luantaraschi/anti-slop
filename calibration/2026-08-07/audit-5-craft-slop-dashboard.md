# Craft audit — fixtures/slop-dashboard

Invocation: `anti-slop craft` (single-axis, uncapped per run instructions).
Reference loaded: `craft.md` only, per the invocation table.
Scope: entire target tree (12 files, all read).

Verdict — nobody opened this dashboard a second time: the same `rounded-2xl`
gets nested inside itself on every panel, every button has a hover state and
no press state, dark mode was switched on for the page background and never
carried to a single border, and the one animated panel uses a keyframe that
can't be interrupted and has no exit at all. Nine of twelve Craft checks fail.

## Findings (all firing tells, unordered by axis convention — see rationale per item)

### C10 — One theme was ever opened
`dark:bg-gray-900` is declared once, on `<body>`, and nowhere else in the
tree carries a `dark:` variant. Every bordered surface in the app —
`StatCard`, `InvoiceTable`, `FilterPanel`, the dashboard's own section divs,
the input, all three raw buttons — uses `border-gray-200` with no dark
counterpart.
- `app/layout.tsx:8` (the only `dark:` in the codebase)
- `components/stat-card.tsx:3`
- `components/table.tsx:16`
- `components/filter-panel.tsx:7`
- `app/page.tsx:50,54,57,61,64,69`
- `app/invoices/page.tsx:11`

Root: whoever flipped on dark mode never revisited a single component after
doing it. Every border-related instance above is one symptom of this same
absence, not a separate decision.

### C1 — A radius that ignores what it wraps
`rounded-2xl` is applied uniformly with no distinction between an outer
container and what it wraps, so every nested pair runs parallel instead of
concentric.
- `app/page.tsx:50` (`Card`, rounded-2xl) directly wraps `components/table.tsx:16`
  (also rounded-2xl), with the outer's own `p-6` as the only gap — equal
  radius, gap ≤ 24px, doesn't clear the padding-exceeds-24px door.
- `app/page.tsx:54` (raw div, rounded-2xl) wraps the input (`app/page.tsx:57`)
  and three buttons (`:61`, `:64`, `:69`), all rounded-2xl, same p-6 gap.
- `app/invoices/page.tsx:11` wraps `components/table.tsx:16` the same way.

No nested-radius pair anywhere in the tree is concentric, so the second door
(project handles it correctly elsewhere) never opens either.

### C9 — Nothing happens when you press
Every interactive control that declares a `hover:` state declares no
`active:` state, and this is true with zero exceptions across the whole
tree, including the shadcn-derived component that's supposed to be the
"library-grade" one.
- `components/ui/button.tsx:12-20` (every `buttonVariants` entry has
  `hover:` classes, none has `active:`)
- `app/page.tsx:61` (Export CSV, `hover:bg-gray-50`, no active)
- `app/page.tsx:69` (Filters, `hover:bg-gray-50`, no active)

### C11 — Disabled that still looks clickable
`app/page.tsx:64` — `<button disabled className="rounded-2xl border
border-gray-200 px-4 py-2 text-sm font-bold">Send reminders</button>`. No
opacity reduction, no `disabled:` variant, no cursor change. Sitting next to
two active buttons with near-identical classes, it is visually
indistinguishable from something clickable.

Note: `components/ui/button.tsx:8` does declare
`disabled:pointer-events-none disabled:opacity-50` correctly on the shared
`Button` component — but that component is never rendered in a disabled
state anywhere in this app (the only `Button` usage is "New invoice", never
disabled). The one disabled control a viewer can actually see in the shipped
product is the broken raw button, so I judge this fires rather than reading
the unused correct code as the second door's exemption. Flagged as judgment
call, see below.

### C12 — Color carrying the meaning alone
`components/table.tsx:1-5,19` — `STATUS_COLOR` renders a bare colored dot
(`bg-red-500` / `bg-green-500` / `bg-gray-400`) for overdue/paid/draft with
no label, icon, or shape difference anywhere the status appears. The row
shows the invoice id and total as text but never the status word itself.
Converted to grayscale, every row reads identical.

### C5 — A target the size of the drawing
`app/page.tsx:37` — the refresh icon button is `size-5` (20px), interactive,
with no padding or pseudo-element extending its hit area. It's the only
small control in the tree, and it's the one that doesn't extend.

### C7 — Enter and exit weigh the same
`components/filter-panel.tsx:6-7` — the panel is conditionally rendered
(`{open && (...)}`) with an entrance keyframe (`animate-[slideIn_200ms_...]`)
and no exit treatment: on close it doesn't animate out, it's simply removed
from the DOM in the same frame. This is the same defect the reference names
explicitly under this tell ("an exit that is just `display: none` while the
entrance animates") — unmounting is the conditional-render equivalent of
that. Usage site: `app/page.tsx:75`.

### C8 — An animation that cannot change its mind
`app/globals.css:1-4` (`@keyframes slideIn`) drives `filter-panel.tsx:7`,
which is a toggle panel opened by `app/page.tsx:67-72`'s Filters button —
exactly the "drawer, panel, toggle" case the tell names. It's a keyframe, not
a transition, on a state that's explicitly interactive and would need to be
interruptible on rapid toggling.

### C3 — Numbers that jump
`app/page.tsx:20,24-30` polls `/api/stats` every `POLL_MS` (5000ms) and
writes the result into `stats`, which `components/stat-card.tsx:5` renders
as plain text with no `tabular-nums` anywhere — not in `globals.css`, not in
`tailwind.config.ts`, not on the component. Every refresh reflows whatever
sits next to the revenue/invoice/overdue figures.

## Marginal but real

### C4 — A heading that leaves a word behind
Every heading in the tree (`Dashboard`, `Invoices` ×2, `Page not found`,
`Filters`) is one or two words — none will realistically wrap at any
reasonable viewport, so the heading half of this tell is weak to the point
of not really applying. The one candidate that's genuinely a short prose
block is `app/not-found.tsx:7-9` ("That address is not part of this
workspace.") with no `text-pretty`, rendered at full width with no
max-width constraint — plausible at narrow mobile widths but a single,
thin instance in the whole tree. Real absence, but I would not lead a
report with it.

## Considered and declined

- **C2 — Centered by the box, not by the eye.** No control in the tree
  pairs an icon with text (the refresh button is icon-only, "New invoice"
  is text-only). First door: the condition the tell looks for never arises.
- **C6 — An image with no edge.** No content `<img>` appears anywhere in
  the tree — `app/icon.svg` is a favicon, not content. First door: condition
  never arises.
