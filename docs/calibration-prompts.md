# Paste-ready calibration prompts

`calibration-method.md` says what a blind run is and why. This file is the text.
Copy a block, fill the two or three bracketed slots, and run it.

Every block carries the four things that make a run a measurement rather than a
demonstration: an explicit forbidden list, the suspended cap, the supplied-rule
disclosure, and the three decline states.

---

## Running it, strongest form first

**Outside the repository.** Copy the target somewhere the repository cannot be
reached from, install the plugin, and run the skill there. The auditor
physically cannot open `fixtures/README.md`, and you test the real install path
at the same time.

```
cp -r fixtures/slop-dashboard /tmp/audit-target
cd /tmp/audit-target
# install the plugin, then run the skill against this directory
```

**Inside the repository, as a subagent.** What the recorded rounds used. The
boundary is enforced by the prompt rather than by the filesystem, and the runs
have honoured it — several cited the boundary when declining to check something.
Weaker, and adequate.

Never run a measurement in the session that made the change. That session knows
the answer and will confirm it.

---

## Block 1 — audit a fixture, one axis

Slots: `<AXIS>` (surface / craft / states / words / finish), `<AXIS_FILE>`,
`<TARGET>`.

> You are auditing a shipped product's source tree. Treat it as a real product someone published, not as test data.
>
> **Read only these.** The skill: `skills/anti-slop/SKILL.md` and `skills/anti-slop/references/<AXIS_FILE>`. Your target, in full: `<TARGET>`.
>
> You are FORBIDDEN from opening anything else in this repository. Specifically do not open, glob, grep or list: `fixtures/README.md`, any other directory under `fixtures/`, `calibration/`, the repository `README.md`, `BACKLOG.md`, `docs/`, `tests/`, `scripts/`, `skills/anti-slop-build/`, or the other reference files under `skills/anti-slop/references/`. Several of those contain the expected answer.
>
> Your invocation is `anti-slop <AXIS>`. **The report cap is suspended** — report everything the axis finds, and if you would have cut something for length, include it and say so.
>
> Produce, in addition to the report SKILL.md asks for:
> 1. Every tell on the axis, marked fires or declines, with a file and a line.
> 2. For each decline, which of the three states it is: the Signal never matched, a `Not slop when` clause closed a real failure, or the condition arose and the Fix was applied. Do not call a decline an exemption unless a real failing instance exists that a clause excuses.
> 3. **Wherever you had to supply a rule the tell does not contain in order to reach a verdict, say so explicitly and quote the tell's own words beside the rule you supplied.** That disclosure is the most valuable thing you can return.
> 4. If a comment in the tree claims something the code does not do, name it.

---

## Block 2 — aim it at what changed

Append to block 1 when the round rewrote a Signal or added a convention. Aiming
is not contaminating: ask for the clauses walked, never for the answer.

> Walk `<TELL>`'s Signal clause by clause against this tree and show your working — say whether each clause holds, and what that produces under the convention in SKILL.md's "How a Signal reads". If any clause is false while you still judge the tell to fire, say so plainly.

Do not write "check that `<TELL>` still fires."

---

## Block 3 — build a specimen

Slots: `<PRODUCT>`, `<ROOTS>`, `<OUTPUT_DIR>`.

Pick a subject that shares no vocabulary with any fixture. The recorded rounds
used irrigation scheduling, a kitchen shift board and venue booking, precisely
because no fixture contains a valve, a station or a support slot.

> Build from a brief, using a skill installed in this repository.
>
> **Read only these two files:** `skills/anti-slop-build/SKILL.md` and `skills/anti-slop-build/references/deriving.md`.
>
> You are FORBIDDEN from opening anything else here. In particular do not open `fixtures/`, `calibration/`, `skills/anti-slop/`, `README.md`, `BACKLOG.md`, `docs/`, `tests/` or `scripts/`. There are worked examples in this tree and reading one makes this exercise measure copying rather than deciding.
>
> The brief: `<PRODUCT>` — `<ROOTS>`. Answer all four roots in the brief, or expect the builder to derive and flag the ones you left out.
>
> Write the result into `<OUTPUT_DIR>`. Follow the skill exactly: roots and inventory before any code, then theme, then components, then copy, then the reduction pass, and obey the skill's standard for what a recorded decision has to survive.
>
> Report back: the four roots as you carried them and any the brief under-specified; each derived value with its source and shape; what the reduction pass removed; and — bluntly — anything in the skill that was unclear, contradictory, wrong, or that you had to interpret. That last part is worth more than the page.

Then audit the specimen with block 1 at full scope, pointed at the output
directory, with `skills/anti-slop-build/` on the forbidden list. **A tell that
fires is the build skill's failure, and it arrives with a file and a line.**

---

## What to do with the result

Write down what the run produced **before** making any change it caused, in
`fixtures/README.md` under a dated entry. A score taken after the fixes is a
score of the fixes.

Commit the report to `calibration/<date>/`, unedited. Normalise nothing except a
machine-specific path, and say in `calibration/README.md` that you did.

Then repair, and record what you deliberately left. That last list has been the
most useful part of every round.
