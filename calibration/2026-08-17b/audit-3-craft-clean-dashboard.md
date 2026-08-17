# anti-slop craft — `fixtures/clean-dashboard/`

Second measurement round of 2026-08-17, run after craft.md's preamble gained the
third decline category and the stock-code rule.

**Verdict** — Craft finds nothing to report: all twelve tells decline, eleven of them because the condition either never arose or arose and was handled, and one (C4) because a single untreated heading at `app/page.tsx:94` is outvoted 2-to-1 by treated headings elsewhere.

**0 findings. 0 dropped.**

## The twelve tells, by decline state

| Tell | Decline state | Evidence |
|---|---|---|
| C1 | **3 — Fix applied** | `tailwind.config.ts:16`, `components/filter-panel.tsx:55` |
| C2 | **1 — never arises** | `app/page.tsx:57` |
| C3 | **3 — Fix applied** | `components/stat-card.tsx:45` |
| C4 | **2 — real failure, exempted** | fails at `app/page.tsx:94`; released by `app/not-found.tsx:6`, `components/table.tsx:35` |
| C5 | **3 — Fix applied** | `components/ui/button.tsx:31` |
| C6 | **1 — never arises** | no `<img>` in any of the 11 files |
| C7 | **3 — Fix applied** | `components/filter-panel.tsx:61-62` |
| C8 | **3 — Fix applied** | `components/filter-panel.tsx:56` |
| C9 | **3 — Fix applied** | `components/ui/button.tsx:22`, `:24` |
| C10 | **3 — Fix applied** | `components/invoice-row.tsx:33`, `app/page.tsx:127` |
| C11 | **3 — Fix applied** | `components/filter-panel.tsx:78` + `components/ui/button.tsx:14` |
| C12 | **3 — Fix applied** | `components/invoice-row.tsx:39-41` |

**Exactly one door-two exemption, and it has a real failing instance to excuse.** Nine are state three — a site existed and the Fix is in the code — and two are door one, where I confirmed no site exists rather than assuming it.

On **C10** specifically: the project has dark mode so door one is shut, and every border declares both themes, so there is **no failing border and door two has nothing to excuse**. Calling this door two would be exactly the mislabel the brief warns about.

On **C4**: two cautions. It is the thinnest majority the clause can produce — the tell's own examples are 5:1 (oversight) and 3:3 (pattern), and 2:1 sits just past the line. And SKILL.md's recorded gap about a population of one does not bite here, because the population is three.

On **C8**: the preamble names "a panel that opens on a transition rather than a keyframe" as the canonical state-three case; this is that case.

## Rules I had to supply

**C1 — which sentence governs, and how I resolved the recorded impasse.**

**I resolved on the first-sentence reading**, and under it C1 declines: no two nested rounded elements share a radius value, and the only inner radius exceeding its outer is the pill the Signal excludes.

Three reasons. The first sentence is the only one stating a firing condition, and SKILL.md holds that a counting clause without a threshold hands the verdict to whoever is reading. The Signal records that the sum-alone scoping was drafted and **withdrawn**, naming this tree as the one it wrongly fires — adopting it would be substituting a repair the catalog explicitly declined to make. And the Principle measures parallel curves at an equal radius, which 12-outside-5 does not do at any padding.

**What the other reading would have produced.** Under the counting sentence alone, the four non-pill pairs score 1 concentric to 3 not:

- `filter-panel.tsx:55` → `rounded-control`, 7px padding — 12 = 5 + 7 ✓
- `table.tsx:19` → `:25`, 27px — fails the sum, released by the >24px clause
- `table.tsx:34` → `:42`, 20px — fails the sum, nothing releases it
- `page.tsx:89` → `:99`, 20px — same

So the sum-alone reading fires C1 twice, at `components/table.tsx:42` and `app/page.tsx:99`. **This is the single most consequential judgement in the report**, and it turns entirely on a question the catalog has recorded as unresolved. If a future round settles the Signal on the sum, this tree gains two Craft findings and my verdict of zero is wrong.

**C2 — the magnitude the tell does not name.** Supplied: an icon is not a site when its optical centroid sits within the Fix's own typical correction — two pixels — of the box centre, since firing would demand an offset smaller than the one the Fix prescribes. Measured: area-weighted centroid ≈ (10.2, 9.0), 0.2px right and 1.0px high, both inside the bound. The ink *bounding box* is off-centre by 1.5px, which is why I measured mass instead.

**C4 — whether a non-site counts.** Supplied: a non-site is excluded from both sides, even when it carries the property. Ran both ways: 2:1 excluding, 3:1 including. Same verdict.

**C4 — what counts as a short text block.** Supplied: "complete sentence" requires a finite verb. Ran both ways: 5:0 excluding the footer, 5:1 including. Same verdict.

**C10 — whether a shadow is a separator.** Supplied: a box-shadow is neither a border nor a divider. Ran the generous reading too; declines either way.

**C11 — whether colour alpha is "reduced opacity."** Supplied: alpha on a colour token is a colour choice, not a disabled affordance. Without this, every muted-text token in any tree fires C11.

**C7 — an interpretation made explicit rather than a rule supplied.** SKILL.md's conjunction convention governs, so "the same duration and the same distance" needs both, and only the distance matches. Worth noting: C7's own Fix prescribes "a small, fixed offset," and a fixed offset is equal in both directions by definition — so reading "same distance" as independently sufficient would make C7 fire on its own Fix.

## Did any comment move a verdict?

**No.** Every verdict came from the code, and most comments check out against what they describe.

**Two comments claim more than the code does.**

`tailwind.config.ts:14-15` — *"panel wraps control with 7px of padding: 12 = 5 + 7."* Stated as the tree's rule. It is true at exactly one of the four counting panel→control nestings. The other three put 20px, 20px and 27px between the panel edge and the control. **The theme comment describes a habit the components mostly do not keep.**

`components/table.tsx:22-23` — *"The theme's 7px inset."* 7px is not a theme value; `tailwind.config.ts` extends radii, fonts, sizes and one shadow, and no spacing token. It appears only as the arbitrary utility `p-[7px]`. And the div carrying it has no radius and no border, so unlike in `filter-panel.tsx` this 7px is concentric with nothing.

**One comment is addressed to the auditor rather than describing the product.** `app/page.tsx:90-93` names the tell and the door it wants tested. It describes the code correctly and it did not produce my verdict — I reached door two from the 2:1 count. But **a source comment that instructs the reader about the audit is the one thing in this tree I would not take at face value.**

## Considered and not carried by any tell

- **`components/filter-panel.tsx:51-63` — the closed panel keeps its layout box.** Closed, it is `opacity-0 -translate-y-1.5 pointer-events-none` with no `hidden`, so it permanently reserves roughly 52px between the Filters button and the ledger. **You would see the gap by opening the page, which is this axis's own test** — but C7 does not fire (durations differ, no `display:none`) and C8 does not (it is a transition). No tell carries it.
- Inline links with neither `hover:` nor `active:` — not C9 sites, which require a declared hover.
- `h-7` and `h-9` under 40px — excluded twice by C5's own carve-outs.
- The `due` column without `tabular-nums` — not a C3 site; its values are mixed prose.
- Outside this axis: `components/ui/button.tsx:5` imports `@/lib/utils`, which does not exist in the tree. With no CSS file anywhere, `tailwind.config.ts` plus the utilities in the eleven files are the whole style surface, which is what let me score C8 and C10 exhaustively rather than probabilistically.
