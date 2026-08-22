# anti-slop-text: the prose nobody read back

Design, 2026-08-22. Third skill in the plugin. Round 1.

Built the same day, in `skills/text/`, `corpus/`, `scripts/validate.py` and
`tests/test_validate.py`. Where this document and those files disagree, the
files are the record and this one is the plan that was wrong. Two places where
they already diverge are marked below.

## The problem this skill has

The auditor reads an interface and finds the palette nobody picked. The same
absence happens in prose, and it is more common, because prose has no compiler
and no rendered result to look at. A draft comes out of a model, reads fine on
the first pass, and ships. What it carries is not a style problem. It is the
shape a generator produces when nobody went back over it: significance asserted
instead of measured, three of everything, a participle tacked onto every second
sentence, a dash where a full stop belonged.

`anti-slop:audit` already touches this at one point. `W6` fires on inflated
marketing copy inside an interface and then hands the text off:

> **Fix**  Swap for something specific. **Handoff:** run the `humanizer` skill
> on the text instead of rewriting it here.

That handoff leaves the plugin. This skill is where it lands instead.

## What it never claims

The auditor's stance, carried over without weakening it:

> Nothing in this catalog proves a model wrote the text. It proves nobody read
> it back. A tell fires on absence and repetition, not on origin.

This is not decoration. It is what makes the skill safe to run on your own
writing. A catalog framed as an AI detector has to accuse before it can help,
and it will accuse a careful human writer who happens to like the word
*landscape*. A catalog framed as an unread draft has nothing to accuse.

The vocabulary is *unread*, *undecided*, *generic*. Never *AI-generated*.

## The honest boundary with humanizer

The build skill carries a section that corrects a positioning claim this
repository made and never checked. The same discipline applies here, before the
claim is made rather than after.

**The patterns are largely the same patterns.** The `humanizer` skill carries 33
of them, derived from [Wikipedia:Signs of AI
writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing). This
catalog derives from the same two sources. Claiming a new pattern list would be
false, and it is not where the difference is.

Five differences that are real, and each one is a thing this repository already
knows how to do:

1. **It bans; this does not.** The humanizer's section 14 is a hard constraint:
   *the final rewrite contains no em dashes*. The README of this repository
   says, as its own heading, that neither skill has a list of banned patterns,
   and the reason: forbid the purple gradient and the generic reappears wherever
   the list does not reach. A dash rule that fires on the dash rather than on
   the absence of a decision is the same defect one medium over.
2. **It is English only.** Every watched word, every before and after. The
   Portuguese habits of a generator are different words, and one of them
   inverts: a dash is rarer in Portuguese, so its presence carries *more*
   evidence, not less.
3. **It has never been measured.** No ids, so no fixture, no expectation row, no
   blind run. This repository's whole method is that a prose catalog is
   calibrated by handing it to an agent that has not seen the answer.
4. **It frames the job as detection of origin.** Its detection section is about
   spotting AI. See the section above for why that framing costs more than it
   buys.
5. **It loads 412 lines at once.** The auditor splits 49 tells across five files
   loaded on demand, because a full catalog crowds out the thing being read.

Two things the humanizer has that this skill takes rather than reinvents. Its
*Signs of human writing (preserve these)* list is good and becomes the evidence
half of the rule below. Its *Voice Calibration* paragraph is the seed of the
first root.

**Both skills go on existing.** What changes is that the plugin stops depending
on one that is not in it, and `W6` points here.

## The rule

The auditor's false positive rule, one medium over:

> A finding is a pattern present **and** no evidence anyone wrote it that way on
> purpose.

The evidence lives in four places. They are roles, not file paths, exactly as
the auditor's four are.

1. **A sample of the author's voice.** If the user supplied their own earlier
   writing, it outranks every tell in this catalog, the dash included. Matching
   the author beats scrubbing the tell. This is the humanizer's rule and it is
   right.
2. **Specificity that is hard to fabricate.** A real name, a figure, a date, an
   address, an odd quotation, a detail nobody would invent. A sentence carrying
   one of those is not hollow, even when it is wearing a watched word. Models
   round specifics off; people hoard them.
3. **The register the document actually requires.** Encyclopedic, technical,
   legal, reference. There, plain and neutral **is** the human voice, and
   injecting stance is the defect rather than the fix. *Ante o exposto* in a
   Brazilian petition is genre, not slop.
4. **The pattern doing real work.** Three items because three exist. Boldface
   because that term is the term. A dash because the author uses dashes
   throughout, in this text and in the sample.

Evidence in any of the four, and the tell does not fire.

