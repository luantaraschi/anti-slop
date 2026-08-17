import { Panel } from './components/Panel'
import { Section } from './components/Section'

/**
 * The two failure messages.
 *
 * This section exists because the brief names two messages and both of them
 * are about something being wrong. A product that automates a valve and only
 * reports success is a product you still have to walk out and check, so the
 * failure path is not a footnote here — it is the section that earns the
 * `wilt` colour, which is the only saturated thing on the site.
 *
 * There are two items because the brief names two. Not two of a possible
 * many, and no "and more" — the inventory has two.
 */

const messages: { when: string; detail: string }[] = [
  {
    when: 'A probe stops reporting',
    detail:
      'A probe reports every fifteen minutes. When one stops, Wickfield sends you a message.',
  },
  {
    when: 'A valve fails to close',
    detail: 'When a valve is told to close and does not, Wickfield sends you a message.',
  },
]

export function WhenItBreaks() {
  return (
    <Section
      id="failures"
      title="It also tells you when it fails."
      lead="A scheduler that only reports success is a scheduler you have to go and check anyway."
    >
      <Panel className="max-w-measure">
        <ul>
          {messages.map(({ when, detail }, i) => (
            <li
              key={when}
              className={i === 0 ? 'p-stack' : 'border-t border-silt-rule p-stack'}
            >
              {/* `wilt-mark` is used here and nowhere else on the site. A
                  colour reserved for the state that needs a person stops
                  meaning that the moment it also decorates a heading. */}
              <p className="font-field text-body font-semibold text-wilt-mark">{when}</p>
              <p className="font-field text-body mt-tight text-silt-quiet">{detail}</p>
            </li>
          ))}
        </ul>
      </Panel>

      <p className="font-field text-aside mt-stack max-w-measure text-silt-quiet">
        Those are the two messages.
      </p>
    </Section>
  )
}
