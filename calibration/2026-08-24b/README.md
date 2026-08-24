# 2026-08-24b: the text catalog meets four documents

`anti-slop:text` shipped on 2026-08-22 with forty tells in five axes, two
vocabulary files and four hand written corpus specimens, and nothing about it
had ever been measured. That is `ROADMAP.md` item 13. This round closes it.

Four fresh agents, each blind. None could read `corpus/README.md`, which holds
the expectation rows, and none could read any specimen but its own. Each was
given one document copied into its own clean git repository, told only that
somebody had published it, and asked to run the skill in file mode. Each was
also asked the three questions `corpus/README.md` requires: which rules it had
to supply, how each non firing tell declined, and whether the rewrite invented a
fact.

| Run | Specimen | Result | File |
|---|---|---|---|
| 1 | `slop-release-en` | 22 of 40 tells fired, 4 rules supplied, no fabrication. Rewritten: 40 lines out, 20 in. | `text-1-slop-release-en.md` |
| 2 | `clean-release-en` | 0 of 40 fired, 4 rules supplied. Byte identical. | `text-2-clean-release-en.md` |
| 3 | `slop-notice-pt` | 16 tells fired, 5 rules supplied, no fabrication. Rewritten. | `text-3-slop-notice-pt.md` |
| 4 | `clean-notice-pt` | 0 of 40 fired, 5 rules supplied. Byte identical. | `text-4-clean-notice-pt.md` |

The four files go in unedited, as the method requires. They are the evidence and
this record reconciles them against the rows rather than restating them. Every
claim below points at one of them.

**The two byte identical results are verified, not claimed.** `git diff` was run
in each target repository before this record was written, and both came back
empty. Runs 2 and 4 each say so in their own report; that is their word, and
this is the check.

**On quotation.** This file is a `README` and `scripts/validate.py` forbids dash
punctuation in every `README` in this repository. So quotations here are limited
to fragments that carry no dash, and everything else is cited by file and
section. Re punctuating a quotation to satisfy a formatting rule would fabricate
it, which is the failure `calibration/README.md` exists to stop happening twice.

**The caveat this round owes.** The prompts for all four runs were written by
the same hand that wrote the skills they measure. The agents were blind; the
prompt writing was not. `calibration/2026-08-24/README.md`, written earlier
today, carries the full argument, including the finding that the rule itself
appears in no document in this repository, `docs/calibration-method.md`
included, which two records now cite for it. That record is the authority on the
caveat and this one observes it without restating it. Two of the four specimens
are Portuguese and both were written by the author of the tells, for the reason
`BACKLOG.md` T6 gives: no other Portuguese corpus exists.

**The controller ruling that governs what this record does not do.** This round
records and the next one repairs. No tell was edited here. The round's runs are
spent, and a Signal edited now would be unmeasured until the next round, which
is the failure mode `BACKLOG.md`'s own opening paragraph names.
`docs/calibration-method.md` also records that repairs made by reading the
catalog rather than from a run have a poor record here: of five made that way in
the round of 2026-08-17, one was wrong and a second was caught mid edit, twice,
before it shipped. The `M1` repair below is written as a proposal precise enough
to apply without rediscovering it, and it is not applied.

---

## 1. Did each specimen carry what its row says

Scored id by id against the four rows in `corpus/README.md`.

### `slop-release-en`, run 1

The `expect` row lists 23 ids. **22 fired. One did not: `H5`.** No fire landed
off the row, and the specimen has no `forbid` row, so no false positive is
scoreable against it.

Fired, all 23 minus `H5`:
`H1 H3 H6 H8 T1 T2 T4 T5 T7 G1 G2 G4 G5 G6 G9 M1 M2 M3 M4 M5 P1 P4`.

**`H5` is an ownership miss rather than a blind spot.** The text `H5` was
written for was found and rewritten; it was filed under `G5`. The sentence is
*we believe this will likely become the standard workflow*, and run 1's Question
1 says why it moved: `H5` describes speculation written in the register of
record with no source, and this sentence names its source, which put it closer
to `G5`'s stacked qualifiers. Run 1 supplied the rule that explicit self
attribution moves a speculative sentence out of `H5` and into `G5`, and filed it
once rather than twice. The rewrite dropped both hedges, not one: *could
potentially* is gone and *we believe this will likely* became *We expect*
(`text-1:276-277` against `corpus/slop-release-en.md:25-27`). So the specimen's
`H5` text did not survive the pass; only the id did not fire.

