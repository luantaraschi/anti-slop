import { Header } from './Header'
import { Hero } from './Hero'
import { HowItWorks } from './HowItWorks'
import { Settlement } from './Settlement'
import { Figures } from './Figures'
import { Price } from './Price'
import { Limits } from './Limits'
import { Close } from './Close'
import { Footer } from './Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Settlement />
        <Figures />
        <Price />
        <Limits />
        <Close />
      </main>
      <Footer />
    </>
  )
}
