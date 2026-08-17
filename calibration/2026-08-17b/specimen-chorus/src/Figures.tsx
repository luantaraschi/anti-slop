import { Section } from './ui/Section'
import { Title } from './ui/Heading'

/**
 * Every number the brief supplied about reach, and no others. There is no
 * figure here for response time, hours saved, or bookings confirmed, because
 * the brief gave none, and a landing page is the worst place to guess.
 */
const FIGURES = [
  { id: 'venues', value: '2,400', caption: 'venues listing the nights they have open' },
  { id: 'countries', value: '31', caption: 'countries' },
  { id: 'offers', value: '40', caption: 'offers a touring band sends to book a twelve-date run' },
]

/**
 * Subtraction: a fourth row read `12 / dates in that run`. Forty offers to book
 * twelve dates is one fact, and splitting it across two rows was a way of
 * having four numbers instead of three. The twelve is still there, in the
 * caption on the forty, where it is the thing that makes the forty land.
 */
export function Figures() {
  return (
    <Section>
      <Title>What is actually on it.</Title>

      {/*
        Set in the text family and not the display family, and with
        `tabular-nums`. These are read as figures rather than as poster type, so
        they get the face that was chosen for paperwork and the numeral set that
        keeps a column aligned. It is also why the type scale declares no
        `figure` step: a figure here is a heading that happens to be a number.
      */}
      <dl className="mt-block">
        {FIGURES.map((figure) => (
          <div
            key={figure.id}
            className="grid gap-inline border-t border-haze/25 py-group lap:grid-cols-12 lap:items-baseline lap:gap-x-group"
          >
            {/* The figure column is a grid fraction rather than a fixed width
                off the spacing scale. The spacing steps are derived from a line
                box and have nothing to say about how wide four digits and a
                comma set at 45px; a column that is three twelfths of the track
                does not need re-deriving the day a figure gains a digit. */}
            <dt className="font-text text-title font-semibold tabular-nums text-houselights lap:col-span-3 lap:text-right">
              {figure.value}
            </dt>
            <dd className="max-w-measure text-pretty text-body text-haze lap:col-span-8 lap:col-start-5">
              {figure.caption}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
