---
name: anti-slop-build
description: |
  Decide a product's visual identity and voice before building its interface,
  so the result is not the ecosystem's defaults wearing a product's name. Use
  when starting a landing page, dashboard, or component library in React,
  Tailwind or shadcn, before writing components — or when an interface already
  reads as generic and its palette, type scale, radius, motion and copy need
  deciding rather than inheriting.
license: MIT
metadata:
  version: "0.1.0"
---

# anti-slop-build

## What this is

This skill runs before the components exist. It forces the decisions whose
absence `anti-slop` detects, and writes them where `anti-slop` looks for them.

It does not design. `frontend-design`, `ui-ux-pro-max` and
`make-interfaces-feel-better` do that. This skill hands them decided
constraints and stays out of the way.

## What it never does

**It carries no list of banned patterns.** Forbid the purple gradient and the
generic reappears wherever the list does not reach. The audit rule says why: a
finding is a pattern present **and** no evidence anyone chose it. The pattern
was never the defect.

A gradient, a shadow, a pill, a purple, a rounded corner — all available. What
is not available is reaching for one without deciding it.

## The four roots

Only the brief or the human answers these. Answer from the brief where the
brief answers, ask where it does not, and never fill one from the ecosystem's
defaults. Everything else in the interface derives from these four.

1. **What the product concretely is.** Real capabilities, real figures, real
   names, what can be shown on screen. Write this down as an inventory before
   anything else: it is the only source the copy is allowed to draw on.
2. **The voice.** How the product talks. Establish it as a sentence you could
   test a line against, not as an adjective.
3. **The visual temperature.** Where it sits between sober-institutional and
   expressive. This is the root that makes a gradient a decision.
4. **The density.** How much belongs on one screen. This sets the body size and
   the step ratio, and every spacing value follows from them.

An unanswerable root is a finding, not a blocker: say which one the brief does
not answer, and ask. A root guessed silently produces an interface that looks
decided and is not.

## Process

1. **Roots.** Answer all four. Record the inventory as text before any code.
2. **Theme before components,** which is the audit procedure run backwards. The
   auditor reads `tailwind.config` first because three Surface tells are
   absences that live there. Write those same three places first.
3. **Derive.** Each value comes from a root or from another value. `deriving.md`
   carries the rule per value.
4. **Record.** Every derived value lands with one of the five shapes below.
   This is the deliverable, not commentary around it.
5. **Components,** built against the theme rather than re-deciding at each
   callsite. A class stack retyped at five callsites is the same defect as a
   palette nobody picked, one level down.
6. **Copy,** drawn only from the inventory.
7. **The reduction pass.** One pass whose only purpose is removal.

## The five shapes of a recorded decision

A value is a default wearing a name until something records why it is that
value. Every recorded decision takes one of these forms. Anything else is
decoration.

| Shape | Records |
|---|---|
| **Derivation** | this value comes from that value, by this arithmetic |
| **Subtraction** | what was removed, and why removed rather than left unused |
| **Accepted cost** | what this choice loses, stated instead of hidden |
| **Platform fact** | the truth about a browser or a device that forces it |
| **Abstention** | the place nothing was done, and why that was the decision |

Put them where the value is, not in a separate document. A design note in a
README is not evidence a reader of the code can find, and it is not evidence
the auditor's rule accepts.

## Where the decisions go

The audit rule searches four places for evidence. Write into them:

`theme.extend` · custom properties under `:root` or `@theme` · a dedicated
tokens file · a `components/ui/` that differs from stock shadcn.

Naming is part of the evidence. Colors named for the product rather than for
their rank, type sizes named for what they carry rather than `sm`/`md`/`lg`. A
palette named `primary` through `quinary` records an order, not a decision.

## The reduction pass

After the interface exists, one pass that only removes. For each icon, card,
badge, number, animation, section, and second call to action, ask whether the
content asked for it or the template did. Removing it and losing nothing is the
answer.

This step cannot be audited. A tell fires on what is present, and nothing in a
tree records what a second pass would have deleted — which is why it lives in
the procedure and not in a catalog.

## Copy

Every line draws on the inventory from root 1. An empty inventory buys fewer
words, never invented ones.

An invented metric, a fabricated testimonial, and a headline that would fit any
product are one failure: an empty inventory filled with fiction. The first two
carry legal consequences the third does not.

## Out of scope

Generating the visual design itself, any stack outside React, Tailwind and
shadcn, and any claim about who or what wrote a piece of code. The vocabulary
here is *generic*, *undecided*, *unfinished* — never *AI-generated*.

## Checking the result

Run `anti-slop` against what you built. A tell that fires is this skill's
failure, and it arrives with a file and a line.
