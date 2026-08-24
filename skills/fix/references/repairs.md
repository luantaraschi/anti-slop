# Repairs

A map from a finding to the rule that repairs it, and the four things a repair
can be. `SKILL.md` carries the rule that governs all of them: repair the cause,
not the row.

## The four classes

**Derive.** The value has to come from a root. `skills/build/references/deriving.md`
carries the rule per value. These are the repairs that stop when the root is
unanswered, and they are most of the Surface axis.

**Declare.** The value exists and is right; nothing records that anyone chose
it. The repair is to move it where the project declares its values and name it
for the subject. No root needed, so these never stop.

This class has a second reading, and it is second rather than original: it also
covers a bounded property the code never declared at all — an optical offset, a
numeric variant, a wrap rule, a hit area. Those repairs add a value rather than
move one. They sit here because a bounded change that needs no root, no path and
no sentence has nowhere else to sit, and calling them `branch` would send a fixer
hunting for a missing state beside a counter that renders fine.

**Branch.** Code exists for one path and not for the others. Loading, empty,
error, disabled, offline, destructive. `skills/build/references/floor.md` carries
what each one owes. These never need a root and they do need a fact: what the
branch says to the reader.

**Write.** Somebody has to write a sentence, a title, a description, a page.
The inventory is the only source. `skills/build/references/legal.md` for the
pages, and its rule for a field nobody answered governs every case in this
class: ship the gap visibly rather than filling it with an invention.

## The map

One row per tell id. The rule column names where the repair is written down;
the class column says what kind of change it is; the stops column says whether
the repair can complete without asking.

| Id | Class | Rule | Stops without |
|---|---|---|---|
| A1 | derive | `skills/build/references/deriving.md`, the palette | root 1 and root 3 |
| A2 | derive | `skills/build/references/deriving.md`, the palette | root 3 |
| A3 | derive | `skills/build/references/deriving.md`, the radius | root 4 |
| A4 | derive | `skills/build/references/deriving.md`, the elevation | nothing |
| A5 | derive | `skills/build/references/deriving.md`, the type scale and the type family | roots 2, 3 and 4 |
| A6 | derive | `skills/build/references/deriving.md`, the spacing | root 4 |
| A7 | derive | `skills/build/references/deriving.md`, the iconography | root 2 |
| A8 | unsettled | see below | see below |
| A9 | derive | `skills/build/references/deriving.md`, the motion | root 3 |
| A10 | unsettled | see below | see below |
| A11 | derive | `skills/build/references/deriving.md`, the motion | root 3 |
| A12 | declare | `skills/audit/references/surface.md`, the tell itself | nothing |
| A13 | derive | `skills/build/references/deriving.md`, the palette | nothing |
| A14 | unsettled | see below | see below |
| C1 | derive | `skills/build/references/deriving.md`, the radius scale | nothing |
| C2 | declare | `skills/build/references/deriving.md`, the iconography | nothing |
| C3 | declare | `skills/build/references/floor.md`, when text is placed | nothing |
| C4 | declare | `skills/build/references/floor.md`, when text is placed | nothing |
| C5 | declare | `skills/build/references/floor.md`, when a control is written | nothing |
| C6 | declare | `skills/audit/references/craft.md`, the tell itself | nothing |
| C7 | derive | `skills/build/references/deriving.md`, the motion | nothing |
| C8 | derive | `skills/build/references/deriving.md`, the motion | nothing |
| C9 | branch | `skills/build/references/floor.md`, when a control is written | nothing |
| C10 | branch | `skills/build/references/floor.md`, when the theme is declared | nothing |
| C11 | branch | `skills/build/references/floor.md`, when a control is written | nothing |
| C12 | write | `skills/audit/references/craft.md`, the tell itself | a fact: what the status says |
| C13 | branch | `skills/build/references/floor.md`, when the theme is declared | nothing |
| C14 | branch | `skills/build/references/floor.md`, when something is fetched | nothing |
| C15 | branch | `skills/audit/references/craft.md`, the tell itself | nothing |
| C16 | branch | `skills/build/references/floor.md`, when the theme is declared | nothing |
| S1 | branch | `skills/build/references/floor.md`, when something is fetched | nothing |
| S2 | unsettled | see below | see below |
| S3 | branch | `skills/build/references/floor.md`, when something can be lost | nothing |
| W1 | write | `skills/audit/references/words.md`, the tell itself | a fact: what the action does |
| W2 | write | `skills/audit/references/words.md`, the tell itself | nothing |
| W3 | write | `skills/build/references/floor.md`, when something is fetched | a fact: what the space is for |
| W4 | write | `skills/build/references/floor.md`, when something is fetched | a fact: what failed, and the next step |
| W5 | write | `skills/audit/references/words.md`, the tell itself | a fact: what the person calls it |
| W6 | write | `skills/text/SKILL.md`, which the tell hands off to | a fact: the specific claim |
| W7 | write | `skills/audit/references/words.md`, the tell itself | the inventory |
| W8 | write | `skills/audit/references/words.md`, the tell itself | the inventory |
| F1 | declare | `skills/build/references/floor.md`, when the page is published | nothing |
| F2 | write | `skills/build/references/floor.md`, when the page is published | the product's name |
| F3 | write | `skills/build/references/floor.md`, when the page is published | the inventory |
| F4 | write | `skills/build/references/floor.md`, when the page is published | the product's name |
| F5 | write | `skills/build/references/floor.md`, when the page is published | the product's name |
| F6 | write | `skills/build/references/floor.md`, when the page is published | nothing |
| F7 | write | `skills/build/references/floor.md`, when an image or a media element is placed | a fact: what the image communicates |
| F8 | branch | `skills/build/references/floor.md`, when the page is published | nothing |
| F9 | declare | `skills/build/references/floor.md`, when the page is published | a fact: the site's origin |
| F10 | declare | `skills/build/references/floor.md`, when the page is published | a fact: the site's origin |
| F11 | declare | `skills/audit/references/finish.md`, the tell itself | nothing |
| F12 | write | `skills/build/references/floor.md`, when the page is published | the inventory |
| F13 | write | `skills/build/references/legal.md` | the legal inventory |

