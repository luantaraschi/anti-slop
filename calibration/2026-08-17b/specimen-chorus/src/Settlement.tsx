import { useState } from 'react'
import { Section } from './ui/Section'
import { Title, Subhead } from './ui/Heading'
import { Lede, Body } from './ui/Copy'

/**
 * Root 1 names three settlement shapes and says Chorus computes all three.
 * These are those three and there is no fourth, so the control below is a
 * fixed set rather than a list that might grow.
 *
 * No worked example and no figures inside any of them: the brief gave the
 * shapes, not a sample night, and an illustrative "£12 x 300" would be an
 * invented metric wearing the costume of a demo.
 */
const MODES = [
  {
    id: 'door',
    label: 'Door split',
    heading: 'The door, split on terms nobody has to remember.',
    body: 'What the night takes at the door, divided on the terms that were agreed before load-in. Chorus carries those terms off the accepted offer and onto the settlement sheet, so the split is already written down before anyone starts counting.',
  },
  {
    id: 'guarantee',
    label: 'Guarantee',
    heading: 'A flat number, owed whatever the room does.',
    body: 'The simplest one to agree and still the one that gets rebuilt in an email thread twice, once by each side, in slightly different words. It is a field on the offer here.',
  },
  {
    id: 'versus',
    label: 'Guarantee versus percentage',
    heading: 'Both figures, run once.',
    body: 'The band takes the guarantee or the percentage, whichever comes out higher, which means somebody has to work out both. Chorus runs both rather than one of you doing it twice and the other checking.',
  },
]

export function Settlement() {
  const [active, setActive] = useState(MODES[0].id)
  const mode = MODES.find((m) => m.id === active) ?? MODES[0]

  return (
    <Section>
      <Title>Three ways a night settles.</Title>

      <div className="mt-group">
        <Lede>Chorus does the arithmetic on all three, off the offer that was accepted.</Lede>
      </div>

      <div
        role="group"
        aria-label="Settlement type"
        className="mt-block flex flex-wrap gap-stack"
      >
        {MODES.map((m) => {
          const selected = m.id === active
          return (
            <button
              key={m.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(m.id)}
              className={[
                'rounded-pill border-2 px-group py-stack font-text text-body font-medium',
                'transition-colors duration-press',
                selected
                  ? 'border-gel bg-gel text-blackbox'
                  : 'border-haze text-haze hover:border-houselights hover:text-houselights active:bg-haze active:text-blackbox',
              ].join(' ')}
            >
              {m.label}
            </button>
          )
        })}
      </div>

      {/*
        The one concentric pair on this page, and the reason the radius scale is
        derived rather than picked:

            panel (12px) = card (4px) + inline (8px)

        The inner surface sits flush in the congo frame's corner with the
        frame's `inline` padding as the only gap between them, so the two curves
        stay parallel. Change `p-inline` here and `borderRadius.panel` in the
        theme has to move with it.

        This is the only pair. The reduction pass took the borders off the step
        list in HowItWorks, so after it there is no other rounded container in
        the tree at all — the equation has nothing else to govern here, and
        nothing was manufactured to give it something.

        Abstention: the swap between the three modes has no transition on it.
        Movement was available and root 3 is expressive, but a fade on content
        the reader clicked for is a delay in the costume of polish, and 90ms of
        it is 90ms of not reading the thing you asked to read.
      */}
      <div className="mt-block rounded-panel bg-congo p-inline">
        <div className="rounded-card bg-blackbox p-group lap:p-block" aria-live="polite">
          <Subhead>{mode.heading}</Subhead>
          <div className="mt-stack">
            <Body>{mode.body}</Body>
          </div>
        </div>
      </div>
    </Section>
  )
}
