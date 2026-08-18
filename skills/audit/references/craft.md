# Craft

The axis that asks whether anyone looked at the result. Surface asks whether
anyone decided, and its evidence lives in the theme file. This one asks a
different question, and its evidence lives in the relationship between elements:
a radius against the radius nested inside it, a number against the layout it
sits in, a border in one theme against the same border in the other.

A tell belongs here only if you would find the defect by opening the page and
looking at it, without reading the code. That test is what keeps accessibility
out of this axis — contrast ratios need a tool and ARIA roles need a screen
reader, and `web-design-guidelines` already owns both.

Almost every tell here is an absence, so the Surface rule does not transfer:
there is no file where someone recorded that the numbers should jitter. Each
`Not slop when` clause below carries two doors instead. The first is that the
condition never arises. The second is that the project already handles the same
detail correctly somewhere else — which means someone looked, and the instance
that failed is an oversight rather than an absence of care. That second door is
this axis's evidence of a decision, the equivalent of `theme.extend` on Surface.

**A tell declines three ways, and only two of them are doors.** The third is
that the condition arose and the Fix was applied — a control smaller than 40px
that extends its target, a panel that opens on a transition rather than a
keyframe. Nothing needs excusing there, because nothing failed. Name that state
as the Signal not matching, never as an exemption. An auditor who believes every
decline must leave through one of two doors will reach for whichever is nearer
and file correct work as an exemption, or fire because neither door opened. Both
have happened in calibration.

**Stock code is not the project looking.** The second door asks whether the
project handles the same detail correctly elsewhere, and a scaffold's untouched
output is not the project doing anything. A `components/ui/` that matches a
stock install answers no door on this axis: its `transition-colors` is not
evidence that transitions are the project's habit, and its `disabled:opacity-50`
is not evidence that the project keeps a disabled control's two sides in step.
Evidence for door two is code someone wrote or changed, and a declared
capability that nothing renders is not an instance.

### C1 — A radius that ignores what it wraps

**Signal**  Two rounded elements nested with the same radius value, or an inner
radius larger than the outer one. Count nested pairs against the pairs where
the outer radius equals the inner radius plus the padding between them. A pill
is not a site on either side of that count: at a radius set by its own height
it has no corner, and the Principle below measures corners.

This Signal's first sentence and its counting sentence are not the same test,
and the 2026-08-17 calibration recorded that a tree can pass one and fail the
other. Two rewrites were drafted and both were withdrawn: scoping the test to
the sum alone fires C1 on `clean-dashboard`, and scoping it further to elements
flush in a container's corner stops it firing on `slop-dashboard`. Each fixes
one side by breaking the other, which is what a Signal rewrite going in
unmeasured looks like. The repair belongs to a round that can measure it.

**Principle**  An outer and an inner radius are concentric when the gap
between the two curves stays constant. Equal, the two curves run in parallel
instead, and the eye reads the inner corner as crooked.

**Fix**  Two or three radii tied to the scale, with the outer one set to the
inner radius plus the padding, where that padding is 24px or less.

**Not slop when**  The padding between the layers exceeds 24px, at which point
the two surfaces read as separate and each radius is free to choose itself; or
every other nested pair in the tree already runs concentric, which leaves this
pair an outlier rather than the rule.

### C2 — Centered by the box, not by the eye

**Signal**  A control pairing an icon with text using equal padding on both
sides, or a triangular or otherwise asymmetric icon centered by its bounding
box with no offset.

**Principle**  The geometric center of an asymmetric shape is not the center
the eye finds. A play triangle centered by its box reads as pushed to the
left.

**Fix**  Less padding on the icon's side — typically two pixels — or correct
the SVG itself so the component never has to compensate.

**Not slop when**  No asymmetric icon sits inside a control anywhere in the
tree; or compensating for the shape is already the norm across the project's
controls and one control missed it.

### C3 — Numbers that jump

**Signal**  A value that changes in place with no `tabular-nums`: a counter, a
timer, a live total, a numeric table column. Count the sites where a number is
bound to state or refreshed on an interval against the sites carrying the
property.

**Principle**  Proportional digits have different widths, so a number that
updates reflows the layout around it on every tick. The eye reads the jitter
before it reads the number.

**Fix**  `font-variant-numeric: tabular-nums` where the value changes, not
everywhere — static display numbers and version strings read better
proportional.

