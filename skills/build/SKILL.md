---
name: build
description: |
  Build a web interface that looks designed rather than generated. Use FIRST,
  before writing any markup, whenever the request is to build, make, create,
  code, design, redesign, rebuild or improve a landing page, website, homepage,
  dashboard, admin panel, app screen, marketing page, pricing page, portfolio,
  component or component library — in plain HTML and CSS or in React, Next,
  Vue, Svelte, Astro, Tailwind or shadcn. Also fires on "faz uma landing page",
  "cria um site", "monta um dashboard", "faz uma tela", "melhora essa
  interface". Also when an interface already reads as generic and its palette,
  type, radius, motion and copy need deciding rather than inheriting.
  Decides palette, type, spacing, radius, motion and composition
  from the subject instead of inheriting the ecosystem's defaults, and holds
  the floor every interface owes: contrast, visible focus, loading, empty and
  error states, reduced motion, touch targets, and the privacy and terms pages
  a published site needs.
license: MIT
metadata:
  version: "0.2.0"
---

# build

## What this is

This skill runs before the components exist. It forces the decisions whose
absence `anti-slop` detects, and writes them where `anti-slop` looks for them.

Work as the design lead at a studio whose reputation is that no two clients get
the same page. This client has already turned down proposals that felt
templated, and is paying for a point of view rather than a competent
arrangement of the ecosystem's defaults. That framing is not decoration on this
file: every rule below is downstream of it, and where a rule leaves an axis
free, spending that freedom on the answer any brief would produce is the one
outcome the client already rejected.

## Four references, and what separates them

`deriving.md` carries what a different product would answer differently — the
palette, the families, the scale, the spacing ladder, the radius, the
elevation, the motion. Every value there comes from a root, and every value
there is recorded with the reasoning that produced it.

`floor.md` carries what no product answers differently: contrast, visible
focus, the three states beyond success, reduced motion, hit targets, the
published-page settings, the legal pages. Nothing there comes from a root, and
nothing there is recorded, because a floor is a debt rather than a decision.
`legal.md` carries the one part of the floor long enough to need its own file.

Reading a floor rule as a derivation produces an interface that argues for why
it has no focus ring. Reading a derivation as a floor produces the ecosystem's
defaults with a justification attached.

`composing.md` carries what neither of them decides: the ground, the largest
element, the grammar the page borrows, the proof it is alive, and what lands on
the grid. It also carries the three registers — what this skill settles in
silence, what it brings as routes before writing code, and what it proposes
once the page exists. It is the only file here that talks to the person rather
than only to the code.

`precedents.md` is the library `composing.md` cites from, and it is governed by
a rule about direction rather than about content: subject, then decision, then
a precedent that supports it. Read backwards it is a moodboard.

**It does design, and the honest boundary is narrower than "it does not."**
A survey of the neighbouring skills, 2026-08-17, found that this one and
`frontend-design` reach for the same palette count, the same rule against
naming a colour for its rank, and the same removal pass — and disagree outright
on how many type families a product should carry. Two skills making the same
decision with different justification machinery is not a handoff.

**That survey placed composition outside this skill, and it is no longer
outside.** The boundary read well and held only while one of the neighbouring
skills was reliably invoked to cross it, which none was — and a skill that
derives a measure, a page width, a spacing ladder and a scale, and then decides
no layout, has produced the material for an interface rather than an interface.
`composing.md` carries what changed.

What this skill has that they do not is the recording. `frontend-design` keeps
its plan in thinking and shows it when confident, so the reasoning evaporates on
ship — and under the audit rule a genuinely decided page still takes a finding,
because the evidence lives in a discarded draft. The seven shapes exist to stop
that.

If you run both, run this one first and hand its recorded decisions over **as
the brief**. `frontend-design` follows a brief exactly and treats a memory only
as a hint, so decisions that arrive as theme values rather than as words will be
re-decided — and its own self-critique is primed to revise anything that "reads
like a generic default," which a deliberately sober palette does, from outside.

## What it never does

**It carries no list of banned patterns.** Forbid the purple gradient and the
generic reappears wherever the list does not reach. The audit rule says why: a
finding is a pattern present **and** no evidence anyone chose it. The pattern
was never the defect.

A gradient, a shadow, a pill, a purple, a rounded corner — all available. What
is not available is reaching for one without deciding it.

