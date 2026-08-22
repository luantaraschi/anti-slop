# Composing

Where the page gets its shape. `deriving.md` produces the material and
`floor.md` produces what every interface owes; neither of them decides what the
reader meets first, how big it is, or what the page is about the moment it
loads. This file does, and it is the one place in this skill that talks to the
person rather than only to the code.

## Three registers, and the line between them

A skill that asks about everything is a form, and a skill that asks about
nothing is a generator. Both fail the same way: the person who requested the
page never gets to be the designer of it.

**Register one: act, and do not ask.** Everything with one right answer. The
whole of `floor.md`. The whole of `deriving.md` once a direction exists —
the spacing ladder, the measure, the concentric radius, the count of elevation
levels, a duration derived from its distance, an exit at six tenths of its
entrance. The craft: the number that gets `tabular-nums`, the heading that gets
`text-wrap: balance`, the asymmetric icon centred by eye, the target extended
to 40px. The reduction pass and the collision test. None of this is a
conversation. Asking here is not collaboration, it is noise wearing the costume
of collaboration.

**Register two: bring routes, before code.** Two or three named directions,
presented whole, so a person can choose one in a sentence. This is where the
five decisions below get settled, and it happens once.

**Register three: propose, during and after.** The bolder move that opens a
different design line, and the move that only became visible because the page
now exists. Each one is a fork rather than a tweak, and each says so.

**The line between one and two is testable, and it has to be, or it becomes
whim.** A decision is directional if changing it later means rebuilding rather
than editing. The ground, the largest element, the borrowed grammar, the type
families: change any of those and the components are rewritten. Everything
downstream of them is arithmetic, and arithmetic does not get a meeting.

## The five decisions

Answer all five before any markup. Each derives from a root; each has a wrong
answer that is not "the opposite" but "none, and nobody noticed".

### 1. The ground

**From** root 1 (what the product is) and root 3 (temperature).

**The measurement corrects the intuition here, and it is worth stating plainly
because the intuition is very strong.** Twenty reference sites were torn down
for this file. In twelve of the fifteen measured, the page ground is a flat
colour and nothing else — `#fff` on Aside, `#f4f4ef` on Friends of the New,
`#0e0e0e` on Prime Intellect, `#fafafa` on Next.js Conf. Two of them declare no
background at all and run on the user agent's white. The pages that read as
atmospheric are not atmospheric at the body: the clouds on Aside and the jungle
on Prime Intellect are elements inside the hero section, and the page ground
underneath them is flat.

So the rule is the opposite of the one a screenshot suggests. **The ground is
quiet, and the atmosphere is scoped to one section.** A photograph behind the
whole document costs contrast everywhere, fights every subsequent section, and
usually acquires a scrim that admits the mistake. A photograph behind the first
screen alone is a decision that stays affordable.

**The real answers** are a flat field, a flat field carrying a fine pattern
that content aligns to, or a scoped surface in the first screen — a photograph,
a duotone, a video, the product's own material at scale. An ambient gradient is
not on this list, and the reason is not taste: it is the answer that arrives
when nobody chose, which is what makes it the ecosystem's signature rather than
the product's.

**When it surfaces to the person.** Almost always, and for one reason: a
photograph is the asset this skill cannot produce. Never invent one, never
describe a stock image as though it were chosen. Ask for it, and where there is
none, write the specification of what to look for and offer the flat field as
the alternative that ships today.

### 2. The largest element

**From** root 4 (density) and whatever the page is actually about.

Every page in the reference set has exactly one element that is unmistakably
the largest, and in every case it can be pointed at. This is the signature made
into a number instead of a mood, which is what makes it possible to derive
rather than to feel.

**The number is smaller than a screenshot suggests, and this paragraph was
wrong before it was measured.** Across fourteen measurable sites the ratio of
display size to body size sits between **2.0 and 6.0** on twelve of them —
2.25 at Conductor, 2.5 at Increase, 3.0 at Aside and curated.design, 4.0 at
Primora, 5.4 at Billow, 6.0 at Next.js Conf. The four that run higher are 12×,
13× and 21×, and they share one property: **the giant text is not a sentence.**
It is a wordmark, a product name, an artist's name. Only one site in the corpus
sets an actual headline past 6×, and it does it by fitting the line to the
viewport rather than by choosing a size.

