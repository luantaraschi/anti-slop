# Precedents

**Torn down 2026-08-22. This file ages faster than the rest of the skill.**

A library of moves, with the evidence behind each, for citing after a decision
has been made. `composing.md` carries the rule that governs it and the rule is
not optional: subject, then decision, then a precedent that supports it. Read
in the other direction this file is a moodboard, and a moodboard produces work
that is professional and catalogued.

**Entries are moves, not sites.** One site contributes several; several sites
contribute the same one. That ordering is deliberate — a file organised by site
invites browsing, and browsing is the illegitimate direction.

**Every number here was read out of the shipped CSS**, by fetching the page and
its stylesheets, not from a screenshot. Where a field says the evidence is
visual, it was not measured and should be treated as an impression.

**One qualification, and it applies to the whole file.** Fourteen of the sixteen
sites were read from source with no browser, so every value below is arithmetic
on a declaration rather than a `getComputedStyle` reading. Where two rules
compete, the winner was argued from specificity and never confirmed against a
render — one headline's tracking is recorded here as `-0.045em` on exactly that
kind of argument, against a token that intended `-0.06em`. Treat a single
number as good to about one significant figure and the pattern across sites as
the real evidence.

## On the typefaces, which is the argument for having no list of them

Twenty-eight distinct families across sixteen sites. **There is no common
face.** The largest cluster is Geist at five sites, and four of those five
deploy on the platform that ships it, which makes it an artefact of hosting
rather than a convergence of taste. Five sites run a face nobody else can buy —
a commissioned display cut, a foundry exclusive, a house family.

The face count runs one to four, median two. Two sites ship exactly one family:
one of them runs seventy-four of seventy-four text elements in a single family
at a single weight.

*Why this section exists: the regularity in this corpus is entirely in how type
is used — the weight ceiling, the line-height tiers, the uppercase swing, the
measure — and not at all in which type it is. That is the empirical case
against shipping a font table, and it is why this file has entries about
tracking and none about families.*

---

## On the ground

**The page ground is flat, and the atmosphere is scoped.** Measured across
fifteen sites: twelve declare a flat colour on the body and nothing else.
`#fff` (Aside), `#f4f4ef` (Friends of the New), `#0e0e0e` (Prime Intellect),
`#fafafa` light and `#000` dark (Next.js Conf), flat two-tone black (JARCOS),
`oklch(100% 0 0)` (curated.design). Two declare nothing at all and run on the
user agent's white (reboot.studio, increase.com). The sites that read as
atmospheric put the photograph inside the first section, over a flat body.
*Why it works: a ground carries every section, and a photograph that has to
carry all of them acquires a scrim, which is the decision admitting itself.*

**A photograph as a real element, theme-swapped.** Conductor ships
`/homepage-hero-background.webp`, 1672×941, 103KB, as an `<img>` rather than a
CSS background, with a second file for the other theme. *Why it works: an
`<img>` gets `alt`, gets dimensions, gets lazy-loading and gets a different
file per theme. A background-image gets none of those.*

**A photograph processed until it belongs to the palette.** Better File
Transfer runs a 2560×1820 alpine peak through a real halftone and maps it into
the site's ochre and cream. *Why it works: an unprocessed stock photograph
brings its own palette and fights the theme. Processing it is the difference
between an image the page chose and an image the page found.*

**A photograph fading into the flat ground rather than ending at an edge.**
Conductor masks both of its hero images with
`mask-image: linear-gradient(to bottom, black 0%, black 60%, transparent 100%)`.
*Why it works: it is what makes a scoped photograph read as atmosphere rather
than as a banner, and it is why the flat body colour underneath has to be
decided first.*

**A transparent WebGL canvas as the layer above the flat ground — three of
sixteen.** shopify.design runs Three.js r182 with no `<canvas>` in the served
HTML, injected on hydration. meech213 runs WebGPU with
`renderer.setClearColor(0, 0)`, which is precisely why the page's `#f5f4f1`
shows between the planes. Seksy Planety paints its ground twice, once in CSS
and once per frame. *Why it belongs in the same list as a photograph: it is the
same decision — something over a flat ground — at a different cost, and the
transparent clear colour is what keeps the CSS ground authoritative.*

