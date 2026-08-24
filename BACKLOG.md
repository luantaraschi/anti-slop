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
specimens, expectation rows. The authoritative version of each item below is in
`corpus/README.md` or in the skill file that carries it; this is the index.

**Measured on 2026-08-24 by four blind runs**, one per specimen, in
`calibration/2026-08-24b/`. Round T2 below carries what they found and what
they left. T1 and T2 in this list were the two the round was run to settle;
read them with the T2-1 and T2-2 entries beside them, because the round changed
what each question is. T3 through T6 the round did not touch.

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

## Round T2 — what the text catalog's first blind round found, 2026-08-24b

Round T above is now measured. Four blind runs, one per corpus specimen,
reports and reconciliation in `calibration/2026-08-24b/`, which is the record
and the authority for everything below. The scores: `slop-release-en` 22 of 23
expected ids, `clean-release-en` 0 of 20 forbidden, `slop-notice-pt` 15 of 16
expected plus one off-row true positive, `clean-notice-pt` 0 of 15 forbidden.
Both clean specimens came back byte identical, verified with `git diff` in
their own repositories. No fabrication in either rewrite.

The round found more than it settled, which is why this section exists rather
than a line closing Round T. Nothing below was repaired in the round that found
it: the runs are spent, and a Signal edited before the next round is unmeasured
until that round, which is what this file's opening section names as the thing
to avoid.

- **T2-1. `M1`'s Signal does not define its own denominator. First, ahead of
  everything else here.** This displaces Round T's T1 as the `M1` item, because
  T1's question — is 15% the right number — cannot be asked until this one is
  answered. Run 3 counted one document two ways under the tell's own words and
  got 15.15% (5 dashes over 33 joints, list-label colons counted) and 18.5%
  (5 over 27, excluded), against a threshold of "above roughly 15%". Two further
  recounts were made for the record: 14.3% under `vocabulary-en.md:175-177`'s
  "count roughly", the only definition the repository states, and 16.1% under
  the definition the record proposes. `vocabulary-en.md`'s table says 19% for
  the same file. Counting the two nearby variants of the proposed definition,
  15.6% and 16.7%, that is **seven figures for one document**: 14.3, 15.15,
  15.6, 16.1, 16.7, 18.5 and 19. No two alike.
  **The finding is that the published figures do not reproduce, not that the
  specimen falls below the line.** Three of the four reproduce under neither
  recount (37 against 28.2 and 30.6; 8 against 6.2 and 6.2; 19 against 14.3 and
  16.1); only `clean-notice-pt`'s 7% survives, at 6.7 and 6.9. And under every
  variant of the proposed definition — 15.6%, 16.1%, 16.7% — `M1` fires on the
  specimen written to carry it, and on neither clean specimen, so the proposal
  passes the corpus rows and the 15% threshold does not have to move. The
  proposal, written out precisely in
  `calibration/2026-08-24b/README.md` section 3 and deliberately not applied:
  count body prose only; a joint is a sentence-ending full stop, question mark
  or exclamation mark, a comma, a semicolon, a colon joining two clauses in
  running prose, or a dash; a colon introducing a list or closing a list label,
  a colon in a heading, the comma after a salutation, and anything inside a
  heading, code span, URL, number or quoted passage are not joints; computed,
  not estimated. Applying it obliges recomputing all four figures in both
  vocabulary files and saying in the table which definition produced them.
  `vocabulary-en.md:175-177` carries a partial definition, the "count roughly"
  list that both recounts used as their base; what neither it nor the Signal
  says is which colons and which commas are joints.
  `vocabulary-pt.md:207` restates the 19% figure in prose as well as carrying
  the threshold, so both files need the same edit.
- **T2-2. `P5` survives the round untested on the case that would condemn it.**
  Round T's T2 asked whether a rewrite catches it inventing a position. It did
  not fire once in four runs. Three runs reached it and declined it by its own
  register exemption, including on `clean-notice-pt`, the specimen built to
  bait it; run 1 does not account for it at all, which is an error in run 1's
  report recorded in the record's section 8. So the round tested `P5`'s
  exemption four times and never tested `P5`, because none of the four
  specimens is opinion, review, recommendation or argument. What settles it is
  one specimen in a genre that unmistakably takes a position, neutral
  throughout, with no stance in the source for a rewrite to recover: if the
  rewrite supplies a stance, cut the tell. One specimen, one run. No `expect`
  row in the corpus carries `P5` on any document.