**The floor is not an exception to that rule, and it is worth being exact about
why.** The argument against a banned-patterns list is that the pattern was never
the defect — the absence of a decision was. `floor.md` fires on absence too: a
missing focus ring, an unmeasured contrast pairing, a fetch with no failure
branch. Nothing there forbids a pattern, so nothing there contradicts this
section. What it does is name the class of absences no brief can license.

The catalog already carried two of them before the class had a name. F1 and F6
answer `Not slop when` with `Never` — there is no page without a language, and
none whose h1 competes with another. Contrast, focus, the three states beyond
success and the legal pages join that class rather than starting a new one.

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
   auditor reads wherever a project declares its values first — a theme
   config, a variables file, a `:root` block, the top of the main stylesheet —
   because three Surface tells are absences that live there. Write that place
   first, whatever it is called in your stack.
3. **Derive.** Each value comes from a root or from another value. `deriving.md`
   carries the rule per value.
4. **Record.** Every derived value lands with one of the seven shapes below.
   This is the deliverable, not commentary around it.
5. **The collision test,** below. It runs on the recorded plan and it is a gate:
   nothing is built until the plan has been through it.
6. **Routes.** Two or three named directions, each a closed bundle of the five
   decisions in `composing.md`, each with its cost stated, and one of them
   recommended. The person chooses, or mixes two, and that choice is the brief
   from here on. This is the one step that waits for an answer.
7. **Composition and the signature,** below, built out of the chosen route.
8. **Components,** built against the theme rather than re-deciding at each
   callsite. A class stack retyped at five callsites is the same defect as a
   palette nobody picked, one level down. Every control carries its floor as
   it is written, not as a later pass: `floor.md` is read here, beside
   `deriving.md`, and the two are applied together.
9. **Copy,** drawn only from the inventory.
10. **The legal pages,** where the site is published and collects anything.
    `legal.md` carries the inventory they draw on and the rule for a field
    nobody answered. They are written before their links are added.
11. **The reduction pass.** One pass whose only purpose is removal.
12. **The floor pass.** One pass that only checks, against `floor.md`, and it
    is the last thing that happens. The reduction pass deletes, and a deletion
    can take a focus ring or an `aria-live` region out with the element it was
    attached to.

Steps 6 and 7 are the only ones that involve the person, and step 6 is the only
one that stops for an answer. Everything else in this list is register one:
decided and applied without asking, because asking about a value with one right
answer is noise wearing the costume of collaboration. `composing.md` carries the
test that keeps the two apart.

## The seven shapes of a recorded decision

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
| **Departure** | this one place leaves the system, and the content is why |

Judgment is the shape for a value a root produces without arithmetic — a hue
picked to sit at the temperature, a family picked to carry the voice. It exists
because five shapes that all demand a calculation push you into attaching a
number to a decision that was not numeric, which reads as rigour and is not.
Name the root, give the reasoning, and stop. A contrast ratio bolted onto a
colour you chose for its warmth records something true about the colour and
nothing true about the choice.

Departure is the shape for the exception a real product eventually needs: one
route, one component, one figure that legitimately wants a value the system does
not give it. Without it a build has two bad options — bend the global scale to
accommodate one screen, or write an unrecorded one-off that the auditor will
correctly read as a value nobody picked. Name what you left, name what the
content demanded, and keep it at the callsite. A departure recorded once is a
decision; the same departure at four callsites is a scale you should have
declared.

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

So each recorded decision has to clear five checks before it ships:

1. **Every count in it is a count you ran.** "The two actions", "the same six
   classes", "the only place this appears" — grep it, or do not write it.
2. **It describes what the code does, not what you meant.** If the reasoning
   argues against a limit and the code imposes one, the reasoning is wrong or
   the code is. Fix whichever is wrong; never ship both.
3. **A stated measurement is measured.** A contrast ratio, a pixel sum, a
   character count — compute it or leave it out. An approximate figure written
   as a measurement is a claim the next reader will trust.
4. **The records agree with each other.** The first three test a record against
   the code it annotates. None of them catches two records that are each true
   and jointly wrong — a palette derived for a light surface and an elevation
   scale derived for a dark one, both well recorded, both correct about
   themselves. Before you finish, read the derivations as a set and ask what
   they assume about each other.
5. **What it describes still exists.** The reduction pass deletes code, and a
   recorded decision that named the deleted thing survives it, still reading as
   true. This is the check the other three miss: the count was right when it was
   written, the description matched code that did exist, no measurement was
   stated. **A removal invalidates every recorded decision that named what you
   removed** — so the reduction pass is not finished until you have re-read the
   records around every deletion.

