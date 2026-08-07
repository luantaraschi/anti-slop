import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-24 text-center">
      <span className="rounded-pill border border-white/40 px-4 py-1 text-sm text-white">
        Now in public beta
      </span>
      <h1 className="mt-6 flex items-center justify-center gap-3 font-display text-hero text-white">
        <Sparkles className="h-10 w-10" />
        Build something great today
      </h1>
      <p className="mt-4 text-lead text-white/80">
        The platform for teams that move fast.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/signup"
          className="rounded-pill bg-white px-6 py-3 text-brand"
        >
          Get Started
        </a>
        <a
          href="#"
          className="rounded-pill border border-white/40 px-6 py-3 text-white"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
