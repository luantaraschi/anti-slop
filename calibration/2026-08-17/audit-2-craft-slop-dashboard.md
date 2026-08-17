# anti-slop craft — `fixtures/slop-dashboard`

**Scope.** 12 files, all read in full. No `node_modules`, no generated output, nothing excluded. Theme read first per the procedure: `tailwind.config.ts:5` is `theme: { extend: {} }`, and `app/globals.css` holds nothing but a four-line `@keyframes slideIn`. So there is no declared radius scale, no token layer, and no dark palette for any Craft judgment to measure a relationship against — every relationship in this tree is whatever the literal utility class produced.

**Report cap suspended.** Nothing was dropped. 11 of 12 tells fire; 1 declines.

---

**Verdict** — nobody opened the second theme, the second radius, or the second state: one radius value sits at every nesting depth, ten borders are declared for light only under the tree's single `dark:`, eight hover states have nothing behind them, and the status dot carries three meanings on fill color alone.

---

## ROOT

**C10 — One theme was ever opened** · `app/layout.tsx:8` · *fixes the 10 border sites and the 7 text sites below*

`app/layout.tsx:8` is the only `dark:` in the entire tree: `<body className="bg-white dark:bg-gray-900">`. That is the Signal's first half exactly — `dark:` present on the background. Its second half: not one of the ten authored borders declares a dark variant. `app/page.tsx:50, 54, 57, 61, 64, 69`; `app/invoices/page.tsx:11`; `components/stat-card.tsx:3`; `components/table.tsx:16`; `components/filter-panel.tsx:7` — all `border-gray-200`, all light-only. Same for text: `text-gray-500` at `app/page.tsx:51, 57`, `app/invoices/page.tsx:12`, `app/not-found.tsx:7`, `components/stat-card.tsx:4`, `components/table.tsx:13, 20`, and the uncolored `font-bold` headings at `app/page.tsx:35, 55` which inherit black onto `gray-900`.

One note on the Principle, which describes a divider that *disappears* in dark mode. Here the inversion runs the other way: `gray-200` on `gray-900` doesn't vanish, it glares. The Signal is still met verbatim and the underlying fact is identical — the other theme was never opened — but I am reporting the effect as it will actually render rather than as the Principle's example predicts.

Doors: "no dark mode at all" is false (`layout.tsx:8`). "every other border in the tree declares both themes" is false — zero of ten do.

**C1 — A radius that ignores what it wraps** · `app/page.tsx:54` → `app/page.tsx:57` · *fixes all four nested pairs*

`rounded-2xl` (16px) appears at ten sites and at every nesting depth, so every nested pair is same-radius-inside-same-radius. Cleanest citation, involving no component indirection: `app/page.tsx:54` is a plain `<div className="rounded-2xl … p-6">` wrapping the input at `app/page.tsx:57`, `rounded-2xl`. Padding between the layers is `p-6` = 24px; concentric would require the outer at 16 + 24 = **40px**. It is 16. The same div wraps the three buttons at `:61`, `:64`, `:69`, all `rounded-2xl`.

Also: `app/page.tsx:50` (`Card`, `rounded-2xl`, `p-6`) wrapping `components/table.tsx:16` (`rounded-2xl`).

The 24px boundary decides this one, so I want to be exact rather than approximate. `Not slop when` opens on padding that **"exceeds 24px"**; `p-6` is 24px, which does not exceed it, and the Fix independently states its range as **"where that padding is 24px or less."** These nestings sit inside the tell's range on both readings. No rule supplied.

Door two — "every other nested pair in the tree already runs concentric" — is closed by count: concentric pairs in the tree, zero.

Correctly excluded: `components/table.tsx:19`, `size-2 rounded-full` inside `table.tsx:16`. The tell removes it by name — "A pill is not a site on either side of that count: at a radius set by its own height it has no corner."

**C9 — Nothing happens when you press** · `components/ui/button.tsx:12` · *fixes every `Button` instance in one edit*

`active:` does not appear anywhere in the tree. Confirmed by grep across all 12 files: zero occurrences. Eight hover declarations stand alone — `components/ui/button.tsx:12, 14, 16, 18, 19, 20`, and the two authored ones at `app/page.tsx:61` (Export CSV) and `app/page.tsx:69` (Filters), both `hover:bg-gray-50`.

