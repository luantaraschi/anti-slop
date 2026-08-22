# Corpus

Four hand written specimens the text catalog is calibrated against: two
documents, a release note and an office notice, each written twice, once as a
draft nobody read back and once as one somebody did. One pair in English, one
pair in Portuguese.

The Portuguese pair is not a translation of the English pair. It is a different
document about a different subject, because a translated specimen exercises
translated habits and the Portuguese habits of a generator are its own.

Read each file as a document somebody published. The exemptions that release a
test fixture or a documentation sample do not apply inside this directory.

An `expect` row lists the ids the specimen was written to carry: every one of
them has text in that file a reader can point to as its cause. A `forbid` row
lists the ids that must not fire: each has visible evidence that somebody chose
the thing, such as a genuine count of three, a dash used once as a real
interruption, or a register that requires the passive. A tell that fires anyway
is a tell to fix, not a specimen to fix.

| Specimen | Kind | IDs |
|---|---|---|
| `slop-release-en` | expect | H1, H3, H5, H6, H8, T1, T2, T4, T5, T7, G1, G2, G4, G5, G6, G9, M1, M2, M3, M4, M5, P1, P4 |
| `clean-release-en` | forbid | H1, H3, H6, T1, T2, T4, T5, T7, G1, G2, G4, G5, G6, G9, M1, M3, M5, P1, P4, P6 |
| `slop-notice-pt` | expect | H1, H3, H4, H6, T1, T2, T4, T7, G1, G4, G6, G10, M1, M3, M5, P4 |
| `clean-notice-pt` | forbid | H1, H3, H6, T1, T2, G1, G4, G6, G9, G10, M1, M3, M5, P1, P5 |

## The sharp pair

`clean-notice-pt` is the one that decides whether this catalog is usable,
because it carries the dangerous patterns on purpose and every one of them is
correct.

It is passive in three places, and in all three the actor is the court rather
than the writer, which is what the register requires. It opens with a salutation
and closes with a signature, which `P1` would read as chatbot residue if it read
only the words. It takes no position at any point, which is what `P5` fires on,
and it is a notice, so having a position would be the defect. It carries one dash
pair used as an aposto, which is the correct Brazilian use of the mark. It names
three deadlines because three exist.

A rewrite that flattens any of those has destroyed a working document to make it
friendlier. That is the failure this skill is most likely to have, and this file
is where it shows up.

`clean-release-en` carries the second sharp case. It is a release note, so it
describes what changed, which is exactly what `P6` fires on. A version scoped
document is `P6`'s own exemption, so a rewrite that rewrites the history out of
a release note has misread the tell rather than applied it.

## Where the specimens live, and why that matters

`scripts/validate.py` forbids dash punctuation in every `README*` in this
repository and in everything under `site/` and `specimen/`. This file is
governed by that rule. The four specimens are not, and that is required: the
slop specimens have to carry dashes in order to exercise `M1` at all.

## How a run is scored

The auditor is measured on what it reports. This skill reports nothing, so it is
measured on what the rewrite did.

Give one blind agent the skill, the reference files its invocation names, and one
specimen. It must not read this file, another specimen, `fixtures/`,
`calibration/`, the repository `README.md`, `BACKLOG.md`, `docs/`, `tests/` or
`scripts/`.

Then read the rewrite against the row. Every id on an `expect` row should be
gone from the output. Every id on a `forbid` row should be untouched in it. A
clean specimen that comes back edited is a false positive with a location.

Ask three questions of every run. Which rules did you have to supply that the
tell does not contain, quoting the tell beside the rule you supplied. For every
tell that did not fire, which of the three declines was it: the condition never
arose, a clause excused it, or the text had already applied the fix. And, third,
because this skill can fail in a way the auditor cannot: does the rewrite state
any fact, name, number, date or citation that is not in the source?

`docs/calibration-method.md` carries the rest of the method and governs
wherever this file is silent.

## Known gaps

**`M1` has no specimen that exercises its first exemption.** That door opens
when a sample of the author's own writing uses dashes at that rate, and a
standalone specimen carries no sample. It can only be measured by a run that is
handed a sample alongside the text, which is a different shape of run and is not
built.

**`M1`'s threshold was rewritten by these four files before any run read
them.** The tell first counted dashes per word. Counting the specimens on 22
August 2026 showed that rate separating nothing: both clean specimens use
exactly one paired interruption on purpose, and both landed above the threshold,
because a pair is two characters and a short document is short. The measure that does
separate them is the share of the text's clause joints that the dash carries,
and the four figures are in `vocabulary-en.md`. Two of the specimens were made
dash heavier in the same edit, because they had been written to carry `M1` and
did not. The threshold now rests on four documents written by the author of the
tell, which is a floor found by counting rather than a rate reached for, and is
not evidence from the wild.

**Thirteen of the forty tells appear in no row, and eighteen have no `forbid`
row.** `scripts/validate.py` prints which ones on every run rather than leaving
the numbers in prose that ages. They are uncovered because two short documents
cannot carry forty patterns without becoming a list of patterns, which is not a
document.

**No blind run has scored any of this.** The rows say what the specimens were
written to carry. Nothing here has been measured yet. The first round is the
open item in `ROADMAP.md`.
