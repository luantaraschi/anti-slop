# anti-slop surface — `fixtures/slop-dashboard/`

Second measurement round of 2026-08-17, run after the conventions in SKILL.md's
"How a Signal reads" landed and after A1's third repair and A6's reformulation.

**Verdict** — the stock dashboard, with the theme file never opened: `theme.extend` is an empty object (`tailwind.config.ts:5`), so the palette, the type scale and the radius were all inherited rather than chosen, and the one string `rounded-2xl border border-gray-200 shadow-lg p-6` is re-typed at six sites beside two stock primitives that almost nothing imports.

Report cap suspended. **6 of 10 Surface tells fire, 4 decline.**

## Findings

```
ROOT
A1   Palette nobody picked           tailwind.config.ts:5      fixes A5, unblocks A3
A10  Primitives installed, 9 sites
     hand-rolled beside them         components/stat-card.tsx:3   fixes A4, A3

THEN
A4   Border + shadow + radius on every surface   components/stat-card.tsx:3
A3   One radius on button, input, card, container app/page.tsx:54, 57, 61
A6   p-6 at four nesting levels                  app/page.tsx:33 → 45 → 50 → table.tsx:16
A5   No scale, no family, font-bold sole emphasis tailwind.config.ts:5
```

## The ten tells

| Tell | | Evidence |
|---|---|---|
| A1 Palette nobody picked | **fires** | `tailwind.config.ts:5` — `theme: { extend: {} }` |
| A2 Generator gradient | declines | No `from-`/`via-`/`to-`/`bg-clip-text` in the tree |
| A3 One radius for everything | **fires** | `rounded-2xl` on card, container, input, button |
| A4 Elevation without a system | **fires** | `rounded-2xl border border-gray-200 shadow-lg` |
| A5 No type scale | **fires** | no `fontSize`, no `fontFamily`; see disclosure 2 |
| A6 Uniform rhythm | **fires** | `p-6` down four levels |
| A7 Decorative icons | declines | one icon, in a `<button aria-label="Refresh">`, standing in for a label |
| A8 Template layout | declines | 2 of 3 clauses under the conjunction convention |
| A9 Generic motion | declines | 1 of 3 clauses under the conjunction convention |
| A10 Primitives hand-rolled | **fires** | `components/stat-card.tsx:3` vs `components/ui/card.tsx:12` |

**False positive filter, run first.** All four evidence doors are shut: `theme.extend` is `{}`; `app/globals.css` is four lines of `@keyframes` with no `:root` and no `@theme`; no tokens file; `components/ui/` is verbatim stock shadcn.

## A9 — clause by clause

Signal: "`transition-all duration-300` as the default transition, `hover:scale-105` on cards, and no `prefers-reduced-motion` block anywhere."

Three clauses, no examples disclaimer and no "any one of these" — so under SKILL.md's first convention it is a **conjunction**.

1. `transition-all duration-300` — **fails.** Zero occurrences. The only transition utility is `transition-colors`, `components/ui/button.tsx:8` — a *named* property, which is what A9's own Fix prescribes.
2. `hover:scale-105` on cards — **fails.** Zero `scale-` in the tree. No card carries any hover state.
3. No `prefers-reduced-motion` block — **holds.** And there is motion to guard: `components/filter-panel.tsx:7` runs `animate-[slideIn_200ms_ease-out_forwards]`.

**1 of 3. Conjunction requires 3. A9 declines.**

Plainly: clause 3 is true and it is a real accessibility gap. **But A9 as written does not fire on it, and I am not smuggling it in.** SKILL.md names this exact temptation: "A tell that lists three symptoms and fires on one is a tell that fires on a third of the trees it was written for." The project's motion is in fact closer to A9's Fix than to its Signal — one animation, one place, named keyframe, 200ms, `ease-out`. **Recorded as an observation the Surface axis has no tell that fires on alone.**

## A6 — clause by clause

A6 names its examples as examples in its own text, which is the convention's "says otherwise" case. The deciding clause is one spacing value repeated down the nesting.

