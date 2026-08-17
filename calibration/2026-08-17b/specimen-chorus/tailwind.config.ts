import type { Config } from 'tailwindcss'

/**
 * Chorus — the decided theme.
 *
 * The roots this file cites by number are written out in ../INVENTORY.md.
 *   Root 1  what the product is        Root 3  temperature: expressive
 *   Root 2  voice: dry, experienced    Root 4  density: generous
 *
 * `theme` is replaced, not extended, everywhere below. `bg-slate-500`, `p-4`,
 * `text-sm`, `rounded-lg` and `shadow-md` do not compile in this project. That
 * is the point: an extended theme leaves the framework's undecided scale
 * sitting beside the decided one, and a page can then be built entirely out of
 * values nobody picked.
 *
 * The cost of replacing rather than extending, stated because it will bite
 * someone: Tailwind drops an unrecognised utility silently. A callsite that
 * types `p-4` gets no padding and no warning. The scales below are therefore
 * complete enough to build the whole page from, and there is no fallback left.
 *
 * Keys not replaced — opacity, z-index, font weight, transition timing — are
 * left as Tailwind ships them. Those are numeric primitives, not an undecided
 * palette: `opacity-40` states its own value and `font-bold` maps to the CSS
 * number 700. Replacing them would rename arithmetic, which is the kind of
 * ceremony that reads as rigour and is not.
 *
 * All px figures below assume the browser's default 16px root, which this
 * project does not change.
 */

/**
 * The five colours live here rather than inline below, because two things read
 * them — `theme.colors` and the one gradient in `theme.backgroundImage`. A hex
 * restated in the gradient string would be a second source, and the drift would
 * be invisible until someone changed one of them.
 */
