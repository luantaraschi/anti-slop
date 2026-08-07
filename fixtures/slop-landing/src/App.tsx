import { CheckCircle2, Rocket, TrendingUp, Zap } from "lucide-react"

import { Hero } from "./Hero"

export default function App() {
  return (
    <main className="bg-night font-body text-white">
      <Hero />

      <section className="px-8 py-20">
        <h2 className="text-center font-display text-4xl">Why teams choose us</h2>
        <div className="mt-12 grid grid-cols-3 gap-8">
          <div className="rounded-card border border-mist/30 px-6 py-8">
            <Zap className="h-8 w-8 text-brand" />
            <h3 className="mt-4 font-display text-xl">Fast</h3>
            <p className="mt-2 text-mist">
              Everything loads in under a second, on every plan.
            </p>
          </div>
          <div className="rounded-card border border-mist/30 px-6 py-8">
            <Rocket className="h-8 w-8 text-brand" />
            <h3 className="mt-4 font-display text-xl">Scalable</h3>
            <p className="mt-2 text-mist">
              From your first user to your millionth, on the same plan.
            </p>
          </div>
          <div className="rounded-card border border-mist/30 px-6 py-8">
            <TrendingUp className="h-8 w-8 text-brand" />
            <h3 className="mt-4 font-display text-xl">Reliable</h3>
            <p className="mt-2 text-mist">
              Built on infrastructure your team already trusts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-display text-5xl">10k+</p>
            <p className="mt-2 text-mist">Active users</p>
          </div>
          <div>
            <p className="font-display text-5xl">99.9%</p>
            <p className="mt-2 text-mist">Uptime</p>
          </div>
          <div>
            <p className="font-display text-5xl">24/7</p>
            <p className="mt-2 text-mist">Support</p>
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <h2 className="font-display text-4xl">Everything you need</h2>
        <ul className="mt-8 space-y-4">
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand" />
            Unlimited projects
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand" />
            Team collaboration
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand" />
            Advanced analytics
          </li>
        </ul>
      </section>

      <footer className="border-t border-mist/30 px-8 py-12 text-mist">
        <p>© 2026 Your Company. All rights reserved.</p>
        <div className="mt-4 flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  )
}