| Level | Site | Value |
|---|---|---|
| page wrapper | `app/page.tsx:33` `<main className="p-6 space-y-4">` | `p-6` |
| section | `app/page.tsx:34` and `:45` | `p-6` |
| card | `app/page.tsx:50` `<Card className="… p-6 space-y-4">` | `p-6` |
| element inside the card | `components/table.tsx:16`, rendered at `app/page.tsx:52` | `p-6` |

The deciding clause holds on the exact four-level chain the Signal names. All three example utilities happen to be present, but under the convention that is coincidence — **A6 would fire on the repetition alone if only `p-6` existed.**

The mechanism is visible at `app/page.tsx:33→34`: `<main className="p-6">` immediately containing `<div className="p-6">` puts the header 48px from the edge while the Card at `:50` sits at 24px. The exemption addresses uniformity *across* a grid; this uniformity runs *down* the containment chain.

## A8 — why it declines

Three clauses, no disclaimer, so conjunction. Clause 1 (hero with pill badge, h1, subtitle, two buttons) **fails** — no pill badge and no subtitle anywhere. Clauses 2 and 3 hold. **2 of 3, A8 declines.** Read as "any one of these" it would fire loudly. It also declines a second time on its own exemption.

## A1 — clause by clause

1. "The project has no named colors of its own." — **true.** Every color is a Tailwind default step.
2. "declares none under either `theme.colors` or `theme.extend.colors` — check both." — **true.** `theme: { extend: {} }`. Neither key exists.
3. "no color custom property under `:root` or `@theme` anywhere." — **true.** No `:root`, no `@theme`, no `--` declaration in any file.

**All clauses true. No clause is false. A1 fires.**

The Principle's aggravating case is live: `bg-primary`, `ring-ring`, `bg-card` resolve against custom properties nobody defined. The one `<Button>` rendered has no background — a second color vocabulary rendering as nothing, exactly as A1 describes.

## Rules I supplied that the tell does not contain

**1. A3's threshold — supplied, and it decided how I fired.** The tell names what it counts and no threshold. Count is 4 literally or 1 under scoping. **I did not fire on the count at all** — I fired on the first clause, which is fully decidable and fully true. SKILL.md pre-records this defect.

**2. A5's "sole emphasis" scope — supplied, and A5's firing rests on it.** Tell: *"`font-bold` as the sole emphasis."* Read literally across the whole tree the clause is **false** — three weights exist: `font-bold` (11 product sites), `font-medium` (`components/ui/button.tsx:8`), `font-semibold` (`components/ui/card.tsx:38`). An auditor reading it literally would fail clause 2 and, under the conjunction convention, **decline A5**. I supplied *weights shipping inside verbatim stock primitives are not emphasis the project chose*. I lean on the false-positive rule that a `components/ui/` "that differs from stock shadcn" is the evidence that counts — but **that rule is written as an evidence test for firing, not as a scoping instruction for reading a clause.** This is the disclosure most likely to change the verdict if you disagree with it.

**3. A6's nesting across a component boundary — supplied.** The fourth level is "inside the card" only because `<InvoiceTable>` renders inside `<Card>`. The tell doesn't say whether the chain may cross files. An auditor reading file-by-file sees `p-6` twice and may never complete the four-level chain.

**4. A1's hex-in-an-asset — supplied, decided nothing.** `app/icon.svg:2` carries `fill="#111827"`, which is Tailwind's own `gray-900` regardless.

**5. A10's counting threshold — supplied, low risk.** Card: 1 importer against 5 hand-rolled; Button: 1 against 4. I counted `page.tsx:50` as an importer even though its `className` re-types the same five utilities the hand-rolled sites do — 1 nominal importer and 0 effective ones. Re-classifying would have strengthened the finding; I left it favorable to the tree.

## Outside the axis

Both primitives import `@/lib/utils` and no `lib/utils.ts` exists in the tree — a build failure, not a Surface matter. And the reduced-motion gap from the A9 walk is true, worth fixing, and is not a firing of A9.
