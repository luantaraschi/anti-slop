# anti-slop craft — `fixtures/slop-dashboard`

**Verdict** — nobody opened this page a second time: not at a second width, not
in the second theme, not with the reduced-motion setting on, and not after
pressing anything.

```
ROOT
C10  Dark mode stops at the body       app/layout.tsx:8
C15  One width, no fallback anywhere   app/page.tsx:45
C1   Every corner the same corner      app/page.tsx:54
C8   Panel opens on a keyframe         components/filter-panel.tsx:12  fixes C7

THEN
C3 · C12 · C11 · C13 · C9 · C5 · C4
```

**11 fire, 3 decline** (C2, C6, C14). Nothing cut.

## The three new tells, all measured for the first time

**C13 fires, and needed nothing supplied.** All four clauses walked and held —
one keyframe animating on a user action, no `prefers-reduced-motion` in the one
four-line stylesheet, no `motion-reduce:` variant anywhere, no preference hook.
Both doors shut, the second one completely: the preference is honoured in zero
places, so there is no "somewhere" for this surface to have fallen outside of.

> "Every clause is greppable, the three forms in clause 1 are marked as
> alternatives by their own punctuation and sense, and the doors are decidable
> from the same greps. It is the cleanest tell in this reading."

**C15 fires, and needed nothing supplied** once the Fix's own wording settled the
one ambiguity — whether Tailwind's five inherited defaults count as "declared in
the theme". They do not, because the Fix names them as the thing being argued
against. Three of the Signal's first-group clauses hold where one would do, and
all three doors are shut.

Concrete cost measured rather than asserted: on a 380px phone the page padding
plus the grid padding plus two gaps leaves about 78px per stat card, each card
spends 48px on its own padding, and a 24px figure has about 30px to live in.

**C14 declines — branch two never matched, branch one arose and the Fix is in
place.** The poll seeds its state with real values, so the cards render at final
size from first paint and the fetch replaces numbers inside a box that never
changes shape. That is C14's own Fix already applied.

It also names what C14 does not catch: the empty-versus-populated swap in the
table, where one line of text becomes a bordered box of rows. "A height change
that costs the reader their place in exactly the way the Principle describes,
and C14 as written does not catch it," because C14 says *pending* and an empty
state is not a pending one.

## What the C10 rewording changed

Not the verdict — this project uses the exact syntax the old wording named, so it
would have fired either way. What changed is what the auditor went to look at:

> "Clause 1 is now a claim about a *theme* rather than about a *class prefix*,
> which is what let me check `darkMode` in the config and establish that this
> second theme is on by default for a large share of readers — a fact the old
> framework-specific wording would not have prompted me to look up."

## Rules supplied, and two verdicts that sit on a knife edge

**C1 is one pixel from silence.** Its door opens when padding "exceeds 24px", and
every one of the seven pairs uses exactly 24px. "One step up in the padding scale
and C1 goes silent on this project." No rule supplied; the fragility is in the
tell.

**C2 declined on a boundary case the catalog already predicted.** The refresh
glyph's ring is dead-centre and its arrowhead pushes the full bounding box 1.5
units high. Literal Signal fires; the Principle declines, because the eye finds
the ring. The run chose the Principle on the axis's own admission ticket and
named itself as the coin flip SKILL.md records: "A different auditor reading the
Signal literally rather than through the Principle would fire C2 here, and I do
not think they would be wrong on the text."

**C7's `display: none` gap, reported for the third independent time.** The panel
is a conditional unmount, which is more abrupt than `display: none`, and the
tell names only the CSS form. "In a stack where conditional rendering is the
default way to show and hide anything, that gap will come up on nearly every
React tree C7 is ever run against."

**C3 disagrees with itself and carries no warning.** Its first sentence lists a
numeric table column as a site; its counting sentence excludes it, because a
static column is neither bound to state nor refreshed. "Structurally the same
defect C1 documents about itself in its own Signal. C1 carries that warning in
its text; C3 has the same problem and carries no warning."

**C5** needed the rule that an `aria-label` is not a text label, since it renders
nothing and adds no area. **C4** needed nothing but fired through a door that
could not open — one text block, zero carrying, the population-of-one failure
already logged.

## The paragraph that did the most work

> "On C9 and C11 the second door would plausibly have opened on the stock
> button, which carries `disabled:opacity-50` and six hover variants. The craft
> preamble forecloses both by name... It also disposes of the `size: icon`
> variant that might otherwise have counted toward C5 — 'a declared capability
> that nothing renders is not an instance'. **That preamble did more work than
> any other paragraph in the reference, and it needed no interpretation from
> me.**"

## A bookkeeping error this run exposed, in the record rather than the catalog

`slop-dashboard`'s expect row does not list C15, because the row was written
from a grep that matched `sm:` and `lg:` as **cva object keys** in the stock
button rather than as responsive variants. The tree has zero responsive
treatment. C15 fires correctly and the row is what was wrong.
