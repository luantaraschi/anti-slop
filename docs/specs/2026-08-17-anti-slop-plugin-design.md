# anti-slop as a plugin: build, audit, launch

Design, 2026-08-17. Nothing already in the catalog is rewritten here: every tell
shipped in v0.2.0 keeps its wording, its id and its exemptions. The auditor
grows, and the growth is additive.

## What changes

Today the repository is one skill that reads interface code and reports what
nobody finished. It starts after the code exists and stops at the source tree.

Two things get added around it. One runs before any code exists and forces the
decisions whose absence the auditor detects. One runs after the interface is
done and covers what shipping requires: reach, speed, safety and honesty.

The three ship as one plugin so a user installs once.

## The loop

The auditor's false positive rule looks for evidence of a decision in four
places before a Surface tell may fire: `theme.extend`, custom properties under
`:root` or `@theme`, a dedicated tokens file, and a `components/ui/` that
differs from stock shadcn.

The build skill writes into those four places. Not as an accommodation — that is
what deciding looks like when it is written down. The consequence is that the
auditor goes quiet on anything the build skill produced, by construction, and
the failure mode is legible: if a tell fires on a tree the build skill made, the
build skill failed and the audit says exactly where.

That gives the round its test, using calibration machinery the repository
already has. Build a specimen from a brief, audit it blind, and read the score
the way `fixtures/README.md` already records scores.

`fixtures/clean-dashboard` and `fixtures/clean-landing` are the target output,
already written and already calibrated. `clean-dashboard/tailwind.config.ts`
names five colors after the product rather than after their rank (`ink`,
`paper`, `rule`, `ledger`, `flag`), carries the radius scale with its own
arithmetic in a comment (`12 = 5 + 7`), picks a serif no generator reaches for,
names four type sizes semantically, and declares one elevation level with the
reason it is one and what it costs in the dark theme. `clean-landing` uses
purple — the same purple whose gradient fires A2 on `slop-landing` — and
declares no shadow at all. Neither the color nor the absence is the point. The
naming and the recorded reason are.

## The three skills, and the boundary

The division is by where the evidence lives, not by subject.

| Skill | Reads | Returns |
|---|---|---|
| `anti-slop-build` | the brief, before code exists | decisions recorded in code |
| `anti-slop` | the source tree | findings with a file and a line |
| `anti-slop-launch` | the tree, the running site, the human | findings, measurements, questions |

The auditor keeps `file:line` without exception. That rule is the reason its
output can be trusted, and nothing in this design relaxes it.

The launch skill returns three classes instead, and never mixes them:

- **Finding** — a file and a line, same standard as the auditor.
- **Measurement** — requires running something: a Lighthouse pass, a bundle
  measurement, an indexing check.
- **Question** — cannot be known from any artifact. Whether a testimonial
  describes a real customer, whether the sitemap is registered, whether a metric
  has a source. A question is asked. It is never reported as a finding.

The third class is what lets the launch skill carry material the auditor could
never accept, without contaminating the auditor's standard.

It also settles the Finish axis, which stays where it is. The line between
audit and launch is *what the source shows* against *what only running,
publishing or asking can tell you*. Launch extends Finish; it does not
duplicate it.

## anti-slop-build

Four root decisions. Everything else derives, and the derivation gets recorded
with the value.

**Roots** — only the human or the brief can answer these:

1. **What the product concretely is.** Real capabilities, real figures, real
   names, what can be shown on screen. This is an inventory, and it is what
   makes generic copy impossible rather than forbidden.
2. **The voice.** How the product talks.
3. **The visual temperature.** Sober and institutional through to expressive.
   This is what turns "gradient or no gradient" into a decision instead of a
   prohibition.
4. **The density.** How much belongs on one screen.

