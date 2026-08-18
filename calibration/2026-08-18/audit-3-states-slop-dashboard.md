# anti-slop states — `fixtures/slop-dashboard`

The States axis's first measurement of any kind. Three tells, no prior run.

**Verdict** — the dashboard was built for the minute it was demonstrated: the
only network call in it has nowhere to put a failure, and every filter the
reader can set lives somewhere a refresh will wipe and a link can never carry.

```
ROOT
S1  Live figures freeze on a made-up number   app/page.tsx:25
S2  Filters die on refresh, can't be linked   components/filter-panel.tsx:6
```

**S1 fires, S2 fires, S3 declines.** Both expected ids reported, nothing off-row.

## S1

Every five seconds the page asks for fresh figures and there is no instruction
anywhere for what to do when the server does not answer. The numbers simply stop
changing, and a reader cannot tell a figure that stopped updating from one that
stopped moving. Worse here: the page starts with three numbers typed into the
code, so a cold load whose first request fails shows three invented figures
presented as live business data. The timer keeps firing regardless, and nothing
checks the response succeeded before treating it as data.

## S2

Two controls held in the panel's own memory, nothing writing either to the
address. More fragile than that: the panel unmounts when closed, so closing and
reopening the drawer resets both — the settings do not survive a click, let alone
a page load. And nothing reads them, so the two controls currently change only
their own labels.

## S3 — declines, Signal never matched

Every handler in the tree was enumerated: three, all `setState`. No destructive
handler exists in this product, and no control submits anything.

The decline is worth stating because the failure mode is inviting. "Send
reminders" is a genuinely irreversible bulk action with no confirmation anywhere
near it, and there is not a single pending state in the product. An auditor
working from the Principle rather than the Signal would fire S3 without much
hesitation. But this button has no handler and is permanently disabled — firing
S3 here would mean firing on *the absence of the feature* rather than the absence
of the guard, which is a different and far broader tell than the one written.

## Rules the run had to supply — eight, three of them structural

**Inapplicable clauses have no rule.** S1's four negative clauses describe four
different request idioms — promise chain, async/await, query hook, error boundary
— and at most two can apply to any given callsite. Two of the four had no subject
here, and the run had to invent that *a negative clause whose subject does not
exist is satisfied vacuously rather than blocking the conjunction*, since the
alternative makes S1 decline on every promise chain ever written.

> "SKILL.md's conjunction convention settles how clauses combine and says nothing
> about clauses that have no subject. On the evidence of this run that gap is
> more consequential than the conjunction rule it sits beside."

**S2's Signal and Principle give opposite answers about the same line.** The
Signal lists "an expanded panel held in component state" as a site. The Principle
says the test is whether the value answers *what am I looking at* — and an open
drawer does not. The run ruled that the Principle governs and the Signal's list
is a candidate set. "The only place across the three tells where two fields of
the same tell give opposite answers about the same line of code."

**S2 is close to unfalsifiable on a small project.** All three of its doors are
shaped *the project does this correctly somewhere else*, so a two-route app that
has never touched the address bar cannot open any of them. It is right here — the
filters really are lost on refresh — but it would fire just as hard on a project
where single-view-only was deliberate, and offers that project no way to say so.
"The axis is missing a door for 'this was decided, and decided this way.'"

Plus: two counting clauses with no threshold, on a population of one; an
exemption whose text calls the thing an oversight while sitting under `Not slop
when`; an idempotency door asking for a fact about the server that a frontend
auditor cannot establish; and "Separately:" carrying the weight of declaring a
second independent limb when SKILL.md legislates that exact phrasing elsewhere.

## What the axis does not cover, and it is large

**A control that promises an action and performs none.** Four of the seven
controls in this tree are decorative — Refresh, New invoice, Export CSV and Send
reminders all have an icon, a cursor, a label and no handler.

> "A control that promises an action and performs none is exactly the failure this
> axis is named for — the interface not existing off the demonstrated path — and
> none of S1, S2 or S3 reaches it. S1 fires on a request with no failure branch;
> the inverse case, a control with no request at all, has no tell."

## Whether the axis's own framing held

For S1 exactly: the absent `.catch` *is* the finding. For S2 no — what is missing
is not a branch but a storage location, and the run reasoned in Surface's shape.
For S3 neither: it declined by census, enumerating every handler.

> "You cannot see a missing branch until you have enumerated the complete set of
> sites where it could be missing. Finish is greppable; States only *looks*
> greppable, because a grep can confirm a thing is absent from the files you
> searched and can never confirm you searched the right files."