### `clean-release-en`, run 2

The `forbid` row lists 20 ids. **Zero fired.** The whole catalog declined: 0 of
40. The file came back byte identical.

### `slop-notice-pt`, run 3

The `expect` row lists 16 ids. **15 fired. One did not: `T1`.** One fire landed
off the row: **`G2`**.

Fired: `H1 H3 H4 H6 T2 T4 T7 G1 G2 G4 G6 G10 M1 M3 M5 P4`.

**`T1` declined on a rule the tell does not contain.** The specimen has exactly
one enumeration, the three item bullet list. `T1`'s Signal fires "when three is
the most common count and no section departs from it", which needs at least two
counted groupings to compare. Run 3 supplied the rule that a single triad cannot
establish a most common count, and declined. See section 5: three of the four
runs supplied a rule at this same hole.

**`G2` is contested, and it is gap 4's second instance.** It fired on *que
representa um verdadeiro divisor de águas*, and `G2`'s Signal names *representa*
in its own list of copula substitutes, so on the English catalog's words the
fire is sound and the row is short rather than the tell loose. Two things cut
the other way and both belong here.

`vocabulary-pt.md:91` files *representa um marco* and *marca um divisor de
águas* under **`H1`**, and `vocabulary-pt.md` carries no `G2` section at all. So
the repository's own Portuguese vocabulary already assigns this construction to
the axis that is on the row, and a Portuguese run reading its own vocabulary
file has been pointed at `H1` for exactly this phrase.

And run 3 fired both. `H1` at `text-3:33` and `G2` at `text-3:59`, on the
identical nine words, in the same report that supplied the rule that a sentence
matching two signals is filed once and not twice. **That makes this a second
instance of gap 4**, the catalog having no rule for which axis owns a sentence
two tells reach, and it means run 3 applied its own tie break to one sentence
and not to this one.

**No remedy proposed.** Adding `G2` to the expect row would write a double count
into the answer key, and the round's own reason for repairing no tell applies
with equal force to the key: the call needs a ruling on which axis owns the
construction in Portuguese, and a ruling reached by reading rather than from a
run is the thing `docs/calibration-method.md` warns about. The next round rules.
Since `slop-notice-pt` has no `forbid` row, nothing here is scoreable as an
overreach either way.

### `clean-notice-pt`, run 4

The `forbid` row lists 15 ids. **Zero fired.** 0 of 40. Byte identical.

### The four rows, summed

| Specimen | Row | Row size | On row, fired | Off row, fired |
|---|---|---|---|---|
| `slop-release-en` | expect | 23 | 22 | 0 |
| `clean-release-en` | forbid | 20 | 0 | 0 |
| `slop-notice-pt` | expect | 16 | 15 | 1 (`G2`) |
| `clean-notice-pt` | forbid | 15 | 0 | 0 |

**Two expected ids missed across two slop specimens, `H5` and `T1`, and both
missed for a reason the runs disclosed rather than a reason we had to infer.
Zero forbidden ids fired across two clean specimens.** The one off row fire is
`G2`, and whether it is a gap in the row or a double count against `H1` is left
open above rather than settled here.

---

## 2. The sharp pair

### `clean-notice-pt`, and what zero proves

`corpus/README.md` calls this the specimen that decides whether the catalog is
usable, because it carries the dangerous patterns on purpose and every one of
them is correct. Run 4 reached every one of them and declined every one.

| The bait | The tell it baits | How run 4 declined |
|---|---|---|
| Passive in three places, actor is the court | `G9` | Text had already done the right thing: the passives name their actor, *é feita pelo Tribunal*, *migrados pela secretaria*, which is `G9`'s own Fix |
| A salutation and a signature | `P1` | Exemption: *Prezados,* and *Atenciosamente,* are real correspondence forms addressed to real recipients |
| No position at any point | `P5` | Exemption: the register is procedural, where neutrality is the human voice |
| One dash pair used as an aposto | `M1` | Exemption: used once in a long text is a choice, not a habit |
| Three deadlines because three exist | `T1` | Exemption: the three are named by the source, with real case numbers and real dates |

