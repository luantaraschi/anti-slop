# Surface

The subjective axis. Read the theme before you read a single component:
`tailwind.config`, `globals.css`, any tokens file. Three of the ten tells below
(A1, A3, A5) are absences that live there, and an auditor who opens components
first collects thirty symptoms and misses the cause.

A pattern being present is never the finding. The finding is the pattern
present **and** no evidence anyone chose it. Look for that evidence in
`theme.extend`, in custom properties under `:root` or `@theme`, in a tokens
file, and in a `components/ui/` that differs from stock shadcn. Find it, and
the tell does not fire.

### A1 — A palette nobody picked

**Signal**  `tailwind.config` declares no `theme.extend.colors` and no color custom property appears anywhere, so every color in the tree is a framework default called by its number.

**Principle**  Tailwind's default palette is a starting point published on millions of sites. Using it raw is not a choice. It's the absence of one.

**Fix**  Name four to six colors in the theme, derived from the subject, and use the semantic classes that follow from them.

**Not slop when**  The team adopted the default palette as a declared decision, and that decision is recorded in the theme or in the documentation.

### A2 — The generator gradient

**Signal**  `from-purple-*` paired with `to-blue-*`, `via-pink-*`, or a gradient applied to heading text with `bg-clip-text`.

**Principle**  This specific gradient marks a generator's output vintage. It shows up regardless of subject, which is exactly what gives it away.

**Fix**  If the gradient earns its place, anchor its stops in the theme's own colors and use it once. If it doesn't earn its place, cut it.

**Not slop when**  The gradient is built from the theme's own colors, or the brand is already constructed on top of it.

### A3 — One radius for everything

**Signal**  The same `rounded-xl` or `rounded-2xl` on button, input, card, and page-level container. Count the distinct radii in the tree.

**Principle**  Radius encodes scale. A 40px button and a 600px panel sharing the same corner tells the eye they're the same kind of thing.

**Fix**  Two or three radii tied to size, declared in `theme.extend.borderRadius`.

**Not slop when**  The design treats a single radius as a signature and holds it even where it feels unusual, and that choice lives in the theme.

### A4 — Elevation without a system

**Signal**  `shadow-lg` or `shadow-xl` on every card, and `border` plus `shadow` plus `rounded` stacked on the same element.

**Principle**  Three devices for the same separation means none of them was chosen. Uniform shadow flattens the hierarchy it exists to create.

**Fix**  Two levels: resting and elevated. One separation device per element.

**Not slop when**  The surface declares a single elevation level, and the border is the chosen separator while shadow is reserved for focus or hover state.

### A5 — No type scale

**Signal**  Only Tailwind's default steps, `font-bold` as the sole emphasis, and no custom family — the project runs on Inter or the system font.

**Principle**  Typography carries a page's personality. Without a scale and without a family, the text is a neutral delivery of content.

**Fix**  A scale declared in `theme.extend.fontSize`, a display family and a body family, and weight used with intent.

**Not slop when**  The system font is a declared choice, and a scale still exists in the theme even while using native families.

### A6 — Uniform rhythm

**Signal**  `p-6`, `gap-6`, and `space-y-4` repeated across the whole hierarchy, from the page wrapper down to the list item.

**Principle**  Space groups. When everything is equidistant, nothing is grouped, and the reader loses the structure the content already has.

**Fix**  Spacing proportional to level: more between sections, less within a block. Proximity is what tells the reader what belongs with what.

**Not slop when**  The layout is deliberately tabular or a modular grid, where uniformity is itself the information.

### A7 — Decorative icons

**Signal**  `Sparkles`, `Zap`, `Rocket`, `TrendingUp`, and `CheckCircle2` from lucide with no function; an icon next to every label; an emoji in a heading.

**Principle**  An icon is signage. One that distinguishes nothing steals attention from whatever does distinguish.

**Fix**  Keep an icon where it identifies something recurring or stands in for a label. Otherwise, remove it.

**Not slop when**  The project has its own icon system, used consistently, where the set was designed as a language.

### A8 — Template layout

**Signal**  A hero with a pill badge, an h1, a subtitle, and two buttons; a three-card feature grid; a strip of three or four large numbers.

**Principle**  The structure itself isn't the problem: it's that the same structure shows up regardless of subject, which proves the subject never shaped the design.

**Fix**  Open with the most characteristic thing about the subject, in whatever form that thing calls for. The structure should encode something true about the content.

**Not slop when**  The content really is three parallel things, and the numbers really are the product's core information.

### A9 — Generic motion

**Signal**  `transition-all duration-300` as the default transition, `hover:scale-105` on cards, and no `prefers-reduced-motion` block anywhere.

**Principle**  `transition-all` animates properties nobody meant to animate. Motion scattered everywhere tires the eye; motion orchestrated communicates.

**Fix**  Transition named properties, with duration tied to distance. Concentrate motion into a single moment. Respect `prefers-reduced-motion`.

**Not slop when**  The motion follows a declared orchestration and reduced-motion handling is already in place.

### A10 — Primitives installed and then hand-rolled

**Signal**  The primitives sit in `components/ui/` while the components that play their role re-type their classes in raw `div`s and `button`s beside them. Count both sides: the sites that import the primitive against the sites that reimplement it by hand.

**Principle**  Installing a primitive and then not using it is the decision that never happened. The library's vocabulary is in the tree and the product's is not, so every callsite re-decides the same radius, border and shadow on its own.

**Fix**  Route the hand-rolled sites through the primitive, and rework the primitive itself for what the product actually needs: the theme's radius and colors, and none of the variants it never renders.

**Not slop when**  The components that play a primitive's role import it, *and* the primitive shows evidence of a decision: variants pruned, theme tokens wired in, a comment recording the choice. Both halves are required. A single importer among a dozen hand-rolled ones does not earn the exemption, and neither does a domain name on a file: a `StatCard` that reimplements `<Card>` in raw `div`s leaves the primitives as unused as the install left them.
