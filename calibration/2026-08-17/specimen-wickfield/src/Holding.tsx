import { Section } from './components/Section'

/**
 * How the band is held.
 *
 * ABSTENTION — no icons. This section is where they were going: a droplet for
 * the band, a clock for the reading, a valve glyph for the valve. Each would
 * have sat beside a word that already said it, and three icons picked to fill
 * the same slot in three rows is a template asking for them rather than
 * content offering them. Nothing on this site carries an icon, for the same
 * reason, and that is the whole of the iconography decision.
 *
 * SUBTRACTION (reduction pass) — this was a three-card grid before it was
 * three rows. The cards contributed a border, a radius and a padding around
 * each item and said nothing the rule between the rows was not already
 * saying, and they cut the prose measure into three columns narrower than the
 * body step is sized for. Removed; a <dl> separated by rules is what is left.
 *
 * SUBTRACTION (reduction pass) — the lead paragraph, "Nothing here needs you
 * at the pump shed at five in the morning." It went for two reasons: the
 * heading already says it, and the next section says the opposite — a failed
 * valve does need you at the pump shed, and that is the point of that
 * section. A line the page contradicts two screens later is worse than none.
 *
 * There are three items because the product has three moving parts, not
 * because a row holds three.
 */

const steps: { term: string; detail: string }[] = [
  {
    term: 'The band',
    detail:
      'You give each zone a target moisture band, and you name the zones yourself. Most farms run six to twenty.',
  },
  {
    term: 'The reading',
    detail:
      'Every probe reports every fifteen minutes. Wickfield reads those against the local ten-day forecast.',
  },
  {
    term: 'The valve',
    detail:
      'It opens and closes the valves to hold the band, and skips a zone when the forecast is going to do the watering.',
  },
]

export function Holding() {
  return (
    <Section id="holding" title="You set the band. Wickfield holds it.">
      <dl className="max-w-measure">
        {steps.map(({ term, detail }, i) => (
          <div
            key={term}
            /* The first row takes no rule above it, because the section
               already drew one. `border-t` from the second row down, rather
               than `border-b` on every row plus a negative margin to hide the
               last — which is the same line drawn twice and then undrawn. */
            className={i === 0 ? 'py-stack' : 'border-t border-silt-rule py-stack'}
          >
            <dt className="font-field text-body font-semibold">{term}</dt>
            <dd className="font-field text-body mt-tight text-silt-quiet">{detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