**What that proves.** Five exemption doors, hand written to be walked through,
were walked through by a blind agent that could not see the answer key, and the
document came out unchanged. The failure `corpus/README.md` says this skill is
most likely to have, flattening a working document to make it friendlier, did
not happen on the one file built to provoke it. That is the round's strongest
single result.

**What it does not prove.** One document. The five doors were built by the same
hand that built the tells they open, so the specimen tests whether the exemption
is findable and applicable, not whether it is correctly placed against prose
nobody in this repository wrote. A false positive lives where a human writer did
something the catalog's author did not anticipate, and this specimen contains
nothing unanticipated, by construction. It also proves nothing about the
thirteen tells that appear in no row at all. `ROADMAP.md`'s standing step, the
skill run against the reader's own Portuguese with a sample of their writing
alongside, is still the test this cannot substitute for.

### `clean-release-en`, and `P6`'s own exemption

The second sharp case. The document is a release note, so it describes what
changed, which is exactly what `P6` fires on, and a version scoped document is
`P6`'s own exemption.

**Scored: passed.** Run 2 filed `P6` under "condition arose, excused by a
`Not slop when` clause", naming the diff shaped prose it found in the source
(*no longer runs*, *is fixed*, *were never affected and have not changed*) and
excusing it because the document is, in its words, "a changelog, a release
note". The history stayed in. Run 1 passed the same case from the other side: it
read the iOS 15 paragraph as diff shaped, declined `P6` for the same reason, and
its rewrite keeps the iOS 15 removal as content rather than cutting it as
history.

**Two independent runs applied `P6`'s exemption to two different documents and
reached the same answer**, which is a stronger result than either run alone. It
is not the only such pair, and an earlier draft of this record claimed it was.
`T9`'s short document exemption was applied by runs 1 and 3, `T1`'s "named by
the source" clause by runs 2 and 4, and `P5`'s register exemption by three runs
across three registers. Four exemptions were corroborated across runs, not one.

---

## 3. What the round settles about `M1`

This is the finding the round was run for, and it is not the finding the round
expected.

`corpus/README.md` and `BACKLOG.md` T1 both record the known weakness: `M1`'s
threshold, a share above roughly 15% of a text's clause joints carried by the
dash, was found by counting these same four documents on the day they were
written. A floor found by counting, not a rate from the wild. The round was
meant to test that threshold against text this repository did not write.

**It found something worse and prior to that.** Run 3 counted the same document
twice and got two answers, and the threshold sits between them.

Run 3's Question 1, on `M1`, quoted in dash free fragments:

> Nothing in that sentence says whether a colon after a bolded list label
> (`**Prazo:**`) is a "clause joint" of the same kind as a colon in running
> prose. I counted it as one.

> That decision set the denominator at 33 joints against 5 dashes

which the report gives as 15.15%, against a stated threshold of approximately
15%. And then:

> Excluding the three list-colons from the count (a defensible reading, since
> they are list markup rather than prose punctuation) gives 5/27 ≈ 18.5%, a
> clearer fire.

> Either reading clears the line here, but the tell's own wording does not say
> which denominator is correct, and on a document this short the choice moves
> the number by three and a half points

**One document, one reading, two answers, and the threshold sits between them.**
The first figure clears 15% by fifteen hundredths of a point. The second clears
it by three and a half.

### `M1`'s Signal does not define its own denominator

This is a defect of a different kind from a threshold nobody has measured. An
unmeasured threshold is a number that might be wrong. An undefined denominator
is a number that cannot be checked, because two careful readers counting the
same file in good faith will not produce the same figure to compare against it.
The Signal names the joints it counts, "sentence breaks, commas, semicolons and
colons", and says nothing about which colons: the one after a bolded list label,
the one in a heading, the one introducing a list. Run 3 found the ambiguity in
the colons. Run 4 found a second face of the same hole and named it plainly: the
Signal asks for a computed fraction and run 4 substituted a visual estimate for
it, which was safe at 7% and would not have been safe at 15%.

