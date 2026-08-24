# Roadmap

Sequenced by what unlocks what. `BACKLOG.md` holds the detail and the evidence
for every item; this file is the order, the status, and what each one needs.

Two constraints set the shape.

**A blind run is spent once per round.** An agent that has read this repository
cannot un-read it, so measurement is the scarce thing and unmeasured changes
compound.

**The audience is someone building with an agent** who does not know the
vocabulary and is often not on React. That repositioning landed on 2026-08-18.

---

## Done

### 1 — Measure the catalog as it stands ✅ 2026-08-18

Five blind runs, reports in `calibration/2026-08-18/`, score recorded in
`fixtures/README.md` under `v4` before any repair it caused.

| Run | Result |
|---|---|
| `slop-dashboard`, Surface | 6 of 6 expected, nothing off-row |
| `slop-dashboard`, Craft | 11 fire, including C13 and C15 on their first read |
| `slop-dashboard`, States | S1 and S2 fire, S3 declines — the axis's first measurement |
| `clean-dashboard`, Craft | 0 of 15, one exemption out of fifteen declines |
| `clean-dashboard`, States | 0 of 3, nothing leaked |

**Caveat recorded in the record itself:** the prompts were written by the author
of the tells they measure, which `docs/calibration-method.md` says not to do.
The agents were blind; the prompt-writing was not.

### 2 — Stack neutrality ✅ 2026-08-17 and 18

Both skills. Ten Signals broadened, the four evidence places restated as roles,
`deriving.md` and the build skill's replace-rather-than-extend rule given a
plain-CSS equivalent, and stack removed as a scope limit. Measured in round 1
above: A7's broadening "widened what gets examined without widening what gets
convicted," and A5's removed a false citation it used to invite.

**Not done, and it is the gap:** all four fixtures are still React and Tailwind,
so the claim is argued rather than tested. See item 6.

### 3 — Build skill brought level ✅ 2026-08-18

A seventh recorded shape (Departure), a fifth survival check that tests records
against each other rather than against the code each annotates, a contrast floor
carried as a platform fact, and two hand-checks that cannot be done by reading.

### 4 — The false positioning claim ✅ 2026-08-18

The build skill said it does not design and hands decided constraints to
`frontend-design`. A survey found the claim was asserted, never checked, and
wrong: the two share a palette count and a naming rule and conflict on type
families. Corrected in both places it was published.

### 5 — Repairs from round 1 ✅ 2026-08-18

The counting-clause roster (short by two), A12's independently-readable second
clause, C7's `display: none` gap on its third independent report, S2's Signal
listing a case its own exemption forgave, and the States preamble exempting the
corpus from its own axis.

**And three comments this repository put into `clean-dashboard` that its code did
not support** — the filter link that did nothing, the breakpoint claimed as
measured while taken from the framework, and `12 = 5 + 7` stated as the tree's
rule while holding at one of five panels. All three repaired in the code rather
than the prose.

### 12 — The text skill ✅ 2026-08-22

`anti-slop:text` shipped. Forty tells in five axes (`H`, `T`, `G`, `M`, `P`),
two vocabulary files, four corpus specimens with expectation rows, and the
validator extended to check two catalogs against their own expectations rather
than one merged set. `W6`'s handoff moved from `humanizer` into the plugin.

Design in `docs/specs/2026-08-22-anti-slop-text-design.md`.

**Nothing about it was measured when it shipped.** That was item 13, and item
13 is the entry directly below: the round of 2026-08-24 scored all four
specimens and is what closed it.

### 13 — The first blind round for the text catalog ✅ 2026-08-24

Four blind runs, one per corpus specimen, reports and reconciliation in
`calibration/2026-08-24b/`. Scored against the `expect` and `forbid` rows in
`corpus/README.md`.

| Run | Result |
|---|---|
| `slop-release-en` | 22 of 23 expected ids fired, nothing off-row |
| `clean-release-en` | 0 of 20 forbidden fired, file byte identical |
| `slop-notice-pt` | 15 of 16 expected fired, one off-row fire (`G2`) whose ownership against `H1` needs a ruling |
| `clean-notice-pt` | 0 of 15 forbidden fired, file byte identical |

