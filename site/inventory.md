# Inventory

Root 1 of the build skill's four roots, for the page in this directory. It is
the only source `index.html`'s copy is allowed to draw on. Every figure here was
measured on 2026-08-22 rather than remembered; the command that measures it sits
beside it where one exists.

## What the product is

A plugin for Claude Code, named `anti-slop`, version 0.5.0, MIT, by Luan
Taraschi. It ships three skills: `anti-slop:audit` at 0.4.0,
`anti-slop:build` at 0.3.0 and `anti-slop:text` at 0.1.0.

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

**54 tells across five axes.** Surface has 14 (A1 through A14), Craft has 16
(C1 through C16), States has 3 (S1 through S3), Words has 8 (W1 through W8),
and Finish has 13 (F1 through F13).
`grep -c '^### [AWFCS][0-9]' skills/audit/references/*.md`

**Every tell has the same four fields:** Signal, Principle, Fix, Not slop when.
The last is what stops a tell becoming a lint rule that fires on deliberate
choices.

**Six invocations:** `anti-slop`, plus one per axis. A path after the mode
narrows the scope to that file or directory.

**42 of the 54 tells never name a framework, a build tool or a library.** This
includes every tell on States, seven of the eight on Words, fourteen of the
sixteen on Craft, eleven of the fourteen on Surface and seven of the thirteen on
Finish. The twelve that do are A1, A2, A7, C14, C16, W8, F1, F2, F5, F8, F11 and
F12. Measured with a proper-noun search, because a narrower one misses
`next/image`, `Vite's`, `Next's` and `Storybook`.

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

**Five references**, read at the step that needs them rather than all at once:
`deriving.md` for the rule per derived value, `floor.md` for what no brief
answers differently, `legal.md` for the privacy notice and the terms,
`composing.md` for the ground and the largest element and the routes, and
`precedents.md` for moves measured off twenty reference sites.

**Three registers.** Anything with one right answer it settles in silence. The
shape of the page it brings as two or three named routes and waits for an
answer. Anything bolder it proposes once there is a page to look at. A decision
belongs in the second register when changing it later would mean rebuilding
rather than editing.

**What is not measured:** the route step is exercised by no fixture and no
specimen. Contrast and the collision test are unauditable by construction and
are reported rather than checked.

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

**`python scripts/validate.py` reports `0 problem(s)`**, and `pytest` runs 69
tests.

**The validator reports its own gaps rather than hiding them:** 20 of the 54
tells appear in no fixture row, and 26 of the 54 have no `forbid` row. Five of
those twenty are the tells added on 2026-08-22 and no fixture holds the
condition any of them fires on yet.

**`clean-landing` runs a gradient and a `shadow-xl`.** The slop landing uses both
features too. On `clean-landing`, each value comes from named theme colours and
appears once. A2 and A4 sit on its forbid row and neither has ever fired on it
in a blind run.

## The comparison screenshots on the page

`img/slop-landing.png` is `fixtures/slop-landing` rendered at 1280×1000 in
Chromium on 2026-08-18.

The comparison frame uses a 1280:760 aspect ratio for every screenshot. The
slop fixture is aligned to the top and its last 240 pixels are cropped; that
keeps the hero, the repeated cards and the unsupported figures visible while
giving the two pieces of evidence equal visual weight. The lull capture already
has that ratio and is shown whole.

**The caveat that belongs with it:** that fixture is not a runnable application.
It is a reading specimen with no `package.json`, no entry module and no
stylesheet. To photograph it, the tree was copied out of the repository and the
missing entry scaffolding was added to the copy. What the image shows is the
fixture's own components compiled with its own theme file, not the fixture
directory as the auditor reads it. Nothing under `fixtures/` was modified.

`img/lull-example-05cfa6d.png` is the public page for
[`lull`](https://luantaraschi.github.io/lull/) rendered at 1280×760 on
2026-08-20 from the local checkout at commit `05cfa6d`. The screenshot shows
the complete opening claim and the start of the interactive instrument. The
page drives the same pure reducer exported by the package; that relationship is
stated in lull's own page and README rather than inferred here.

`img/merge-odds-before.png` and `img/merge-odds-after.png` are the two public
routes for [`Merge Odds`](https://luantaraschi.github.io/merge-odds/) rendered
at 1280×760 on 2026-08-20 from commit `36a79b3`. The first route is an
intentionally generic demonstration with a purple gradient, emoji icons,
interchangeable promises and repeated rounded cards. The second route is the
product page. Its opening argument is the policy gate the tool applies before
work begins, and its interactive reader uses the repository's measured data.

Merge Odds is the default pair because both pages describe the same product.
That controls for subject matter and makes the change in decisions easier to
read. lull remains available as a second positive example because its
composition solves a different product problem without borrowing the Merge
Odds visual system.

The project switcher is progressive enhancement. With JavaScript, one pair is
visible and the buttons update their pressed state, the heading and the URL
fragment. Without JavaScript, both pairs remain in the document and the
buttons stay hidden. The install command follows the same rule: copying is an
enhancement, while the command remains selectable text without it.

`img/ledgerline.png` remains in the published artifact as a compatibility
asset. The previous deploy removed it at the same moment the HTML stopped
referencing it, so a browser holding the older HTML briefly rendered its alt
text against the newer artifact. Keeping the old path makes both sides of that
cache boundary valid. The current page does not reference it.

**Why the decided images are not `fixtures/clean-landing`.** That fixture is clean
in the auditor's sense: every value on it was decided. Nobody composed the page
because the fixture only exists to make tells decline. Put beside the slop page,
it argued the wrong thing. A reader saw two plain pages and learned nothing.
lull and Merge Odds are shipped open-source products whose opening arguments,
typographic roles and interactive proof are documented in their own source.

**What those images must not be read as claiming:** that passing an audit
produces their composition. The catalog can recognize evidence of decisions;
it cannot supply the opening idea or the arrangement that makes those
decisions legible. Merge Odds used `anti-slop:build` to record its roots and
derived values. Composition still came from the frontend design work.

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
No time-saved figure, accuracy percentage, or conversion number. The catalog is
not complete. Twenty-six of 54 tells have never been tested against a
counterexample, and the page says so. Twenty-six
is the number with no `forbid` row, which is what a counterexample is: a case a
tell must *not* fire on. Twenty is the different, smaller number of tells that
appear in no fixture row at all, and attaching it to this claim understates the
gap.
