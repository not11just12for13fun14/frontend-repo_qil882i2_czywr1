import { Headphones, Waves, Film, BadgeCheck } from 'lucide-react'

const services = [
  {
    icon: Headphones,
    title: 'Dolby Atmos Mixing',
    desc: 'Feature film and series mixing with precision object-based spatialization and theatrical translation.',
  },
  {
    icon: Waves,
    title: 'Immersive Sound Design',
    desc: 'From micro-textures to macro-dynamics — bespoke sonic worlds for narrative and branded content.',
  },
  {
    icon: Film,
    title: 'Theatrical Mastering',
    desc: 'Delivery across DCP, streaming, and XR pipelines with rigorous loudness and QC workflows.',
  },
  {
    icon: BadgeCheck,
    title: 'Consulting & Calibration',
    desc: 'Room design, system alignment, and calibration for Atmos-ready mix stages and screening rooms.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we do</h2>
          <p className="text-zinc-400 mt-3">Precision services engineered for theatrical impact and spatial clarity.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/5 bg-zinc-900/60 p-6 hover:border-white/15 transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-emerald-500/0 via-emerald-500/0 to-emerald-500/10" />
              <Icon className="text-emerald-400" size={24} />
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
