---
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
---

# text

## What this is

This skill reads prose and returns prose. It does not return a report.

Forty tells across five axes: Hollow (whether anything is behind the sentence),
Template (whether the content chose the shape or the mould did), Grain (whether
anyone chose the words), Marks (whether anyone set the punctuation), Presence
(whether a person is in the text at all). Every tell carries a `Signal`, a
`Principle`, a `Fix` and a `Not slop when`, which is the same shape the rest of
this plugin uses.

It runs on any prose: a README, a commit message, an article, an email, landing
copy, a report, a legal notice. It does not run on the copy inside a running
interface. That is `anti-slop words`, it reports rather than rewrites, and it
stays there.

## What it never claims

Nothing in this catalog proves a model wrote the text. It proves nobody read it
back. A tell fires on absence and repetition, not on origin, and the same
absence appears whether a person typed every word or an agent did.

Never write that a text was AI-generated, machine-written, or produced by any
tool. The vocabulary is *unread*, *undecided*, *generic*.

This is not politeness. A catalog framed as a detector has to accuse before it
can help, and it will accuse a careful writer who happens to like the word
*landscape*. A catalog framed as an unread draft has nothing to accuse, which
is what makes it safe to run on your own writing.

## Where this sits next to `humanizer`

The patterns are largely the same patterns. Both derive from Wikipedia's *Signs
of AI writing*, maintained by WikiProject AI Cleanup, and this catalog also
derives from the `humanizer` skill that first put that material into a skill.
Claiming a new pattern list would be false.

Four things are genuinely different, and the first is the one that matters.

**That skill bans; this one does not.** Its rule on dashes is a hard
constraint. The rule below fires on a pattern present *and* no evidence anyone
chose it, which is the rule the whole plugin is built on. The pattern was never
the defect.

**That skill is English only**, in every watched word and every example. This
one carries `vocabulary-en.md` and `vocabulary-pt.md`, and the Portuguese one
is not a translation of the English one.

**That skill has never been measured.** No ids, so no specimen, no expectation
row, no blind run. Ids here exist for that reason and for no other; they never
reach the reader.

**That skill loads at once.** Here a scoped rewrite loads one axis.

Two things it has that this skill takes rather than reinvents: its list of the
signs of human writing, which became the evidence half of the rule below, and
its voice calibration, which became the first root.

## The rule

> A finding is a pattern present **and** no evidence anyone wrote it that way
> on purpose.

Look for that evidence in four places before any tell fires. They are roles,
not sections of the document.

1. **A sample of the author's voice.** If the user gave you their own earlier
   writing, it outranks every tell here, the dash included. Read it first: note
   sentence lengths, paragraph openings, recurring phrases, punctuation habits.
   Matching the author beats scrubbing the tell.
2. **Specificity that is hard to fabricate.** A real name, a figure, a date, an
   address, an odd quotation, a detail nobody would invent. A sentence carrying
   one of those is not hollow, even wearing a watched word. Models round
   specifics off; people hoard them.
3. **The register the document actually requires.** Encyclopedic, technical,
   legal, reference, procedural. There, plain and neutral **is** the human
   voice, and adding stance is the defect rather than the fix. A fixed formula
   in a petition is genre, not slop.
4. **The pattern doing real work.** Three items because three exist. Boldface
   because that term is the term. A dash because the author uses dashes here
   and elsewhere.

Evidence in any of the four, and the tell does not fire. A pattern present is
not a finding. A finding is a pattern present **and** nobody chose it.

### The one place a pattern is genuinely forbidden

Where the project declares a rule about its own prose, that rule outranks the
author's exemption. This repository forbids dash punctuation in `README*` and
under `site/` and `specimen/`, enforced by `scripts/validate.py`. Rewriting a
file that rule governs, the dash goes even if the author likes dashes.

That is not the banned list returning. A declared project rule is the strongest
evidence that somebody decided, so the rule reads it as evidence and follows
it. What stays forbidden is reaching for a pattern without deciding it.

Look for such a rule before rewriting: a linter, a style guide in the
repository, a contributing file, an instruction file the project loads for its
agents. Where one exists, say in your note that you followed it.

## The fabrication rule

Rewriting is where a model invents, so this carries the same weight as the rule
above.

> The rewrite contains no fact, name, number, date, quotation or citation that
> is not in the source or supplied by the user.

Trading a vague claim for a specific one is allowed only when the specific
comes from the source. A sentence that needs a real detail to work gets the
plain version, or gets cut. An empty inventory buys fewer words, never invented
ones.

Opinions are voice, not facts. Where root 1 licenses stance, stance may be
added. A claim about the world may not.

