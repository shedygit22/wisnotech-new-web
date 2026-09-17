import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { SmoothScroll, ScrollProgress, Cursor, Loader } from './Premium.jsx'
import { useEffect } from 'react'

const STANDALONE = ['/academy']

export default function Layout({ children }) {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])
  const bare = STANDALONE.includes(pathname)
  return (
    <div className="relative min-h-screen bg-background text-white">
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <Loader />
      <div className="film-grain" aria-hidden />
      <div className="film-vignette" aria-hidden />
      {!bare && <Navbar />}
      <main className={bare ? '' : 'pt-16'}>{children}</main>
      {!bare && <Footer />}
      {/* Floating Wisne assistant */}
      <a href="#contact" title="Open Wisne AI assistant — Ask about services, pricing, or a plan" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-2xl hover:scale-105 transition-transform">✦</a>
    </div>
  )
}
