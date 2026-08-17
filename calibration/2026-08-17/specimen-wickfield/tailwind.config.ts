import type { Config } from 'tailwindcss'

/* =====================================================================
   Wickfield theme.

   Almost everything below sits on `theme` and not on `theme.extend`, on
   purpose. `extend` leaves the framework's own scale in place beside the
   product's, and a page can then be built entirely out of values nobody
   picked. Replacing the scale means `p-4`, `text-lg`, `rounded-md`,
   `shadow-lg` and `bg-slate-500` do not compile — which is the point.

   Roots this file is derived from:
     Root 3, temperature — sober-institutional. Sets the shadow scale (none),
       the motion budget (one transition), and the fact that only `wilt` is
       saturated.
     Root 4, density — dense. Sets the 16px body, the 1.2 ratio, and through
       them the 6px spacing ladder and the 46rem page column.

   Colour values themselves are in src/index.css, in both themes.
   ===================================================================== */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    /* --- colour ------------------------------------------------------
       Five product colours, plus the two CSS keywords. Replacing `colors`
       rather than extending it removes the 22-hue framework palette, so
       `bg-slate-50` and `text-indigo-600` are compile errors and no surface
       can be coloured without naming it here first.

       SUBTRACTION: `white` and `black` are not declared. Neither exists in
       this palette — the lightest surface is `loam-bed` (#fffcf6) and the
       darkest text is `furrow` (#211d17). Leaving the two absolutes
       available would let a callsite reach past the warm neutrals for a
       cold one without noticing.
       ---------------------------------------------------------------- */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      loam: {
        field: 'var(--loam-field)',
        bed: 'var(--loam-bed)',
      },
      furrow: 'var(--furrow)',
      silt: {
        rule: 'var(--silt-rule)',
        quiet: 'var(--silt-quiet)',
      },
      water: {
        mark: 'var(--water-mark)',
        wash: 'var(--water-wash)',
      },
      wilt: {
        mark: 'var(--wilt-mark)',
        wash: 'var(--wilt-wash)',
      },
      'ink-on-water': 'var(--ink-on-water)',
    },

    /* --- type family -------------------------------------------------
       Named for what each face carries, not for its classification.
       `font-sans` and `font-serif` are gone; a callsite has to say whether
       it is setting a bulletin heading or field text.

       Root 3: a product trusted with someone's valves should read like the
       printed irrigation guidance its audience already reads, not like the
       app store. Headings go to a serif for that reason.

       ACCEPTED COST: no webfont is loaded. Georgia ships on Windows, macOS
       and iOS; `ui-serif` catches Android and most Linux desktops with a
       different face, so on those machines the headings are not the face
       that was chosen. Accepted rather than putting a 40KB download in front
       of a grower opening this on a rural connection — which is most of
       them, and is the audience.
       ---------------------------------------------------------------- */
    fontFamily: {
      bulletin: ['ui-serif', 'Georgia', '"Times New Roman"', 'serif'],
      field: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },

    /* --- type scale --------------------------------------------------
       Root 4 sets the body at 1rem/16px and the ratio at 1.2 — a dense page
       wants small steps, because a large ratio spends vertical space on
       announcing hierarchy that the layout has already announced.

       Five steps, because this site renders five distinct kinds of text and
       no more. Each is named for its job; `sm`/`lg` would restate the number
       that is already sitting next to it.

         aside   16 / 1.2      = 13.33 → 13px  qualifiers, small print
         body    root          =         16px  prose
         section 16 × 1.2²     = 23.04 → 23px  section headings
         figure  16 × 1.2³     = 27.65 → 28px  the monthly total
         banner  16 × 1.2⁴     = 33.18 → 33px  the one h1

       Rounded to whole pixels so the scale lands on device pixels at the
       default root size rather than on thirds of one.

       DERIVATION — line heights. Every line box is a whole multiple of 6px,
       the `tight` spacing step, so text set in different steps still sits on
       one rhythm:
         aside   18px (3 × 6)   ratio 1.38 — small text needs the most air
         body    24px (4 × 6)   ratio 1.50 — and is itself the `stack` step
         section 30px (5 × 6)   ratio 1.30
         figure  30px (5 × 6)   ratio 1.07 — one line, never wraps
         banner  42px (7 × 6)   ratio 1.27 — set to wrap to two lines

       SUBTRACTION: the framework offers text-xs through text-9xl. None is
       declared and none is used. Nine of those steps have no content on this
       site; declaring them would leave a hierarchy larger than the product's.

       ACCEPTED COST — the banner is 33px and stays 33px at every width. Next
       to a landing page built on a 1.333 ratio it will read as small on a
       desktop monitor. That is what a dense root costs, and it was accepted
       rather than patched with a one-off larger size at a breakpoint, which
       would have put a sixth step in the scale under a different name.

       ABSTENTION — no letter-spacing at any step. Both `section` and `banner`
       carried a negative track and both were removed in the reduction pass:
       at 23px and 33px the corrections came to a tenth and a third of a
       pixel, which is a number nobody could verify was there. Georgia is
       drawn with its own fit, and the tracking that would earn its place
       starts above the top of this scale.
       ---------------------------------------------------------------- */
    fontSize: {
      aside: ['0.8125rem', { lineHeight: '1.125rem' }],
      body: ['1rem', { lineHeight: '1.5rem' }],
      section: ['1.4375rem', { lineHeight: '1.875rem' }],
      /* `figure` is the only step that also carries a numeric feature — see
         the PLATFORM FACT at the total in src/Pricing.tsx. */
      figure: ['1.75rem', { lineHeight: '1.875rem' }],
      banner: ['2.0625rem', { lineHeight: '2.625rem' }],
    },

    /* --- spacing -----------------------------------------------------
       DERIVATION: the root of this ladder is the body line box — 16px × 1.5
       = 24px — and every other step is that halved or doubled. It is a 6px
       ladder, not the framework's 4px one, because it came from this page's
       body size rather than from a round number.

         tight   24 ÷ 4 =  6px
         inline  24 ÷ 2 = 12px
         stack   24     = 24px   the body line box itself
         block   24 × 2 = 48px
         section 24 × 4 = 96px

       Named for what they separate, not for how far. `p-4` would have been a
       measurement; `p-stack` is a statement that this gap is one line of
       body text.

       SUBTRACTION: no step above 96px. `section` is already the largest gap
       the page uses, at its top-level boundaries; a 192px step would only
       exist to be available.

       SUBTRACTION (reduction pass): `px: 1px` went. Every hairline on this
       page is a border, which reads `borderWidth` and not this scale, so it
       was a step nothing measured with.
       ---------------------------------------------------------------- */
    spacing: {
      0: '0px',
      tight: '0.375rem',
      inline: '0.75rem',
      stack: '1.5rem',
      block: '3rem',
      section: '6rem',
    },

    /* --- radius ------------------------------------------------------
       DERIVATION, written as the equation it is:

         control = 6px   — the `tight` spacing step. Buttons and the stepper.
         panel   = control + tight padding
                 = 6 + 6 = 12px

       The second line is the whole reason a radius scale is derived rather
       than chosen: the stepper in src/Pricing.tsx sits inside a `water-wash`
       tray with `p-tight` around it, and 6 + 6 is what keeps those two
       curves concentric. Change that padding and this number moves with it.

       SUBTRACTION: no third radius. A third would need a rounded panel
       nested inside another rounded panel, and nothing here nests that deep,
       so the equation has no third term to produce.

       SUBTRACTION: no `full`. A pill's radius comes from its own height, so
       it takes nothing from this scale and gives nothing to it — and this
       page has no pill anyway. A badge and a status chip were both drawn and
       removed in the reduction pass: neither carried a fact the sentence
       beside it was not already carrying.

       SUBTRACTION (reduction pass): `none: 0px` went, and with it the bare
       `rounded` utility, which has no DEFAULT here. Nothing on the page
       un-rounds anything, so it was an escape hatch from a corner nobody was
       stuck in.
       ---------------------------------------------------------------- */
    borderRadius: {
      control: '0.375rem',
      panel: '0.75rem',
    },

    /* --- elevation ---------------------------------------------------
       SUBTRACTION: the whole scale. Count the surfaces on this site that
       genuinely float above their neighbours — a menu over content, a dialog
       over a page, a sticky bar over what it covers — and the count is zero.
       The header does not stick. There is no menu, no dialog, no popover.
       Every panel is a resting surface, and a resting surface separates from
       its neighbour with a 1px `silt-rule` border at no cost.

       `shadow-sm` through `shadow-2xl` therefore do not compile. Neither
       does `shadow-none`: it survived the first draft as an escape hatch and
       went in the reduction pass, because there is no shadow anywhere on the
       site for it to remove.

       The cost of this — panels merging into the page on a dimmed dark
       display — is stated at the bottom of the token block in src/index.css.
       ---------------------------------------------------------------- */
    boxShadow: {},

    /* --- motion ------------------------------------------------------
       Root 3, sober: movement exists here only where it reports the state of
       a control under a finger or a cursor. There is one duration and it is
       used by one thing.

       PLATFORM FACT: interactive state moves on a transition, never a
       keyframe. A keyframe restarts its timeline when the state flips; a
       transition retargets from wherever the element currently is, so a
       reader who moves off a button halfway through its hover does not watch
       it finish arriving somewhere it is no longer going.

       PLATFORM FACT (the second one, and why it has nowhere to live here):
       an exit is shorter than its entrance, because what is leaving has
       already lost the eye to what replaces it. No entrance/exit pair is
       declared — SUBTRACTION — because nothing on this page mounts or
       unmounts. There is no menu, no dialog, no accordion, no toast. The
       rule is real and this page gives it nothing to act on; declaring
       `enter: 200ms / exit: 100ms` here would be two numbers no component
       reads.

       ABSTENTION: no custom easing curve. The one transition is a colour
       ramp over 120ms and no distance. An easing curve on a colour ramp that
       short is not perceivable, so the browser's default is left alone
       rather than replaced by a bezier nobody could verify was better.
       ---------------------------------------------------------------- */
    transitionDuration: {
      /* 120ms: long enough that the colour arrives rather than snaps, short
         enough to still land inside the ~150ms window where a response reads
         as caused by the pointer rather than as a following animation. */
      state: '120ms',
    },

    extend: {
      /* DERIVATION: the page column is the prose measure plus one `section`
         gutter on each side.
           measure 34rem ≈ 66 characters at the body step, the top of the
                   comfortable range for continuous prose
           page    34 + 6 + 6 = 46rem
         Nothing on this site is wider than its prose, so nothing else gets a
         vote in this number. */
      maxWidth: {
        measure: '34rem',
        page: '46rem',
      },

      /* PLATFORM FACT: a touch target is at least 40px in its smallest
         dimension whatever the drawing inside it measures. Named `target`
         rather than added to the spacing ladder, because it is a floor for a
         finger and not a step in a rhythm — putting it in `spacing` would
         have offered 40px as a legitimate gap, which it is not.

         SUBTRACTION (reduction pass): `height: { target }` was declared
         alongside these two and nothing used `h-target`. A target is a
         minimum; a control that sets it as a fixed height cannot grow when
         its label wraps or when the reader has raised their text size. */
      minHeight: { target: '40px' },
      minWidth: { target: '40px' },
    },
  },
  plugins: [],
} satisfies Config
