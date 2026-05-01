import useScrollReveal from './hooks/useScrollReveal'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import WhyUs        from './components/WhyUs'
import Process      from './components/Process'
import Portfolio    from './components/Portfolio'
import Pricing      from './components/Pricing'
import FAQ          from './components/FAQ'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