### The published figures do not reproduce

`vocabulary-en.md` carries four measured figures and `vocabulary-pt.md:207`
restates the `slop-notice-pt` one in prose, as the specimen that sits closest to
the line at 19%. Two independent recounts were made for this record. **Three of
the four published figures reproduce under neither.**

The first recount applies the only definition the repository actually states,
`vocabulary-en.md:175-177`'s "count roughly: sentence breaks, commas,
semicolons, colons, and dashes", over body prose, counting every colon and every
comma. The second applies the definition this record proposes below, which
excludes list label colons, heading colons and the comma after a salutation.

| Specimen | published | stated reading | proposed definition |
|---|---|---|---|
| `slop-release-en` | 37% | 28.2% | 30.6% |
| `clean-release-en` | 8% | 6.2% | 6.2% |
| `slop-notice-pt` | 19% | 14.3% | **16.1%** |
| `clean-notice-pt` | 7% | 6.7% | 6.9% |

Three of the four published figures reproduce under neither reading. The fourth,
`clean-notice-pt`, rounds to 7% under both and is the only one that survives. Run
1 independently reported 37% for `slop-release-en`, matching the table, and no
recount here reaches it. Run 3, applying the tell's own words to
`slop-notice-pt`, reported 15.15% and 18.5%, and neither is 19% either. Counting
the two nearby variants of the proposal, 15.6% and 16.7%, **seven figures now
exist for that one document**: 14.3, 15.15, 15.6, 16.1, 16.7, 18.5 and 19. No
two readings of an undefined denominator agree, which is the whole of the
finding.

**And the proposal passes its own test.** Under every variant of the definition
proposed below, `M1` fires on the specimen written to carry it: 16.1% counting
the valediction comma as a joint, 16.7% excluding it as a salutation too, 15.6%
excluding only the list label colons. All three are above 15%. It is the stated
"count roughly" reading, the one that counts three list label colons as clause
joints, that drops `slop-notice-pt` to 14.3% and would stop `M1` firing on it.
That is a reason to adopt the proposal, not a reason to doubt the specimen.

**So the finding is about reproducibility, not about the specimen falling below
the line.** The published four were computed under a definition the tell never
states and the vocabulary file only partly states, and three of them cannot be
recovered from the specimens they claim to measure. A threshold nobody has
measured is a number that might be wrong. A figure that does not reproduce from
the file it names is a number nobody can check, which is prior to the question
of whether 15% is right.

The two clean specimens are far enough under the line that no reading changes
their verdict. `slop-notice-pt` is the one document where the reading is
**decisive**, and it is decisive because it sits near the line, not because its
divergence is the largest: `slop-release-en` diverges by 8.8 points and decides
nothing, and in relative terms the three that fail to reproduce are
indistinguishable, at roughly a quarter under the published figure each.

### The proposal, to be applied by the next round and not by this one

Not applied here. Stated precisely enough that the next round applies it without
rediscovering it.

**The ambiguity, exactly.** `M1`'s Signal says to count what share of the text's
clause joints are dashes, against sentence breaks, commas, semicolons and
colons. It does not say whether a colon that ends a list label, a colon in a
heading, or a colon that introduces a list is a clause joint. It does not say
whether punctuation inside headings, code spans or quotations is counted. It
does not say whether the count is mechanical or by inspection.

**The two figures, on `slop-notice-pt`, at 5 dashes:** 33 joints and 15.15% with
list label colons counted, 27 joints and 18.5% with them excluded, both from run
3. Threshold: above roughly 15%.

**The definition the Signal should carry.** Count in body prose only. A joint is
one of: a full stop, question mark or exclamation mark that ends a sentence; a
comma; a semicolon; a colon that joins two clauses in running prose; a dash. Do
not count a colon that introduces a list or closes a list label, a colon in a
heading, the comma after a salutation, or any punctuation inside a heading, a
code span, a URL, a number or a quoted passage. The share is dashes divided by
that total, computed rather than estimated.

**Applied, so the next round does not have to.** This definition was run over
all four specimens for this record, and the results are the third column of the
table above: 30.6%, 6.2%, 16.1% and 6.9%. `M1` fires on both slop specimens and
on neither clean one, which is what the rows ask for. The threshold does not
need to move for the definition to work.

