export function Hero() {
  return (
    <section className="bg-gradient-to-b from-dusk to-ink px-8 py-24">
      <h1 className="text-display text-chalk max-w-3xl">
        Every invoice your firm sent, reconciled the morning after.
      </h1>
      <p className="text-body text-chalk/70 mt-6 max-w-xl">
        Reads the bank feed, matches it against what you billed, and flags what
        neither side explains.
      </p>
      <a
        href="/signup"
        className="mt-10 inline-block rounded-control bg-signal px-6 py-3
                   text-body text-ink shadow-xl transition-shadow duration-200"
      >
        Reconcile your first month
      </a>
    </section>
  )
}
