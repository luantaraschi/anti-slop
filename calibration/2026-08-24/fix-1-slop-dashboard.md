# Fix — dashboard-run

Findings came from the file named in the task: `calibration/2026-08-24/audit-1-slop-dashboard-before.md`
(29 tells, 28 rows, C1 folded into A3). No new audit was run to generate
findings; I read the report as given.

`repairs.md` (`skills/fix/references/repairs.md`) was loaded and used to
classify every id before touching code, per the skill's process. Where its
class or its `Fix` field left a genuine gap, that gap is named below rather
than filled by guessing.

Split before starting: **15 repaired, 14 refused, 0 not attempted.**

## A ruling on the two out-of-catalog facts

Both judged **in scope**, and both fixed, ahead of the 29 tracked findings:

- **`app/globals.css` had no `@tailwind` directive.** Added
  `@tailwind base; @tailwind components; @tailwind utilities;` (v3 form,
  matching `tailwind.config.ts`'s `satisfies Config` shape, not the v4
  `@import` form). This decides nothing about the product — it is the one
  line every Tailwind v3 project needs to emit any CSS at all, and every
  other finding in the report assumes it exists.
- **`lib/utils.ts` was imported and did not exist.** Created it with the
  canonical shadcn `cn()` (`clsx` + `tailwind-merge`), which is boilerplate
  identical across shadcn installs, not a per-product decision. I could not
  confirm `clsx`/`tailwind-merge` are declared dependencies, because no
  `package.json` exists among the twelve files this task can touch — flagged
  as a residual gap, not silently assumed away.

