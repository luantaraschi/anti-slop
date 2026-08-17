"use client";

import { SERVICE, money } from "@/lib/service";

/**
 * What the board costs, recomputed on every change.
 *
 * Root 1 says Mise shows labour "against" the service's forecast covers, and
 * per-cover is what that word denotes. It is arithmetic over two figures the
 * brief supplies, not a third metric.
 */
function Figure({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-note uppercase tracking-label text-apron">{label}</span>
      <span className="font-figure text-figure leading-none text-chalk">{value}</span>
    </div>
  );
}

type Props = {
  labour: number;
  on: number;
  awaiting: number;
  short: number;
};

export function CostRail({ labour, on, awaiting, short }: Props) {
  const perCover = labour / SERVICE.forecastCovers;

  return (
    // `bay` is the only doubling in the spacing ladder and this is the only
    // place it is spent: the gap between what the board says and what the board
    // costs, which are two different questions.
    <footer className="mt-bay flex shrink-0 items-end gap-block border-t-rule border-apron pt-row">
      {/* No animated count-up on this number. It is read, not watched, and a
          figure that is still moving when the eye lands on it costs a chef the
          read. Root 3: sober. */}
      <Figure label="Labour" value={money(labour)} />
      <Figure label="Per cover" value={money(perCover)} />
      <Figure label="Forecast covers" value={String(SERVICE.forecastCovers)} />

      <span className="flex-1" />

      {/* SUBTRACTION. A colour legend stood here — a swatch and a word for each
          of the three states. It went in the reduction pass: every chip on the
          board already carries its state as a word, in the same colour, at the
          same size. The legend explained a second time what the board says
          once, which root 2 forbids in as many words. */}
      <div className="flex items-center gap-block text-body uppercase tracking-label">
        <span className="text-apron">{on} on</span>
        <span className="text-ticket">{awaiting} no reply</span>
        <span className={short > 0 ? "text-flame" : "text-apron"}>{short} short</span>
      </div>
    </footer>
  );
}