Count as the tell asks: carrying both, 0. Carrying hover only, 8.

Doors: "None of the project's controls has a hover state, and the absence is uniform" is false. "a pressed state is standard equipment on the project's other controls" is false — there is no pressed state anywhere to be standard.

Not counted, to avoid over-firing: `app/page.tsx:37` (refresh) and `app/page.tsx:64` (disabled) declare no hover, so they are not C9 sites.

**C8 — An animation that cannot change its mind** · `app/globals.css:1` + `components/filter-panel.tsx:7` · *fixes C7 in the same edit*

`@keyframes slideIn` at `app/globals.css:1-4`, consumed at `components/filter-panel.tsx:7` as `animate-[slideIn_200ms_ease-out_forwards]`, driven by the `open` prop from `app/page.tsx:21` and toggled by the click handler at `app/page.tsx:68` (`onClick={() => setFiltersOpen((v) => !v)}`). A keyframe block on a panel behind a toggle is the Signal's named case — "a drawer, a panel, a toggle." Double-click Filters and the 200ms timeline restarts from `translateY(8px)` rather than retargeting.

**This is my most important report item, and I flag it under section 4 of the brief.** Door two reads:

> "or **transitions already drive the project's other interactive states**, leaving this keyframe the odd one out."

The tree *does* contain a transition driving an interactive state: `components/ui/button.tsx:8`, `transition-colors`, governing hover color. Read literally, that door opens and C8 declines. To keep it closed I supplied two rules the tell does not contain:

1. *"the other interactive state must be an open-and-close, not a hover color."* C8 says only "other interactive states." It does not scope them.
2. *"stock shadcn boilerplate is not the project's own evidence that someone looked."* Craft's doors say nothing about stock versus chosen. The stock-shadcn carve-out lives in SKILL.md's false positive rule, which belongs to **Surface** — and SKILL.md explicitly says "On the Craft axis the rule takes a different form."

My defense for firing anyway is the door's own tail, "leaving this keyframe **the odd one out**": there is exactly one open-and-close in the whole tree, so the keyframe is not the odd one out of anything, it is the only one. But that is an argument I constructed from the door's phrasing, not a rule the door states. A reader who applies C8 as written to this tree should decline it.

---

## THEN

**C7 — Enter and exit weigh the same** · `components/filter-panel.tsx:6-7`

The entrance animates — 200ms, 8px, `ease-out`, per `app/globals.css:2-3`. The exit does not exist: `components/filter-panel.tsx:6` is `{open && (…)}`, so React unmounts the node and the panel vanishes on the frame.

Rule-supply note, smaller than C8's. The Signal's second limb says **"an exit that is just `display: none` while the entrance animates."** The code is a conditional unmount, not `display: none`. I treated the two as the same defect because they produce the identical rendered result — animated in, instant out — which is what the Principle measures. That is a mapping of React idiom onto a CSS phrasing, not an invented threshold, but the tell's literal words do not name it.

Doors: "No animated enter or exit exists anywhere in the tree" is false (`filter-panel.tsx:7`). "asymmetry is already the habit in the project's other enter/exit pairs" — there are no other pairs; this is the only one in 12 files.

**C3 — Numbers that jump** · `components/stat-card.tsx:5`

`tabular-nums` appears zero times in the tree. `app/page.tsx:23-30` polls `/api/stats` on a 5000ms `setInterval` and pipes the result into `setStats`. Those values land at `app/page.tsx:46-48` and render at `components/stat-card.tsx:5` — `<p className="text-2xl font-bold">{value}</p>`. Three cards, `$48,120` / `128` / `12`, reflowing every five seconds at `text-2xl` where proportional-digit width variance is most visible.

Secondary site, named in the Signal directly ("a numeric table column"): `components/table.tsx:21`, the currency column.

Doors: "No number in the tree updates in place" is false — `app/page.tsx:24`. "the project already applies it somewhere" is false — zero occurrences.

**C12 — Color carrying the meaning alone** · `components/table.tsx:19`