So the decision has two branches and they are not interchangeable. A sentence
at the top of the scale lands between two and six times the body. A word — a
name, a mark, a single verb — is free of that ceiling and usually wants the
width of the viewport rather than a multiple of anything.

**It is usually not the h1, and the teardown is emphatic about this.** Three of
the measured pages carry a heading of 36px or 2.25rem while something else on
the same screen runs past 150px. The giant element is a wordmark, a single word
used as architecture, a diagram, a demonstration, or the product itself. A page
whose largest thing is its headline is a page making a claim; a page whose
largest thing is its product is a page making a demonstration. Both are
legitimate and they are different pages.

**One rule of arithmetic comes with it.** At display size, line height
collapses below one. The measured values run `.72`, `.92`, `.98`, `1.02`, and
`leading-none`; the body steps on the same pages sit at 1.4 to 1.6. A display
line set at the body's line height is the single most reliable sign that the
scale was inherited rather than chosen, and no permission is needed to fix it.

**Tracking is not the same rule, and assuming it was would have put a false
one in this file.** The intuition says display type always closes up. The
measurement says otherwise: `-0.04em` on Marble and `-0.022em` on Better File
Transfer, but `+0.005em` on Doany and exactly zero on Prime Intellect. Tracking
follows the face and the optical size, and a face designed for display already
carries it. Set it deliberately, measure it against the rendered result, and do
not apply a negative value because a rule said to.

**When it surfaces.** Rarely on its own. It is decided inside a route.

### 3. The borrowed grammar

**From** root 1, and it is the strongest single device in the reference set.

Ask what artifact from the subject's own world the page could take its
structure from, and then take it seriously enough that the page stops looking
like a page.

The specimens: reboot.studio is a letter, one running paragraph at a single
type size with no headings and no cards at all, its images set inline at text
size inside the sentence. Prime Intellect is a terminal and a spec sheet, its
navigation numbered `01`–`04` in mono and its logo wall built as a real table
with cells and corner labels. WorkOS AuthKit is a technical drawing, with
registration crosses and corner ticks. Conductor's ground is a hex dump.
Seksy Planety is a desktop operating system, windows and title bars included.
X's advertising page is an engineering schematic in one-pixel dashed line.

This is not a menu, and reading it as one produces the failure the whole plugin
exists to prevent. It is a demonstration that the question has answers. The
question is what the subject's world already contains that has a shape.

**When it surfaces.** Inside a route, named in one phrase the person can react
to. It is the part of a route that most changes what gets built, so a route
that does not name its grammar has not said much.

### 4. The proof of life

**From** the inventory, and from nothing else.

One element on the page that could only be true right now. A local time and
temperature at the top corner. A dated changelog line in the hero. A count in
parentheses beside a section that matches the number of things in it. A figure
with the date it was measured attached.

It costs almost nothing and it cannot be faked by a generator that is not
connected to something real, which is exactly why it works. It is also the one
decision on this list that the fabrication rule governs completely: a count
that does not match, a time that is not the reader's, or a changelog date that
was invented is worse than the absence, because it is a lie the reader can
check.

**When it surfaces.** Only when the inventory holds nothing usable, in which
case the honest move is to say so and ask whether there is a real figure, a
real date, or a real count available.

### 5. The grid, which is almost never drawn

**From** the composition, after decisions two and three.

**This decision was written from screenshots first and the measurement
reversed it, so the reversal is the entry.** Sixteen sites were checked by
grepping for what draws a grid and for what addresses one, rather than by
looking. Seven carry a real coordinate system content genuinely lands on. Two
of those are invisible: ten columns at shopify.design, where the rules then say
`grid-column: 4 / span 4` and place eight consecutive lines of one paragraph on
eight different start columns, and eighteen at Next.js Conf, addressed forty-
eight times. Five are visible **and** load-bearing, which is the combination
that matters.

