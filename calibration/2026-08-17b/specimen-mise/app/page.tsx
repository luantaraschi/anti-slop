"use client";

import { useMemo, useState } from "react";
import { CookChip } from "@/components/CookChip";
import { CostRail } from "@/components/CostRail";
import { ServiceRail } from "@/components/ServiceRail";
import { StationPanel } from "@/components/StationPanel";
import {
  OPENING_BOARD,
  STATIONS,
  awaitingCount,
  cook,
  covered,
  isEligible,
  labour,
  move,
  onCount,
  placementsOn,
  shortBy,
  shortStations,
  type Placement,
  type StationId,
} from "@/lib/service";

/**
 * REDUCTION PASS — removed from this screen, and why.
 *
 * A date stepper in the service rail. The brief says the board shows one
 * service at a time and never says how you reach another. Chevrons either side
 * of the date were the template asking for a nav bar, not the content asking.
 * Recorded in roots.md as a question for the client instead of guessed at.
 *
 * The 14-day horizon does not render on this screen either. It is real, it is
 * in the inventory, and there is nothing on a single service's board for it to
 * be true about. It carries `app/not-found.tsx` instead, where it is the actual
 * reason the page is empty.
 */

export default function Board() {
  const [board, setBoard] = useState<Placement[]>(OPENING_BOARD);
  const [held, setHeld] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const short = useMemo(() => shortStations(board), [board]);
  const cost = useMemo(() => labour(board), [board]);

  function put(to: StationId | null) {
    if (held === null) return;
    if (!isEligible(held, to)) return;
    setBoard((b) => move(b, held, to));
    setHeld(null);
    // Any move invalidates the calls that went out. Publishing again is the
    // only way the phones hear about it.
    setSent(false);
  }

  /**
   * The stated condition. Non-empty disables Publish and becomes its label, so
   * the rule and the words for it are the same value. A board with a hole in it
   * is not a board you send to ten phones.
   */
  const blockedReason = short.length === 0 ? "" : `${short.join(" + ")} short`;

  return (
    <main
      className="flex h-full flex-col p-block"
      onKeyDown={(e) => {
        if (e.key === "Escape") setHeld(null);
      }}
    >
      <ServiceRail blockedReason={blockedReason} sent={sent} onPublish={() => setSent(true)} />

      {/* Six columns, no scroll. The bench is narrower than a station because it
          holds names and not slots. */}
      <div className="mt-block grid min-h-0 flex-1 grid-cols-[0.8fr_repeat(5,1fr)] gap-row">
        <StationPanel
          label="Off board"
          dropLabel={held === null ? "" : `Take ${cook(held).name} off`}
          dropEnabled={held !== null}
          onDrop={() => put(null)}
        >
          {placementsOn(board, null).map((p) => (
            <li key={p.cookId}>
              <CookChip
                cook={cook(p.cookId)}
                // No `state` and no `cost` on the bench: a cook here has no
                // station, so no hours to cost and no call to be waiting on.
                // What a chef needs instead is where this one is allowed to go.
                signedOff={cook(p.cookId).signedOff.join(" · ")}
                selected={held === p.cookId}
                onSelect={() => setHeld(held === p.cookId ? null : p.cookId)}
              />
            </li>
          ))}
        </StationPanel>

        {STATIONS.map((s) => {
          const rows = placementsOn(board, s.id);
          const gap = shortBy(board, s.id);
          const eligible = held !== null && isEligible(held, s.id);

          return (
            <StationPanel
              key={s.id}
              label={s.id}
              covered={covered(board, s.id)}
              needs={s.needs}
              short={gap}
              dropLabel={
                held === null
                  ? ""
                  : eligible
                    ? `Put ${cook(held).name} on`
                    : `${cook(held).name} not signed off`
              }
              dropEnabled={eligible}
              onDrop={() => put(s.id)}
            >
              {rows.map((p) => (
                <li key={p.cookId}>
                  <CookChip
                    cook={cook(p.cookId)}
                    state={p.state}
                    cost={cook(p.cookId).rate * s.hours}
                    selected={held === p.cookId}
                    onSelect={() => setHeld(held === p.cookId ? null : p.cookId)}
                  />
                </li>
              ))}
            </StationPanel>
          );
        })}
      </div>

      <CostRail
        labour={cost}
        on={onCount(board)}
        awaiting={awaitingCount(board)}
        short={short.length}
      />
    </main>
  );
}
