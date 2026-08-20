# Calibration runs

The audit reports behind the `Last calibration` section of
`fixtures/README.md`, as the runs produced them.

That section quotes these reports. Until now it quoted them from outside the
repository, and the final review of the v2 round found the cost: two of its
quotations were fabricated. The substance around them was faithful and the
strings were not, and no reader could tell, because the only copy of the source
sat on one machine. A record that cites evidence it does not carry is a record
nobody can check. These files are that evidence.

## The runs

`2026-08-07`, seven blind runs, the round that added the Craft axis. Each agent
received `SKILL.md`, the `references/` files SKILL.md names, and one target
directory. None could read `fixtures/README.md`, the repo root `README.md`,
`tests/`, `scripts/`, or any fixture but its own. None knew the expected answer,
that a fourth axis had just been added, or that anything had been repaired.

The numbering is the one `fixtures/README.md` uses when it says "run 6".

| Run | Invocation | Target | File |
|---|---|---|---|
| 1 | full | `slop-dashboard` | `2026-08-07/audit-1-slop-dashboard.md` |
| 2 | full | `clean-dashboard` | `2026-08-07/audit-2-clean-dashboard.md` |
| 3 | full | `slop-landing` | `2026-08-07/audit-3-slop-landing.md` |
| 4 | full | `clean-landing` | `2026-08-07/audit-4-clean-landing.md` |
| 5 | `anti-slop craft` | `slop-dashboard` | `2026-08-07/audit-5-craft-slop-dashboard.md` |
| 6 | `anti-slop craft` | `clean-dashboard` | `2026-08-07/audit-6-craft-clean-dashboard.md` |
| 7 | `anti-slop craft` | `clean-landing` | `2026-08-07/audit-7-craft-clean-landing.md` |

Runs 1 through 4 ran under the ten-finding cap. The cap was suspended for 5, 6
and 7 so a single-axis run could report everything the axis found. Only run 5
records that instruction in its own header.

## What these files are not

**Not edited to agree with anything.** One change was made, in the header of run
3, where the target was written as an absolute path on the machine that produced
it and is now written the way the rest of the repository writes paths. Nothing
else was touched. Their disagreements with the catalog are the reason to keep
them: run 6 declined C1 by supplying a rule C1 does not contain, run 5 filed a
true positive under "Marginal but real", and both of those are open entries in
`fixtures/README.md`.

**Not maintained.** They are a dated snapshot. When a fixture moves, these line
citations go stale and stay stale, the same way the example in the root
`README.md` points at a tree that has since grown.

**Not a complete history.** The v1 round, dated the same day, ran four blind
audits of its own, and `fixtures/README.md` records what they scored - but those
four reports did not survive their workspace. That entry is a record without artifacts, and it is the
reason this directory exists.

## What changed after the runs

The catalog the seven agents read is not quite the catalog in the repository
today. Commit `b598dde`, which applied the final review of the round, rewrote
the second `Not slop when` clause of ten of the twelve Craft tells: twenty lines
out, twenty in, no `Signal`, `Principle` or `Fix` touched, and no exemption
widened or narrowed. Ten clauses had converged on the same closing formula and
were varied. Where `fixtures/README.md` quotes a door-two clause while
discussing what a run did, the clause is quoted in today's wording and the run
read the earlier one.

The same commit widened a row type in `slop-dashboard/app/invoices/page.tsx`.
It moved no line, and the citations in these reports still resolve against the
fixtures as they stand.
