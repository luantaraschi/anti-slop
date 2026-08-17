# anti-slop audit — clean-dashboard

Scope: full audit (Surface, Craft, Words, Finish). Target read in full:
`app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/invoices/page.tsx`,
`app/icon.svg`, `tailwind.config.ts`, `components/ui/button.tsx`,
`components/stat-card.tsx`, `components/invoice-row.tsx`, `components/table.tsx`,
`components/filter-panel.tsx`. 11 files, all opened.

## Verdict

Nothing survives the false-positive filter. Every one of the four axes shows
the evidence the filter asks for before a tell is allowed to fire: a named
palette derived from the subject (`ink`, `paper`, `rule`, `ledger`, `flag`),
a radius scale where the outer value is provably the inner value plus the
padding between them, a type scale with a display and a body family, a single
elevation level reserved for the one surface that asks for a decision,
`tabular-nums` applied exactly where a figure updates and nowhere else,
dark-mode borders declared everywhere a border exists in light mode, disabled
state and visual reduction moving together, status carried on both a color
and a text label, two distinct empty-state messages for two distinct
situations, a custom 404, a custom favicon, and copy that names the outcome
("Send the reminder", "Show every invoice") instead of the scaffold's verbs.
This reads as a small, deliberately finished product, not as an audit target
with the harder findings filed off.

## Findings reported

None. Five to ten is the normal band, but the report rules in `SKILL.md`
exist to stop padding a real list to look thin — they do not require
inventing findings against a codebase that does not have them. Below is the
per-axis reasoning, then the candidates that were seriously weighed and why
each one was declined.

## Axis-by-axis

**Finish.** `lang="en"` is set (`app/layout.tsx:9`). Titles are per-route via
a template (`app/layout.tsx:4`, `app/page.tsx:10`, `app/invoices/page.tsx:6`)
— no shared scaffold title. `app/icon.svg` is a custom mark built from the
theme's own colors and radius, not a framework default. Exactly one `h1` per
route (`app/page.tsx:54`, `app/invoices/page.tsx:13`, `app/not-found.tsx:6`).
No `<img>` tags exist, so F7 doesn't arise. `app/not-found.tsx` is a real,
specific route, not the framework wall. `.map()` in `components/table.tsx:49`
keys on `invoice.number`, not index. No placeholder text, no `href="#"`, no
`TODO` anywhere in eleven files of sample data that reads as real (Braga &
Filhas, Marés Studio, Ourivesaria Lume). F3/F4/F9/F10 (meta description, OG
tags, canonical, sitemap) are absent, but the product is an invoice ledger
with no public/marketing surface anywhere in the tree — the plausible read
is an authenticated business tool, which is the named exemption for all four
checks. See "Considered and declined" below for how much weight that read
gets.

**Surface.** `theme.extend` in `tailwind.config.ts` carries named colors, a
three-value radius scale (`control`/`panel`/`chip`) with a comment deriving
the relationship, a two-family type scale, and one named shadow reserved for
a single elevated surface. No `from-purple-*`/`to-blue-*` gradient anywhere.
No decorative lucide icons — the one icon in the tree (`app/page.tsx:57-59`)
is a functional refresh glyph with an `aria-label`. Spacing varies by level
(`mt-10`, `mt-14`, `mt-16` at section boundaries vs. `gap-4`, `py-3` within
rows) rather than one value repeated top to bottom. The one primitive
installed, `components/ui/button.tsx`, is imported everywhere a button
appears (`app/page.tsx`, `components/table.tsx`, `components/filter-panel.tsx`)
— nothing reimplements it in a raw `div`.