`components/table.tsx:1-5` maps three statuses to three fills — `overdue: bg-red-500`, `paid: bg-green-500`, `draft: bg-gray-400`. `components/table.tsx:19` renders them as a self-closing `<span className={…size-2 rounded-full ${STATUS_COLOR[row.status]}}/>`: no children, no `aria-label`, no `title`. The shape is byte-identical across all three statuses, so shape carries nothing, and the row prints `row.id` (`:20`) and `row.total` (`:21`) but never the status word. Grayscale that screenshot and red-500, green-500 and gray-400 collapse into three mid-greys — the Principle's exact test.

Doors: "The status already ships with text or shape everywhere it appears" is false. "two channels is what the project's other indicators already give the reader" — there are no other status indicators in the tree.

**C11 — Disabled that still looks clickable** · `app/page.tsx:64`

`<button disabled className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-bold">Send reminders</button>`. The attribute is set; nothing visual accompanies it. Set it beside `app/page.tsx:69` (Filters) and the two are identical but for `hover:bg-gray-50` — same border, same weight, same color, no opacity reduction, no `disabled:` variant, and the default cursor. The first Signal limb, met exactly.

Second rule-supply, and it is the same gap as C8. Door two reads:

> "or **the project's other disabled controls keep the two sides in step** and only this control drifted."

`components/ui/button.tsx:8` carries `disabled:pointer-events-none disabled:opacity-50` — correct handling, present in the tree, and the author had `Button` imported at `app/page.tsx:7` and used it at `app/page.tsx:42`. To keep the door closed I supplied: *"a declared capability is not an instance"* (no `Button` is ever rendered disabled, so there are no "other disabled controls" — `app/page.tsx:64` is the only element in 12 files carrying the attribute), and again *"stock shadcn boilerplate is not the project looking."* Neither qualifier appears in C11. The instance-versus-capability reading has support in the door's plural noun, "other disabled controls"; the stock-shadcn one has none.

Second Signal limb — "a reduced opacity applied with no `disabled` attribute behind it" — never matches: the tree's only `opacity-` is `components/ui/button.tsx:8`, correctly gated behind `disabled:`.

**C5 — A target the size of the drawing** · `app/page.tsx:37`

`<button className="size-5" aria-label="Refresh">` — 20px × 20px declared, no padding, no pseudo-element, nothing extending it. The Principle's literal example: "A 20px icon with no extension misses the finger."

Correctly excluded by the tell's own carve-outs, so this fires on one site and not five: `app/page.tsx:61, 64, 69` are text-labelled with `px-4 py-2` — "A control whose hit area is set by a text label and its padding is not a site." `components/ui/button.tsx:24`, the `sm` variant at `h-9` (36px), is never instantiated, and would in any case be text-plus-padding and short in one dimension only — "A control short in one dimension and generous in the other is a real problem and a different one; this tell does not carry it." `components/table.tsx:19` is a non-interactive span.

Doors: "No control in the tree is smaller than 40px" is false. "extending the target is the pattern among the project's small controls" — `app/page.tsx:37` is the only small control, so no pattern exists to fall outside of.

**C2 — Centered by the box, not by the eye** · `app/page.tsx:37-40` — *fires, with a stated caveat*

The refresh glyph at `app/page.tsx:39` is asymmetric and sits in a control at `app/page.tsx:37` with no compensating offset; the `size-5` svg fills the `size-5` button edge to edge. Plotting the path confirms the ink is genuinely off-center in its own box: the ring is centered at (10,10) with r=7, spanning y 3→17, but the arrowhead (`v3l4-4-4-4v3Z`) runs from (10,8) to (14,4) to (10,0), pulling the tip to y=0. Total ink box is y 0→17 in a 20-high viewBox, so the glyph's optical mass sits at y≈8.5 against a box center of 10 — roughly **1.5px high**, uncorrected, in a `flex items-center` row (`app/page.tsx:36`) next to a 40px-tall Button. The Fix's second half applies directly: "correct the SVG itself so the component never has to compensate."

Doors: "No asymmetric icon sits inside a control anywhere in the tree" is factually false. "compensating for the shape is already the norm across the project's controls" — this is the only icon-in-control in 12 files, so no norm can exist either way.