Fewer, load-bearing comments beat many argumentative ones. A value whose
derivation is obvious from the theme file needs no sentence at all.

**A contrast floor is a platform fact, not evidence of a decision.** This skill
is right that a ratio bolted onto a colour chosen for its warmth records nothing
about the choice — and that argument has been read as licence to never measure
one. It is not. Text has to clear its threshold against every ground it will
actually be rendered on, and a hue derived from the temperature, recorded as a
well-formed Judgment and undeliverable at that threshold, is a decision that
does not survive contact. Compute the pairings the tree will really render, and
record the floor as the constraint it is rather than as the reason for the hue.

**The ratio is not the standard — drift is.** A theme or tokens file is where
the derivations legitimately live, so it will read as mostly comment, and that
is the file doing its job rather than a file that is padded. A component file
carrying the same ratio is a different matter: it means the reasoning followed
the code out of the place that records it. Judge a file by whether what it
claims is true, and only then by how much of it there is.

## Where the decisions go

The audit rule searches four places for evidence. Write into them:

Wherever the project declares its own values — a theme config, a variables
file, a `:root` or `@theme` block, a tokens file, the top of a stylesheet ·
whether those names came from the subject rather than from rank or hex ·
whether shared components, if any exist, differ from whatever they were
installed or copied as · anywhere a choice is written down beside the value it
governs.

These are roles, not filenames. The auditor's rule names `theme.extend` and
`components/ui/` because that is where one ecosystem puts them; the evidence is
the declaring and the naming, not the path.

**Where the framework lets you, replace its scale rather than extending it.**
Extending leaves the undecided scale sitting beside the decided one, so a page
can still be built entirely out of values nobody picked. Replacing it makes
those values stop resolving, which turns a decision into a constraint.

In Tailwind that means declaring `colors`, `spacing`, `fontSize`,
`borderRadius`, `fontWeight` and `lineHeight` under `theme` rather than under
`theme.extend` — the last two are the ones builds forget, and on a restrained
palette weight carries more of the hierarchy than radius does. In plain CSS the
equivalent is narrower: you cannot stop a literal from working, so the
constraint has to come from review rather than from the compiler, and the
discipline is that no rule outside the token block types a colour, a size or a
radius directly.

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

**No literal survives the emitting step.** Whatever writes the theme, the
component or the summary document writes token names, never values. This is the
failure that undoes everything above, and it is easier to fall into than it
looks: one design tool surveyed for this skill resolves a style correctly out of
a curated table and then has its emitter append `border-radius: 8px` and
`transition: all 200ms ease` to every project it touches — including projects
whose own selected style declares a radius of zero, and including the
`transition: all` its own rule set forbids four lines further down. The
derivations were right and the output was the ecosystem's defaults, because the
last function in the chain typed numbers.

So the check is mechanical and belongs at the end of the build: grep the emitted
tree for a hex, a pixel value, a duration and a cubic-bezier outside the token
block. Each hit is either a value that should have been a token or a Departure
that should have been recorded. There is no third case.

## The collision test

The seven shapes prove a value was decided. They cannot prove it was not the
decision everybody makes, and the two are different failures: a page can record
every derivation honestly and still land where any competent build lands, at
which point the record is evidence of care and the page still looks like the
others.

So before anything is built, run the plan against a neighbour. Take a brief for
a different product in the same category — a competitor, or the same product
told to a different audience — and work it far enough to reach a palette, a
family pair, and an opening. Then compare.

**Name what collided.** Any value that came out the same is a value the
category produced rather than this product. It does not have to change, and
sometimes it should not: a bookkeeping product and its competitor will both
reach for a restrained neutral, and forcing a difference there buys nothing but
strangeness. What has to change is that the collision is now recorded and
answered.

**The artifact is the enforcement.** Write down, beside the plan: the
neighbouring brief you tested against, the values that collided, and for each
one either what you changed or why the collision is correct. A test whose only
output is a feeling that the plan is fine did not run. Two builds have claimed
to run this and produced nothing, which is how it is now known to need an
artifact.

**Then check the plan against the molds.** The auditor keeps the current list in
`skills/audit/references/molds.md`, dated and maintained, and the builder should
read it here rather than carry a second copy that ages on its own. The clusters
it names as of this writing: a stock dashboard of sidebar, stat grid and status
badges; a gradient landing on a dark ground with a pill badge and three icon
cards; a cream editorial near `#F4F1EA` with a high-contrast serif and a
terracotta accent.