- **T2-3. Eighteen supplied rules reconcile to thirteen distinct gaps**, four
  thresholds, six definitions, three about which axis or exemption owns a case.
  Full table in the record's section 5. Four were found by more than one blind
  agent independently, and those go first: `T1`'s "most common count" undefined
  at n of one or two (runs 1, 3 and 4, three independent hits, a fire in one
  and a decline in two); `G9`'s exemption list naming no administrative or
  changelog convention (runs 2 and 3, both closing it by analogy from a
  neighbouring tell); `P4`'s exemption list naming teaching genres only (runs 2
  and 4, same shape); and the catalog having no rule at all for which axis owns
  a sentence matching two tells (run 1 on `H5` against `G5`, run 3 on `T2`
  against `H1`, two different tie-breaks invented). Three tells carry seven of
  the thirteen gaps: `M1` three, `T1` two, `G3` two.
- **T2-4. Which axis owns *representa* in Portuguese, `H1` or `G2`.** A ruling,
  not an edit, and the reason `slop-notice-pt`'s `expect` row was left exactly
  as it is. `G2` fired on *que representa um verdadeiro divisor de águas*, a
  phrase `G2`'s own Signal lists, so on the English catalog's words the row is
  short. But `vocabulary-pt.md:91` files *representa um marco* and *marca um
  divisor de águas* under `H1`, and `vocabulary-pt.md` carries no `G2` section
  at all — so the repository's own Portuguese vocabulary already assigns the
  construction to the axis that is on the row. And run 3 fired both `H1`
  (`text-3:33`) and `G2` (`text-3:59`) on the identical nine words, in the same
  report that supplied the rule that a sentence matching two signals is filed
  once. **So this is a second instance of the gap in T2-3, not a row gap**, and
  adding `G2` to the row would write a double count into the answer key. Rule
  first, then edit the row or leave it.

  `corpus/README.md`'s Known gaps section **was** updated in the same commit,
  by ruling: it said "No blind run has scored any of this", which the commit
  itself disproved, and this file's "What finishes a round" asks that file to
  carry the score. That sentence is a factual claim about whether a round
  happened rather than an answer key change, so it cost no blind run and the
  no-repair ruling did not reach it. The four expectation rows were not touched.
  What is still stale there is the `M1` paragraph, which describes a threshold
  whose denominator T2-1 shows is undefined; the updated section points a reader
  at the record instead.
- **T2-5. The fabrication rule is silent on transferred attribution.** Run 3's
  rewrite dropped *Especialistas apontam que* and let the claim stand as the
  writer's, which is `H4`'s own Fix applied and adds no fact, but changes who
  asserts the sentence. The record judges it inside the rule and at the rule's
  edge, and says why (section 6). The clause to decide: either the fabrication
  rule states that reassigning an unnamed attribution to the writer is not
  fabrication, which is the current de facto reading, or `H4`'s Fix gains a
  second option — cut the claim — for registers where who asserts it changes
  what it means.
- **T2-6. The recoverability check's first real use nearly produced the wrong
  branch.** `skills/text/SKILL.md` shipped the check hours before these runs.
  One run's first `git status` ran from the wrong directory and reported no
  repository, which under the rule sends the rewrite to the conversation
  instead of the file. The agent caught it and corrected before writing. The
  rule read its input correctly; the input was wrong, and the branch a wrong
  input reaches is the safe-looking one, so the failure mode is a false
  negative that reads as caution. Observed by the round's operator; none of the
  four reports records it, because a self-corrected error leaves no trace in a
  report describing outcomes. Candidate fix: run the check against the target
  file's own path rather than an ambient working directory, and reach the "not
  a repository" branch only after the path itself is confirmed. This is a
  change to a skill the round measured, so it waits with the rest.
- **T2-7. Round T's T3, T4, T5 and T6 are untouched by this round.** `M1`'s
  first exemption still has no specimen and still needs a differently shaped
  run. Thirteen of forty tells still appear in no row and eighteen still have
  no `forbid` row; `scripts/validate.py` prints both lists. The axis names are
  still unmeasured. Both Portuguese specimens are still author-written, which
  the round's record carries as its caveat alongside the prompt-authorship one.

## Round F — everything the daily-use round shipped unmeasured, 2026-08-24

The round that closed the loop with a fourth skill. Its ten process tasks spent
no blind run between them, and this file's own opening paragraph names unmeasured
change compounding as the failure to avoid, so every process change below is
recorded rather than assumed sound. Tasks 11 and 12 then spent seven blind runs,
three on the repair loop and four on the text catalog. What those seven measured
is in Round F2 and Round T2 below; everything left in this section is what they
did not reach.

