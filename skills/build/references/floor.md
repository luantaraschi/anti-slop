# Floor

The part of an interface that is not a taste.

Every value in `deriving.md` comes from a root, and a different product answers
the roots differently. Nothing below comes from a root. A focus ring is not
warmer on an expressive product, a form label is not optional on a sober one,
and no temperature makes a destructive button safe to click once. These are the
values every interface owes whatever it is.

The two files are therefore read under opposite rules. `deriving.md` says
*decide it, and record why*. This file says *do it*, and a record explaining why
it was not done is not a decision — it is the omission with a paragraph on top.

**The catalog already held two of these and never named the class.** F1 and F6
answer `Not slop when` with `Never`: there is no page without a language, and
there is no page whose h1 competes with another h1. Everything below is that
same kind. This is the whole of the amendment to the founding rule, and it costs
that rule nothing — a floor is not a banned pattern, it is a debt, and the
argument against banned patterns was always that the pattern was never the
defect. Here the absence is.

**A floor is not a ceiling.** An interface that clears every line below works
and says nothing. The identity is still `deriving.md`'s job. A page that passes
this file and fails that one is the failure this plugin exists for, arriving
from the other direction.

**Where a line names a class or an attribute, it names an example.** The rule is
the behaviour. `focus-visible:ring-2` stands for a focus indicator the keyboard
can see, `min-w-0` stands for whatever lets a flex child shrink in this stack,
and a framework that does it another way does it another way. Find the
equivalent and do that.

Ordered by the moment it applies, not by category. Category is how you look a
rule up; moment is how you avoid needing to.

---

## When the theme is declared

This is the cheapest section and the one that pays the most, because everything
here is declared once and every component inherits it. A focus ring written at
each callsite is a focus ring some callsite will forget.

**Focus, declared globally.** `:focus-visible` gets a visible indicator at the
root, not `:focus` — `:focus` puts a ring under a mouse press, where it reads as
a bug and invites the next person to remove it for everything. Never
`outline: none` without a replacement in the same rule. The indicator needs
3:1 against both the surface it sits on and the control it surrounds, which is
usually an offset rather than a colour change.

**Contrast, computed rather than asserted.** Every pairing the tree will really
render clears its floor: 4.5:1 for body text, 3:1 for text at 24px or at 18.66px
bold and above, 3:1 for anything non-textual carrying meaning — a control
boundary, an icon that is the only label, a focus ring, a chart series.

Compute it, do not estimate it. For each channel `c` in 0–255, let
`s = c / 255`, then `l = s / 12.92` where `s ≤ 0.03928` and
`l = ((s + 0.055) / 1.055) ^ 2.4` otherwise. Relative luminance is
`0.2126·r + 0.7152·g + 0.0722·b`, and the ratio between two colours is
`(L_lighter + 0.05) / (L_darker + 0.05)`.

A ratio written into a comment without that arithmetic behind it is the false
precision `build/SKILL.md` rejects, and it is worse here than elsewhere: it
reads as measured and it is the one number a reader will not re-derive. Where a
hue derived from the temperature cannot clear its floor on the ground it will
render against, the hue moves. The floor is not negotiable and the derivation
is, which is the one place in this plugin where that ordering holds.

**Both themes, if there are two.** A dark theme declared on the background alone
is not a dark theme. Every border, divider, shadow and link colour declares
both, or the project declares one theme and says so.

**`color-scheme`** on the root for whichever themes exist. It is what tells the
user agent about the scrollbar, the form-control chrome, and the canvas flash
before first paint. Without it a dark page renders light in all three.

**`<meta name="theme-color">`** matching the page ground, per theme.

**One reduced-motion block.** `prefers-reduced-motion: reduce` shortens or
removes every transition and keyframe in the tree. Write it once at the root
rather than as a variant at each animated element, so nothing animated later can
be built outside it. Use a near-zero duration rather than zero, so a
`transitionend` listener still fires.

## When a control is written

