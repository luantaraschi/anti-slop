# Backlog

An index, not a record. Every item below is stated somewhere else, in the file
that was written with the evidence in front of it: `fixtures/README.md` for the
interface catalog, `corpus/README.md` for the text one, or the skill file that
carries the item. Each entry here points at that paragraph, adds what the work
costs and what it waits on, and stops. Where the two disagree, the record wins
and this file is the one that is wrong.

## What gates all of it

A blind run is the only thing that measures a tell, and it is spent once per
round: agents that have read the repository cannot be un-read. So a Signal
rewritten today does not become measured until the next round runs, and a round
that fixes one tell has spent the same run it could have spent on five. Items
are grouped below by the round that should carry them, not by axis.

Four changes are already in the catalog unmeasured, carried in from v2: the
report cap, C4's majority rule, C4's four-word heading threshold, and the
removal of the five-finding floor. Whatever else the next round does, its blind
run is also their first measurement.

Round 1 of the plugin design shipped on 2026-08-17 — a different numbering from
the A and B below, which are debt rather than plan. It moved the auditor to
`skills/audit/` with its catalog and changed nothing under this heading. It
spent no blind run, which is the point: a restructure that changes no tell needs
no measurement, so the run it did not spend is still available to whichever
round carries Round A.

**The floor round shipped on 2026-08-22 and spent no blind run either, which is
a larger claim than the one above and needs its own accounting.** It added five
tells (A13, A14, C16, W8, F13), two build references (`floor.md`, `legal.md`),
a duration and easing rule where `deriving.md` previously had no numbers, a
collision test, a composition section, and a `SessionStart` hook. Of that, only
the five tells are catalog changes, and none of the five is measured. Round C
below carries them. Everything else changes the builder rather than the
detector, and the builder is measured by building rather than by a blind read —
which is Round D, and which is a different and cheaper kind of run.

**The composing round shipped the same day and is measured even less.** It added
`composing.md` and `precedents.md`, moved composition into scope for real, and
put a step in the process that stops for a human answer. It changed no tell at
all, so it spends no blind run — but it also means the builder now has a step
nothing in the repository exercises, because no fixture was ever built by
running the skill and answering it. Round D covers that and should carry this
too.

Three claims in `precedents.md` rest on screenshots rather than on fetched CSS,
and the file marks each of them as visual: proof of life, showing the product,
and the single-saturated-colour palette. Everything else in it was read out of
a shipped stylesheet. That distinction is the file's own evidence rule and it
should survive every future edit, including edits made by a tool.

**`precedents.md` is append-only and its entry schema is at the bottom of the
file.** It is written to be fed by something other than a person reading a
page — the five fields are exactly what a capture tool would have to collect,
and the evidence-quality field is what keeps a scraped entry from being trusted
like a measured one. Anything writing into it has to fill all five or the entry
is worse than absent.

Two of the round's promises are unauditable by construction and are recorded
here so that nothing later mistakes them for coverage. **Contrast** is
arithmetic the catalog deliberately does not carry, so `floor.md` requires it to
be computed and reported and no tell confirms it happened. **The collision
test** leaves no trace in a tree, for the same reason the reduction pass leaves
none: nothing records the plan that was rejected. Both are reported by the
builder or not at all.

## Round A — the measurement debt

The catalog repairs recorded under `Recorded for v2, not fixed`
(`fixtures/README.md`), plus the run that measures them. That section holds six
entries and Round A draws on three of them; of the rest, one is a corpus job
(B1), one is the removed five-finding floor already counted above as unmeasured,
and one is a watch item (F11). The record says a single remedy should cover A2,
A3 and A4 at once; splitting them across rounds spends three blind runs on one
problem.

- **A1. Restore C4's path to its own rule.** Lengthen `clean-dashboard`'s
  `Reminders` heading (`app/page.tsx:92`) past three words, still without
  `text-balance`, and re-run blind. The remedy is already specified in the
  record, down to the argument for why it is not a fixture edited to suit a
  tell: the demanded verdict is identical before and after, and only the
  mechanism that produces it comes back. Cheapest item here, and the only one
  whose design is settled.
