# anti-slop — full audit: `built-wickfield`

Target: a landing page built from a brief by `anti-slop-build`, audited blind by
an agent that had not seen the build skill, the fixtures, or this repository's
records.

**Verdict** — A page that was themed *and* looked at: 39 of 41 tells decline against code sites rather than against the comments that predict them, two molds match the surface exactly and are broken by their own stated break conditions, and what survives is one systemic absence (no `text-wrap` on any of 16 headings and text blocks) plus one hole in an otherwise-argued abstention (`og:title` and `og:description` carried out of `index.html` alongside the image the comment actually reasons about).

## Findings

```
ROOT
C4  No text-wrap on the shared h2/lead   src/components/Section.tsx:31   fixes 5 of 16 sites

THEN
F4  og:title + og:description absent     index.html:32
C4  The h1, sized to wrap, unbalanced    src/Hero.tsx:33
```

No findings were dropped. Under the normal ten-finding cap nothing here would have been cut — three findings fit.

### C4 — root: `src/components/Section.tsx:31`

`<h2 className="font-bulletin text-section max-w-measure">` and the lead at `Section.tsx:33` are the only heading and lead in the tree; they render three and two times respectively. Neither carries `text-wrap: balance` or `text-pretty`. Grepped the whole tree for `text-balance`, `text-pretty`, `text-wrap`, `balance` and `pretty`: zero hits in `.tsx`, `.ts`, `.css` and `.html`.

- **Headings of four words or more: 4 sites, 0 carry.** `Hero.tsx:33` (11 words), and `Section.tsx:31` rendered with "You set the band. Wickfield holds it." (`Holding.tsx:49`, 7 words), "It also tells you when it fails." (`WhenItBreaks.tsx:33`, 7 words), "$18 per zone per month." (`Pricing.tsx:120`, 5 words).
- **Short text blocks: 12 sites, 0 carry.** `Hero.tsx:37`, `:47`, `:62`, `Section.tsx:33` ×2, `Holding.tsx:61` ×3, `WhenItBreaks.tsx:47` ×2, `:53`, `Pricing.tsx:207`.

Neither door opens. Door one fails 16 times over. Door two fails at 0 against 4 and 0 against 12. This is the pattern, not an oversight.

### F4 — `index.html:32`

`og:title`, `og:description` and `og:image` are all three absent. The only `Not slop when` is "The app is internal and its links never leave the organization" — this is a public marketing page with a price and a signup CTA.

The abstention at `index.html:32-38` argues the case for omitting the **image** and does it well ("the only honest one would be a photograph of a farm this product has not been on"). It then carries `og:title` and `og:description` out with it and gives no reason for either. Those two would restate `index.html:21` and `:29` verbatim — strings the same file asserts are true. On X/Twitter, absent any `og:*` or `twitter:card`, no card renders at all.

### C4 — `src/Hero.tsx:33`

The h1 is 57 characters across two sentences at a fixed 33px inside a 544px `max-w-measure`. `tailwind.config.ts:116` records that the step is "set to wrap to two lines," and `:123-126` records 33px held "at every width" with no breakpoint bump. So the wrap is designed, its width is variable, and its balance is unmanaged. At 375px the h1 runs to three lines; near 460px the last line reduces to a single word. The comment does not close this tell — it is the clearest evidence the wrap was anticipated and the break point was not.

## Tally

**2 of 41 fire.** Surface 0/10, Craft 1/12, Words 0/7, Finish 1/12.

Every decline was grounded in a code site checked directly, not in a comment predicting it.

### Surface — 0 of 10

- **A1** declines. Ten colour custom properties at `index.css:46-71` and `:87-109`, and `tailwind.config.ts:37-59` *replaces* `theme.colors` with five named product colours, so no framework default is reachable by number. See supplied-rule 1.
- **A2** declines. Zero gradient utilities tree-wide.
- **A3** declines. Two radii differentiated by scale: `control: 0.375rem`, `panel: 0.75rem`.
- **A4** declines. `boxShadow: {}` at `tailwind.config.ts:226` — no shadow utility compiles.
- **A5** declines. Five-step scale replaces the defaults; two named families; emphasis is `font-semibold`.
- **A6** declines. Spacing is proportional to level: 96/48/24/12/6 by nesting depth. No single value repeats down the hierarchy.
- **A7** declines. Zero `<svg`, `lucide`, `Icon` hits in `src/`.
- **A8** declines. No pill badge, one button not two, a `<dl>` rather than a three-card grid, one figure-sized number.
- **A9** declines. `transition-colors duration-state` (120ms), zero `hover:scale-*`, a real `prefers-reduced-motion` block at `index.css:144-153`.
- **A10** declines. No `components/ui/` and no installed primitive library to bypass.

### Craft — 1 of 12

