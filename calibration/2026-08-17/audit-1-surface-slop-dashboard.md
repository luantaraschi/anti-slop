# anti-slop surface — `fixtures/slop-dashboard/`

**Verdict** — the stock dashboard with the install left as decoration: `theme.extend` is empty, both primitives in `components/ui/` are byte-for-byte stock and get imported once each against nine hand-rolled copies sitting beside them, and the identical `rounded-2xl border border-gray-200 shadow-lg p-6` string is retyped on ten elements from the page container down to a single button — because there is no theme for any of them to read from.

## The false positive filter, run first

SKILL.md requires evidence of a decision in four places before any Surface tell may fire. All four are empty:

| Place | State |
|---|---|
| `theme.extend` | `tailwind.config.ts:5` — `theme: { extend: {} }` |
| Custom properties under `:root` / `@theme` | `app/globals.css` is four lines, a single `@keyframes slideIn`. No `:root`, no `@theme`, no `--*` declaration anywhere in the tree (verified by pattern across all 12 files) |
| A dedicated tokens file | None exists |
| `components/ui/` differing from stock shadcn | `button.tsx` and `card.tsx` are unmodified stock — 6 variants, 4 sizes, 6 Card exports, no comment, no token wiring |

No door opens. Every Surface tell is eligible; each still has to meet its own Signal.

---

## The ten tells

### A1 — A palette nobody picked · **FIRES** (with a Signal defect, below)

### A2 — The generator gradient · **DECLINES**
No `from-*`, `to-*`, `via-*`, `bg-gradient-*`, or `bg-clip-text` anywhere in the tree.

### A3 — One radius for everything · **FIRES**

### A4 — Elevation without a system · **FIRES**

### A5 — No type scale · **FIRES**

### A6 — Uniform rhythm · **FIRES** (partial Signal, flagged)

### A7 — Decorative icons · **DECLINES**
No `lucide` import in the tree, no `Sparkles`/`Zap`/`Rocket`/`TrendingUp`/`CheckCircle2`, no emoji. The only two icons are load-bearing: the inline refresh glyph at `app/page.tsx:38` is the entire content of its button and carries `aria-label="Refresh"` (`app/page.tsx:37`) — the Fix's own "stands in for a label" case — and `app/icon.svg` is a favicon, an identity mark rather than ornament. StatCard labels, table rows and headings carry no icons at all.

### A8 — Template layout · **DECLINES**
Clause by clause: no hero with a pill badge, an h1, a subtitle and two buttons — `app/page.tsx:34-44` is an h1 plus a toolbar, with no badge and no subtitle. No three-card *feature* grid. The third clause does match: `app/page.tsx:45-49` is a strip of three large numbers. But `Not slop when` covers exactly that match — "The content really is three parallel things, and the numbers really are the product's core information." Revenue, invoice count and overdue count are the core information of an invoices dashboard and are genuinely parallel quantities. The Principle also fails to land: A8 fires when "the same structure shows up regardless of subject," and here the structure does track the subject — invoice statuses, an invoice table, an invoice empty state, no marketing furniture.

### A9 — Generic motion · **FIRES, partially — see the supplied-rule disclosure**

### A10 — Primitives installed and then hand-rolled · **FIRES — this is the root**

---

## A1, clause by clause

The Signal reads: *"`tailwind.config` declares no `theme.extend.colors` and no color custom property appears anywhere, so every color in the tree is a framework default called by its number."*

**Clause 1 — "`tailwind.config` declares no `theme.extend.colors`."** **TRUE.** `tailwind.config.ts:5` is `theme: { extend: {} }`.

**Clause 2 — "no color custom property appears anywhere."** **TRUE.** `app/globals.css` contains only `@keyframes slideIn`. No `:root`, no `@theme`, no `--*` declaration in any of the 12 files.

**Clause 3 — "so every color in the tree is a framework default called by its number."** **FALSE**, on three separate counts:

1. `app/icon.svg:2` is `fill="#111827"` and `app/icon.svg:3-4` are `stroke="#ffffff"`. Raw hex literals, not classes with numbers. (`#111827` happens to *be* gray-900's value — so the one place in this tree where someone typed a color by hand, they hand-copied the default palette.)
2. `app/layout.tsx:8` uses `bg-white` — a framework default called by its *name*, not its number.
3. Most substantially: `components/ui/button.tsx:8,12-20` and `components/ui/card.tsx:12,50` are full of `bg-primary`, `text-primary-foreground`, `bg-destructive`, `border-input`, `bg-background`, `ring-ring`, `ring-offset-background`, `bg-accent`, `bg-secondary`, `bg-card`, `text-card-foreground`, `text-muted-foreground`. Fifteen-plus color classes that are neither framework defaults nor numbered.

**I judge the tell to fire anyway, and clause 3 being false is worth reporting rather than smoothing over.** Clause 3 is written as a *consequence* ("so…"), an inference the author drew from clauses 1 and 2, not as an independent test. Both actual tests hold. But the inference doesn't survive contact with this tree, and the way it fails points at something worse than what A1 describes. Because clause 2 is true — no custom properties exist — every one of those semantic classes in `components/ui/` is **dangling**. `bg-primary` with no `--primary` defined resolves to nothing. The tree isn't merely using the default palette raw; it contains a second, entirely non-functional color vocabulary that renders as blank. A1's Signal has no language for that state, and an auditor reading clause 3 literally could talk themselves out of firing a tell that plainly should fire.

**`Not slop when`** — "the default palette [adopted] as a declared decision, recorded in the theme or in the documentation." The theme records nothing, and the target tree contains no documentation file of any kind. (Scope note: I did not read documentation elsewhere in the repository, per the boundary set for this run.) The exemption does not apply.

One further observation bearing on A1: `app/layout.tsx:8` declares `dark:bg-gray-900` and that is the only `dark:` variant in the entire tree. The dark theme sets a background and no foreground, so `text-gray-500` (nine sites) stays gray-500 against gray-900 — more absence of a picked palette, not a second finding.

---

## Rules I supplied that the tell does not contain

Two, disclosed as instructed.

**On A3.** The Signal says: *"The same `rounded-xl` or `rounded-2xl` on button, input, card, and page-level container. Count the distinct radii in the tree."* The first sentence is met verbatim — button `app/page.tsx:61`, input `app/page.tsx:57`, card `app/page.tsx:50`, page-level container `app/page.tsx:54`, all `rounded-2xl`. But the second sentence instructs a count and **names no threshold**. The tree has four distinct Tailwind radii: `rounded-2xl` (10 sites), `rounded-full` (`components/table.tsx:19`), `rounded-md` (`components/ui/button.tsx:8,24,25`) and `rounded-lg` (`components/ui/card.tsx:12`). To decline on "four is enough" I would have to invent a threshold; to fire I lean on the first sentence, which is explicit. **Rule I supplied:** *radii that appear only inside untouched stock primitives don't count toward the product's radius vocabulary.* The tell's own words are only *"Count the distinct radii in the tree"* — it says nothing about which radii count. My justification is that `rounded-md` and `rounded-lg` are never authored here, and `rounded-full` on an 8px dot is a shape rather than a scale step, leaving exactly one radius in the code anyone wrote.

**On A9.** The Signal names three things: *"`transition-all duration-300` as the default transition, `hover:scale-105` on cards, and no `prefers-reduced-motion` block anywhere."* Only the third is true here. There is no `transition-all` and no `duration-300` in the tree (the only transition is `transition-colors` at `components/ui/button.tsx:8` — stock shadcn, and a *named* property, which is what A9's own Fix asks for). There is no `hover:scale-105`; the hovers are `hover:bg-gray-50` at `app/page.tsx:61,69`, color only. **Rule I supplied:** *one clause of a three-clause Signal is enough to fire.* The tell's own words give no such rule — it lists the three joined by "and" and never says whether that is a conjunction or an illustration. I fire it at low weight because clause 3 is stated as an absolute absence, is verifiably true, and the tree has real motion for it to bite on — `app/globals.css:1-4` defines a `translateY` keyframe applied at `components/filter-panel.tsx:7` with no guard, and a transform animation is precisely what reduced-motion exists to suppress. `Not slop when` is a conjunction ("a declared orchestration **and** reduced-motion handling") and both halves fail. **The two vintage markers A9 leads with are genuinely absent from this tree, and the motion that does exist is competently made** — one named keyframe, 200ms, ease-out, one element. Read strictly as a conjunction, A9 declines.

There is a third, smaller one, on **A6**. The Signal names `p-6`, `gap-6` **and** `space-y-4` "repeated across the whole hierarchy." Two of the three are: `p-6` at 12 product sites and `space-y-4` at 7. But **`gap-6` appears exactly once in the entire tree**, at `app/page.tsx:45` — the other gaps are `gap-3` (`app/page.tsx:36,60`). One of the three tokens the Signal names fails its own "repeated" test. I fire on the Principle, which is fully present: `p-6` sits on `main` (`app/page.tsx:33`), on the flex row nested immediately inside it (`app/page.tsx:34`), on the grid (`:45`), on the card (`:50`), and on the table wrapper inside that card (`components/table.tsx:16`) — five nesting levels at one value, which is precisely "everything equidistant, nothing grouped." **Rule I supplied:** *the Signal's three tokens are illustrative rather than a required set.* The tell's words are only the bare list, with no guidance either way. `Not slop when` ("deliberately tabular or a modular grid") doesn't rescue it: the stat grid at `:45` is modular, but the uniformity at issue is the nesting depth, not the grid.

---

## Findings

**ROOT**

```
A1   Palette nobody picked; shadcn's own tokens dangle
     fixtures/slop-dashboard/tailwind.config.ts:5        fixes A3, A5; unblocks A10

A10  Primitives stock and unused: 2 imports vs 9 hand-rolled
     fixtures/slop-dashboard/components/stat-card.tsx:3  fixes A4, A6, half of A3
```

**A1** — `theme: { extend: {} }`. Nothing in `theme.extend.colors`, no `:root` block, no tokens file. Product colors are gray-200 / gray-400 / gray-500 / gray-50 / gray-900 / red-500 / green-500 / white, all Tailwind defaults. Meanwhile `components/ui/button.tsx:8` and `components/ui/card.tsx:12` reference `bg-primary`, `bg-card`, `ring-ring` and a dozen more custom properties that are defined nowhere. Fixing this is what gives A3's radii and A5's scale somewhere to live.

**A10** — Both halves of the exemption fail.

*Card.* One import (`app/page.tsx:8`, used at `:50`), and even there the primitive's own styling is overridden at the callsite: `<Card className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-4">` replaces the `rounded-lg border … shadow-sm` at `components/ui/card.tsx:12`. Against that: five raw `div`s retyping card classes — `components/stat-card.tsx:3`, `app/page.tsx:54`, `components/table.tsx:16`, `app/invoices/page.tsx:11`, `components/filter-panel.tsx:7`. `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` and `CardFooter` (`components/ui/card.tsx:76-83`) are imported by nothing.

*Button.* One import (`app/page.tsx:7`, used at `:42`), against four raw `<button>`s in the same file — `app/page.tsx:37, 61, 64, 69` — one of them (`:37`) directly adjacent to the sole importer.

The tell anticipates this case by name: *"a `StatCard` that reimplements `<Card>` in raw `div`s leaves the primitives as unused as the install left them."* `components/stat-card.tsx:3` is literally that. Nothing is pruned either: `buttonVariants` declares 6 variants and 4 sizes (`components/ui/button.tsx:10-28`) and only `default`/`default` ever renders, since `app/page.tsx:42` passes no props. No comment records any choice.

*Supporting, flagged as uncertain:* both primitives import `@/lib/utils` (`button.tsx:5`, `card.tsx:3`) and no `lib/` directory exists in the tree. The tree also lacks `package.json` and `tsconfig.json`, so this may be a trimmed distribution rather than a genuinely missing module — I note it as consistent with "installed and never revisited," not as a finding.

*Ordering note:* **A10's fix is blocked by A1.** Routing the hand-rolled buttons through `<Button>` today would render an unstyled control, because `bg-primary` resolves to nothing. That is why `<Button>New invoice</Button>` at `app/page.tsx:42` and the hand-rolled Export CSV button at `:61` do not resemble each other. A1 must land first.

**THEN**

```
A4   shadow-lg + border + rounded stacked on 7 elements
     fixtures/slop-dashboard/components/stat-card.tsx:3

A3   rounded-2xl on button, input, card and page container alike
     fixtures/slop-dashboard/app/page.tsx:57

A6   p-6 at five nesting levels; space-y-4 at seven sites
     fixtures/slop-dashboard/app/page.tsx:33

A5   No scale, no family; font-bold the only weight, 11 sites
     fixtures/slop-dashboard/components/stat-card.tsx:5

A9   Unguarded transform keyframe, no prefers-reduced-motion
     fixtures/slop-dashboard/app/globals.css:1        (partial — see disclosure)
```

**A4** — Both halves of the Signal hold. `shadow-lg` at seven sites: `components/stat-card.tsx:3`, `app/page.tsx:50`, `:54`, `:61`, `components/table.tsx:16`, `app/invoices/page.tsx:11`, `components/filter-panel.tsx:7`. And `border` + `shadow` + `rounded` are stacked on the same element at every one of those seven. Sharpest instance: three adjacent buttons at `app/page.tsx:61,64,69` where only the first carries `shadow-lg`, with no state or hierarchy difference explaining it. `Not slop when` requires shadow reserved for focus or hover; here it is a resting style.

**A3** — `rounded-2xl` at 10 sites covering all four element classes the Signal names. Note that `rounded-2xl` is itself an undeclared Tailwind default, and `theme.extend.borderRadius` is empty, so `Not slop when` ("that choice lives in the theme") cannot apply.

**A6** — Detailed above. The clearest single instance is `p-6` on `<main>` at `app/page.tsx:33` and `p-6` again on the flex row immediately inside it at `:34` — doubled padding at the same value, one element apart.

**A5** — All three clauses hold. Only Tailwind default steps (`text-2xl`, `text-lg`, `text-sm`), with `theme.extend.fontSize` empty. `font-bold` is the sole emphasis across 11 product sites (`app/page.tsx:35,55,61,64,69`, `components/stat-card.tsx:5`, `components/table.tsx:21`, `components/filter-panel.tsx:8`, `app/not-found.tsx:6,10`, `app/invoices/page.tsx:9`) — the `font-medium` and `font-semibold` in the tree occur only inside the untouched stock primitives (`components/ui/button.tsx:8`, `components/ui/card.tsx:38`). No family: no `fontFamily` in the theme, no `next/font` import, no `@font-face`. Symptom worth naming: `text-2xl` does double duty as the page title (`app/page.tsx:35`) and as a stat value (`components/stat-card.tsx:5`), so the h1 and a number carry identical weight.

**A9** — Partial fire, disclosed above. `app/globals.css:1-4` defines a `translateY` keyframe consumed at `components/filter-panel.tsx:7` with no `prefers-reduced-motion` guard anywhere in the tree.

**Nothing was dropped.** The cap was suspended and seven fires would fit under it regardless; all ten tells are accounted for above.

---

## Mold, and where it doesn't fit

**The stock dashboard**, on a 5/5 tell match — molds.md predicts A1, A3, A4, A5, A10 and all five fire. Two caveats the reader should have:

The *Look* only half matches. Stat cards in a grid: yes (`app/page.tsx:45-49`). A table with status badges: partial — `components/table.tsx:19` renders an 8px colored dot, not a badge. **A shadcn sidebar: entirely absent from this tree.**

More importantly, the mold's breaker clause is arguably met. molds.md says the match breaks on *"A domain-specific component, or a theme built from named colors."* No named-color theme exists, but `InvoiceTable` carries a real domain vocabulary — a typed `"overdue" | "paid" | "draft"` union (`app/invoices/page.tsx:3`) and a status color map (`components/table.tsx:1-5`). It is domain-specific in its data and entirely generic in its surface. molds.md offers no way to split that. Note the tension with A10, which explicitly rules that *"a domain name on a file"* earns nothing — but that stricter reading lives in A10 and molds.md does not cross-reference it.

Since molds.md says to use molds "to name what you see, never to decide," the seven findings stand on their tells regardless of how the breaker resolves. The mold name is doing rhetorical work in the verdict, not evidentiary work.