### The one place a pattern is genuinely forbidden

Where the project declares a rule about its own prose, the rule outranks the
author's exemption. This repository forbids dash punctuation in `README*` and in
`site/` and `specimen/`, enforced by `check_forbidden_content_character` in
`scripts/validate.py`. Rewriting a file that rule governs, the dash goes even
when the author likes dashes.

This is not the banned list returning. A declared project rule is the strongest
form of evidence that somebody decided, so the rule reads it as evidence and
follows it. What is still forbidden is reaching for a pattern without deciding
it.

## The fabrication rule

Rewriting is where a model invents, so this carries the same weight as the rule
above rather than sitting in a checklist.

> The rewrite contains no fact, name, number, date, quotation or citation that
> is not in the source or supplied by the user.

Trading a vague claim for a specific one is allowed only when the specific comes
from the source. A sentence that needs a real detail to work gets the plain
version or gets cut. The build skill already states the general case, and its
sentence transfers unchanged: an empty inventory buys fewer words, never
invented ones.

Opinions are voice, not facts. Where root 1 licenses stance, stance may be
added. A claim about the world may not.

Fiction is the exception, and the only one.

## The three roots

The build skill has four roots that only the brief or the human answers. This
has three. There is no fourth for language, because language is detected from
the text and a root that answers itself is ceremony.

Answer each from the text where the text answers, ask where it does not, and
never fill one from a default.

1. **The voice.** A sample of the author's writing, or a statement of how it
   should sound. Without either, the rewrite defaults to plain, which is a
   stated fallback rather than a guess.
2. **What it is for and who reads it.** This sets the register, and the register
   decides which tells are hard and which are conditional. A changelog, a
   petition and an essay do not fail the same way.
3. **What is true.** The inventory of facts the rewrite may draw on. Usually the
   source text is the whole inventory. Where the user has more, this is where it
   goes.

An unanswerable root is a finding, not a blocker: say which one, and ask. A root
guessed silently produces a rewrite that reads decided and is not.

## The five axes

Each axis asks one question, the way the auditor's five do.

| Axis | Ids | The question it asks |
|---|---|---|
| **Hollow** | `H1` to `H9` | Is there anything behind this sentence? |
| **Template** | `T1` to `T9` | Did the content choose this shape, or did the mould? |
| **Grain** | `G1` to `G10` | Did anyone choose these words? |
| **Marks** | `M1` to `M6` | Did anyone set the punctuation, or did the generator? |
| **Presence** | `P1` to `P6` | Is there a person here? |

Forty tells. The five letters are disjoint from the auditor's `A C S W F`, so an
id means one thing across the whole plugin. A letter that is not the axis
initial has precedent: Surface is `A`.

Every tell carries the same four fields the rest of the catalog carries:
`Signal`, `Principle`, `Fix`, `Not slop when`. The last is the one that makes it
usable, and here it does more work than anywhere else in the plugin, because a
rewrite that fires on everything destroys the writing it was called to save.

### Hollow

| Id | Title |
|---|---|
| `H1` | Significance nobody measured |
| `H2` | Notability counted by volume |
| `H3` | A promotional adjective with no fact behind it |
| `H4` | An authority with no name |
| `H5` | A guess wearing the clothes of a fact |
| `H6` | A conclusion that would end any text |
| `H7` | The aphorism formula |
| `H8` | The deeper truth trope |
| `H9` | A paragraph about what the writer could not find |

### Template

| Id | Title |
|---|---|
| `T1` | Three of everything |
| `T2` | The negative parallelism |
| `T3` | A range whose ends are not on one scale |
| `T4` | The bolded header list |
| `T5` | A heading that restates itself before starting |
| `T6` | The challenges and prospects section |
| `T7` | Announcing the writing instead of writing |
| `T8` | Staccato drama |
| `T9` | One measure for every paragraph |

### Grain

| Id | Title |
|---|---|
| `G1` | The watched vocabulary |
| `G2` | Anything rather than the verb to be |
| `G3` | Synonym cycling |
| `G4` | The participle pile on |
| `G5` | Hedging in layers |
| `G6` | Filler that says the same thing at greater length |
| `G7` | Nominalisation |
| `G8` | Connectors stacked at every paragraph head |
| `G9` | Passive voice hiding the actor |
| `G10` | The uniformly hyphenated compound |

### Marks

| Id | Title |
|---|---|
| `M1` | Dashes at generator frequency |
| `M2` | Curly quotation marks |
| `M3` | Boldface applied by the paragraph |
| `M4` | Emoji as furniture |
| `M5` | Every word of a heading capitalised |
| `M6` | Decorative bullets and arrows |