**And what applying it obliges.** The four figures in `vocabulary-en.md` have to
be recomputed under whichever definition is adopted, and the table has to say
which one produced them. `vocabulary-en.md:175-177` carries a partial
definition, the "count roughly" list, which is where the dashes in the
denominator come from and which both recounts here used as their base; what it
does not do is say which colons and which commas are joints, and the Signal
itself states none of it. `vocabulary-pt.md` carries the same 15% and restates
the 19% figure in prose at line 207, so both files need the same treatment.

**What the round therefore did not settle.** Whether 15% is the right number
against text from the wild. That question was the round's stated purpose and it
is still open, because it cannot be asked until the denominator is defined and
the published figures reproduce. The round replaced one open question with a
prior one and answered the prior one far enough to be applied, which is progress
of the kind `BACKLOG.md` exists to carry.

---

## 4. What the round settles about `P5`

`P5`, *Neutrality where the genre wants a position*, is the only tell in the
catalog that fires on an absence of opinion, so it is the only one that can push
a rewrite into inventing a position, which the skill's own fabrication rule
forbids. `ROADMAP.md` item 13 says that if the round catches it doing that, cut
it rather than narrow it.

**It did not fire. Not once, in four runs, across all forty tell passes.**

| Run | Specimen | How `P5` declined |
|---|---|---|
| 1 | `slop-release-en` | Not accounted for. See below. |
| 2 | `clean-release-en` | Exemption: the genre is technical release notes, where "plain and neutral is the human voice" |
| 3 | `slop-notice-pt` | Exemption: procedural internal announcement, and the document's actual failure is the opposite of `P5`'s, over assertion rather than neutrality |
| 4 | `clean-notice-pt` | Exemption: the register is procedural |

**Run 1 did not account for `P5` at all**, and that is a defect in run 1's
report rather than a result. Its decline section labels its first bucket
"Condition never arose (18)" and then lists twelve ids. Its own closing
arithmetic is right, 5 plus 4 plus 4 plus 1 plus 4 equals 18, and its per axis
counts are right, but one id appears in no bucket, and reconciling the four
buckets against the forty tells shows the missing one is `P5`. The report is not
edited here. It is recorded as an error, which is what the method asks a record
to do with one.

**So `P5` was reached and declined by its own exemption in three runs**,
including on `clean-notice-pt`, the specimen written specifically to bait it: a
document that takes no position anywhere, where having one would be the defect.
It declined there for the stated reason.

**Whether that settles its future: no.** It settles that `P5` did no harm here,
and that is all.

The evidence is entirely about `P5` declining. Not one of the four specimens is
opinion, review, recommendation or argument, which is the only genre where `P5`
fires. So the round tested `P5`'s exemption four times and never tested `P5`.
The question `ROADMAP.md` asked, whether `P5` pushes a rewrite into inventing a
position, cannot be answered by four documents in which `P5` had no occasion to
push anything.

**`P5` survives this round untested on the case that would condemn it.** What
would settle it is one specimen in a genre that unmistakably takes a position,
neutral throughout, with no stance anywhere in the source for a rewrite to
recover. If the rewrite supplies a stance, `P5` is cut. That specimen does not
exist, and no `expect` row in the corpus carries `P5` on any document. It is the
next round's item, and it is cheap: one specimen, one run.

One thing the round does add, in `P5`'s favour rather than against it. Its
exemption list is long on purpose, and three blind agents applied it correctly
to three different registers without supplying a rule to do so. On
`clean-notice-pt`, three of the five baits declined without any supplied rule
from run 4, `G9`, `P1` and `P5`; the two that drew one were `T1` and `M1`. So
`P5` is one of three legible exemptions there rather than the only one, which is
less than an earlier draft of this record claimed and still counts in its
favour. Whatever is wrong with `P5`, the exemption clause is legible.

---

## 5. The supplied rules, reconciled

Eighteen supplied rules across four runs: 4, 4, 5, 5. They reconcile to
**thirteen distinct gaps**. Four of the thirteen were found by more than one
blind agent independently, and one by three.