- **A2. Write C1's pill rule into the tell.** `rounded-chip` at 999px inside
  `rounded-panel` at 12px matches C1's Signal literally. Run 6 declined it by
  asserting a pill's radius comes from its own height rather than from an outer
  wrap — a correct reading, and one C1 does not contain. Live on
  `clean-dashboard`, the fixture whose job is proving the exemptions hold.
- **A3. Write C5's labelled-control rule.** `row` (`h-7`, 28px) is used at five
  text-button sites with no extension, against the one icon control that has
  one, and `control` (`h-9`) is under the floor too. Run 6 held C5 off by
  arguing its Principle describes a bare drawing rather than a labelled control,
  and flagged the judgment in writing as the one genuinely close call in the
  audit. Also live on `clean-dashboard`, also a rule the tell does not carry.
- **A4. Define C4's other half.** The heading half is now a number; a "short
  text block" is defined by nothing, and on `slop-dashboard` the same evidence
  resolves to "fires" for a reader who counts one-line labels as sites and
  "declines" for one who does not. That is the two-answers property the door
  repair was written to remove, surviving on the other half of the same tell.
- **A5. Repair A1's false clause.** A1's Signal is a conjunction, and its third
  clause — `text-gray-500` as the only secondary color — stopped being true of
  `slop-dashboard` when v2 gave the table its status colors. A1 still fires on
  the dominant clause, so no verdict moves; what is lost is a signal a reader
  can check clause by clause. The repair is to A1's wording, not to the fixture.

## Round B — the corpus gap

`validate.py` prints both numbers on every run, so they cannot rot silently.

- **B1. Give `clean-landing` the Craft treatment.** It fires C4 today and the
  fixture is right to: v2 extended only the dashboard pair, so the landing pair
  was never given the treatment C4 looks for. Closing this means extending the
  fixture, never loosening the tell. Do it with the rest of B, not alone.
- **B2. Eight tells no fixture exercises in either direction.** A9 (generic
  motion), F6 (missing or repeated h1), F7 (missing alt text), F8 (no custom
  404), F9 (no canonical), W2 (a verb that does not survive), W4 (an error that
  apologizes or says nothing), W5 (implementation names leaking). Three more ids
  are uncovered on purpose and are not work: C2 and C6 because no fixture holds
  an asymmetric icon in a control or a content image, F10 because the absence of
  a sitemap carries no signal in a specimen that never had a build.
- **B3. Seventeen exemptions with no counterexample.** Two in five of the
  catalog has no `forbid` row, which means that many `Not slop when` clauses
  have never faced a fixture built to disarm them. That clause is what separates
  this catalog from a linter, and it is the least tested field in it. The
  largest item on this page and the one most likely to want its own round.

## Round C — the floor's first measurement

Five tells shipped on 2026-08-22 with no fixture and no blind run. They are
grouped here rather than folded into Round B because three of them fire on a
condition no current fixture can hold, so this round is fixture work before it
is measurement work.

- **C1. Two fixtures need a condition they do not have.** F13 fires on a public
  site that collects something, and no fixture has a form, an analytics script
  or a third-party embed. A14 fires on a marketing route that never shows its
  product, and both landing fixtures are close to that already — `slop-landing`
  should carry it on an `expect` row and `clean-landing` disarm it with a
  single honest figure. Do F13 by giving `slop-landing` a form and no notice,
  and `clean-landing` a form with one.
- **C2. C16 is the cheapest of the five and should go first.** A focus ring is
  a grep on both sides: `slop-dashboard` resets the outline and puts nothing
  back, `clean-dashboard` declares `:focus-visible` once at the root. It is the
  one new tell whose exemption and whose signal both fit the existing fixtures
  with no new condition invented.
