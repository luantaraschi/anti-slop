import { Button } from './ui/Button'
import { Display } from './ui/Heading'
import { Lede, Note } from './ui/Copy'

/**
 * The three replies a venue can give an offer. Root 1 names them and names
 * only these; they are the product's whole state machine and they fit on one
 * screen, which is why they are the hero's second column instead of a
 * screenshot of a listing the brief never described.
 */
const REPLIES = [
  { id: 'accept', word: 'Accept.', accent: false },
  { id: 'counter', word: 'Counter.', accent: false },
  { id: 'pass', word: 'Pass.', accent: true },
]

export function Hero() {
  return (
    <section className="bg-wash px-stack py-section lap:px-block">
      <div className="mx-auto grid max-w-wide gap-y-block lap:grid-cols-12 lap:gap-x-group">
        {/* Asymmetric on purpose (root 3): seven columns of twelve, and the
            second block starts at nine and is pushed down a block, so the two
            never read as a pair of cards. */}
        <div className="flex flex-col gap-group lap:col-span-7">
          <Note>Booking for independent venues</Note>

          <Display as="h1">Forty offers to book twelve dates. None of them an email.</Display>

          <Lede>
            Chorus is where an independent venue lists the nights it has open and a touring band
            offers on them. Accept, counter, or pass. The performance contract and the settlement
            sheet come out of the offer you accepted, not out of what you remember agreeing to.
          </Lede>

          {/*
            Two calls to action, and they survived the reduction pass on
            purpose: root 1 describes two sides who arrive here wanting opposite
            things, and a band who is given only "List your open nights" has
            been shown the wrong door. They are deliberately unequal — filled
            against outline — because the venue is the side with the inventory.
          */}
          <div className="mt-stack flex flex-wrap gap-stack">
            <Button href="/list">List your open nights</Button>
            <Button href="/search" variant="outline">
              Search a route
            </Button>
          </div>

          {/*
            Subtraction: a line reading "2,400 venues · 31 countries" sat here.
            Figures.tsx carries both numbers with the captions that make them
            mean something, three sections down. In the hero they were doing the
            template's job — making a claim look substantiated before anyone had
            read the claim.
          */}
        </div>

        <div className="lap:col-span-4 lap:col-start-9 lap:mt-block">
          <Note>Every offer gets one of three</Note>
          <ul className="mt-group">
            {REPLIES.map((reply) => (
              <li
                key={reply.id}
                className={`font-display text-title font-extrabold ${
                  reply.accent ? 'text-gel' : 'text-houselights'
                }`}
              >
                {reply.word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
