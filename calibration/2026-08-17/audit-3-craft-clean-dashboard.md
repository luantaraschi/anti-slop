# anti-slop craft — `fixtures/clean-dashboard/`

**Verdict** — Craft passes not because the tree is too thin to check but because the Fix was applied at each site the axis names: the concentric 12=5+7 pair, the 40px pseudo-element under a 20px drawing, tabular figures on the one value that refreshes, a transition where a keyframe would have stuck, `active:` beside every `hover:`, both themes on all nine borders, the `disabled` attribute and its opacity set together, and the status word beside the status color — leaving exactly one Signal match in the whole tree, a four-word heading without `text-balance`, which the count then closes.

**Findings: none.** No tell fires. Zero findings dropped — the cap was suspended and nothing was cut for length.

---

## The twelve tells

| Tell | Verdict | Why |
|---|---|---|
| C1 radius vs. what it wraps | declines | Signal never matched |
| C2 centered by box, not eye | declines | Signal never matched |
| C3 numbers that jump | declines | Signal never matched |
| **C4 heading leaves a word behind** | **declines** | **`Not slop when` clause 2 — real failing instance, closed on the count** |
| C5 target the size of the drawing | declines | Signal never matched |
| C6 image with no edge | declines | Signal never matched |
| C7 enter and exit weigh the same | declines | Signal never matched |
| C8 animation that can't change its mind | declines | Signal never matched |
| C9 nothing happens when you press | declines | Signal never matched |
| C10 one theme was ever opened | declines | Signal never matched |
| C11 disabled that still looks clickable | declines | Signal never matched |
| C12 color carrying meaning alone | declines | Signal never matched |

C4 is the only tell in the set that reaches a `Not slop when` clause. The other eleven never get there — no failing instance exists for them to exempt.

---

## Per-tell detail

### C1 — declines, Signal never matched

Seven nested rounded pairs exist. None carries equal radii and none has an inner radius larger than the outer, once the Signal's own carve-out (`A pill is not a site on either side of that count`) removes `rounded-chip` (999px) at `components/invoice-row.tsx:39`.

The pair that shows the arithmetic was done: `components/filter-panel.tsx:55` — `rounded-panel border border-rule p-[7px]` wrapping `rounded-control` buttons at `:65` and `:75`. 12 = 5 + 7, exactly the Fix. The theme records the same relation at `tailwind.config.ts:14-16`.

No `Not slop when` door was needed. See Gap 1 — three other pairs sit in a hole between the Signal's two sentences.

### C2 — declines, Signal never matched

Branch 1 (icon paired with text, equal padding): no site. All eight `Button` instances and both `Link`s carry text alone or a glyph alone — `app/page.tsx:56` is glyph-only, `:61`, `:99`, `components/table.tsx:24`, `:42`, `components/filter-panel.tsx:16`, `:65`, `:75` are text-only.

Branch 2 (asymmetric icon centered by its bounding box, no offset): the one icon-in-control is `app/page.tsx:58`. I checked the geometry rather than eyeballing it. The path `M10 3a7 7 0 1 0 6.7 9h-2.1A5 5 0 1 1 10 5v3l4-4-4-4v3Z` is a ring concentric on (10,10) — (10,3) is r=7 from it, (10,5) is r=5, (16.7,12) is 6.99, (14.6,12) is 5.02 — which is the exact center of `viewBox="0 0 20 20"` at `:57`. The arrowhead pushes the drawing's bounding box to roughly y∈[0,17], center (10,8.5). Had the glyph been bbox-centered the ring would sit at (10,11.5). It does not. The Signal's condition is factually absent.

### C3 — declines, Signal never matched

One value in the tree changes in place: `current` in `components/stat-card.tsx:28`, refetched every 30s by the `setInterval` at `:31-35`. It renders with `tabular-nums` at `:45`. Three instances on `app/page.tsx:66`, `:72`, `:79` all route through it.

Both numeric table columns carry it too — `components/invoice-row.tsx:34` (number) and `:43` (amount). The `due` column at `:46` goes without, correctly: its values are phrases ("in 6 days", "settled"), not a numeric column, and they never update in place. The static footer figure at `app/page.tsx:129` stays proportional, which is what the Fix prescribes (`not everywhere — static display numbers and version strings read better proportional`).

Zero failing sites against five carrying.

### C4 — declines, closed by `Not slop when` clause 2

**This is the only tell with a real failing instance.**