**Not slop when**  No number in the tree updates in place, so the condition
never arises; or the project already applies it somewhere, which means someone
looked and this instance is an oversight rather than an absence of care.

### C4 — A heading that leaves a word behind

**Signal**  A heading of four words or more with no `text-wrap: balance`, or a
short text block with no `text-pretty`. A heading of three words or fewer is
not a site: it holds one line at most widths it will be read at, so reporting
it means reporting a break that probably never happens. The threshold is a
floor for what is worth flagging, not a claim that a shorter heading can never
wrap. A short text block is a paragraph carrying at least one complete sentence
and no more than about three; a one-line label, a column header, or a fragment
that is not a sentence is not a site, for the reason a three-word heading is
not. Count the sites carrying the property against the sites that don't,
headings against headings and text blocks against text blocks.

**Principle**  A single word alone on a heading's last line is the clearest
sign nobody ever resized the window to check.

**Fix**  `text-wrap: balance` on headings, `text-pretty` on short text,
neither on long-form body copy, where the reflow cost doesn't pay for itself.

**Not slop when**  The tree holds no heading of four words or more and no
short text block, so the condition never arises; or, among the sites of the
same kind as the one that failed, more carry the property than miss it. That
is a count, not an impression: five treated headings against one untreated is
an oversight, and three against three is the pattern.

### C5 — A target the size of the drawing

**Signal**  An interactive element with a declared dimension under 40px and no
area extended by a pseudo-element or padding. Count the small controls that
extend their hit area against the ones that don't. A control whose hit area is
set by a text label and its padding is not a site: the Principle below is about
a drawing with nothing around it, and a labelled control has surrounding area by
construction. A control short in one dimension and generous in the other is a
real problem and a different one; this tell does not carry it.

**Principle**  The touch target is the drawing plus whatever surrounds it. A
20px icon with no extension misses the finger and forces a second attempt.

**Fix**  Extend to at least 40px with a pseudo-element, without overlapping
the neighboring target.

**Not slop when**  No control in the tree is smaller than 40px, so the
condition never arises; or extending the target is the pattern among the
project's small controls and this control fell outside it.

### C6 — An image with no edge

**Signal**  A content `<img>` with no outline, in a project where every other
surface carries a border or a shadow.

**Principle**  The image is the one surface whose edge comes from its own
content instead of from a treatment. Left alone, it floats while everything
around it has an edge.

**Fix**  A 1px low-opacity outline, black on light and white on dark, with a
negative `outline-offset` so it doesn't add to the layout.

**Not slop when**  No content image appears in the tree, so the condition
never arises; or every other image already carries the treatment, which makes
this a skip rather than a habit.

### C7 — Enter and exit weigh the same

**Signal**  The same duration and the same distance in both directions, or an
exit that is just `display: none` while the entrance animates.

**Principle**  Whatever is leaving has already had the user's attention moved
to what comes next. An exit that matches the entrance holds the eye where it
no longer needs to be.

**Fix**  A shorter, more understated exit than the entrance — a small, fixed
offset that signals direction without drawing the eye back.

**Not slop when**  No animated enter or exit exists anywhere in the tree, so
the condition never arises; or asymmetry is already the habit in the project's
other enter/exit pairs and this pair alone broke it.

### C8 — An animation that cannot change its mind

**Signal**  A `@keyframes` block triggered by an interactive state change — a
drawer, a panel, a toggle — where the transition would need to be
interruptible.

**Principle**  A keyframe animation runs on a fixed timeline and restarts from
the beginning when the state changes mid-flight. A transition instead
retargets to the new value from wherever it currently sits, so the interface
never looks stuck.

**Fix**  Use a transition for anything driven by interactive state, and
reserve keyframes for a sequence meant to run once, start to finish.

**Not slop when**  No interactive open-and-close exists anywhere in the tree,
so the condition never arises; or transitions already drive the project's other
interactive states, leaving this keyframe the odd one out.

### C9 — Nothing happens when you press

**Signal**  Elements with a declared `hover:` state and no `active:` state.
Count the ones carrying both against the ones that only carry hover.

**Principle**  Hover doesn't exist on touch, so on a phone the control gives
no feedback at all until the screen itself changes.

**Fix**  A cheap pressed state — a small scale, an opacity shift, or a change
in elevation — on every control that already has a hover state.

**Not slop when**  None of the project's controls has a hover state, and the
absence is uniform across the tree; or a pressed state is standard equipment on
the project's other controls and this control went without.