**Video, and the honest cost of it.** Marble's hero is
`assets/kayak-hero.mp4`, autoplay, loop, muted, playsinline, `object-fit:
cover` — 6.3MB above the fold. *Why it works, and what it costs: motion in the
first screen is the strongest atmosphere available and this is what it weighs.
Cite this one with its number attached, and pair it with a still.*

**One saturated field, held without exception.** Visual evidence only, not
measured: More's sage green, Kirk Sinner's red on white, Doany's yellow and
black. *Why it works: a palette of four to six is the usual derivation, and a
commitment to one is the same decision taken harder. It is available and it
should be recorded as a Judgment when taken.*

## On the largest element

**The largest element is frequently not the heading.** Conductor's h1 is
`2.25rem`. Prime Intellect's h1 is a flat 36px with zero tracking and no
`clamp()` at all. JARCOS's largest declared type is smaller than a screenshot
suggests. On those same screens something else runs past 150px. *Why it works:
the heading makes the claim and the giant element makes the impression, and
letting one element do both is what produces the hero that fits any product.*

**Viewport-relative display type.** Friends of the New sets `h1 { width: 100vw;
font-size: 14.666vw; line-height: .72 }` — the wordmark is the width of the
window by construction, at any size. Doany uses `clamp(92px, 16vw, 230px)`,
Marble `clamp(60px, 10.5vw, 150px)`, Better File Transfer
`clamp(2.25rem, 7.4vw, 5.25rem)`. *Why it works: type as architecture has to
hold its relationship to the viewport, which a stepped breakpoint cannot do.*

**Line height has two tiers and the break is around 72px.** Every site setting
type above 72px lands at 1.05 or below: `.7` (shopify.design), `.72` (Friends
of the New), `.84` (meech213), `.92` (Doany), `.98` (Better File Transfer),
`1` (Next.js Conf, Primora, Supaste), `1.02` (Marble), `1.05` (Billow). Every
site whose largest type is 36–48px lands between 1.0 and 1.2: `1`
(curated.design), `1.083` (Aside), `1.1` (Prime Intellect), `1.111`
(Conductor), `1.2` (Increase). The single value above 1.3 is reboot.studio's
1.6 — and reboot's 40px *is* its body copy. *Why it works: leading is a
proportion of the gap between lines, and the gap that reads as comfortable at
16px reads as a chasm at 150px.*

**Nobody sets a headline wider than 880px.** Eight sites declare a measure for
the display line and every one lands between 480 and 880: 480px (Prime
Intellect), 576px (Conductor, Increase at its small breakpoint), 600px
(Supaste, a hard width), 768px (curated.design, Increase at `lg`), 808px
(reboot.studio), 880px (Doany). Where one container governs the whole page it
runs 1160–1440px. *Why it works: a display line is read in one sweep of the
eye, and the sweep does not get longer because the type did.*

**Three sites do the opposite and fit the line to the window, and nobody splits
the difference.** shopify.design sets
`clamp(48px, calc((100vw - 96px) / 5.5), 220px)`, where the divisor 5.5 is tuned
to the character count of that specific headline. Friends of the New sets
`width: 100vw; white-space: nowrap` deliberately so the name overflows and
triggers a marquee. *Why it matters: measure and fit-to-viewport are two
different decisions, and a page picks one. A headline at 900px is neither.*

**Tracking is not a rule, and this entry exists to stop one being written.**
Sixteen sites, sixteen answers, spread over a factor of eight: `-0.08em`
(meech213, an 18rem numeral), `-0.06em` (Next.js Conf), `-0.05em` (Billow,
Supaste), `-0.04em` (shopify.design, Marble), `-0.03em` (Friends of the New,
Vestris), `-0.025em` (Conductor), `-0.02em` (Increase, Primora, Octolane),
`-0.01em` (Aside, JARCOS), zero (reboot.studio, Prime Intellect, Seksy,
curated.design — which sets `-0.012em` globally and then explicitly releases its
serif with `:where(.font-display){letter-spacing: normal}`), and `+0.005em`
(Doany).

