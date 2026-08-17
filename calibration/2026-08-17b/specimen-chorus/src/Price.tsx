import { Section } from './ui/Section'
import { Title, Subhead } from './ui/Heading'
import { Body, Note } from './ui/Copy'

export function Price() {
  return (
    <Section>
      <Title>What it costs.</Title>

      <div className="mt-block grid gap-y-block lap:grid-cols-12 lap:gap-x-group">
        <div className="flex flex-col gap-stack lap:col-span-5">
          <Subhead>Venues pay nothing.</Subhead>
          <Body>
            Not a listing fee, not a percentage of the door, not a plan with a tier above it. The
            room lists its open nights and that is the transaction.
          </Body>
        </div>

        <div className="flex flex-col gap-stack lap:col-span-6 lap:col-start-7 lap:mt-block">
          <Subhead>Bands pay 1.5% of the guarantee, capped at £40 a show.</Subhead>
          <Body>
            The cap is the part worth reading twice. A larger guarantee does not cost more than
            £40, so nothing here scales with how good the night turned out to be.
          </Body>
        </div>
      </div>

      <div className="mt-block">
        <Note>That is the whole price list</Note>
      </div>
    </Section>
  )
}