Before you deliver, ask one question of your own draft: **does it state any
fact, name, number, date or citation that is not in the source?** A fabrication
is a defect even when the sentence it produced is better than the one it
replaced.

Fiction is the exception, and the only one. A text declared as fiction is
declined by name rather than rewritten badly, because invention is the job
there and this rule forbids the job.

## The three roots

Answer each from the text where the text answers, ask where it does not, and
never fill one from a default. There is no fourth root for language: it is read
off the text.

1. **The voice.** A sample of the author's writing, or a statement of how it
   should sound. With neither, the rewrite is plain, and plain is a stated
   fallback rather than a guess.
2. **What it is for and who reads it.** This sets the register, and the
   register decides which tells are hard and which are conditional. A
   changelog, a petition and an essay do not fail the same way.
3. **What is true.** The facts the rewrite may draw on. Usually the source is
   the whole inventory. Where the user has more, this is where it goes.

An unanswerable root is a finding, not a blocker. Rewrite anyway, say which
root the text did not answer, and ask.

## Process

1. **Read it once for the roots.** What is this for, who reads it, whose voice
   is it, what facts does it carry. Note anything a rewrite must not lose.
2. **Read it again for the mould.** Before any individual tell: what is this
   text imitating? The encyclopedia entry, the press release, the tutorial
   script, the post that wants to be shared. Naming that usually explains more
   findings than the findings do.
3. **Load what the invocation names.** The table below.
4. **Run the tells,** each through the rule in four places before it counts.
5. **Draft.** Read the draft aloud in your head. Vary sentence length. Prefer
   the specific detail and the plain verb.
6. **The removal pass.** Below. It is a separate step because it is the one
   with the highest yield and the one most often skipped.
7. **Check the draft against the fabrication rule** and against the four
   evidence places one last time, because a rewrite can invent both a fact and
   a voice.
8. **Deliver.** What the mode calls for, and nothing more.

## The removal pass

One pass whose only purpose is deletion.

For each paragraph, each example, each second statement of the same idea, each
sentence that only carries the reader from one section to the next: did the
content ask for this, or did the mould? Removing it and losing nothing is the
answer.

In prose this is the edit with the highest yield, and it is the one a rewrite
skips, because rewriting feels productive and deleting does not. A rewritten
paragraph that should not exist is worse than the original: it now reads as
considered.

This step cannot be measured. A tell fires on what is present, and nothing in a
finished text records what a second pass would have cut. So it lives here, in
the procedure, and not in a catalog.

## Invocation

| Invocation | Rewrites | References to load |
|---|---|---|
| `anti-slop text` | all five axes | `hollow.md`, `template.md`, `grain.md`, `marks.md`, `presence.md` |
| `anti-slop text hollow` | Hollow | `hollow.md` |
| `anti-slop text template` | Template | `template.md` |
| `anti-slop text grain` | Grain | `grain.md` |
| `anti-slop text marks` | Marks | `marks.md` |
| `anti-slop text presence` | Presence | `presence.md` |

Load `vocabulary-en.md` or `vocabulary-pt.md` alongside, whichever language the
text is in, on every invocation. Every axis reads from it. A text that mixes
languages loads both, and each passage is judged in its own language.

A path alongside the mode is the target. Without a path, the target is whatever
text is in the conversation.

## Output

Prose. Three modes.

| Mode | When | Deliver |
|---|---|---|
| Pasted | the text is in the conversation | the rewrite, then a short note |
| File | you were given a path | the file rewritten in place, then a short note |
| Embedded | another skill or agent called you mid task | the rewritten text alone |

**The note is one or two sentences in plain words.** It says what the text was
doing and what the rewrite did about it, and where a root went unanswered it
says which one. It never carries ids, never carries a verdict, never ranks
anything. The ids in this catalog exist so it can be measured; a reader who
wanted ids would have run the auditor.

**In file mode, rewrite the prose and nothing else.** Code blocks, inline code,
frontmatter, data, tables of values, link targets and quoted material stay
exactly as they are. Quoted material is the one people forget: a watched phrase
inside a quotation is being discussed, not used, and editing it puts words in
somebody's mouth.

**Never deliver a diff or a findings list** unless the user asks for one in so
many words. The output of this skill is the text.

## Out of scope

**Whether the source is true.** The fabrication rule governs what the rewrite
may add. It says nothing about whether what it found was right.

**Translation.** A Portuguese text comes back in Portuguese.

**Fiction.** Declined by name. See the fabrication rule.

**Copy inside a running interface.** That is the auditor's Words axis.

**Language is not a scope limit.** The tells are written to fire on patterns,
not on words. The words live in the two vocabulary files, and a language with
no file yet is read by finding the local equivalent of the pattern and saying
in your note that you did.
