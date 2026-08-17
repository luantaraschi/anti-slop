import Link from "next/link";
import type { Metadata } from "next";
import { CONTROL_SHAPE, QUIET } from "@/components/ui/Button";
import { HORIZON_DAYS } from "@/lib/service";

export const metadata: Metadata = {
  title: "No board — Mise",
  description: `Mise runs ${HORIZON_DAYS} days out. There is no board past that.`,
};

/**
 * Root 2: it never apologises. There is no "Sorry", no "Oops", and no offer to
 * help. The page states the rule that made it empty and gives one way back.
 *
 * The rule it states is the brief's own — rotas do not run beyond 14 days — so
 * this is the one screen where that fact is load-bearing rather than trivia
 * pinned to a rail.
 */
export default function NotFound() {
  return (
    <main className="flex h-full flex-col justify-center gap-block p-block">
      <h1 className="text-figure font-spot leading-none text-balance text-chalk">
        No board here.
      </h1>

      <p className="max-w-measure text-body text-pretty text-apron">
        Mise runs {HORIZON_DAYS} days out. Past that there is nothing to show, and a
        service that has already run is not edited.
      </p>

      {/* The board's one control shape, on a link. `leading-[31px]` is the only
          addition: a <button> centres its label, an <a> does not. */}
      <Link href="/" className={`${CONTROL_SHAPE} ${QUIET} w-fit leading-[31px]`}>
        Back to the board
      </Link>
    </main>
  );
}
