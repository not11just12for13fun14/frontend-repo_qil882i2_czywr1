import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((o) => !o)

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-sm text-zinc-300 hover:text-white transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/80">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/30 rounded-b-xl">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-zinc-200 to-zinc-500 shadow-inner" />
          <span className="text-white tracking-wide font-semibold">Aperture Audio Lab</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#research">Research</NavLink>
          <NavLink href="#showreel">Showreel</NavLink>
          <a href="#contact" className="text-sm text-white bg-gradient-to-r from-zinc-100 to-zinc-400 text-black px-4 py-2 rounded-md shadow hover:brightness-110 transition">
            Book a Session
          </a>
        </nav>

        <button className="md:hidden text-zinc-300" onClick={toggle} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#research">Research</NavLink>
            <NavLink href="#showreel">Showreel</NavLink>
            <a href="#contact" className="text-sm text-black bg-gradient-to-r from-zinc-100 to-zinc-400 px-4 py-2 rounded-md text-center">
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
