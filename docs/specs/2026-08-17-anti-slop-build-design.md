# anti-slop-build: forcing the decision before the code

Design, 2026-08-17. Round 2 of `2026-08-17-anti-slop-plugin-design.md`.

## The problem this skill has

An agent building a UI reaches for a default at every point where a decision was
never made. Forbidding the defaults does not help: forbid the purple gradient
and the generic reappears somewhere the list does not cover. The auditor already
says why, in the rule that governs it — a finding is a pattern present **and** no
evidence anyone chose it. The pattern was never the defect.

So this skill does not carry a list of things not to do. It forces the decisions
whose absence is what the auditor detects, and it writes them where the auditor
looks.

## The corpus is already the answer

`fixtures/clean-landing` and `fixtures/slop-landing` are the same page. Both are
a hero: a gradient, a headline, a subtitle, a call to action. The slop row
expects three Surface tells on it — A2, A7, A8 — and the clean row forbids A2,
A4 and A7, none of which has ever leaked in a blind run.

| | `slop-landing` | `clean-landing` |
|---|---|---|
| gradient | `from-purple-600 to-blue-500` | `from-dusk to-ink` |
| headline | "Build something great today" | "Every invoice your firm sent, reconciled the morning after." |
| subtitle | "The platform for teams that move fast." | "Reads the bank feed, matches it against what you billed, and flags what neither side explains." |
| call to action | "Get Started" beside "Learn More" | "Reconcile your first month" |
| elevation | — | `shadow-xl` |

The clean fixture has the gradient. It has `shadow-xl`, and A4 — the tell that
fires on stacked elevation — is on its forbid row and has never fired. Nothing
was removed and nothing was forbidden. The colors have names that came from the
product, and the words came from what the product does.

The clean landing is not silent everywhere: it fires C4, and
`fixtures/README.md` records that as the fixture being right and the round's
scope showing through, since v2 gave the Craft treatment only to the dashboard
pair. That is open debt, listed as B1 in `BACKLOG.md`, and it is on the Craft
axis rather than this comparison's.

This skill's job is to produce that left-to-right difference. The corpus is not
an analogy for the target output — it is the target output, already written,
already calibrated, already reviewed.

## The grammar of a recorded decision

A value is a default wearing a name until something records why it is that
value. Reading the two clean fixtures, every recorded decision takes one of five
shapes. This is extracted, not invented; each shape below is a real comment in
the corpus.

1. **Derivation** — the value comes from another value by stated arithmetic.
   `tailwind.config.ts:14-15`: "panel wraps control with 7px of padding:
   12 = 5 + 7. Keep that gap and the two curves stay concentric; change one
   number and change the other."
2. **Subtraction** — what was removed, and why it was removed rather than left.
   `components/ui/button.tsx:7-12`: "only the two variants the ledger actually
   uses. The stock ghost, link, and destructive variants were removed rather
   than left in place unused."
3. **Accepted cost** — what the choice loses, stated instead of hidden.
   `tailwind.config.ts:29-32`: the one shadow "is ink on ink in the dark theme
   and does no work there, which is accepted rather than papered over with a
   second shadow."
4. **Platform fact** — a truth about browsers or devices that forces the choice.
   `components/ui/button.tsx:17-19`: "hover does not exist on a touchscreen, so
   without `active:` the control says nothing back until the page itself
   changes."
5. **Abstention** — the place where nothing was done, and why that was the
   decision. `components/table.tsx:21-23` keeps the theme's 7px inset without
   the radius that usually accompanies it: "The panel above already carries the
   radius; a second bordered card around one button would only repeat it."

A skill that emits values without one of these five is a skill that renamed the
defaults. The grammar is the deliverable, not decoration around it.

## The four roots

Only the human or the brief answers these. Everything else derives.

1. **What the product concretely is.** Real capabilities, real figures, real
   names, what can be shown on screen. `clean-landing` spends this root in every
   line it writes: bank feed, what you billed, the morning after, your first
   month.
2. **The voice.** `clean-landing` is operational and adjective-free. Its subtitle
   is three verbs — reads, matches, flags — where the slop subtitle is a claim.
3. **The visual temperature.** This is what makes a gradient a decision. The
   clean landing is expressive enough to run one and sober enough to run one
   call to action.
4. **The density.** `clean-dashboard` sets its largest type at `2.25rem` and its
   body at `0.9375rem`; `clean-landing` sets display at `3.25rem` and body at a
   full `1rem`. Same author, same conventions, different density, and every
   spacing value in both follows from it.

## What derives, and from what

| Derived | From | Recorded as |
|---|---|---|
| palette | product + temperature | names drawn from the product, never rank (`ink`, `paper`, `rule`, `ledger`, `flag` — not primary/secondary) |
| type scale | density + the content's real hierarchy | semantic names (`note`, `body`, `figure`, `title` — not sm/md/lg) |
| radius scale | density + C1's concentric arithmetic | derivation: outer = inner + padding |
| elevation | how many layers the interface actually has | subtraction and accepted cost: how many levels, and what the unused ones cost |
| motion | temperature | platform fact and asymmetry: enter and exit do not weigh the same |
| iconography | voice | abstention where an icon would decorate rather than say something |

The right column is the point. A derived value that lands without its shape from
the grammar is indistinguishable from a default, to the auditor and to a reader.

## Copy

Copy is not a fifth root; it is the first root spent. Every line draws on the
inventory, and an empty inventory buys fewer words rather than invented ones.

That single rule covers what the reference document splits across two sections:
artificial formulas (§4) and a product that is never shown (§18) are the same
failure, an empty inventory filled with fiction. An invented metric and a
fabricated testimonial are that failure with legal consequences attached.

The Words axis keeps detecting the symptom. This skill removes the cause.

## The reduction pass

The build skill's closing step, and the reference document's §19. After the
interface exists, one pass whose only purpose is removal: does this icon, card,
badge, number, animation, section or second call to action earn its place, or
did the template ask for it rather than the content.

It belongs here rather than in the catalog because the auditor cannot observe
it. A tell fires on what is present. Nothing in the tree records what a second
pass would have deleted.

## What this skill does not do

It does not design. `frontend-design`, `ui-ux-pro-max` and
`make-interfaces-feel-better` do that, and this skill hands them decided
constraints and stays out of the way.

It does not forbid gradients, shadows, purple, pills, rounded corners or any
other pattern. The clean fixture runs a gradient and a `shadow-xl`. A skill that
shipped a banned-list would contradict the rule the auditor is built on.

It does not claim anything about who wrote the code. The vocabulary is
*generic*, *undecided*, *unfinished*.

## How it gets measured

Build a specimen from a brief, then audit it blind, and score it the way
`fixtures/README.md` scores everything else. A tell that fires on a tree this
skill produced is a build failure with a file and a line.

This is the first shape the corpus has not run, and it is a real test rather
than a demonstration: the auditor is calibrated, the specimen is new, and the
agent auditing it does not know how it was made.

**It needs fresh agents that have not read this repository, and that is not
authorized in the session this design was written in.** The authoring half of
the round does not depend on it. The measurement half does, entirely, and no
claim about whether the skill works may be recorded until it runs.

## Carried debt

`BACKLOG.md` Round A holds five catalog repairs that need a blind run to be
measured. The plugin design says to batch them here, because a blind run is
spent once per round.

That reasoning holds only if this round runs blind. If the measurement is
deferred, the batching argument goes with it, and Round A should be carried by
whichever round actually spends a run. The plan must not bundle Round A into an
unmeasured round and call the debt paid.