Nine of those rows — `A1`, `A2`, `A3`, `F1`, `F2`, `F13`, `S1`, `S2` and `S3` —
were read against their tells' own `Fix` fields on 2026-08-24. Eight were
correct as first written; `A3` said root 3 and now says root 4, because the
radius scale comes from density and `A3`'s `Fix` names size rather than
temperature. The remaining forty five are assigned by the rule below, one at a
time, against the `Fix` field of each.

**Read each tell's `Fix` field and let it name the class.** Where it names a
value that has to come from a root, the class is derive. Where it names a value
that exists and is unrecorded, declare. Where it names a path the code does not
have, branch. Where it names a sentence somebody has to write, write.

**A rule cell reading *the tell itself* means the builder carries no deeper
rule.** The `Fix` field is the whole of it and there is nothing further to open.
Ten rows read that way. Each is still a bounded change the fixer makes; the
cell is there so nobody goes looking in `deriving.md` for a rule that was never
written there, and derives a replacement to fill the hole.

**Where the `Fix` does not settle the class, the row says `unsettled` and the
map says why.** `S2` is the worked example and it is left unsettled on purpose.
Its `Fix` is "put the state that names the view in the address and leave the
rest in the component", which is not a value, not a branch and not a sentence:
it is a structural change to where state lives, and it can touch every consumer
of that state. Calling it any of the four would licence the fixer to make a
change of unbounded size under a class that promises a bounded one.

The other three are unsettled for that same reason, in its two forms.

**`A10`** routes every hand-rolled site through the primitive and then reworks
the primitive. That is `S2`'s shape exactly — well understood, and it touches
every callsite. A refactor, not a repair.

**`A8`** and **`A14`** are the redesign `SKILL.md` refuses by name. A template
layout is repaired by opening with the most characteristic thing about the
subject; a product page that never shows the product is repaired by showing it.
Neither changes a value, both change the composition, and `A14` also wants an
artifact the code does not hold. That is `anti-slop build` at its second size,
and whether to spend it is the person's call.

An `unsettled` row means the fixer reports the finding, names the change it
would take, and does not make it. Open a line in `BACKLOG.md` for every one, so
the count is visible rather than distributed across fifty four rows. If the
count comes out high, the four classes are wrong and that is the finding.

Four of the fifty four came out unsettled. The rest are thirteen derive, ten
declare, ten branch and seventeen write.

## What the map does not do

**It does not repeat the rule.** Every cell points at a file. A repair rule
copied here diverges from the one it was copied from, and this file has no
fixtures to catch it.

**It does not rank.** The report orders by cause, and the auditor's report
already says which root kills which symptoms.
