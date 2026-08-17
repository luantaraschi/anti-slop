# Deriving

Each value below comes from a root or from another value. None of them comes
from a preference, and none is a menu to pick from.

Every entry says what it derives from, the rule, and which of the five shapes
records it. A value that lands without its shape is a default with a new name,
and the auditor is built to tell those apart.

The worked notes show the form of a derivation, never a palette to lift. Copying
one is the failure this skill exists to prevent, one level up.

### Palette

**From**  Root 1 (what the product is) and root 3 (temperature).

**Rule**  Four to six colors. Each name comes from the subject — the material,
the document, the instrument, the place the product lives in. None is named for
its rank. Temperature decides saturation and contrast, not the names: an
expressive temperature earns a gradient or a saturated accent, a sober one earns
neither, and both draw their stops from these same four to six.

**Record as**  Naming is most of the evidence here. Add a derivation when a
color's value comes from another's, and an accepted cost when a color does not
survive one of the two themes.

**Worked**  A bookkeeping product named five: two neutrals for the surface and
the text, one for rules and dividers, one for the domain's own object, one for
the state that needs attention. Rank names — `primary`, `secondary` — record an
order rather than a decision, and would have failed the same test.

### Type scale

**From**  Root 4 (density), then the content's real hierarchy.

**Rule**  Density sets the body size; the hierarchy sets how many steps exist.
Count the distinct kinds of text the product actually shows, and declare that
many. Name each for what it carries, not for how big it is: `sm`/`md`/`lg`
records a size that the value already states, so the name adds nothing.

**Record as**  Derivation, when a step's size or line height comes from the body
step. Subtraction, when a step the framework offers is not declared because
nothing in the product uses it.

**Worked**  A dense product declared four steps and a generous one declared
three. Both named them for their job — a note, a body, a figure, a title — and
neither declared a step no screen rendered.

### Radius scale

**From**  Root 4 (density), then arithmetic.

**Rule**  Two or three radii, tied to the size of what they wrap. When one
rounded thing sits inside another, the outer radius is the inner radius plus the
padding between them. That single equation is what keeps two curves concentric,
and it is the reason a radius scale is derived rather than chosen.

A pill is outside this arithmetic: its radius comes from its own height, so it
neither takes nor gives to the scale.

**Record as**  Derivation, always, and written as the equation. A radius scale
without its arithmetic is three numbers that happen to differ.

**Worked**  A control at 5px inside a panel padded by 7px puts the panel at
12px. Change the padding and the panel's radius moves with it; the comment says
so, so the next person changes both.

### Elevation

**From**  How many layers the interface actually has.

**Rule**  Count the surfaces that genuinely float above their neighbours. Most
interfaces have one, and many have none — a border separates a resting surface
at no cost. Declare that many levels and no more. Elevation stacked on every
card is the tell that fires when nobody counted.

**Record as**  Subtraction, naming the levels not declared. Accepted cost, when a
shadow does no work in one of the two themes and a second shadow was not added
to paper over it.

**Worked**  One product declared a single level and said in the theme that
resting surfaces separate with a border instead; it also said the shadow is
invisible in its dark theme and that this was accepted rather than patched.
Another declared none at all, which is a decision when the theme says so.

### Motion

**From**  Root 3 (temperature), and two platform facts.

**Rule**  Temperature sets how much movement exists. Two facts set its shape
regardless of temperature: an exit is shorter than its entrance, because what is
leaving has already lost the eye to what replaces it; and anything driven by
interactive state moves on a transition rather than a keyframe, so a user who
changes their mind halfway retargets from where the element is instead of
restarting its timeline.

Every motion honours `prefers-reduced-motion`.

**Record as**  Platform fact for both rules above. Abstention where movement was
available and not used.

**Worked**  A panel entered over 200ms and left over 100ms across the same
distance, on a transition rather than a keyframe, with both reasons in the file.

### Interactive states

**From**  A platform fact, not from a root.

**Rule**  Hover does not exist on a touchscreen. A control that answers hover
and nothing else says nothing back to most of the people using it, so every
hover carries a pressed state in the same declaration. A disabled control's look
and its attribute move together, from one shared place, so they cannot drift.

A target is at least 40px even when its drawing is smaller; a pseudo-element
extends it at no cost in layout.

**Record as**  Platform fact.

### Iconography

**From**  Root 2 (voice).

**Rule**  An icon earns its place by saying something the text does not. An icon
beside a word that already says it is decoration, and a set of icons chosen to
fill the same slot in five cards is a template asking rather than content.

Where an icon does carry meaning and its shape is asymmetric, it is centred by
the eye rather than by its bounding box.

**Record as**  Abstention, at the place an icon was available and not used.

### Components

**From**  Repetition.

**Rule**  A class stack retyped at more than one callsite belongs in a
component. This is the same defect as a palette nobody picked, one level down:
each callsite re-decided independently instead of inheriting a decision.

When starting from a component library, the variants the product does not use
are removed rather than left in place. What is left carries the theme's own
radius, colors, and type scale, which is what makes the library's file evidence
of a decision rather than evidence of an install.

**Record as**  Subtraction, naming what was removed and why.

**Worked**  A button kept two variants and deleted three the product never
rendered, and said so at the top of the file.

### Both themes, if there are two

**From**  Nothing. This is a completeness rule.

**Rule**  A dark theme declared on the background and nowhere else is not a dark
theme. Every border, divider, shadow and link colour declares both, or the
project declares one theme and means it.

**Record as**  Accepted cost, where a value cannot work in both and the
alternative was rejected on purpose.
