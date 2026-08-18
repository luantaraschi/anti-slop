# How this catalog gets calibrated

A prose catalog cannot be unit tested for whether its judgements are right. What
it can be tested for is what a reader who does not know the answer does with it.
That is what a blind run is, and every finding this repository trusts came out
of one. Repairs made by reading the catalog and reasoning about it have a poor
record here: of five made that way in the round of 2026-08-17, one was wrong and
a second was caught mid-edit, twice, before it shipped.

This file is the method. It was reconstructed from the prompts that produced the
runs in `calibration/`, because it had been living in those prompts and nowhere
else.

**The prompts themselves are in `calibration-prompts.md`.** This file is the
reasoning; that one is the text to paste. If the two disagree, this one is the
authority and the other one is stale.

## The blind run

One fresh agent, one target, one invocation.

**What it receives.** `SKILL.md`, the `references/` files its invocation names,
and one target directory. Nothing else.

**What it must not read.** `fixtures/README.md`, which holds the expected
answer. Any fixture but its own. `calibration/`, which holds every previous
run's report and a worked specimen. The repository `README.md`, `BACKLOG.md`,
`docs/`, `tests/`, `scripts/`. Name these explicitly in the prompt as a
forbidden list — an agent told only "read your target" will helpfully go
looking for context and find the answer key.

**What it is told about the situation.** That the target is a shipped product
someone published. Not that it is a fixture, not that anything was recently
repaired, not that a round is being measured. An agent that knows it is being
tested audits the test.

## Suspend the cap

`SKILL.md` caps a full report at ten findings. That cap is right for a person
reading a report and wrong for a measurement: the round of 2026-08-07 found runs
writing "real, but cut for budget" beside true positives, and the same fixture
under a suspended cap took four reported Craft ids to nine.

Say in the prompt that the cap is suspended and that nothing real should be
dropped for length. Then a low-delivery finding gets reported and ranked last,
which is information, instead of vanishing.

## Ask for the rules the agent had to invent

This is the instruction that turns an audit into a calibration. Without it a run
returns findings; with it a run returns **the catalog's own holes**.

> Wherever you had to supply a rule the tell does not contain in order to reach
> a verdict, say so explicitly and quote the tell's own words beside the rule
> you supplied.

Three runs given that instruction on 2026-08-17 disclosed ten supplied rules
between them, including the three structural defects that round was worth: a
Craft axis that could not tell chosen code from scaffold code, a two-door
framing that did not enumerate the third way a tree passes, and a tell holding
two different tests that a tree can pass one of and fail the other. None of the
three would have surfaced from the findings alone.

Ask for it every time, and phrase it as the most valuable thing the run can
return, because agents otherwise smooth over the gap to give a clean answer.

## Make the decline categories explicit

A tell declines three ways and only two of them are exemptions: the condition
never arose, the condition arose and a clause excused it, or the condition arose
and the Fix was applied. Ask the run to name which, for every decline.

Without that instruction a run will file correct work as an exemption. One run
labelled seven declines as second-door exemptions when six of them had no
failing instance to excuse, which read as heavy exercise of a clause that had in
fact never been exercised at all.

## Aim the run at what changed

A run measures whatever it is pointed at, so point it. If a round rewrote a
Signal, name that tell in the prompt and ask for its clauses walked one at a
time against the tree. If a round added a convention, ask for it applied
literally with the working shown. A general "audit this" run will reach a
verdict without ever exposing the clause you need to know about.

Do not tell it what the answer should be. "Walk A1's Signal clause by clause and
say whether each clause is true of this tree" is aiming. "Check that A1 still
fires" is contaminating.

## Score before repairing

Write down what the run produced before making any change it caused. A score
taken after the fixes is a score of the fixes.

The entries under `Last calibration` in `fixtures/README.md` follow this: counts
first, then the repairs the counts caused, then a `Recorded for vN, not fixed`
section for what was found and deliberately left. That last section is not an
apology. It is the list the next round works from.

## Commit the reports

The reports go in `calibration/<date>/`, unedited. The one time this repository
skipped that step, a published record carried two fabricated quotations and no
reader could have checked them, because the sources were on one machine. A
record that cites evidence it does not carry is a record nobody can check.

Normalise nothing except a machine-specific path, and say in
`calibration/README.md` that you did.

## Building, and then auditing

The plugin's build skill is measured by a second shape: build a specimen from a
brief, then audit the specimen blind.

**The builder is blind too.** It reads the build skill and its brief. It must
not read `fixtures/`, `calibration/`, or the auditor's catalog. A builder that
reads a clean fixture is copying, and a builder that reads the tells is writing
to the test. Both produce a specimen that measures nothing.

**Pick a subject far from the corpus.** The first specimen was irrigation
scheduling precisely because no fixture contains a valve, a probe or a crop. If
the vocabulary overlaps, copying is invisible.

**Answer all four roots in the brief, or know that you did not.** The first
brief answered one, and the builder derived the other three and flagged them —
which tested the skill's handling of an unanswered root, usefully, but meant the
run measured a brief defect as well as the skill.

**A tell that fires on the specimen is the build skill's failure**, and it
arrives with a file and a line. Trace it to the entry that should have prevented
it before repairing anything.

## What makes a run worthless

- It could read the expected answer, or any other fixture.
- It was told a repair had just been made.
- It ran under the cap while measuring coverage.
- It was asked to confirm rather than to walk the evidence.
- Its report was summarised into the record instead of committed beside it.

## What one round costs

Five to seven agents. Three to measure repairs across the fixtures, one or two
to build specimens, one to audit each specimen. They run concurrently and the
slowest is the full four-axis audit of a specimen.

The scarce resource is not the agents, it is the blindness: an agent that has
read this repository cannot be un-read, so a round gets one honest look. Batch
everything that needs measuring into the same round rather than spending a run
on one tell.
