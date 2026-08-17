import type { ButtonHTMLAttributes } from "react";

/**
 * SUBTRACTION, twice.
 *
 * A stock shadcn button ships `destructive`, `outline`, `secondary`, `ghost`
 * and `link` alongside its default, and a `size` prop. None are declared here.
 *
 * There was a second variant until the reduction pass. The rail carried a
 * "Message all" button beside Publish, and it went: the calls go out when the
 * board is published, so a separate button to send them was a second call to
 * action the content never asked for. That left this component with a single
 * callsite — the Publish control in ServiceRail.tsx — so the `variant` prop
 * went with it.
 *
 * `QUIET` survives as a bare constant because app/not-found.tsx puts the shape
 * on a `<Link>`, and a link cannot be a `<button>`.
 *
 * (The board renders plenty of other `<button>` elements — every cook chip and
 * every drop zone is one. They are not this component: they are chips and
 * slots, sized and coloured by what they hold, and forcing them through a
 * Button variant would have been the template asking.)
 */

/**
 * The one control shape on this board.
 *
 * 31px drawn + `hair` above and below = a 40px target. The pseudo-element buys
 * the extra 9px without taking a pixel of layout, which root 4 does not have to
 * spare.
 */
export const CONTROL_SHAPE = [
  "relative h-[31px] shrink-0 rounded-edge px-row",
  "after:absolute after:-top-hair after:-bottom-hair after:left-0 after:right-0 after:content-['']",
  "text-body font-spot uppercase tracking-label",
  "transition-colors duration-in",
].join(" ");

/**
 * PLATFORM FACT. Hover does not exist on a touchscreen, and a screen bolted to
 * the pass is as likely to be a touch panel as a monitor. Every hover below
 * carries its pressed state in the same declaration — a control that answers
 * only hover says nothing back to half the people using this.
 *
 * `CALL` dims chalk to apron under the finger rather than changing hue, which
 * root 3 would not pay for. Measured: apron on range is 6.18:1, so the label
 * survives the press.
 */
const CALL = "bg-chalk text-range hover:bg-apron active:bg-apron";

export const QUIET =
  "bg-transparent text-apron border-rule border-apron hover:text-chalk hover:border-chalk active:text-chalk active:border-chalk";

/**
 * The disabled look and the disabled attribute come from this one place and
 * move together. Split them and a control eventually looks live and is not, or
 * looks dead and fires.
 *
 * Not leaning on WCAG's inactive-control exemption: apron on range is 6.18:1,
 * so a chef reads why the board will not publish from across the office.
 */
const DISABLED = "bg-range text-apron border-rule border-apron cursor-not-allowed";

/**
 * SUBTRACTION. This took a `reason` prop, rendered as a `title`, until the
 * reduction pass moved the reason into the label — see ServiceRail.tsx. A
 * tooltip repeating the words already on the button is a third telling that
 * only pointer users get.
 */
type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ disabled = false, className = "", children, ...rest }: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[CONTROL_SHAPE, disabled ? DISABLED : CALL, className].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