- **C1** declines. One nested rounded pair and it is concentric: `rounded-panel` (12px) with `p-tight` (6px) around `rounded-control` (6px). 12 = 6 + 6, verified against the config.
- **C2** declines. Zero icons. The stepper glyphs are U+2212 and U+002B, both symmetric, neither paired with text.
- **C3** declines. Two state-bound numbers, both carrying `tabular-nums`.
- **C4** **fires.** 16 sites, 0 carry.
- **C5** declines. `min-h-target` (40px) on every control.
- **C6** declines. Zero `<img>`.
- **C7** declines. Nothing mounts or unmounts.
- **C8** declines. Zero `@keyframes` / `animate-`; every interactive state runs on a transition.
- **C9** declines. 10 `hover:` and 10 `active:`; every hover-bearing control carries its twin.
- **C10** declines. No `dark:` utility — theming runs through custom properties, and all ten tokens are redeclared at `index.css:87-109`, including the separator `--silt-rule`.
- **C11** declines. `disabled={disabled}` and `disabledLook` spread at the same callsite.
- **C12** declines. The one `wilt-mark` use colours a full sentence.

### Words — 0 of 7

- **W1** declines. "Price it for your farm", "Set up your zones" — each names an outcome.
- **W2** declines. No toast/dialog/confirmation pair exists to break.
- **W3** declines. No list can be empty; both are module-level literals.
- **W4** declines. One error string, developer-facing, naming the failure and its location.
- **W5** declines. Zero occurrences of webhook, entity, instance, sync, config, ID.
- **W6** declines. Every capability claim maps to a fact; the one performance number is attributed in the same sentence and hedged twice. **Boundary:** this decline rests on `INVENTORY.md` being a truthful record of a real brief. If those facts are invented, W6 fires and nothing in the tree would reveal it.
- **W7** declines. Counts differ by section — 3, 2, 4.

### Finish — 1 of 12

- **F1** declines. `<html lang="en">`.
- **F2** declines. Product's own title, one route.
- **F3** declines on its Signal. A description is present and is not a framework default — **but it is 201 characters against the Fix's 120-160 range.** See supplied-rule 2.
- **F4** **fires.**
- **F5** declines. Hand-drawn theme-responsive SVG mark. Missing `apple-touch-icon` and manifest live in the Fix, not the Signal — supplied-rule 3.
- **F6** declines. Exactly one `<h1>`, no level skipped.
- **F7** declines. Zero `<img>`.
- **F8** declines on the clause: no routing at all, served from a single path.
- **F9** declines. One route.
- **F10** Signal matched, closed by the clause: fewer than ten pages, all reachable from navigation.
- **F11** declines. Two `.map(` calls, both keyed on the data's own identifier, neither on index.
- **F12** declines. Zero placeholder strings, no `href="#"`.

## Rules I would have had to supply, and did not

1. **A1.** Tell: *"`tailwind.config` declares no `theme.extend.colors`."* Rule needed: "…or `theme.colors`." This config replaces `theme.colors` rather than extending it, so the Signal's first conjunct is *literally satisfied here*. It changed nothing — the other conjuncts fail — but flagging it because the reverse case is real: **a project that replaced `theme.colors` with the framework's own palette would slip past this Signal's first clause on a technicality.**
2. **F3.** The 120-160 range is in the **Fix**, not the Signal. Rule needed: "a description outside 120-160 characters counts as absent." Not supplied. The 201-character description is reported as fact.
3. **F5.** The `apple-touch-icon` and manifest are in the **Fix**. Rule needed: "a favicon without them counts as absent." Not supplied.
4. **A8.** Tell says *"a three-card feature grid."* Rule needed: "three parallel items in any layout." `Holding.tsx:50` is a `<dl>` of `border-t` rows — no grid class, no card treatment, no radius.
5. **F12.** Rule needed: "a link to a route the tree does not serve." `Pricing.tsx:204` is `href="/signup"` — notably *not* `href="#"`, the enumerated item nearest to it.
6. **F8.** Rule needed: "…and links to no path it does not serve." The clause is about the application's own routing, not its outbound links.
7. **C2.** Rule needed: "any glyph whose ink sits off its box center."
8. **W6.** Rule needed: "a quantifier stronger than its recorded source counts as unbacked."
9. **The stepper ceiling.** No tell covers a control presenting an invented limit, or a disabled control that refuses without explaining why.
10. **A10.** Rules needed: "any extracted component" for "the primitives," and "a two-class span" for "a primitive."

## The prose

**Volume.** Excluding `INVENTORY.md`, the tree is 1,100 non-blank lines of which **622 — 57% — are comment.** `control.ts` is 85% comment, `tailwind.config.ts` 71%, `index.css` 67%. The comments are arguments for the code, in a consistent house vocabulary (DERIVATION, SUBTRACTION, ABSTENTION, ACCEPTED COST, PLATFORM FACT).

**Did any of it move a verdict? No — and in two places I had to actively refuse it.**

