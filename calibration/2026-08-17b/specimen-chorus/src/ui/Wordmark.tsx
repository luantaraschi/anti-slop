/**
 * Set type, not a logo. Root 1 gave a product name and no mark, and drawing one
 * would have been inventing an asset rather than deriving one — so the wordmark
 * is Syne at the `lead` step, which is the same face and the same weight every
 * heading on the page is set in.
 *
 * It is a component because the header and the footer had each typed the same
 * five classes, which is two places deciding the same thing twice.
 */
export function Wordmark() {
  return (
    <span className="font-display text-lead font-extrabold text-houselights">Chorus</span>
  )
}