Each is a legitimate answer to some brief. None is a legitimate answer to a
brief that left the axis free, and the distinction is the whole of the test:
where the brief asks for one of them, the brief wins and this paragraph does
not apply. A mold is checked against the *combination* rather than the values —
a cream ground is not the defect, a cream ground with that serif and that accent
is, and a plan that dodges one value while keeping the cluster has not moved.

## Composition and the signature

This skill used to derive the material and decide no layout, on the grounds
that composition belonged to the design skills. That boundary held only while
something else was reliably invoked to cross it, which nothing was, and a
material with no layout is not an interface. Composition is in scope, and it is
governed by two rules rather than by a catalog of page shapes.

**Structure encodes something true, or it is not structure.** An eyebrow, a
divider, a numbered marker, a column count, a section order: each one either
carries information the reader needs or it is decoration wearing the costume of
information. Numbered markers are the clearest case, because they are almost
always wrong — `01 / 02 / 03` claims the content is a sequence, and the reader
who discovers it is not learns to distrust the next signal too. Count what
actually exists before deciding how many of anything there are; three is the
number that appears when nobody counted.

**The opening is an argument, not a slot.** Whatever the reader meets first
should be the most characteristic thing in the subject's world, in whatever
form that thing takes — a sentence, a figure, a photograph, a live control, a
table, a demonstration of the product doing the thing. The pill badge above an
h1 above a subtitle above two buttons is the arrangement that appears
regardless of subject, which is the proof it was not derived from one. Where
the product can be shown working, showing it beats describing it, and a page
that never shows its product is the strongest evidence available that there is
none.

**The signature.** One element the page is remembered by, which embodies the
brief and appears nowhere else. Decide it before building, name it in the
record, and spend the page's boldness there. Everything around it stays quiet:
a page with three memorable elements has none, and the discipline that produces
the signature is the same discipline that keeps its neighbours plain.

This is where the reduction pass gets its instruction. Ask of every icon, card,
badge, number, animation, section and second call to action whether it competes
with the signature. What competes goes, and what remains is quieter for it.

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

**A legal page is the one thing an empty inventory does not buy silence on, and
the distinction is narrow enough to state exactly.** A testimonial is a claim
about a person who did not speak. A privacy notice is a disclosure of something
the site already does, and deleting the link removes the notice while leaving
the collection — the only one of the available outcomes that is unlawful. So
those pages get written from what the build knows, with every unanswered field
shipped as a visible gap rather than as an invention. `legal.md` carries the
questions, the contents, and the routing rule that keeps a link from pointing
at a page that does not exist yet.

## Out of scope

Any claim about who or what wrote a piece of code. Legal advice: what this
skill produces is a draft that accurately names what the site does, and whether
that draft is sufficient in its jurisdiction is a lawyer's call, said in the
handover and not only on the page.

**Composition used to be out and no longer is.** The old boundary handed the
shape of the page to `frontend-design` and its neighbours, which was coherent
only while one of them was reliably invoked, and none was. A skill that derives
a material and stops does not produce an interface. Where those skills are
invoked as well, they follow a brief exactly and treat a memory as a hint, so
this skill's recorded decisions are handed over **as the brief** rather than
left to be found in a theme file.

**Stack is not out of scope.** Every root, every derivation and every recorded
shape works the same in plain HTML and CSS as in any framework — the tokens
change name, the arithmetic does not. The vocabulary
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
checked, and run `floor.md` by hand. It is written to be read that way: every
line is answerable from the artifact, and most are greppable.

Five of its lines are the ones this skill has repeatedly missed, so give them a
second pass even when the auditor did run:

1. Every heading of four words or more and every short text block carries a wrap
   property.
2. The page declares a language, a title of its own, a description, and the
   sharing tags — unless it is internal, in which case say so.
3. Every list rendered from data carries a stable key.
4. If two themes exist, both were opened. Not inferred from one: opened, and
   looked at.
5. Reduced motion was switched on and the page checked under it.

The last two cannot be verified by reading, which is why they are on this list
and not in the survival checks. An unverified build is a finding to report, not
a step to skip quietly.

**The auditor cannot see two of the things this skill now promises.** Contrast
is arithmetic and the audit catalog deliberately does not carry it, because
`web-design-guidelines` owns accessibility and a ratio needs computing rather
than reading. The collision test is unauditable for the same reason the
reduction pass is: nothing in a tree records the plan that was rejected. Both
are therefore reported rather than checked — name the pairings you computed and
the neighbour you tested against, in the handover, or say you did neither.