- Match: `app/page.tsx:94` — `<h2 className="font-display text-figure">Reminders waiting on you</h2>`. Four words, no `text-balance`. Four is the Signal's floor, so it is a site.
- Clause that closed it: *"or, among the sites of the same kind as the one that failed, more carry the property than miss it. That is a count, not an impression."*
- The count, headings against headings, sites only (4+ words): **2 carry, 1 misses.**
  - `app/not-found.tsx:6` — "That invoice is not here", 5 words, carries `text-balance`
  - `components/table.tsx:35` — "This is where your invoices land", 6 words, carries `text-balance`
  - `app/page.tsx:94` — 4 words, misses

A strict majority carries, so the door opens. The verdict is robust to the counting frame: including the sub-threshold headings that carry the property anyway (`app/page.tsx:54`, `:106`, `app/invoices/page.tsx:13`) gives 5:1 — the clause's own worked example of an oversight.

Text blocks are clean separately: 5 sites, 5 carrying — `app/page.tsx:95`, `app/not-found.tsx:9`, `app/invoices/page.tsx:14`, `components/table.tsx:20`, `:38`. The footer sentence at `app/page.tsx:127-129` is the only arguable sixth site; counting it still leaves 5:1.

Note for the record: `app/page.tsx:90-93` carries a source comment stating the omission is deliberate and naming this tell's second door. I scored the count, not the comment — the verdict above is what the class attributes produce on their own.

### C5 — declines, Signal never matched

`components/ui/button.tsx:31` declares `size-5` — a 20px drawing, under 40px — and extends it: `after:size-10` (40px) centered by `after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2`. That is the Fix verbatim, and it costs nothing in layout. Used at `app/page.tsx:56`.

The `row` (h-7 = 28px, `:27`) and `control` (h-9 = 36px, `:28`) sizes are under 40px in one dimension but are excluded twice over by the Signal's own text: *"A control whose hit area is set by a text label and its padding is not a site"* and *"A control short in one dimension and generous in the other is a real problem and a different one; this tell does not carry it."* Every use of both carries a label. Same for the two inline links, `app/page.tsx:111` and `app/not-found.tsx:16`.

Neither door was needed — the first (*"No control in the tree is smaller than 40px"*) is in fact shut, since `size-5` is smaller than 40px. It passes on the extension.

### C6 — declines, Signal never matched

No `<img>` anywhere in the tree. `app/icon.svg` is a favicon, not content, and is not rendered through an `<img>`. The inline `<svg>` at `app/page.tsx:57` is a control glyph. C6's first door names this same state (*"No content image appears in the tree"*), which is a restatement of the Signal not matching rather than an exemption.

### C7 — declines, Signal never matched

One animated enter/exit in the tree, `components/filter-panel.tsx:51-63`. The Signal wants the same duration **and** the same distance:

- `:61` open — `translate-y-0 opacity-100 duration-200 ease-out`
- `:62` closed — `pointer-events-none -translate-y-1.5 opacity-0 duration-100 ease-in`

Durations differ 200/100, so the conjunction fails. The second branch (exit as `display: none`) does not apply — `:56` declares `transition-[opacity,transform]` and the element stays in the DOM at `opacity-0` with `pointer-events-none`, so the exit actually runs. See Gap 3: the distance *is* the same both ways.

### C8 — declines, Signal never matched

No `@keyframes` block and no `animate-*` class anywhere in the tree; `tailwind.config.ts` declares no `keyframes` or `animation` under `theme.extend`. The one interactive open-and-close, `components/filter-panel.tsx:10-32` driving `:51-63`, runs on `transition-[opacity,transform]` at `:56` — the Fix.

Worth stating precisely: **neither door closed this.** The first (*"No interactive open-and-close exists anywhere in the tree"*) is shut, because one does exist. The second (*"transitions already drive the project's other interactive states, leaving this keyframe the odd one out"*) presupposes a keyframe to be the odd one out, and there is none. See Gap 5.

### C9 — declines, Signal never matched

Every element in the tree with a `hover:` state also has an `active:` state, in both themes:

- `components/ui/button.tsx:22` — `hover:bg-ink/90 active:bg-ink/75 … dark:hover:bg-paper/90 dark:active:bg-paper/75`
- `components/ui/button.tsx:24` — `hover:border-ink/40 active:bg-ink/5 … dark:hover:border-paper/40 dark:active:bg-paper/10`

Count: 2 carrying both, 0 carrying hover alone. The two text links (`app/page.tsx:111`, `app/not-found.tsx:16`) carry neither, which the Signal does not reach — it fires on hover-without-active, not on no-hover.

### C10 — declines, Signal never matched

Every border and divider in the tree declares both themes — nine sites: `components/stat-card.tsx:40`, `components/invoice-row.tsx:33`, `components/table.tsx:19`, `:34`, `:48`, `components/filter-panel.tsx:55`, `components/ui/button.tsx:24`, `app/page.tsx:127`, and the body background pair at `app/layout.tsx:10`. All use `border-rule` with `dark:border-rule/25`. No separator is declared for one theme only.