**Caveat, per section 4.** I fired this on the literal Signal — "a triangular or **otherwise asymmetric** icon centered by its bounding box with no offset" — because *declining* is what would have required me to supply a rule, not firing. To decline I would have had to invent "radially-balanced asymmetry doesn't count, only directional asymmetry like a play triangle does," and C2 contains no such distinction. But I want to name what that exposes: read literally, "otherwise asymmetric" covers nearly every icon ever drawn, and C2 supplies **no magnitude threshold** — nothing separates a play triangle's ~10% optical offset from this glyph's 1.5px. A tell that fires on every icon in every tree is not discriminating. Ranked low here for that reason.

**C4 — A heading that leaves a word behind** · `app/not-found.tsx:7` — *fires on its text-block limb only*

The heading limb never matched anywhere: every heading in the tree is at or under the three-word floor — `app/page.tsx:35` "Dashboard", `app/page.tsx:55` "Invoices", `app/invoices/page.tsx:9` "Invoices", `components/filter-panel.tsx:8` "Filters", and `app/not-found.tsx:6` "Page not found" at exactly three. Per the tell, "A heading of three words or fewer is not a site." So no heading finding exists, and I am not reporting one.

The text-block limb matches once. `app/not-found.tsx:7-9` is a `<p>` carrying "That address is not part of this workspace." — one complete sentence in a paragraph, which is the tell's own definition of a short text block. No `text-pretty`; grep confirms zero occurrences tree-wide. Everything else that looked like a candidate is excluded as a fragment or label: `app/page.tsx:51` "Recent invoices", `app/invoices/page.tsx:12` "All invoices", `components/table.tsx:13` "No items found", `components/stat-card.tsx:4` `{label}`, `app/not-found.tsx:10-12` "Back to the dashboard".

Doors: door one requires "no heading of four words or more **and** no short text block" — the second half fails. Door two is a count — "among the sites of the same kind as the one that failed, more carry the property than miss it" — and it is 0 carrying against 1 missing.

**Calibration note.** This fire is structurally guaranteed rather than earned. With exactly one site of a kind, the count can only ever be 0-vs-1, so C4 fires on *any* tree containing a single short text block, no matter how carefully written. The tell's own worked example assumes a population ("five treated headings against one untreated is an oversight, and three against three is the pattern") but sets no minimum population for the count to mean anything. Lowest delivery of the eleven; listed because the cap is suspended and it is a real instance.

---

## DECLINES

**C6 — An image with no edge** — no failing instance exists.

There is no content `<img>` and no `next/image` import anywhere in the 12 files; grep confirms zero for both. The only image asset is `app/icon.svg`, which is a Next.js app-icon convention file, not an `<img>` rendered into the tree.

Per the brief's distinction, I am reporting this as *the Signal never matching*, not as an exemption. Worth noting that C6's first door — "No content image appears in the tree, so the condition never arises" — is worded as precisely that never-arises condition, so here the two categories coincide rather than conflict. No exemption was granted; there was simply nothing to score.

---

## Coverage note

No findings were dropped. 11 tells fire, 1 declines for want of a site.

Three items outside this axis, flagged only so they aren't mistaken for oversights on my part: `components/table.tsx:17` maps rows without a `key` prop; `components/ui/button.tsx:5` and `components/ui/card.tsx:3` both import `@/lib/utils`, which does not exist in the tree. SKILL.md puts console errors out of scope and neither is one of the twelve Craft tells, so neither is counted above.

## The gap, consolidated

Three of the eleven fires depended on a rule I supplied rather than one the tell states, and two of them are the *same* missing rule:

- **C8 and C11** both have a `Not slop when` door that a piece of untouched stock shadcn opens — `transition-colors` and `disabled:opacity-50`, both at `components/ui/button.tsx:8`. Craft's doors are framed as evidence "someone looked," but they contain no clause distinguishing code the project chose from code the scaffold installed. SKILL.md has exactly that clause — "a `components/ui/` that differs from stock shadcn" — and assigns it to Surface, then says Craft's rule "takes a different form." Craft's different form never picks the clause back up. Applied as written, both tells decline on this tree.
- **C2** contains no magnitude threshold for "otherwise asymmetric," so it fires on any icon that isn't mirror-symmetric.
- **C4**'s count-based door cannot function on a population of one, and the tell sets no minimum.
