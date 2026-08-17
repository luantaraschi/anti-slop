# anti-slop — full audit: `built-mise` (application screen)

A dense kitchen shift board built from a brief by `anti-slop-build`, audited
blind. The auditor was asked, in addition to the normal report, which tells fit
an application screen badly.

## Verdict

**Nothing in this catalog fires: 0 of 41.** Surface 0/10, Craft 0/12, Words 0/7,
Finish 0/12.

The auditor recomputed rather than read: all ten contrast ratios from the hex
values under WCAG 2.1, the labour arithmetic, the 40px target arithmetic
(31 + 4.5 + 4.5), and the concentric radius arithmetic (6.5 = 2 + 4.5).

> "A zero-fire verdict is the one most likely to be credulity, so read the three
> sections after the ledger before accepting it. Three verdicts (A10, C1, C11)
> rest on a rule I supplied because the tell does not contain one, and I give you
> the count that would flip each. Four defects are real and no tell in this
> catalog names them."

## The three verdicts that could flip

**A10 — what "plays a primitive's role" means.** Supplied: a component plays the
role when it *is* the primitive's use case, not merely the same HTML element. On
that rule the importers are 2 of 2. **Under the opposite rule — same element
implies same role — it is 2 importing against 2 hand-rolling and A10 fires.**
A10 sets no threshold for 2 against 2.

**C11 — whether "visual reduction" means lower emphasis.** The disabled drop zone
moves apron to flame, which is louder, plus `cursor-not-allowed` and a label
reading the refusal. Supplied: the Principle's *agreement* test governs, and
"reduction" names the usual form agreement takes rather than the only one. **On a
literal reading of the Signal word "reduction", C11 fires.**

**A8 — whether three semicolon-separated structures are a conjunction.** Applied
SKILL.md's convention literally, so the Signal fails. But the three read
naturally as alternatives, and clause three matches exactly. **On an
any-one-clause reading A8 fires**, then declines at its `Not slop when`.

## Six real defects no tell names

1. **The control height is a magic number with no theme step**, re-typed at four
   sites. Change `hair` and the 40px targets silently stop being 40px at all four.
2. **The pseudo-element shape is duplicated character for character** across two
   files, with the arithmetic stated twice in prose and neither comment
   referencing the other.
3. **A no-op drop clears the published state.** Dropping a cook back on the
   station they already occupy changes nothing and still flips the button from
   "Calls out" to "Publish", telling the chef the phones are stale when they are
   not.
4. **Three counts in a row, two of which overlap.** One renders 7 and another
   renders 2, and the 2 are inside the 7.
5. **An empty station renders no words at all.** W3's Principle objects — it
   asks for an invitation to act rather than a count report — but its Signal is
   three literal strings, so the tell cannot reach a wordless empty state.
6. **Metadata exported from the not-found file probably never reaches the
   browser**, since Next resolves metadata over layout and page segments.

## Where the catalog fits an application screen badly

**Nine of the 41 tells are written for a public page, and five verdicts turned
on the mismatch.**

- **A8** — two of its three clauses cannot occur on an operational screen at all,
  leaving one clause live, and that clause describes what a cost rail
  legitimately *is*. "A tell whose discriminating power collapses to its least
  discriminating clause on this class of target is not measuring what it was
  built to measure."
- **W7** — its four examples are landing-page furniture. On an app screen the
  counts are set by the domain, and the entire verdict rests on the escape clause.
- **F4** — the Signal demands an Open Graph image for every shareable route. A
  shift board has none. The image genuinely is absent; the conjunction and the
  internal exemption are what saved it, not the design.
- **F9** — canonical URLs on a screen that never reaches an index. Saved by "has
  only a single route", which is luck: **an identical internal app with two
  screens fires F9 for no benefit to anyone.**
- **F10** — spends a slot in a 41-tell audit on something that could never matter
  here, though it does carry an internal exemption.
- **F3** — its only exemption was "behind authentication", so an internal app
  with no visible auth layer got no exemption. The auditor proposed the fix
  adopted in this round: **"internal, or behind authentication", matching F4 and
  F10.**
- **W6** — `words.md` opens by saying copy inside the interface rather than
  marketing prose, and W6 is a marketing tell with nothing to read on a screen
  whose entire prose is one 404 paragraph.
- **A2, C6** — effectively unfirable on an internal tool.

**And W3 under-reaches in the opposite direction, which matters more.** Its
Signal is three literal strings. On an application screen the more common failure
is an empty container that renders *no words at all*. "On dashboards,
wordless-empty is probably more frequent than stock-string-empty."

## Comments

**Did a comment move a verdict? One was positioned to, and was refused.** The
button component pre-argues A10's own exemption. The auditor did not accept it,
counted importers against hand-rolled sites, read the structural difference, and
supplied the role rule in the open.

On the reduction-pass records: **"A removal is unverifiable by definition; the
removed thing is gone. None of them was allowed to count as evidence."** What
counted was the present-tense absence, which greps clean.

**Three comments claim more than the code does**, and one is a defect this round
propagated from the build skill:

1. **"`theme` is REPLACED, not extended."** Tailwind merges a top-level theme
   per key, so **only the declared keys are replaced**. `minHeight`, `height`,
   `width`, `flex`, `inset`, `opacity`, `keyframes` and `animation` were never
   declared and stay at defaults, so `opacity-50`, `min-h-screen`, `h-96` and
   `animate-pulse` all still compile. The build skill stated this too broadly and
   has been corrected.
2. **"The scales below are complete enough to build the whole screen from, and
   nothing outside them is used."** Not true — three arbitrary height values and
   a grid template sit outside every declared scale. The missing scale is the
   control height, which is finding 1.
3. **"Any move invalidates the calls that went out."** A no-op drop is not a
   move, and the service layer knows that while the page does not. Finding 3.

**One comment is accurate and non-obvious and the code depends on it.** A claim
that Tailwind emits the left-border colour after the all-sides colour, so the
state keeps the left edge — correct about emission order, and "the kind of claim
that is usually wrong when written, and here it is not."