### Presence

| Id | Title |
|---|---|
| `P1` | Chatbot residue left in the text |
| `P2` | Sycophancy |
| `P3` | The fake candid opener |
| `P4` | Coaching the reader |
| `P5` | Neutrality where the genre wants a position |
| `P6` | Prose written against a diff |

## One catalog, two languages

**The tells are language neutral.** The pattern fires, not the word. `G1` says
that a text reaching repeatedly for the same small set of high frequency words
is a text nobody chose words for; which words those are is data, and data lives
elsewhere.

Two reference files carry the watched vocabulary: `vocabulary-en.md` and
`vocabulary-pt.md`. Only there do *delve* and *outrossim* sit side by side.

Portuguese is not a translation of the English list. It has habits the English
one cannot reach, among them the stacked gerund (*garantindo*, *proporcionando*,
*trazendo*), the adverbial frame (*de forma assertiva*, *de maneira eficaz*),
the opening connector (*Além disso*, *Ademais*, *Outrossim*), the throat
clearing (*vale ressaltar*, *é importante destacar*), and the corporate
adjective (*robusto*, *assertivo*, *de ponta*).

And it has one inversion worth stating: dash punctuation is genuinely rarer in
Brazilian prose than in English prose, so `M1` fires on a lower count in
Portuguese than in English. The threshold sits in the vocabulary file, not in
the tell, which is the same arrangement `A10` uses when it puts its number in
its own `Not slop when`.

## The removal pass

Copied from the build skill, where it is the last step before the interface
ships. In prose it is the edit with the highest yield, and the humanizer
mentions it once, in passing, at its section 25.

One pass whose only purpose is deletion. For each paragraph, each example, each
second statement of the same idea, each transitional sentence: did the content
ask for this, or did the mould? Removing it and losing nothing is the answer.

Like its counterpart in the build skill, this step cannot be audited. A tell
fires on what is present, and nothing in a finished text records what a second
pass would have cut. It lives in the procedure.

## What the skill delivers

Prose. Not a report. Three modes, taken from the humanizer because they are
right, and all three deliver text.

| Mode | Trigger | Delivers |
|---|---|---|
| Pasted | text in the conversation | the rewrite, and a short note on what changed |
| File | a path | the file rewritten in place, and a short note in the conversation |
| Embedded | another skill or agent calls it mid task | the rewritten text alone, no ceremony |

The note is a sentence or two in plain words, not the auditor's output. It never
carries ids, never carries a verdict, and never ranks anything. It says what the
text was doing and what the rewrite did about it, and where a root went
unanswered it says which one. The ids exist so the catalog can be measured, and
a reader who wanted ids would have run the auditor.

In file mode the prose is rewritten and nothing else is: code blocks,
frontmatter, data, link targets and quoted material are left alone. Quoted
material is the one people forget. A watched phrase inside a quotation is being
discussed, not used.

A rewrite may be scoped to one axis, which loads one reference file rather than
five. The vocabulary file for the language the text is in loads with every
invocation, because every axis reads from it.

| Invocation | Rewrites | References to load |
|---|---|---|
| `anti-slop text` | all five axes | `hollow.md`, `template.md`, `grain.md`, `marks.md`, `presence.md` |
| `anti-slop text hollow` | Hollow | `hollow.md` |
| `anti-slop text template` | Template | `template.md` |
| `anti-slop text grain` | Grain | `grain.md` |
| `anti-slop text marks` | Marks | `marks.md` |
| `anti-slop text presence` | Presence | `presence.md` |

Plus `vocabulary-en.md` or `vocabulary-pt.md`, whichever the text is written in.
Seven reference files in all, and `check_references` requires `SKILL.md` to name
every one of them, so the table above is what satisfies it.

**This is not the auditor's Words axis.** `anti-slop words` reads the copy
inside a running interface: a button label, a toast, an empty state. It reports
and does not rewrite. `anti-slop text` rewrites prose and reports nothing. The
preamble of `words.md` already draws that line and will be updated to draw it to
here.

## The corpus

Four specimens under `corpus/`, one subject written twice in each language,
matching the shape of `fixtures/`.

| Specimen | Language | Subject |
|---|---|---|
| `slop-release-en.md` | English | a release note for a small product |
| `clean-release-en.md` | English | the same release note, read back |
| `slop-notice-pt.md` | Portuguese | um comunicado de escritório |
| `clean-notice-pt.md` | Portuguese | o mesmo comunicado, relido |

