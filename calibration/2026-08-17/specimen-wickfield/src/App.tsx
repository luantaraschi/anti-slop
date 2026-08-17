import { Action } from './components/Action'
import { Hero } from './Hero'
import { Holding } from './Holding'
import { WhenItBreaks } from './WhenItBreaks'
import { Pricing } from './Pricing'

/**
 * The page, in the order a grower asks the questions:
 *
 *   what is this, and does it work with my controllers   Hero
 *   what does it actually do                             Holding
 *   what happens when it goes wrong                      WhenItBreaks
 *   what does it cost                                    Pricing
 *
 * SUBTRACTION (reduction pass) — a fifth section, "Works with", held the two
 * controller names and became one line in the Hero, which says why there. A
 * sixth, "Who it's for", held the audience and became the headline. A logo
 * row and a testimonial block were never built at all: the brief has no
 * customers to name, and the shape of those sections is itself a claim that
 * there are some.
 *
 * SUBTRACTION — no sticky header. It was the only reason the theme would have
 * needed an elevation level, and it exists to keep a call to action in view
 * on a page long enough to lose it. This page is four screens.
 */
export function App() {
  return (
    <div className="min-h-screen font-field">
      {/* PLATFORM FACT: a keyboard user lands on the nav before anything else.
          One skip link, hidden until it takes focus — `sr-only` /
          `focus:not-sr-only` rather than a negative offset, so it takes its
          place in layout the moment it is focused instead of travelling in
          from off-screen. */}
      <a
        href="#holding"
        className="sr-only focus:not-sr-only focus:absolute focus:m-inline focus:rounded-control focus:bg-water-mark focus:px-stack focus:py-inline focus:text-ink-on-water"
      >
        Skip to what it does
      </a>

      <header className="px-inline sm:px-stack pt-block">
        <nav className="mx-auto max-w-page flex items-baseline justify-between gap-inline">
          {/* The wordmark is the bulletin face and nothing else. There is no
              logotype: the product has no mark, and drawing one here would be
              inventing an asset in order to fill a corner. */}
          <span className="font-bulletin text-body">Wickfield</span>
          <Action href="#pricing" variant="quiet">
            Pricing
          </Action>
        </nav>
      </header>

      <main>
        <Hero />
        <Holding />
        <WhenItBreaks />
        <Pricing />
      </main>

      {/* SUBTRACTION (reduction pass) — the footer had four link columns
          (Product, Company, Resources, Legal) holding fourteen routes, of
          which the brief supports one. Removed rather than filled: a footer
          nav pointing mostly at pages nobody has written is a site map for a
          site that does not exist. The name and what the product is are what
          survived. */}
      <footer className="border-t border-silt-rule px-inline sm:px-stack py-block">
        <div className="mx-auto max-w-page flex flex-wrap items-baseline justify-between gap-inline">
          <span className="font-bulletin text-body">Wickfield</span>
          <span className="font-field text-aside text-silt-quiet">
            Irrigation scheduling for small vegetable farms.
          </span>
        </div>
      </footer>
    </div>
  )
}
