# Surface

The subjective axis. Read wherever the project declares its values before you
read a single component — a theme config, a variables file, a `:root` block, a
tokens file, or the top of the main stylesheet. Three of the tells below (A1,
A3, A5) are absences that live there, and an auditor who opens components first
collects thirty symptoms and misses the cause.

A pattern being present is never the finding. The finding is the pattern
present **and** no evidence anyone chose it. Find that evidence and the tell
does not fire.

**This axis names Tailwind classes more than any other, and they are examples.**
It is where the patterns were measured, not where they live. `theme.extend`
means wherever this project declares its values. `rounded-2xl` on everything
means one radius on everything, whether it is a utility class, a variable, or a
number retyped in nine rules. `text-gray-500` means a neutral nobody chose. On
plain CSS, on Vue, on Svelte, on anything: find the equivalent and audit that.
A tell that cannot cross — A10 needs a component library to exist — is declined
and named, never stretched.

### A1 — A palette nobody picked

**Signal**  The project has no named colours of its own. Nowhere it could declare them does: not a theme config — check both replacing the scale and extending it, since a project that replaced it with the framework's own palette passes a Signal that reads only one — not a variables file, not a `:root` or `@theme` custom-property block, not a tokens file. Every colour on the page is either a framework default called by its number or a hex typed at the callsite. Both clauses have to hold: nothing declared, and nothing named.

**Principle**  Tailwind's default palette is a starting point published on millions of sites. Using it raw is not a choice. It's the absence of one. Where a stock `components/ui/` is also present, this gets worse than raw: its `bg-primary` and `ring-ring` resolve against custom properties nobody defined, so a second color vocabulary sits in the tree rendering as nothing.

**Fix**  Name four to six colors in the theme, derived from the subject, and use the semantic classes that follow from them.

**Not slop when**  The team adopted the default palette as a declared decision, and that decision is recorded in the theme or in the documentation.

### A2 — The generator gradient

**Signal**  A gradient running purple into blue, or through pink, whose stops are named by the framework rather than by the project — `from-purple-* to-blue-*` in Tailwind, `#8B5CF6` to `#3B82F6` in plain CSS, a `linear-gradient` between two hues that appear nowhere else in the design. Or a gradient applied to heading text so the words themselves carry it.

**Principle**  This specific gradient marks a generator's output vintage. It shows up regardless of subject, which is exactly what gives it away.

**Fix**  If the gradient earns its place, anchor its stops in the theme's own colors and use it once. If it doesn't earn its place, cut it.

**Not slop when**  The gradient is built from the theme's own colors, or the brand is already constructed on top of it.

### A3 — One radius for everything

**Signal**  One corner radius on everything — the same value on a button, an input, a card and the container holding all three, whether it arrives as `rounded-2xl`, as a variable used everywhere, or as `16px` retyped in nine rules. Count the distinct radii the project actually uses.

**Principle**  Radius encodes scale. A 40px button and a 600px panel sharing the same corner tells the eye they're the same kind of thing.

**Fix**  Two or three radii tied to size, declared in `theme.extend.borderRadius`.

**Not slop when**  The design treats a single radius as a signature and holds it even where it feels unusual, and that choice lives in the theme.

### A4 — Elevation without a system

**Signal**  The same drop shadow on every raised surface — one preset used everywhere, or one `box-shadow` value repeated — and border plus shadow plus radius stacked on the same element, so three devices do one job.

**Principle**  Three devices for the same separation means none of them was chosen. Uniform shadow flattens the hierarchy it exists to create.

**Fix**  Two levels: resting and elevated. One separation device per element.

**Not slop when**  The surface declares a single elevation level, and the border is the chosen separator while shadow is reserved for focus or hover state.

### A5 — No type scale

**Signal**  No type scale the project declared: only the framework's default steps, or font sizes typed at each callsite with no relationship between them. Plus one weight doing all the emphasis, and no family the project chose — it runs on whatever the ecosystem reaches for first, which is currently Inter, or on the system stack by default rather than by decision.

**Principle**  Typography carries a page's personality. Without a scale and without a family, the text is a neutral delivery of content.

**Fix**  A scale declared in `theme.extend.fontSize`, a display family and a body family, and weight used with intent.

**Not slop when**  The system font is a declared choice, and a scale still exists in the theme even while using native families.

### A6 — Uniform rhythm

**Signal**  One spacing value repeated down the nesting, from the page wrapper through the section through the card to the element inside it. The test is the repetition across levels, not any particular utility — `p-6`, `gap-6` and `space-y-4` are what it usually looks like, named as examples rather than as a set that all has to be present.

