"use client";

import type { Cook, PlacementState } from "@/lib/service";
import { money } from "@/lib/service";

/**
 * One cook, on a station or on the bench.
 *
 * The state words are the whole vocabulary: IN, NO REPLY, OUT. Root 2 — a sous
 * chef says these out loud at 5pm. "Awaiting confirmation" and "Declined" are
 * the same information in the register of a helpdesk, and they do not fit the
 * chip at 20px either.
 */
const STATE_WORD: Record<PlacementState, string> = {
  confirmed: "IN",
  awaiting: "NO REPLY",
  declined: "OUT",
};

/**
 * The state stripe down the left edge, `bar` wide (= hair, 4.5px).
 *
 * This stripe is doing two jobs at once. It is the state signal readable from
 * the pass, and it is the chip's boundary against the panel — the chip fill is
 * `range` on a `steel` panel, which is 1.47:1 and would not on its own meet the
 * 3:1 bar for a component boundary. Every one of these three clears it against
 * steel: apron 4.21:1, ticket 6.26:1, flame 3.60:1.
 *
 * Confirmed gets `apron`, the quietest colour in the theme, because confirmed
 * is the state that needs no attention. See the subtraction in tailwind.config.
 */
const STATE_BAR: Record<PlacementState, string> = {
  confirmed: "border-l-apron",
  awaiting: "border-l-ticket",
  declined: "border-l-flame",
};

const STATE_TEXT: Record<PlacementState, string> = {
  confirmed: "text-apron",
  awaiting: "text-ticket",
  declined: "text-flame",
};

/**
 * SUBTRACTION. Each chip carried a 20px initial disc before the reduction pass.
 * It restated the name it sat next to, one third the size, at the far end of a
 * chip whose whole job is to make that name readable from the pass. Removed
 * rather than left, because the 20px it took back is 20px of the name.
 *
 * It was the only element in the tree taking a pill radius, so
 * `borderRadius.dot` went with it.
 */
type Props = {
  cook: Cook;
  /** Omitted on the bench. A cook nobody has been asked about has no state to
   *  report, and rendering "NO REPLY" against them would be the board telling a
   *  chef to chase a call that was never made. */
  state?: PlacementState;
  /** Set when the cook is on a station: their cost for this service. Omitted on
   *  the bench, where they have no station and therefore no hours. */
  cost?: number;
  /** Set on the bench instead: where this cook may be put. */
  signedOff?: string;
  selected: boolean;
  onSelect: () => void;
};

export function CookChip({ cook, state, cost, signedOff, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", cook.id);
        e.dataTransfer.effectAllowed = "move";
        onSelect();
      }}
      onClick={onSelect}
      aria-pressed={selected}
      className={[
        // 40 - 2 x hair = 31 drawn, with the pseudo-element claiming the `row`
        // gap either side to reach a 40px target. The gap is exactly 2 x hair,
        // so adjacent chips' targets meet and never overlap.
        "relative flex h-[31px] w-full shrink-0 items-center gap-row rounded-edge",
        "after:absolute after:-top-hair after:-bottom-hair after:left-0 after:right-0 after:content-['']",
        // The chip's ground never changes. Hover and selection mark the border
        // instead, because every text colour on this chip is measured against
        // `range` and only against `range` — a declined chip lit to `steel`
        // would put flame at 3.60:1, under the bar, at the exact moment a chef
        // has their hand on it.
        "border-rule border-l-bar bg-range px-row text-left",
        "transition-colors duration-in",
        // PLATFORM FACT: hover and pressed in the same declaration, because a
        // pass screen may have no pointer at all.
        selected ? "border-chalk" : "border-transparent hover:border-apron active:border-apron",
        // Emitted after the all-sides colour above, so the state keeps the left
        // edge whatever the border is doing.
        state ? STATE_BAR[state] : "border-l-apron",
      ].join(" ")}
    >
      {/* The distance step. This is the one word on the board a chef reads from
          the pass, so it takes the 20px jump root 3 buys. */}
      <span
        className={[
          "min-w-0 flex-1 truncate text-name font-spot leading-none",
          state === "declined" ? "text-apron line-through" : "text-chalk",
        ].join(" ")}
      >
        {cook.name}
      </span>

      {signedOff ? (
        <span className="truncate text-note text-apron">{signedOff}</span>
      ) : null}

      {state ? (
        <span
          className={["shrink-0 text-note font-spot uppercase tracking-label", STATE_TEXT[state]].join(" ")}
        >
          {STATE_WORD[state]}
        </span>
      ) : null}

      {cost === undefined ? null : (
        <span className="shrink-0 font-figure text-note text-apron">{money(cost)}</span>
      )}
    </button>
  );
}
