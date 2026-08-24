# text-2-clean-release-en

## What I judged the document to be, and who reads it

Release notes for version 2.3 of "Tideline," an app that shows offline tide
and harbour charts. The audience is the app's users — people planning trips
around tides, likely including recreational and working sailors, who need to
know what changed, what broke and got fixed, what stopped working on old
hardware, and what is still wrong. The register is technical and terse:
numbers, dates, named constituents (M2, S2), named places (Avonmouth,
Portishead, the Bristol Channel), named OS versions. Root 1 (a sample of the
author's voice) went unanswered — nothing was supplied and there was nobody to
ask, so I read the voice off the document itself rather than falling back to a
generic plain default: it is already direct, unhedged, and comfortable with
second-person imperatives ("check the slack water times again"), and the
rewrite target was to preserve exactly that, not to flatten it further.

## The note I would have delivered

This document does not read like a draft nobody read back. Every claim carries
a number, a name or a mechanism, the passives are the ones a bug report
actually needs, and the one dash is a real aside, not a tic. No axis needed
correction, so nothing was rewritten.

## Tells that fired

None. The file is unchanged — see the `git diff` at the end of this report,
which is empty.

## Question 1 — rules I had to supply that a tell does not contain

Four places where the catalog's own words left a gap I had to close myself
before I could decide a tell was excused rather than firing:

- **T1, "Three of everything."** The tell's own text says a triple is not
  slop "when... the three are named by the source." The heading "Three things
  this release does not fix" names three, but a heading can just as easily be
  the generator's laundering of an arbitrary count — the tell gives no way to
  tell a real inventory from a title that dressed one up. I supplied the test
  myself: the three items (a 2019 survey lag, an unmodelled physical effect, a
  wifi-protocol failure mode) are heterogeneous and independently falsifiable,
  which a chosen-for-rhythm triple usually is not. That test is mine, not the
  tell's.

- **T6, "The challenges and prospects section."** Its exemption reads: "the
  difficulties are specific, sourced, and **would not apply to a neighbouring
  subject**." Nothing in the tell says how to test "neighbouring subject." I
  ran an implicit test — could this paragraph be reused, with nouns swapped,
  in another app's release notes? — and decided no, because "Avonmouth and
  Portishead run about 4 minutes late" only means anything for this app. That
  test is a rule I invented to operationalize the tell's own vague phrase.

- **G9, "Passive voice hiding the actor."** The tell lists named exemptions:
  "the actor is unknown, irrelevant or deliberately withheld... the
  convention of the field puts the method in the passive... the court rather
  than the writer is the actor in a legal document." None of those is
  "changelog convention, where the responsible party is implicit and beside
  the point to the user" — which is the reasoning I actually used to clear
  "It is fixed," "Wind setup is not modelled at all," and "harmonics are
  still drawn from the 2019 survey." P6 names changelogs as an exempt genre
  explicitly; G9 does not. I imported that exemption by analogy rather than
  finding it stated.

- **P4, "Coaching the reader."** The tell's only named exemptions are
  "teaching material, a tutorial, or a guide whose whole contract is
  instruction." Release notes are none of those, yet the document gives two
  direct second-person instructions — "download over wifi until the next
  release," "check the slack water times again" — that I judged as legitimate
  content, not padding. I supplied the distinguishing rule myself: an
  instruction tied to a specific, dated defect or limitation is content a
  release note owes its reader, regardless of whether the genre appears on
  the tell's exemption list.

## Question 2 — for every tell that did not fire, which way did it decline

**Condition never arose (30):** H1, H2, H3, H4, H5, H6, H7, H8, H9 (no
Hollow signal — no unmeasured significance, no volume-counted notability, no
bare promotional adjective, no unnamed authority, no speculative guess, no
generic send-off, no aphorism formula, no deeper-truth frame, no
search-disclaimer paragraph); T2, T3, T4, T5, T7, T8 (no negative
parallelism, no false range, no bolded-stub list, no rhetorical warm-up line
before a heading's real content, no announced throat-clearing, no run of
staccato fragments); G1, G2, G3, G5, G6, G7, G8, G10 (no watched vocabulary,
no copula-avoidance, no synonym cycling — "Tideline" and "slack water" are
named the same way every time — no stacked hedges, no filler phrase, no
buried nominalisation, no stacked connectives, no uniformly hyphenated
compound); M1, M2, M4, M5, M6 (the single dash pair sits at roughly 8% of
clause joints against this catalog's own 15% threshold — this is exactly the
low-frequency, one-genuine-interruption case the tell is built to pass, so
the generator-frequency pattern it targets never occurred; no curly quotes at
all; no emoji; every heading is already sentence case; no decorative
bullets/arrows — there are no bullet lists in the document at all).

**Condition arose, excused by a `Not slop when` clause (5):** T1 (three
named items, excused as "named by the source" — see Question 1 for the test
I had to add to apply that clause); T6 (a near-end section conceding
limitations, excused as specific/sourced/non-transferable — again see
Question 1); T9 (paragraphs of fairly close length, excused because "the
format fixes the measure, as in release notes"); P5 (a neutral register
throughout, excused because the genre — technical release notes — is one
where "plain and neutral is the human voice"); P6 (prose that narrates a
change rather than a steady state — "no longer runs," "is fixed," "were
never affected and have not changed" — excused because the document is, by
definition, "a changelog, a release note").

**Condition arose, text had already done the right thing (5):** G4 (two
participles, "rounding" and "combining," sit mid-sentence naming a real
mechanical sequence performed by the same subject — the harmonic model — not
tacked onto a sentence end as an interpretive gloss); G9 (a handful of
passives — "is fixed," "is not modelled," "are still drawn from" — where the
text had already left out an actor that would add nothing for the reader; see
Question 1 on why this required an unwritten exemption); M3 (bold used
exactly once, for the one term genuinely being defined — "slack water" — which
is the tell's own `Fix`, applied before I arrived); P4 (second-person
instruction present but tied to a specific defect the reader needs to act on,
not generic coaching; see Question 1); P1/P2/P3 could also be read this way
but I have filed them under "never arose" above since no chatbot residue,
praise, or candid-opener shape was present in any form to have been avoided.

## Question 3 — does the rewrite state any fact not in the source

No. The rewrite is the source: I made no changes to the file. Checked line by
line against the original — every harbour count, day count, minute figure,
constituent name, OS version, place name, survey year, and date in this
report itself is copied from the document, not introduced. Nothing was added,
so nothing could be fabricated.

## `git diff` in the target repository

```
(empty — no changes were made to document.md)
```
