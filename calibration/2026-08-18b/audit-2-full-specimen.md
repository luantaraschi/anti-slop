# anti-slop — full audit, all five axes

**Subject** `specimen/` — `index.html`, `style.css`, `mark.svg`, `inventory.md`
**Date** 2026-08-18
**Invocation** `anti-slop` (Surface, Craft, States, Words, Finish — 49 tells)

## Stack, and what I mapped onto what

Plain HTML and CSS. No build step, no framework, no component library, no
JavaScript of any kind. Four files, one route.

Translations made, so a reader can weigh a verdict reached through them:

| Tell's example | What I audited instead |
|---|---|
| `theme.extend` / `globals.css` / a tokens file | the `:root` block at `style.css:26-195` |
| `rounded-2xl` on everything | `--radius-card` and `--radius-control`, counted as distinct declared radii |
| `text-gray-500` | a neutral with no name — none found; every colour is a named custom property |
| `transition-all` | `transition: all` in a stylesheet (the tell already names this form) |
| `dark:` variant / `prefers-color-scheme` block | searched for both plus `[data-theme]`; none present |
| `sm:` `md:` `lg:` | `@media (min-width:)` / `(max-width:)` queries |
| a query hook's error field | a `fetch`/`XHR` in any script — no script exists |
| W2's "the toast reads…" | the destination a link actually lands on |
| W5's "the audience is developers and the webhook is literally the object" | the audience is bookkeepers and a bank-statement descriptor is literally the line |

**Declined for not surviving the crossing:** A10. There is no component library,
no `components/ui/`, no partials, nothing installed. Per the skill's own
instruction, it is named rather than stretched.

**Cap.** The skill caps a full invocation at ten findings. The caller lifted the
cap. Thirteen findings are listed; none was dropped.

---

## Verdict

Forty-seven of the catalog's forty-nine tells decline, and what is actually
wrong with this page lives in three places the catalog does not reach — a
call-to-action pointing at an address the page's own canonical says it does not
occupy, a ledger table pinned open by two `nowrap` columns that cannot fit a
phone, and a set of recorded reasons that have quietly drifted from the code
they annotate.

---

## Findings

| id | finding | where | fixes |
|---|---|---|---|
| — | The page's only button points at a URL the page says it isn't at | index.html:43 | |
| — | The ledger table cannot fit a phone and has nowhere to scroll | style.css:416 | |
| — | The card's negative margin equals the padding it was meant to escape | style.css:373 | |
| — | The focus ring fails the contrast floor this file itself invokes | style.css:349 | |
| — | Two footer links wear an underline nobody can see | style.css:539 | |
| W2 | The button's verb does not survive the click | index.html:43 | |
| W6 | A trust claim shaped exactly like the tell's own example, aimed at the wrong reader | index.html:94 | |
| — | The warmth is spent in three places, recorded as exactly two | style.css:349 | |
| — | The display face sets three lines, recorded as setting one | style.css:82 | |
| — | The literal inventory names a value that isn't there and omits four that are | style.css:586 | |
| — | The 5fr/6fr ratio is justified by a wrap that `nowrap` already prevents | style.css:298 | |
| — | No `og:image`, so every pasted link becomes a bare card | index.html:15 | |
| — | The mark's own comment counts four shapes and draws three | mark.svg:2 | |

Only two of these come from a tell. The other eleven are things I had to bring
rules for; section 3 says which rules, and section 2 says how I checked.

### 1 — The page's only button points at a URL the page says it isn't at

`index.html:43` — `<a class="cta" href="/specimen/#sources">`

That leading slash makes the link root-relative. The canonical two lines further
up (`index.html:12`) declares the page lives at
`https://luantaraschi.github.io/anti-slop/specimen/`. A root-relative
`/specimen/` under that host resolves to
`https://luantaraschi.github.io/specimen/#sources` — a path that does not exist.
The only call to action on the page is a 404 on the address the page publishes
as its own.

It also breaks over `file://` (resolving to `file:///C:/specimen/`). It works in
exactly one arrangement: a dev server rooted at the repository root, which is
almost certainly where it was tested.

The fragment itself is fine — `id="sources"` exists at `index.html:89`. The fix
is deleting four characters: `href="#sources"`.

### 2 — The ledger table cannot fit a phone and has nowhere to scroll

`style.css:416` (`.amount { white-space: nowrap }`) and `style.css:424`
(`.party { white-space: nowrap }`)

Two of the ledger's three columns are forbidden to wrap. The table is
`width: 100%` inside `.ledger`, which has `border-radius`, a shadow, and no
`overflow` handling at all. Nothing relaxes either `nowrap` at any width — the
only `max-width` query on the page (`style.css:239`) changes `.page`'s inline
padding and nothing else.

A table cannot render narrower than its min-content width, so it overflows its
container instead. The arithmetic, at a 320px phone:

- available inside the card = 320 − 2×24.8 (page padding) − 2×24.8 (card padding) = **220.8px**
- `TRF OURIVESARIA LUME` at 12.5px, unwrappable ≈ 130–155px
- `11,000.00` unwrappable + its 24.8px inline padding ≈ 85px
- the verdict column's own longest unbreakable token (`12,190.00`) ≈ 62px
- min-content total ≈ **277–302px**

So the rows spill past the rounded edge of the card and the whole page scrolls
sideways, on the width most readers will open it at. It is still tight at 375px
(275.8px available) and only comfortably clears somewhere around 420px.

The comment at `style.css:420-422` — "the verdict takes what is left and wraps" —
describes the wide case. At a phone width there is nothing left for it to take.

This is precisely what C15's Principle warns about ("does not degrade, it
overflows") while C15's Signal declines, because a breakpoint does exist. See
section 3.

### 3 — The card's negative margin equals the padding it was meant to escape

`style.css:373` — `margin-bottom: calc(var(--s-section) * -1)`
`style.css:289` — `.hero { padding-block: var(--s-section) }`

The two are the same magnitude. `.hero-grid` is a grid with `align-items: start`,
so track sizing uses each item's margin box: the ledger contributes
`height − s-section` to the row, and its border box therefore overflows the row's
bottom by exactly `s-section`. The hero then adds `s-section` of padding below
that row. The card's bottom edge lands **exactly on** the hero's bottom edge.

It never enters the paper. In the other case — where `.hero-text` is the taller
item — the negative margin has no visible effect at all and the card sits wholly
inside the hero. Neither case produces a crossing. For the card to cross, the
negative margin would have to *exceed* the hero's bottom padding.

Three recorded decisions rest on a crossing that the numbers do not produce:

- `style.css:362-366` — "the only element that crosses a boundary: it begins
  inside the hero and ends on the paper below it"
