# Backlog

An index, not a record. Every item below is stated somewhere in
`fixtures/README.md`, which is the authoritative version and was written with
the evidence in front of it. Each entry here points at that paragraph, adds what
the work costs and what it waits on, and stops. Where the two disagree, the
record wins and this file is the one that is wrong.

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
`skills/anti-slop/` with its catalog and changed nothing under this heading. It
spent no blind run, which is the point: a restructure that changes no tell needs
no measurement, so the run it did not spend is still available to whichever
round carries Round A.

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

## What finishes a round

`python -m pytest tests/` green, `python scripts/validate.py` at
`0 problem(s)`, and the round's blind runs committed under
`calibration/<date>/` with `fixtures/README.md` updated to say what they scored
before any repair they caused. A score taken after the fixes is a score of the
fixes.
