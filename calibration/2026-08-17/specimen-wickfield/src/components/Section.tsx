import type { ReactNode } from 'react'

/**
 * Section — heading, optional lead paragraph, content, and the rule above it.
 *
 * Three callsites (Holding, WhenItBreaks, Pricing). Without this the page
 * column width, the section gap and the heading step would each have been
 * decided three times, and by the third they would not have matched.
 *
 * The rule line above each section is `silt-rule` — a border rather than a
 * change of background. Alternating section backgrounds were available and
 * are not here: they would have implied that the sections are different
 * kinds of thing, and they are three answers to three questions a grower
 * arrives with.
 */

type Props = {
  id: string
  title: string
  lead?: string
  children: ReactNode
}

export function Section({ id, title, lead, children }: Props) {
  return (
    <section
      id={id}
      className="border-t border-silt-rule py-block sm:py-section px-inline sm:px-stack"
    >
      <div className="mx-auto max-w-page">
        <h2 className="font-bulletin text-section max-w-measure">{title}</h2>
        {lead && (
          <p className="font-field text-body text-silt-quiet mt-inline max-w-measure">{lead}</p>
        )}
        <div className="mt-stack">{children}</div>
      </div>
    </section>
  )
}