- `style.css:172-180` — the whole justification for having one elevation level
  ("the only thing on this page that sits above two surfaces at once"), and the
  accepted cost beneath it ("the shadow is drawn for the light ground it spends
  **most of its area** on"). With the card flush, the only part of the shadow on
  chalk is the ≈20px band the second layer throws below the bottom edge
  (`offset 12 + spread −8 + blur/2 16`). Overwhelmingly the shadow's area is on
  the dark hero — the reverse of what is written.
- `style.css:458` — "The section that follows the hero has to clear the card
  hanging into it." Nothing hangs into it, so `.after-ledger`'s `s-section` of
  top padding is an unexplained extra step rather than a clearance.

This is the root of the three. Fixing the geometry (or the three records)
settles all of them. Note that the *effect* is not ugly — a card flush with a
band boundary reads fine. What is wrong is that the page's most-explained
decision explains something that isn't happening.

### 4 — The focus ring fails the contrast floor this file itself invokes

`style.css:347-351` — `.cta:focus-visible, a:focus-visible { outline: 2px solid var(--signal) }`

`a:focus-visible` is unqualified, so it reaches every anchor on the page,
including the two in the footer, which sit on `--chalk`. `--signal` on `--chalk`
is **2.955:1**. WCAG 1.4.11 asks 3:1 of a focus indicator.

What makes this a finding rather than a nitpick is that the file already knows
both halves. `style.css:38` records `signal` at 2.96:1 on chalk as the reason it
could not be used on the short figure, and `style.css:49-52` invokes 1.4.11 and
its 3:1 floor by name when accepting `--rule`'s cost. The standard is applied to
the divider and not to the ring painted in the same colour on the same ground.

The CTA's own ring is fine — `outline-offset: 3px` puts it on the hero gradient,
where `--signal` reads 4.63:1 on dusk and 5.46:1 on ink. It is the footer links
that fail. `--signal-mark` on chalk is 4.67:1 and would clear it.

### 5 — Two footer links wear an underline nobody can see

`style.css:537-542`

```
.site-footer a { color: inherit; text-decoration-color: var(--rule); }
```

`.site-footer` sets `color: var(--ink-soft)`, so `color: inherit` makes the link
text identical to the paragraph directly above it. The only thing separating a
link from prose is the underline, and the underline is `--rule` at **1.22:1** on
chalk — below the threshold at which most readers can see a hairline at all.
Until hover, the two links look like a second line of the address.

Hover is the cure and hover does not exist on a touchscreen. `:active` is
declared (`style.css:545`) but only fires *after* the tap.

The accepted-cost note at `style.css:49-53` reasons carefully about `--rule`, and
its argument is specifically about a row divider: "It divides rows whose content
is fully legible without it." A link underline is a different job — it is not
dividing legible content, it is the only signal that the text is interactive —
and the note does not cover it.

### 6 — W2, translated: the button's verb does not survive the click

`index.html:43` reads **Reconcile your first month**. It lands on
`index.html:89`, a section headed **Where the numbers come from**
(`index.html:91`), which explains data sources. Nothing on the page reconciles
anything; there is no form, no signup, no account, no next step.

W2's Signal is written for a button and its toast. I translated the toast to
"the destination the link actually lands on", because the failure is identical:
the interface's vocabulary is signage, and the sign changes between the press
and the arrival. The verb *reconcile* appears once, on the button, and never
again.

This compounds with finding 1 — the same anchor is both mislabelled and
misaddressed.

### 7 — W6: a trust claim shaped exactly like the tell's own example, aimed at the wrong reader

`index.html:93-95` — "Ledgerline connects to the bank over the same open-banking
feed **your accountant** already uses"

Two problems in one clause, and the second is the harder one.

**The claim.** W6's Signal names "Built on infrastructure your team already
trusts" as its worked example. "The same open-banking feed your accountant
already uses" is the same construction — *X your [person] already [trusts/uses]*
— with nothing behind it. No standard is named (PSD2, Open Banking UK), no
provider, no number. W6's exemption asks that the voice be openly promotional
*and* the claim be backed by a verifiable fact; the voice here is the opposite of
promotional and the claim is unbacked, so neither half of the exemption opens.
This is the weakest finding in the report, and I am reporting it rather than
softening it: by the letter of the tell, it fires.

**The reader.** The page's audience is fixed everywhere else: "for small
accounting firms" (`index.html:7`), "your firm sent" (:38), "what you billed"
(:40), "If your firm is past it" (:141). On this one line the reader suddenly
*has* an accountant, which makes them a business owner rather than an accounting
firm. The page addresses two different people, one of them once.

`inventory.md:41` says "**an** accountant already uses" — third person, and it
reads correctly. The page changed it to "your". This is drift from the source,
not a flaw in the source, and it puts a hole in the root claim at `style.css:4-5`
("Every line of copy draws on it, and nothing on this page is invented").

### 8 — The warmth is spent in three places, recorded as exactly two

`style.css:12-13` — "The warmth is spent in exactly two places."
`style.css:427` — "The second and last place the warmth is spent"

Counted by grepping every `var(--signal)` and `var(--signal-mark)` in the file:

| line | site |
|---|---|
| 332 | `.cta` background |
| 344 | `.cta:hover, .cta:active` background |
| **349** | **`.cta:focus-visible, a:focus-visible` outline** |
| 431 | `.ledger .short` colour |

Lines 332 and 344 are one place (the button). Line 431 is the second (the short
figure). Line 349 is a third, and it is not a variant of either: the selector is
unqualified `a:focus-visible`, so the accent paints on the two footer links,
which live in neither named place. `mark.svg:6` is arguably a fourth, though it
is the same semantic mark and the record could reasonably be read as covering it.

The record does not need to be wrong for the count to be — it needs to say
three, or the selector needs scoping. Related to finding 4: the third site is
the one that fails contrast.

### 9 — The display face sets three lines, recorded as setting one

`style.css:74-76` — "A high-contrast display serif sets **the one line** the page
is remembered by"
`style.css:82-83` — "the display face is loaded at one weight, because it sets
**exactly one line** and a second weight would be a download for **a size that
renders once**"
`style.css:99-100` — "the page shows four kinds of text: **the one line** it is
remembered by, a section heading, prose, and the label"

`--face-display` is consumed by two rules: `.display` (`style.css:262`) and
`.heading` (`style.css:270`). In the markup, `.display` appears **twice** —
`index.html:38` (the h1) and `index.html:134` ("Two hundred invoices a month or
fewer.") — and `.heading` once (`index.html:91`). So the serif sets three lines,
and the `--text-display` size renders twice, not once.

The second `.display` *is* justified, at `style.css:508-510`: "A product that
states its ceiling in the same type as its promise is making a claim about
itself that a footnote would not make." That is a good reason. It just sits 400
lines away from three comments that say the opposite, and none of them was
updated when it was added.

The conclusion (one loaded weight) still holds. The stated reason for it — "a
size that renders once" — does not.

### 10 — The literal inventory names a value that isn't there and omits four that are

`style.css:574-591`, which opens "Literals outside the token block, counted
rather than estimated. Re-run the count before changing this file."

- **`55%` does not exist.** The inventory lists "55%, the ledger's verdict
  column" (`:586`). Grepping every `%` in the file returns 65/70 (inside the
  token block), 100 (`:215`, `:389`), 50 (`:569`, `:570`), and the 55 in the
  comment itself. There is no `.verdict` rule anywhere in the stylesheet. Worse,
  the entry contradicts `style.css:420-422` in the same file — "**Neither carries
  a width**: the table distributes what the nowrap columns do not claim" — which
  is the true statement.
- **`1090px` does not exist either.** `style.css:237` explains "1090px is `--page`
  rounded up" as though naming a literal in the code. The only `1090` in the file
  is that comment. (The arithmetic is right: `--page` = 68.1rem = 1089.6px. The
  value just isn't used anywhere; the media query at `:239` is 760px.)
- **Four real percentages are unlisted:** `100%` at `:215` and `:389`, `50%` at
  `:569` and `:570`.

Everything else in the inventory is exactly right, and I checked all of it —
see section 2. The `1px, five times` count in particular is correct to the
instance. Which is what makes the two phantom entries worth reporting: this
inventory is trustworthy enough that a reader will trust it, and two of its rows
are describing a file that no longer exists.

### 11 — The 5fr/6fr ratio is justified by a wrap that `nowrap` already prevents

`style.css:298-302`:

> at an even split its party names wrapped to three lines each. Five to six is
> the ratio at which the longest party name — TRF OURIVESARIA LUME — holds one
> line.

`style.css:423-425` sets `.ledger .party { white-space: nowrap }`. A party name
cannot wrap at *any* ratio. The recorded reason for the column split describes a
behaviour the code independently forbids.

The ratio may still be the right number — with `nowrap`, a too-narrow party
column forces overflow rather than wrapping, so something still has to give — but
the reason written down is not the reason that applies.

The drift has a fingerprint: `.ledger .party` is declared **twice**, at
`style.css:406-408` (colour) and `style.css:423-425` (`white-space`), with
`.amount` between them. The second block was added later and the ratio comment
was not revisited.

### 12 — No `og:image`, so every pasted link becomes a bare card

`index.html:15-22` carries `og:type`, `og:url`, `og:title`, `og:description` and
`twitter:card`. There is no `og:image`.

F4's Signal is a conjunction — "`og:title`, `og:description`, and `og:image` are
missing" — so the tell declines with two of three present. The consequence
survives the decline: `twitter:card=summary` with no image renders as text with
an empty thumbnail slot, and F4's Principle ("Every link pasted into a chat
becomes a card") is the whole reason the tag exists. A 1200×630 image would
close it. See section 3.

### 13 — The mark's own comment counts four shapes and draws three

`mark.svg:2-4`:

> Three ruled lines **and one** that does not reach the margin: the short figure
> the product exists to find. **Three shapes**, because at 16px the shortfall has
> to read as a length difference rather than a colour one.

Three plus one is four. The next sentence says three, and the file draws three
`<rect>` elements. The intended reading is "three ruled lines, one of which does
not reach the margin". As written the first sentence contradicts both the second
sentence and the code.

Trivial in isolation. Listed because it is the same failure as findings 8, 9 and
10 at the smallest possible scale, which is what makes the pattern legible.

---

# Section 1 — Every decline, and which of three states it is in

47 of 49 tells declined. Two fired (W2, W6). The three states, per the
instruction and per `craft.md`'s own preamble:

- **(a) the Signal never matched** — nothing to excuse, nothing failed
- **(b) a clause closed on a real thing the page does and forgave it** — the only
  true exemptions
- **(c) the condition arose and the Fix was already applied** — correct work, not
  an exemption

**Totals: (a) 27 · (b) 4 · (c) 16 · fired 2.**

Only four exemptions exist on this page: **C4, W5, F8, F10.**

## Surface

| tell | state | why |
|---|---|---|
| A1 | **(c)** | Six named colours declared at `style.css:54-59`, every name from the subject, with derivation and two accepted costs recorded at `:27-53`. The Fix ("Name four to six colors in the theme, derived from the subject") is applied to the letter. |
| A2 | **(a)** | The gradient (`style.css:287`) runs `--dusk` (hue 260.9°) into `--ink` (hue 257.1°) — a value journey inside one hue, not purple→blue and not through pink. The third alternative ("two hues that appear nowhere else") also fails: `--ink` paints the body, the CTA text, the ledger and the shadow. The exemption ("built from the theme's own colors") would also have opened, but the Signal never got there. |
| A3 | **(c)** | Two distinct radii, `--radius-card: 6px` and `--radius-control: 4px` (`style.css:167-168`), each tied to the size of what it wraps and each used once. Fix applied. *Threshold supplied — see section 3.* |
| A4 | **(a)** | Both clauses fail. One shadow token, used on exactly one surface (`style.css:371`); and `.ledger` carries radius + shadow with **no border**, so two devices, not three. |
| A5 | **(c)** | Four steps declared with derivation (`style.css:113-116`), two families chosen and named (`:91-93`), two weights (`:94-95`). Fix applied. |
| A6 | **(a)** | The Signal needs one value repeated *down the nesting*. Traced: `.page` padding `s-block` → `section` padding `s-block` → `.ledger` padding `s-line` → `.ledger td` padding `s-label`. The chain breaks at the card. |
| A7 | **(a)** | No icon anywhere in the body — no `<svg>`, no `<img>`, no icon font, no emoji. `mark.svg` is referenced only as `rel="icon"` and is the product's mark, not signage beside text. |
| A8 | **(a)** | No pill badge (`.label` is tracked uppercase text with no box, border or radius), one button not two, five sources in a `<dl>` not a three-card grid, and no stats strip at all. |
| A9 | **(a)** | Both transitions name their property — `background-color` (`:337`) and `text-decoration-color` (`:541`). No `transition: all`, no hover transform or scale anywhere. |
| A10 | **(a)** | **Declined and named, not stretched.** No component library, no `components/ui/`, no partials, no build step. The skill's own text releases this tell for a project with no primitives. |
| A11 | **(a)** | The Signal requires transitions "whose travelled distance differs by an order of magnitude". Both transitions are colour changes; travelled distance is zero for both. The exemption's second door ("every animated change really is the same magnitude") would also have opened. |
| A12 | **(a)** | Grepped: no `z-index` anywhere in the file. The Signal is explicit that absence of a scale is not the finding — "What fires is arbitrary values existing *and* nothing naming them." No arbitrary values exist. |

## Craft

| tell | state | why |
|---|---|---|
| C1 | **(a)** | No nested rounded pair exists. `.ledger` (6px) contains a `<table>`, `<td>`s and a `<footer>`, none with a radius; `.cta` (4px) sits in `.hero-text`, which has none. Recorded independently at `style.css:158-163`, and the record is true. |
| C2 | **(a)** | No icon sits inside any control. There are three interactive elements on the page and all three are text-only. |
| C3 | **(c)** | The condition arose — the ledger has a numeric column — and the Fix is applied: `font-variant-numeric: tabular-nums` at `style.css:414`, scoped to `.amount` only, which is exactly what the Fix asks ("where the value changes, not everywhere"). |
| **C4** | **(b) EXEMPTION** | **A real site failed.** `.ledger footer` (`style.css:435-442`, content at `index.html:82`) is a two-sentence short text block with no `text-wrap: pretty`. `text-wrap` is an inherited property, and the `p { text-wrap: pretty }` rule at `:254` does not reach a `<footer>` whose ancestors (`.ledger` → `.hero-grid` → `.hero` → `body`) never declare it. **Forgiving clause:** "among the sites of the same kind as the one that failed, more carry the property than miss it. That is a count, not an impression." Counted: 8 `<p>` elements + 5 `.source dd` (`:503`) + 12 `.ledger td` (`:399`) carry it; 1 misses. 25 to 1 is an oversight, not the pattern. |
| C5 | **(c)** | Both classes of small control are handled. `.site-footer nav a::after` (`style.css:564-572`) extends each footer link to 40px with a pseudo-element that does not change its line box — the Fix, verbatim. `.cta` computes to 49.6px tall (12.4 + 24.8 line box + 12.4). Nothing under 40px remains. |
| C6 | **(a)** | No content `<img>` in the tree. |
| C7 | **(a)** | Nothing enters or leaves. The two transitions are hover colour changes on persistent elements; no element is added, removed, mounted or unmounted, because there is no script. |
| C8 | **(c)** | The condition arose — there are interactive state changes with motion — and the Fix is applied: both are transitions, and `@keyframes` appears nowhere in the file. Recorded at `style.css:186-189`, and the record is true. |
| C9 | **(c)** | Counted: 2 elements carry a hover state, 2 carry `:active` (`style.css:342-343`, `:544-545`). No element has hover without a pressed state. The reasoning at `:340-341` names the exact Principle. |
| C10 | **(a)** | No second theme. No `prefers-color-scheme`, no `dark:`, no `[data-theme]`. The condition never arises. |
| C11 | **(a)** | No `disabled` attribute anywhere, and no `opacity:` declaration anywhere (grepped; the only alphas are inside `--lift`, which are shadow opacities, not element ones). |
| C12 | **(c)** | The condition arose — one figure is singled out — and the Fix is applied three times over: colour (`--signal-mark`), weight (600), and the word "short" in the text (`style.css:430-433`, `index.html:65`). `mark.svg` repeats it as a length difference, and says so in its own comment. |
| C13 | **(c)** | `@media (prefers-reduced-motion: reduce)` at `style.css:218-227`, covering `animation-duration`, `animation-iteration-count`, `transition-duration` and `scroll-behavior`. Fix applied. |
| C14 | **(a)** | Neither branch arises: no async boundary (no script), and no content image. *A third case the Signal does not carry — the webfont swap — is in section 3.* |
| C15 | **(c)** | One breakpoint, 760px, used four times, chosen because the content breaks there and recorded as such at `style.css:237-238`. The Fix says "One breakpoint chosen because the content breaks there beats five taken from the framework"; this is that, exactly. **The Signal declines while the Principle is violated — see finding 2 and section 3.** |

## States

| tell | state | why |
|---|---|---|
| S1 | **(a)** | No script of any kind. Nothing in the tree performs a request. |
| S2 | **(a)** | No script, no component state. The single value that names the view — the `#sources` fragment — is already in the address, written by a link, which gives a history entry. Nothing is left out. |
| S3 | **(a)** | No mutation, no form, no destructive action, no handler. |

Note: I did **not** exempt this axis on the grounds that the page is a specimen.
`states.md` is explicit — "A calibration corpus is read as the shipped product it
imitates" — and I read it that way. All three decline because there is no
JavaScript, not because of what the page says about itself.

## Words

| tell | state | why |
|---|---|---|
| W1 | **(a)** | "Reconcile your first month" and "This page is a specimen — what it is for" are neither catalog labels nor generic verbs. No "Get Started", "Learn More", "Submit" or "Click here" anywhere. *(The CTA has a different problem — W2.)* |
| **W2** | **FIRED** | See finding 6. |
| W3 | **(a)** | No empty state exists. |
| W4 | **(a)** | No error copy exists. |
| **W5** | **(b) EXEMPTION** | **A real site fired the Signal.** `index.html:69` reads "SEPA FEE" and three rows read "TRF …" — machine vocabulary, printed unglossed, exactly what W5's Signal describes. **Forgiving clause,** translated: "The audience is developers and the webhook is literally the object they're manipulating" → the audience is bookkeepers, and `TRF` / `SEPA FEE` is literally the string their own bank feed prints. Glossing it into plain English would make the demonstration *less* recognisable to its reader, which inverts the Principle. `style.css:6-8` names the same test independently ("A line passes if a bookkeeper could check it against their own week"). |
| **W6** | **FIRED** | See finding 7. |
| W7 | **(a)** | Counted every repeatable group: 5 sources, 4 ledger rows, 2 sections in `<main>`, 2 footer links, 2 paragraphs in the limit block, 3 rects in the favicon. No three recurring across sections; the counts differ everywhere. |

## Finish

| tell | state | why |
|---|---|---|
| F1 | **(c)** | `<html lang="en">` at `index.html:2`. *The Fix's second half — declaring `lang` where the language changes — is discussed in section 3, with the WCAG caveat that makes it arguable.* |
| F2 | **(c)** | One route, one title, product-specific, 62 characters: "Ledgerline — invoice reconciliation for small accounting firms". No framework default survives. |
| F3 | **(c)** | A written description is present at `index.html:8-11`. *Its length exceeds the Fix's range — section 3.* |
| F4 | **(a)** | The Signal is a conjunction: "`og:title`, `og:description`, and `og:image` **are missing**." Two of the three are present (`index.html:17`, `:19`). Signal never matched. *The missing `og:image` is finding 12, reported under a supplied rule.* |
| F5 | **(c)** | `mark.svg`, custom, drawn for the subject, with its own recorded reasoning. Not a framework default and not absent. |
| F6 | **(c)** | Exactly one `<h1>` (`index.html:38`), matching the subject of the `<title>`. Two `<h2>`s below it, correctly nested. |
| F7 | **(a)** | No content `<img>` in the tree, so the condition never arises. |
| **F8** | **(b) EXEMPTION** | **The Signal matched:** no catch-all route, no `not-found`, nothing configurable at host level from within this directory. **Forgiving clause:** "The application has no routing at all and is served from a single path." One `index.html`, no router, no second route. |
| F9 | **(c)** | `<link rel="canonical">` at `index.html:12`, absolute. *Whether it resolves is section 4 — but see finding 1, where the CTA disagrees with it.* |
| **F10** | **(b) EXEMPTION** | **The Signal matched** for the directory I was scoped to: no `sitemap.xml`, no `robots.txt` in `specimen/`. **Forgiving clause:** "the site has fewer than ten pages, all reachable from navigation." One page. *Whether the repository root carries them is outside my scope — section 4.* |
| F11 | **(a)** | No JavaScript in the tree, so no `.map(` and no render. |
| F12 | **(a)** | Grepped for `lorem`, `TODO`, `FIXME`, `Coming soon`, `Your Company`, `John Doe`, `example.com`, `href="#"`, `placeholder`, `xxx`. Zero hits. The fictional company is not a surviving placeholder: it is disclosed on the page itself (`index.html:10`, `:155`) and in `inventory.md:8`. |

---

# Section 2 — Recorded decisions in `style.css` that are not true of the code they annotate

The instruction: check the arithmetic, check the counts, check that what a
comment describes still exists, and state the method for each check.

I checked every recorded claim in the file. Below, everything I verified as
**true** first (because the ratio is the finding), then the seven that are not.

## Verified true — 21 claims

### Contrast — all six pure-hex claims exact

**Method.** Parsed each hex to 8-bit RGB, converted each channel with the sRGB
inverse transfer function (`c/12.92` below 0.04045, else `((c+0.055)/1.055)^2.4`),
computed relative luminance `0.2126R + 0.7152G + 0.0722B`, and applied
`(L_hi + 0.05) / (L_lo + 0.05)`.

| claim | line | recorded | computed |
|---|---|---|---|
| `ink` on `chalk` | 35 | 16.14 | 16.1371 ✓ |
| `chalk` on `dusk` | 35 | 13.68 | 13.6764 ✓ |
| `ink` on `signal` | 36 | 5.46 | 5.4602 ✓ |
| `signal` on `chalk` | 38 | 2.96 | 2.9554 ✓ |
| `signal-mark` on `chalk` | 42 | 4.67 | 4.6673 ✓ |
| `rule` on `chalk` | 49 | 1.22 | 1.2172 ✓ |

Every one rounds correctly to the recorded two decimals.

### Contrast — both mixed-colour claims exact, under 8-bit quantisation

**Method.** Same as above, applied to `color-mix(in srgb, …)` computed in
gamma-encoded sRGB per CSS Color 4. I ran four interpretations to find which one
the record used.

| claim | line | recorded | float mix | 8-bit mix |
|---|---|---|---|---|
| `ink` 65% over `chalk` | 63 | 5.26 | 5.2753 | **5.2570 ✓** |
| `chalk` 70% over `dusk` | 64 | 7.43 | 7.4103 | **7.4297 ✓** |

Both are exact if the mix result is quantised to 8 bits before measuring, which
is what a display paints. Mixing in linear-light instead gives 2.56 and 9.87 —
nowhere near — so the record was computed in the right space. **Verified.**

### The gradient's worst case — the reasoning holds

`style.css:65-68` claims `dusk` is the lighter end of the hero gradient, so
7.43:1 is the worst case across the whole run rather than a value at one point.
**Method:** computed relative luminance of both stops. `dusk` = 0.02055, `ink` =
0.00979. `dusk` is lighter, so a light foreground has its *lowest* contrast
there. `chalk-soft` on `ink` is 8.74:1. The claim is correct, and it is the kind
of claim that is usually wrong. **Verified.**

### `signal-mark`'s derivation — correct, including "the first step"

`style.css:39-42` claims `signal-mark` is `signal` at the same hue (25.5°) and
the same saturation, with lightness moved 0.510 → 0.390, and that 0.390 is "the
first step that clears 4.5:1".

**Method.** Converted both hexes to HSL, then walked lightness down from 0.510 in
0.01 steps at `signal`'s exact hue and saturation, rounding each result to 8-bit
and measuring against `chalk`.

| | H | S | L |
|---|---|---|---|
| `#D9752B` | 25.5172° | 0.696000 | 0.509804 |
| `#A9591E` | 25.4676° | 0.698492 | 0.390196 |

Hue: both round to 25.5° ✓. Lightness: 0.510 → 0.390 ✓. Saturation differs by
0.0025 (0.36% relative), which is 8-bit rounding, not a different decision — no
hex at L=0.390 can hold 0.696000 exactly.

The walk:

```
L=0.410  #B15E20  4.2967
L=0.400  #AD5B1F  4.4951   <- fails 4.5 by 0.005
L=0.390  #A9591E  4.6673   <- first to clear
```

`#A9591E` is exactly what the walk produces. "The first step that clears 4.5:1"
is true, precisely, at a 0.01 step. **Verified.**

### The type scale — arithmetic closes

**Method.** Substituted the calcs by hand.

- four steps declared, four kinds of text claimed ✓
- `label` = body ÷ 1.28 ✓ (`:114`)
- `heading` = body × 1.5, "one and a half body steps" ✓ (`:115`)
- `display` = body × 3, "which is also two headings" — 1.5 × 2 = 3 ✓ (`:116`)
- "the three visible levels stand in whole ratios" — 1 : 1.5 : 3 = 2 : 3 : 6 ✓

**Verified.**

### The spacing ladder — five steps, five declared, arithmetic closes

**Method.** Substituted the calcs; checked the comment's table against the
declarations line by line.

| comment (`:132-136`) | declaration | resolves to |
|---|---|---|
| line ÷ 4 | `--s-inline` (`:138`) | 0.3875rem ✓ |
| line ÷ 2 | `--s-label` (`:139`) | 0.775rem ✓ |
| line | `--s-line` (`:137`) | 1rem × 1.55 = 1.55rem ✓ |
| line × 2 | `--s-block` (`:140`) | 3.1rem ✓ |
| line × 4 | `--s-section` (`:141`) | 6.2rem ✓ |

And the claim that "every step is that root multiplied or divided, written as
the arithmetic so changing the body size moves the whole ladder with it" — all
five are `calc()` off `--s-line`, which is `calc(--text-body × --lh-body)`.
Changing `--text-body` moves the ladder, the measure, the page width and all
four type steps. **Verified.**

### The section rhythm — arithmetic closes, and the recorded bug is real

`style.css:446-449` claims one block step top and bottom gives an inter-section
gap of `s-block × 2`, which is the section step, and that padding both sides
with `s-section` would give "twice the ladder's largest value — a distance on no
step at all."

**Method.** `s-block × 2` = `(s-line × 2) × 2` = `s-line × 4` = `s-section` ✓.
And `s-section × 2` = `s-line × 8`, which is on no declared step ✓. Then checked
the actual gap: section 1's `padding-bottom` is `s-block` (`.after-ledger`
overrides only `padding-top`, `:459-461`), section 2's `padding-top` is
`s-block`. Gap = `s-block × 2` ✓. **Verified**, including the claim that the file
once shipped the error.

### The page width — arithmetic closes

`--measure` = 1rem × 0.5 × 65 = 32.5rem. `--page` = 32.5 × 2 + 3.1 = **68.1rem =
1089.6px**, and `style.css:237` calls it "1090px rounded up" ✓. The caveat the
comment volunteers — that 0.5 is a typographic convention rather than a
measurement — is correct and unusually honest. **Verified.** *(The value's absence
from the code is finding 10, a separate matter.)*

### The radius judgment — true

`style.css:158-163` claims the concentric-radius equation governs flush nested
pairs, that this page has none, that "the ledger's rows are square inside it and
its edge is the only curve", and that no flush pair was manufactured to have an
equation to write.

**Method.** Grepped every `border-radius` (two: `:334`, `:370`) and checked each
one's descendants. `.ledger` contains `table`, `td`, `span`, `footer` — no radius
on any. `.cta` contains text. No nested pair exists. **Verified**, and it is the
correct reading of C1.

### The elevation count — true

`style.css:172-175` claims one elevation level and that everything else separates
with a rule. **Method.** Grepped `box-shadow` (one occurrence, `:371`) and
`var(--rule)` used as a border (five: `:395`, `:438`, `:455`, `:484`, `:531`).
**Verified.** *(The justification for why that one level exists is finding 3.)*

### The motion abstentions — true

`style.css:185-193` claims motion only where a control answers a pointer, that
anything driven by interactive state uses a transition not a keyframe, and that
nothing enters on scroll and nothing animates on load. **Method.** Grepped
`@keyframes` (zero), `animation:` (zero), `transition` (two, both colour
properties on `:hover`/`:active` paths). **Verified.**

### The font-weight prohibition — true, and it holds

`style.css:83-85`: "Nothing on this page may ask for `bold`; it would resolve to
the 600 face and record a weight nobody declared."

**Method.** Grepped for `bold` and `700` in both files (zero hits). Then checked
the elements a UA stylesheet bolds by default: `<h1>` and `<h2>` are bolded by
the UA, and `style.css:245-250` sets only `margin` and `text-wrap` on them — so
the prohibition holds only because all three headings carry `.display` or
`.heading`, which set `font-weight: var(--weight-text)`. They do
(`index.html:38`, `:91`, `:134`). No `<th>`, `<strong>` or `<b>` exists.
**Verified.** The mechanism is also correct: CSS font matching for a requested
700 with 400 and 600 available selects 600 without synthesis.

### The webfont request matches the declared weights

`href="…IBM+Plex+Sans:wght@400;600&family=Instrument+Serif…"` (`index.html:27`)
against `--weight-text: 400`, `--weight-strong: 600` and a single-weight display
face. Two + one = the "three font files" claimed at `:87`. **Verified.**

### The `.hero-text p` scoping note — true

`style.css:318-321` records that the unscoped version reached into the ledger and
painted its title in the subhead's colour. **Method.** The selector is
`.hero-text p` (`:322`); an unscoped `.hero p` would match `.ledger-title`
(`index.html:51`), which is a `<p>` inside `.ledger` inside `.hero`, and would
apply `color: var(--chalk-soft)` — chalk-soft on chalk is 1.7:1, near-invisible.
The recorded near-miss is accurate. **Verified.**

### The literal count — the px half is exact

`style.css:578-583`. **Method.** Grepped every `px` in the file and partitioned
by whether the line falls inside `:root` (26-195) or inside a comment.

| claim | found |
|---|---|
| 1px, five times | `:395`, `:438`, `:455`, `:484`, `:531` — **exactly five** ✓ |
| 2px and 3px, the focus ring and its offset | `:349`, `:350` ✓ |
| 40px | `:571` ✓ |
| 760px, a media-query width | `:239`, `:303`, `:488`, `:516` — no count claimed ✓ |
| 12rem | `:490` ✓ |
| -0.01em, 0.09em, 0.25em | `:266`, `:280`, `:540` ✓ |

The 1px inside `--lift` (`:181`) is correctly excluded as being inside the token
block. **Verified** — this half of the inventory is exact to the instance. *(The
percentage half is finding 10.)*

### Prose stays at the measure — true where it binds

`style.css:152`. **Method.** Grepped `max-width: var(--measure)`: `:324`, `:464`,
`:502`, `:523` — the hero subhead, the section heads, the source descriptions
and the limit prose. Every prose block on the page except `.site-footer p`
(`index.html:151`, a one-line address that never reaches 32.5rem). **Verified.**
*(A no-op in two of the four cases — see the minor notes below.)*

---

## Not true of the code — 7 records

**R1 · `55%`, the ledger's verdict column** — `style.css:586`
**Method:** grepped every `%` in the file, then grepped for any `.verdict`
selector.
There is no 55% in the code and no `.verdict` rule at all. The entry also
contradicts `style.css:421` in the same file ("Neither carries a width"), which
is the true statement. → **finding 10**

**R2 · "1090px is `--page` rounded up"** — `style.css:237`
**Method:** grepped `1090`. One hit, in the comment itself.
The arithmetic is right (68.1rem = 1089.6px) but the comment introduces the
value as a literal in the file, and no such literal exists. The literal inventory
at the foot correctly does not list it, so the two records disagree. →
**finding 10**

**R3 · Four percentages present and unlisted** — `style.css:574-591`
**Method:** grepped every `%`; partitioned inside/outside `:root`.
`100%` at `:215` and `:389`; `50%` at `:569` and `:570`. The inventory presents
itself as complete ("counted rather than estimated") and lists none of them,
while listing one that does not exist. → **finding 10**

**R4 · "the warmth is spent in exactly two places"** — `style.css:12-13`, `:427`
**Method:** grepped every `var(--signal)` and `var(--signal-mark)`; resolved each
selector against the markup to find which elements it reaches.
Three places, not two: the button (`:332`, `:344`), the short figure (`:431`),
and the focus ring (`:349`), which is declared as unqualified `a:focus-visible`
and therefore paints the accent on the footer links — in neither named place. →
**findings 4 and 8**

**R5 · "it sets exactly one line" / "a size that renders once"** — `style.css:75`,
`:82-83`, `:100`
**Method:** grepped `var(--face-display)` (two rules: `.display`, `.heading`),
then counted class occurrences in the markup.
`.display` appears twice (`index.html:38`, `:134`), `.heading` once (`:91`). The
serif sets three lines; the `--text-display` size renders twice. The second use
is justified at `style.css:508-510`, 400 lines away, and the three earlier
records were never updated. → **finding 9**

**R6 · "Five to six is the ratio at which the longest party name holds one line"**
— `style.css:298-302`
**Method:** read the selector at `:423-425` and checked whether the described
behaviour is possible.
`.ledger .party { white-space: nowrap }` prevents wrapping at any ratio, so the
recorded reason cannot be the operative one. The duplicate `.ledger .party`
declaration (`:406` and `:423`) shows where the drift happened. → **finding 11**

**R7 · The crossing that the arithmetic does not produce** — `style.css:362-366`,
`:172-180`, `:458`
**Method:** compared `|margin-bottom|` on `.ledger` (`:373`) against `.hero`'s
`padding-block` (`:289`), then reasoned through grid track sizing under
`align-items: start` (`:295`) for both cases of which item is taller.
They are equal, so the card's bottom edge reaches the hero's bottom edge at best
and never crosses it. Three records depend on the crossing, including the
"accepted cost" that says the shadow spends "most of its area" on light ground,
which is the reverse of what a flush card produces. → **finding 3**

## Also not true of the code, outside `style.css`

**R8 · `mark.svg:2-4`** — "Three ruled lines and one that does not reach the
margin" is four; the file draws three `<rect>`s and the next sentence says
three. **Method:** counted elements. → **finding 13**

**R9 · `style.css:4-5`** — "Every line of copy draws on it, and nothing on this
page is invented." **Method:** matched every string in `index.html` against
`inventory.md`. Three lines have no line behind them: the CTA "Reconcile your
first month" (`:43`; the inventory has no trial, first month, or signup),
"Nothing is typed twice" (`:45`), and "in your third month" (`:143`). A fourth,
`index.html:94`, drifted from its source in a way that changed who the page
addresses — `inventory.md:41` says "**an** accountant", the page says "**your**
accountant". → **finding 7**

## Records that are true but inert

Not findings. Recorded so a later run does not rediscover them as findings.

- **`.hero-text p { max-width: var(--measure) }`** (`style.css:324`) never binds.
  At `--page`'s maximum the hero text column is 5/11 of 940.8px = 427.6px, always
  narrower than the 520px measure. The cap is correct and does nothing at any
  viewport width.
- **`.limit p { max-width: var(--measure) }`** (`:523`) binds only below 760px.
  Above it the two-column grid gives each column 470.4px.
- **`scroll-behavior: auto !important`** in the reduced-motion block (`:225`) has
  no `scroll-behavior: smooth` to override. Harmless and defensive.
- **`--text-body: 1rem` described as "16px"** (`:15`, `:108`). True at the default
  root size, not true if the reader has changed it — which is the correct
  behaviour and a slightly imprecise record. Every px figure in this report
  assumes a 16px root.
- **`12rem`, "the widest of the five plus its gutter"** (`:584`, value at `:490`).
  The five `<dt>` strings top out at 12 characters ("Credit notes", "Bank
  charges"), roughly 6.3rem at 16px semibold. Adding the declared gutter
  (`gap: var(--s-block)` = 3.1rem) reaches 9.4rem, not 12rem. Separately, in a
  grid `gap` is applied *in addition to* the column, so a column width that
  "includes its gutter" double-counts it. I could not close this arithmetic by
  reading — see section 4 — so it is listed here rather than as a finding.

---

# Section 3 — Rules I had to supply that the tell does not contain

Eleven. Each names what the tell stops short of and what I put in its place.

**1 · A3 counts distinct radii and names no threshold.**
The skill's own text flags this. I supplied the Fix's number: "Two or three radii
tied to size" means one distinct radius fires and two or more declines. Two here,
so it declined. A run that read the Signal alone would have had to guess.

**2 · C15's Signal declines while its Principle is violated.**
The Signal fires only on the *total absence* of a responsive variant. This page
has a breakpoint, chosen well and recorded, so the Signal declines — and the page
still overflows horizontally on a phone, which is the exact failure the Principle
names ("does not degrade, it overflows"). I supplied: *a declared breakpoint is
not evidence that every width was opened.* Without that, finding 2 does not
exist. This is the most consequential gap I hit.

**3 · No tell covers a link whose href does not resolve.**
F12 covers `href="#"` and named placeholders. It does not cover a well-formed
href pointing at the wrong path. I supplied: *check every internal href against
the canonical the page declares for itself.* That is what produced finding 1, the
highest-value item in the report.

**4 · No tell covers a link with no visible affordance.**
C12 is about status colour; nothing covers "this text is interactive and looks
exactly like the text beside it". I supplied: *a link whose only distinguishing
treatment measures under 3:1 against its ground is not distinguished.* That
produced finding 5.

**5 · No tell measures the contrast of a focus ring.**
`craft.md` deliberately excludes contrast ("contrast ratios need a tool"), and
hands it to `web-design-guidelines`. I used a tool. I supplied it here only
because *this file invokes WCAG 1.4.11 and its 3:1 floor by name at
`style.css:50-51`* — so the standard is the page's own, not one I imported. A
page that never mentioned 1.4.11 would not have taken finding 4 from me.

**6 · F4's Signal is a conjunction, so a partial OG set escapes it.**
"`og:title`, `og:description`, and `og:image` are missing" — all three, per the
skill's stated conjunction convention. Two present means no fire, while the
Principle ("Every link pasted into a chat becomes a card") is defeated by the one
absence. I supplied a per-tag reading for `og:image` only, and marked it as
supplied. **The catalog should consider splitting this Signal.**

**7 · F3's length range lives in the Fix, not the Signal.**
The Signal fires only on absence or a framework default. The meta description
here is **196 characters** against the Fix's "120 to 160", so search engines will
cut it around 155 — losing the last third, which is where "Built as a
demonstration specimen" sits. I supplied the Fix's range as a check.

**8 · F5's Signal stops at "a framework default or nothing".**
The Fix asks for "an `apple-touch-icon` and an `icon` entry in the manifest";
neither exists, and there is no `.ico` fallback, so browsers without SVG-favicon
support show a blank tab. I supplied the Fix as a check and note it here rather
than as a finding, because the primary icon is real and considered.

**9 · C14 does not carry the webfont case.**
Its two branches are async boundaries and images. A third thing shifts layout:
`display=swap` on a 48px display serif. `style.css:87-90` accepts this cost as "a
flash of the fallback stack", but Instrument Serif and Georgia have different
metrics, so what actually happens is a **reflow of the page's tallest headline**,
not a flash. No `size-adjust`, `ascent-override` or `font-size-adjust` is
declared. I supplied: *a swapped webfont with unmatched fallback metrics is a box
nobody reserved.* Noted here rather than as a finding, since the trade is
recorded and defensible — only its description is understated.

**10 · C9 does not ask whether hover and active look different.**
Both pairs here (`style.css:342-343`, `:544-545`) give `:hover` and `:active` the
*same* declaration. On touch this is exactly right and is the Principle's whole
point. On a pointer, pressing a hovered control produces no change at all. I
supplied the observation; C9's Fix is satisfied, so it is not a finding.

**11 · C10 does not ask whether a single-theme page says so.**
The tell fires on a half-crossed second theme. This page has one theme and
declines cleanly. But there is no `color-scheme: light` and no
`<meta name="color-scheme">`, so a browser applying automatic dark inversion has
nothing telling it not to. `body` does set an explicit background, which is the
important half. Supplied, minor, not a finding.

**Also considered and rejected as a supplied rule:** F1's Fix asks for `lang`
"again on any element where the language changes". The page carries Portuguese
proper nouns and a Porto address under `lang="en"`. WCAG 3.1.2 explicitly exempts
proper names, so I did not supply this as a rule. Recorded because a later run
will see it and should not fire on it.

---

# Section 4 — What I could not check by reading

**1 · The exact width at which the ledger table overflows.**
Finding 2's arithmetic depends on the advance widths of `TRF OURIVESARIA LUME`
and `11,000.00` in IBM Plex Sans at 12.5px. I estimated from typical humanist-sans
metrics (0.55–0.70em per uppercase glyph) and got a min-content total of
277–302px against 220.8px available at 320px. **The overflow is certain; the width
at which it stops is not.** My estimate puts it near 420px. One render at 320,
375 and 414 settles it.

**2 · Which grid item is taller in the hero.**
Finding 3 holds in both cases, which is why I could report it. But whether the
negative margin does anything visible at all — versus doing nothing — depends on
whether `.ledger` is more than 6.2rem taller than `.hero-text`, which needs the
rendered heights of a 48px display serif headline at 427px wide and a four-row
table. A render tells you which of the two failure modes you have.

**3 · Whether the fallback-to-webfont swap actually reflows, and by how much.**
Section 3, item 9. Requires loading Instrument Serif and Georgia and measuring
the same string in both. The direction is near-certain (a high-contrast display
serif against Georgia); the magnitude is not.

**4 · Whether `12rem` is "the widest of the five plus its gutter".**
Needs the rendered width of "Credit notes" and "Bank charges" at 16px IBM Plex
Sans 600. My estimate (≈6.3rem) says the record does not close, but a 1.9×
discrepancy from an estimated glyph width is exactly the kind of thing a render
overturns.

**5 · Whether the canonical URL resolves.**
`https://luantaraschi.github.io/anti-slop/specimen/` — I did not fetch it. The
skill puts "running the Finish axis against a published site" out of scope, and
the instruction scoped me to the directory. Finding 1 does not depend on the URL
resolving; it depends only on the CTA's path disagreeing with the canonical's,
which is readable. But if the canonical is itself wrong, finding 1 inverts and
the CTA is right.

**6 · Whether `sitemap.xml` and `robots.txt` exist at the repository root.**
F10 declined on its page-count exemption, so this does not change the verdict.
But I was scoped to `specimen/` and did not look outside it.

**7 · Whether the three Google Fonts requests are what actually ship.**
"Three font files" (`style.css:87`) is correct for the latin subset. Google serves
one woff2 per unicode-range per face, so the browser sees more entries and
downloads the ones it needs. All page copy is latin-only (I checked; no accented
characters survive into the markup despite the Portuguese setting), so three is
right — but I confirmed that by reading the copy, not by watching the network.

**8 · Everything the axes explicitly exclude.**
A rendered pass, a real console error, and colour rendering on a real display.
The 8-bit quantisation question in section 2 — which decided whether two recorded
contrast figures were right or off by 0.02 — is the sort of thing that only a
render fully settles. I resolved it by finding the interpretation under which
*both* claims land exactly, which is strong evidence but not a measurement.

**9 · The inline-block CTA's vertical rhythm.**
`.cta` is `display: inline-block` with `margin-top: var(--s-block)`, sitting in
an anonymous block box between two `<p>`s. Margins apply, but the surrounding
line box adds leading that a block-level element would not, so the rendered gap
above and below the button is not exactly `s-block` and `s-line`. Whether that
reads as breaking the ladder needs looking at.

---

## One closing note on the question that was asked

The question was whether the recorded reasoning beside the gradient, the card,
the serif and the accent actually holds, or only reads as though it does.

It mostly holds, and it holds in the places that are hardest to fake. Every
contrast figure in the file is correct, including the two that required finding
the right colour space and the right quantisation to reproduce. The
`signal-mark` derivation is exact down to "the first step that clears 4.5:1",
which is true at a 0.01 lightness step and would have been trivially easy to
assert without checking. The spacing ladder, the type scale, the section rhythm
and the page width all close arithmetically. The radius judgment correctly
declines to manufacture a concentric pair. The `1px, five times` count is right
to the instance.

Where it fails, it fails in one specific way: **records that were true when
written and were not revisited when the code moved.** `nowrap` was added to the
party column and the ratio comment stayed. A second `.display` was added to the
limit section and three "one line" comments stayed. A `55%` width was removed and
its inventory row stayed. A `1090px` literal was replaced by `--page` and its
explanation stayed. The focus ring was added and the "exactly two places" count
stayed.

And one is a different kind of failure — the crossing card, where the arithmetic
never produced what three comments describe, so the record was not stale but
wrong from the start.

None of the twelve fired a tell. That is the same result the prior run found on
the sibling page, and it is the catalog's real gap: it has forty-nine ways to
find a value nobody chose and none to find a reason that has stopped being true.