**Hover carries a pressed state.** Hover does not exist on a touchscreen, so a
control that answers only hover says nothing back to most of the people using
it. The pressed state ships in the same declaration as the hover, so neither can
be added without the other.

**Each state is more prominent than the one before it.** Rest, then hover, then
active, then focus. A hover that lowers contrast tells the reader the control
became less available when they reached for it.

**The target is at least 40px** even where the drawing is smaller. A
pseudo-element extends it without touching layout, and without overlapping the
neighbouring target. A control whose hit area comes from a text label and its
padding already has one.

The figure is the catalog's, not a standard's, and the difference is worth
knowing: WCAG's stricter criterion is 44px, its minimum is 24, Apple asks 44 and
Android 48. C5 has measured against 40 since the first calibration, so the two
files agree rather than the tell agreeing with a specification. Treat 40 as the
floor and 44 as the better number where nothing costs anything to move it.

**A control with no visible text has an accessible name.** An icon-only button
carries `aria-label`; a decorative icon inside a labelled button carries
`aria-hidden="true"` so the name is not read twice.

**`<button>` acts, `<a>` navigates.** A `div` with a click handler is neither:
it has no keyboard behaviour, no role, and no place in the tab order. An anchor
is also what makes Cmd-click and middle-click work, which is the whole of the
difference between a link and a thing that looks like one.

**Disabled moves as one.** The attribute and the visual reduction are set from
the same place, so they cannot drift, and the pointer cursor comes off with
them. Reduced opacity with no attribute behind it is a control that looks dead
and still fires.

**`touch-action: manipulation`** on anything tappable, which removes the 300ms
double-tap-zoom wait. Set `-webkit-tap-highlight-color` deliberately rather than
inheriting the platform's.

## When a form asks for something

A form is where an interface stops describing and starts costing the reader
effort, so it is where the floor pays most. On a marketing page it is also the
only surface that converts, which makes it the worst place in the tree to leave
at the defaults.

**Every field has a label a click can reach.** A real `<label>` bound to the
control, or a bound accessible name where the design cannot show one. A
placeholder is not a label: it disappears exactly when the reader needs it, and
it takes the field's whole meaning with it. A checkbox and its label are one hit
target with no dead zone between them.

**The field says what it is to the browser, too.** A meaningful `name`, an
`autocomplete` token, the right `type` — `email`, `tel`, `url`, `number` — and
an `inputmode` where the type does not settle the keyboard. This is what makes a
phone offer the right keys and a password manager fill the right box, and it
costs one attribute.

**Never block paste.** A `preventDefault` on paste is the single most hostile
line in front-end practice: it breaks password managers, it breaks the person
copying a code out of an email, and it protects nothing.

**Turn spellcheck off** on emails, codes, usernames and anything else the
dictionary will underline in red for being correct.

**Errors arrive inline, beside the field, and the first one takes focus.** A
summary at the top of a form is where an error goes to be missed. Say what is
wrong and what would be right, in the same sentence.

**The submit control stays enabled until the request starts.** Disabling it
until the form validates hides the reason it cannot be pressed, and the reader
is left hunting for what they got wrong. Let them press it and tell them.

**Placeholders show a pattern, not an instruction.** `you@company.com`, not
`Enter your email`, which the label already said.

## When text is placed

**A heading of four words or more takes `text-wrap: balance`.** A paragraph of
one to three complete sentences takes `text-pretty`. Long-form body copy takes
neither, because the reflow costs more than it returns. Apply it at the
component that renders the heading, so one string covers every instance.

**A number that changes in place takes `tabular-nums`** — a counter, a timer, a
live total, a numeric column. Not everywhere: a static figure and a version
string read better proportional.

**Text containers survive their content.** A flex child needs `min-w-0` before
it can truncate at all, and every container holding text the product does not
control gets `truncate`, `line-clamp`, or `break-words`. Write the short, the
average and the very long case before deciding which.

**The typographic characters are the typographic characters.** `…` rather than
three periods, curly quotes rather than straight, a non-breaking space inside
`10 MB` and `⌘ K` and any brand name that must not break. A loading string ends
in the ellipsis: `Saving…`.