Thirty-one percent of the corpus sets display type at zero or positive, and
every one of those runs an optically cut or already condensed face. **The
counterexample that kills any formula: reboot.studio and Supaste use the same
typeface — Inter Display — at 40px and 80px, one at zero and one at `-0.05em`.**
*Why there is no rule: tracking belongs to the face, the optical size and the
line, and a display cut already carries it. Set it against the rendered result.*

**Where a ladder exists it tightens with size, and never on a curve.** Six
sites have a real one and all six tighten upward; none of them interpolates.
Next.js Conf steps once, hard: `-0.04em` at 24 and 32px, `-0.06em` at 48 and
72px. Increase is non-monotonic and hand-set: `-0.02em`/40px, `-0.01em`/32px,
`-0.004em`/24px, `-0.01em`/20px, zero at 16 and below. *Why it works: tracking
is an optical correction per size, and a correction computed by formula
corrects the wrong thing at half the steps.*

**The one tracking rule that does repeat: uppercase labels go positive.** Six
sites, the same move, and on each of them it is the only positive value in the
file: `.05em` on shopify's uppercase `.text-8`, `.02em` on Next.js Conf's nav
and tier labels, `.025em` on curated's `text-xs uppercase`, `.05em` and a
hardcoded `.18em` on Conductor, `1.3px` on Increase, `.07em` to `.18em` on
Doany's eyebrows. *Why it works: capitals were drawn to sit in words, not in
runs of capitals, and the counters close up without the compensation. It is a
swing of 0.06em to 0.20em away from whatever the display tier is doing.*

**Nothing in the corpus sets display type above 600.** The display weight
resolves to 400 on seven of sixteen and to 500 or less on eleven. Six sites
load a full 100–900 variable axis — Aside, Next.js Conf, Prime Intellect,
Conductor, Increase, Doany — and not one uses more than 600 at display size.
shopify.design runs its 220px hero at 500 and has no 600 or 700 anywhere.
*Why it works: at display size the stroke is already heavy in absolute terms,
and the weight that reads as confident at 16px reads as shouting at 96px.*

**Three sites reach between the named stops rather than above them.** Aside
declares `font-weight: 450` and `550`; Billow drives
`font-variation-settings: "wght" 65/66/70/75` on a 0–100 axis while pinning CSS
`font-weight: 400`. *Why it matters to a builder: copying `font-weight: 700`
off a site like Billow produces nothing at all, because the axis it uses is not
the property it declares.*

**No `clamp()` at all is also a position.** Next.js Conf steps its type at
breakpoints; the only `clamp()` in 455KB of its CSS is a border radius. Vestris
does the same across three breakpoints, with zero `clamp()` in 443KB.
*Why it works: a page read at a handful of real widths is more controllable
stepped than interpolated.*

**The giant element as an outline, and in the footer.** Octolane sets
`.wordmark-giant { font-size: clamp(72px, 23vw, 300px); letter-spacing:
-.02em }` in TWK Issey at `leading-none`, drawn as a stroke rather than a fill,
at the bottom of the page. *Why it works: the largest thing on a page does not
have to be the first thing, and an outline at 300px weighs less than a fill at
120px while reading larger.*

**Two tracking values for the whole site, one per family.** Vestris's entire
letter-spacing inventory: `-0.01em` on 71 elements, all Geist body;
`-0.03em` on 31, all Instrument Serif display; two strays. *Why it works:
tracking belongs to the face, so a site with two families needs two values, and
a third one appearing is usually a callsite deciding on its own.*

## On the borrowed grammar

**The page as a letter.** reboot.studio has one type size for the entire
document — `30px` rising to `40px`, line height `1.6` — no headings, no cards,
no sections. Its images sit inline in the sentence at text size, and the copy
reveals from grey to black on scroll. *Why it works: a studio that sells
writing and restraint proves both in the structure before a word is read.*

**The page as a terminal and a spec sheet.** Prime Intellect numbers its
navigation `01`–`04` in mono, prints `$ pip install prime`, and builds its
logo wall as a bordered table with a `CASE STUDY ↗` label in each cell corner.
*Why it works: the audience installs things from a command line, and the page
speaks in the register they already read.*

**The page as a technical drawing.** WorkOS AuthKit carries registration
crosses, corner ticks and dot markers at the card corners. Next.js draws
circle arcs at the intersections that frame the content column. *Why it works:
a component library is a specified object, and specification has a visual
language older than the web.*

