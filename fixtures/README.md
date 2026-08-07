# Fixtures

Four hand-built specimens the catalog is calibrated against: two products, a
dashboard and a landing page, each built twice: once as work nobody finished,
once as work somebody decided. Run the skill against a fixture and compare what
it reports with the row below.

Read each directory as a shipped product, not as this repo's test code. The
tells that exempt a test fixture, a Storybook story, or a documentation sample
(F12 says so in as many words) do not apply inside these four directories. A
placeholder in `slop-landing` is a placeholder on a published page.

An `expect` row lists the ids the fixture was built to carry: every one of them
has code in that directory a reader can point to as its cause. A `forbid` row
lists the ids that must not fire: each has visible evidence of intent, such as
a named palette in `theme.extend`, a declared type scale, or a `components/ui/`
that differs from stock. A tell that fires anyway is a tell to fix, not a
fixture to fix.

| Fixture | Kind | IDs |
|---|---|---|
| `slop-dashboard` | expect | A1, A3, A4, A5, A6, A10, C1, C3, C4, C5, C7, C8, C9, C10, C11, C12, F1, F2, F11, W3 |
| `slop-landing` | expect | A2, A7, A8, W1, W6, W7, F2, F3, F4, F5, F12 |
| `clean-dashboard` | forbid | A1, A3, A4, A5, A6, A10, C1, C3, C4, C5, C7, C8, C9, C10, C11, C12, F1, F2, W3 |
| `clean-landing` | forbid | A2, A4, A7, W1, F3, F4 |

`clean-landing` is the sharpest of the four because it carries the dangerous
patterns on purpose: a purple gradient and a `shadow-xl`, both drawn from
colors named in its theme and each used exactly once. A4 is the one whose
exemption the corpus exercises mechanically: its signal names `shadow-xl`
outright, so any implementation that greps lands on the exemption and has to
decline there. A2 is exercised only by a reading auditor. Its signal matches
`from-purple-*` paired with `to-blue-*`, and this gradient is `from-dusk to-ink`
off the theme's own colors, so a grep-shaped implementation declines A2 before
it ever consults the exemption. The blind run did read it, and declined the
gradient by name.

Do not tidy a `slop-*` fixture. The missing `lang`, the keyless `.map()`, the
leftover `Your Company` and the untouched shadcn primitives are the deliverable.
A `slop-*` fixture that has been cleaned up tests nothing.

## What the corpus does not cover

Nine of the twenty-nine tells appear in no row at all, so nothing here exercises
them in either direction: A9, W2, W4, W5, F6, F7, F8, F9 and F10. Six more
appear only on an `expect` row, so the pattern is demonstrated and the exemption
has no counterexample: A8, W6, W7, F5, F11 and F12. That is fifteen of
twenty-nine with no `forbid` coverage, which means just over half of the "Not
slop when" clauses have never been tested against a fixture built to disarm
them, and that clause is the field separating this catalog from a linter. F10's
absence is a decision with a reason, recorded below; the other eight are a gap.

## Known tensions

Three places where a fixture and the catalog disagreed. Two were open questions
that the calibration below settled, in both cases by changing a tell rather than
a fixture. The third is a standing exclusion and did not move.

**F10, and what a source specimen can say.** These four have no package manager,
no build step and no binary assets. The absence of a sitemap and a robots file is
observable here, the same way the absence of a favicon is observable in
`slop-landing`. What is not observable is the difference between a site that
shipped without them and a specimen that never had a build to generate them, so
F10 is out of scope for all four: not because the format cannot express an
absence, but because this particular absence carries no signal.

**F2 on `slop-landing`, settled 2026-08-07.** It keeps Vite's
`<title>Vite + React</title>` while being a single-route page, which was F2's
signal and F2's "Not slop when" at once, and its row did not list F2. The blind
run reported F2 there anyway, on the strength of the surviving scaffold title
alone, route count notwithstanding. That reading won. F2's exemption now covers a
one-route app that wrote its own title and never covers a framework default, and
F2 is on the row. `clean-dashboard` still disarms F2 on its per-route title
template, and `clean-landing` on a single title that names the product.

**A10 on `slop-dashboard`, settled 2026-08-07.** A10's signal used to be a
conjunction: a `components/ui/` identical to stock shadcn *and* no domain
component anywhere. `slop-dashboard` satisfies the first half
(`components/ui/button.tsx` and `card.tsx` are stock, not a line changed) but not
the second, because `StatCard` and `InvoiceTable` are domain-named. Reading the
conjunction literally, the blind run declined A10, and said in the same breath
that those two components never reuse the primitives they sit next to. That
observation settled it. They are domain-named, not domain-shaped, and a file
called `StatCard` that re-types the classes of the `<Card>` beside it is not
evidence anyone decided anything. The first repair made the signal the untouched
`components/ui/` on its own and moved the domain-component clause into "Not slop
when", restated in terms of use rather than naming.

A second pass, the same day, found that split backwards. It left A10's four
fields arguing with each other: the signal fired on an untouched
`components/ui/` while the exemption released any project whose components
merely imported their primitives, so byte-identical stock shadcn that everybody
dutifully imported came out exempt. And "imports the component instead of
re-typing its classes" is evidence of ordinary React, not evidence anyone
decided anything. A10 is now the tell the re-run below actually reached:
primitives installed and then duplicated by hand. The signal is the use gap,
counted as import sites against hand-rolled ones, and the exemption asks for
both halves at once, that the primitive is used and that the primitive itself
carries a decision.