**Principle**  Space groups. When everything is equidistant, nothing is grouped, and the reader loses the structure the content already has.

**Fix**  Spacing proportional to level: more between sections, less within a block. Proximity is what tells the reader what belongs with what.

**Not slop when**  The layout is deliberately tabular or a modular grid, where uniformity is itself the information.

### A7 — Decorative icons

**Signal**  Icons that decorate rather than say anything: a sparkle, a lightning bolt, a rocket, an upward arrow or a checkmark beside text that already carries the meaning; an icon next to every label; an emoji in a heading. The library does not matter — lucide, Heroicons, Font Awesome or an inline SVG all read the same on the page.

**Principle**  An icon is signage. One that distinguishes nothing steals attention from whatever does distinguish.

**Fix**  Keep an icon where it identifies something recurring or stands in for a label. Otherwise, remove it.

**Not slop when**  The project has its own icon system, used consistently, where the set was designed as a language.

### A8 — Template layout

**Signal**  A hero with a pill badge, an h1, a subtitle, and two buttons; a three-card feature grid; a strip of three or four large numbers.

**Principle**  The structure itself isn't the problem: it's that the same structure shows up regardless of subject, which proves the subject never shaped the design.

**Fix**  Open with the most characteristic thing about the subject, in whatever form that thing calls for. The structure should encode something true about the content.

**Not slop when**  The content really is three parallel things, and the numbers really are the product's core information.

### A9 — Generic motion

**Signal**  A transition that animates everything rather than a named property — `transition-all`, or `transition: all` in a stylesheet — and a card that grows slightly on hover, a transform of a few percent applied because hover needed to do something. Both clauses; the reduced-motion half of this tell used to sit here and now lives at C13, because a project that names its transition properties correctly and ships no reduced-motion handling was escaping every tell in the catalog.

**Principle**  `transition-all` animates properties nobody meant to animate. Motion scattered everywhere tires the eye; motion orchestrated communicates.

**Fix**  Transition named properties, with duration tied to distance. Concentrate motion into a single moment. Respect `prefers-reduced-motion`.

**Not slop when**  The motion follows a declared orchestration and reduced-motion handling is already in place.

### A10 — Primitives installed and then hand-rolled

**Signal**  A component library was installed or copied in — `components/ui/`, a UI folder, a set of partials — and the things that play its role rebuild it by hand beside it, retyping the same styles onto raw elements. Count both sides: the sites that use the shared component against the sites that reimplement it.

**Principle**  Installing a primitive and then not using it is the decision that never happened. The library's vocabulary is in the tree and the product's is not, so every callsite re-decides the same radius, border and shadow on its own.

**Fix**  Route the hand-rolled sites through the primitive, and rework the primitive itself for what the product actually needs: the theme's radius and colors, and none of the variants it never renders.

**Not slop when**  The components that play a primitive's role import it, *and* the primitive shows evidence of a decision: variants pruned, theme tokens wired in, a comment recording the choice. Both halves are required. A single importer among a dozen hand-rolled ones does not earn the exemption, and neither does a domain name on a file: a `StatCard` that reimplements `<Card>` in raw `div`s leaves the primitives as unused as the install left them.

### A11 — Motion with no scale

**Signal**  One duration value carried by transitions whose travelled distance differs by an order of magnitude — a colour change on a control and a full panel translate — with no `transitionDuration` in the theme, no motion custom property, and no tokens file declaring one.

**Principle**  Duration reads as distance. A 200ms colour fade and a 200ms panel slide look wrong together because the eye expects the longer journey to take longer, and one value everywhere is the same absence of a decision as one radius everywhere.

**Fix**  Two or three durations declared in the theme, tied to how far the thing travels, and used by name.

**Not slop when**  A duration scale is declared in one of the four evidence places, which makes a repeated value a chosen step rather than a default; or every animated change in the tree really is the same magnitude.

### A12 — A stacking order nobody declared

**Signal**  Stacking values picked one at a time — 9999 beside 100 beside 50 beside 10 — with nothing anywhere naming the layers, no scale in a theme, no variable, no comment recording the order.

**Principle**  A stacking order is a system with three or four real layers: content, sticky chrome, overlay, and whatever the browser puts on top. Numbers picked at each callsite until the thing appeared are not that system, and the next element added to the page starts the escalation again.

**Fix**  Name the layers in the theme and use the names. Three or four is usually the whole set.

**Not slop when**  A z scale exists in one of the four evidence places and an arbitrary value beside it is a documented escape for a third-party layer the project does not control; or nothing in the tree stacks at all.

