/**
 * The parts of an interactive control that are platform facts rather than
 * style, in one place so that no callsite re-decides them.
 *
 * Two components import this — `Action` and the stepper button inside
 * src/Pricing.tsx. Two callsites is the threshold: a class stack typed at
 * more than one place has been decided more than once, and the second
 * decision is free to drift from the first.
 *
 * SUBTRACTION (reduction pass): a `disabledLook` string lived here too and
 * has moved into src/Pricing.tsx. Nothing else on the site can be disabled —
 * the two Actions are anchors, and an anchor has no `disabled` attribute to
 * pair a look with — so it had one consumer and did not meet the threshold
 * this file exists to enforce.
 */

/**
 * PLATFORM FACT (target): a touch target is at least 40px in its smallest
 * dimension even when the thing drawn inside it is smaller.
 *
 * PLATFORM FACT (focus): a keyboard user needs an indicator that is not the
 * hover colour, because they never produce a hover. `outline` rather than a
 * ring: outline follows border-radius natively and costs no box-shadow, and
 * this theme declares no shadow scale to borrow one from.
 *
 * PLATFORM FACT (transition): interactive state moves on a transition, never
 * a keyframe. A keyframe restarts its timeline when the state flips; a
 * transition retargets from wherever the colour currently is, so a reader who
 * moves off a control halfway through does not watch it finish arriving
 * somewhere it is no longer going. `duration-state` is the theme's only
 * duration.
 *
 * PLATFORM FACT (hover): hover does not exist on a touchscreen. Much of this
 * audience opens the page on a phone in a field, and a control that answers
 * only `hover:` says nothing back to any of them. So every `hover:` on this
 * site is written with its `active:` twin in the same string — not the same
 * file, the same string — because that is the only arrangement in which
 * deleting one and forgetting the other looks wrong. The colours differ per
 * variant, so the pairs themselves live in Action and in StepButton; this is
 * the rule they follow.
 */
export const control = [
  'inline-flex items-center justify-center',
  'min-h-target',
  'outline-none',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water-mark',
  'transition-colors duration-state',
].join(' ')
