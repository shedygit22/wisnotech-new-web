import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'

const LINKS = [
  { to: '/#services', label: 'Services', anchor: true },
  { to: '/#solutions', label: 'Solutions', anchor: true },
  { to: '/portfolio', label: 'Our Work' },
  { to: '/#about', label: 'About', anchor: true },
  { to: '/training', label: 'Training' },
  { to: '/academy', label: 'Academy' },
  { to: '/masterclass', label: 'Masterclass' },
  { to: '/blog', label: 'Blog' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  const isHome = loc.pathname === '/'
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', s, { passive: true })
    return () => window.removeEventListener('scroll', s)
  }, [])
  useEffect(() => { setOpen(false) }, [loc.pathname])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || open ? 'border-white/[0.08] bg-[#080808]/90 backdrop-blur-xl shadow-[0_8px_32px_-16px_rgba(0,0,0,0.8)]' : 'border-white/[0.06] bg-[#080808]/75 backdrop-blur-md'}`}>
      <nav className="container-wide flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="shrink-0" aria-label="Wisnotech home">
          <Logo />
        </Link>
        <div className="hidden items-center gap-0.5 lg:flex">
          {LINKS.map(l => l.anchor ? (
            <a key={l.label} href={l.to} className="rounded-full px-3 py-2 text-[13px] font-medium tracking-[-0.01em] text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white">{l.label}</a>
          ) : (
            <NavLink key={l.to + l.label} to={l.to} className={({ isActive }) => `rounded-full px-3 py-2 text-[13px] font-medium tracking-[-0.01em] transition-colors ${isActive ? 'bg-white/[0.08] text-white' : 'text-white/60 hover:bg-white/[0.06] hover:text-white'}`}>{l.label}</NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <a href={isHome ? '#contact' : '/#contact'} className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#080808] transition-all hover:bg-zinc-100 hover:shadow-[0_8px_24px_-12px_rgba(255,255,255,0.5)] sm:inline-flex">Start a Project <span aria-hidden>→</span></a>
          <button onClick={() => setOpen(v => !v)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition-colors hover:border-white/25 hover:text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? '✕' : '☰'}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="border-t border-white/[0.08] bg-[#080808]/95 px-5 py-4 backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-0.5">
              <a href="/#services" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white">Services</a>
              <a href="/#solutions" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white">Solutions</a>
              <Link to="/portfolio" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white">Our Work</Link>
              <Link to="/training" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white">Training</Link>
              <Link to="/academy" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white">Academy</Link>
              <Link to="/masterclass" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white">Masterclass</Link>
              <a href={isHome ? '#contact' : '/#contact'} onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black">Start a Project <span aria-hidden>→</span></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