| # | The gap | Kind | Found by | Times |
|---|---|---|---|---|
| 1 | **`T1`'s "most common count" is undefined when the text has one or two enumerations.** The Signal presupposes several groupings to compare. Run 1 supplied a minimum, that two adjacent triples in a short text count, and fired. Runs 3 and 4 supplied the converse, that one triad cannot be the most common of one, and declined. | threshold | 1, 3, 4 | **3** |
| 2 | **`G9`'s exemption list names no administrative or changelog convention.** It names the unknown or withheld actor, field convention in scientific writing, and the court in a legal document. Run 2 imported the changelog case from `P6` by analogy. Run 3 extended it to an internal office memo by analogy. Neither found it written down. | which exemption owns the case | 2, 3 | **2** |
| 3 | **`P4`'s exemption list names teaching genres only.** It exempts teaching material, a tutorial, or a guide whose contract is instruction. Run 2 extended it to a release note instruction tied to a dated defect. Run 4 extended it to an operational notice telling staff what to do. | which exemption owns the case | 2, 4 | **2** |
| 4 | **The catalog does not say which axis owns a sentence that matches two tells.** Run 1 hit it on `H5` against `G5` and ruled that explicit self attribution moves the sentence to `G5`. Run 3 hit it on `T2` against `H1` and ruled that grammatical shape decides, filing under `T2`. Both invented a tie break and both then filed the finding once rather than twice. | which axis owns the case | 1, 3 | **2** |
| 5 | **`M1`'s Signal does not define its denominator.** Whether a list label colon is a clause joint. Section 3. | definition | 3 | 1 |
| 6 | **`M1`'s "no other punctuation habit is visible" has no test.** Run 3 supplied one: what matters is whether the dashes themselves are doing more than one job, not whether other marks appear elsewhere in the text. | definition | 3 | 1 |
| 7 | **`M1` asks for a computed fraction and does not say when inspection suffices.** Run 4 substituted a visual estimate and disclosed it. | definition | 4 | 1 |
| 8 | **`T1`'s "named by the source" exemption has no test for a real inventory against a dressed up count.** Run 2 supplied one: the three items are heterogeneous and independently falsifiable, which a chosen for rhythm triple usually is not. | definition | 2 | 1 |
| 9 | **`G3` has no threshold for how many competing labels count as cycling.** Run 1 supplied at least three near adjacent labels, and declined on two. | threshold | 1 | 1 |
| 10 | **`G3`'s "different names carry different information" test can require domain knowledge no general catalog can hold.** Run 4 had to know that *processos* and *autos* are two legal concepts rather than two names, and supplied the fact itself. | definition | 4 | 1 |
| 11 | **`G10` has no minimum instance count.** Uniformity across positions needs two positions to compare, and the source had one hyphenated compound used once. Run 1 supplied the minimum and declined on principle rather than on instance. | threshold | 1 | 1 |
| 12 | **`T6`'s "would not apply to a neighbouring subject" has no test.** Run 2 supplied one: could this paragraph be reused in another product's release notes with the nouns swapped. | definition | 2 | 1 |
| 13 | **`H9` gives no threshold of specificity that converts a narrated search into an acceptable stated gap.** Run 4 imported root 2, specificity that is hard to fabricate, to break the tie. | threshold | 4 | 1 |

Eighteen rules, thirteen gaps. **Four are thresholds** a tell asks for and does
not give: 1, 9, 11, 13. **Six are definitions**, a term or a test the tell uses
without defining: 5, 6, 7, 8, 10, 12. **Three are about which axis or which
exemption owns a case**: 2, 3, 4.