`corpus/README.md` carries the `expect` and `forbid` rows, in the format
`fixtures/README.md` uses and `check_fixture_ids` already parses.

**The Portuguese pair is the sharp one**, the way `clean-landing` is the sharp
one among the interface fixtures. It is a legal office notice, so its clean
version carries formal constructions that look exactly like the patterns this
catalog fires on and are the correct register: fixed formulae, the passive where
the actor is the court and not the writer, hedging that is legally load bearing.
Those ids go on its `forbid` row. A rewrite that flattens them has destroyed a
document to make it sound friendlier, which is the failure mode this skill is
most likely to have.

Two facts about where the specimens live. `content_files()` in the validator
collects every `README*` in the tree, so `corpus/README.md` is governed by the
no dash rule and must be written without dashes. The specimens themselves are
not `README*` and are not under `site/` or `specimen/`, so no rule reaches them,
which is required: the slop specimens have to carry dashes in order to exercise
`M1`.

## How it gets calibrated

`docs/calibration-method.md` governs, with one substitution. The auditor is
measured on what it reports. This skill reports nothing, so it is measured on
what the rewrite did.

**A run receives** `SKILL.md`, the reference files its invocation names, and one
specimen. It must not read `corpus/README.md`, the other specimens,
`calibration/`, `fixtures/`, the repository `README.md`, `BACKLOG.md`, `docs/`,
`tests/` or `scripts/`.

**A run is scored** by reading its rewrite against the specimen's rows: every id
on the `expect` row should be gone from the output, and every id on the `forbid`
row should be untouched in it. A clean specimen that comes back edited is a
false positive with a location, which is what gives the `Not slop when` clauses
their pressure.

**Two questions are asked of every run**, both from the existing method. Which
rules did you have to supply that the tell does not contain, quoting the tell
beside the rule. And, for every tell that did not fire, which of the three
declines it was: the condition never arose, a clause excused it, or the text had
already applied the fix.

**One question is new**, and it exists because this skill can fail in a way the
auditor cannot: *does the rewrite state any fact, name, number, date or citation
that is not in the source?* A fabrication is a defect even when the sentence it
produced is better than the one it replaced.

The specimens are authored knowingly, exactly as the interface fixtures are. It
is the rewriting agent that has to be blind, not the author of the text it
rewrites.

## What changes outside the skill

### `skills/audit/references/words.md`

Two edits. The preamble sends generated vocabulary to `humanizer`; it sends it
to `anti-slop:text`. `W6`'s Fix carries the handoff by name; the name changes.
No structural risk: `check_references` scans `SKILL.md` only, so a reference
file naming another skill is not parsed as a file reference.

### `scripts/validate.py`

Four changes, each one a check that takes text and returns errors, so each one
is testable without touching disk.

1. **The id alphabet.** `_TELL_ID` and `_TELL_HEADING` are `[AWFCS]`. They
   become `[AWFCSHTGMP]`.
2. **A catalog per skill.** `main()` builds one `known` set across every skill
   and checks `fixtures/README.md` against it, so a text id would be accepted in
   an interface fixture row today. `known` becomes per skill, and each skill
   names the file that holds its expectations: `fixtures/README.md` for the
   auditor, `corpus/README.md` for this one, none for the build skill.
3. **Prose files by declaration.** The loop skips `molds.md` by name, hardcoded.
   It becomes a per skill set of reference files that carry prose rather than
   tells: `{molds.md}` for the auditor, `{vocabulary-en.md, vocabulary-pt.md}`
   here. Without it the validator reports `no tells found` against two files
   that correctly hold none.
4. **A source label on two functions.** `check_fixture_ids` writes
   `fixtures/README.md` into its own error strings, so with two catalogs it
   would misattribute every corpus error to the interface fixtures.
   `report_coverage` has the opposite defect: it writes no label at all, so two
   coverage reports would print interleaved with nothing to tell them apart.
   Both take a `source` argument, defaulting to `fixtures/README.md`, which
   keeps the 49 existing tests passing unchanged; `report_coverage` prefixes its
   lines with it, so the substring assertions those tests make still hold.

The new `SKILLS` entry needs description triggers. `("text", "rewrite",
"voice")`, all three load bearing in the description below and none of them a
word the description could lose without the skill stopping firing at the right
moment.