- **F1. The entry gate's three sizes.** `skills/build/SKILL.md` now names a
  new surface, a new part inside a system that already exists, and one
  element, and runs the thirteen steps only at the first size. No fixture has
  been built at the second or third size, so the gate's own classification has
  never been tested against a real request, only reasoned about.
- **F2. The route step's two stopping cases.** It now takes its own
  recommendation and builds by default, stopping only in two named cases. No
  specimen exercises either stopping case or the new default path; the
  distribution the plan itself calls "a guess" is still a guess.
- **F3. `anti-slop-brief.md`.** The four roots, the inventory and the chosen
  route now survive the session in a file read before step 1 and written at
  step 4. No build has run since this shipped, so the round trip from a first
  session's file to a second session's read has never been exercised.
- **F4. The rendered pass, on both sides of the loop.** The auditor's own
  `Out of scope` line used to say a rendered pass was unreachable because the
  Craft axis answers by reading code; it now opens the page at 375, 768 and
  1440, in both themes, where a browser is available, and marks which
  findings came from looking rather than reading. That is the specific limit
  `ROADMAP.md`'s "What is deliberately not on this list" retired. The
  builder gained a related but separate step, three widths, both themes,
  reduced motion switched on, one tab pass, which is new work rather than a
  retirement. Neither side has been run by a session with browser tooling
  yet.
- **F5. Twenty-five of `repairs.md`'s 54 class assignments.** The map covers all
  fifty-four, derive 13, declare 10, branch 10, write 17 and unsettled 4, and it
  was built by reading the audit catalog and the build references against each
  other rather than by running a repair. Task 11's blind run then exercised 29
  of the 54 rows against a real tree, and Round F2 below carries what came back,
  so the twenty-five rows no finding reached are what is still unmeasured here.
  Of the 29 exercised, no class assignment was overturned; what the run found
  wrong was the `stops without` column beside them, which is F2-1.