**Derived** — computed, then written down with the reasoning beside it: palette,
type scale, radius scale (through C1's concentric arithmetic), elevation levels
from how many layers the interface actually has, motion, iconography.

The recorded reasoning is not documentation. It is the evidence. A value alone
is another default; a value with its derivation is a decision, and the auditor
is built to tell those apart.

**Copy** follows from the inventory. Every line draws on it, and an empty
inventory buys fewer words rather than invented ones. Section 4 of the reference
document (artificial formulas) and section 18 (a product that is never shown)
have one root: an empty inventory filled with fiction. Invented metrics and
fabricated testimonials are the same failure.

**The reduction pass** (reference document §19) belongs here as the build
skill's closing step, not as a tell. It is an instruction to remove, and the
auditor has no way to observe what a second pass would have deleted.

## anti-slop, the auditor

Keeps its evidence rule, its report rules, its refusals, and every tell it
already carries. It gains tells for two subjects the reference document covers
and the catalog does not:

- **Incomplete states** (§17) — empty, loading, skeleton, API error, auth error,
  timeout, unavailable action, invalid form, feedback after an action. The
  existing F8 and W3 touch the edges of this; the subject is larger.
- **A product never shown** (§18) — generic mockups, a fake terminal, abstract
  cards standing in for the thing itself.

Both are detectable in source, which is why they land here rather than in
launch. Whether they extend an existing axis or open a fifth is left to the
implementation plan; the coverage arithmetic in `BACKLOG.md` moves either way.

## anti-slop-launch

Reference document §7 through §16, minus what Finish already greps. The
material divides by question rather than by section:

- **Reach** — can anyone find it. §8 SEO detail beyond Finish (title and
  description lengths, absolute canonical, the Open Graph set, Twitter Card,
  JSON-LD), §9 discovery, §10 analytics.
- **Speed** — §11. Mostly measurement.
- **Guard** — §13 security, §14 uploads.
- **Trust** — §15 privacy, policies and false social proof, §16 model behaviour
  in a user-facing product.

Loaded on demand, one file per group, the pattern `SKILL.md` already uses and
the reason the auditor's 41 tells fit in a context window at all.

**Handoff to `security-review`.** §13 overlaps a skill that already exists in
the harness. Launch covers what is specific to shipping a web product and hands
the deep pass over rather than reimplementing it. The plan writes that boundary
explicitly; a launch skill that quietly reimplements a better skill is waste.

**Stack.** The auditor declares React, Tailwind and shadcn, and §13 and §14
cannot be answered inside that boundary — secrets, row-level security, auth and
uploads live in a backend the auditor never reads. Launch needs its own, wider
stack statement. This was raised as a concern when the scope was set and
accepted deliberately; it is recorded here as a constraint the plan must solve,
not as an objection to relitigate.

## The six refusals

The auditor refuses six patterns as evidence, each with a written reason. The
reference document's §7 names all six. The two documents are making different
claims: the auditor's is *nobody came back to this*, the document's is *this is
not ready to ship*, and the second is what the launch skill exists to say.

One rule, rather than six exceptions:

> A pattern the auditor refuses may become a launch **question** or a launch
> **measurement**. It never becomes a finding.

Applied: `vercel.app` and `robots.txt` become questions about intent. Source
maps become a question — Sentry or oversight. A large bundle becomes a
measurement, which the refusal itself already argued for when it said "a
performance problem, not an authenticity one". An SPA with an empty view-source
becomes an indexing measurement. None of the six acquires a file and a line
anywhere in the plugin.

## Boundaries with skills that already exist

The plugin constrains and checks. It does not design.

- `frontend-design`, `ui-ux-pro-max`, `make-interfaces-feel-better` — generative
  visual work. The build skill hands them decided constraints and stays out of
  their way.
- `humanizer` — prose style. The Words axis is interface copy: labels, button
  verbs, empty states, error messages. Different genre, little real overlap.
- `security-review` — see the handoff above.

## This is more than one plan

Three skills, roughly a hundred checks the catalog does not carry today, and a
repository restructure. Written as a single implementation plan it would be
unreviewable, and the v2 round is the evidence: eight tasks for one axis, and
the final review still found a Critical.

It decomposes into rounds, each with its own plan, its own blind measurement and
its own entry in `fixtures/README.md`:

1. **The plugin shell.** Answer the three open questions below, restructure to
   whatever the answers require, and ship the auditor unchanged inside it. No
   new catalog. The round is done when the plugin installs and the auditor
   behaves exactly as it does today.
2. **`anti-slop-build`.** The four roots, the derivation rules, the recording
   format, the reduction pass. Measured by building a specimen from a brief and
   auditing it blind. Carries `BACKLOG.md` Round A, because both need the same
   run.
3. **The auditor's two new subjects.** Incomplete states and a product never
   shown, with the fixture coverage that measures them, against `BACKLOG.md`
   Round B's existing gap.
4. **`anti-slop-launch`.** Largest and last, because its three output classes
   are only worth building once the auditor's standard is settled and the
   plugin shell can carry a second big catalog.

Order matters between 1 and the rest; 2, 3 and 4 could reorder if a reason
appears. Round 1 exists on its own because a restructure that also adds a
catalog gives a reviewer no way to tell which half broke something.

## Open questions

1. **Plugin layout — answered, Round 1.** Skills live at
   `skills/<name>/SKILL.md`, and a skill may cite files outside its own
   directory by relative path. Both verified against the official `superpowers`
   plugin at 6.3.0 rather than against documentation: it exposes fourteen skills
   that way, and three of them reach into a sibling's directory with `../`.
   `references/` moved inside `skills/anti-slop/` anyway, which left `SKILL.md`
   needing no edit at all and kept the skill directory self-contained. Rounds 2
   and 4 reach in with `../anti-slop/references/` when they need the catalog.
2. **The documented install — answered, Round 1.** It could not be preserved. A
   personal skill is one directory holding one `SKILL.md`, so a repository
   exposing three of them cannot be installed by cloning into
   `~/.claude/skills/`, whatever the layout. The README now leads with the
   marketplace install and keeps a one-skill copy path, which works because the
   catalog travels inside the skill directory.
3. **`llms.txt` — still open, owned by Round 4.** The refusal rests on "a 2024
   convention that never became a standard", written a round ago and never
   rechecked. Verify its status before launch touches the subject; the refusal
   may be right, stale, or right for a new reason.

## What this does not do

It does not rewrite the catalog, relax the auditor's evidence rule, or make any
claim about who or what wrote the code under audit. The discipline stated in
`SKILL.md` and `README.md` — a tell fires on absence and repetition, never on
origin — governs all three skills. The vocabulary for what this plugin prevents
is *generic*, *undecided*, *unfinished*. Never *AI-generated*.

## How a round of this gets tested

Unchanged from v2: blind runs, recorded before the repairs they cause, committed
under `calibration/<date>/`.

The build skill adds one shape the corpus has not run: build a specimen from a
brief, then audit it blind. A tell that fires is a build failure with a location.

**Batch with the open debt.** `BACKLOG.md` Round A holds five catalog repairs
that need a blind run to be measured, plus four v2 changes that went in
unmeasured. A blind run is spent once per round. Any round that runs blind for
the build skill should carry Round A with it, or it burns the same run twice.
