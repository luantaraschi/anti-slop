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

**Nothing about it is measured.** That is item 13, and it is the first thing in
the Open list below even though it carries the highest number there.

---

## Open, and what each needs

### 13 — The first blind round for the text catalog · **can be done without you**

Goes first. Forty tells, four specimens and two unmeasured thresholds shipped
together, which is the shape this file's own opening paragraph calls the failure
mode: unmeasured changes compound.

The round differs from an audit round in one way. This skill returns text, not
findings, so a run is scored by reading its rewrite against the specimen's row
rather than by reading its report. `corpus/README.md` carries the procedure and
the third question the round has to ask, which is whether the rewrite invented a
fact.

Two things the round should settle, both recorded in the skill rather than
guessed at.

**`M1`'s threshold against text this repository did not write.** It is 15% of a
text's clause joints carried by the dash, and it was found by counting the four
specimens on the day they were written, after the per-word rate it replaced was
measured and separated nothing. Four self-authored documents is a floor, not a
rate from the wild.

**Whether `P5` survives.** It is the only tell in the catalog that fires on an
absence of opinion, so it is the only one that can push a rewrite into inventing
a position, which is a fabrication under the skill's own rule. If the round
catches it doing that, cut it rather than narrow it.

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

Held until last because it roughly doubles the catalog, and 21 of 49 tells still
have no counterexample.

---

## One step that is yours today

**Run the audit on two or three of your own projects.** Thirteen blind runs have
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

**Closing every coverage gap.** Fifteen tells appear in no fixture row. Three are
uncovered on purpose. Of the rest, A9 and C2 have been measured as too broad, so
the honest answer for some may be to cut rather than to cover.

**A rendered pass.** Every round produces at least one defect only visible by
opening the page — a header 214px out of alignment at 1920px, a closed panel
reserving 52px. The Craft axis asks whether anyone looked and answers it by
reading code. Recorded as a limit; closing it is a different product.
