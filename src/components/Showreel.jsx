export default function Showreel() {
  return (
    <section id="showreel" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Showreel</h2>
          <p className="text-zinc-400 mt-3">Selected work demonstrating spatial storytelling and cinematic dynamics.</p>
        </div>

        <div className="mt-8 aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
