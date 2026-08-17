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

`clean-dashboard` shares that role now, for a different reason: it carries one
deliberate miss. Five of its six headings carry `text-wrap: balance` —
`app/not-found.tsx:6`, `app/page.tsx:54`, `app/page.tsx:104`,
`app/invoices/page.tsx:13`, and `components/table.tsx:35` all have it. The
"Reminders" heading at `app/page.tsx:92` does not, on purpose: C4's `Not slop
when` clause opens a second door where the condition does arise but the
project already applies the property elsewhere, and a fixture that got every
heading right could only ever exercise the first door, that the condition
never arises at all. `app/page.tsx:92` is annotated in place as the isolated
oversight the second door needs something to be tested against.

That annotation no longer describes what happens. The v2 calibration narrowed
C4 so a heading of three words or fewer is not a site at all, and "Reminders"
is one word. The heading still reads as the deliberate miss it was written to
be, but the tell now declines it before the second door is ever consulted, so
the corpus has lost its only C4 door-two exercise. Recorded below rather than
repaired here: a fixture is not edited to suit a tell.

Do not tidy a `slop-*` fixture. The missing `lang`, the keyless `.map()`, the
leftover `Your Company` and the untouched shadcn primitives are the deliverable.
A `slop-*` fixture that has been cleaned up tests nothing.

## What the corpus does not cover

Eleven of the forty-one tells appear in no row at all, so nothing here
exercises them in either direction: A9, C2, C6, F6, F7, F8, F9, F10, W2, W4
and W5. Six more appear only on an `expect` row, so the pattern is
demonstrated and the exemption has no counterexample: A8, F5, F11, F12, W6
and W7. That is seventeen of forty-one with no `forbid` coverage, a bit over
two in five, which means that many "Not slop when" clauses have never been
tested against a fixture built to disarm them, and that clause is the field
separating this catalog from a linter. F10's absence is a decision with a
reason, recorded below; C2 and C6's absence is too — no fixture has an
asymmetric icon inside a control or a content image, so neither condition
ever arises in this corpus. The other eight are a plain gap.

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
`components/ui/button.tsx` is reworked and records the choice at `:7-12`, in
the theme's radius and colors, with two variants and the stock `ghost`, `link`
and `destructive` deleted. It is imported and rendered at
`components/table.tsx:4,24,42`, `app/page.tsx:8,56,61,97`, and
`components/filter-panel.tsx:5,16,65,75`, and the fixture holds no raw
`<button>` anywhere, so the signal has nothing to fire on. `slop-dashboard`
still fires it: `<Card>` is imported once (`app/page.tsx:50`) against five
hand-rolled copies of its classes (`components/stat-card.tsx:3`,
`components/table.tsx:16`, `app/page.tsx:54`, `app/invoices/page.tsx:11`,
`components/filter-panel.tsx:7`), and `<Button>` once (`app/page.tsx:42`)
against four raw `<button>`s (`app/page.tsx:37`, `:61`, `:64`, `:67`).

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

### v2, the Craft axis, 2026-08-07

Seven blind runs, by the same method and under the same restrictions as the
four above. Each agent received only `SKILL.md`, the `references/` files
SKILL.md names, and its own target directory. None could read this file, the
repo root `README.md`, `tests/`, `scripts/`, or any fixture but its own. None
knew the expected answer, that a fourth axis had just been added, or that
anything had been repaired.

The seven reports are in `calibration/2026-08-07/`, as the runs produced them.
Every string this entry quotes is theirs, and can be read in place.

Four were full audits, one per fixture. Three invoked `anti-slop craft` alone,
to separate the new axis from the other three's noise, and the report cap was
suspended for those three so each could report everything the axis found rather
than everything that fit. Only run 5 records that instruction in its own header
("single-axis, uncapped per run instructions"); runs 6 and 7 do not mention it,
and neither found more than one thing to cap, so the artifacts do not confirm it
either way for those two.

The counts below are what the seven runs produced, before the repairs they
caused. Throughout this entry an id counts as **reported** when it carries a
finding of its own. An id named only inside another finding — in its kill list
or its body — is not reported, however plainly the run says it fires.

- `slop-dashboard`, full: 9 of the 20 expected ids reported — A1, A6, C3, C10,
  C11, C12, F1, F2, W3. Under the old cap.
- `slop-dashboard`, Craft only, cap suspended: 9 of the 10 expected Craft ids —
  C1, C3, C5, C7, C8, C9, C10, C11, C12. C4 was the miss, filed under "Marginal
  but real" instead of as a finding.
- `slop-landing`, full: 9 of the 11 expected ids — A2, A7, A8, W1, W6, W7, F2,
  F5, F12. Under the old cap.
- `clean-dashboard`, full: 0 of the 19 forbidden ids leaked. The run reported
  nothing at all, for the second calibration running.
- `clean-dashboard`, Craft only: C4 leaked. 1 of the 19.
- `clean-landing`, full: 0 of the 6 forbidden ids leaked. C4 fired, and C4 is
  not on that row.
- `clean-landing`, Craft only: the same result, C4 and nothing else.

**The two full runs on the slop fixtures are a floor, not a measurement.** Both
ran under a cap of ten findings and both wrote down which true positives they
cut to stay under it. On `slop-dashboard`: C7 and C8 "real, but the weakest of
the Craft findings here next to C10 and C12 ... cut for budget rather than
because they don't fire"; C5 "real (`app/page.tsx:37`, `size-5` icon button, no
extension), but a single low-traffic control; cut for budget"; and C9, hover
declared all over the tree with `active:` nowhere, "which does fire the tell,
but ... folding it in separately would pad the count rather than add a new
root". On `slop-landing`: F3 and F4 "both true and both would fire ... the
report format caps at ten; cut for redundancy against higher-leverage Finish
findings, not for a false-positive reason". Six written-down cuts, then. C9 is
the one the earlier accounting here missed, and it is the plainest of the six:
the run says the tell fires and drops it in the same sentence.

The arithmetic under run 1 is worth stating on its own, because repeating the
run's framing hides it. That report listed nine findings against a cap of ten,
and still cut three of the above "for budget". A slot went unused.

Four further ids on `slop-dashboard` were found and not given a line: A3, A4,
A10 and C1 are all named inside A1's own finding, in its kill list at the top of
the report and again in its body, which is a run that reached them and had no
room to list them. Two more, A5 and C4, appear in neither the report nor the
declined list — grep the artifact for either id and it is not there — and that
is the same suppression with nothing written down at all. None of the six reads
as a tell that failed: four are visible in the report's own text, and two are
missing from a report that had already run out of room. The Craft-only run on
the same fixture is the proof: same tree, cap lifted, four reported Craft ids
became nine.

**What held.** The Craft-only run on `clean-dashboard` declined eleven of the
twelve Craft tells, named the door that closed each one, and cited a specific
site for every one of the seven it closed by door two: the radius derivation in
`tailwind.config.ts:14-16` for C1, `components/stat-card.tsx:45` for C3's
`tabular-nums` on the one figure that moves, `components/filter-panel.tsx:56-63`
for C7's shorter exit, `components/filter-panel.tsx:56` for C8 driving the same
panel off a transition rather than a keyframe, the eight paired
`border-rule`/`dark:border-rule/25` sites for C10, `components/ui/button.tsx:14`
for C11's shared disabled base, and `components/invoice-row.tsx:15-25` for C12's
label rendered beside the tone. Every one of those citations is real, and a
reader who did not know the fixture was being tested found in each case the
evidence the axis asks for.

What it does not establish is that door two works, because six of those seven
declines are not door-two cases. In six of them the tree holds no failing
instance at all: the correctly handled occurrence is the only occurrence, or
every occurrence is correct. Door two releases a tell that *is* firing
somewhere because the project got the same detail right elsewhere — C7's clause
asks whether "asymmetry is already the habit in the project's other enter/exit
pairs and this pair alone broke it", and there are no *other* pairs when the
tree holds one and that one is right. With no failing instance the Signal never
matched and nothing needed excusing, which is door one filed under door two's
name. The seventh, C1, does have a candidate failing instance, and the run
closed it by supplying a rule the tell does not carry. Both are set out in the
second entry under `Recorded for v2, not fixed`.

Three repairs came out of the round, none of them to a fixture:

- **The cap was suppressing true positives, so the cap changed.** That repair
  moved the ceiling only: a full invocation still reported five to ten
  afterwards, and the floor came off later, for the reason recorded below. A
  single-axis invocation has no cap, because someone naming one axis is asking
  for that axis. And whatever the cap does cut now has to be counted in the
  report, by axis, so nobody loses information without being told they lost it.
- **C4's second door was a judgment, not a rule.** The full run on
  `clean-dashboard` declined C4 — "One heading without the property against
  four with it reads as a single oversight in a codebase that otherwise applies
  the treatment consistently, not as a pattern of nobody checking" — and the
  Craft-only run fired it on the same fixture and the same evidence. One
  hypothesis, heads once and tails once. The door is now a count: among the
  sites of the same kind, more carrying the property than missing it opens it,
  and a tie does not.
- **C4 fired on headings that cannot wrap.** The Craft-only run on
  `slop-dashboard` filed it under "Marginal but real" and gave the reason in
  the same breath: "Every heading in the tree (`Dashboard`, `Invoices` ×2,
  `Page not found`, `Filters`) is one or two words — none will realistically
  wrap at any reasonable viewport, so the heading half of this tell is weak to
  the point of not really applying." A one-word heading is not a site a report
  can rest on, so it is no longer a site at all. The threshold is four words.

**None of the three repairs was re-tested blind.** The A10 repair in v1 was, and
that entry says so; this one cannot. The seven runs above are the measurement,
and every count in this entry predates the repairs those runs caused. Whether
the new report rules and the narrowed C4 behave as intended under a reader who
does not know they changed is the next round's question, not this one's answer.

### Recorded for v2, not fixed

**`clean-landing` fires C4, and the fixture is right.** Both runs that reached
it found the same thing: four headings and four short paragraphs, and not one
instance of `text-wrap: balance` or `text-pretty` anywhere in the tree, so
neither door opens. v2 extended only the dashboard pair for Craft. The landing
pair was never given the treatment C4 looks for, so the tell fires correctly on
a fixture whose row does not list it. That is the plan's scope showing through,
not a defect in the tell, and closing it means extending `clean-landing`, not
loosening C4.

**The majority rule that replaced C4's judgment is untested, and door two closed
nothing in the shape it was written for.** Run 6 labelled seven declines door
two and gave each one a site, which reads as heavy exercise and is not. Six of
the seven have no failing instance anywhere in the tree — the one enter/exit
pair is asymmetric, the one figure that moves carries `tabular-nums`, all eight
borders declare both themes — so the Signal never matched, and a door that
excuses a failure had no failure in front of it. Those six are door one under
door two's label. The seventh is C1, which is the second of the three cases
below. Door two closed zero cases in the shape the clause describes.

Three sites in the corpus do carry that shape, some instances treated and some
not, which is the only shape where the new arithmetic does any work. This file
previously named the first as the only one:

- **C4 at `app/page.tsx:92`.** Five treated headings against one untreated. The
  narrowed signal does not count a one-word heading as a site, so C4 now
  declines there before the count is reached. The verdict the row demands is
  unchanged; the path to it is gone.
- **C1 on the chip inside the panel.** `rounded-chip` (999px,
  `components/invoice-row.tsx:39`) sits inside `rounded-panel` (12px,
  `components/table.tsx:48`), whose padding is `px-5 py-2` — 20px and 8px,
  neither of them past the 24px that opens door one. An inner radius larger
  than the outer one is C1's Signal in as many words. Against it stands the one
  concentric pair the tree does hold, `components/filter-panel.tsx:53-55`. C1's
  Signal says to count the nested pairs against the concentric ones and never
  says what count opens the door, so one against one settles nothing. Run 6
  declined it by asserting that "a pill's radius is set by its own height, not
  by an outer wrap" — an exemption for pills that C1 does not contain.
- **C5 on the `row` size.** `components/ui/button.tsx:27-28` declares `row` at
  `h-7` (28px) and `control` at `h-9` (36px), both under the 40px floor, and
  `row` is used at five text-button sites with no extension against the one
  icon control that has one. C5's own door two asks whether extending the
  target is already the pattern among the project's small controls; one of six
  is not a pattern, and C5 is on a forbid row. Run 6 held the tell off by
  arguing that C5's Principle describes a bare drawing rather than a labelled
  control, and flagged the judgment in writing as "the one genuinely close call
  in this audit: if `row` controls are judged by declared height alone ... this
  reverses to a firing finding".

All three are the same failure C4's second door was repaired for, a judgment
where the tell should carry a rule, and two of them are still live — on the
fixture whose job is to prove the exemptions hold. C1 and C5 are not repaired
here: a Signal rewrite for either would go into the catalog unmeasured, and one
remedy should cover all three at once.

The C4 half of that remedy is already specified, for the round after this one:
lengthen that heading past three words, still without `text-balance`, and
re-run blind. That is not a fixture edited to suit a tell — the demanded verdict
is identical before and after, and only the mechanism that produces it is
restored.

**C4's text-block half kept the vagueness the heading half just shed.** A
heading site is now defined by a number; a "short text block" is defined by
nothing. On `slop-dashboard`, `app/invoices/page.tsx:12`, `app/page.tsx:51` and
`components/table.tsx:13` are one-line labels that an auditor could read as
sites as readily as the real sentence at `app/not-found.tsx:7-9`. Two treated
paragraphs against three untreated labels resolves to "fires" for a reader who
counts labels and "declines" for one who does not, which is the same
two-answers property the door repair was written to remove, surviving on the
other half of the same tell. It changes no verdict across these four fixtures,
because on each of them the counts are degenerate — which is exactly why the
corpus will not catch it. Inherited rather than introduced by this round, and
recorded rather than repaired, because a Signal rewrite here would go into the
catalog unmeasured.

**One clause of A1's signal is now false on `slop-dashboard`.** A1's Signal is
a conjunction: no `theme.extend.colors`, no color custom property anywhere,
*and* `text-gray-500` as the project's only secondary color. The first two
clauses hold. The third stopped holding when this round extended the fixture:
`components/table.tsx:1-5` declares `bg-red-500`, `bg-green-500` and
`bg-gray-400` to carry invoice status, so gray is no longer the only secondary
color in the tree. A1 still fires, on the dominant clause — the empty
`theme.extend` — and run 1 reached it as ROOT off exactly that evidence, so the
corpus gets the verdict it demands. What it no longer gets is a signal a reader
can check clause by clause without finding one the fixture contradicts. The
repair, if there is one, is to A1's wording rather than to the fixture, and it
is left for the next round for the same reason as the two above: a Signal
rewrite now would go into the catalog unmeasured.

**The five-finding floor argued with three of seven runs, and has since been
removed.** The cap repair lifted the ceiling only. Run 2 reported zero findings
on `clean-dashboard` and had to spend a paragraph justifying it; runs 6 and 7
reported one each and run 4 wrote a closing note headed "Note on report length".
Three of seven runs treated the floor as something to defend against rather than
a rule to follow, which is what a quota does to an honest count. It fell outside
what this round was ruled on, which is why it is recorded here with the runs
that produced the evidence. `SKILL.md` now reads "at most ten findings": the
ceiling the round ruled on is untouched, and the floor nobody ruled on is gone.
Like the three repairs above, that change is unmeasured — no run has been blind
to it.

**F11 declined on `slop-dashboard`, where the row expects it.** The run found
the missing `key` at `components/table.tsx:17` and then declined, in these
words:

> Both current call sites (`app/page.tsx:12-17` and `app/invoices/page.tsx:3`)
> pass a hardcoded, never-filtered, never-reordered array — the `FilterPanel`
> toggle doesn't touch `rows` anywhere in the code shown. The tell's own
> exemption ("the list is genuinely immutable — never reordered, never
> filtered") applies to what's actually on the page today, even though the
> presence of a Filters affordance makes it likely this list stops being static
> later.

The last clause is what makes the decline provisional, and it belongs in the
record: the run read the tree as it stands and said in the same breath that the
tree is unlikely to stay that way. v1's calibration had F11 fire on the same
fixture over the same code. One run reading the exemption the other way is
variance, not a measurement, so nothing changed on its account. A second
decline in the next round makes it the tell's problem rather than the round's.

### v3, the Round A repairs, 2026-08-17

Three blind runs, single-axis and uncapped, by the same method as the seven
above. Each agent received `SKILL.md`, the one or two `references/` files its
invocation names, and one target directory. None could read this file, the repo
root `README.md`, `calibration/`, `tests/`, `scripts/`, `skills/anti-slop-build/`,
or any fixture but its own.

The reports are in `calibration/2026-08-17/`, as the runs produced them. Every
string this entry quotes is theirs.

The round repaired five things before these runs, so unlike v2 this entry scores
repairs rather than discovering them. What it discovers instead is in the gaps
below, which are new.

- `slop-dashboard`, Craft only: **10 of the 10 expected Craft ids reported.** It
  also fired C2, which the row does not list.
- `slop-dashboard`, Surface only: **6 of the 6 expected Surface ids reported.**
  It also fired A9, which the row does not list.
- `clean-dashboard`, Craft only: **0 of the 10 forbidden Craft ids leaked**, and
  no finding of any kind. v2's C4 leak on this fixture is closed.

**C4's majority rule decided a case, for the first time in the corpus.** This is
what the round was for. v2 narrowed C4's heading half to four words and left the
corpus with no site that could exercise the count: the clean dashboard's
deliberate oversight was the single word `Reminders`, below the floor, so C4
declined before reaching the door. At four words it is a site, and the run
closed it on the arithmetic — "2 carry, 1 misses. A strict majority carries, so
the door opens." The same run recorded that it had refused the source comment
sitting beside that heading: "I scored the count, not the comment — the verdict
above is what the class attributes produce on their own."

**C1's pill carve-out and C5's labelled-control carve-out both held, on both
sides.** On the clean fixture the chip inside the panel is removed from the
count by name; on the slop fixture C5 "fires on one site and not five," the
three text buttons excluded by their labels and the bare `size-5` glyph kept.
Neither tell lost a fire it should have kept.

**A1's repair failed.** Its third clause was false of `slop-dashboard` and was
rewritten; the replacement is false too. The run walked all three clauses and
reported clause three — "so every color in the tree is a framework default
called by its number" — as false on three counts: a hand-typed hex in
`app/icon.svg:2`, `bg-white` at `app/layout.tsx:8` which is a default called by
name rather than number, and fifteen-plus semantic classes in `components/ui/`
that are neither. The tell fired anyway, on the reading that clause three is a
consequence rather than a test, and the run said what the cost is: "an auditor
reading clause 3 literally could talk themselves out of firing a tell that
plainly should fire."

The same run found something the tell has no language for at all. Because no
custom property is defined anywhere, every `bg-primary` and `ring-ring` in the
untouched `components/ui/` is **dangling** — it resolves to nothing. "The tree
isn't merely using the default palette raw; it contains a second, entirely
non-functional color vocabulary that renders as blank."

### Recorded for v3, not fixed

Ten rules were supplied across the three runs — each one a place where reaching
a verdict needed something the tell does not say. Three are structural.

**The Craft axis cannot tell chosen code from installed code, and SKILL.md is
where that goes missing.** C8's and C11's second doors are both opened by
untouched stock shadcn: `transition-colors` and `disabled:opacity-50`, both at
`components/ui/button.tsx:8`. The Craft run fired both anyway and named exactly
what it had to supply — "stock shadcn boilerplate is not the project's own
evidence that someone looked" — then located the hole: "SKILL.md has exactly
that clause, and assigns it to Surface, then says Craft's rule 'takes a
different form.' Craft's different form never picks the clause back up. Applied
as written, both tells decline on this tree." v2's ledger predicted these two
would be the likeliest misses; this says why.

**The two doors do not enumerate the ways a tree can pass.** C8, C11 and C5 all
decline on `clean-dashboard` through a third state the preamble never names:
the condition arises and the Fix was applied. The run spelled out the cost: "an
auditor who believes every decline must exit through one of two doors will reach
for whichever is nearer and mislabel a correctly-built control as an exemption,
or worse, fire because neither door opened." That is the mechanism behind v2's
finding that six of run 6's seven door-two declines were not door-two cases.

**C1 contains two different tests and passes the clean fixture on only one.**
Its first sentence fires on equal or inverted radii; its second sentence, its
Fix and its door all measure `outer = inner + padding`. Three nested pairs in
`clean-dashboard` are non-concentric by the second and invisible to the first —
`app/page.tsx:89`, `components/table.tsx:34`, and `components/table.tsx:19`.
"An auditor who reads sentence two as the test will fire on this tree, and one
who reads sentence one will not. That divergence is in the tell, not in the
tree."

Four narrower ones:

- **C4's count cannot function on a population of one.** On `slop-dashboard` the
  text-block limb fires on a single site, where the count can only ever be
  0-against-1. "C4 fires on any tree containing a single short text block, no
  matter how carefully written." The tell sets no minimum population.
- **C2 has no magnitude threshold.** "Otherwise asymmetric" covers nearly every
  icon ever drawn, and nothing separates a play triangle's optical offset from
  the 1.5px on `slop-dashboard`'s refresh glyph. It fired there and the run
  ranked it last for that reason. C2 had no fixture row before this; it has
  evidence now.
- **A9 fired on one clause of three.** Its two vintage markers, `transition-all
  duration-300` and `hover:scale-105`, are both absent from `slop-dashboard`;
  only the missing `prefers-reduced-motion` holds. "Read strictly as a
  conjunction, A9 declines." A9 also had no fixture row before this.
- **A6 names three tokens and one of them appears once.** `gap-6` occurs exactly
  once in `slop-dashboard`, failing the Signal's own "repeated" test. The run
  fired on the Principle and supplied "the Signal's three tokens are illustrative
  rather than a required set."

**A real defect in `clean-dashboard` that C10 cannot see.**
`components/stat-card.tsx:46` declares `text-flag` with no dark counterpart while
the branch beside it carries one, and `components/invoice-row.tsx:24` flips that
same colour for the other theme. Two components render one semantic state and
only one of them was opened in dark mode — C10's Principle almost word for word.
C10's Signal names borders, dividers and separator colours, and a stat figure's
foreground is none of those. The run declined it rather than widen the Signal,
and said: "This is the finding I would most want the tell rewritten to catch."

### v3, the first build-and-audit, 2026-08-17

The shape the corpus had never run: build a specimen from a brief with
`anti-slop-build`, then audit it blind with `anti-slop`. A tell that fires is
the build skill's failure, and it arrives with a file and a line.

Two agents, neither of which saw the other's instructions. The builder read
`anti-slop-build/SKILL.md` and `deriving.md` and its brief, and was forbidden
the fixtures, the auditor and its catalog — a builder that reads
`clean-dashboard` is copying, not deciding. The auditor read the four axis
files and `molds.md` and the specimen, and was forbidden the build skill, the
fixtures and this file. The brief described Wickfield, irrigation scheduling
for vegetable farms, chosen because it shares no vocabulary with any fixture.

The specimen is in `calibration/2026-08-17/specimen-wickfield/` and the audit
beside it. Both are the artifacts, unedited.

**2 of 41 tells fire. Surface 0/10, Craft 1/12, Words 0/7, Finish 1/12.**

- **C4** — no `text-wrap: balance` or `text-pretty` anywhere in the tree. 4
  heading sites and 12 text-block sites, 0 carrying. Both doors shut: "This is
  the pattern, not an oversight."
- **F4** — `og:title`, `og:description` and `og:image` all absent.

Both failures trace to a gap in the build skill rather than to a slip.
`deriving.md` carries no entry for typography treatment at all, so nothing in it
told the builder that headings and short text blocks take a wrap property — the
same builder had already reported, independently, that spacing, measure and type
family have no entries either. F4's absence is one step further out: the build
skill covers no Finish material, and the builder wrote a well-argued abstention
for the Open Graph *image* and then carried the title and description out with
it, with no reason given for either.

**The auditor read the specimen's comments and refused them.** This was the
round's second question, because a tree built to record its own decisions is a
tree full of prose that predicts the verdict. It reported: "Had every comment
been stripped from this tree, my tell-by-tell result would be identical." In two
places it named prose that tried to move a verdict and did not — the Open Graph
abstention that "argues the image and only the image," and a config comment
recording a heading "set to wrap to two lines," of which it said that knowing
the wrap is deliberate "makes the unmanaged break point a stronger finding, not
a weaker one."

**A1 has a third defect, found here rather than on the fixtures.** The Signal
tests `theme.extend.colors`, and this specimen replaces `theme.colors` outright
so that framework utilities stop compiling — which satisfies A1's first conjunct
on a technicality. It changed no verdict here, because the other conjuncts fail
against ten custom properties. The auditor named the reverse case, which is the
dangerous one: "a project that replaced `theme.colors` with the framework's own
palette would slip past this Signal's first clause."

### Recorded for the build skill, not fixed

The builder's own report and the audit agree on where `anti-slop-build` is thin,
and they were written without sight of each other.

**The recording requirement produced prose that drifts from the code.** 57% of
the specimen's non-blank lines are comment; `control.ts` is 85%. The audit found
**ten** places where a comment claims something the code does not do. The
sharpest is a stepper whose `ACCEPTED COST` says a ceiling of 24 was chosen
"rather than inventing an upper bound the brief does not have and presenting it
as a limit of the product" — while the code disables the control at 24 with no
copy explaining why, which is the thing the sentence names as the alternative.
Others are plain miscounts stated as reasoning: "the two Actions" where three
render, "the same six classes" where four are emitted, and an extraction rule —
"Two callsites is the threshold" — stated twice and broken by a wordmark typed
at two callsites. A colour named as in use is used nowhere, in a file that
elsewhere records removing a different colour on exactly that ground.

None of this fires a tell, and that is the finding. The five shapes ask for
argument and set no standard of verifiability for it, so the skill can produce a
tree that is decided, auditable, and wrong about itself in ten places.

**The radius equation distorted the design.** The builder reported having to
engineer a 6px-padded tray so that `panel = control + padding` would be true
somewhere: "my panels are padded by 24px, and 6+24=30px is a radius nobody would
ship. Left as written, the rule either produces an absurd number or gets quietly
ignored." The rule is stated generally and governs only concentric nesting. This
is the same defect the `clean-dashboard` run found in C1 from the other side.

**Three entries are missing from `deriving.md`:** spacing, measure, and type
family. The builder invented a spacing rule that worked and said so — "that is
exactly the kind of decision the skill exists to stop me improvising" — and was
blunter about the third: "the font stack is arguably the single most visible
generic tell in a React/Tailwind page, and it has no entry at all." C4's fire
belongs to this gap.

**The five shapes have no slot for a value derived from a root by judgment.**
Derivation is defined as arithmetic. A colour chosen from the temperature has no
shape available, and the builder attached a contrast ratio to each one to give it
any shape at all — "which is honest but is not why I picked teal."

**Smaller, and all from the builder:** `theme.extend` is the weaker advice, since
replacing `theme` outright stops `bg-slate-500` compiling; motion's two platform
facts have nowhere to land on a page where nothing mounts; "record the inventory
as text before any code" sits badly beside the rule against design notes in a
separate document; "four to six colors" and "two or three radii" are numbers
handed down without derivation, against the skill's own doctrine; and the closing
step, "run `anti-slop` against what you built," does not say what to do when the
auditor is not available — which was this run's configuration exactly.