- **C3. A13 needs a fixture that carries the decoration on purpose.** This is
  the A2 problem again, and `clean-landing` is where it belongs: an element from
  the tell's own list, built from the theme's declared colours, placed once. A
  grep-shaped implementation has to decline it at the exemption rather than
  before reaching it, which is the property that made `clean-landing` the
  sharpest fixture of the four.
- **C4. W8 may not want a fixture at all.** Fabricated social proof is
  detectable only against an inventory, and a fixture has no inventory outside
  the reader's head. Decide whether the tell is testable in this corpus before
  building for it; an honest exclusion recorded in `fixtures/README.md`, the way
  F10's is, may be the right answer.
- **C5. A13's Signal counts and names no threshold.** It says to count the
  decorative elements against the ones whose values resolve out of the theme,
  and does not say what count decides. It joins the five tells already recorded
  under `How a Signal reads` as failing that convention, and it should be fixed
  by the round that can measure it rather than by picking a number now.

## Round D — measuring the builder rather than the catalog

The floor round changed the builder more than the detector, and a blind read
cannot measure a builder. What measures it is a build: run `anti-slop build`
against a brief, then run `anti-slop` against the result, and every tell that
fires is the builder's failure arriving with a file and a line. Three specimens
exist from earlier rounds and none of them was built against `floor.md`.

- **D1. One specimen built against the floor.** The three existing ones are the
  control: `wickfield` carries seven mentions of focus, `chorus` two, `mise`
  none, and no specimen has a skeleton anywhere. That spread is what the floor
  was written to remove, and it is the measurement.
- **D2. Confirm the hook fires.** `hooks/hooks.json` is modelled on the one
  working example on this machine, and it is unverified for a plugin registered
  through a skills directory rather than a marketplace. The check is a restart
  and a grep of a fresh transcript for the routing note. If it does not load,
  the same block moves to the user's `settings.json` and the plugin ships it as
  an install instruction instead.
- **D3. Read the usage counter.** `pluginUsage` in `~/.claude.json` recorded
  `anti-slop` at zero invocations across 31 startups before this round, against
  249 for the one plugin here that ships a SessionStart hook. That field is the
  only ground truth available for whether the description and hook work, and it
  should be read again after a week rather than reasoned about.

## Round 3, and what inspecting the corpus changed about it

The plugin design puts two subjects next for the auditor: incomplete states
(reference document §17) and a product never shown (§18). Reading the fixtures
for both before writing either tell turned up the thing that decides the shape
of that round.

**Both subjects fire on the clean fixtures as they stand.** No fixture in the
corpus has a loading state, a skeleton, or an API error branch. `clean-dashboard`
fetches at `components/stat-card.tsx:32` with no `.catch()` and no failure state,
and `slop-dashboard` does the same at `app/page.tsx:24`. For §18, no fixture
contains a content image at all, so `clean-landing` describes its product and
never shows it, which is the defect §18 names.

So Round 3 is not "add tells". It is fixture work first — extending both clean
fixtures until they genuinely handle the states they currently skip — and only
then the tells that measure it. Writing the tells first would produce a catalog
whose clean fixtures fail it, which is how a corpus stops being a test.

That ordering is also what the coverage numbers ask for on their own. Adding a
fifth axis to a catalog where 17 of 41 already have no `forbid` row makes the
untested proportion worse, not better.

The id alphabet is already open to `S` and the validator's tests cover it, so
the mechanical half of a fifth axis is done and costs the next round nothing.

## Watch list

Not work yet. Recorded so the next round recognizes it if it happens again.

- **F11 on `slop-dashboard`.** The run found the missing `key` and declined it
  under the tell's own immutability exemption, while saying in the same breath
  that the tree is unlikely to stay immutable. v1 fired it on the same code. One
  run reading the exemption the other way is variance, not a measurement. A
  second decline makes it the tell's problem rather than the round's.