What rode on the answer was `clean-dashboard`, which had leaned on "no domain
component anywhere" to disarm A10. It survives every version of the tell.
`ui/button.tsx` is reworked and records the choice at `:7-12`, in the theme's
radius and colors, with two variants and the stock `ghost`, `link` and
`destructive` deleted. It is imported and rendered at `components/table.tsx:4,41`
and `app/page.tsx:7,54,83`, and the fixture holds no raw `<button>` anywhere, so
the signal has nothing to fire on. `slop-dashboard` still fires it: `<Card>` is
imported once (`app/page.tsx:25`) against four hand-rolled copies of its classes
(`components/stat-card.tsx:3`, `components/table.tsx:6`, `app/page.tsx:29`,
`app/invoices/page.tsx:11`), and `<Button>` once (`app/page.tsx:18`) against a
raw `<button>` at `app/page.tsx:34`.

## Last calibration

**2026-08-07.** Four blind runs, one agent per fixture. Each agent received only
`SKILL.md`, the `references/` files SKILL.md names, and its own target directory.
None could read this file, the repo root `README.md`, or any other fixture, and
none knew the expected answer. Each was told to read its target as a shipped
product.

The counts below are what those four runs produced, before the repairs they
caused. A score taken after the fixes would be a score of the fixes.

- `slop-dashboard`, 9 of the 10 expected ids reported. A10 missing.
- `slop-landing`, 9 of the 9 expected ids reported, plus F2 and W6, which the row
  did not list at the time.
- `clean-dashboard`, 0 of the 9 forbidden ids leaked. The run reported nothing at
  all.
- `clean-landing`, 0 of the 6 forbidden ids leaked. The purple gradient and the
  `shadow-xl` were each declined by name, which is the result this corpus was
  built to get.

Three repairs came out of the three mismatches, none of them to a fixture:

- A10's signal stopped being a conjunction, and its exemption started asking
  whether a component uses the primitives rather than how it is named. A later
  pass rebuilt the whole tell around that use gap; see Known tensions above.
- F2's exemption stopped covering a surviving framework default, so a one-screen
  app no longer gets to ship `Vite + React` in the tab.
- `slop-landing` gained F2 and W6 on its row. Adding W6 exposed that its signal
  was a phrase list rather than a pattern: not one of the five phrases it named
  appears anywhere in the fixture, while "The platform for teams that move fast"
  (`src/Hero.tsx:14`) and "Built on infrastructure your team already trusts"
  (`src/App.tsx:31`) are both really there. The tell was widened: the signal now
  names the pattern, a capability, speed or trust claim with no fact behind it,
  and the five phrases are examples of it rather than the whole of it.

**The A10 repair was re-tested blind.** A fifth run went at `slop-dashboard` by
the same method, with a fresh agent that knew neither the expected answer nor
that anything had been changed. It reported all ten expected ids, A10 among them,
and reached A10 on its own reading: "`Card` and `Button` reimplemented raw
wherever they're actually used." That is the use framing the repair moved into
the tell, arrived at independently. That run is the example output in the repo
root `README.md`. The score above stays the pre-repair one, because a score taken
after the fix is a score of the fix.

### Recorded for v1, not fixed

**F3, F4 and F9 are unstable between runs on the same fixture.** The first
`slop-dashboard` run declined F3, F4, F9 and F10 as a group. The reasoning is
written down in the `clean-dashboard` run, which declined the same cluster and
said why: nothing in the tree proves an auth layer, but the product itself, a
per-workspace invoice ledger that keeps referring to "this workspace", is
unambiguously a private business tool, and the run read that domain signal as
satisfying the exemption rather than as an absence of evidence. The
`slop-dashboard` run made the same inference on the same cluster without spelling
it out. The re-run fired F3, F4 and F9 instead, grouping them under F2 as one
root: "One metadata block covers both routes, with no description or canonical."
Same fixture, same catalog, opposite verdict. The tells are not wrong, but their
exemptions turn on a fact, is this page indexed, that source alone does not
settle, so two careful readers land in different places. A rendered pass against
a live URL settles it outright, and a rendered pass is out of scope for v1.

**The output shape drifted from what `SKILL.md` specifies.** `SKILL.md`'s Output
section shows a plain-text block with aligned columns; the published run produced
markdown tables. That much is cosmetic. The next one is not: Report rules open
with "The verdict is one sentence naming the dominant pattern across axes, not a
summary of each axis in turn", and the published verdict is three sentences that
take Surface, then Finish, then Words in turn. That is the shape the rule names
and rejects, not a matter of length.

What did hold is the ranking: roots separated from the symptoms they cause, each
root declaring which symptoms its fix kills, findings ordered by what fixing them
delivers, and a file and a line on every one. So the run followed the rules that
say how to think and reshaped the ones that say how to present. Both of those
sections describe the output rather than binding it, and the second is the more
expensive of the two, because the one-sentence verdict is what forces a reader to
name a single dominant pattern instead of touring the axes. Recorded rather than
papered over: the example above is the run as it came out, and the gap is
visible in it.
