export default function Research() {
  const topics = [
    {
      tag: 'Spatial Psychoacoustics',
      title: 'Perceptual cues in object-based mixing',
      summary:
        'Investigating interaural time differences, elevation cues via pinna filtering, and perceptual masking in dense cinematic scenes.',
      link: '#',
    },
    {
      tag: 'Immersive Formats',
      title: 'Comparative translation: Atmos vs. binaural',
      summary:
        'Methodologies for maintaining intent across theatrical arrays, nearfield soundbars, and headphones using render-specific strategies.',
      link: '#',
    },
    {
      tag: 'Acoustic Design',
      title: 'Low-frequency management in multi-sub arrays',
      summary:
        'Modal distribution, phase-alignment approaches, and bass management for consistent seat-to-seat response.',
      link: '#',
    },
    {
      tag: 'Tools & Workflows',
      title: 'Scene-aware dynamics for dialogue clarity',
      summary:
        'Adaptive ducking and spectral shaping guided by scene analysis to preserve intelligibility without sacrificing impact.',
      link: '#',
    },
  ]

  return (
    <section id="research" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Research</h2>
          <p className="text-zinc-400 mt-3">Academic work at the intersection of sound design, immersive audio, and spatial studies.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {topics.map((t) => (
            <a key={t.title} href={t.link} className="group rounded-xl border border-white/5 bg-zinc-900/60 p-6 hover:border-white/15 transition block">
              <div className="text-emerald-400 text-xs uppercase tracking-[0.2em]">{t.tag}</div>
              <h3 className="mt-3 text-white text-xl font-medium group-hover:underline underline-offset-4">{t.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{t.summary}</p>
              <div className="mt-4 text-emerald-300/80 text-sm">Read more →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