**Craft.** This axis is where the fixture does the most explicit work, and
it holds up under a relationship-by-relationship check rather than a
comment-by-comment trust. `control` (5px) + 7px padding = `panel` (12px) —
verified by the padding values actually used (`components/filter-panel.tsx:55`,
`components/table.tsx:23`), not just asserted in a comment. Every button
variant pairs `hover:` with `active:` (`components/ui/button.tsx:22,24`).
The one figure that refreshes on an interval carries `tabular-nums`
(`components/stat-card.tsx:45`); the one figure that never changes doesn't
(`app/page.tsx:126`) — both correct per C3's own guidance that static numbers
read better proportional. The filter panel's open/close is a `transition`,
not a `@keyframes` block, and the close is half the duration and same small
offset as the open (`components/filter-panel.tsx:60-62`) — asymmetric in the
direction C7 asks for. Every border that exists in light mode has a `dark:`
counterpart at the same call site, checked across all five components that
declare one. The `Clear` button's `disabled` attribute and its dimmed look
come from the same ternary (`components/filter-panel.tsx:78`). Invoice status
is never color-only — `STATE_LABEL` and `STATE_TONE` render together at every
call site (`components/invoice-row.tsx:39-41`).

**Words.** Buttons name the outcome ("Write an invoice", "Send the reminder",
"Show every invoice", "Write your first invoice") rather than "Submit" or
"Learn more". The two empty states in `components/table.tsx` are genuinely
different situations with different copy and different actions — filtered
name-checks the filter term, structurally-empty invites the first invoice —
which is exactly the distinction W3 asks for instead of one generic "No
items found". `app/not-found.tsx` explains what happened (voided invoices
keep their number) instead of apologizing or going vague. No implementation
nouns ("Entity ID", "Sync") leak into any label. The three stat cards
(`app/page.tsx:66-84`) are three because the business has three states worth
surfacing — outstanding, overdue, settled — and the rest of the page carries
different counts (five invoices, two header actions, two filter buttons), so
it doesn't read as the generator's reflexive three.

## Considered and declined

**C4 on the "Reminders" heading (`app/page.tsx:92`).** This `h2` has no
`text-wrap: balance` while every other heading on the same route does
(`app/page.tsx:54`, `104`; `app/not-found.tsx:6`; `app/invoices/page.tsx:13`).
Taken alone, that's the C4 signal. But C4's own second door is "the project
already handles the same detail correctly somewhere else, which is that
axis's own evidence someone looked" — and that's what the other four
headings in the same two files demonstrate. One heading without the property
against four with it reads as a single oversight in a codebase that
otherwise applies the treatment consistently, not as a pattern of nobody
checking. Declined.

**C5 on sub-40px buttons.** Every button size except `icon` renders under
40px tall (`control` is `h-9`/36px, `row` is `h-7`/28px), and only the
icon-only refresh button extends its hit area with a pseudo-element
(`components/ui/button.tsx:31`). Read narrowly, most buttons in the tree are
short of the 40px floor with nothing compensating. Declined because C5's own
framing is about a "drawing" — an icon's raw pixel footprint — and the one
control that actually is just a drawing gets exactly the treatment C5 asks
for. Text buttons carry horizontal padding and a caption, which is a
different control class than the one the tell is written against, and
generalizing the fix to every labeled button in a dense, desktop-first ledger
UI would be applying the letter of the check past what its principle covers.

**F3/F4/F9/F10 (meta description, Open Graph, canonical, sitemap).** All
four are absent. All four carry the same exemption: an app that sits behind
authentication and never reaches a search index. Nothing in this tree proves
a login wall exists — there's no auth code to point to. But there's also no
public page anywhere in the fixture: no marketing route, no landing page,
nothing meant to be shared or indexed, only an invoice ledger's working
screens. Weighed as a real shipped product, the more likely read is a gated
business tool, which is the checks' own exemption. Kept out of the findings
list on that basis rather than reported with a caveat attached.

**A10 on `stat-card.tsx`'s raw `div`.** `LedgerStat` builds its container by
hand (`components/stat-card.tsx:40`) rather than importing a `Card`
primitive. Declined because A10 requires a primitive that's installed and
then bypassed — there is no `Card` in `components/ui/` for it to bypass. The
project has one primitive, `Button`, and it's used everywhere a button
appears.
