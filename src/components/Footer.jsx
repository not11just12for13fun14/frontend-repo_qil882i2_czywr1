export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Aperture Audio Lab. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#research" className="text-zinc-400 hover:text-white transition">Research</a>
          <a href="#services" className="text-zinc-400 hover:text-white transition">Services</a>
          <a href="#contact" className="text-zinc-400 hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