const palette = {
  /** The ground. A black box room, which is never actually black — the violet
   *  cast is what stops a saturated page from reading as a terminal. */
  blackbox: '#120C18',

  /** House lights up at the end of the night: warm, not white. All body text
   *  and every heading. */
  houselights: '#F6F0E8',

  /** The haze that is in the air of every one of these rooms. Captions, labels
   *  and control borders at full strength; every rule and divider on the page
   *  at 25%, which is the only opacity this palette is ever used at. */
  haze: '#8A7F96',

  /** Lighting gel, the hot one. The accent: the rule above a section Title, the
   *  filled controls, the step numerals, the third of the three replies a venue
   *  can give an offer, and every hover and press the page answers. Root 3
   *  asked for a strong accent and this is the whole of it. */
  gel: '#FF4A1C',

  /** Congo blue, the other gel that is in every rig. The one saturated fill —
   *  the frame around the settlement panel — and the near stop of the one
   *  gradient. */
  congo: '#3C1A85',
} as const

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    /* ---------------------------------------------------------------- type */

    /**
     * Judgment (root 2 + root 3). Two families, named for what they carry
     * rather than for their rank.
     *
     * `display` — Syne, at 800. Root 3 asks for a heavy face on a product that
     * should look like it has been somewhere. Syne was drawn for an arts
     * venue's identity and it carries that: wide, flat-sided, a little strange
     * in the R and the S. It is the poster on the wall: it sets every heading,
     * the wordmark, and the handful of lone words and numerals that are doing a
     * poster's job. It never sets a paragraph.
     *
     * `text` — IBM Plex Sans. Root 2 wants dry and direct. Plex was drawn as
     * engineering documentation, reads at length without personality getting in
     * the way, and has the figures a settlement conversation needs. It is the
     * paperwork under the poster, which is what this product actually sells.
     *
     * Not Inter: it is the current default face of this ecosystem, and a page
     * that reaches for it announces the ecosystem rather than the product.
     *
     * Accepted cost: two webfonts is a download this page decided to spend
     * rather than a native stack it decided to keep. The trade is that until
     * they load the page renders in the fallbacks below, where the display
     * headline is a different width and will rewrap once. `display=swap` in
     * index.html makes that a rewrap instead of invisible text.
     */
    fontFamily: {
      display: ['Syne', 'Arial Black', 'system-ui', 'sans-serif'],
      text: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
    },

    /**
     * Five steps, named for what each one carries. Root 4 is generous, so the
     * body step is 20px rather than the 16px a dense product would take.
     *
     * Derivation — the ratio is 1.5 upward from the body step:
     *   body     20px   the root, set by root 4
     *   lead     30px   = 20 x 1.5
     *   title    45px   = 30 x 1.5
     *   display  45px -> 90px = title -> title x 2, fluid between them
     *   note     16px   = 20 / 1.25
     *
     * `note` steps down by 1.25 rather than by 1.5 because 20 / 1.5 is 13.3px,
     * which is smaller than this page is willing to set anything a reader has
     * to actually read. The asymmetry is deliberate and this is the reason.
     *
     * Subtraction: no `figure` step. The three numbers in Figures.tsx render at
     * `title`, because a figure on this page is a heading that happens to be a
     * number. A step nothing renders at is a default with a new name.
     *
     * Accepted cost: below 563px the `display` clamp sits at its 45px floor,
     * which is exactly `title`, so the hero headline and a section heading are
     * the same size on a phone. The hero still outranks by length and by
     * position. Declaring a sixth step to fix one viewport was the worse trade.
     *
     * `body`'s line box — 20px x 1.6 = 32px — is the root of the entire spacing
     * scale below. Changing it moves every gap on the page.
     */
    fontSize: {
      note: ['1rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      body: ['1.25rem', { lineHeight: '1.6', letterSpacing: '0' }],
      lead: ['1.875rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
      title: ['2.8125rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      display: ['clamp(2.8125rem, 8vw, 5.625rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
    },

    /* ------------------------------------------------------------- colour */

    /**
     * Five colours, named for the room this product lives in. Root 3 sets the
     * saturation; root 1 sets the names. None is named for its rank, because
     * `primary` through `quinary` records an order rather than a decision.
     *
     * Contrast ratios below are computed against the sRGB relative-luminance
     * formula, not estimated.
     *
     *   houselights on blackbox   16.99:1
     *   haze        on blackbox    5.09:1
     *   gel         on blackbox    5.72:1
     *   blackbox    on gel         5.72:1   (the filled controls)
     *   houselights on congo      11.05:1
     *
     * Accepted cost: haze on congo is 3.31:1, under the 4.5:1 this page holds
     * itself to. So haze never sits on congo — the congo frame in Settlement
     * carries houselights only. The alternative was lightening haze until it
     * cleared congo, which would have cost it its separation from houselights
     * on blackbox, where it does its actual work.
     *
     * Subtraction: `transparent` and `current` were declared here as CSS
     * keywords rather than palette entries. After the reduction pass nothing in
     * the tree rendered either one — `border-transparent` went out with the
     * button variant that used it — so they went too. Five colours compile in
     * this project and there is no sixth token of any kind.
     */
    colors: palette,

    /**
     * Judgment (root 3). Root 3 puts a gradient on the table; it does not
     * spend it. This one earns its place by being the stage wash — congo
     * falling off into the room — behind the one screen where nothing else is
     * competing for the reader's attention, and it appears on that screen only.
     *
     * `backgroundImage` is replaced rather than extended, so this is not one
     * gradient among the framework's directional defaults — it is the only
     * gradient that compiles in this project, and a second one is a decision
     * someone has to come back here and make.
     *
     * 118deg rather than a corner-to-corner default: root 3 asked for
     * asymmetry, and a gradient running exactly along the box's own diagonal
     * reads as the box rather than as light.
     *
     * Both numbers were set by eye and there is no arithmetic behind either —
     * which is why this is a Judgment and not a Derivation. What the 62% is
     * for: houselights reads at 11.05:1 on congo and 16.99:1 on blackbox, so
     * the wash has to finish resolving before the type does, or a heading
     * straddling the transition changes apparent weight along its own length.
     */
    backgroundImage: {
      wash: `linear-gradient(118deg, ${palette.congo} 0%, ${palette.blackbox} 62%)`,
    },

    /* ------------------------------------------------------------ spacing */

    /**
     * Derivation. The root is the body step's line box: 20px x 1.6 = 32px.
     * Halved twice and doubled twice, five steps, each named for what it
     * separates rather than for its size:
     *
     *   inline    8px  = 32 / 4   things sharing one line
     *   stack    16px  = 32 / 2   stacked lines of a single thought
     *   group    32px  = 32       members of one group
     *   block    64px  = 32 x 2   blocks within a section
     *   section 128px  = 32 x 4   a section's own padding
     *
     * Because a section pads both its top and its bottom, two adjacent
     * sections sit 256px apart — the largest gap on the page is arithmetic, not
     * a number anyone typed.
     *
     * Subtraction: Tailwind's default spacing scale is gone with it. There is
     * no `p-4`, no `gap-6`, no `mt-2`. Those are ranks on a ruler; these five
     * are relationships, which is the only reason a reader can tell that the
     * page container, the section and the panel inside it are not all padded
     * by the same number.
     */
    spacing: {
      0: '0px',
      inline: '0.5rem',
      stack: '1rem',
      group: '2rem',
      block: '4rem',
      section: '8rem',
    },

    /* -------------------------------------------------------------- width */

    /**
     * Derivation, measure first and the track after it — the column that has to
     * be readable is the fixed point, and the container is what follows.
     *
     *   measure  65 characters x 0.5em x 20px = 650px
     *   wide     measure x 2 + block(64px)    = 1364px
     *
     * The 0.5em is the conversion factor this scale uses, not a measured
     * advance width of IBM Plex Sans. Measuring it would move `measure` by a
     * few pixels inside a band that is 60 to 70 characters wide anyway, so the
     * precision would be false.
     *
     * `wide` is the width at which two full measures fit side by side with a
     * block between them. Nothing on this page renders two measures side by
     * side; `wide` is the outer track, and the asymmetric layouts inside it
     * take unequal fractions of it. That is the point of an outer track.
     *
     * Subtraction: no `page` token between the two, and no `full`. `page` was
     * drafted at measure + 2 x section = 906px and nothing rendered at it —
     * prose sections take `measure`, everything else takes `wide` — so it
     * survives only as the `lap` breakpoint below, where that number is doing
     * work. `max-w-full` went the same way: it was declared out of habit and
     * never typed.
     */
    maxWidth: {
      measure: '650px',
      wide: '1364px',
    },

    /**
     * Derivation: 906px = measure(650) + 2 x section(128). Below it the prose
     * column cannot reach its measure with full section gutters, so the page is
     * one column; at and above it, the asymmetric two-column arrangements in
     * Hero and Settlement have room.
     *
     * Subtraction: one breakpoint, not five. The framework's rank-named
     * defaults are gone. This page has one layout change, so it declares one
     * place for it to happen, and `lap` says which reading position it is for.
     */
    screens: {
      lap: '906px',
    },

    /* ------------------------------------------------------------- radius */

    /**
     * Derivation, and it is a real concentric pair rather than one manufactured
     * to satisfy the equation.
     *
     * Settlement.tsx frames an inner surface inside a congo panel whose only
     * gap is its `inline` padding — the inner block sits flush in the outer
     * corner. That is the one place on this page where two curves have to stay
     * parallel, and there:
     *
     *   panel = card + inline = 4px + 8px = 12px
     *
     * Change that padding and `panel` moves with it. Nothing else in this tree
     * is concentric with anything, and nothing else takes its radius from the
     * equation.
     *
     * Judgment (root 3) for `card` at 4px, which is the seed the equation
     * starts from: a gig poster is cut, not rounded. 4px is the smallest radius
     * that still reads as a decision rather than as a corner nobody touched,
     * and it disappears entirely at arm's length, which is correct.
     *
     * `pill` is outside the arithmetic — its radius comes from its own height,
     * so it neither takes from the scale nor gives to it. The buttons and the
     * settlement-mode controls use it.
     */
    borderRadius: {
      card: '4px',
      panel: '12px',
      pill: '9999px',
    },

    /* ---------------------------------------------------------- elevation */

    /**
     * Subtraction: no levels. Nothing on this page floats above its neighbour.
     * There is no modal, no dropdown, no sticky bar and no card that needs to
     * lift; the panel in Settlement separates from the ground with a saturated
     * fill and the rules separate with a border, both at no cost.
     *
     * The second reason is a fact about the ground: on #120C18 a black shadow
     * has almost nothing to darken. The way to get elevation on a page this
     * dark is a light glow, which is a different visual language than the one
     * root 3 chose, and adding it to paper over an invisible shadow would be
     * two decisions where nobody made one.
     *
     * Empty rather than absent, so `shadow-md` does not compile either.
     */
    boxShadow: {},

    /* ------------------------------------------------------------- motion */

    /**
     * Root 3 is expressive, and this page spends that on the palette and the
     * type rather than on movement: it is long, it is read while someone
     * decides whether to trust it, and uninvited motion during a read is an
     * interruption. One duration, and it belongs to pointer and touch feedback
     * on the controls.
     *
     * Platform fact: everything using it is a transition on interactive state,
     * never a keyframe, so a reader who moves off a control halfway retargets
     * from where the element is instead of restarting a timeline.
     *
     * Abstention: no `enter` and no `leave` duration. The rule that an exit
     * runs shorter than its entrance governs things that mount and unmount, and
     * nothing in this tree does — Settlement renders its three modes by
     * swapping content in place, deliberately without a fade. Declaring the
     * pair here so the file looks complete would be two dead tokens.
     *
     * Abstention: no scroll-triggered reveals anywhere on this page. They were
     * available, they are the reflex for a long scroll, and they were not used:
     * every one of them hides content from a reader who is already scrolling
     * toward it, to buy an effect the reader did not ask for.
     *
     * index.css turns this off under prefers-reduced-motion.
     */
    transitionDuration: {
      press: '90ms',
    },
  },
  plugins: [],
} satisfies Config
