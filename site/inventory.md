# Inventory

Root 1 of the build skill's four roots, for the page in this directory. It is
the only source `index.html`'s copy is allowed to draw on. Every figure here was
measured on 2026-08-18 rather than remembered; the command that measures it sits
beside it where one exists.

## What the product is

A plugin for Claude Code, named `anti-slop`, version 0.3.0, MIT, by Luan
Taraschi. It ships two skills: `anti-slop:audit` at 0.3.0 and `anti-slop:build`
at 0.1.0.

## What the auditor holds

**49 tells across five axes.** Surface 12 (A1–A12), Craft 15 (C1–C15), States 3
(S1–S3), Words 7 (W1–W7), Finish 12 (F1–F12).
`grep -c '^### [AWFCS][0-9]' skills/audit/references/*.md`

**Every tell has the same four fields:** Signal, Principle, Fix, Not slop when.
The last is what stops a tell becoming a lint rule that fires on deliberate
choices.

**Six invocations:** `anti-slop`, plus one per axis. A path after the mode
narrows the scope to that file or directory.

**42 of the 49 tells never name a framework or a library** — every tell on
Craft, States and Words, nine of the twelve on Surface, eight of the twelve on
Finish. The seven that do are A1, A2, A7, F1, F2, F8 and F11.

**The rule a finding has to meet:** the pattern is present **and** there is no
evidence anyone chose it. Neither half alone is a finding.

**What it never reports:** that a file was written by a model. It fires on
absence and repetition, which look the same whether a person or an agent left
them.

## What the builder holds

**Four roots** only a brief or a human can answer: what the product concretely
is, the voice, the visual temperature, the density.

**Seven shapes** a recorded decision can take: Derivation, Subtraction, Accepted
cost, Platform fact, Abstention, Judgment, Departure.

**Five checks** a record has to survive, the first being that every count in it
is a count you ran.

## Evidence that exists

**Four calibration fixtures:** `slop-dashboard`, `clean-dashboard`,
`slop-landing`, `clean-landing`. Two built to be found, two built to be cleared.

**21 blind reports**, every one committed under `calibration/`, across four
rounds dated 2026-08-07, 2026-08-17, 2026-08-17b and 2026-08-18. Eighteen are
the auditor reading fixtures; three are the auditor reading what the build skill
produced.
`find calibration -maxdepth 2 -name 'audit-*.md' | wc -l`

**`python scripts/validate.py` reports `0 problem(s)`**, and `pytest` runs 45
tests.

**The validator reports its own gaps rather than hiding them:** 15 of the 49
tells appear in no fixture row, and 21 of the 49 have no `forbid` row.

**`clean-landing` runs a gradient and a `shadow-xl`** — the same two features
the slop landing is accused over. A2 and A4 sit on its forbid row and neither
has ever fired on it in a blind run.

## The two screenshots on the page

`img/slop-landing.png` and `img/clean-landing.png` are `fixtures/slop-landing`
and `fixtures/clean-landing` rendered at 1280×760 in Chromium on 2026-08-18.

**The caveat that belongs with them:** neither fixture is a runnable
application. Both are reading specimens with no `package.json`, no entry module
and no stylesheet. To photograph them, both trees were copied out of the
repository and the missing entry scaffolding was added to the copies. What the
images show is the fixtures' own components, compiled with the fixtures' own
theme files, and not the fixture directories as the auditor reads them. Nothing
under `fixtures/` was modified.

## Install

```
git clone https://github.com/luantaraschi/anti-slop
/plugin marketplace add ./anti-slop
/plugin install anti-slop@anti-slop
```

The auditor alone, without the plugin:
`cp -r anti-slop/skills/audit ~/.claude/skills/audit`

## What has no source, and therefore cannot appear on the page

No user count, download count, or star count. No testimonial and no logo wall.
No time-saved figure, accuracy percentage, or conversion number. No claim that
the catalog is complete — 15 of 49 tells have never been tested against a
counterexample, and the page says so rather than avoiding the subject.
