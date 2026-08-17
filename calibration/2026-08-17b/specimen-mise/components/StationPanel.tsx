"use client";

import type { ReactNode } from "react";

/**
 * One station, or the bench. Both are a framed column of slots with a
 * headcount, so they are one component rather than two files that drift.
 *
 * ABSTENTION on iconography. Each header carried a glyph before the reduction
 * pass — a snowflake on larder, a flame on grill, and three more chosen mostly
 * because the first two existed. Five icons filling the same slot in five
 * panels is a template asking, not the content: the word "GRILL" at 15px
 * uppercase says it, and says it from further away than a 15px symbol does.
 */
type Props = {
  /** The station's own name, or "Off board" for the bench. */
  label: string;
  /** Covered / needed. The bench passes neither. */
  covered?: number;
  needs?: number;
  short?: number;
  /** What the drop zone says. Empty string renders no drop zone at all. */
  dropLabel: string;
  dropEnabled: boolean;
  onDrop: () => void;
  children: ReactNode;
};

export function StationPanel({
  label,
  covered,
  needs,
  short = 0,
  dropLabel,
  dropEnabled,
  onDrop,
  children,
}: Props) {
  const isShort = short > 0;

  return (
    <section
      onDragOver={(e) => {
        if (!dropEnabled) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={(e) => {
        if (!dropEnabled) return;
        e.preventDefault();
        onDrop();
      }}
      className={[
        // The panel's boundary is this rule, not its fill. steel against range
        // is 1.47:1; apron against steel is 4.21:1 and is what actually draws
        // the edge from across the room.
        "flex min-h-0 flex-col rounded-panel border-rule border-apron bg-steel p-hair",
        // A short station is the one thing on this board that has to be seen
        // before anything is read. It gets the widest stripe in the theme.
        isShort ? "border-l-bar border-l-flame" : "",
      ].join(" ")}
    >
      <header className="flex shrink-0 items-center gap-row px-row pb-hair pt-hair">
        <h2 className="min-w-0 flex-1 truncate text-station font-spot uppercase tracking-label text-balance text-chalk">
          {label}
        </h2>

        {covered === undefined ? null : (
          <span className="shrink-0 font-figure text-station text-chalk">
            {covered}/{needs}
          </span>
        )}

        {/* Measured: chalk on flame is 3.04:1 and fails. range on flame is
            5.29:1 and passes. The badge is filled rather than coloured text
            because flame AS TEXT on steel is 3.60:1, under the 4.5:1 bar for
            15px — and because a filled block is the louder of the two at the
            distance this is read from. */}
        {isShort ? (
          <span className="shrink-0 rounded-edge bg-flame px-hair text-note font-spot uppercase tracking-label text-range">
            short {short}
          </span>
        ) : null}
      </header>

      <ul className="flex min-h-0 shrink-0 flex-col gap-row">{children}</ul>

      {/* The rest of the panel is the drop target. Root 4: the empty half of a
          station is not spare room, it is the gap, and it is where you put
          someone. */}
      {dropLabel === "" ? (
        <div className="min-h-0 flex-1" />
      ) : (
        <button
          type="button"
          disabled={!dropEnabled}
          onClick={onDrop}
          className={[
            // bg-range, not the panel's steel: this is a slot cut into the
            // panel, and it is the only ground on which the refusal below is
            // legible. flame on steel is 3.60:1 and fails; flame on range is
            // 5.29:1 and passes.
            "mt-row min-h-[31px] w-full flex-1 rounded-edge border-rule border-dashed bg-range",
            "text-note font-spot uppercase tracking-label",
            "transition-colors duration-in",
            dropEnabled
              ? "border-apron text-apron hover:border-chalk hover:text-chalk active:border-chalk active:text-chalk"
              : "cursor-not-allowed border-flame text-flame",
          ].join(" ")}
        >
          {dropLabel}
        </button>
      )}
    </section>
  );
}
