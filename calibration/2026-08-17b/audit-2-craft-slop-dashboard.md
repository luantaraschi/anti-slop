# anti-slop craft — `fixtures/slop-dashboard`

Second measurement round of 2026-08-17, run after craft.md's preamble gained the
third decline category and the rule that stock scaffold code is not the project
looking.

**Verdict** — Every surface in this dashboard is the same card copied ten times (`rounded-2xl border border-gray-200 shadow-lg p-6`), nested inside itself, declared for one theme only, and the four things that actually move or change state — a polled number, a toggled panel, a disabled button, a status dot — were each left at whatever the first pass produced: 10 of 12 Craft tells fire, and nothing in the tree is a second look at anything.

## Findings

```
ROOT
C10  1 dark: on the body, 10 borders light-only   app/layout.tsx:8      fixes 10 border sites in 5 files
C1   rounded-2xl inside rounded-2xl, 5 pairs      app/page.tsx:50       fixes 5 nested pairs
C8   keyframe driven by a useState toggle          components/filter-panel.tsx:7   unblocks C7

THEN
C3   3 polled numbers, no tabular-nums            components/stat-card.tsx:5
C12  status carried by dot color alone            components/table.tsx:19
C7   entrance animates, exit is an unmount        components/filter-panel.tsx:6
C11  disabled attribute, no visual reduction      app/page.tsx:64
C9   hover on 2 controls, active: on none         app/page.tsx:61
C5   20px icon button, no extended hit area       app/page.tsx:37
C4   short text block, no text-pretty             app/not-found.tsx:7
```

0 findings dropped. Cap suspended.

## Ledger

**Fires (10):** C1, C3, C4, C5, C7, C8, C9, C10, C11, C12
**Declines (2):** C2, C6 — **both door one, the condition never arises.** Neither is an exemption; neither is a case of the Fix having been applied.

**No decline in this tree is of the third kind.** There is not one instance in the twelve where the project met a Craft condition and handled it: no `tabular-nums`, no `active:`, no `text-pretty`, no dark border variant, no extended hit area, no interruptible transition, no second status channel, no disabled visual reduction. Door two never opened once, in either direction — that is the finding behind the finding.

## C8 — the door-two walk

Door two: *"transitions already drive the project's other interactive states, leaving this keyframe the odd one out."* The only `transition-*` anywhere in the tree is `transition-colors` at `components/ui/button.tsx:8`. Two independent reasons it does not open the door:

1. **The preamble names this exact artifact.** *"A `components/ui/` that matches a stock install answers no door on this axis: its `transition-colors` is not evidence that transitions are the project's habit."* And `components/ui/button.tsx` is stock — the canonical shadcn button, verbatim: same cva base string, same six variants, same four sizes, same `forwardRef` + `Slot` + `displayName` shape. It even imports `@/lib/utils`, and there is no `lib/` directory in this tree.
2. **Even setting the stock rule aside, it is the wrong kind of state.** `transition-colors` drives a hover colour. C8 is about an open-and-close whose timeline must be interruptible.

The project's *own* interactive-state code, at `app/page.tsx:61` and `:69`, changes background on hover with **no** `transition-*` at all. So the project's actual habit is the opposite of what door two asks for.

## C11 — the door-two walk

Door two: *"the project's other disabled controls keep the two sides in step and only this control drifted."* The candidate is `disabled:pointer-events-none disabled:opacity-50` at `components/ui/button.tsx:8`. It does not open the door on two grounds:

1. **The preamble names this exact artifact too.** *"its `disabled:opacity-50` is not evidence that the project keeps a disabled control's two sides in step."*
2. **Nothing renders it.** *"a declared capability that nothing renders is not an instance."* `Button` is used exactly once, at `app/page.tsx:42`, with no `disabled` prop. The `disabled:opacity-50` never reaches a pixel.

Worth flagging for fix ordering: routing the three hand-rolled buttons through the `Button` already sitting in `components/ui/` would kill C11 outright — but it would **not** kill C9, because stock shadcn carries no `active:` either.

## C1

Five nested pairs, five with equal radii, zero where outer = inner + padding (which would be `rounded-[40px]`). The `size-2 rounded-full` dot is a pill and is not a site on either side of the count. **Both of the Signal's tests agree here, so the withdrawn-rewrite note in the tell does not bite.** Padding is exactly 24px and the clause requires it to *exceed* 24px — door closed.

## C4

No heading reaches four words, so the heading branch declines via door one. The text-block branch fires on `app/not-found.tsx:7-9`, one complete sentence, no `text-pretty`. Every other `<p>` is a fragment and is excluded by the tell's own definition.

**Note, not a supplied rule.** SKILL.md records that C4's count decides at a population of one, where it can only ever come out the same way. That is this case exactly. I applied the tell as written and am recording that the count clause carried no information here.

## Rules I had to supply (2)

| Tell | The tell's own words | The rule I supplied |
|---|---|---|
| C2 | *"a triangular or otherwise asymmetric icon centered by its bounding box with no offset"* — and SKILL.md's own note, *"C2 says 'otherwise asymmetric' and names no magnitude"* | Measure the ink bbox against the viewBox, and let the glyph's dominant form decide where the eye's centre sits. Measured: ring centred at (10,10) = box centre; total ink 1.5/20 units high. Declined on that basis; **overturnable** — a reader who ruled that any glyph without an axis of symmetry is a site would fire C2 here. |
| C7 | *"an exit that is just `display: none` while the entrance animates"* | A React conditional-render unmount (`{open && …}`) is the same case as `display: none`. There is no literal `display: none` in this tree. |

## Other tells, in brief

- **C3** fires: three values polled every 5000ms render at `text-2xl font-bold`, `tabular` appears nowhere in the tree.
- **C5** fires: `<button className="size-5" aria-label="Refresh">`, 20px, nothing extending it. The three `px-4 py-2` buttons are excluded by the tell's own carve-outs.
- **C6** declines, door one: zero `<img>`, zero `next/image`. The Signal's second clause *is* satisfied — every surface carries `border … shadow-lg` — but the Signal is a conjunction and the first clause has no instance.
- **C9** fires: two project-written controls carry `hover:bg-gray-50` with no `active:`; `active:` appears nowhere in the tree. The six stock hover variants were not counted as project evidence either way.
- **C10** fires: `dark:` on the body only, ten borders light-only across five files. `tailwind.config.ts` sets no `darkMode` key, so the v3 default applies and these variants do fire on `prefers-color-scheme: dark`.
- **C12** fires: an 8px dot, self-closing, no children, no `aria-label`, no `title`, identical shape across all three statuses. Neither of the row's other cells repeats the status.