The two byte-identical results were confirmed with `git diff` in each target
repository. Neither rewrite invented a fact, and both flagged a close call
rather than hiding it. `clean-notice-pt`, the specimen `corpus/README.md` calls
the one that decides whether the catalog is usable, had all five of its
deliberate baits reached and declined: `G9`, `P1`, `P5`, `M1` and `T1`.
`clean-release-en`'s sharp case, `P6`'s own exemption for a version-scoped
document, passed from both sides — run 2 excused it and run 1's rewrite kept
the history in.

**What it asked for, and what came back.**

The round was run to settle two things.

*`M1`'s threshold against text this repository did not write.* It is 15% of a
text's clause joints carried by the dash, found by counting the four specimens
on the day they were written, after the per-word rate it replaced was measured
and separated nothing. Four self-authored documents is a floor, not a rate from
the wild.

**The threshold did not move. The published figures turned out not to
reproduce.** `M1`'s Signal does not define its own denominator, so no two
readings of it agree. Run 3 counted one document two ways under the tell's own
words and got 15.15% and 18.5%. Two further recounts made for the record, one
under the only definition the repository states and one under the definition the
record proposes, put `slop-notice-pt` at 14.3% and 16.1% against a published
19%. With the two nearby variants of the proposed definition, 15.6% and 16.7%,
seven figures now exist for that one file: 14.3, 15.15, 15.6, 16.1, 16.7, 18.5
and 19. **Three of the four published figures reproduce under neither
recount**; only `clean-notice-pt`'s 7% survives.
That is a defect of a different kind from a threshold nobody has measured: an
unmeasured number might be wrong, a number that cannot be recovered from the
file it names cannot be checked at all, and it is prior to the question of
whether 15% is right. Under the proposed definition `M1` fires on both slop
specimens and neither clean one, so the definition passes the rows and the
threshold does not have to move for it to work. Written out as a proposal in the
record, run over all four specimens there, and deliberately not applied to the
skill. `BACKLOG.md` T2-1.

*Whether `P5` survives.* It is the only tell that fires on an absence of
opinion, so it is the only one that can push a rewrite into inventing a
position, which is a fabrication under the skill's own rule. If the round
catches it doing that, cut it rather than narrow it.

**It was not caught, and it was not tested.** `P5` did not fire once in four
runs. Three runs reached it and declined it by its own register exemption,
including on the specimen built to bait it; run 1 does not account for it at
all, which the record files as an error in run 1's report. None of the four
specimens is opinion, review, recommendation or argument, so the round tested
`P5`'s exemption four times and never tested `P5`. It survives untested on the
case that would condemn it, and what settles it is one specimen in a genre that
takes a position. `BACKLOG.md` T2-2.

**And the finding neither question asked for.** Eighteen supplied rules across
the four runs reconcile to thirteen distinct gaps: four thresholds a tell asks
for and does not give, six terms or tests it uses without defining, three about
which axis or which exemption owns a case. Four of the thirteen were found by
more than one blind agent independently and one by three, which is `T1`'s "most
common count" being undefined on a text with one or two enumerations. Three
tells carry seven of the thirteen: `M1`, `T1` and `G3`. Nothing was repaired in
the round that found it, by controller ruling: the runs are spent, and a Signal
edited now is unmeasured until the next round.

**Caveat, recorded in the record itself:** the prompts were written by the
author of the tells they measure, and both Portuguese specimens were too. The
agents were blind; the prompt writing was not.
The recoverability check that shipped hours earlier met its first real use in
this round and nearly produced the wrong branch, from a `git status` run in the
wrong directory rather than from anything wrong with the rule. Recorded in the
record's section 7 and carried as `BACKLOG.md` T2-6.

### 14 — Daily use: proportion, a rendered-pass step, and the loop closed with a fourth skill ✅ 2026-08-24