The nearest approach is `app/page.tsx:89` — `shadow-raised` with no dark counterpart. It is not a Signal match: a box-shadow is not a border, a divider, or a separator color, and the element's own background does flip (`bg-paper dark:bg-paper/10`), so the surface still separates from `dark:bg-ink` in the other theme. Under a widened reading it would still decline on the second door, nine both-theme borders to one. See Gap 6 for the evidence I had to refuse here, and Gap 4 for the one genuinely single-theme color.

### C11 — declines, Signal never matched

The two sides are set together. `components/filter-panel.tsx:78` sets `disabled={!overdueOnly}`; `components/ui/button.tsx:14` carries `disabled:opacity-50` alongside `disabled:pointer-events-none` and `disabled:cursor-default`. The attribute never appears without the visual reduction, and no reduced opacity is applied to a control without the attribute behind it — the only bare `opacity-0` is the closed panel state at `components/filter-panel.tsx:62`, paired with `pointer-events-none`, which is an animation state and not a control.

The Fix also asks for the pointer cursor to go, which `disabled:cursor-default` does. As with C8, the first door (*"No disabled state exists anywhere in the tree"*) is shut — one does exist. It passes on the Fix.

### C12 — declines, Signal never matched

No dot, stripe, or label-less badge exists. Both status indicators ship two channels:

- `components/invoice-row.tsx:38-42` — the badge renders `STATE_TONE` (color, `:21-25`) and `STATE_LABEL` (the words "Paid" / "Awaiting payment" / "Overdue", `:15-19`) together on every render.
- `components/stat-card.tsx:44-48` — the `text-flag` figure sits under the label at `:41-43` and above the period line at `:51`; at `app/page.tsx:74-77` those read "Overdue" and "one invoice, 9 days late". The color reinforces a word that is already there.

---

## The one sub-threshold instance

Not a finding — it matched a Signal and was then closed by an explicit clause. Recording it because it is the only thing in the tree that got that far.

```
C4  4-word heading, no text-balance   app/page.tsx:94
    closed: Not slop when clause 2, 2 treated headings against 1 untreated
    (app/not-found.tsx:6, components/table.tsx:35)
```

---

## Rules I would have had to supply — the gaps

Six places where reaching a verdict required something the tell does not contain. Gaps 1, 4 and 5 are the ones that would change an auditor's output on a different tree.

### Gap 1 — C1's Signal and C1's own counting sentence are not the same test

The tell's words, in order:

> **Signal** "Two rounded elements nested with the same radius value, or an inner radius larger than the outer one. Count nested pairs against the pairs where the outer radius equals the inner radius plus the padding between them."
> **Fix** "the outer one set to the inner radius plus the padding, where that padding is 24px or less."
> **Not slop when** "The padding between the layers exceeds 24px…"

Sentence one fires on *equal or inverted*. Sentence two, the Fix, and the door all measure *outer = inner + padding*. Those are different tests, and three pairs in this tree fall in the hole between them — non-concentric by the second, invisible to the first, and not reached by the ≤24px door:

- `app/page.tsx:89` — `rounded-panel` (12px) `px-5 py-4` wrapping `rounded-control` (5px) at `:99`. 5 + 16 = 21 vertically, 5 + 20 = 25 horizontally, neither is 12. Padding is 16-20px, inside the 24px door.
- `components/table.tsx:34` — `rounded-panel` `px-5 py-8` wrapping `rounded-control` at `:42`. Horizontal padding 20px, inside the door.
- `components/table.tsx:19` → `:23` → `:24` — 20 + 7 = 27px, which does clear the door.

The rule I would have had to supply to fire on these: **"every nested rounded pair must satisfy outer = inner + padding."** The tell does not say that. Its firing sentence says only *"the same radius value, or an inner radius larger than the outer one."* I did not supply it, so C1 declines — but an auditor who reads sentence two as the test will fire on this tree, and one who reads sentence one will not. That divergence is in the tell, not in the tree.

### Gap 2 — C2 never defines "asymmetric"

The tell's words: *"a triangular or otherwise asymmetric icon centered by its bounding box with no offset."* Its Principle offers one worked example, the play triangle. The refresh glyph at `app/page.tsx:58` is not mirror-symmetric, so it is literally asymmetric, yet it is radially balanced, so its optical center *is* its geometric center. To decline on the first door I would have had to supply: **"an icon whose mass is radially balanced is not asymmetric in the sense the Principle means."**

