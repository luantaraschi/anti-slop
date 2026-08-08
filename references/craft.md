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

### C1 — A radius that ignores what it wraps

**Signal**  Two rounded elements nested with the same radius value, or an inner
radius larger than the outer one. Count nested pairs against the pairs where
the outer radius equals the inner radius plus the padding between them.

**Principle**  An outer and an inner radius are concentric when the gap
between the two curves stays constant. Equal, the two curves run in parallel
instead, and the eye reads the inner corner as crooked.

**Fix**  Two or three radii tied to the scale, with the outer one set to the
inner radius plus the padding, where that padding is 24px or less.

**Not slop when**  The padding between the layers exceeds 24px, at which point
the two surfaces read as separate and each radius is free to choose itself; or
the project's other nested pairs are already concentric, and this one is the
exception.

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
tree; or the project's other controls already compensate, and this one is the
lone holdout.

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
not a site: at the sizes headings are set, it holds one line at any width a
heading is read at, so it has no last line to strand a word on. Count the
sites carrying the property against the sites that don't, headings against
headings and text blocks against text blocks.

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
extend their hit area against the ones that don't.

**Principle**  The touch target is the drawing plus whatever surrounds it. A
20px icon with no extension misses the finger and forces a second attempt.

**Fix**  Extend to at least 40px with a pseudo-element, without overlapping
the neighboring target.

**Not slop when**  No control in the tree is smaller than 40px, so the
condition never arises; or the project's other small controls already extend,
and this one is the exception.

### C6 — An image with no edge

**Signal**  A content `<img>` with no outline, in a project where every other
surface carries a border or a shadow.

**Principle**  The image is the one surface whose edge comes from its own
content instead of from a treatment. Left alone, it floats while everything
around it has an edge.

**Fix**  A 1px low-opacity outline, black on light and white on dark, with a
negative `outline-offset` so it doesn't add to the layout.

**Not slop when**  No content image appears in the tree, so the condition
never arises; or the project's other images already carry the treatment, and
this one was missed.

### C7 — Enter and exit weigh the same

**Signal**  The same duration and the same distance in both directions, or an
exit that is just `display: none` while the entrance animates.

**Principle**  Whatever is leaving has already had the user's attention moved
to what comes next. An exit that matches the entrance holds the eye where it
no longer needs to be.

**Fix**  A shorter, more understated exit than the entrance — a small, fixed
offset that signals direction without drawing the eye back.

**Not slop when**  No animated enter or exit exists anywhere in the tree, so
the condition never arises; or the project's other enter/exit pairs are
already asymmetric, and this pair is the exception.

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
so the condition never arises; or the project's other interactive states
already use a transition, and this one is the exception.

### C9 — Nothing happens when you press

**Signal**  Elements with a declared `hover:` state and no `active:` state.
Count the ones carrying both against the ones that only carry hover.

**Principle**  Hover doesn't exist on touch, so on a phone the control gives
no feedback at all until the screen itself changes.

**Fix**  A cheap pressed state — a small scale, an opacity shift, or a change
in elevation — on every control that already has a hover state.

**Not slop when**  None of the project's controls has a hover state, and the
absence is uniform across the tree; or the project's other controls already
carry a pressed state, and this one is the exception.

### C10 — One theme was ever opened

**Signal**  `dark:` present on the background and absent on the border or
divider; a separator color declared only for the light theme.

**Principle**  A divider that disappears in dark mode erases the hierarchy it
exists to create, and the person who never opened the other theme is the only
one who wouldn't notice.

**Fix**  Declare the separator in both themes, as a semantic token rather than
a color set per element.

**Not slop when**  The project has no dark mode at all, so the condition
never arises; or the project's other borders already declare both themes, and
this one is the exception.

### C11 — Disabled that still looks clickable

**Signal**  A `disabled` attribute with no visual reduction, or a reduced
opacity applied with no `disabled` attribute behind it.

**Principle**  The two sides have to agree: the visual tells the eye whether
the control can be clicked, and the attribute decides whether clicking does
anything. Apart, one of them is lying.

**Fix**  Reduce emphasis and set the attribute together, and remove the
pointer cursor along with them.

**Not slop when**  No disabled state exists anywhere in the tree, so the
condition never arises; or the project's other disabled controls already
agree on both sides, and this one is the exception.

### C12 — Color carrying the meaning alone

**Signal**  Status communicated by color alone — a dot, a stripe, a
label-less badge — with no text, shape, or icon repeating the same
information.

**Principle**  Color is the channel the most people lose, and the only one
that doesn't survive a screenshot converted to grayscale.

**Fix**  Add a label, a shape, or an icon alongside the color, so the color
reinforces the status instead of being the only thing carrying it.

**Not slop when**  The status already ships with text or shape everywhere it
appears, so the condition never arises; or the project's other indicators
already repeat the status on two channels, and this one is the exception.
