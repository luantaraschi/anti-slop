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

**Line height collapses below one at display size.** Measured: `.72` (Friends
of the New), `.92` (Doany), `.98` (Better File Transfer), `1.02` (Marble),
`leading-none` (Next.js Conf). The body steps on the same pages sit at 1.4 to
1.6. *Why it works: at 150px the leading inherited from a body scale opens a
gap the eye reads as two unrelated lines.*

**Tracking is not a rule, and this entry exists to stop one being written.**
Measured: `-0.04em` (Marble), `-0.022em` (Better File Transfer), `+0.005em`
(Doany), exactly zero (Prime Intellect), baked into the size class rather than
set separately (Increase). *Why there is no rule: tracking belongs to the face
and its optical size, and a display face already carries it. Set it against the
rendered result, never from a formula.*

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

**The grid that carries a composition is invisible.** Measured across nineteen
sites. Five run a real column system that content aligns to and that is never
drawn: ten columns at shopify.design, eighteen at Next.js Conf, eight columns
with 24px gutters at JARCOS, a section rail at Increase, a container rail at
Primora. Eleven have no grid at all, by grep and not by impression: zero
`repeating-linear-gradient`, zero SVG rule layer, zero tiled `background-size`.
*Why it works: alignment is felt whether or not it is seen, and drawing the
system adds a second thing to look at that says nothing the alignment did not
already say.*

**The one drawn grid that works has DOM nodes and things landing on them.**
Friends of the New's dots are elements, not a background image, driven by one
responsive token, and the portraits sit at exact coordinates on them.
*Why it works: the dots are the coordinate system rather than a picture of one,
so the alignment is real and enforced rather than approximate.*

**And the counter-example is on an otherwise excellent page.** Doany draws its
dot field with `background-image: radial-gradient(...)` and nothing aligns to
it. *Why this entry is here: it is the cleanest demonstration available that
A13 is about alignment and not about taste. A site can be very good and still
carry a decorative grid, and citing the page does not cite the grid.*

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