- **`index.html:32-38` tried and failed.** The single most verdict-shaped comment in the tree: a labelled ABSTENTION, well argued, sitting exactly where F4 fires. It argues the image and only the image, then silently takes `og:title` and `og:description` with it. F4 fires anyway.
- **`tailwind.config.ts:116` tried and made things worse.** "banner … set to wrap to two lines" reads as a designed wrap. C4's clause is a count, not a record of intent — and knowing the wrap is deliberate makes the unmanaged break point a stronger finding, not a weaker one.
- **Every other decline is anchored in code.** Had every comment been stripped from this tree, my tell-by-tell result would be identical.

### Comments that claim something the code does not do

1. **`Pricing.tsx:27-31` — the stepper ceiling. The most substantive.** The ACCEPTED COST says 24 was chosen "rather than inventing an upper bound the brief does not have and presenting it as a limit of the product." The code does exactly the thing that sentence names as the alternative: `CEILING = 24`, the `+` disables at `:167`, `$432 / month` is reachable. `INVENTORY.md:56` forbids any number other than a listed set, and neither 1 nor 24 is on it. A grower at 30 zones presses `+`, it stops, and nothing says why. **This fires no tell and is the strongest finding in the tree that the catalog does not carry.**
2. **`Pricing.tsx:53` and `control.ts:13` — "the two Actions."** There are **three** rendered: `App.tsx:47`, `Hero.tsx:52`, `Pricing.tsx:204`. `Action.tsx:28` gets it right, so the tree contradicts itself in two files.
3. **`Panel.tsx:11` — "the same six classes."** It emits four.
4. **`Panel.tsx:11` and `control.ts:7-8` — "Two callsites is the threshold."** Stated twice as the project's extraction rule and broken in a third file: the wordmark span is typed identically at `App.tsx:46` and `:68`. `control.ts:8` even states the harm — "the second decision is free to drift from the first."
5. **`index.css:31-34` — "the two tinted backgrounds."** `wilt-wash` is declared in both themes and exposed in the config, and **no component uses it.** Worse, `index.css:26-29` records a SUBTRACTION removing a sixth colour on exactly this ground — "nothing on it would use the colour" — and the same test was not run against `wilt-wash`.
6. **`control.ts:37-38` — "in the same string."** In source, hover and active are separate string literals in an array that is `.join(' ')`ed. True of the runtime value, not of the source a maintainer edits.
7. **`Holding.tsx:33` — "Most farms run six to twenty."** The record says "typical farm, 6 to 20". "Most farms" is a population claim the record does not supply. `Pricing.tsx:121` states the identical fact correctly.
8. **`index.css` — the contrast figures run optimistic.** Recomputed: claimed ~6.9:1 computes 6.61; claimed ~7.5:1 computes 7.38; claimed ~6.4:1 computes 6.09; claimed ~7.7:1 computes 6.94. `index.css:101` says ~1.5:1 where it computes **2.51:1**. Every value still clears the threshold it is invoked to clear, so no verdict moves — reported because the comments present these as measurements.
9. **`tailwind.config.ts:9-10` — "do not compile."** True, but an unrecognised Tailwind utility is silently dropped, not raised. A callsite that types `p-4` gets zero padding and no warning. It is a guardrail that fails quietly.
10. **`INVENTORY.md:130` vs `tailwind.config.ts:65-66`.** The inventory files `fontFamily` under Root 2; the config attributes the serif to Root 3.

## Real, and covered by no tell

- **`Pricing.tsx:204` — the terminal CTA points at `/signup`, which the tree does not serve.** Flagged as an unverifiable external dependency rather than a defect: a real product would plausibly host signup separately. It is the one link whose destination cannot be checked.
- **`App.tsx:35` — the skip link targets `#holding`, the second section**, so the first keyboard action jumps past the `<h1>`, the price and the primary CTA.
- **`Pricing.tsx:147` — a double announcement.** `<output>` carries an implicit ARIA `status` role and `:178` adds an explicit `aria-live="polite"`.
- **`Pricing.tsx:183` — an optical inset that inverts on wrap**, visible near 300px or at a raised default text size.
- **`WhenItBreaks.tsx:32` — `id="failures"` is never linked.**

## On the molds

Two matched the surface and both broke on their own stated break conditions.

**The cream editorial** describes what renders almost exactly — `--loam-field: #f6f2ea`, Georgia headings, terracotta `--wilt-mark`, 1px hairline rules. Its break condition, *"The palette came from the subject itself,"* is satisfied at `index.css:11-25`, where all five colours derive from soil, silt, furrow, water and wilt. Its predicted tells, A8 and W6, both decline.

**The themed and unlooked-at** matches on its first half and fails on its second: it predicts *"no concentric radius, no `tabular-nums`, no pressed state, a dark theme declared on the background and nowhere else,"* and all four are present and correct. Its break condition — *"Any craft detail handled correctly in more than one place"* — is met four times. Of its five predicted tells, only C4 fires.

That C4 survives the broken mold is the point `molds.md` makes itself. The mold breaks because someone looked at four other things. C4 stands because, on its own count, 0 of 16 sites carry the property — an absence, not the oversight the broken mold would imply.
