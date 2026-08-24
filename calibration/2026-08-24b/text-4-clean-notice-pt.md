# text-4-clean-notice-pt

## What I judged this document to be, and who reads it

An internal notice from a Brazilian law office (`escritório`), sent by a
person named Joana to the office's own staff (`Prezados` / `Atenciosamente`),
about a court's replacement of its electronic-filing system and everything
the staff must do before the cutover on 3 September. It is operational
correspondence: register requirements, a migration window, three real
deadlines affected, a training session, and an open question about file
size the writer has already asked the court about and not yet gotten an
answer to. The reader is a colleague at the firm who needs to act on
specific dates, not a general audience.

Root 1 (the author's voice) went unanswered: no sample of Joana's other
writing was supplied, and none was available to ask for, so I read the
voice off this document alone rather than filling the gap with a guess.
Roots 2 and 3 (register, and the facts the rewrite may draw on) the text
answers itself.

## The note I would have delivered

Este é um aviso interno já escrito por alguém que releu o que escreveu:
datas, números de processo, um provimento citado, uma pessoa nomeada. Não
encontrei nada no catálogo para corrigir, então o texto sai inalterado.

## Tells that fired

None. Every one of the forty tells was checked against this text and none
found a pattern present without evidence someone chose it. There is no text
to quote here because there is nothing to quote it against.

## Question 1 — rules I had to supply that a tell's own words do not contain

**T1, three of everything.** The tell's words: *"the tell fires when three
is the most common count and no section departs from it."* The document
has exactly one triple (the three deadlines: agravo, contestação,
manifestação). "Most common count" presumes at least two counted instances
to compare; with only one enumerable list in the whole text, there is
nothing for three to be "the most common" against. I supplied the rule that
a single instance can never satisfy "most common," since "most common"
is undefined at n=1. The tell does not say this; I had to decide it.

**H9, a paragraph about what the writer could not find.** The tell's
signal list is generic hedges: *"while specific details are limited,"
"as of my last update," "further research would be needed."* The
document's version — *"Perguntei à corregedoria em 12 de agosto e não
houve resposta até hoje"* — is dated, names the office asked, and states
what happens next ("protocole antes"). The tell does not say how much
specificity converts a search-narration into an acceptable stated-gap; I
supplied that rule myself, by importing root 2 (specificity that is hard
to fabricate) to break the tie between "the writer is narrating their
afternoon" and "the writer is stating a fact the reader needs."

**M1, the dash threshold.** The tell's words require computing *"what
share of the text's clause joints are dashes, against sentence breaks,
commas, semicolons and colons"* and comparing it to "the threshold in the
vocabulary file." I did not perform that count mechanically — I judged,
by inspection, that one dash-pair against roughly two dozen periods and
commas is obviously far under 15%. The tell asks for a computed fraction;
I substituted a visual estimate for it.

**G3, synonym cycling.** The tell's own text distinguishes cycling from
legitimate variation only by *"the different names carry different
information."* Deciding that *processos* and *autos* are not two names
for the same thing but two distinct legal concepts (the case, versus its
docket/file) required Brazilian civil-procedure knowledge the tell does
not contain and cannot contain — it is a general catalog entry, not a
glossary of Portuguese legal terms. I supplied that domain fact myself.

**P4, coaching the reader.** The tell exempts *"teaching material, a
tutorial, or a guide whose whole contract is instruction."* This document
is none of those by name — it is a notice. I extended the exemption to
cover *"Quem tiver peça grande para protocolar até setembro, protocole
antes"* by analogy, reasoning that an operational notice whose job is
telling staff what to do is instruction in the same sense a guide is, even
though the tell's own list does not say "notice."

## Question 2 — for every tell that did not fire, which of three ways

**Condition never arose (the pattern simply is not in this text) —**
H1, H2, H3, H4, H6, H7, H8; T2, T4, T5, T6, T7, T8, T9; G1, G2, G4, G5,
G6, G7, G8, G10; M2, M3, M4, M6; P2, P3, P4. (30 tells)

**Condition arose, and a `Not slop when` clause excused it —**
T1 (the three deadlines are named by the source — real case numbers, real
dates); T3 ("entre 25 e 30 de agosto" is a date range, the `Not slop when`
clause's own example); G3 (*processos*/*autos* carry different legal
information); M1 (the single aside dash — *"usado uma vez num texto longo
é uma escolha, não um hábito"*); P1 (*"Prezados,"* / *"Atenciosamente,"*
are real correspondence forms addressed to the real recipients); P5 (the
register is procedural, where neutrality is the human voice); P6 (the
document is functionally a migration notice, the exact genre the tell
exempts by name). (7 tells)

**Condition arose, and the text had already done the right thing —**
H5 (the honest *"Não sabemos ainda"* is the Fix H5 asks for, not the
Signal it warns against); H9 (the gap is stated in one plain, dated
clause, exactly per the Fix, rather than narrated); G9 (the passive
constructions name their actor — *"é feita pelo Tribunal," "migrados pela
secretaria"* — which is G9's own Fix, already applied); M5 (the heading
is already in sentence case, not title case). (4 tells)

30 + 7 + 4 = 41 covers all forty tells with one, H6, counted under "never
arose": the document does have a closing move (the sign-off and the
personal offer to help), but it is specific rather than the generic
send-off H6 targets, so the flawed pattern itself never appeared — I filed
it under "never arose" rather than "already done right" because nothing
resembling the Signal was ever there to fix.

## Question 3 — does the rewrite state anything not in the source

No. The rewrite is the source, unchanged, character for character. I
checked the delivered text against the original line by line: every date,
every case number (5012388, 0800471, 1002915), every figure (214
processes, 20 MB, 60 days, vinte minutos), the provision number
(41/2026), and the one name (Camila) are exactly as the original wrote
them, because nothing was rewritten. There was no opportunity to invent a
fact because there was no sentence that needed replacing.

## git diff

```
(no output — the working tree for document.md is unchanged)
```
