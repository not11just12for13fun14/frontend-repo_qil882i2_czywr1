import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl">
            <p className="text-emerald-400/90 uppercase tracking-[0.3em] text-xs mb-4">Dolby Atmos • Immersive Cinema Audio</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-white">
              Precision-crafted sound for visionary cinema
            </h1>
            <p className="mt-6 text-zinc-300 text-base sm:text-lg max-w-xl">
              We sculpt spatial audio that breathes with your story — translating imagination into three-dimensional, cinematic reality.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#showreel" className="px-5 py-3 rounded-md bg-white text-black text-sm font-medium hover:brightness-110 transition">Watch Showreel</a>
              <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition">Start a Project</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </section>
  )
}
