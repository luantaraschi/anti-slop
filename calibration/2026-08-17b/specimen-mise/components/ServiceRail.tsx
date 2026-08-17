"use client";

import { Button } from "@/components/ui/Button";
import { SERVICE } from "@/lib/service";

/**
 * SUBTRACTION — removed in the reduction pass:
 *
 * "Synced 09:12". A timestamp saying the screen is current is the template's
 * reflex, not the content's: the board is live, and a chef who cannot trust it
 * is not reassured by a clock.
 *
 * "Message all", a second button beside Publish. The calls go out when the
 * board is published — that is what publishing IS — so a separate control to
 * send them was a second call to action nothing asked for. See Button.tsx,
 * where removing it took the variant prop with it.
 */
type Props = {
  /** Non-empty when the board cannot be published, and it is what the button
   *  says while it cannot. One string, one place. */
  blockedReason: string;
  /** True once the calls are out and nothing has changed since. */
  sent: boolean;
  onPublish: () => void;
};

export function ServiceRail({ blockedReason, sent, onPublish }: Props) {
  const blocked = blockedReason !== "";

  return (
    <header className="flex shrink-0 items-center gap-block border-b-rule border-apron pb-row">
      <span className="font-figure text-station font-spot uppercase tracking-label text-chalk">
        Mise
      </span>

      {/* The service. One at a time, so it is a statement, not a control. */}
      <h1 className="text-name font-spot leading-none text-balance text-chalk">
        {SERVICE.name}
        <span className="text-apron"> · </span>
        {SERVICE.day}
        <span className="text-apron"> · </span>
        {SERVICE.startsAt}
      </h1>

      <span className="flex-1" />

      {/* Root 1: confirmations are due 48 hours before service. This is that
          deadline, counted down, because a chef acts on hours left and never on
          a timestamp. */}
      <span className="text-body uppercase tracking-label text-ticket">
        Calls close in {SERVICE.callsCloseInHours}h
      </span>

      {/* The disabled condition is stated by the label, not beside it.
          A sentence here — "sauce short, fill before publishing" — was the
          third telling on one screen: the sauce panel already carries a flame
          stripe and a SHORT badge, and the cost rail already counts it. Root 2:
          it never explains twice. The control says what is true of the control,
          which is the one thing neither of the others says. */}
      <Button disabled={blocked || sent} onClick={onPublish}>
        {blocked ? blockedReason : sent ? "Calls out" : "Publish"}
      </Button>
    </header>
  );
}