Ten tasks. The builder got a step 0 naming three sizes of job — a new surface,
a new part inside a system that already exists, and one element — and the
thirteen steps now run only at the first size. Its route step takes its own
recommendation and builds by default, stopping in two named cases only. The
four roots, the inventory and the chosen route now survive the session in
`anti-slop-brief.md`, read before step 1 and written at step 4. Each skill
states what language it answers in. The rewriter checks a file is recoverable
before writing over it.

The loop that used to stop at a report now closes. `anti-slop:fix` shipped
with its one reference, `repairs.md`, mapping all 54 interface tells to the
rule that repairs each one, in five classes: derive 13, declare 10, branch
10, write 17, unsettled 4. The auditor's report now closes with the line
naming where the repair happens. The package and every published surface
were brought up to four skills: `plugin.json` at 0.6.0, `audit` at 0.5.0,
`build` at 0.4.0, `text` at 0.2.0, `fix` at 0.1.0, suite at 72 tests.

This round also retires the "rendered pass" limit that used to sit under
"What is deliberately not on this list", below. That limit was written about
the auditor's own `Out of scope` line, which used to say a rendered pass was
out of reach because the Craft axis answers by reading code. It now opens
the page at 375, 768 and 1440, in both themes, where a browser is available,
and marks which findings came from looking rather than reading. The builder
gained a related but separate step of its own, three widths, both themes,
`prefers-reduced-motion` switched on, one tab pass, which is new work rather
than a retirement, since a build never had this step before.

**The ten tasks above spent no blind run between them.** Everything in this
entry is a prose or process change, and tasks 11 and 12 then spent seven runs
elsewhere: three on the repair loop, in item 15 below, and four on the text
catalog, in item 13 above. Neither reaches the entry gate's three sizes, the
route step's new default, `anti-slop-brief.md` or the rendered pass, so what
this entry records is still measured by nothing. `BACKLOG.md` Round F carries
the full account of what is owed.

### 15 — The first run of the closed loop ✅ 2026-08-24

Three blind agents on one copy of `fixtures/slop-dashboard`: an audit, then
`anti-slop:fix` given that report and nobody to ask, then an audit of the
repaired tree. The record is `calibration/2026-08-24/README.md` and it
reconciles the three reports rather than restating them.

**29 findings fired before, 16 after. 13 closed and 0 opened.** The after set is
a strict subset of the before set, checked id by id, so the fixer introduced no
finding the catalog can name. Of 29 findings it was handed, 15 were repaired and
14 refused, and **12 of the 14 refusals name an answer only a person holds**.
Nothing was refused bare.

**It is safe to run and not yet trustworthy unattended**, and the gap between
those two is where the round's value is. Three of the fifteen repairs did not
close the finding they attacked. Five in total changed a site rather than the
thing that governs it, and no single report could see all five: the fixer knows
what it decided and not what still fires, the auditor the reverse. The one the
fixer could not see is precisely the one its skipped step 6 re-audit was written
to catch, which arrived as a demonstration rather than as an assertion.

**The catalog gained its sharpest open question.** C16's verdict flipped between
two blind audits of a declaration neither audit changed: fired by one, declined
by the other, refused against the map by the fixer. A tell whose verdict flips on
unchanged code is not calibrated.

**`repairs.md` came back from its first blind reader with three demonstrably
wrong `stops without` cells out of 29 rows exercised**, two more that are right
about the repair and wrong about the finding in front of them, and a structural
assumption, one class per id, that C16 breaks. No class assignment was
overturned; the column beside them is what was wrong.

And two build-breaking defects that no tell in the 54 tell catalog reaches: a
missing Tailwind directive and a missing `lib/utils.ts`. The catalog is a catalog
of taste with no floor for whether the thing compiles, so the closed loop can
drive a tree to a small finding count while the tree does not build. Nothing was
repaired in the round that found it, on the usual rule. `BACKLOG.md` Round F2
carries all of it.

