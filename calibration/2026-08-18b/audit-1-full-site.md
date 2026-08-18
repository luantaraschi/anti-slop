# audit — `anti-slop` (full, five axes)

**Subject** `c:\Users\luant\Documents\anti-slop\site` — `index.html`, `style.css`,
`mark.svg`, `og.png`, `inventory.md`, `img/`.
**Mode** `anti-slop` (Surface, Craft, States, Words, Finish).
**Run** blind, 2026-08-18. Read: the five subject files, plus `skills/audit/SKILL.md`
and the six reference files. Nothing under `fixtures/`, `calibration/`,
`BACKLOG.md` or `ROADMAP.md` was opened.

Paths below are relative to the subject root above.

---

## Stack, and what I translated

Plain HTML and CSS. One page, one stylesheet, no build step, no framework, **no
JavaScript at all**. One `<a>`, zero `<button>`, zero scripted state.

| Tell's example | What I audited instead |
|---|---|
| `theme.extend`, `@theme` (A1, A3, A5, A11, A12) | the `:root` custom-property block, `style.css:47–199`, and its dark counterpart at `201–219` |
| `rounded-2xl` everywhere (A3) | the count of distinct declared radius tokens |
| `text-gray-500` (A1) | `--margin`, the page's one neutral |
| `p-6` / `gap-6` / `space-y-4` (A6) | the `--s-inline … --s-section` ladder, `style.css:139–143` |
| `transition-all` (A9) | `transition: all`, or a transition naming no property |
| `dark:` variant (C10) | the `@media (prefers-color-scheme: dark)` block |
| `motion-reduce:` (C13) | the `@media (prefers-reduced-motion: reduce)` block |
| `sm:` / `md:` / `lg:` (C15) | the two width media queries, `style.css:280` and `414` |
| `hover:` / `active:` (C9) | the `a:hover` / `a:active` rules |
| `text-pretty` (C4) | `text-wrap: pretty` |
| `next/image` (C14) | the `width`/`height` attribute pair on `<img>` |
| `app/not-found.tsx` (F8) | a `404.html` at the published root, which the host would serve |
| React/query state (S1, S2, S3) | any script-driven request, view state or handler — there are none |

**Two tells declined for want of a crossing rather than being stretched.**
**A10** needs a component library to exist; there is no `components/ui/`, no UI
folder, no partials, and no include mechanism. `SKILL.md` authorises this decline
by name. **F11** needs list reconciliation; static markup has none, so `key` has
no plain-HTML equivalent. That second decline is mine — the catalog does not
license it, and I record it in §2.

---

## Verdict

The page has decided everything a stylesheet can decide and then stopped
counting: four of its recorded figures no longer describe what they point at,
and that is the one defect this catalog has no tell for.

Forty-seven of forty-nine tells decline. Only **three** decline through an
exemption clause, and all three turn on the same structural fact — this is one
page. Everything else declines because the pattern is absent or because the fix
is already in the file, usually with the reasoning written beside it. No mold in
`molds.md` matches: it is not the unfinished ship (Finish is clean), and *the
themed and unlooked-at* is broken by craft details handled correctly in more than
one place — balance and pretty at four sites, both themes fully declared, a
reduced-motion block, a 40px target on a control the tell would not even visit.

What survives is entirely in the numbers.

---

## Findings

```
ROOT
W6  A capability claim its own catalog   inventory.md:27        fixes index.html:190
    contradicts

THEN
W5  The validator's schema used as        index.html:89
    page vocabulary
```

**W6 — "42 of the 49 tells never name a framework or a library."**
`inventory.md:27–29`, repeated verbatim as page copy at `index.html:190–191`.

The number is wrong under every counting basis I could construct, and it is wrong
in the direction that flatters the product. The inventory names the seven tells
that do name a framework: A1, A2, A7, F1, F2, F8, F11. Reading each of the 49
tells, that list omits at least three more that name a product by its proper name:

- **F5** — "still Vite's or Next's default `favicon.ico`"
- **C14** — "the framework forces dimensions, as `next/image` does"
- **F12** — "It's in a test fixture, a Storybook story, or documentation"