## Round T — everything the text skill shipped unmeasured, 2026-08-22

`anti-slop:text` went in whole: forty tells, two vocabulary files, four
specimens, expectation rows. Nothing in it has been through a blind run. The
authoritative version of each item below is in `corpus/README.md` or in the
skill file that carries it; this is the index.

- **T1. `M1`'s threshold, and what it cost to find.** The tell shipped counting
  dashes per word, at one per two hundred in English and one per four hundred in
  Portuguese. Counting the four specimens the same day showed that rate
  separating nothing: both clean specimens use one paired interruption on
  purpose and both landed above the threshold, because a pair is two characters
  and a short document is short. The measure that separates is the share of the
  text's clause joints the dash carries, and it is now one number for both
  languages, 15%, with the four figures recorded in `vocabulary-en.md`. Two
  consequences to carry into the round. The number rests on four documents
  written by the author of the tell, so it is a floor found by counting and not
  a rate from the wild. And the claim that the dash is rarer in Brazilian prose
  survives as an observation of usage rather than as a calibrated figure,
  because the measurement tested what separates a read draft from an unread one
  and never tested the difference between the two languages.
- **T2. Whether `P5` survives.** *Neutrality where the genre wants a position*
  is the only tell in the catalog that fires on an absence, so it is the only
  one that can push a rewrite into inventing a stance, which the skill's own
  fabrication rule forbids. Its exemption list is long for that reason. If a
  round catches it adding a position, cut it rather than narrow it.
- **T3. `M1`'s first exemption has no specimen.** The door opens when a sample
  of the author's writing uses dashes at that rate, and a standalone specimen
  carries no sample. Measuring it needs a run handed a sample alongside the
  text, which is a different shape of run and is not built.
- **T4. Thirteen of forty tells appear in no corpus row**, and eighteen have no
  `forbid` row. `scripts/validate.py` prints both lists every run. Two short
  documents cannot carry forty patterns without becoming a list of patterns.
- **T5. The axis names are unmeasured too.** `Hollow`, `Template`, `Grain`,
  `Marks`, `Presence` were chosen as plain nouns with free initials. Renaming is
  cheap until specimens and rows carry the letters, and it is not cheap after.
- **T6. Both Portuguese specimens were written by the author of the tells.**
  `docs/calibration-method.md` names that as the thing not to do, and it was
  done here for the same reason the 2026-08-18 round did it: no other
  Portuguese corpus exists. Recorded rather than hidden.

## What finishes a round

`python -m pytest tests/` green, `python scripts/validate.py` at
`0 problem(s)`, and the round's blind runs committed under
`calibration/<date>/` with `fixtures/README.md` updated to say what they scored
before any repair they caused, and `corpus/README.md` where the round scored
prose. A score taken after the fixes is a score of the fixes.

## The build skill does not know about application screens

Recorded 2026-08-17 from the third specimen, a dense kitchen shift board, whose
builder was asked where the skill fits a screen with state badly. Every item
below is its report, and none is repaired.

- **Nothing about state, which is where an app screen's identity lives.**
  Confirmed, awaiting, declined, eligible, disabled — these carry the screen and
  they are the colours with hard contrast floors, because they carry meaning
  rather than mood. The palette rule says nothing about how many of the four to
  six may be state, or that a state colour must be measured against every ground
  it will appear on. The build's best decision — refusing a "confirmed" colour so
  the two states needing attention do not compete — came from the generic
  Subtraction shape, not from the palette entry.
- **Density is modelled as one number and on a screen it is two.** "Very dense"
  and "legible at arm's length on a wall screen" resolve to a scale with two
  bands and a jump between them. The single-ratio framing pushed against that.
- **Disabled needs a stated condition and somewhere to state it.** Label,
  adjacent text, tooltip, aria — a real decision the skill does not raise.
- **The reduction pass is written for landing pages.** An app screen has no
  sections and one call to action. Its dominant removal candidate is the same
  state rendered twice, which the pass should name. It also says nothing about
  redundant affordances.
