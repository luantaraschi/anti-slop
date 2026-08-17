import { Wordmark } from './ui/Wordmark'

/**
 * Subtraction: three columns holding eight links — Product (list, search,
 * settlement), Company (about, careers, press), Legal (terms, privacy). Six of
 * the eight pointed at pages this brief never established, and the two that
 * survive are the only routes anything else in this tree links to. A footer
 * column whose links 404 is worse than no footer column, and inventing a
 * careers page for a company with no stated name or jurisdiction is the same
 * failure as inventing a testimonial, one floor down.
 */
const ROUTES = [
  { id: 'list', label: 'List your nights', href: '/list' },
  { id: 'search', label: 'Search a route', href: '/search' },
]

export function Footer() {
  return (
    <footer className="border-t border-haze/25 px-stack py-block lap:px-block">
      <div className="mx-auto flex max-w-wide flex-col gap-group lap:flex-row lap:items-center lap:justify-between">
        <Wordmark />

        <ul className="flex flex-wrap gap-block">
          {ROUTES.map((route) => (
            <li key={route.id}>
              {/*
                Platform fact: the drawn text here is one 32px line box, which is
                under the 40px a finger needs. The ::after extends the hit area
                by `inline` (8px) above and below — 32 + 16 = 48px — and costs
                nothing in layout, so the row does not grow to pay for it.
              */}
              <a
                href={route.href}
                className="relative inline-block text-body text-houselights no-underline transition-colors duration-press hover:text-gel active:text-haze after:absolute after:inset-x-0 after:-inset-y-inline after:content-['']"
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