**What the repetitions are worth.** A gap two blind agents hit independently is
stronger evidence than one, because a single agent's supplied rule can be that
agent being fussy. Gap 1 was hit three times, in two languages, on three
different documents, and produced a fire in one run and a decline in two, which
is the shape of a real hole: the tell gives no rule, so different readers reach
different verdicts on the same feature. Gaps 2 and 3 are the same shape as each
other, an exemption list that enumerates genres instead of naming the property
the genres share, and both were closed by an agent reasoning by analogy from a
neighbouring tell. Gap 4 says the catalog has no ownership rule at all, and two
runs wrote two different tie breaks, one semantic and one grammatical. Gap 4 has
a third instance neither run declared: run 3 fired `H1` and `G2` on the same
nine words, which is the tie break it had just written applied to one sentence
and not to another. So it is not true, as an earlier draft of this record said,
that both agents filed the finding once rather than twice. Run 1 did. Run 3 did
on `T2` against `H1` and did not on `H1` against `G2`. That inconsistency inside
one report is the strongest evidence in the round that the gap is real, because
it shows a supplied rule failing to hold even for the agent who supplied it.

**Three of the thirteen are `M1`** (5, 6, 7), **two are `T1`** (1, 8) and **two
are `G3`** (9, 10). Three tells account for seven of the thirteen gaps.

---

## 6. Fabrication

**All four runs report none, and none was found.** Runs 2 and 4 wrote nothing,
so neither had an opportunity. Runs 1 and 3 rewrote, and both checked the
rewrite against the source before delivering. Both flagged a close call rather
than hiding it, which is the disclosure the method asks for and the reason to
trust the negative.

**Run 1's close call is inside the rule and on the right side of it.** The
source says iOS 15 no longer receives security updates and never names Apple.
Run 1 declined to write "from Apple", and says so: the omission was a
fabrication it caught and removed rather than one it missed. Apple is the
obvious real world referent, and that is exactly what makes it a fabrication,
not what excuses it. The rule is that the rewrite may state what the source
states. Correct. Run 1 also names a second, smaller call: the rewrite links the
accuracy bullet to the new engine, a link the source draws explicitly two
paragraphs later in the same document. Restating a connection the source makes
in its own words elsewhere is inside the rule.

**Run 3's is at the edge of the rule, and the round should say which side.** The
source reads *Especialistas apontam que a curva de aprendizado de sistemas dessa
natureza costuma ser significativa*. The rewrite drops the attribution and lets
the claim stand as the writer's: *a curva de aprendizado desse tipo de sistema
costuma ser exigente*. Run 3 surfaced it in its own Question 3 rather than
letting it pass, and named the change precisely: no new fact was added, but the
source of the assertion changed, from an empty *especialistas* to Joana herself.

**Judgment: inside the rule, and it is the rule's edge.**

Inside, for three reasons. The fabrication rule governs facts, names, numbers,
dates and citations that are not in the source, and the proposition is
unchanged: the learning curve is demanding, which the source already asserts.
`H4` is the tell that fired, and this is `H4`'s own Fix, quoted by run 3: state
the claim as the writer's and let it stand on its argument. And the discarded
attribution names nobody, so nothing checkable was removed. There is no
*especialistas* a reader could have gone and consulted.

At the edge, for one reason that matters. Who asserts a sentence is part of what
the sentence says, and in a law office memo it is not a trivial part: a claim a
colleague makes on her own authority and a claim she reports from outside are
read differently by the people who act on them. `H4`'s Fix instructs exactly
this transfer, so if it is a problem it is `H4`'s problem rather than the
rewrite's. The honest statement is that the skill's fabrication rule governs
added content and is silent on transferred attribution, and that `H4`'s Fix
performs a transferred attribution every time it is applied.

**No repair here.** This is a candidate clause for the next round, listed in
`BACKLOG.md`: either the fabrication rule says explicitly that reassigning an
unnamed attribution to the writer is not fabrication, which is the current de
facto reading, or `H4`'s Fix gains a second option, cut the claim, for registers
where who asserts it changes what it means. Deciding that by reading is the
thing this round is forbidden to do.

---

## 7. The recoverability check meets its first real use, and nearly fails it

`skills/text/SKILL.md` gained a rule in the round of 2026-08-24, hours before
these runs: before writing over a file, run `git status` on the path and act on
what it says. Tracked and clean, rewrite in place. Tracked and modified, or
untracked, show the rewrite instead. Not a git repository at all, say so in one
line and show the rewrite.

**Run 3's first `git status` ran from the wrong directory** and reported no
repository. Under the rule as written, that answer sends the rewrite to the
conversation instead of to the file, and the run would have produced the wrong
branch. The agent caught the error itself and corrected before writing anything,
so the rewrite landed in the file where it belonged.

