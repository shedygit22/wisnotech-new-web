import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) {
        const el = document.querySelector(id)
        if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -64 }) }
      }
    }
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('click', onClick); lenis.destroy() }
  }, [])
  return null
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-neon via-[#7aa5ff] to-neon" aria-hidden />
}

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e) => setHover(!!e.target.closest('a,button,[data-cursor]'))
    const leave = () => setHidden(true)
    const enter = () => setHidden(false)
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    if (window.matchMedia('(pointer: coarse)').matches) setHidden(true)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); document.removeEventListener('mouseleave', leave); document.removeEventListener('mouseenter', enter) }
  }, [])
  if (hidden) return null
  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-white mix-blend-difference lg:block" style={{ x: pos.x - 6, y: pos.y - 6 }} animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 0.9 : 0.7 }} />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-white/40 mix-blend-difference lg:block" style={{ x: pos.x - 16, y: pos.y - 16 }} animate={{ scale: hover ? 1.6 : 1 }} />
    </>
  )
}

export function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, 1800)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div id="wis-loader" exit={{ opacity: 0 }} className={show ? '' : 'hide'}>
          <div className="relative h-44 w-44 flex items-center justify-center">
            <div className="wis-ring inset-0 absolute" style={{ inset: 0 }} />
            <div className="wis-ring absolute" style={{ inset: -22, animationDuration: '2s', animationDirection: 'reverse', borderTopColor: 'rgba(255,255,255,0.22)' }} />
            <div className="absolute inset-0 m-auto flex h-32 w-32 items-center justify-center rounded-full border border-neon/30 bg-[#0a0a12] text-4xl font-bold">W</div>
          </div>
          <div className="wis-shimmer-text text-xl font-semibold uppercase tracking-[0.5em]">Wisnotech</div>
          <div className="h-[3px] w-[220px] overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.6 }} className="h-full bg-gradient-to-r from-neon to-[#7fa8ff]" /></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

export function Faq({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-3">
      {items.map(([q, a], i) => (
        <div key={q} className="card !p-0 overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6">
            <span className="flex-1 text-[15px] font-medium">{q}</span>
            <span className={`flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 pl-5 text-sm text-muted sm:px-6">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
