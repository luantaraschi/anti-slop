# Inventory

Root 1 of the build skill's four roots, for the page in this directory. It is
the only source `index.html`'s copy is allowed to draw on. Every figure here was
measured on 2026-08-18 rather than remembered; the command that measures it sits
beside it where one exists.

## What the product is

A plugin for Claude Code, named `anti-slop`, version 0.3.0, MIT, by Luan
Taraschi. It ships two skills: `anti-slop:audit` at 0.3.0 and `anti-slop:build`
at 0.1.0.

## What the identity means

The mark is a proofreader's caret beneath a line: the visible evidence that
somebody came back to the work. The wordmark places that caret under the hyphen
in `anti-slop`, so the repository avatar, README and presentation page all use
the same gesture. It is not a strike-through and does not claim that individual
patterns are banned.

The palette is paper, ink, a quiet margin grey and oxide correction ink. The
body is a text serif because the product returns a report; utility labels and
the wordmark use the reader's monospace because findings end in a file and a
line.

## What the auditor holds

**49 tells across five axes.** Surface 12 (A1–A12), Craft 15 (C1–C15), States 3
(S1–S3), Words 7 (W1–W7), Finish 12 (F1–F12).
`grep -c '^### [AWFCS][0-9]' skills/audit/references/*.md`

**Every tell has the same four fields:** Signal, Principle, Fix, Not slop when.
The last is what stops a tell becoming a lint rule that fires on deliberate
choices.

**Six invocations:** `anti-slop`, plus one per axis. A path after the mode
narrows the scope to that file or directory.

**39 of the 49 tells never name a framework, a build tool or a library** —
every tell on States and Words, fourteen of the fifteen on Craft, nine of the
twelve on Surface, six of the twelve on Finish. The ten that do are A1, A2, A7,
C14, F1, F2, F5, F8, F11 and F12. Measured with a proper-noun search, because a
narrower one misses `next/image`, `Vite's`, `Next's` and `Storybook` and returns
a flattering 42.

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

**Twelve tells sit on `slop-landing`'s expect row:** A2, A7, A8, C15, W1, W6,
W7, F2, F3, F4, F5, F12. `clean-landing` carries A2 and A4 on its `forbid` row,
and neither has fired on it in any blind run.

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

`img/slop-landing.png` is `fixtures/slop-landing` rendered at 1280×1000 in
Chromium on 2026-08-18.

**The caveat that belongs with it:** that fixture is not a runnable application.
It is a reading specimen with no `package.json`, no entry module and no
stylesheet. To photograph it, the tree was copied out of the repository and the
missing entry scaffolding was added to the copy. What the image shows is the
fixture's own components compiled with its own theme file, not the fixture
directory as the auditor reads it. Nothing under `fixtures/` was modified.

`img/ledgerline.png` is `specimen/index.html` rendered at 1280×1000 on the same
day. That one is the page itself rather than a photograph of parts — it is
published at `/specimen/` and the reader can open it and read its stylesheet.

**Why the second image is not `fixtures/clean-landing`, which it used to be.**
That fixture is clean in the auditor's sense: every value on it was decided.
It is not composed, because nothing asked it to be — its job is to make tells
decline. Put beside the slop page it argued the wrong thing, since a reader
sees two plain pages and learns nothing. `specimen/` is the same product and
the same decided material with a person also having composed the page, which is
what the comparison is actually about.

**What that image must not be read as claiming:** that the plugin designs. It
does not, and `skills/build/SKILL.md` says so in its own words. The composition
is a person's and the catalog has no tell that would have found it missing.

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
the catalog is complete — 21 of 49 tells have never been tested against a
counterexample, and the page says so rather than avoiding the subject. Twenty-one
is the number with no `forbid` row, which is what a counterexample is: a case a
tell must *not* fire on. Fifteen is the different, smaller number of tells that
appear in no fixture row at all, and attaching it to this claim understates the
gap.