**Where the evidence is.** In run 3's reply, not in run 3's report, and
confirmed by the round's operator. `text-3-slop-notice-pt.md` does not mention
it, and neither does any of the other three: a reader grepping the four files
for it will find nothing. That is a small finding of its own about what these
reports capture. The three questions `corpus/README.md` asks are about the
catalog and the rewrite, so a report that answers them well can still be silent
on everything the run did to get there, including a procedure error it fixed
before it mattered. A run that corrects itself leaves no trace in a report
describing outcomes, and the near misses are exactly what a calibration round
wants to see.

**Recorded because the near miss has nothing to do with the rule being wrong.**
The rule read its input correctly. The input was wrong. A check that branches on
the output of a command run in an ambient working directory inherits every way
that directory can be wrong, and the branch it inherits is the safe looking one:
"this is not a repository" is the answer that declines to write, which reads as
caution and is in this case a false negative that costs the user the thing they
asked for.

This is the first time the check was exercised by anything other than its author
reading it. `BACKLOG.md` carries it as an item for the next round rather than a
repair here. The candidate fix is that the check runs against the target file's
own path rather than an ambient directory, and that the not a repository branch
is reached only after the path itself is confirmed. That is a change to a skill
this round measured, so it waits, like every other one.

The three other runs exercised the same check without incident, one of them
reaching the tracked and clean branch and rewriting in place, and two reaching
it and writing nothing because there was nothing to write. None of them records
that either.

---

## 8. Errors found in the four reports

Recorded rather than corrected. The reports go in unedited.

**Run 1 accounts for 17 of its 18 declines.** Its first bucket is labelled
"(18)" and lists twelve ids; its axis arithmetic is correct and its bucket
enumeration is short. The unaccounted id is `P5`, which is the one tell
`ROADMAP.md` item 13 named in advance. Section 4.

**Run 3's `M1` subtraction does not follow.** It states a denominator of 33
joints including three list label colons, then says that excluding those three
gives 27. Thirty three less three is thirty, and 5 of 30 is 16.7%, not the 18.5%
the report gives; the figure 18.5% requires removing six items, not three. This
does not weaken run 3's finding. It strengthens it: the report's own arithmetic
slipped inside a count the tell gives no procedure for, which is the gap the
finding names. Section 3 quotes the report as it stands and gives an independent
count beside it.

**Run 3's decline bucket is labelled 25 and lists 20.** Twenty is the right
number: run 3 fired 16 tells, so 24 declined, and its other three buckets hold
2, 1 and 1. The label makes its four buckets sum to 29 against 24 actual
declines. Recorded here because the `M1` finding this record leads with rests on
run 3, and a reader should know that two of its stated counts do not add up
while its evidence and its reasoning do.

**Run 4's decline arithmetic sums to 41 and says so.** It reports 30 plus 7 plus
4 and explains in its own words that `H6` is counted once, filed under "never
arose" because nothing resembling the Signal was present. The explanation is
sound and the total is a stated overlap rather than a hidden error, but the
buckets do not partition the forty tells, so the three way decline categories
`docs/calibration-method.md` asks for were not kept disjoint.

---

## What the next round owes, in order

Carried in `BACKLOG.md` under Round T2. In short:

1. **`M1`'s denominator**, defined in the Signal, and the four figures in both
   vocabulary files recomputed under it, since three of the four published ones
   reproduce under no reading tried here. The definition is written out in
   section 3 and has been run over all four specimens; the threshold does not
   have to move for it to work. First, because until it is done no `M1`
   measurement compares with any other.
2. **A `P5` specimen in a genre that takes a position**, so the tell can be
   tested rather than its exemption.
3. **The twelve other supplied rule gaps**, with the four found more than once
   going first.
4. **A ruling on which axis owns *representa* in Portuguese**, `H1` or `G2`,
   which decides whether `slop-notice-pt`'s `expect` row is short by `G2` or
   correct as written. This record proposes no row edit, because the evidence
   points both ways and adding the id could write a double count into the answer
   key. Section 1.
5. **The recoverability check's ambient directory**, and the fabrication rule's
   silence on transferred attribution.
