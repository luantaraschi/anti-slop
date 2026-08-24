# 2026-08-24: the first run of the closed loop

Until this round the plugin audited and stopped. This round it gained
`anti-slop:fix`, a fourth skill that takes an audit report and repairs the code,
and this is the first measurement of the loop closing: audit, repair, audit
again, on a copy of `fixtures/slop-dashboard`.

Three fresh agents, each blind. None could read `fixtures/README.md`, which
holds the expected answer, and none could read any previous round's reports.

| Run | What it did | File |
|---|---|---|
| 1 | Full blind audit, cap suspended. 29 tells fired, 25 declined, 7 rules supplied. | `audit-1-slop-dashboard-before.md` |
| 2 | The fixer, given run 1's report and nobody to ask. 15 repaired, 14 refused, 0 unaccounted, 7 rules supplied. | `fix-1-slop-dashboard.md` |
| 3 | Full blind audit of the repaired tree, cap suspended. 16 findings, 5 rules supplied, 3 repairs judged site level. | `audit-2-slop-dashboard-after.md` |

The three files go in unedited, as the method requires. They are the evidence
and this record reconciles them rather than restating them. Every claim below
points at one of them.

**On quotation.** This file is a `README` and the repository forbids dash
punctuation in every `README`. So quotations here are limited to fragments that
carry no dash, and everything else is cited by file and line. Re-punctuating a
quotation to satisfy a formatting rule would fabricate it, and a fabricated
quotation in a calibration record is the exact failure `calibration/README.md`
was written to stop happening twice.

**The caveat this round owes, stated where it can be read.** The prompts for
all three runs were written by the same hand that wrote the skills they measure.
The agents were blind; the prompt writing was not. The precedent for recording
it is `ROADMAP.md:32-34`, the entry for the round of 2026-08-18, and that entry
attributes the rule to `docs/calibration-method.md`.

**The rule is not in that file.** All 150 lines were read for this record. The
method file's blindness rules govern what the auditing agent may read and what
the builder may read; its list of what makes a run worthless names five other
things, and prompt authorship is not among them. So the citation this record
first wrote was inherited from `ROADMAP.md`, which made it first, and neither
document carries the rule. The caveat stands on its own merits and the round
observes it. But a convention followed twice, cited twice to a file that does
not contain it, and written down nowhere is one round away from being dropped by
whoever does not already know it. That is a finding, and the method file is
where the rule belongs.

---

## 1. Which findings closed

29 fired before. 16 fired after. **13 closed.**

Reconciled id by id, the before set is
`A1 A3 A4 A5 A6 A10 C1 C3 C4 C5 C7 C8 C9 C10 C11 C12 C13 C15 C16 S1 S2 W3 F1 F2 F3 F4 F9 F10 F11`
and the after set is
`A1 A3 A4 A5 A6 A10 C1 C4 C15 S2 W3 F2 F3 F4 F9 F10`.

**Twelve closed because a repair closed them:** C3, C5, C7, C8, C9, C10, C11,
C12, C13, S1, F1, F11. Each appears in the fixer's repaired table and in audit
2's declines, and each decline line names the property audit 2 checked rather
than only the id. Ten of the twelve are declined under "Code already does the
right thing". **Two are not:** C5 at `audit-2:128` and F1 at `audit-2:136` sit
under "Condition never arose in this tree". A decline is a decline and the count
is unaffected, but the filing is worth one line, because
`docs/calibration-method.md` asks a run to say which of three ways each tell
declined and this is the third way, the Fix applied, filed as the first. The
repair is what removed the condition in both cases, which is visible in audit
2's own wording: it says the refresh control is extended to exactly 40px, and
that the language attribute is present.

**One closed without a repair: C16.** The fixer refused C16 (its refusal table,
last row) and A1 still fires in audit 2, so the token `ring-ring` is still
undefined and nothing about that declaration changed. C16 closed because the
second auditor read the same code differently. Audit 1 fired it by supplying a
rule that the Principle governs a fourth failure form its Signal does not
enumerate. Audit 2 declined it as a correctly shaped focus treatment and handed
the token problem back to A1. Two blind readers, one unchanged declaration, two
opposite verdicts. That is a catalog result, not a repair result, and it is the
single strongest piece of evidence this round produced. See section 6.

**Three repairs did not close their finding: A4, C4, C15.** Three of fifteen.
This is the number that matters more than the headline, and each fails a
different way:

