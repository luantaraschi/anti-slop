import { Section } from './ui/Section'
import { Display } from './ui/Heading'
import { Button } from './ui/Button'

/**
 * Subtraction: a note under the buttons read "Free for venues". Price.tsx sets
 * "Venues pay nothing." at the display family two sections up and spends a
 * paragraph on it. Repeating it in 16px grey at the moment of decision is the
 * template's reflex for reassurance, and a reader who got this far has already
 * been told, in larger type, by a page that was not nervous about it.
 */
export function Close() {
  return (
    <Section track="measure">
      <Display>You have nights open. Somebody is driving past on Thursday.</Display>

      <div className="mt-block flex flex-wrap gap-stack">
        <Button href="/list">List your open nights</Button>
        <Button href="/search" variant="outline">
          Search a route
        </Button>
      </div>
    </Section>
  )
}
