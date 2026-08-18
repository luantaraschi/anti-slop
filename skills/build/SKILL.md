---
name: build
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

# build

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
4. **Record.** Every derived value lands with one of the six shapes below.
   This is the deliverable, not commentary around it.
5. **Components,** built against the theme rather than re-deciding at each
   callsite. A class stack retyped at five callsites is the same defect as a
   palette nobody picked, one level down.
6. **Copy,** drawn only from the inventory.
7. **The reduction pass.** One pass whose only purpose is removal.

## The six shapes of a recorded decision

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
| **Judgment** | this value serves that root, and here is the reasoning |

Judgment is the shape for a value a root produces without arithmetic — a hue
picked to sit at the temperature, a family picked to carry the voice. It exists
because five shapes that all demand a calculation push you into attaching a
number to a decision that was not numeric, which reads as rigour and is not.
Name the root, give the reasoning, and stop. A contrast ratio bolted onto a
colour you chose for its warmth records something true about the colour and
nothing true about the choice.

Put them where the value is, not in a separate document. A design note in a
README is not evidence a reader of the code can find, and it is not evidence
the auditor's rule accepts. The one exception is the inventory from root 1: it
has no value to sit beside, so it is a file, and the rule above does not reach
it.

## What a recorded decision has to survive

Everything above is an argument for the code, sitting next to the code. That
buys nothing if the two disagree, and it costs a great deal: prose that
contradicts the file it annotates is worse than no prose, because it reads as
care and misleads the next person.

The first calibration of this skill produced a tree that was **57% comment** and
that contradicted itself in **ten** places — a limit presented as the thing its
own justification rejected, an extraction rule stated twice and broken in a
third file, a colour named as in use that nothing used, counts of "two" where
three rendered. Every one passed as a well-formed shape.

So each recorded decision has to clear three checks before it ships:

1. **Every count in it is a count you ran.** "The two actions", "the same six
   classes", "the only place this appears" — grep it, or do not write it.
2. **It describes what the code does, not what you meant.** If the reasoning
   argues against a limit and the code imposes one, the reasoning is wrong or
   the code is. Fix whichever is wrong; never ship both.
3. **A stated measurement is measured.** A contrast ratio, a pixel sum, a
   character count — compute it or leave it out. An approximate figure written
   as a measurement is a claim the next reader will trust.
4. **What it describes still exists.** The reduction pass deletes code, and a
   recorded decision that named the deleted thing survives it, still reading as
   true. This is the check the other three miss: the count was right when it was
   written, the description matched code that did exist, no measurement was
   stated. **A removal invalidates every recorded decision that named what you
   removed** — so the reduction pass is not finished until you have re-read the
   records around every deletion.

Fewer, load-bearing comments beat many argumentative ones. A value whose
derivation is obvious from the theme file needs no sentence at all.

**The ratio is not the standard — drift is.** A theme or tokens file is where
the derivations legitimately live, so it will read as mostly comment, and that
is the file doing its job rather than a file that is padded. A component file
carrying the same ratio is a different matter: it means the reasoning followed
the code out of the place that records it. Judge a file by whether what it
claims is true, and only then by how much of it there is.

## Where the decisions go

The audit rule searches four places for evidence. Write into them:

`theme.extend` · custom properties under `:root` or `@theme` · a dedicated
tokens file · a primitives directory that differs from stock shadcn.

The auditor's rule names `components/ui/` because that is where an install puts
them, but the path is not the evidence — the divergence from stock is. Put them
where the project puts them.

**Prefer replacing `theme` to extending it.** `theme.extend.colors` leaves the
framework's undecided palette sitting beside the decided one, so a page can
still be built entirely out of values nobody picked. Replacing `theme.colors`,
`theme.spacing`, `theme.fontSize`, `theme.borderRadius`, `theme.fontWeight` and
`theme.lineHeight` outright makes `bg-slate-500` and `p-4` stop compiling, which
turns the decision into a constraint.

Be exact about what that buys, because a build stated it too broadly and an
audit caught it: a top-level `theme` is merged per key against the framework's
own, so **only the keys you declare are replaced**. Everything you leave out —
`height`, `minHeight`, `width`, `flex`, `inset`, `opacity`, `keyframes` — stays
at its default and goes on compiling. Replacing four keys does not make a tree
token-complete, and a comment claiming it does is the first survival check
failing. The last two are the ones builds forget,
and on a restrained palette weight carries more of the hierarchy than radius
does — a `font-semibold` resolving out of a nine-step ramp nobody declared is
the same defect as a colour nobody picked.

Two things to know before you do it. The scale you replace has to be complete
enough to build from, because there is no fallback left. And an unrecognised
utility is dropped **silently** rather than raised as an error, so a callsite
that types `p-4` gets nothing and no warning — which means the replacement needs
a check: extract every utility token the tree actually uses and diff it against
the scales you declared. Do that once before you finish. It is the only way the
silent drops surface.

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

**Compile the theme, whatever else you do.** If the framework builds, running it
over the tree costs a second and settles the silent-drop problem in both
directions at once: every utility the tree uses produces a rule, and a probe
file confirms that the scales you replaced really did stop compiling. Two builds
found real defects this way that no reading would have surfaced.

**When the auditor is not available,** say so rather than claiming the build is
checked, and run the three cheapest checks by hand, because they are the ones
this skill has repeatedly missed: every heading of four words or more and every
short text block carries a wrap property; the page declares `lang`, a title of
its own, a description, and the Open Graph set; and every list rendered from
data carries a stable key. An unverified build is a finding to report, not a
step to skip quietly.
