# anti-slop craft — `fixtures/clean-dashboard`

**0 of 15 fire.** Ten declines at state three, four through door one, and
**exactly one exemption**.

> "On this tree only C4 has a genuine failing instance that a clause releases.
> Every other decline either never had a condition to fail or had one and passed
> it, and calling those exemptions would invent fourteen failures that do not
> exist."

That ratio is the repair from the last round working. Two earlier rounds
produced runs labelling most declines as door-two exemptions.

## The three new tells

**C13 declines at state three.** Clause 3 fails: `motion-reduce:transition-none`
is on the element that moves. The run noted clause 2 is true only vacuously —
there is no stylesheet in this tree to hold a `prefers-reduced-motion` block, and
`motion-reduce:` compiles to exactly that block, so "read against the built CSS
rather than the source, clause 2 is false too."

**C14 declines through door one** — no async boundary with a distinct pending
branch, no content image. The card seeds its state from a prop, so it renders its
full shape at first paint and the refresh swaps a string inside a laid-out box.

A nearest miss the run reported rather than buried: the failure message is
materially longer than the period line and can wrap, growing the card after a
network outcome. Ruled outside branch one because the branch says *pending* and
this is an error state. "A stricter auditor could count it; I say so rather than
hide it."

**C15 declines at state three**, one breakpoint at the two places the shape
actually changes.

## C1's impasse, reproduced with locations

The run took reading A — the first sentence is a necessary gate — on two grounds
from the catalog rather than from taste: SKILL.md's conjunction convention, and
the Signal's own record that the sum-only rewrite was drafted and withdrawn.

Under reading B it showed the work: **C1 fires twice**, at `app/page.tsx:93` and
`components/table.tsx:34` — a 5px control inside a 12px panel at 20px of padding,
where 12 ≠ 25 and 20px does not clear the 24px release.

> "The reader should still know this tree sits exactly on the fault line the
> Signal describes, and that a future round which measures the repair may well
> come back and fire on `app/page.tsx:93`."

## Three comments in this fixture claim more than its code does

**`app/page.tsx:51-54` — the breakpoint comment, written yesterday.** It says the
width was "chosen because the content breaks there, not because the framework
offers five." The code uses `sm`, which is Tailwind's default 640px, and the
theme declares no `screens` key.

> "The width was **taken** rather than measured and declared. C15's Fix asks to
> 'declare the widths the content actually changes shape at', and this tree
> declares none. The comment claims the discipline; the theme does not show it."

**`tailwind.config.ts:14-15` — `12 = 5 + 7`.** True at one of the five places
`rounded-panel` is used. At the other four the padding is 20, 24, 27 or 32px.
"The comment states the rule as though it governed every panel." Third
independent report of this.

**`components/table.tsx:21-22` — "the theme's 7px inset."** Literally accurate,
but composed with the panel's own `px-5` the button sits 27px from the edge, so
the 7px is decorative rather than load-bearing there.

**And one comment addresses the auditor rather than a developer** —
`app/page.tsx:94-97` names the tell and the door it wants exercised. It did not
move the verdict; the run reached the same 2-against-1 count without it. "But a
reader should know their source tree contains a note written for whoever audits
it."

**No comment moved a verdict.** "Remove every comment from this tree and the
fifteen verdicts are identical."

## Rules supplied

**C2 needed a magnitude**, which SKILL.md records as missing. The run measured
the glyph's ink centre at about one unit off in twenty and supplied: *an offset
counts when it reaches the size of the correction the tell itself prescribes* —
the Fix says "typically two pixels". Under a zero-magnitude reading C2 fires here.

**C13 needed "any animated element" scoped** to elements that move rather than
elements that transition a colour. On the broader reading the stock-derived
button is a failing instance and C13 still declines, but through door two instead
of state three. "The outcome is a decline on both readings; only the label
changes, and I have named which one I took."

**C14 needed the ruling that an error state is not a pending state.**
