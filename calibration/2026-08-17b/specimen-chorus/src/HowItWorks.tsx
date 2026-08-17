import { Section } from './ui/Section'
import { Title, Subhead } from './ui/Heading'
import { Body } from './ui/Copy'

/**
 * Abstention: no icons, here least of all. Three steps in a row is the exact
 * shape that pulls one into each, and the three that were available — a
 * calendar, a magnifying glass, a document — would each have sat beside a
 * heading that already said it. An icon earns its place by saying something the
 * text does not, and none of these had anything left to say. Root 2 agrees: a
 * venue manager explaining this to another venue manager does not draw a
 * calendar.
 */
const STEPS = [
  {
    id: 'list',
    numeral: '01',
    heading: 'The venue lists a night.',
    body: 'One entry for one date. It sits where a band looking at that week can find it, which is the entire job the listing has to do.',
    indent: 'lap:col-start-1',
  },
  {
    id: 'offer',
    numeral: '02',
    heading: 'The band offers on it.',
    body: 'They searched by route and date, because they are already routed past you that week. The offer arrives with a settlement type already on it.',
    indent: 'lap:col-start-3',
  },
  {
    id: 'reply',
    numeral: '03',
    heading: 'You accept, counter, or pass.',
    body: 'Passing is one click. Not a paragraph, at one in the morning, about how much you would have loved to.',
    indent: 'lap:col-start-5',
  },
]

export function HowItWorks() {
  return (
    <Section>
      <Title>How a night gets booked.</Title>

      {/*
        Subtraction: each step was a card — `rounded-panel border border-haze/25
        p-group`. Three steps 64px apart, each opening with a gel numeral, were
        already grouped and already sequenced; the border was a container drawn
        around content that had not asked to be contained, and its rounded
        corner was competing with the one radius on this page that means
        something. Removing all three lost nothing.
      */}
      <ol className="mt-block grid gap-y-block lap:grid-cols-12 lap:gap-x-group">
        {STEPS.map((step) => (
          <li
            key={step.id}
            className={`flex flex-col gap-stack lap:col-span-7 ${step.indent}`}
          >
            <span className="font-display text-title font-extrabold text-gel">{step.numeral}</span>
            <Subhead>{step.heading}</Subhead>
            <Body>{step.body}</Body>
          </li>
        ))}
      </ol>

      <div className="mt-block lap:ml-block">
        <Body>
          The offer you accepted becomes the performance contract and the settlement sheet. Neither
          side types either of them again.
        </Body>
      </div>
    </Section>
  )
}