## When something is fetched

Four states, not one. The demonstrated path is the one that resolves, and the
other three are where an interface stops being a demo.

**Pending reserves the resolved footprint.** A skeleton holding the shape the
content will take, not a spinner and not an empty box: the reader keeps their
place, and the page does not grow underneath the line they were reading. A
spinner is right only where the resolved size is genuinely unknowable, and then
the container reserves a minimum height anyway.

**Below roughly 200ms, show nothing.** A skeleton that appears and vanishes
inside a fifth of a second reads as a flicker, which is worse than the wait it
was covering. Above it, the skeleton appears immediately rather than after a
delay that makes the interface feel stalled first and busy second.

**Empty says what the space is for.** Not a count report. Distinguish genuinely
empty, which is an invitation and carries the first action, from
filtered-to-nothing, where the obvious move is changing the filter and the
interface should offer it.

**Failure has somewhere to go.** Every request has a `.catch`, a `try`, an error
field read from its hook, or a boundary above it that this callsite genuinely
sits inside. The branch says what failed and what the reader can do now. Keeping
a stale value is fine; keeping it silently is not, because a figure that
stopped updating reads as a figure that stopped changing.

**An async change announces itself.** A toast, a validation result, an inline
error: `aria-live="polite"` on the region, declared on the container that exists
before the message does, not added with the message.

**A mutating control is bound to its own pending state** before the request
starts. Otherwise the reader is told nothing happened and presses again.

## When something can be lost

**A destructive action gets a confirmation or an undo window, never both and
never neither.** Delete, revoke, archive, cancel, overwrite. An action that is
trivially reversible on its own — a bookmark, a mute, a toggle — needs neither.

**Unsaved work warns before it navigates.** A form the reader has typed into
does not disappear because a link was in the way.

**The URL carries whatever names the view.** A filter, a tab, a sort order, a
page number, a selected record: state that answers *what am I looking at* goes
in the address, and state that does not — a hover, an open menu, an unsent
draft — stays in the component. Written with a history entry rather than a
replace where the back button should undo it.

## When an image or a media element is placed

**Dimensions or an aspect ratio, always.** An image without them grows the page
under whatever the reader was looking at when it arrives.

**`alt` on content images, and an explicit `alt=""` on decorative ones.** The
attribute's absence is not the same as an empty one: absent, a screen reader
reads the filename.

**`loading="lazy"` below the fold**, and an explicit priority on the one image
above it that matters.

**Prefer a muted looping video to an animated GIF**, with a still alternative,
and stop the loop under reduced motion.

## When the page is published

Most of this is the audit's Finish axis run forward, and all of it is greppable.

A `lang` on the root, and again wherever the language changes · a `<title>` per
route, specific first and generic last, and never the scaffold's · a meta
description per indexable route · `og:title`, `og:description` and a 1200×630
`og:image` on anything shareable · a real favicon and an `apple-touch-icon` ·
exactly one `<h1>` per route, matching its title · a 404 route that offers
somewhere to go · a canonical URL where more than one route exists · a sitemap
and a robots file on a public site · no surviving placeholder: no `lorem`, no
`Your Company`, no `example.com`, no `href="#"`, no `TODO`.

**And the legal pages.** A published site that collects anything owes a privacy
policy, and one that offers anything owes terms. `legal.md` carries what each
has to contain, the inventory it draws on, and the rule that keeps it from being
fabricated.

---

## What this file does not do

It does not decide a colour, a family, a scale, a radius, a duration or a
layout. Every line above is compatible with any answer `deriving.md` reaches,
and that is the test of whether a rule belongs here: if a different product
could reasonably want it otherwise, it is a derivation and it belongs in the
other file.

Three rules were considered for this file and refused on exactly that test.
Title case on headings, because sentence case is as defensible and the choice
belongs to the voice. A specific easing curve, because the curve is the
character of the motion and `deriving.md` derives it. And a minimum body size,
because density is root 4 and a dense product legitimately reads smaller than a
generous one.
