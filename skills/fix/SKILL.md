---
name: fix
description: |
  Repair an interface from findings that already exist. Use when an audit has
  reported and the code still has to change, when asked to fix, repair or
  clean up what a finding named, or when handed a list of findings from
  anywhere. Also fires on "conserta isso", "arruma o que o audit achou",
  "aplica as correções". It repairs the cause each finding names rather than
  the row, and it refuses by name the repairs that need an answer only the
  person has.
license: MIT
metadata:
  version: "0.1.0"
---

# fix

## What this is

The third side of a loop that had two. `anti-slop audit` reads an interface and
reports. `anti-slop build` decides an interface that does not exist yet. This
skill stands where a report exists and the code still has to change.

It exists because that step was being taken by whoever happened to be holding
the report, with none of the builder's rules open. The result is the repair
that made this skill necessary: `A1` says the palette was never picked, and the
repair swaps one grey nobody chose for another grey nobody chose. The finding
closes and the defect does not.

**It repairs interface findings only.** The text catalog needs no fixer,
because `anti-slop text` already returns the rewritten text rather than a
report. That loop was closed the day it shipped.

## What it never claims

Nothing here proves a model wrote the code, and a repair is not an accusation.
The vocabulary is *generic*, *undecided*, *unfinished*. Never *AI-generated*.

## The rule

> Repair the cause the finding names, not the row it was printed on.

Every tell in the audit catalog names an absence. The row names where the
absence is visible; the `Fix` field and `repairs.md` name what fills it. A
repair that changes the site the row points at and nothing else has moved the
symptom, and the next audit finds it two files over.

The clearest case is the one this skill was built for. `A1` fires at
`tailwind.config.ts:12` and its repair is not in that file: it is a palette
derived from what the product is, which is
`skills/build/references/deriving.md`, which needs root 1, which the code does
not hold.

Every reference this skill names outside its own directory is written as a full
path from the repository root, and that is a requirement rather than a style.
A bare backticked filename inside a `SKILL.md` is read by
`scripts/validate.py` as a citation of this skill's own `references/`, so
deriving.md written bare reports as a missing file. Only `repairs.md` is
bare, because only `repairs.md` lives here.

## What it refuses, and why refusing is the point

Some repairs need an answer only the person has. Those are named and handed
back, never invented.

**A finding whose repair needs a root.** The palette, the type families, the
density, the voice. Deriving one from nothing produces a decided-looking
interface that was not decided, which is the defect the whole plugin exists to
object to, now with a commit behind it.

**A finding whose repair needs a fact.** The legal pages, an empty state that
should name what the person will see, a title that should say what the product
is. `skills/build/references/legal.md` carries the rule for a field nobody
answered, and it is the same rule here: ship the gap visibly, never fill it
with an invention.

**A finding whose repair is a redesign.** Where the honest repair changes the
composition rather than a value, stop and say so. That is `anti-slop build` at
its second size, and it is the person's call whether to spend it.

**A finding whose repair has no bounded size.** `repairs.md` marks these
`unsettled`: the change is well understood and it can touch every consumer of
the thing it changes, so it is not a repair, it is a refactor. Name the change
and hand it back. `S2`, which moves view state into the address, is the worked
example.

Refusing loudly is worth more than repairing quietly, because a refused finding
stays visible and a wrongly repaired one does not.

## Process

1. **Get the findings.** From a report in the conversation, from a file, or by
   running `anti-slop audit` yourself if there is none. Say which.
2. **Sort by cause, not by order.** Roots first, and under each root the
   findings its repair kills. The report's fourth column already says which;
   where it does not, `repairs.md` does.
3. **Read the repair rule for each cause.** `repairs.md` maps every id to the
   rule that repairs it. Open that rule before touching the code.
4. **Split the list in two.** What you can repair, and what needs the person.
   Say both counts before starting.
5. **Repair, root first.** One commit per root and its dependents, so a repair
   that goes wrong is one revert rather than an untangling.
6. **Re-audit the same axis over the same scope.** The finding has to be gone.
   Nothing new may appear. A repair that closes one finding and opens another
   is not done.
7. **Report.** What was repaired, what was refused and why, what the re-audit
   said.

## Invocation

| Invocation | Repairs | References to load |
|---|---|---|
| `anti-slop fix` | every finding it is handed or finds | `repairs.md`, then the rules it names |
| `anti-slop fix surface` | Surface findings only | `repairs.md`, then the rules it names |
| `anti-slop fix craft` | Craft findings only | `repairs.md`, then the rules it names |
| `anti-slop fix states` | States findings only | `repairs.md`, then the rules it names |
| `anti-slop fix words` | Words findings only | `repairs.md`, then the rules it names |
| `anti-slop fix finish` | Finish findings only | `repairs.md`, then the rules it names |

A path alongside the mode restricts the scope. `repairs.md` is small and always
loads; the rules it names are the ones that cost, and they load one at a time,
at the finding that needs them.

## Output

The changed code, and a short report.

The report is written in the language of the request, and it carries three
things in this order: **repaired**, one line per finding with the id and the
file; **refused**, one line per finding with the id and the answer it needs
from the person; **re-audited**, which axis over which scope and what came
back. Nothing else. A repair report that argues for itself is a repair that did
not survive its own re-audit.

**Never report a finding as repaired without having re-audited it.** That is
this skill's version of the rule the whole repository runs on: evidence before
assertion.

## Out of scope

**Building what does not exist.** A missing screen, a missing flow, a component
nobody wrote. That is `anti-slop build`.

**Repairing prose.** `anti-slop text` returns the text itself.

**Deciding a root.** See What it refuses, above.

**Any claim about who or what wrote the code.**