That gives **10 naming, 39 free** — which is exactly what the skill's own
`SKILL.md` states ("Thirty-nine of the forty-nine tells never mention a framework
at all… The ten that do"). So the page contradicts the skill it ships beside, by
three.

Under a broader reading that counts framework-exclusive *syntax* as naming one —
`theme.extend`, `@theme`, `rounded-2xl`, `p-6`/`gap-6`/`space-y-4`,
`transition-all`, `components/ui/`, `transitionDuration`, `dark:`,
`motion-reduce:`, `sm:`/`md:`/`lg:`, `text-pretty`, `hover:`/`active:` — the
count is **20 naming, 29 free**. The inventory's composition claim fails the same
way: "every tell on Craft" is false (C14 names `next/image`), and "eight of the
twelve on Finish" is false (six of the twelve name one).

The finding survives either reading. 42 does not.

The cost is specific: this is the load-bearing sentence for the claim that the
catalog is stack-portable, and it is the one claim on the page a reader can check
in ninety seconds with `grep`. Fix `inventory.md:27–29` and `index.html:190` stops
being wrong, because the page is a faithful copy of its source.

*The reading I supplied to fire this is in §2, item 13. W6's Signal is about a
claim with no fact behind it; this claim has a fact behind it and the fact does
not hold.*

**W5 — "expect row" and "forbid row" as page vocabulary.**
`index.html:89` ("Twelve tells sit on its expect row") and `index.html:103` ("A2
and A4 sit on its `forbid` row").

These are the calibration harness's data schema. The page never defines either
term, and the first use lands inside a figure caption with nothing before it. A
reader deciding whether to install a plugin does not manipulate expect rows —
they run `/anti-slop` and read a report. W5's exemption is *"the audience is
developers and the webhook is literally the object they're manipulating"*: the
audience is developers, and "tell", "axis", "finding" and "fixture" are all
genuinely their objects and are all introduced by the page. The rows are not.
The exemption closes on most of the page's vocabulary and not on these two terms.

Both sentences work without the schema: "Twelve tells fire on it" and "A2 and A4
are the two it is built to clear". *The split I made is in §2, item 12.*

---

## Findings the catalog has no tell for

These are real and checkable. None fires any of the 49. I report them separately
rather than stretching a tell to cover them, and each is counted again in §2 as a
rule I had to supply.

**1 — "15 of the 49 tells have never been tested against a counterexample."**
`index.html:222–224`, from `inventory.md:98`.

The page's own source contradicts it two lines apart. `inventory.md:63–64` reads:
*"15 of the 49 tells appear in no fixture row, and 21 of the 49 have no `forbid`
row."* A counterexample is a case a tell must **not** fire on — that is a forbid
row, and the page itself uses the term that way at `index.html:103–104` ("A2 and
A4 sit on its `forbid` row, and neither has ever fired on it in a blind run").

So the correct figure for the claim made is **21**, not 15. The page took the
smaller of the two numbers in its source and attached it to the claim the larger
one answers, in the one paragraph on the page whose entire job is to state the
gap honestly. `inventory.md:98` is the root; `index.html:222` inherits it.

**2 — A figure with no source, on a page that declares its only source.**
`index.html:89`, "Twelve tells sit on its expect row."

`inventory.md:3–4` states: *"Root 1 of the build skill's four roots, for the page
in this directory. It is the only source `index.html`'s copy is allowed to draw
on."* The figure twelve is not in `inventory.md` — the word appears only at
`inventory.md:28`, in the framework tally. Every other count on the page traces
to a line in the inventory; this one does not. I could not verify it, because
`fixtures/` was out of scope for this run, which is exactly the position the rule
exists to prevent a reader from being in.

**3 — A comment counting callsites that do not exist.**
`style.css:371–373`: *"The command block. Repeated at two callsites, so it is one
class rather than two copies of the same declarations."*

`class="command"` appears once, at `index.html:47`. The decision the comment
records is still sound — one class is right whether it has one callsite or five —
but the reason it gives for the decision is not true of the tree. This matters
more here than it would elsewhere: the catalog's false-positive rule counts a
choice written beside the value it governs as evidence that someone decided, and
never asks whether what is written still describes the code.

**4 — A count the file instructs you to re-run, which does not reproduce.**
`style.css:30` ("Sixteen remain") against `style.css:44–45` ("The count above is a
count that was run, not an estimate. Re-run it before changing this file.").

I re-ran it. Counting every site of the classes the comment itself enumerates:

| class | sites |
|---|---|
| `1px` border | 5 — `270`, `377`, `428`, `480`, `542` |
| `2px` focus ring | 2 — `330`, `463` |
| `3px` offset | 2 — `331`, `464` |
| em-relative (`-0.015em`, `0.2em`, `0.9em`, `0.08em`) | 4 — `296`, `317`, `342`, `499` |
| `40px` | 1 — `567` |
| `0.01ms` | 2 — `248`, `250` |
| media widths | 2 — `280`, `414` |
| **total sites** | **18** |
| **total distinct values** | **11** |

Neither is 16. Eighteen is also the number the comment says the *original* review
found before three were removed, which suggests "sixteen remain" was never
re-derived after the removals. Sixteen is reachable only on an inconsistent basis
— count `1px` at all five sites and `0.01ms` at both, but the twice-declared focus
ring once — and the comment states no basis while instructing a re-run.

**5 — The project's own rule applied at one of its two scrolling regions.**
`style.css:383` against `style.css:452–453` and `index.html:120–124`.

`.scroller` carries `tabindex="0"`, `role="region"` and an `aria-label`, on the
stated rule *"The container is focusable because a region that scrolls has to be
reachable without a pointer."* `.command` also declares `overflow-x: auto` and
also scrolls — its longest line is 52 monospace characters at `--text-note`,
roughly 424px, against about 293px of available content width on a 375px
viewport — and it is not focusable and carries no region role.

So the page's own rule holds at one site and not its twin, and it fails on the
narrow screens where it was written to matter. The Craft axis's door two is built
to *forgive* a second site like this; no tell in the catalog *finds* one.

**6 — A named radius that never renders.**
`style.css:177–179` and `style.css:171–176`.

`--radius-frame: calc(var(--radius-image) + var(--frame-pad))` = 4 + 6.8 =
10.8px, applied to `.specimen img` alongside `border: 1px` and
`padding: var(--frame-pad)`. CSS derives a replaced element's content-edge radius
as *outer − border − padding*, so the screenshot renders at **10.8 − 1 − 6.8 =
3px**, not the 4px the comment names as "the screenshot's own 4px".

The geometry is fine — the browser's own reduction rule keeps the two curves
concentric no matter what the author writes, so **C1 does not fire**. What is
wrong is the recorded number, and the equation's omission of the border: thicken
that border to 4px and the screenshot's corners go square while the equation
still reads as though it governs them.

**7 — Two rules for elements the page never renders.**
`style.css:339–343` (`code, kbd`) and `style.css:329` (`summary:focus-visible`).
There is no `<kbd>`, no `<summary>` and no `<details>` in `index.html`. `<code>`
renders and `<kbd>` does not; the focus rule names `summary` beside `a` and only
`a` exists. Craft's own preamble says *"a declared capability that nothing renders
is not an instance"* — the page carries exactly the thing its catalog refuses to
count as evidence, and no tell fires on it.

**8 — The mark sits low in its own box.**
`mark.svg:7–15`. Ink spans y = 10 (rect top) to y = 28 (caret bottom, 26 plus the
2-unit round cap), so its vertical centre is 19 against a box centre of 16 — three
units low in thirty-two, about 1.5px at a 16px tab. Horizontally it is centred
exactly. **C2 declines** because the mark is not inside a control, so the one tell
about optical versus geometric centring never visits a favicon.

Separately, and outside every axis by charter: `--flag` `#8C3A1C` reaches 2.74:1
against a black tab bar. `mark.svg:2–6` records that *the rule* clears its floor
on both light and dark browser chrome — which I re-derived at 5.98:1 and 3.51:1
and confirmed — and does not say that the caret, the mark's primary shape, does
not.

---

## Sub-threshold: Fix clauses applied in part

Neither fires. Both are requirements that live in a `Fix` and not in its `Signal`,
and the catalog gives no way to report a fix applied in part.

- **F3.** The description exists and is written (`index.html:8–11`), so the Signal
  ("no meta description at all, or still the framework's default") fails. It is
  **251 characters** against the Fix's 120–160, so a result page will cut it
  around "the palette nobody picked" and drop the rest. The `og:description` at
  111 characters is inside range.
- **F5.** A real, hand-drawn `mark.svg` with its reasoning recorded, so the Signal
  fails. The Fix also asks for an `apple-touch-icon` and an `icon` entry in a
  manifest; there is neither, and no manifest. Added to a home screen on iOS, the
  page gets a screenshot instead of the mark.

---

## §1 — Every decline, and its state

**(a)** the Signal never matched anything in the tree · **(b)** a clause closed on
a real thing the page does and forgave it · **(c)** the condition arose and the
Fix was already applied.

Two tells fired (W5, W6), so there are 47 declines: **27 (a), 3 (b), 17 (c)**.
Only the three (b)s are exemptions, and all three are Finish clauses turning on
this being a single page.

### Surface

| | state | why |
|---|---|---|
| **A1** | **c** | Five colours named for the subject at `style.css:66–70` — `paper`, `ink`, `rule`, `margin`, `flag` — with the derivation, the contrast measurements and an accepted cost recorded at `48–65`, and all five redeclared for dark at `213–217`. Nothing on the page types a colour outside those blocks. The Fix asks for four to six named for the subject; there are five. |
| **A2** | **a** | No gradient in the tree. `grep gradient style.css` returns one prose line (`52`) recording that a sober temperature earns none. The word also appears in page copy about a fixture. |
| **A3** | **c** | Two radii — `--radius-image: 4px` (`177`) and `--radius-frame`, written as an equation (`179`) — with the reasoning at `163–176`. Signal names no threshold (§2 item 2); the Fix's "two or three tied to size" is met either way. |
| **A4** | **a** | No `box-shadow` anywhere, so both conjuncts fail: no repeated shadow, and no element stacking border + shadow + radius. The subtraction is recorded at `181–186`. Two devices appear together (border + radius on `.command`, `377–378`), never three. |
| **A5** | **c** | Four steps at `111–114` with the ratios and their justification at `97–110`; a chosen family at `91`; two weights at `94–95` with the six unloaded weights recorded as a subtraction at `83–86`. Not the system stack by default and not Inter. |
| **A6** | **a** | The pattern — one value repeated down the nesting — is not present. Five steps at `139–143` are assigned by level: `s-label` inside a block (`479`, `550`), `s-line` between lines (`311`, `354`), `s-block` between blocks (`402`, `468`, `525`), and the section gap derived as `s-block × 2` at `263–271`. §2 item 3 records the reading I had to choose. |
| **A7** | **a** | No icon renders in the page body — no inline SVG, no library, no emoji, no glyph beside a label. `mark.svg` is a favicon. The abstention is recorded at the one slot that asked for one, `516–520`. |
| **A8** | **a** | None of the three structures. The header has an h1 and two ledes and no pill badge and **no buttons at all** — zero `<button>`, one `<a>`, in the footer. `.skills` holds two blocks, not three. There is no stats strip. |
| **A9** | **a** | One transition in the file (`318`) and it names its property, `text-decoration-color`. No transform on hover anywhere; no scale, no translate on any interactive state. |
| **A10** | **a** | **Declined, does not cross.** No component library, no UI folder, no partials, no include mechanism — nothing was installed, so nothing can be hand-rolled beside it. `SKILL.md` authorises this decline. |
| **A11** | **a** | The Signal's negative clause fails outright: `--motion: 120ms ease-out` at `198` is a motion custom property. Its first clause cannot be evaluated — it compares transitions whose distances differ by an order of magnitude, and the tree holds exactly one transition. The `Not slop when`'s second door ("every animated change really is the same magnitude") also closes at n = 1. §2 item 5. |
| **A12** | **a** | No `z-index` anywhere. The Signal fires on arbitrary values existing *and* nothing naming them; the first half is absent. The one absolutely positioned element (`560–568`) is a child of its own anchor and stacks nothing. |

### Craft

| | state | why |
|---|---|---|
| **C1** | **c** | The condition arose — one nested rounded pair, the screenshot inside its frame at `428–430` — and the Fix is applied *as an equation* at `179`, so the frame's radius moves with its padding. Padding is 6.8px, under the 24px door; there is no other nested pair, so the second door is unavailable. Neither exemption was needed. The 1px discrepancy is in *Findings the catalog has no tell for*, item 6; it does not change the rendered geometry. §2 items 6 and 7 record what I had to decide. |
| **C2** | **a** | No control on the page. Zero buttons, one text link, no icon-plus-text pairing anywhere. The mark's own centring is item 8 above; C2 requires a control and does not reach it. |
| **C3** | **a** | No number changes in place. No script, no interval, no bound value. The five ids and two counts in the table are static markup. |
| **C4** | **c** | Every site is covered. Five headings of four words or more — the h1 (6 words) and four h2s (7, 7, 6, 7) — all take `text-wrap: balance` from `286–291`. Every text block takes `text-wrap: pretty`: all `<p>` at `306`, figcaptions at `439`, table cells at `482`. The two `<h3>`s are one token each and are not sites. Count: 5 of 5 headings, all blocks. §2 items 8 and 11. |
| **C5** | **a** | No control declares a dimension under 40px, and the one interactive element's hit area is set by its text label — which the Signal excludes in as many words. **The Fix is applied anyway**, at `552–568`, and `style.css:24–27` records an earlier version whose arithmetic reached 37.3px and was corrected. That is the project looking, at a site the tell would never have visited. §2 item 9. |
| **C6** | **c** | Both content images carry `border: 1px solid var(--rule)` at `428`. The Fix names an outline with a negative offset; a border under `box-sizing: border-box` with `width: 100%` costs no layout here, so the intent is met. `--rule` is declared in both themes. |
| **C7** | **a** | Nothing enters or leaves the tree: no mount, no unmount, no `display: none`, no class toggled, no `@keyframes`. The one transition is a state change on an element that is always present. §2 item 10 records this as the single reading in the run that most changes the answer. |
| **C8** | **a** | No `@keyframes` block anywhere. The platform fact — interactive state moves on a transition so a reader who changes their mind retargets rather than restarting — is recorded at `190–194`. The reduced-motion block's `animation-duration` reset (`248`) is defensive, not evidence of an animation. |
| **C9** | **c** | One element in the tree declares `:hover`, and it declares `:active` in the same rule (`323–326`). 1 of 1 carries both, with the reason recorded at `321–322`. §2 item 11 notes the count deciding at a population of one. |
| **C10** | **c** | Every one of the five tokens is redeclared in the dark block (`213–217`), **including `--rule`** — the separator this tell is about. `216` is that line. The comment at `203–212` records that both themes were rendered and looked at, and that `flag` needed a different value rather than the same one. Nothing on the page carries a colour outside these five. |
| **C11** | **a** | No `disabled` attribute in the markup and no `opacity` declaration in the stylesheet. Neither side of the tell exists, so neither can be out of step with the other. |
| **C12** | **a** | No status is carried by colour. The two coloured table columns carry their meaning in their own text — `td:first-child` is the tell id (`502–506`), `td:last-child` the path (`508–512`). The row groups are literal `ROOT` and `THEN` `<th>`s with `scope="rowgroup"` (`index.html:135`, `150`). `.command .prompt` is coloured *and* is a `$`/`>` glyph. |
| **C13** | **c** | `@media (prefers-reduced-motion: reduce)` at `244–253`, covering animation duration, iteration count, transition duration and `scroll-behavior`, with the platform fact at `242–243`. |
| **C14** | **c** | Branch two: both `<img>` carry `width="1280" height="760"` (`index.html:82–83`, `96–97`), and I confirmed both PNGs are actually 1280×760 — so the reserved box matches the file and the page cannot grow under the reader. Branch one: no async boundary exists. |
| **C15** | **c** | Two width media queries — `max-width: 661px` at `280` and `min-width: 1160px` at `414` — each derived from a token rather than taken from a framework, each with the platform fact that `@media` cannot read a custom property recorded beside it (`273–279`, `409–413`). I re-derived both: `--page` = 661.3px and `--specimens` = 1159.4px. |

### States

| | state | why |
|---|---|---|
| **S1** | **a** | Nothing in the tree performs a request. No script of any kind. §2 item 19 records the one translation I considered and rejected — the Google Fonts `<link>` — and notes that the page carries the equivalent of a failure branch there anyway: a four-deep fallback stack at `91` and `font-display: swap`, with the accepted cost recorded at `79–82`. |
| **S2** | **a** | No component state exists. The only view state on the page is a scroll offset inside `.scroller`, which is ephemeral by the Signal's own reading and forgiven by the exemption besides. No filter, tab, sort, page number or selected record. The theme comes from `prefers-color-scheme`, which is the reader's, not the page's. |
| **S3** | **a** | No handler, no mutation, no destructive action, no submit. Nothing to confirm, undo, or guard. |

### Words

| | state | why |
|---|---|---|
| **W1** | **a** | The page's one link reads "Source on GitHub" (`index.html:227`) — it names its destination. No button exists, so there is no button label to be a catalog label. None of the four named strings appears. |
| **W2** | **a** | No action, therefore no verb that could fail to survive one. No toast, no dialog, no history entry. The product vocabulary that does recur — *tell*, *axis*, *finding*, *fire*, *run* — is used identically in `index.html`, `inventory.md` and the catalog. |
| **W3** | **a** | No empty state. Nothing on the page renders a collection that could be empty. |
| **W4** | **a** | No error message anywhere. |
| **W5** | **FIRED** | see above |
| **W6** | **FIRED** | see above |
| **W7** | **a** | The Signal's "always" never matched — the page's recurring count is **two**, not three: two specimens, two skills, two landing pages, two files closing six findings, two ledes. Other counts are five (findings, axes), six (blocks), forty-nine. Three appears twice incidentally (the THEN rows, the footer paragraphs) and is never a section's shape. The exemption would have closed it too; the Signal did not reach it. |

### Finish

| | state | why |
|---|---|---|
| **F1** | **c** | `<html lang="en">` at `index.html:2`. |
| **F2** | **b** | *"Only one real route exists and its single title is the product's own."* One route; the title at `index.html:7` is 67 characters, product-first, and is not any framework's default. §2 item 15 records that the Fix's own sentence ("On a one-screen app, one title is enough, as long as somebody wrote it") describes this page equally well, so **(c)** is defensible. I filed (b) because the exemption names the single-route condition explicitly. |
| **F3** | **c** | A written description at `index.html:8–11`, not absent and not a framework default. Over-length; see *Sub-threshold*. |
| **F4** | **c** | `og:title` (`17`), `og:description` (`19`), `og:image` (`22`) all present, plus `og:type`, `og:url` and `twitter:card`. The image URL is absolute, as OG requires, and `og.png` is **1200×630** — exactly the Fix's specification, which I verified from the file header. |
| **F5** | **c** | A hand-drawn `mark.svg` with the reasoning for both its shapes and both its colours recorded inside the file. Not any framework's default and not absent. Partial; see *Sub-threshold*. |
| **F6** | **c** | Exactly one `<h1>`, at `index.html:36`, and it is the subject of the `<title>`. Four `<h2>`s and two `<h3>`s below it, correctly ranked with no level skipped. |
| **F7** | **c** | Both content images carry substantive `alt` (`index.html:84`, `98`) describing what each screenshot communicates — the gradient, the sparkle, the headline text — rather than naming the file. |
| **F8** | **b** | *"The application has no routing at all and is served from a single path."* One file, no router, no catch-all to write. §2 item 17 records the tension: `index.html:12` declares a published origin, so a stale link into it still lands on the host's default wall, which is what the Principle is about. The exemption closes on a structural fact while its cost stays live. |
| **F9** | **a** | The Signal is a conjunction and both halves fail: one route, not multiple, and a `<link rel="canonical">` is present anyway at `index.html:12` with an absolute URL. |
| **F10** | **b** | *"the site has fewer than ten pages, all reachable from navigation."* The Signal **does** match — there is no `sitemap.xml` and no `robots.txt` in the directory — and the exemption closes it at one page. §2 item 16 notes that a single page has no navigation for the clause to be satisfied by, and that a project-page deployment cannot own the domain root where `robots.txt` would have to live. |
| **F11** | **a** | **Declined, does not cross.** No `.map(`, no JSX, no template loop — static markup has no reconciliation, so `key` has no equivalent to audit. §2 item 19: the catalog licenses this decline for A10 and not for F11. |
| **F12** | **a** | None of the seven strings appears anywhere in `index.html`, `style.css` or `inventory.md`. No `href="#"` — the one anchor points at a real repository. The illustrative paths in the findings table (`tailwind.config.ts:5`, `components/stat-card.tsx:3`) are not placeholders: `index.html:171–179` sources them to a dated run against a named fixture. |

---

## §2 — Rules I had to supply

Ordered roughly by how much each one moved the answer.

**1 — The (a)/(c) collapse on absence-tells.** More than half this catalog fires
on an *absence* (A1, A5, C13, F1, F3, F4, F7…). For those, "the Signal never
matched" and "the Fix was already applied" are the same observation stated twice,
and the three-state frame forces a choice the catalog does not make. I adopted a
rule and held it throughout: **a tell that fires on an absence and finds the thing
present is (c); a tell that fires on a pattern-present and finds no such pattern
is (a).** Under the opposite convention, all 17 of my (c)s become (a)s and this
run reads as 44 (a)s. Nothing else in the catalog distinguishes them.

**2 — A3 has no threshold.** The Signal says "count the distinct radii" and names
no number. `SKILL.md` already records this as a known gap. It did not bite here
because the page uses two and the *Fix* says two or three — but the number I read
it against lives in the Fix, not the Signal, and a page with four radii would have
had nothing to decide against.

**3 — A6 cannot tell an axis from a level.** `--s-block` appears at the section's
vertical padding (`270`), the column's horizontal gutter (`260`), the specimens
grid's gap and its own gutter (`403–405`), and five `margin-top`s. Read strictly,
that is one value recurring from the page wrapper down through the section to the
figure — the Signal's own words. I declined because five distinct steps exist and
are assigned by level, and because the section gap is *derived* as `s-block × 2`
rather than typed. But the Signal gives no way to distinguish a value legitimately
reused on a different axis (a horizontal gutter and a vertical block gap are not
the same rhythm) from a rhythm that has gone flat. **A stricter reader fires A6
here.** This is the closest Surface came to a second finding.

**4 — A8's semicolons.** `SKILL.md` says clauses are a conjunction unless stated
otherwise; A8 lists three structures separated by semicolons and says nothing.
Nothing turned on it — none of the three is present, so it declines under both
readings — but a page with a three-card grid and nothing else would be decided
entirely by which way an auditor reads a punctuation mark.

**5 — A11 at a population of one.** The Signal compares transitions "whose
travelled distance differs by an order of magnitude". With one transition in the
tree there is no comparison to perform, and the Signal is silent on what that
means. I declined on the Signal (its negative clause fails outright — `--motion`
exists) rather than on the exemption, but I could name both routes only because
the `Not slop when` happens to cover n = 1 and the Signal does not.

**6 — Whether an `<img>` with padding is a "nested pair".** C1 says "two rounded
*elements* nested". Here the inner surface is the replaced content, not an
element. I decided it counts, because CSS derives a real content-edge radius for
it and the eye sees two curves — and then found the Fix satisfied. **If it does
not count, C1 declines at (a) for want of any site at all**, and the page has zero
nested pairs. The catalog does not say.

**7 — C1's equation omits the border.** The tell says *outer = inner + padding*.
CSS computes *inner = outer − border − padding*. Where a border sits between the
layers, the two differ by its width. That is why `--radius-image: 4px` renders as
3px here. The catalog never mentions borders in this equation, and I had to work
out that the discrepancy is cosmetic — browsers keep the curves concentric
regardless of what the author wrote, so **C1's equation governs the named value,
not the rendered geometry.** That is worth writing into the tell.

**8 — C4's "about three sentences".** The `.note` at `index.html:171–179` runs to
four. "A short text block is a paragraph carrying at least one complete sentence
and no more than about three" gives no way to decide whether four is still a short
block or has become long-form body copy — and the Fix says to treat those
oppositely. I read four as still short. Nothing turned on it, because
`p { text-wrap: pretty }` at `306` covers every paragraph unconditionally; on a
page that applied it selectively this would decide the finding.

**9 — C5 excludes the site where the project's evidence lives.** The Signal says a
control whose hit area is set by a text label is not a site. The page's one
control is exactly that — and the page extends it to 40px anyway (`560–568`), and
`style.css:24–27` records that an earlier attempt reached only 37.3px and was
found and fixed. So the strongest evidence in the file that someone measured a
touch target sits at a site the tell refuses to visit. **The catalog gives no way
to credit that**, and on this axis credit is the whole mechanism of door two.

**10 — C7 and a state change on a persistent element.** The one transition
(`318`) uses `var(--motion)` in both directions: hovering on and hovering off both
take 120ms. Read literally, *"the same duration and the same distance in both
directions"* fires C7. I declined on the Principle instead — nothing enters or
leaves, so there is no "what comes next" for an exit to hold the eye away from,
and the Signal's three forms of "instant" (`display: none`, conditional unmount,
class removed) are all about content appearing and disappearing. **This is the
single reading in the run that most changes the answer.** A literal auditor
reports C7 on this page.

**11 — Counts that decide at a population of one.** `SKILL.md` flags this for C4.
It applies to C9 here too: one element has a hover state and it also has active,
so the count is 1 against 0 and can only come out one way. A count is doing no
work at n = 1, and the tell reads as though it is.

**12 — Splitting W5's audience exemption across one page's vocabulary.** The
exemption forgives implementation names when the audience is developers and the
object named is the one they manipulate. I applied it to most of the page's
vocabulary — *tell*, *axis*, *fixture*, *finding* — and withheld it from *expect
row* and *forbid row*, on the grounds that a reader deciding whether to install
does not touch the harness's schema. **The tell does not authorise splitting an
exemption by term.** It is written to be applied to a surface, once.

**13 — Extending W6 from unbacked to false.** This is the most consequential thing
I supplied. W6's Signal is *"a claim about capability, speed or trust with no fact
behind it"*. `index.html:190` has a fact behind it, cites a number, and the number
does not hold. I fired W6 through its exemption — *"backs the claim with a
verifiable fact"* — by reading "verifiable" as requiring the verification to
succeed rather than merely to be possible. **A narrower reading declines W6 here
and the page fires nothing at all**, leaving the wrong number unreported by every
one of the 49. That is the strongest argument in this run for a tell the catalog
does not have.

**14 — What counts as "naming a framework".** To check the page's own tally I had
to draw a line the catalog never draws, so I drew two and reported both. Strict
(a product's proper name appears): 10 tells — A1, A2, A7, C14, F1, F2, F5, F8,
F11, F12 — leaving 39, which matches `SKILL.md` exactly. Broad (framework-exclusive
syntax counts): adds A3, A5, A6, A9, A10, A11, C4, C9, C10, C13, C15 for 20,
leaving 29. The finding survives both, which is why I could report it; had the two
readings straddled 42, I could not have.

**15 — F2 at one route.** "Every route shares the same title" is degenerate when
there is one route. The exemption names the single-route case; the Fix's last
sentence describes the same page as compliant. Two fields of one tell describe
this page, one as forgiven and one as correct. I filed (b); (c) is equally right.

**16 — F10's "reachable from navigation" at one page.** The exemption asks that
fewer than ten pages all be reachable from navigation. A single page has no
navigation to be reachable from. I read the clause as trivially satisfied. Also
noted and not acted on: `index.html:12` implies a GitHub project-page deployment,
which cannot own the domain root where `robots.txt` must live — so even a page
that wanted to fix F10 could only ship the sitemap half.

**17 — F8's exemption versus F8's Principle.** *"No routing at all and served from
a single path"* is true. But the page declares a published origin, so a stale or
mistyped link into it does reach the host's default wall — the exact cost the
Principle describes. The exemption closes on the tree's structure while the
Principle's harm remains reachable. I honoured the exemption. A `404.html` beside
`index.html` would cost one file.

**18 — A Fix applied in part is unreportable.** F3's 120–160 characters and F5's
`apple-touch-icon` and manifest entry live only in their `Fix` fields; both
Signals are satisfied by the mere presence of a written description and a real
icon. So the catalog has no way to say "this was done, and done halfway". I
reported both under *Sub-threshold* rather than firing.

**19 — Declining F11 without licence.** `SKILL.md` explicitly permits declining
A10 where no component library exists. It offers no such permission for any other
tell. I declined F11 on my own reasoning — static markup has no reconciliation, so
there is no plain-HTML `key` to look for. Related: I considered whether the Google
Fonts `<link>` is an S1 request site and decided it is not, because S1's Signal
names `fetch`, queries, mutations, `.catch`, `try`/`catch` and error boundaries,
all script constructs. Both declines are mine.

**20 — The catalog cannot notice a recorded decision that has gone stale.** This
is the largest gap the run found, and it accounts for four of the eight
out-of-catalog findings. The false-positive rule's fourth evidence place is
*"anywhere a choice is written down in the code beside the value it governs"* —
and the rule tests only that the writing **exists**, never that it is still
**true**. On this page: a comment counting two callsites where there is one
(`style.css:371`), a count of sixteen literals where eighteen sites remain
(`style.css:30`), a named 4px radius that renders at 3px (`style.css:171`), and a
figure of 15 attached to the claim 21 answers (`inventory.md:98`). Every one of
those comments **passes** the false-positive rule and thereby suppresses the tell
it sits under. A catalog whose central mechanism is "look for evidence someone
decided" has no check on whether the evidence is accurate — and stale evidence is
strictly worse than none, because it exempts.

**21 — No tell finds a rule applied at one site and not its twin.** `.command` and
`.scroller` both scroll; one is reachable without a pointer. Craft's door two
exists precisely to *forgive* the second site as an oversight once the first is
handled. Nothing in the catalog *fires* on the oversight. The axis is built to
absolve inconsistency and not to detect it.

**22 — No tell covers dead rules.** `code, kbd` and `summary:focus-visible` style
elements that never render. Craft's preamble says a declared capability that
nothing renders is not an instance — it refuses to count them as evidence and does
not fire on them either, so they sit in a gap the catalog created deliberately at
one end and not at the other.

---

## §3 — What I could not check by reading

1. **Whether the measure holds 65 characters.** `--measure` is
   `body × 0.5 × 65` = 552.5px, and `style.css:145–152` says outright that the 0.5
   is *"a typographic convention, not a measurement"* whose truth depends on the
   face that ships. Only Source Serif 4 rendered at 17px answers it. The honesty of
   the comment is exactly why the number is unverifiable from source.
2. **The font fallback.** How far `ui-serif`/Georgia's metrics differ from Source
   Serif 4, and therefore how much the page reflows when the webfont lands under
   `font-display: swap`. The accepted cost is recorded (`79–82`); its size is not
   derivable.
3. **Whether the two breakpoints coincide with where the content actually
   breaks.** I re-derived 661.3px and 1159.4px from the tokens and both literals
   round correctly, but whether the measure genuinely stops fitting at 661px
   depends on the shipped face.
4. **Whether each screenshot is legible at 498px.** That claim (`style.css:156–160`)
   is the entire justification for the one place the page leaves its measure. I
   confirmed the arithmetic lands on 498.1px; whether the headline the comparison
   turns on survives at that width is a looking question.
5. **How the frame reads.** Whether the 6.8px mat with a 3px inner radius and a
   10.8px outer reads as a deliberate mount or as a mistake, and whether a 3px
   corner is visible at all at that size.
6. **The favicon at 16px.** Whether the 4-unit caret stroke and the 3-unit rule
   resolve, how visible the ~1.5px vertical offset is, and how the oxide caret
   holds up on a dark tab bar at 2.74:1.
7. **`text-wrap: balance` output.** Balance is a browser heuristic; whether it
   improves the six-word h1 at the widths people read it at cannot be derived from
   the source.
8. **The two contrast tables.** `style.css:56–65` states six ratios with a date and
   a method, and an accepted cost for `--rule` at 1.28:1. I re-derived `--margin`
   against white and black by hand (5.98:1, 3.51:1) and `--flag` against black
   (2.74:1) and they hold, but the six page-level figures need a tool against
   rendered text, and the Craft axis excludes contrast by charter.
9. **Whether the footer's 40px target overlaps anything.** I computed it extends
   about 10px above a 19.7px line into a 13.6px gap, so it should not reach the
   paragraph above. A render settles it.
10. **Where the scrollers actually engage.** I calculated `.command` overflowing
    below roughly 340px of content width and `.findings` below its 552.5px
    `min-width`. Both are estimates from monospace advance widths, not measurements.
11. **The dark theme as a whole.** `style.css:203–212` says both themes were
    rendered and looked at on 2026-08-18, and that `--flag` needed a different
    value rather than the same one. Whether the lifted oxide reads as the same role
    is a judgement only a render supports.
12. **Anything the browser reports.** Console errors, whether the Google Fonts
    request resolves, whether `og.png` and `mark.svg` resolve at the canonical
    origin, and whether the published origin serves a 404 page or a `robots.txt` —
    all out of scope by the skill's own charter, and the last two also outside
    `site/`.
13. **`index.html:89`'s "twelve".** Unverifiable within scope, since `fixtures/`
    was excluded from this run. Recorded as *Findings the catalog has no tell for*,
    item 2, because the page's own source rule (`inventory.md:3–4`) says it should
    have been checkable from `inventory.md` alone and it is not.

---

## Counts

| | |
|---|---|
| Tells fired | 2 — W5, W6 |
| Declines (a) — Signal never matched | 27 |
| Declines (b) — a clause forgave a real thing | 3 — F2, F8, F10 |
| Declines (c) — condition arose, Fix applied | 17 |
| Tells declined as not crossing to this stack | 2 — A10 (licensed), F11 (mine) |
| Findings with no tell in the catalog | 8 |
| Fix clauses applied in part, unreportable | 2 — F3, F5 |
| Rules supplied | 22 |
| Findings cut for length | 0 |
