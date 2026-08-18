# Roadmap

Sequenced by what unlocks what, not by what would be nice. `BACKLOG.md` holds
the detail and the evidence for every item here; this file is the order and the
reasoning for it.

Two constraints set the whole shape.

**A blind run is spent once per round.** An agent that has read this repository
cannot un-read it, so measurement is the scarce thing and unmeasured changes
compound. There is a large pile of them right now.

**The audience changed on 2026-08-18.** This is for someone building with an
agent who does not know the vocabulary and is often not on React. Half of that
repositioning landed; the other half is items 2 and 3 below.

---

## 1 — Measure what is already in · one round, five runs

**Why first.** The catalog went from 41 tells to 49, gained a fifth axis, had
ten Signals broadened for stack neutrality, and gained two reading conventions —
all since the last measurement. Every round so far has found at least one thing
that fired for a reason nobody predicted, and the two most recent found a repair
that was outright wrong.

The prompts are written. `docs/calibration-prompts.md`, block 1 plus block 2.

| Run | Target | What it measures |
|---|---|---|
| `craft` | `slop-dashboard` | C13 fires; the broadened C10 |
| `craft` | `clean-dashboard` | C13, C15 decline |
| `states` | `slop-dashboard` | S1, S2 fire — the axis's first measurement |
| `states` | `clean-dashboard` | S1, S2 decline |
| `surface` | `slop-dashboard` | every rewritten Signal, clause by clause |

**Done when** the reports are in `calibration/<date>/` and `fixtures/README.md`
carries the score before any repair it causes.

**Unblocks** an honest "calibrated" claim covering the current catalog rather
than the 41-tell one, which is what the README's maturity section currently has
to hedge.

## 2 — Make the any-stack claim true · one corpus round

**Why now.** The catalog says it reads any stack and all four fixtures are React
and Tailwind. The claim is argued, not tested, and item 1 cannot test it either.

Build a fifth and sixth fixture: one plain HTML and CSS page nobody finished,
one somebody decided. Same discipline as the existing four — an `expect` row and
a `forbid` row, every id with code a reader can point at.

**Also here:** the build skill is a round behind on the same repair.
`deriving.md` still tells a builder to replace `theme.colors` and
`theme.spacing` by name, which is advice only a Tailwind project can take.

**Done when** a blind run on the new pair scores like the old pair does, and the
build skill's derivation entries name roles rather than framework keys.

## 3 — Finish the audience repositioning · small, and overdue

Three things the 2026-08-18 change started and did not complete.

- **The Output example still shows the old terse format.** The report is
  supposed to speak plainly now and the one worked example in the repo does not
  demonstrate it. A reader copies the example.
- **The build skill asks a vibe coder for "visual temperature" and "density".**
  Those are designer words. The four roots are right; the way they are asked is
  not, for the person this is now for.
- **Report language is unruled.** The first real-world run reported in the
  user's language with axis names translated and tell ids left in English.
  Nothing says which is right.

## 4 — The four tells known to be broken · needs item 1's run

Held because each is a Signal rewrite and Signal rewrites made without
measurement have a poor record here: one wrong repair, two withdrawals.

- **C1** carries two different tests and a tree can pass one and fail the other.
  Two rewrites drafted, both withdrawn — scoping to the sum fires it on the clean
  fixture, scoping to flush corners stops it firing on the slop one.
- **A5** is literally false of `slop-dashboard` under the conjunction convention,
  because two font weights live in the untouched stock primitives. It fires only
  if a reader supplies the stock-code scoping, and that rule is written as an
  evidence test rather than as a clause-reading instruction.
- **C3** contradicts itself: its Signal lists a numeric table column as a site
  and its Fix restricts the treatment to values that change.
- **C9's first exemption** releases a project where no control has a hover state
  and the absence is uniform. Uniform absence of feedback is the absence of a
  decision, which is this catalog's definition of a finding everywhere else.

## 5 — What the survey found and this repo has not taken

From the four-way comparison against the overlapping design skills, 2026-08-17.

**Three positioning claims, one of them published and wrong.** The build skill
says it does not design and hands decided constraints to `frontend-design`. It
was never checked: the two share a palette count, an anti-rank-naming rule and a
removal pass, and conflict outright on how many type families to use. The
accessibility boundary excludes by category while claiming to exclude by method,
and the catalog violates its own sentence in six places. And the handoff target
fetches its rules from another repository's main branch at review time, so it is
unversioned and carries no exemption of any kind.

**Four clauses on existing tells:** C10 gains a shadow with no dark counterpart,
C7 gains easing and a door for a deliberate full slide-out, C4 gains the case
where balance is silently ignored past about six lines, C6 gains the tinted
neutral outline.

**Three for the build skill:** a seventh shape for a sanctioned local departure,
a fifth survival check testing recorded decisions against each other rather than
against the code each annotates, and a contrast floor carried as a platform fact
rather than as evidence.

## 6 — The launch skill · the largest remaining piece

Round 4 of `docs/specs/2026-08-17-anti-slop-plugin-design.md`. Sections 8 to 16
of the reference document — SEO beyond what Finish greps, discovery, analytics,
performance, security, uploads, privacy and legal copy, model behaviour in a
user-facing product.

It returns three classes rather than one: a **finding** with a file and a line,
a **measurement** that needs something run, and a **question** only a human can
answer. That third class is what lets it carry material the auditor could never
accept without contaminating the auditor's standard.

**Held until last** because it roughly doubles the catalog, and a catalog where
21 of 49 tells have no counterexample should not double before that number comes
down.

---

## What is deliberately not on this list

**Closing every coverage gap.** Fifteen tells appear in no fixture row. Three of
those are uncovered on purpose. Of the rest, A9 and C2 have already been measured
as too broad, so the honest answer for some may be to cut rather than to cover.
Building four fixtures to exercise a tell that should not exist is the expensive
way to learn that.

**More specimens for the build skill before its own repairs land.** Three exist
and the fourteen repairs they produced are unmeasured. A fourth specimen would
measure the same version again.

**A rendered pass.** Every round has produced at least one defect that is only
visible by opening the page — a header 214px out of alignment at 1920px, a
closed panel reserving 52px it does not use. The Craft axis asks whether anyone
looked and answers it entirely by reading code. That is a real limit, it is
recorded, and closing it is a different product rather than the next item.
