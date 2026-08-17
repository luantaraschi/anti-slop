import { Action } from './components/Action'

/**
 * Hero.
 *
 * Every string below is in INVENTORY.md. The headline names what the audience
 * is doing today — scheduling on a timer, checking moisture by hand — because
 * that is the only sentence on this page that is true of the reader rather
 * than of the product, and no other irrigation product's headline would
 * survive being swapped into it.
 *
 * ABSTENTION — no product screenshot, and no mocked zone list. It is the
 * obvious thing to put beside a hero and it was available. Zones are named by
 * the grower, so any dashboard drawn here would carry five zone names
 * belonging to a farm that does not exist, beside a moisture reading nobody
 * took. That is an invented testimonial with a smaller blast radius. The
 * space goes to the price instead, which is a real number.
 *
 * ABSTENTION — no second call to action. "Watch the demo" beside "Price it
 * for your farm" was the reflex; there is no demo in the inventory, and a
 * pair of actions asks the reader to choose before they have anything to
 * choose with.
 *
 * SUBTRACTION (reduction pass) — a "Who it's for" section listing 5-to-50
 * acres, timers and hand-checking was written and deleted. The first line
 * here already says it, and says it about the reader rather than about a
 * segment.
 */
export function Hero() {
  return (
    <section className="px-inline sm:px-stack pt-block pb-block sm:pb-section">
      <div className="mx-auto max-w-page">
        <h1 className="font-bulletin text-banner max-w-measure">
          Your valves open on a timer. They should open on the soil.
        </h1>

        <p className="font-field text-body mt-stack max-w-measure">
          Wickfield reads your soil-moisture probes every fifteen minutes and the next ten days of
          weather, then opens and closes your valves to hold each zone inside the moisture band you
          set.
        </p>

        {/* Root 4, dense: the price is in the first screen. A sparse page
            saves it for below the fold; a grower deciding whether to hand
            over their valves asks what it costs early, and making them scroll
            for it is a choice too. */}
        <p className="font-field text-body mt-inline max-w-measure text-silt-quiet">
          $18 per zone per month. There is no free tier.
        </p>

        <div className="mt-stack">
          <Action href="#pricing">Price it for your farm</Action>
        </div>

        {/* SUBTRACTION (reduction pass) — this line had its own section,
            headed "Works with", holding two wordmarks and a great deal of
            air. Folded into one sentence here: compatibility is a gate the
            reader passes or fails in the first ten seconds, and a section for
            it further down asks them to keep reading on the chance it works.
            Nothing was lost — both controller names are still on the page, at
            the point the question gets asked. */}
        <p className="font-field text-aside mt-stack max-w-measure text-silt-quiet">
          Works with Hunter and Rain Bird valve controllers.
        </p>
      </div>
    </section>
  )
}