- **Elevation guidance assumes resting cards.** Under native HTML5 drag the
  floating object is drawn by the browser, so the elevation count is zero for a
  reason the entry does not anticipate.
- **"Derive the page width from the measure" is wrong for a screen**, where the
  measure governs one paragraph and the columns are the fixed point. The entry
  frames the table case as an exception when for applications it is the rule.
- **The Open Graph hand-check assumes a public page.** A board behind auth has no
  consumer for it.

Two more from the same report that are not app-specific:

- **The spacing ladder lands on half-pixels and the entry never says so.** An
  18px line box gives 4.5px, and the entry does not say whether to round and lose
  the derivation or keep it and accept the half pixel. It also names five roles
  while the arithmetic yields powers of two, so the fifth step comes out at 72px
  and is unusable on a one-screen layout.
- **"Four to six colors" counts values, but roles are what you discover.** The
  build needed seven roles and got back to six by making one colour do three
  jobs. And the palette entry mentions contrast only obliquely: measuring the
  pairings the tree will actually render changed its surface hierarchy twice, so
  measurement belongs inside the derivation rather than after it.

## The seven subjects taken from the survey, and what they cost

Added 2026-08-17 from a four-way survey of the overlapping design skills. Eight
new ids for seven subjects, because splitting A9 yielded two.

| Subject | Landed as | Fixture coverage |
|---|---|---|
| Split A9 | A9 narrowed, A11 motion scale, C13 reduced-motion | C13 both sides |
| Space nobody reserved | C14 | none — no fixture has a content image or an async boundary with distinct branches |
| State the URL never learns | S2 | both sides |
| A request with no failure branch | S1 | both sides |
| A page only seen at one width | C15 | both sides |
| A stacking order nobody declared | A12 | none — no fixture stacks |
| An action that cannot be taken back | S3 | none — no fixture destroys anything |

**Every one is unmeasured.** No blind run has seen any of them. Four carry an
expect row and a forbid row, which is the strongest position a new tell has ever
started from here — but a row is a prediction, not a measurement, and the last
three rounds each found a tell that fired for a reason nobody predicted.

**The corpus was extended first**, which is what made four of the eight
measurable at all. `clean-dashboard` gained a failure branch on its ledger fetch
that keeps the last good total and says it is last known, its filter moved from
component state to the address while the panel's open flag stayed local, and one
breakpoint at the width its content actually breaks. `clean-landing` gained the
same breakpoint treatment and a reduced-motion guard on its one transition.
`slop-dashboard` gained a filter and a sort in local state, because it had no
view state at all and S2 would have declined on a condition that never arose.

None of that is a fixture edited to suit a tell. A fetch with no catch, a filter
the URL never learns and a layout with no breakpoint are defects the audits and
the surveys identified independently, in the fixtures that model the alternative.

**Still open from the survey, and deliberately not taken:**

- The three positioning claims. The build skill's boundary against
  `frontend-design` is asserted rather than observed and is published in the
  README; the accessibility boundary excludes by category while claiming to
  exclude by method, and the catalog violates its own sentence in six places;
  and the handoff target fetches its rules from another repository's main branch
  at review time, so it is unversioned and carries no exemption of any kind.
- Four clauses on existing tells: C10 gains a shadow with no dark counterpart,
  C7 gains easing and a door for a deliberate full slide-out, C4 gains the case
  where `balance` is silently ignored past about six lines, C6 gains the tinted
  neutral outline.
- One removal: C9's first exemption releases a project where no control has a
  hover state and the absence is uniform. Uniform absence of feedback is the
  absence of a decision, which is this catalog's definition of a finding
  everywhere else.
- C3's Signal lists a numeric table column as a site and its Fix restricts the
  treatment to values that change. Most table columns are static.