Rule I used to draw this line: a repair is in scope here only if it requires
zero design judgment and its content is either fully mechanical (one
directive) or fully standard (boilerplate identical everywhere it's used).
Neither the `fix` `SKILL.md` nor `repairs.md` states this rule — both are
written for the 29-row catalog, not for build-breaking absences outside it —
so this line is mine, and I'm naming it as supplied rather than found.

## Repaired (15)

| id | file | what changed |
|---|---|---|
| A4 | `components/stat-card.tsx`, `app/page.tsx`, `app/invoices/page.tsx`, `components/table.tsx`, `components/filter-panel.tsx` | Counted the surfaces that genuinely float above a neighbour: none do (every "raised" surface sits in normal flow). Declared that count — zero — by dropping `shadow-lg` everywhere it was stacked on `rounded-2xl border`, leaving the border as the one separation device. |
| C15 | `app/page.tsx:39,61` | Stat grid: `grid-cols-3` → `grid-cols-1 sm:grid-cols-3`. Header row: `flex justify-between` → `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`. Breakpoint chosen at `sm` because three cards and a two-item header are what actually breaks first, not a scale taken from the framework. |
| C9 | `components/ui/button.tsx:8`, `app/page.tsx` (Export CSV, Filters), `components/filter-panel.tsx` (overdue toggle) | Added `active:scale-[0.97]` beside every existing `hover:`, once at the shadcn `Button`'s base class and once at each raw hand-rolled button, since A10 (routing them through the primitive) is refused below. |
| C10 | `app/layout.tsx`, and every `border-gray-200`/`text-gray-500` site named in the finding | Declared a base foreground once, at the body (`text-gray-900 dark:text-gray-100`), plus `dark:border-gray-800` / `dark:text-gray-400` at every site the report named. Added `color-scheme: light dark` in `globals.css`, which floor.md bundles under the same "theme declared" section. |
| S1 | `app/page.tsx:26-33` | Added `.catch` to the poll's `fetch` chain. On failure, the stale stats stay on screen (per floor.md, "keeping a stale value is fine") but a small inline notice now says so, so a reader doesn't mistake a stalled number for an unchanging one. |
| C13 | `app/globals.css` | Added one `prefers-reduced-motion: reduce` block at the root, near-zero rather than zero duration so `transitionend` still fires (the filter panel's unmount depends on it). |
| F11 | `components/table.tsx:18` | `rows.map` now keys on `row.id`, which was already sitting in the data. |
| C12 | `components/table.tsx` | Added a text label beside the status dot, reading the same `row.status` value already in the row data (capitalized), so color stops being the only channel. |
| C7, C8 | `components/filter-panel.tsx` | Rewrote the panel from a conditional-unmount `@keyframes` animation to a mount/visible state machine driven by CSS transitions. Exit runs 120ms against a 200ms entrance — the 0.6 ratio deriving.md names — instead of vanishing in the same render. |
| C5 | `app/page.tsx:42-49` | Refresh button: wrapped the 20px icon in a `size-10` flex box with `-m-2.5`, extending the hit area to 40px with no change to its visual footprint. |
| C11 | `app/page.tsx:80-85` | "Send reminders" now carries `opacity-50 cursor-not-allowed` alongside its `disabled` attribute, in the same className, so the two can't drift. |
| C3 | `components/stat-card.tsx:5` | Added `tabular-nums` to the value paragraph, which is the one that actually changes on the poll. Left row totals in `table.tsx` proportional, since those are static per floor.md's own exception. |
| F1 | `app/layout.tsx:7` | `<html lang="en">` — the tree's only language, established by its own copy. |
| C4 | `app/not-found.tsx:7` | Added `text-pretty` to the one short text block in the tree. |

## Refused (14)

| id | file | answer needed |
|---|---|---|
| A1 | `tailwind.config.ts` | Root 1 (what the product is) and root 3 (temperature) — the four to six colors a palette derives from. Nobody available to supply them. |
| A3 | `tailwind.config.ts` | Root 4 (density) — the radius scale derives from it, per `deriving.md`'s radius section. |
| C1 | `app/page.tsx` / `components/table.tsx` | Folded into A3 in the report; refused for the same reason, tied to A3. |
| A5 | `tailwind.config.ts` | Roots 2, 3 and 4 (voice, temperature, density) — the type scale and family both derive from them. |
| A6 | `tailwind.config.ts` | Root 4 (density) — the spacing ladder derives from it. |
| A10 | `components/ui/button.tsx` + eight hand-rolled sites | Not a value — `repairs.md` marks it `unsettled`: routing every hand-rolled site through the primitive touches every callsite, which is a refactor's shape, not a repair's. The person's call on whether to spend it. |
| W3 | `components/table.tsx:13` | A fact: what the empty `/invoices` space is for, and whether it's genuinely empty or filtered-to-nothing. `rows = []` is hard-coded; nothing in the tree says why, or what the first action should be. |
| S2 | `components/filter-panel.tsx:6-7` | `repairs.md`'s own worked example of `unsettled`: putting `overdueOnly`/`sort` in the address is a structural change that can touch every consumer of that state, not a bounded repair. |
| F2 | `app/layout.tsx:3` | The product's name, to write two distinct, specific-first titles instead of one shared "Dashboard." |
| F3 | `app/layout.tsx:3` | The legal inventory (`legal.md`): who's publishing, what's collected, a contact route — none of which twelve files can answer — plus the internal/public question below. |
| F4 | `app/layout.tsx:3` | The product's name, for `og:title`/`og:description`. |
| F9 | `app/layout.tsx:1` | A fact: the site's deployed origin, to write `<link rel="canonical">`. |
| F10 | — | A fact: the site's origin, needed for an absolute-URL sitemap. (The Signal also has a second, origin-independent half — `/invoices` isn't linked from anywhere in the app — but `repairs.md` maps F10 as one unit blocked on the origin fact, and no id names "add internal navigation" on its own; splitting it myself would have been scope I invented rather than scope the map gave me, so I left it whole.) |
| C16 | `components/ui/button.tsx:8` | See "Rules I had to supply" below — refused despite `repairs.md` marking it `nothing`, because satisfying that literally meant patching around A1 rather than through it. |

Internal/public status (governing F3, F4, F9, F10 collectively): the audit's
own "Rules I had to supply" section already flagged that this tree shows no
login route, no middleware, no session check, and no deployment config, and
supplied its own default of "not verifiably internal." I did not re-litigate
that call — it's an auditing judgment, not a repair — and it doesn't change
what's needed here regardless: even an app confirmed internal would still
need F3's inventory and F2/F4's product name to write real pages rather than
templates.

## Not attempted

None. All 29 ids (28 rows plus C1) land in one of the two tables above.

## Rules I had to supply

**Scope of the two out-of-catalog facts.** Covered above — neither `SKILL.md`
nor `repairs.md` addresses build-breaking absences that sit outside the
29-tell catalog; the "zero design judgment, fully mechanical or fully
standard" line is mine.

**A4's zero-elevation count.** `deriving.md` says "count the surfaces that
genuinely float" and gives two Worked examples — one product declaring a
single level with a border-only fallback, another declaring none — but
doesn't spell out how to tell "floats" from "sits in flow" for an ambiguous
case. I read `stat-card`, the invoices `Card`, the table container and the
filter panel as all sitting in normal document flow with nothing stacked
above a neighbour, so the honest count is zero and the repair is border-only.
A stricter reader could call the filter panel's reveal-on-toggle a floating
surface and keep one shadow level for it; I did not, since it still occupies
flow space rather than layering over content.

**C7/C8's reused entrance duration.** `deriving.md`'s motion section derives
each duration "from how far the thing actually moves," which this tree gives
no measurement for. `repairs.md` marks both `stops: nothing`, which only
makes sense if the existing 200ms entrance already in the code counts as the
value to build the exit ratio from, rather than a fresh distance-based
derivation. I supplied that reading — keep the pre-existing number, derive
only the ratio (0.6 × 200 = 120ms) — rather than treating C7/C8 as silently
requiring root 3 (temperature) the way A9/A11 explicitly do.

**C16 — where I overrode `repairs.md`'s own classification.** The map lists
C16 as `branch`, ruled by `floor.md`, `stops: nothing`. Taken literally, the
only way to make `focus-visible:ring-ring` and the base `ring-offset-background`
resolve without extending the theme is to replace both with hard-coded,
non-token Tailwind colors (e.g. `ring-blue-600`) directly in
`components/ui/button.tsx` — bypassing the CSS-variable system Card and
Button's own `bg-primary`/`text-card-foreground`/etc. still depend on, all of
which stay invisible regardless, since A1 is refused. The audit report itself
contradicts the map here: A1's own paragraph names C16 as its dependent
(`fixes C16` in the ROOT table, and "wiring the shadcn CSS variables... makes
C16's broken focus ring paint"). Patching only the ring's color at the one
callsite while the same primitive's background and text stay unresolved is
the row, not the cause — exactly what `SKILL.md` says not to do. I followed
the audit report's explicit causal chain over the map's abstract "nothing,"
and refused C16 tied to A1. This is a real disagreement between two parts of
the skill's own material, not a close call I'm smoothing over.

**The audit's closing "What repairs this" list versus `repairs.md`.** The
audit report claims F9, F10, F2, C16 and S2 as part of the "mechanical
majority" this skill can take on alone. `repairs.md` — the document the `fix`
process actually directs a fixer to open — classifies all five as needing a
root, a fact, or as `unsettled`. I followed `repairs.md`, since it's the
skill's own named source of truth for classification, and I'm flagging the
mismatch rather than picking silently: an auditor's closing paragraph and the
fixer's own map disagree about five ids, and only one of the two documents
can be right about what's actually free.

**C5's hit-area technique.** `floor.md` names a pseudo-element as the
extension technique. I used a flex wrapper with a matching negative margin
instead — same net effect (a 40px hit box, zero layout footprint) — because
the button already renders a real child element (the SVG) rather than a bare
glyph a pseudo-element would stand in for. Functionally equivalent, not the
literal technique named.

**C12's "fact" requirement.** `repairs.md` marks C12 `stops: a fact — what
the status says`. I read that as satisfied here because `row.status` already
holds human-readable words (`"overdue"`, `"paid"`, `"draft"`) — I surfaced
data already in the code rather than writing new copy. A stricter reading
would treat "stops: a fact" as unconditional and refuse C12 regardless of
what's already in the data; I did not take that reading, and I'm naming the
choice rather than letting it pass as obviously correct.

## Row versus cause — an honest accounting

Most repairs above changed the cause the finding named: C7/C8 rebuilt the
actual mechanism (keyframe → transition state machine); A4 is a real
elevation-count decision, not a value swap; S1, C3, C4, C5, C11, C12, C13,
F1, F11 each had exactly one site in the whole tree, so fixing that site *is*
fixing the cause, not a row within a larger population.

Two are honestly weaker, and both trace to a root refused elsewhere:

- **C9** is cause-level for the shadcn `Button` (one declaration, all
  variants inherit it), but the eight hand-rolled buttons each needed their
  own `active:` class added individually. That's row-by-row patching, and
  it's row-by-row *because* A10 — the actual cause of there being eight
  separate hand-rolled buttons instead of one component — is refused. Fixing
  A10 later would make most of these individual edits redundant.
- **C10** is more systemic than a single-row patch (the base foreground is
  now declared once, at the body), but the border and label colors are still
  patched at every named site rather than read from one shared token, because
  the actual root — a real color system — is A1, and A1 is refused. If A1 is
  ever answered, these site-level `dark:border-gray-800` / `dark:text-gray-400`
  pairs should collapse into token references rather than staying as literal
  values repeated at each site.

## Re-audit

Not run as a fresh `anti-slop audit` pass — this run stayed inside the read
restriction given for the task (target directory, this report, and the
`fix`/`build`/`audit` skill references it names), and re-invoking the audit
skill risked reading outside that boundary in ways I couldn't fully predict
in advance. Instead, each of the 15 repaired ids was checked by hand against
its own Signal, re-reading every changed file afterward and grepping the
whole tree for the literal strings each finding turned on
(`shadow-lg`, `slideIn`/`@keyframes`, unpaired `text-gray-500`/`border-gray-200`,
missing `key=`, missing `active:` beside `hover:`). None of the removed
strings remain, and no unpaired dark-mode site remains. I did not re-run the
axis end to end through the audit skill itself, so this is verification, not
a formal re-audit, and I'm naming that gap rather than calling it one.
