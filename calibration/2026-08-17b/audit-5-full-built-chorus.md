# anti-slop — full audit: `built-chorus` (expressive landing page)

An expressive landing page built from a brief by `anti-slop-build`, audited
blind. The auditor was asked to be specific about A2 and A4, because a catalog
that cannot tell a decided gradient from a default one punishes expressive
design.

## Verdict

**All 41 tells decline.** 33 because the Signal never matched, 5 because the
condition arose and the Fix is in the code (C1, C4, C5, C8, C9), 3 through a
`Not slop when` clause (A10, F8, F10).

No mold matches. *The gradient landing* is broken twice — the gradient is
interpolated from the theme's own hexes and the section count is seven. *The
themed and unlooked-at* is broken by its own stated breaker: concentric radius,
`tabular-nums`, pressed state, wrap treatment and hit-area extension are each
handled correctly, four of the five in more than one place.

## A2 and A4, on the record

**A2 declines on code, not on prose.** The Signal's utilities *do not exist in
this project*: `theme.colors` is replaced, so there is no `purple`, `blue` or
`pink` scale to reference, and `theme.backgroundImage` is replaced too, which
removes `bg-gradient-to-r` and the whole directional default set. `bg-clip-text`
occurs zero times. The gradient that is present reads its stops from a template
literal over the same `palette` object `theme.colors` reads, so they cannot
drift — they *are* the page's colours. It renders at exactly one site.

> "A saturated purple-to-dark gradient on a landing page is not what A2
> measures. What A2 measures is a gradient whose stops came from somewhere other
> than the product, and this one's came from a `const` twelve lines above the
> colour scale."

**A4 declines, and the second conjunct fails by construction.** Zero `shadow-*`
utilities in `src/`. `boxShadow: {}` is **empty rather than absent**, so
`shadow-md`, `shadow-lg` and bare `shadow` do not compile in this project at
all — no element could carry border + shadow + rounded, because the middle term
does not exist. Separation is done by fill, by rule, and by control shape, one
device per site.

The auditor checked the tree's own argument rather than accepting it: blackbox
has a relative luminance of 0.0047, so a black drop shadow against it is a
near-zero delta. And noted that **A4 would decline even if that paragraph did
not exist.**

## Did any comment move a verdict?

> **"No. Not one."**

The auditor ran the counterfactual on every decline that could plausibly have
been argued into place, and concluded:

> **"Delete every comment block in this tree and the audit lands in exactly the
> same place: 41 declines, 0 fires. The comments explain the decisions; they do
> not constitute them. That is the correct relationship, and it is worth saying
> plainly, because the inverse — a tree whose only evidence of a decision is a
> paragraph asserting one was made — is a real failure mode this tree does not
> have."**

It also verified the tree rather than reading it: every default utility the
config claims to have removed greps to zero hits in code; all five stated
contrast ratios recompute to within 0.04; every derived number in the theme
resolves (spacing from the 32px line box, `wide = 650×2 + 64`, `lap = 650 +
2×128`, `panel = card + inline`); and every self-referential count is accurate.

## Two comments that claim more than the code does

1. `index.css` claims no token is defined in it and that every value comes from
   the config. Three do not — an outline width, an outline offset, and a
   reduced-motion duration. The spirit holds and the letter does not.
2. `index.html` claims the theme colour is "the one place a colour is restated
   outside the theme file". The favicon restates three, and says so in its own
   comment. The drift risk is documented in one of the two places; only the
   uniqueness claim is wrong.

**And one absence worth more than either.** In a tree where a favicon carries
eight lines of reasoning, the share image carries none — the only artifact with
no reasoning attached, and the one artifact that is wrong.

## Outside the catalog

None of this is a tell finding. It is what the catalog returning empty does not
cover.

**The header misses the page's own track above 1492px.** Every section and the
footer wrap content in `mx-auto max-w-wide`; the header does not. At 1512px the
wordmark is 10px off the content edge; **at 1920px it is 214px off**. The same
word in the same face appears at the top and bottom of the page and does not
line up with itself at the most common desktop width there is.

> "This is the clearest 'nobody opened the page at this size' defect in the
> tree, it passes `craft.md`'s own admission test — you would find the defect by
> opening the page and looking at it, without reading the code — and **no Craft
> tell carries it.**"

**The share card is set in the theme's fallback faces.** The theme spends a long
paragraph choosing its display face and rejecting Inter by name. The wordmark in
the share image is not that face — it is a neo-grotesque matching **Arial Black,
the first fallback the theme itself declares**. The card was rendered where the
webfonts were not installed, so the brand's first impression in every pasted link
is the identity the theme argued its way out of.

**The share card's wash runs along the diagonal the theme rejected.** Sampled
from the raster: the axis is the box's own anti-diagonal, about 242deg. The
page's own gradient is 118deg, and the theme states why in the same breath — "a
gradient running exactly along the box's own diagonal reads as the box rather
than as light." Anyone who clicks the card and lands on the page sees the light
arrive from the other side.

**A reserved host in two absolute URLs**, recorded honestly in the file as the
deploy step. F12 declines because its Signal names `example.com` and this is
`.example`; the auditor held the literal rather than generalizing the list, and
reported the disagreement here so the decline does not read as a clean bill.

**Two exemptions with an expiry date.** F8 and F10 both decline on "one route, no
routing", and six links already point at routes that do not exist yet. The day
those ship, F8, F9 and F10 all reopen at once.

## Rules the auditor had to supply

Twelve disclosed, of which four were not needed (A3's missing threshold, C2's
missing magnitude, C4's population-of-one, C1's two tests — none reached). Two
are load-bearing:

- **A10's counting threshold.** The tell's only calibration point is its
  counter-example, "a single importer among a dozen hand-rolled ones does not
  earn the exemption". The auditor took its inverse as clearing at roughly 34
  importers against 4. "At, say, 6:5 the tell gives an auditor nothing to decide
  with."
- **W7's ratio for when repeated threes become "always".** Four threes against
  five twos was taken as not-always. "Load-bearing and the weakest thing I leaned
  on. At 6 threes against 1 two the tell offers no number to decide with."