**The page as a schematic.** X's advertising page explains its mechanism with
boxes joined by dashed one-pixel lines, containing a bar chart and a figure.
*Why it works: it is a diagram where the category expects a screenshot, and it
explains rather than illustrates.*

**The page as an operating system.** Seksy Planety builds windows with title
bars and thick borders in exactly four colours. *Why it works: maximalism
executed to the same tolerance as minimalism. Cite it as evidence that
complexity must match the vision, not as licence for noise.*

## On the grid

**Seven of sixteen carry a coordinate system content lands on; six carry none;
three draw one nothing aligns to.** Counted by grepping for what draws a grid
and for what addresses one.

**Two of the seven are invisible and load-bearing.** shopify.design declares
`--grid-cols: 10` and `--grid-max: 1440px`, draws nothing, and then addresses
it: `.hero-tagline{grid-column: 4 / span 4}`, and eight rules placing eight
consecutive lines of one paragraph on eight different start columns. Next.js
Conf runs `lg:grid-cols-[repeat(18,1fr)]` forty-eight times, with the gutter
widening by one column at `xl`. *Why it works: alignment is felt whether or not
it is seen, and drawing the system adds a second thing to look at that says
nothing the alignment did not already say.*

**The strongest drawn grid refused the cheap version on purpose.** Friends of
the New wrote `background-image: radial-gradient(black 1px, transparent 0.12em)`,
left it commented out at `style.css:552`, and shipped four hundred literal
`<span>` elements instead, so every dot inherits Grid placement from the
`--columns` token that steps 12/16/14/10/8/6/4 and drives
`calc((100vw - 4rem) / var(--columns))` at over a hundred callsites. *Why it
works: the dots are the coordinate system rather than a picture of one, so the
alignment is enforced rather than approximate.*

**Rails are structural; lattices usually are not, and one page can have both.**
Increase repeats `<div class="border-line border-x max-w-screen-xl">` nine times
to run a 1px `#edf1f5` rule at x=0 and x=1160 down the whole document, and also
paints graph paper at 22px, 24px and 16px against a `--spacing: .25rem` scale.
Primora does the same, closing its rails with `.section-border_square`
knockouts that punch a ground-coloured square at each crossing.
*Why it matters: judge the rail and the lattice separately, because a page can
be rigorously aligned and decoratively hatched at the same time.*

**The arithmetic settles it, not the eye.** Doany's dot field has a 22px pitch;
its hero runs `padding: 70px 28px 84px` with margins of 26, 24 and 40, and not
one is a multiple of 22. Increase's 22px cell against a 4px spacing scale fails
the same test. *Why this entry is here: A13 is about alignment and not about
taste, and the test is a division. A site can be excellent and still carry a
decorative grid, and citing the page does not cite the grid.*

## On proof of life

Visual evidence only; these were read from screenshots rather than measured.
A local time and temperature in the corner (Diego, `16:25 GMT+1 · 32°C`;
JARCOS, `Guarulhos 11:27`). A dated changelog line in the hero (Amie,
`Aug 20: better booking links, slack integration, many experiments`). A count
in parentheses that matches the section (Flow, `Case studies (8)`). *Why it
works: none of it can be produced by something not connected to a real source,
which is precisely the property that makes it read as alive.*

## On showing the product

Visual evidence only. Conductor shows a real diff with real paths and line
counts. Amie shows real figures with the dates they were measured. Aside shows
a tab list with the applications a person actually keeps open. ASCII Magic
makes the hero a draggable before-and-after of its own conversion. Doany makes
the hero the product's actual input field. *Why it works: the density and the
untidiness are the proof. A sanitised mockup is indistinguishable from a
mockup of a product that does not exist.*

## On the signature, and why there is no list of them

**Sixteen sites, sixteen signatures, and no two share one.** Roughly twenty
techniques in this corpus appear exactly once, and that count is the finding
rather than a curiosity. The DOM used as a scene graph for a shader pipeline,
only at shopify.design. Stencil-buffer portals rendering eight perspective
sub-scenes inside one orthographic canvas, only at Seksy. Text extruded as 3D
geometry cut from the site's own woff2 at runtime, only at meech213.
`corner-shape: superellipse()` with one custom property serving as both radius
multiplier and exponent, only at Aside. `filter: invert()` with
`mix-blend-mode: difference` on chrome over a pinned white panel, giving
auto-inverting navigation with no JavaScript, only at JARCOS. Relative colour
syntax deriving a tint from its own token, only at Next.js Conf.

