import { Section } from './ui/Section'
import { Title } from './ui/Heading'
import { Lede, Body } from './ui/Copy'

export function Limits() {
  return (
    <Section track="measure">
      <Title>What it doesn't do.</Title>

      <div className="mt-group flex flex-col gap-group">
        <Lede>Chorus does not sell tickets and does not handle payouts.</Lede>
        <Body>
          Your box office stays where it is and your money moves the way it already moved. What
          this replaces is the part in between — where the night gets agreed, and then written
          down twice, in two documents, by two people who agreed on it a month ago.
        </Body>
      </div>
    </Section>
  )
}