### C10 — One theme was ever opened

**Signal**  A second theme exists and only the background crossed into it: the
page or body flips, and the borders and dividers do not — a `dark:` variant on
one and none on the others, a `prefers-color-scheme` block that redeclares the
background and nothing else, a `[data-theme]` rule that stops at the surface. A
separator colour declared for one theme only.

**Principle**  A divider that disappears in dark mode erases the hierarchy it
exists to create, and the person who never opened the other theme is the only
one who wouldn't notice.

**Fix**  Declare the separator in both themes, as a semantic token rather than
a color set per element.

**Not slop when**  The project has no dark mode at all, so the condition
never arises; or every other border in the tree declares both themes, which
makes this border an oversight.

### C11 — Disabled that still looks clickable

**Signal**  A `disabled` attribute with no visual reduction, or a reduced
opacity applied with no `disabled` attribute behind it.

**Principle**  The two sides have to agree: the visual tells the eye whether
the control can be clicked, and the attribute decides whether clicking does
anything. Apart, one of them is lying.

**Fix**  Reduce emphasis and set the attribute together, and remove the
pointer cursor along with them.

**Not slop when**  No disabled state exists anywhere in the tree, so the
condition never arises; or the project's other disabled controls keep the two
sides in step and only this control drifted.

### C12 — Color carrying the meaning alone

**Signal**  Status communicated by color alone — a dot, a stripe, a
label-less badge — with no text, shape, or icon repeating the same
information.

**Principle**  Color is the channel the most people lose, and the only one
that doesn't survive a screenshot converted to grayscale.

**Fix**  Add a label, a shape, or an icon alongside the color, so the color
reinforces the status instead of being the only thing carrying it.

**Not slop when**  The status already ships with text or shape everywhere it
appears, so the condition never arises; or two channels is what the project's
other indicators already give the reader, and this indicator is short one.

### C13 — Motion nobody switched off

**Signal**  Anything in the tree animates — a transition, a keyframe, a motion library — and no `prefers-reduced-motion` block appears in any stylesheet, no `motion-reduce:` variant on any animated element, and no motion-preference hook at any callsite.

**Principle**  Movement is not decoration for everyone. A reader who has told their system to reduce motion has usually told it for a reason, and a page that animates anyway is the page nobody opened that setting to check. It is the same defect as a dark theme declared on the background alone: a mode exists, and only one of them was ever looked at.

**Fix**  One `prefers-reduced-motion: reduce` block that shortens or removes transitions and keyframes, or the `motion-reduce:` variant on the elements that move.

**Not slop when**  Nothing in the tree animates, so the condition never arises; or the project honours the preference somewhere and this surface fell outside it.

### C14 — A box nobody reserved

**Signal**  Two branches. An async boundary whose pending state renders something of unrelated height to its resolved state — a spinner, a line of text, or nothing, against a list of rows or a grid of cards — with no placeholder anywhere reserving the resolved footprint. Or a content image with no `width`/`height` pair, no `aspect-*` class, and no fixed height on its wrapper. Count the sites that reserve their box against the ones that don't.

**Principle**  The reader loses their place. Content arrives, the page grows under whatever they were reading, and the line they were on is somewhere else. It is the one defect on this axis that costs the reader their position rather than their confidence.

**Fix**  A placeholder that holds the resolved shape, and dimensions or an aspect ratio on every content image.

**Not slop when**  The resolved size is genuinely unknowable ahead of the response and the container reserves a minimum height, so the page does not grow; the framework forces dimensions, as `next/image` does; or the project's other async surfaces and images already reserve their boxes, leaving this one an oversight.

### C15 — A page only ever seen at one width

**Signal**  A layout with more than one column, a fixed horizontal padding, or a row of controls, and no responsive variant anywhere in the tree — no `sm:`, `md:`, `lg:` or container query on any element, and no breakpoint declared in the theme.

**Principle**  Every interface is read at a width its author never opened. A three-column grid with no single-column fallback does not degrade, it overflows; a header that holds its row at 1440 wraps into itself at 380 or strands itself at 1920.

**Fix**  Declare the widths the content actually changes shape at, and only those. One breakpoint chosen because the content breaks there beats five taken from the framework.

**Not slop when**  The tree is a single column of full-width blocks that reflows on its own, so no width can break it; the surface is deliberately fixed-width and says so in the theme; or the project handles width elsewhere and this view fell outside it.