**Divergence, recorded.** `check_references` matches any backticked filename
ending in `.md` anywhere in a `SKILL.md`, and exempts only `SKILL.md` and
`README.md` by name. This design did not anticipate that, and the first draft of
`skills/text/SKILL.md` mentioned two agent instruction files in backticks while
explaining where a project might declare a rule about its own prose. The
validator reported both as cited references that do not exist, correctly by its
own rule and uselessly by intent. The sentence was reworded rather than the
check loosened, because loosening it is how a genuinely missing reference starts
passing. The constraint is now written into the check's own docstring: in a
`SKILL.md`, a backticked `.md` filename is a reference citation and nothing
else.

### `skills/text/SKILL.md` frontmatter

```
name: text
description: |
  Rewrite text so it stops reading as a draft nobody read back. Use when
  writing sounds generated or machine-written, when a README, article, landing
  page, email, commit message, report or document needs the habits of a
  generator taken out of it, or when asked to humanise, de-slop or clean up
  prose. Keeps the author's voice, invents no facts, and reads English and
  Portuguese.
license: MIT
metadata:
  version: "0.1.0"
```

### `tests/test_validate.py`

One case per change above: an `H` id parsed as a tell, a text id rejected in an
interface fixture row, a vocabulary file accepted with no tells in it, and the
two source labels appearing in output.

**Divergence, recorded.** This section said the existing 49 tests keep passing
untouched. Their bodies do, and none was edited. But five of them share
`_write_plugin_tree`, whose docstring says it builds the smallest tree `main()`
accepts, and `main()` now requires a third skill, so the helper had to grow a
text skill and a corpus. That is the helper doing what its docstring promises
rather than a test being adjusted to pass, and it is the difference between the
two that this note exists to keep visible. Seventeen tests were added; the file
holds 66.

### The published counts

`README.md` carries badges reading `2 skills` and `catalog-49 tells`, and
`plugin.json` and `marketplace.json` both carry a description written when the
plugin audited and did not write. All of them move. The tells badge becomes 89,
with the body breaking it into 49 interface and 40 text, because one number
covering two catalogs is a claim nobody can check.

`plugin.json` goes to `0.4.0`.

The `How mature each skill is` section gains a third entry, and it has to say
plainly that this skill ships with no blind run behind it until the first round
happens. The build skill's entry is the model: it states its scores and its gaps
in the same breath.

`ROADMAP.md` gains the first calibration round as an open item.

## Out of scope

**Judging whether a text is true.** The fabrication rule governs what the
rewrite may add. It says nothing about whether the source was right.

**Translation.** A Portuguese text comes back in Portuguese.

**Fiction.** The fabrication rule is the whole objection, and in fiction
invention is the job. A text declared as fiction is declined, by name, rather
than rewritten badly.

**Prose inside an interface.** That is the auditor's Words axis and it stays
there.

## What is deliberately not built

A `molds.md` for text, which would name the mould the way the auditor's does:
the LinkedIn post, the tutorial script, the press release, the encyclopedia
voice. It would let the note that accompanies a rewrite say what the text was
imitating instead of listing what changed. It is good and it is not needed in
order to rewrite, and this repository already carries one published correction
for a claim it made before checking it.

Detection as a mode. The catalog is measured through the rewrite, and a report
mode would be a second output contract to keep honest for a use nobody asked
for.

## Open, and what each needs

**The axis names.** `Hollow`, `Template`, `Grain`, `Marks`, `Presence`. Chosen
as plain nouns with free initials. Renaming them is cheap now and expensive once
40 tells and four specimens carry the letters.

**The `M1` threshold.** Closed the same day, and not the way this section
expected, which is the third divergence and the most useful one.

The plan was a per-language rate per word, unmeasured, with the number recorded
in the vocabulary file rather than guessed at inside the tell. Counting the four
specimens once they existed showed that rate separating nothing: both clean
specimens use exactly one paired interruption on purpose, and both landed above
the threshold, because a pair is two characters and a short document is short.
The rate would have fired on the two documents written to prove it should not.

The measure that separates is the share of a text's clause joints the dash
carries: 37% and 19% on the two slop specimens, 8% and 7% on the two clean ones.
The threshold is now one number for both languages rather than two, the tell in
`marks.md` says explicitly not to count per word, and two specimens were made
dash heavier in the same edit because they had been written to carry `M1` and
did not.

What survives of the Portuguese half of the plan is smaller and honest: the
claim that the dash is rarer in Brazilian prose is an observation of usage, not
a calibrated figure, because the measurement tested what separates a read draft
from an unread one and never tested one language against the other.

**Whether `P5` survives.** *Neutrality where the genre wants a position* is the
one tell in this catalog that fires on an absence of opinion, and it is the one
most likely to produce a rewrite that adds stance the author did not hold. It is
written, and it is the first candidate for removal if a round finds it
inventing.