Three techniques recur, and all eight implementations differ structurally: a
layered progressive blur (four layers at curated.design, eight on a strict
`2^n` ladder at Billow), `mix-blend-mode: difference` chrome at wildly different
scale, and a masked odometer digit built three ways at three sites.

*Why this section exists: a signature cannot be selected from a list because
there is no list. Every page in this corpus arrived at its memorable move by
pushing one constraint further than anyone else had, which is a procedure, not a
catalogue. Cite these to argue that the move should be singular, never to pick
which move it is.*

---

## A precedent can be admirable and still fail the floor

Increase.com has **no `h1` anywhere on the page**: six `h2`, ten `h3`, zero
`h1`. That is F6, on a site in this library for its composition. reboot.studio
and increase.com declare no page background at all and inherit the user
agent's white, which is a theme nobody set.

Vestris has **no colour custom property anywhere** — zero `--color-*`, zero
`oklch`, no token file. Every colour on the page is a literal typed into a
per-element style, and it shows: `rgb(98, 101, 78)` and `rgb(98, 100, 78)` both
ship, one unit apart, and the two modal scrims disagree with each other. That is
A1, on a page whose palette is genuinely well judged. It also downloads the whole
Manrope family to set one 13px label, and loads Inter without rendering it.
*The lesson is not that the site is bad. It is that a palette disciplined by eye
survives exactly as long as the eye that made it, and the drift is already
visible in the shipped CSS.*

**Nine of the sixteen ship at least one webfont they never use.** Next.js Conf
preloads two pixel faces at highest priority for a 404 route. Prime Intellect
serves a 16KB face with no consumer. Billow pulls five faces from Google's CDN
and applies none. reboot.studio loads the Inter variable and references it zero
times. JARCOS downloads seven subsets of Inter Display 700 while all seventy-
four of its text elements declare 600. *Every one of those is a download nobody
chose, which is the tell `deriving.md` describes under the weight set, on nine
of sixteen admired pages.*

**And three are serving trial or licence-ambiguous font files in production.**
Prime Intellect's `ABCFavoritMono-Regular-Trial.woff2`, `-Medium-Trial.woff2`
and `-Bold-Trial.woff2` all return HTTP 200. Billow's family string is
`"Lastik Test Bold"`. Seksy ships Druk only as a 512×512 MSDF atlas, with 404s
on the `.woff2`, `.woff` and `.otf` — a texture is not a redistributable
binary, which may be the point or may be the oversight. *This is the one defect
class in this file with a cost that is not aesthetic. Check the licence of
every face you ship, and never copy a font choice off a site without checking
what that site is actually entitled to serve.*

Cite the move, never the tree. A site is here because one decision in it is
worth an argument, and nothing in this file certifies the rest of it. Run the
floor over what you build regardless of what the precedent did.

---

## Adding an entry

The library is append-only and each entry carries five fields. Keep the
ordering by decision — entries file under the question they answer, not under
the site they came from.

**The move**, stated so it survives without the site: what was done, in a
sentence that names a mechanism rather than an impression.

**The evidence**, and its quality. A CSS declaration read from the shipped
stylesheet is measured; anything read from a screenshot is visual, and the
entry says which. Quote the declaration verbatim, with the file and the numbers
where they exist. `background-image: url(...)` and a photograph in an `<img>`
are different decisions and an entry that blurs them is worse than no entry.

**Why it works**, in one sentence tied to a mechanism the reader can check. Not
that it looks good. What it does to the eye, to the layout, to the cost.

**Which of the five decisions it answers.** An entry that answers none does not
belong here; an entry that answers two is probably two entries.

**What it costs**, where the cost is real and countable. 6.3MB is a cost. So
is a scrim, a second font file, a photograph that has to be commissioned.

An entry with no measured evidence is still worth having, and it says so. An
entry whose numbers were guessed is worse than nothing, because the next reader
will build on them.
