# anti-slop surface — `fixtures/slop-dashboard`

**6 fire, 6 decline.** A1, A3, A4, A5, A6, A10 — exactly the six expected,
nothing off-row. A11 and A12, both read for the first time, both decline.

## The four evidence places, checked before anything fired

All four shut: an empty `theme.extend`, a four-line stylesheet with one keyframe
and no `:root`, no tokens file, primitives unmodified, and **zero comments in
twelve files**. Every decline below is on a Signal's own clauses.

## What the broadening did, measured

**A7 is the clearest case of a broadening working.** The clause "the library does
not matter — lucide, Heroicons, Font Awesome or an inline SVG all read the same
on the page" is what brought an inline SVG into A7's field of view at all; a
Signal keyed to library imports would never have looked at it. Having reached it,
every decoration clause let it go.

> "The broadening widened what gets *examined* without widening what gets
> *convicted*, which is the shape a broadening should have."

**A5's rewrite removed a false citation it used to invite.** Grepping for `Inter`
in this tree returns two hits: `setInterval` and `clearInterval`. "A tell that
names a typeface by name will produce this false citation on any polling
component, and A5's actual finding is the branch after the comma."

## The conjunction convention decided three outcomes, all toward restraint

| Tell | Conjunctive | Disjunctive |
|---|---|---|
| A8 | declines — the hero clause fails on three of four parts | **fires** on the three-card grid |
| A11 | declines — clause 1 fails on both halves | **fires** on "no duration declared" |
| A12 | declines — no stacking value exists at all | **fires** on "no scale, no variable, no comment" |

## The two new tells

**A11 declines, and the run was explicit about the temptation.** Clause 2 is a
clean hit — no duration in the theme, no motion property, no tokens file — and
this project obviously has no motion system. But A11 fires on *one value stretched
across distances an order of magnitude apart*, and the tree has two values (150ms
and 200ms) across two changes that are both essentially stationary. "Firing on
clause 2 alone is firing on half the tell."

One wrinkle recorded: A11's threshold is **uncomputable for its own example**. A
colour change travels zero, so no ratio exists against it, and the clause gets
decided by the words "a full panel translate" rather than by arithmetic.

**A12 declines — not one stacking value exists in the tree**, and the exemption's
second door names it verbatim. But the run flagged a structural risk:

> "Clause 2 is true of this tree, and it will be true of almost every unfinished
> project, since 'no z scale, no variable, no comment' is a default state rather
> than a symptom. It survives only because it is grammatically subordinated to
> clause 1 by the word 'with.' An auditor reading the two halves as independent
> fires A12 here — a false positive on a tree that contains zero stacking values."

## A structural finding about counting clauses

**A10's counting clause passes the convention where A3's fails**, and the reason
is portable:

> "A10 passes, because its threshold is written down in the Not-slop-when — 'A
> single importer among a dozen hand-rolled ones does not earn the exemption.'
> **This is the pattern the other counting clauses could copy — the threshold
> does not have to live in the Signal, it just has to live somewhere in the
> tell.**"

## Rules supplied

**A1 clause 2 needed a bridge.** `bg-primary` in the untouched install is neither
a framework default called by number nor a hex typed at a callsite — a third case
the clause does not list. The run supplied that a semantic name arriving inside
an unmodified install, resolving against a property nobody defined, is not a
named colour of the project's.

**A5 clause 2 could flip the tell.** Two weights render: `font-bold` at twelve
sites and `font-medium` once, from the stock button. The run supplied *count
weights doing authored emphasis, not every weight token present.* "The
alternative reading flips the tell: two weights present would fail clause 2, and
A5's conjunction would decline."

**A rule deliberately not supplied.** A9's exemption is unmet — this tree ships
zero reduced-motion handling — and the run refused to reason backwards from that:
"A `Not slop when` is only reached if the Signal fires, and A9's Signal fails both
its clauses. Reading an exemption backwards would have produced a false positive."