- Three things for the build skill: a seventh shape for a sanctioned local
  departure, a fifth survival check testing recorded decisions against each
  other rather than against the code each annotates, and a contrast floor
  carried as a platform fact rather than as evidence.

## What the first real-world run found, 2026-08-18

The first audit against a project nobody built as a fixture: a static portfolio,
own CSS, vanilla JS. It produced five findings that all read as real, including
a shipped placeholder endpoint that silently breaks the contact form on three
pages. **A12 fired correctly on its first outing** — six global z-index values,
no token naming any of them — which is the only measurement that tell has.

Three defects in the report format, none of which any fixture could have
surfaced, all repaired in this commit:

- **A finding with more than one site had no representation.** The run stacked
  continuation rows with the id and description columns blank, which renders as
  a broken table where a second site is indistinguishable from a second finding.
  One row, one location, the rest in the paragraph.
- **The fourth column was overloaded.** It is specified to carry tell ids so a
  reader learns which repairs collapse into each other; the run wrote a site
  count there instead, which reads as though the finding fixes three other
  findings.
- **The verdict rule said "one sentence" and stopped.** One sentence carrying
  nine inline code spans obeys it and is unreadable. It now has to survive being
  read aloud.

And one thing that is not a format defect: **the run audited a stack the skill
declares out of scope, adapted the concepts sensibly, and did not say so.** It
mapped `theme.extend` onto `:root` blocks and worked from there. That is usually
the right call and the catalog now says so — but it has to be declared in the
first line of the report, because a verdict reached through a translation is
weaker than one reached directly and the reader has to be able to weigh it.

Still open from this run, not repaired:

- The report language followed the user rather than the catalog, so axis
  headings were translated while tell ids and field names were not. No rule
  covers this either way.
- The five adapted axes were not named individually. If a tell cannot survive
  the translation to a non-React stack it should be declined and named, and
  nothing yet says which ones those are.

## The stack neutralisation, 2026-08-18 — what it touched and what it costs

The audience is someone building with an agent who does not know the vocabulary
and is not on React. The catalog was written against React, Tailwind and shadcn,
and both skill descriptions named that stack, which meant neither would fire on
a plain HTML and CSS project at all.

**The job was smaller than it looked.** Measured before rewriting: ten of the
forty-nine Signals were genuinely stack-bound, nine of them in `surface.md` and
one in `craft.md`. Every tell on States, Words and Finish, and fourteen of the
fifteen on Craft, never mentioned a framework. Three still name a Tailwind class
and now name it beside a plain-CSS equivalent, which is the intended end state
rather than remaining work.

Repaired: both descriptions, the false positive rule's four evidence places
restated as roles rather than filenames, the `Out of scope` line that made stack
a scope limit, the `surface.md` preamble, and the Signals of A1, A2, A3, A4, A5,
A7, A9, A10, A12 and C10.

**All of it is unmeasured, and the risk is specific.** Broadening a Signal is
how a tell starts firing on things it should release. Reasoning against the four
fixtures says every verdict holds — A2 still declines on `clean-landing` because
its stops are the project's own, A4 still declines there because one shadow used
once is not one used everywhere, A3 still declines on `clean-dashboard` because
it declares three radii — but reasoning is what produced the A1 repair that
failed twice and the C1 rewrites that were withdrawn twice. **The next blind
round measures a broadened catalog, which is a different question from the one
the last round measured.**

Still open from this change:

- **The fixtures are all React and Tailwind.** A catalog that claims to read any
  stack has no specimen outside one, so the claim is argued rather than tested.
  A plain HTML and CSS pair, one slop and one clean, would be the first corpus
  work that measures the crossing rather than assuming it.
- **The build skill is further behind.** `deriving.md` still tells a builder to
  replace `theme.colors` and `theme.spacing` by name. The concepts transfer the
  same way the audit ones did, and the same measurement applies.
- **Report language is unruled.** The first real-world run reported in the
  user's language with axis headings translated and tell ids and field names
  left in English. Nothing says which is right.