I did not need it — I verified from the path data that the drawing is positioned on the ring center (10,10) and not on its bounding-box center (10,8.5), so the Signal's second conjunct fails on the arithmetic alone. But on a tree whose glyph *was* bbox-centered, the verdict would turn entirely on a word the tell leaves undefined.

### Gap 3 — C7's Signal is a conjunction only by reading

The tell's words: *"The same duration and the same distance in both directions."* At `components/filter-panel.tsx:61-62` the distance **is** the same in both directions — `-translate-y-1.5`, 6px, each way — and only the duration differs, 200 against 100. Read as a conjunction it declines; read as two independent symptoms joined by "and", the distance half fires.

I read it as a conjunction, and the Fix is what justifies that: *"a small, fixed offset that signals direction without drawing the eye back"* explicitly blesses the same offset both ways, so same-distance cannot be a symptom on its own. That reasoning comes from the Fix, not from the Signal. The Signal alone is ambiguous.

### Gap 4 — C10's Signal names borders and separators; the tree's one single-theme color is neither

`components/stat-card.tsx:46` — `tone === "overdue" ? "text-flag" : "text-ink dark:text-paper"`. The `text-flag` branch has no `dark:` counterpart while the branch beside it has one. And `components/invoice-row.tsx:24` shows the project flipping that same flag color for the other theme in the badge: `bg-flag/10 text-flag dark:bg-flag/25 dark:text-paper`. So two components render the same semantic state in the same color family and only one of them was opened in dark mode.

That is C10's Principle almost word for word — *"the person who never opened the other theme is the only one who wouldn't notice."* But the Signal is: *"`dark:` present on the background and absent on the border or divider; a separator color declared only for the light theme."* A stat figure's foreground is not a border, a divider, or a separator. To fire I would have had to supply: **"any color declared for one theme only is a separator color."**

I did not supply it, so C10 declines. For completeness, under that widened Signal the second door opens anyway — roughly twenty both-theme declarations across the tree against this one — so the verdict survives either reading. But the instance is real and the tell as written cannot see it. This is the finding I would most want the tell rewritten to catch.

### Gap 5 — the two doors do not enumerate the way this tree passes

The preamble states: *"Each `Not slop when` clause below carries two doors instead. The first is that the condition never arises. The second is that the project already handles the same detail correctly somewhere else."*

For **C8** and **C11** neither door applies, and both tells still correctly decline:

- C8's first door — *"No interactive open-and-close exists anywhere in the tree"* — is shut. One exists, `components/filter-panel.tsx:10-32`. Its second door — *"transitions already drive the project's other interactive states, leaving this keyframe the odd one out"* — needs a keyframe to be the odd one out. There is none.
- C11's first door — *"No disabled state exists anywhere in the tree"* — is shut. One exists, `components/filter-panel.tsx:78`. Its second door — *"the project's other disabled controls keep the two sides in step"* — needs other disabled controls. There is exactly one in the tree.

Both pass through a third state the clause does not name: **the condition arises and the Fix was applied.** C5 sits here too — a control smaller than 40px exists at `components/ui/button.tsx:31`, and it extends. This matters practically: an auditor who believes every decline must exit through one of two doors will reach for whichever is nearer and mislabel a correctly-built control as an exemption, or worse, fire because neither door opened.

### Gap 6 — the theme-file comment I had to refuse

`tailwind.config.ts:29-33` carries a comment explaining that `shadow-raised` is ink-on-ink in the dark theme, does no work there, and that this is *"accepted rather than papered over with a second shadow."* That is precisely the evidence-of-a-decision the Surface false-positive rule accepts, and it is sitting in `theme.extend`, one of the four places that rule looks. I nearly closed the C10 shadow question on it.

craft.md forbids that in its preamble: *"Almost every tell here is an absence, so the Surface rule does not transfer: there is no file where someone recorded that the numbers should jitter."* Craft's evidence is behavior in other code — *"the project already handles the same detail correctly somewhere else"* — not prose about the code. The legitimate close for that shadow is the count of nine both-theme borders plus the fact that a shadow is not what C10's Signal names.

The same caution governs the whole run. This tree's comments name craft.md's concepts directly — concentric radii at `tailwind.config.ts:14-15` and `components/filter-panel.tsx:53-54`, tabular figures for values that move at `components/stat-card.tsx:11-13`, transition-over-keyframe at `components/filter-panel.tsx:35-37`, two channels for status at `components/invoice-row.tsx:9-14`, the 40px target at `components/ui/button.tsx:29-30`, and at `app/page.tsx:90-93` a comment that names this axis's tell IDs. Every verdict above was scored on class attributes, path geometry, and counts. The comments are reported as facts about the source; none of them moved a verdict.