- **A4.** The fixer's A4 row lists five files it changed and
  `components/ui/card.tsx` is not among them. Audit 2 fires A4 at
  `app/page.tsx:66`, attributing it to `components/ui/card.tsx:12`. The
  primitive's own shadow, which audit 1 had quoted inside its A10 paragraph,
  survived the pass that removed every other one.
- **C15.** The fixer fixed `app/page.tsx:39,61`, the stat grid and the header
  row, which are the two sites audit 1's C15 named. Audit 2 fires C15 at
  `app/page.tsx:76-92`, the three-button toolbar, and observes that the header
  and the grid around it now both carry the variant the toolbar lacks.
- **C4.** The fixer added the wrap property to `app/not-found.tsx:7`, which was
  the only short text block audit 1 found. Its own S1 repair then added a second
  one, the stats error banner at `app/page.tsx:56`, and never went back. Audit 2
  fires C4 on the parity between the two.

**One confound worth naming.** The fixer added the missing Tailwind directive
before touching any of the 29 rows. Audit 1 had recorded that without it no
utility class in the project emits any CSS at all. So audit 2 read the first
version of this tree whose utilities actually compile. It does not move the id
reconciliation, because the tells read source rather than rendered output, but
the two audits did not read equivalent trees and the record should not pretend
they did.

---

## 2. Which findings the repair opened

**Zero.**

This is the number that decides whether the fixer is safe to run unattended, so
here is what was checked rather than only the result. Every id in audit 2's
findings tables was looked up in audit 1's findings tables, one at a time: A1,
A3, A4, A5, A6, A10, C1, C4, C15, S2, W3, F2, F3, F4, F9, F10. All sixteen are
present in the before set. The after set is a strict subset of the before set,
so no id fires after that did not fire before, and the fixer introduced no new
finding of any kind that the catalog can name.

Two qualifications, because a clean zero deserves them.

**The zero is at id level, not at site level.** C4 fires after for a site that
did not exist before: the error banner the fixer's own S1 repair wrote. No new
id opened, but a repair created a new instance of an id another repair had just
been applied to. A fixer that only counts ids will report zero regressions on a
pass that made one.

**One id is unaccounted rather than closed.** Audit 1's ledger covers all 54
tells: 29 fired plus 25 declined. Audit 2's covers 53. **W6 appears nowhere in
audit 2**, neither in its findings nor in any of its three decline categories.
Nothing suggests W6 fires on this tree, and audit 1 declined it because no
marketing claim exists anywhere. But an audit whose ledger does not close is an
audit whose zero cannot be fully trusted, and the honest statement is that
53 of 54 ids were accounted for after the repair. The report is not edited to
fix this; it is recorded here.

---

## 3. Which refusals were correct, and which were the fixer avoiding work

Fourteen refusals out of twenty-nine findings, so each was read against what
its finding actually needed rather than against the reason the fixer gave.

**Twelve are the skill working.** Each names an answer that only a person holds,
or an `unsettled` row the map refuses by name:

| id | what the refusal needs, checked against the tell |
|---|---|
| A1 | The four to six colours of the palette. Roots 1 and 3. No amount of code reading supplies them. |
| A5 | The type family and scale. Roots 2, 3 and 4. |
| A6 | The spacing ladder. Root 4, density. |
| A3 | The radius scale. Root 4. The map's own note records that this row was corrected from root 3 to root 4 on this date. |
| A10 | `repairs.md` marks it `unsettled`: routing eight hand-rolled sites through the primitive is a refactor's shape. |
| S2 | The map's own worked example of `unsettled`. |
| W3 | A fact: what the empty invoices route is for. `rows` is hard-coded empty and nothing in the tree says why. |
| F3 | The legal inventory. Who publishes, what is collected, a contact route. |
| F4 | The product's name, for the Open Graph copy. |
| F9 | The site's deployed origin. A canonical href cannot be written without one. |
| C1 | Blocked, but not for the reason the map gives. See below. |
| C16 | Correct, and it is the whole subject of section 6. |

**Two are work the code itself could have settled**, and in both the fixer named
the blocker honestly and the blocker traces to `repairs.md` rather than to the
fixer looking for an exit:

- **F2.** The Signal fires on routes sharing one title, and giving `/invoices`
  its own title closes that without anyone knowing what the product is called.
  The map is not wrong to say otherwise: F2's Fix prescribes a pattern whose
  generic half *is* the product's name, so `stops without the product's name` is
  a correct derivation from the Fix. What is true is narrower. The cell is right
  about the repair the Fix describes and too strict for the instance in front of
  it, and it blocked a repair this finding did not need it for. Both auditors
  called F2 free in their closing paragraphs; they were right about the
  instance.
- **F10.** A sitemap needs an absolute origin; a robots file does not, and the
  fact that `/invoices` is linked from nowhere in the app does not either. The
  fixer identified this split itself and left F10 whole because the map gives
  F10 as one unit and no id names "add internal navigation" on its own, so
  splitting it would have been scope it invented. Audit 2 fires F10 naming both
  halves. The map's granularity is the defect, not the refusal.

**Nothing was refused bare.** All fourteen name the answer they are missing.
Four of them cite `repairs.md` by name: A10 and S2 as rows the map marks
`unsettled`, F10 as a row the map gives as one unit, and C16 as a row the fixer
refused against the map. The other ten name a root or a fact directly. On the
specific question this section asks, the skill did not hide once.

### A finding about the `stops without` column

Reading the fourteen refusals against the tells they refuse turned up something
larger than any one of them. The fixer exercised 29 rows of `repairs.md` and
three of those rows carry a `stops without` cell that is demonstrably wrong
against the tell it maps, and two more are arguable in a way that turns out to
be the more useful finding.

**Three demonstrated, and all three are wrong against the tell's own Fix:**

- **C1** says `nothing`, but C1's Fix asks for radii "tied to the scale", and
  the scale is A3, which is refused. Too free.
- **C16** says `nothing`, but satisfying it here means hard-coding a colour past
  a token system that stays broken. Too free. Section 6 traces where this one
  actually originates.
- **F10** says the repair stops without the site's origin. F10's Fix says to
  generate both files at build time and that every modern framework has a
  ready-made route for it, and names no origin anywhere. A robots file needs
  none. The map is stricter than the tell it maps. Too strict.

**Two arguable, and they are the interesting ones:**

- **F2**, above. The cell derives correctly from a Fix whose prescribed pattern
  contains the product's name, and it blocks an instance that can be closed
  without it.
- **C12** is blocked on "a fact: what the status says". The status words were
  already sitting in the row data, so the fixer read the requirement as
  satisfied and repaired it, and audit 2 confirms C12 closed. Read as a
  requirement about the general repair the cell is right; read as a requirement
  about this instance it is not.

Three demonstrated and two arguable, out of 29 rows exercised. The two arguable
ones carry the finding: a cell can be right about the repair its Fix describes
and wrong about the finding actually in front of the fixer, because the column
states one precondition where two are in play. Where the Fix's ideal output and
the Signal's defect diverge, the cell can send a fixer away from work it could
have done. That is a finding against `repairs.md`, which shipped this round.

---

## 4. Whether any repair changed the row and not the cause

This is the failure `anti-slop:fix` was written to prevent, so it gets the
hardest look.

**The fixer flagged two**, in its own "Row versus cause" section: **C9** and
**C10**. Both are honest and both name the same mechanism: the repair is row
level because a root above it was refused. C9 needed the `active:` class added
at each of eight hand-rolled buttons because A10, the reason there are eight
buttons instead of one component, is refused. C10 declared a base foreground
once at the body but patched border and label colours at every named site,
because the real root is A1 and A1 is refused.

**Audit 2 found three**, in its "Repairs that fixed the site, not the cause"
section: the wrap property added at one short text block and not the other
(**C4**), the greys typed correctly at roughly ten callsites and never lifted
into the theme (**C10**), and the refresh button given a hit area and nothing
else (**C9**, filed under the control rather than under the id).

**Where the lists agree.** C10 exactly, in both accounts, for the same reason.
C9 in substance: the fixer filed it under the eight hand-rolled buttons, audit 2
filed it under a ninth control the fixer skipped. Both are C9 being applied
per site.

**Where they differ, and what it means.** Audit 2 found C4 and the fixer did
not, and the reason is worth more than the count. C9 and C10 are row level
because of a decision taken before the repair was made, which the fixer knew at
the time and could flag as it worked. C4 is row level because of an edit the
fixer made **later in the same pass**: the S1 repair wrote the error banner that
became C4's second site. A fixer checking each repair as it lands cannot catch a
defect a subsequent repair introduces. Only a pass over the finished tree can.

That pass is the skill's own step 6. `skills/fix/SKILL.md:103` requires it in
those words: re-audit the same axis over the same scope, the finding has to be
gone, and nothing new may appear. It was not run. The fixer said so plainly in
its "Re-audit" section: it stayed inside the run's read restriction because
re-invoking the audit skill "risked reading outside that boundary in ways I
couldn't fully predict in advance". Risked, not forbade, and the distinction is
the fixer's own. It substituted a manual signal by signal check and named that
substitution as a gap rather than calling it a re-audit. **The
one row level repair the fixer missed is precisely the one its skipped step
would have caught.** That is the clearest argument this round produced for why
step 6 exists, and it arrived as a demonstration rather than as an assertion.

The same mechanism explains the fixer's C9 miss exactly. Its C9 row says it
added the pressed state beside every existing hover state. The refresh button
has no hover state, so the fixer's own site-selection rule is what skipped it.
A rule that finds sites by matching an existing class can only ever reach the
sites that already have it.

**A third count, which is this record's own.** Neither report's list is
complete. Add A4 and C15 from section 1 and the total is **five**: C4, C9, C10,
A4, C15. A4 and C15 are not row level in the fixer's sense, since the decision
behind each was taken at cause level, an elevation count of zero and a
breakpoint chosen from where the layout actually breaks. But both decisions were
then applied at the sites the report named instead of everywhere they governed,
which produces the identical outcome: the finding still fires. Neither report
files them under this heading because each report can only see half of it. The
fixer knows what it decided and not what still fires; the auditor knows what
still fires and not what was decided. Reconciling the two is what this file is
for, and five is the number it produces.

**One ambiguity the reports cannot settle.** Audit 1's C15 states the cause in
prose, that no breakpoint is declared anywhere in the twelve files, and names
two sites in its location field. The fixer repaired exactly those two sites.
Whether that is the fixer treating a location field as exhaustive or the report
inviting it to is not recoverable from the two documents. Both are findings: the
report format does not say whether a site list is exhaustive or exemplary, and
the fixer has no rule telling it which to assume.

---

## 5. The supplied rules: 19 rules, 15 distinct gaps

`docs/calibration-method.md` calls this the most valuable thing a run returns.
Seven came from audit 1, seven from the fixer, five from audit 2. Four are the
same gap found by two independent readers, which is stronger evidence than
either alone, so they are listed first.

### Found twice

| Gap | Found by | Where it lives |
|---|---|---|
| **No tell defines "internal."** Five tells hang an exemption on it and none says how a reader with no login route, no middleware and no deployment config decides. Both auditors supplied the same default, that absent a visible gate the tell fires, and both reached it independently. Audit 2 adds a wrinkle audit 1 did not: F3's own text argues against reading its exemption narrowly, that argument is scoped to F3 by its own words, and F4 and F9 do not repeat it. So the catalog carries a leniency in one tell that its siblings lack. | audit 1 (F3, F4, F9, F10, F13), audit 2 (F3, F4, F9) | audit catalog, `finish.md` |
| **C4 has no population threshold.** Audit 1 hit it at a population of one and had to decide whether n=1 fires. Audit 2 hit it at a population of two split one for one and had to decide whether that meets "more carry the property than miss it". Both fired. Neither reading is in the tell. The second gap only became reachable because the repair created the second site. | audit 1, audit 2 | audit catalog, `craft.md` |
| **C16 has no name for a token that does not resolve.** Its Signal enumerates three forms of missing focus and this tree has a fourth: a ring declared, never removed, and pointing at a colour nobody defined. Audit 1 supplied the Principle as governing and fired. The fixer hit the same hole from the repair side and refused. Audit 2 hit it a third time and declined. | audit 1, fixer | audit catalog `craft.md`, and the repair map through it |
| **The "three things" exemption has no threshold.** Neither A8 nor W7 says how many differently counted sections are enough counter-evidence, nor how directly "core information" has to be established. Audit 2 adds a second question the tell does not answer: whether dashboard KPI cards are the same pattern as a marketing page's stats strip at all. Both runs granted the exemption. | audit 1 (A8 and W7), audit 2 (W7) | audit catalog, `surface.md` and `words.md` |

### Found once, in the audit catalog

| Gap | Found by | Where |
|---|---|---|
| **F10's exemption read as a conjunction.** Under ten pages *and* every page reachable by an in-app link. Audit 1 supplied that reading and it changed the verdict, since `/invoices` is linked from nowhere. It recurs from the repair side: no id's Fix names "add internal navigation", so the half of the tell that needs no fact has no repair route. | audit 1 | `finish.md` |
| **C1 holds two tests a tree can pass one of.** Flagged inside `craft.md` itself, carried over from the 2026-08-17 round, still open. The instance here failed both readings, so it did not change the verdict, but applying a Signal the reference calls contested is still a judgment the tell did not settle. | audit 1 | `craft.md` |
| **S2 does not say whether dead state counts as a site.** The filter and sort values name a view and nothing downstream reads them either. Audit 1 supplied that a value structurally naming a view still counts. | audit 1 | `states.md` |
| **A3 has no threshold for "count the distinct radii".** Two raw values across a dozen sites, one confined to a single unreconciled callsite. The Signal says count and never says what the count means. New this round. | audit 2 | `surface.md` |
| **C16 gives no way to establish, from files alone, whether a reset stripped the outline.** Audit 2 concluded the hand-rolled controls keep native focus from the absence of any reset, which rests on framework behaviour the tree never demonstrates. It flagged the assumption rather than presenting the conclusion. Distinct from the token gap above. | audit 2 | `craft.md` |

### Found once, in the repair map and the build references it delegates to

All six came from the single fixer run. `repairs.md` shipped this round and has
now had exactly one blind reader, which is the right way to read this number:
six holes on a first read is the shape of a new document, not a broken one.

| Gap | Where |
|---|---|
| **No rule for a build-breaking absence outside the catalog.** Neither the fix `SKILL.md` nor the map says whether a fixer may repair a defect no tell names. The fixer supplied a line, zero design judgment and either fully mechanical or fully standard content, and fixed both defects in section 7 under it. | `repairs.md`, fix `SKILL.md` |
| **No test for "floats" against "sits in normal flow".** The elevation section says to count the surfaces that genuinely float and gives two worked examples, neither of which resolves an ambiguous case. The fixer counted zero. Audit 2 then fired A4 against exactly that count. | `deriving.md` |
| **A duration derived from travel distance a static read cannot measure.** The map marks C7 and C8 `stops: nothing`, which only coheres if the 200ms already in the code counts as the datum to build a ratio from. The fixer supplied that reading. | `deriving.md`, `repairs.md` |
| **The map and the auditor's closing paragraph disagree about what is free.** The fixer flagged five ids, four of which run in this direction. The disagreement is seven ids wide in each audit; see section 6. | `repairs.md` |
| **A technique named where a result was meant.** The floor names a pseudo-element as the way to extend a hit area. The fixer used a wrapper with a matching negative margin, same 40px target and same zero layout footprint, and named the deviation. | `floor.md` |
| **A `stops without` fact that the data may already hold.** C12 is blocked on a fact the row data already carried. Covered in section 3. | `repairs.md` |

---

## 6. The conflict the fixer reported, and who was right

### C16, where the fixer overrode the map

The map lists C16 as `branch`, ruled by `floor.md`, `stops: nothing`. The fixer
refused it anyway, on the grounds that satisfying that literally means replacing
the ring's token with a hard-coded colour at one callsite while the same
primitive's background and text tokens stay unresolved, which is repairing the
row and not the cause. It sided with audit 1's explicit causal chain, where A1's
row names C16 as its dependent, and it said the disagreement is real rather than
a close call it was smoothing over.

**The fixer was right about what to do.** Patching one of a primitive's four
broken tokens is the row.

**But the map is not wrong through its own fault**, and the record should say
where the defect actually sits. The map's stated rule is to read each tell's Fix
field and let it name the class. C16's Fix asks for one focus-visible rule at
the root rather than a variant per control. Against that Fix, `branch` and
`nothing` are the correct derivation. The Fix answers the three failure forms
C16's Signal enumerates, all of which are a focus treatment being **absent**.
This tree has a fourth form, a focus treatment that is **present and cannot
resolve**, which the Signal does not carry, so a wrong class propagated into the
map from a hole upstream of it.

This is the same gap audit 1 named in its own supplied rules and the fixer named
in its. **Three reports, three different resolutions, one tell.** And the outcome
moved between two blind audits of a declaration that did not change: audit 1
fired it, audit 2 declined it. A tell whose verdict flips on unchanged code is
not calibrated.

The structural consequence belongs here too: **the map assumes one class per
id**, and C16 has two failure modes with different classes. Absent, it is a
branch that stops without nothing. Declared and unresolvable, it is a derive
that stops with A1. No row of the map can hold both. Recorded, not repaired.

### The five ids where the audit's closing list and the map disagree

The fixer followed the map and flagged the mismatch on F9, F10, F2, C16 and S2.
Judged one at a time:

- **S2**: the map is right and both auditors are wrong. Putting the state in the
  address can touch every consumer of that state, which is why it is the map's
  worked example of `unsettled`. Audit 2 called it free as well, independently.
- **F9**: the map is right and audit 1 is wrong. A canonical href needs an
  origin. Audit 2 did not claim F9 free; it put F9 behind the internal question.
- **C16**: the audit's causal chain is right, per the reasoning above.
- **F2** and **F10**: the map is wrong in part, per section 3.

So on the five the fixer flagged, the map is right on two, wrong on one and
wrong in part on two.

### The mismatch is wider than the fixer flagged, and it has one cause

Every id in both closing paragraphs was checked against the map. **The inclusion
rule used here:** an id counts as a mismatch only where the auditor presents it
as free *without* a qualification naming the blocker the map names. Applied
uniformly, that rule excludes two of audit 1's entries, for two different
reasons. **A3** is excluded because audit 1 writes it as free "once a radius
scale is picked", which is root 4, which is exactly what the map requires: the
qualification says the auditor and the map agree. **C16** is excluded because it
runs the other way. Audit 1 writes it as free "once A1 supplies real tokens",
which is stricter than the map's `nothing`, so C16 is a mismatch in which the
map is the freer document, and it does not belong in a list of ids the auditor
called free and the map does not.

- Audit 1's closing list claims **seven** ids as free that the map does not: F2,
  F9, F10, C12, S2, W3 and A10's routing.
- Audit 2's closing list claims **seven** that the map does not, out of eleven
  claims: A10, A3, A6, F2, F10, S2 and W3. It qualifies nothing, so nothing is
  excluded.

**Of the five the fixer flagged, four land in audit 1's seven:** F2, F9, F10 and
S2. The fifth, C16, is correctly outside that set, because there the map is the
freer document and the auditor the stricter one. So the fixer caught four of the
seven mismatches running in this direction, plus the one running the other way.

Two independent blind runs, both wrong about what the fixer can take on, and
neither could have been right: **the auditor is asked to say what `anti-slop fix`
can repair and the auditor never reads `repairs.md`.** It is estimating another
skill's capability from outside it. That paragraph either needs the map or needs
to stop making the claim. Recorded as a finding against the audit skill's report
format, for a later round.

---

## 7. The two defects no tell names

Audit 1 found both and refused to fold either into a scored row, recording them
above its findings instead:

- **`app/globals.css` carries no Tailwind directive.** No `@tailwind` triple and
  no v4 import. Without one, Tailwind emits no CSS for any utility class in the
  project, so every class named anywhere in the tree, and every class the report
  itself recommends, renders as nothing.
- **`lib/utils.ts` does not exist**, and two files import a helper from it.

Both break the build. Neither is aesthetic. **No tell in the 54 tell catalog
reaches either**, checked against all five catalog files rather than against the
repair map alone. F12 is the nearest thing and it reaches neither: it catches
surviving placeholder strings, not an import that resolves to nothing. The catalog is a catalog of taste and it has no floor for
whether the thing compiles, which means the closed loop can drive a tree to a
small finding count while the tree does not build. Recorded plainly, as the
first audit did.

The fixer repaired both, ahead of the 29 tracked findings, under a scope rule it
had to supply because neither the fix `SKILL.md` nor the map addresses a
build-breaking absence outside the catalog. It also left one residual gap open
and named it: it could not confirm that the two packages `lib/utils.ts` now
imports are declared dependencies, because no `package.json` sits among the
twelve files it could touch. That gap is still open.

---

## What the round says, in one paragraph

The fixer is safe to run: it opened nothing, it refused nothing bare, and twelve
of its fourteen refusals name an answer only a person holds. It is not yet
trustworthy unattended: three of fifteen repairs did not close their finding,
five repairs in total changed a site rather than the thing that governs it, and
the one the fixer could not see itself is the one its skipped step 6 was written
to catch. The catalog gained its sharpest open question in C16, a tell whose
verdict flipped between two blind audits of unchanged code. And `repairs.md`,
which shipped this round, came back from its first blind reader with three
demonstrably wrong `stops without` cells out of 29 exercised, two more that are
right about the repair and wrong about the finding in front of them, and a
structural assumption, one class per id, that C16 breaks.