- **F6. Nine Minor findings against the repair map, raised and deferred by the
  Task 8 review** (full list in
  `.superpowers/sdd/2026-08-24-daily-use/progress.md`, "Task 8: minor
  (deferred, 10 findings)", which miscounts its own list at ten): F5 classed
  as `write` where the blocking half is an asset; the `declare` paragraph's
  "these never stop" read against F9 and
  F10, which both stop; the `branch` paragraph promising a fact no branch row
  records; three removal-shaped `derive` rows recording three different
  stops-without; C8 classed `derive` where `deriving.md` calls the rule a
  platform fact; C6's near miss at `floor.md:70`; `repairs.md:126` repeating
  `skills/fix/SKILL.md:78` almost verbatim against the file's own
  no-repetition rule; a loose sentence about the unsettled three; and "the
  radius" against "the radius scale" for one section. One of the nine is now
  repaired: the `declare` paragraph no longer says "these never stop", because
  F9 and F10 are declare rows whose own `Stops without` cell names a fact. The
  other eight stand.
- **F7. Nine controller rulings across the round, five of which corrected the
  plan's own content rather than just an implementer's reading of it.**
  `.superpowers/sdd/2026-08-24-daily-use/progress.md` records five pre-flight
  rulings (lines 47, 54, 59, 67, 75) and four raised during execution
  (lines 118, 131, 142, 148). The five that corrected the plan: T3's step 3
  was folded into step 4 rather than left as a two-step contradiction
  (line 59); T4's step 2 replaces the whole paragraph at
  `skills/build/SKILL.md:515-517` rather than deleting a sentence from below
  that had no separate target (line 67); T7's suite count was corrected from
  the plan's stated 73 tests to 72, because the plan would have kept two
  byte-identical tests where only one exists once T7 deletes the duplicate,
  which is the reason `docs/plans/2026-08-24-daily-use.md` appears in this
  round's diff at task 10 (line 75); and Task 8 supplied two, C3, C4 and C5
  reclassified from `branch` to `declare`, which is why the counts above are
  derive 13, declare 10, branch 10, write 17, unsettled 4 rather than what
  the plan specified (line 142), and A3's stops-without root corrected from
  3 to 4, with `repairs.md`'s own provenance paragraph rewritten so it no
  longer claims every given row was correct as written (line 148). The other
  four rulings governed how to read or execute the plan rather than what it
  should have said: the line-number citation convention (line 47), where
  T9's insertion lands relative to T5's own addition (line 54), the
  mechanical re-review of Task 6's fix round (line 118), and the
  confirmation that Task 7 owed no citation of `floor.md` (line 131). None of
  the five content corrections has been measured against a repair.
- **F8. Three more Minor findings the Task 8 review did not raise, deferred
  by earlier tasks in the same ledger.** Task 1's new section names roots 1
  to 4 by number before `## The four roots` enumerates them, inherent to the
  anchor the plan chose rather than an implementer choice
  (`progress.md:91-93`). Task 4's own report cites the audit heading at line
  218 where the pre-edit hunk puts it at 219, report arithmetic only, the
  edit itself landed on the right anchor (`progress.md:108-110`). Task 7's
  two new frontmatter tests read triggers from the registry where the build
  and text siblings hardcode them, specified that way by the plan, which
  couples the fixture to the registry rather than pinning the words
  (`progress.md:135-137`). None of the three repaired in this round.

## Round F2 — what the closed loop's first blind run found, 2026-08-24

Round F's F5 is now measured in part. Three fresh agents, each blind: a full
audit of a copy of `fixtures/slop-dashboard`, then `anti-slop:fix` given that
report and nobody to ask, then a full audit of the repaired tree. Reports and
reconciliation in `calibration/2026-08-24/`, which is the record and the
authority for everything below. The headline: **29 findings fired before, 16
after, 13 closed and 0 opened; 15 repairs and 14 refusals, 12 of the refusals
correct.**

Nothing below was repaired in the round that found it, on the same rule Round T2
records: the runs are spent, and a Signal or a map row edited before the next
round is unmeasured until that round.

- **F2-1. Three of `repairs.md`'s `stops without` cells are wrong against the
  tell they map, and two more are arguable.** Out of 29 rows the run exercised.
  Wrong: `C1` says `nothing` where its Fix asks for radii tied to the scale, and
  the scale is `A3`, which is refused. `C16` says `nothing` where satisfying it
  means hard-coding a colour past a token system that stays broken. `F10` says
  the repair stops without the site's origin, and a robots file needs no origin
  at all, so the map is stricter than the tell it maps. Arguable, and the more
  useful half: `F2`, whose cell derives correctly from a Fix whose prescribed
  pattern contains the product's name and which blocked an instance that closes
  without it, and `C12`, blocked on a fact the row data already carried. The
  finding the two arguable ones carry is structural: a cell can be right about
  the repair its Fix describes and wrong about the finding actually in front of
  the fixer, because the column states one precondition where two are in play.
  Record section 3.
- **F2-2. Three of fifteen repairs did not close the finding they attacked.**
  `A4`, `C4` and `C15`, each failing a different way, and this is the number that
  matters more than the headline. `A4`: the primitive's own shadow in
  `components/ui/card.tsx` survived the pass that removed every other one.
  `C15`: the two sites the report named were fixed and a third, the toolbar, was
  not. `C4`: the fixer's own `S1` repair wrote a second short text block and
  never went back to it. Record section 1.
- **F2-3. Five repairs changed the row rather than the cause, and no single
  report can see all five.** The fixer flagged two, `C9` and `C10`, both row
  level because a root above them was refused. Audit 2 found three, `C4`, `C9`
  and `C10`. Reconciled against F2-2 the total is five: `C4`, `C9`, `C10`, `A4`
  and `C15`. The fixer knows what it decided and not what still fires; the
  auditor knows what still fires and not what was decided. **The one the fixer
  could not see, `C4`, is precisely the one its skipped step 6 re-audit would
  have caught**, because the repair that created `C4`'s second site landed later
  in the same pass. The fixer did not run step 6 and said so, substituting a
  manual signal by signal check and naming the substitution as a gap rather than
  calling it a re-audit. Record section 4.
- **F2-4. Two of fourteen refusals were work the code could have settled.**
  `F2` and `F10`, and in both the fixer named the blocker honestly and the
  blocker traces to `repairs.md` rather than to the fixer looking for an exit.
  Nothing was refused bare: all fourteen name the answer they are missing, and
  the other twelve name a root, a fact, or a row the map marks `unsettled`.
  Record section 3.
- **F2-5. Nineteen supplied rules reconcile to fifteen distinct gaps, six of
  them in the repair map this round shipped.** Seven came from audit 1, seven
  from the fixer, five from audit 2. Four gaps were found twice by independent
  readers and those are the strongest evidence in the set: no tell defines
  "internal", `C4` has no population threshold, `C16` has no name for a token
  that does not resolve, and the "three things" exemption has no threshold. The
  six against `repairs.md` and the build references it delegates to all came from
  the single fixer run, which is the right way to read that number: six holes on
  a first read is the shape of a new document rather than a broken one. Full
  table in record section 5.
- **F2-6. `C16`'s verdict flipped between two blind audits of a declaration
  neither audit changed.** Audit 1 fired it by supplying a rule that the
  Principle governs a fourth failure form its Signal does not enumerate. Audit 2
  declined it as a correctly shaped focus treatment and handed the token problem
  back to `A1`. Three reports, three different resolutions, one tell. **A tell
  whose verdict flips on unchanged code is not calibrated**, and this is the
  sharpest open question the catalog gained this round. Its structural
  consequence lands on the map: `repairs.md` assumes one class per id, and `C16`
  has two failure modes with different classes. Absent, it is a branch that stops
  without nothing. Declared and unresolvable, it is a derive that stops with
  `A1`. No row can hold both. Record sections 1 and 6.
- **F2-7. Two build-breaking defects that no tell in the 54 tell catalog
  reaches.** `app/globals.css` carried no Tailwind directive, so no utility class
  anywhere in the tree emitted any CSS, and `lib/utils.ts` did not exist while
  two files imported a helper from it. Checked against all five catalog files
  rather than against the map alone. The catalog is a catalog of taste and has no
  floor for whether the thing compiles, **which means the closed loop can drive a
  tree to a small finding count while the tree does not build.** The fixer
  repaired both under a scope rule it had to invent, because neither the fix
  `SKILL.md` nor the map addresses a build-breaking absence outside the catalog.
  Record section 7.
- **F2-8. The auditor is asked to say what the fixer can take on and never reads
  `repairs.md`.** Both closing paragraphs claim seven ids as free that the map
  does not, and neither could have been right: the report format asks one skill
  to estimate another skill's capability from outside it. That paragraph either
  needs the map or needs to stop making the claim. Record section 6.
- **F2-9. Audit 2's ledger does not close, and the prompt-authorship caveat
  cites a rule to a file that does not carry it.** `W6` appears nowhere in audit
  2, neither in its findings nor in any of its three decline categories, so 53 of
  54 ids were accounted for after the repair rather than 54. Separately, the
  caveat that a round's prompts were written by the author of the skills it
  measures has now been recorded twice and cited both times to
  `docs/calibration-method.md`. All 150 lines of that file were read for the
  record and the rule is not there. A convention followed twice, cited twice to a
  file that does not contain it, and written down nowhere is one round away from
  being dropped by whoever does not already know it. The method file is where it
  belongs.

**One question this round closed rather than opened.** Report language was an
open item twice in this file, once in the 2026-08-18 stack-neutralisation notes
and once in the first real-world run's list before it.
`skills/audit/SKILL.md:216-220` now settles it: the report is written in the
language of the request, and identifiers, paths, tell ids, class names and code
stay exactly as they are in the source. Both are marked closed where they sit.
It is settled as a rule and unmeasured as a behaviour, since no blind run has
yet reported in a language other than English against it.

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

From this run, one item is closed and one is still open:

- **Report language: closed 2026-08-24.** The run reported in the user's
  language, translating axis headings and leaving tell ids and field names in
  English, and no rule covered it either way at the time.
  `skills/audit/SKILL.md:216-220` now settles it, and settles it the way the run
  guessed: the report is written in the language of the request, and
  identifiers, paths, tell ids, class names and code stay exactly as they are in
  the source. Recorded in Round F2 above.
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

Still open from this change, apart from the last item, which this round closed:

- **The fixtures are all React and Tailwind.** A catalog that claims to read any
  stack has no specimen outside one, so the claim is argued rather than tested.
  A plain HTML and CSS pair, one slop and one clean, would be the first corpus
  work that measures the crossing rather than assuming it.
- **The build skill is further behind.** `deriving.md` still tells a builder to
  replace `theme.colors` and `theme.spacing` by name. The concepts transfer the
  same way the audit ones did, and the same measurement applies.
- **Report language: closed 2026-08-24.** It was unruled when this section was
  written, the first real-world run having reported in the user's language with
  axis headings translated and tell ids and field names left in English.
  `skills/audit/SKILL.md:216-220` now carries the rule and the exception list
  for identifiers, paths, tell ids, class names and code. Recorded in Round F2
  above.
