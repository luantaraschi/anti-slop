import type { Config } from "tailwindcss";

/**
 * Mise — the decided theme.
 *
 * `theme` is REPLACED, not extended. Extending would leave Tailwind's undecided
 * scales sitting beside the decided ones, so a station panel could still be
 * built entirely out of `bg-slate-800 p-4 rounded-lg` — values nobody picked.
 * Replacing makes those stop compiling.
 *
 * Cost of doing it this way, stated because it will bite someone: an
 * unrecognised utility is dropped silently. A callsite that types `p-4` gets no
 * padding and no warning. The scales below are therefore complete enough to
 * build the whole screen from, and nothing outside them is used.
 *
 * One theme. See `colors` for why there is no dark variant.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    /**
     * Six colours, named for the kitchen this board hangs in.
     *
     * There is no `primary`/`secondary`: rank names record an order, not a
     * decision. There is no colour for "confirmed" either — see the subtraction
     * at `apron`.
     *
     * ONE THEME, AND IT MEANS IT. A shift board is a fixed installation: a
     * kitchen office laptop and a screen bolted to the pass. The room's light
     * does not change what the board should be, and every kitchen display
     * system in the field is light-on-dark for the same reason — a bright panel
     * at the pass throws light onto the line. Accepted cost: a chef who prefers
     * light gets no switch. Rejected the alternative because a dark theme
     * declared on the background and nowhere else is worse than one theme meant.
     *
     * Every ratio below was computed, not estimated (sRGB relative luminance,
     * WCAG 2.1 formula). Two rules fall out of the measurements and are
     * enforced in the components:
     *   1. `apron` as TEXT renders only on `range` (6.18:1). On `steel` it is
     *      4.21:1 and fails the 4.5:1 bar, so panel headers are `chalk`.
     *   2. `flame` and `ticket` as a FILL take `range` text, never `chalk`
     *      (chalk on flame is 3.04:1 and fails).
     */
    colors: {
      transparent: "transparent",
      current: "currentColor",

      /** The board itself, and the slot cut into a panel. Near-black, warmed
       *  a half-step off neutral so it reads as cast iron, not as a monitor
       *  that has been switched off. */
      range: "#0E1013",

      /** The station panel. 1.47:1 against `range` — well under the 3:1
       *  non-text bar, and that is deliberate rather than missed. A fill light
       *  enough to hit 3:1 here lands around #4A5259, which drags `flame` on it
       *  down to 2.21:1 and destroys the one signal this board exists to carry.
       *  So the panel's BOUNDARY is a 1px `apron` rule (4.21:1, clears the bar)
       *  and the fill is reinforcement underneath it. Accepted cost: on a badly
       *  calibrated wall panel the fill step may vanish; the rule will not. */
      steel: "#2B3239",

      /** Secondary text, the one rule in the system, and the word "IN".
       *  Three jobs, which is why there is no seventh colour. */
      apron: "#8B949C",

      /** Primary text. 16.06:1 on `range`, 10.94:1 on `steel`. Not #FFF: pure
       *  white at 20px on near-black haloes at the distance this is read from. */
      chalk: "#E9ECEE",

      /** An outstanding ticket on the rail — a call sent, not yet answered.
       *  9.20:1 on `range`. */
      ticket: "#E9A83E",

      /** A hole in the line: a station under its headcount, or a decline.
       *  5.29:1 on `range`. */
      flame: "#E45A3E",

      /**
       * SUBTRACTION — no colour for "confirmed".
       *
       * Confirmed is most of the board on a good day. Painting it green would
       * put the loudest thing on screen on the state that needs no attention,
       * and leave `ticket` and `flame` competing with it for the eye. Confirmed
       * is the resting state: it renders in `apron`, the quietest colour here.
       *
       * Also subtracted: every rank ramp Tailwind ships (slate, zinc, indigo,
       * and the rest). Removed rather than left unused so that a page cannot be
       * built out of them.
       */
    },

    /**
     * DERIVATION. Body is 13px: root 4 says very dense, and 13px is the floor
     * at which a laptop at arm's length still resolves. Below it the kitchen
     * office fails before the pass screen does.
     *
     * Two bands, because roots 3 and 4 pull opposite ways here and the
     * resolution is not one ratio.
     *
     * Operational band — the chrome, ratio 1.15 off body:
     *   note    = 13 / 1.15 = 11.3 -> 11
     *   body    = 13
     *   station = 13 x 1.15 = 14.95 -> 15
     *
     * Distance band — the two things read from across a kitchen. Root 3 buys
     * the jump that root 4 would not otherwise pay for:
     *   name   = body x 1.5 = 19.5 -> 20   (who is on the station)
     *   figure = name x 1.4 = 28           (what the board costs)
     *
     * Five steps, named for what they carry. `sm`/`md`/`lg` would restate the
     * number the value already gives.
     *
     * SUBTRACTION: Tailwind ships text-xs through text-9xl. Nothing on this
     * screen is a heading above 28px, so no step above `figure` is declared.
     *
     * The body line box, 18px, is the root of the spacing ladder below.
     */
    fontSize: {
      note: ["11px", "15px"],
      body: ["13px", "18px"],
      station: ["15px", "18px"],
      name: ["20px", "24px"],
      figure: ["28px", "28px"],
    },

    /**
     * DERIVATION, from the body line box of 18px.
     *
     *   hair  = 18 / 4 = 4.5   inside a line's rhythm
     *   row   = 18 / 2 = 9     between rows, and panel padding
     *   block = 18             the body line: between panels, page gutter
     *   bay   = 18 x 2 = 36    used once, below
     *
     * The failure this prevents is one value at every nesting depth. Here the
     * page gutter is `block`, the station panel's padding is `hair`, and the
     * padding inside a chip is `row` — three depths, three values. The panel
     * takes the smallest of them because it is a frame around slots, not a
     * container of prose, and because `hair` is what makes the chip radius and
     * the panel radius concentric.
     *
     * `row` is also the gap between panels and the gap between chips. That is
     * reuse across siblings, not repetition down the nesting, and it is what
     * makes the 40px target arithmetic in CookChip.tsx land exactly.
     *
     * `bay` separates the board from the cost rail and nothing else. That gap
     * is the only one on screen dividing two different questions — who is on,
     * and what it costs — so it gets the only doubling.
     *
     * SUBTRACTION: Tailwind's default spacing scale runs 0 through 96 with
     * half-steps and `px`. Four steps are declared here and the rest are
     * removed rather than left available, because an available step is a step
     * somebody reaches for instead of deciding.
     */
    spacing: {
      "0": "0px",
      hair: "4.5px",
      row: "9px",
      block: "18px",
      bay: "36px",
    },

    /**
     * DERIVATION.
     *
     *   edge  = 2px          the smallest curve that still reads as chosen at
     *                        13px rather than as a rendering artefact
     *   panel = edge + hair  = 2 + 4.5 = 6.5px
     *
     * `panel` is concentric arithmetic and only that: the cook chips sit flush
     * in the station panel's corners with `hair` as the only gap between them,
     * so outer = inner + padding is what keeps the two curves parallel. Change
     * the panel's padding and this number moves with it — change both.
     *
     * ABSTENTION: there is no pill radius. A pill takes its radius from its own
     * height rather than from a scale, so it neither takes from this ladder nor
     * gives to it — and after the reduction pass removed the initial discs from
     * the cook chips, nothing in the tree is round. A `dot: 9999px` sitting here
     * unused would be a decision waiting to be made by whoever reached for it.
     */
    borderRadius: {
      none: "0px",
      edge: "2px",
      panel: "6.5px",
    },

    /**
     * `bar` = hair = 4.5px. The state stripe down a chip's left edge is a
     * border, not a box, so it is measured on this scale rather than spacing —
     * but it is the same value, and moving `hair` should move it.
     */
    borderWidth: {
      "0": "0px",
      rule: "1px",
      bar: "4.5px",
    },

    /**
     * JUDGMENT, from root 2 (terse, operational) and root 3 (instrumental, read
     * at distance). Two families, each with a job.
     *
     * Both are native stacks. A kitchen's network is the worst in the building
     * and the board is consulted at the moment service starts; a webfont that
     * has not arrived leaves the pass screen unreadable exactly when it matters.
     * That trade is not worth one consistent face.
     *
     * ACCEPTED COST: a chef on Windows and a chef on a Mac see different
     * letterforms. Accepted, because the board is read for names and numbers,
     * and both stacks resolve those at 20px. Not accepted quietly — this is the
     * reason, and if Mise ever ships a self-hosted face it should be for
     * distance legibility, not for consistency.
     *
     * `figure` is monospaced because the labour total changes as the board
     * changes and a proportional face makes a running number dance under the
     * eye. `tabular-nums` in globals.css covers the counts set in `board`.
     */
    fontFamily: {
      board: [
        "ui-sans-serif",
        "Segoe UI Variable Text",
        "Segoe UI",
        "-apple-system",
        "Roboto",
        "Helvetica Neue",
        "sans-serif",
      ],
      figure: [
        "ui-monospace",
        "Cascadia Mono",
        "SF Mono",
        "Consolas",
        "Liberation Mono",
        "monospace",
      ],
    },

    /**
     * JUDGMENT, from root 3. This board has six colours and three of them are
     * spoken for by state, so weight is most of the hierarchy that is left.
     * Two weights, named for what they do rather than for where they sit on a
     * ramp: `read` is the resting weight, `spot` is anything that has to be
     * picked out of a full board from across the room — cook names, station
     * labels, state words, controls.
     *
     * The figures in the cost rail take neither. At 28px in a monospaced face
     * they are already the largest thing on screen, and weight added on top of
     * size is emphasis paid for twice.
     *
     * ACCEPTED COST: a native stack is not guaranteed to ship 600. Where it
     * does not, the browser snaps to 700 or synthesises, and `spot` gets
     * heavier than intended on that machine. Accepted — the failure mode is
     * "more emphatic", which on this screen is the harmless direction.
     *
     * SUBTRACTION: Tailwind's `thin` through `black` ramp names nine positions
     * on a scale. Nothing on this board needs a third weight, and a third
     * weight available is a third weight somebody reaches for.
     */
    fontWeight: {
      read: "400",
      spot: "600",
    },

    /**
     * Line heights ride on the `fontSize` tuples above, which is where they
     * belong: a step's leading is part of the step, not a separate choice made
     * at the callsite.
     *
     * `none` is the one override, for elements that are exactly one line — a
     * cook's name, the service in the rail, the labour figure — where the
     * tuple's leading adds vertical space root 4 does not have. SUBTRACTION:
     * Tailwind's `tight` through `loose` ramp is not declared, because a
     * second leading for a step would make the step two steps.
     */
    lineHeight: {
      none: "1",
    },

    /**
     * Two values, named for the job. `label` is the tracking that keeps a
     * 15px uppercase station name from setting solid at distance; `flat` is
     * everything else. SUBTRACTION: Tailwind's `tighter`-to-`widest` ramp,
     * which names relative amounts rather than the two jobs this screen has.
     */
    letterSpacing: {
      flat: "0em",
      label: "0.08em",
    },

    /**
     * DERIVATION. `measure` is 65ch — the top of the 60-to-70 character band —
     * expressed in `ch` so the conversion to pixels is done by the browser
     * against the actual body step rather than by me against an assumed average
     * character width. An assumed average would be a measurement I did not
     * measure.
     *
     * The page width is NOT derived from this. On a board, the column that has
     * to be readable is not prose: it is five station panels plus a bench, and
     * they take the width they need — the page is `100vw`, and root 4 spends
     * all of it.
     *
     * `measure` therefore has one callsite in the whole tree, the paragraph in
     * app/not-found.tsx. That is the only prose Mise renders. It is declared
     * rather than written inline there because the next sentence this product
     * has to say should not re-derive the column it sits in.
     */
    maxWidth: {
      full: "100%",
      measure: "65ch",
    },

    /**
     * ABSTENTION — no shadow scale, no elevation levels.
     *
     * Counted the surfaces that genuinely float: none. Panels rest on the
     * board and are separated by a rule. Drag is native HTML5 drag-and-drop, so
     * the lifted object under the cursor is drawn by the browser's own drag
     * image, not by anything in this tree — there is no surface here for a
     * shadow to lift.
     *
     * Root 3 seals it: a shadow is invisible from across a kitchen, so on the
     * one screen where depth would have to do work, it does none.
     */
    boxShadow: {
      none: "none",
    },

    /**
     * PLATFORM FACT. One duration, and it is a transition rather than a
     * keyframe: a chef who drops a cook on the wrong station and drags them
     * straight off again retargets from where the chip is, instead of watching
     * a timeline restart. Everything that moves on this board is driven by
     * interactive state, so everything that moves is a transition.
     *
     * 140ms is long enough for a colour change to read as a change rather than
     * as a repaint, and short enough that a chef mid-drag is never waiting on
     * it.
     *
     * ABSTENTION — there is no exit duration. The rule that an exit is shorter
     * than its entrance governs surfaces that mount and unmount, and this board
     * has none: chips move between panels by re-render, and the object under
     * the cursor during a drag is the browser's own drag image. Declaring a
     * 90ms `out` that nothing uses would record a decision this screen never
     * had to make. If a panel is ever added, it gets one.
     */
    transitionDuration: {
      in: "140ms",
    },
  },
  plugins: [],
};

export default config;
