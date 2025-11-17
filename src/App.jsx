import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Research from './components/Research'
import Showreel from './components/Showreel'
import Footer from './components/Footer'

function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Start a Project</h2>
          <p className="text-zinc-400 mt-3">Tell us about your film, series, or installation. We’ll respond within one business day.</p>
        </div>

        <form className="mt-10 grid gap-4 max-w-2xl">
          <input placeholder="Name" className="bg-zinc-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
          <input placeholder="Email" className="bg-zinc-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
          <input placeholder="Project / Studio" className="bg-zinc-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
          <textarea placeholder="Brief" rows={5} className="bg-zinc-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
          <button type="button" className="justify-self-start px-5 py-3 rounded-md bg-white text-black text-sm font-medium hover:brightness-110 transition">Request Consultation</button>
        </form>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Research />
      <Showreel />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
