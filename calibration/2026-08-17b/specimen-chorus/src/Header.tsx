import { Wordmark } from './ui/Wordmark'

/**
 * Subtraction: this carried a "List your nights" control on the right. The hero
 * begins directly underneath with "List your open nights" at full size, so the
 * header's version was the same call to action, said first, said smaller, and
 * said worse. Removing it left the header with the one thing it is for.
 *
 * There is no nav either, and there was never a draft of one: a table of
 * contents for a page whose end you can reach by scrolling is furniture.
 */
export function Header() {
  return (
    <header className="border-b border-haze/25 px-stack py-group lap:px-block">
      <Wordmark />
    </header>
  )
}