Three more draw something and nothing aligns to it, and here the arithmetic
settles it rather than the eye. Doany's dot field has a 22px pitch while its
hero runs `padding: 70px 28px 84px` with margins of 26, 24 and 40 — not one of
them a multiple of 22. Increase paints graph paper at 22px, 24px and 16px
against a `--spacing: .25rem` scale, and 22 is not a multiple of 4. That is A13,
on two sites that are otherwise excellent, and it is the cleanest demonstration
available that the tell is about alignment rather than about taste.

**A page can carry both at once, and Increase and Primora do.** Their rails are
structural — a continuous 1px rule at x=0 and x=1160 running the height of the
document — and their lattice is decoration laid over it. Judge the two
separately.

**The strongest case in the corpus went to real trouble to get this right.**
Friends of the New wrote the `background-image: radial-gradient(...)` version
of its dot lattice, commented it out at `style.css:552`, and shipped four
hundred literal `<span>` elements instead — so that every dot inherits Grid
placement from the same `--columns` token that steps 12/16/14/10/8/6/4 and
drives the module `calc((100vw - 4rem) / var(--columns))` at over a hundred
callsites. The dots are the coordinate system rather than a picture of one.

So the rule inverts the intuition. **Having a column system is normal and
drawing one is rare.** The default answer is a real grid nobody can see. Draw
it only when something lands on it, and prove the landing with arithmetic: if
the page's spacing values are not multiples of the lattice pitch, nothing is
landing and the lattice is texture.

**When it surfaces.** Never on its own. It is settled by the route.

## A route, and how to bring one

A route is not an adjective and it is not a question. It is two or three
complete, named directions, each one a closed bundle of the five decisions
above, written so that a person can choose in a sentence or say "the first one
with the second one's ground".

Each route names: the ground, the largest element, the borrowed grammar, the
type register, and the temperature of the motion. Then one line on what it
costs — what it needs that does not exist yet, what it risks, and what it gives
up. A route with no stated cost is a pitch rather than a proposal.

**The routes have to differ in kind.** Three shades of the same idea is one
route presented three times, and the person choosing between them learns
nothing about what they are choosing. Differ on the ground or differ on the
grammar; differing on the accent colour is not differing.

**Say which one you would build.** A designer who lays out three routes and
declines to recommend has handed the decision back untouched. Name the one you
would take and why, and name the bolder one as the bolder one.

## The proposal, during and after

Six lines, in this order, and the order is the argument:

What is there now · what the subject actually is · the proposal, specific
enough to build from · why it works, with the precedent named · what is needed
from the person, if anything · what it costs.

The fifth line is the one that makes this collaboration rather than commentary.
This skill cannot produce a photograph, a real metric, a customer's name, or a
recording of the product working. Those are the assets the person holds, and
asking for one with a reason attached is the most useful sentence in the
exchange. Offer the fallback in the same breath, so the answer "I don't have
one" does not stall the build.

**Three or fewer per screen, and only on these triggers:** the decision needs
an asset only they have; the brief leaves a genuine fork with two defensible
answers; or the derived answer is sound and conservative and a bolder one
exists and is worth naming. Outside those, decide and keep building. A senior
designer who proposes five things per screen is not senior.

## Mixing, and the limit on it

A route may take one move from one precedent and another from a second, or
invent a third thing that resembles neither. That freedom needs one limit or it
produces mush.

**Two moves compose when they answer different questions.** A terminal grammar
and a monochrome ground are a grammar and a ground; they sit together. **Two
moves collide when they answer the same one.** Two grounds, two largest
elements, two grammars: a page with three memorable things has none, and the
discipline that produces a signature is the same discipline that keeps its
neighbours quiet.

## The direction of a citation

`precedents.md` holds the library. The rule that governs it lives here, because
it is a rule about reasoning rather than about content.

**Legitimate: subject, then decision, then a precedent that supports it.** This
is what a designer does when they say that a thing works elsewhere and why.
The precedent arrives as an argument for a decision that already exists.

**Illegitimate: precedent, then decision, then a subject bent to fit.** That is
a moodboard, and it produces work that is professional and catalogued, which is
the generated look one storey up.

The test is mechanical: **if the decision cannot be explained without naming
the site, it was copied rather than derived.** State the reasoning from the
subject first, and let the precedent be the sentence after it. A route that
reads like a list of sites is a route that skipped the roots.