**Caveat, recorded in the record itself:** the prompts for all three runs were
written by the same hand that wrote the skills they measure. The agents were
blind; the prompt writing was not. The record also establishes that this
convention has now been recorded twice, cited both times to
`docs/calibration-method.md`, and that the file does not contain the rule.

---

## Open, and what each needs

### 6 — A plain HTML and CSS fixture pair · **can be done without you**

The catalog says it reads any stack and every specimen is React and Tailwind.
Two more fixtures — one page nobody finished, one somebody decided — with an
`expect` row and a `forbid` row each, then a blind run against them.

This is the largest remaining thing that does not need a ruling.

### 7 — C1's impasse · **needs you**

Not a rewrite. A decision.

Its Signal holds two tests and a tree can pass one and fail the other. Two
rewrites were drafted and both withdrawn, and two independent runs have now
reproduced the split with locations: under the sum-only reading C1 fires twice on
`clean-dashboard`, at `app/page.tsx:93` and `components/table.tsx:34`.

**The step:** read those two sites and rule which reading is right. If the sum
reading wins, the clean fixture gains two Craft findings and has to change. If
the gate reading wins, the counting sentence should be demoted in the text so it
stops looking like a second test.

### 8 — The build skill's four roots, in your audience's words · **needs you**

It asks for "visual temperature" and "density". Those are designer words and the
reader is a vibe coder. The roots are right; the asking is not.

**The step:** write how you would ask those four questions to someone who has
never read a design brief. I can turn the phrasing into the skill; I cannot
invent the vocabulary of an audience you chose and I have not met.

### 9 — S3 and the unwired control · **needs a ruling, then I can build it**

Both States runs found the same hole independently. A control that promises an
action and performs none — four of `slop-dashboard`'s seven buttons — is exactly
what the axis is named for, and no tell reaches it. S3 requires the action to
exist before the guard can be missing.

**The step:** decide whether that is a fourth States tell or a clause on S3. My
read is a fourth tell, because S3's four exemptions are all doors for products
that act. Say which and I will write it.

### 10 — The rest of the survey · **mostly without you**

Four clauses on existing tells (C10's shadow with no dark counterpart, C7's
easing, C4's balance-ignored-past-six-lines, C6's tinted neutral outline), one
removal (C9's first exemption releases uniform absence of feedback, which is the
absence of a decision), and C3's self-contradiction.

All are Signal edits, so they wait for a round that can measure them — which
means they ride along with item 6's run rather than going in alone.

### 11 — The launch skill · **the legal half needs you**

Sections 8 to 16 of the reference document. Reach, speed, guard, trust. It
returns findings, measurements and questions rather than findings alone.

**The step for you:** the privacy, terms and retention material. You know that
domain and I would be guessing where guessing has consequences. The rest —
SEO detail, performance, analytics, the security handoff — I can draft.

Held until last because it roughly doubles the catalog, and 26 of 54 tells still
have no counterexample.

---

## One step that is yours today

**Run the audit on two or three of your own projects.** Twenty blind runs have
scored fixtures this repository built. One has scored real code — your portfolio
— and it found a placeholder endpoint that silently broke your contact form on
three pages, plus three defects in the report format that no fixture could have
surfaced. Real code is where false positives live, and it is the cheapest test
you can run.

**And run the text skill on something of yours in Portuguese**, with a sample of
your own writing alongside it. Two of the four corpus specimens are Portuguese
and both were written by the same hand that wrote the tells, which
`docs/calibration-method.md` says not to do. Your own prose is the first text
this catalog will meet that it did not also invent, and the Portuguese half is
the half with no prior art anywhere to check it against. A false positive there
will be visible to you immediately and invisible to me.

---

## What is deliberately not on this list

**Closing every coverage gap.** Twenty tells appear in no fixture row, which
`scripts/validate.py` prints on every run. Three are uncovered on purpose. Of
the rest, A9 and C2 have been measured as too broad, so the honest answer for
some may be to cut rather than to cover.

A rendered pass used to sit here too. Item 14, above, is where it was retired
and what replaced it.
