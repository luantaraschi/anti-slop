# anti-slop states — `fixtures/clean-dashboard`

**0 of 3 fire.** S1, S2 and S3 all decline. Nothing leaked.

## Scope note the run put before its own verdict

`states.md` opens with an exemption releasing "a tree that declares itself a
sketch, a Storybook story, or a fixture". This tree sits under `fixtures/` and
carries a comment calling it "the corpus". By the axis's own preamble all three
tells are out of scope here. The run scored it as a shipped product because the
invocation said to, and said so at the top rather than burying it.

**That exemption makes the corpus un-auditable by its own axis.** No other axis
has it in that shape.

## The three

**S1 declines — condition arose, Fix applied.** One request site, and clause 2
breaks the conjunction at `components/stat-card.tsx:45`. The `.catch` sits after
both `.then` links, so it covers the network rejection, the explicit throw on a
bad status, a parse failure and a throw inside the success callback. The Fix is
the specific one the tell describes: the last good total is kept and labelled
last known, and the interval keeps running so recovery is automatic.

**S2 declines — a clause closed a real match.** The Signal matched on `open` at
`filter-panel.tsx:18`, and the exemption's own example — "whether a menu is
open" — retracted it. The filter itself is not in component state at all; it is
read back from the address.

**S3 declines — the Signal never matched.** Three handlers in the tree, none of
them destructive, no control submitting anything.

> "S3 passes here because the product does not perform its actions yet, not
> because it performs them carefully. Read the S3 line as 'not applicable', never
> as 'guarded'."

## The comment I wrote yesterday is false in both halves

`components/filter-panel.tsx:14-15` claims "a colleague you send this link to
sees the ledger you were reading, and the back button undoes the filter."

- **The back button does not undo the filter.** Line 30 calls `router.replace`,
  which overwrites the current history entry instead of pushing one — precisely
  the API choice that prevents back from working. `router.push` would make the
  sentence true.
- **The colleague does not see that ledger.** Nothing consumes the `overdue`
  param. `app/page.tsx:124` renders the static array unfiltered and
  `app/invoices/page.tsx:19` never reads `searchParams`. The value reaches
  exactly two places: `aria-pressed` and `disabled`. **The link carries a filter
  that changes which button looks pressed and nothing about which invoices show.**

And `components/table.tsx:7-8` overstates by one: three branches exist, two
ship, because the filtered-to-nothing branch needs a `filter` prop no callsite
passes.

No comment moved a verdict — every clause was decided on executable code — and
the run noted that mattered here rather than being a formality, because an
auditor who scored the prose would have got S2 wrong in the tree's favour.

## Where the tells are wrong

**S3 is unfirable on any tree that has not been wired.** Both halves need an
action that executes. Four labelled action buttons wired to nothing satisfy
neither, and the decline reads identically to a tree that guards everything.
All four doors are doors for products that act; none covers "the control does
not do its thing yet", which on a shipped product is worse than an unguarded
delete, because the button lies about what pressing it costs. **Both States runs
reached this independently.**

**S2's clause 1 enumerates a case its own exemption always forgives.** The
Signal names "an expanded panel"; the exemption names "whether a menu is open"
as the type case of ephemeral state. In most trees those are the same object.
"It is a trap — an auditor who reads the Signal, finds an expanded panel in
`useState`, and stops has a fire that looks well-evidenced and is wrong."

**S2's clause 2 treats three cures as interchangeable when the Principle names
three separate costs.** Refresh, the back button and the pasted link do not share
a cure: search params fix refresh and the link, only a history entry fixes back.
This tree is the demonstration, and S2 has no wording that lets it register the
missing half. "The one place where a real, nameable defect sat in front of the
axis and the axis could not reach it."

**S1's Signal is written purely as the absence of its own Fix**, which collapses
two decline states into one: you cannot tell "the Signal never matched" from
"the Fix was applied" without separately asking whether any request exists. And
its Fix and Principle are written entirely for reads, which a failed mutation
has no equivalent of.

## A correction to SKILL.md

"How a Signal reads" says three tells carry a counting clause with no threshold —
A3, C2 and C4. S1 and S2 both do too.

> "On the standard that paragraph sets, it is five, not three, and the roster
> should say so."
