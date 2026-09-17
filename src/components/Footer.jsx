import { Link } from 'react-router-dom'
import { SITE } from '../data.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="container-wide py-14 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link to="/" aria-label="Wisnotech home" className="shrink-0">
              <Logo />
            </Link>
            <p className="mt-3 text-xs uppercase tracking-widest text-white/40">AI • Software • Automation • Digital Growth</p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">We help businesses build AI solutions, automate workflows, develop custom software and create digital systems designed for growth.</p>
            <p className="mt-3 text-sm text-white/60">{SITE.email}<br />{SITE.phoneDisplay}<br />{SITE.address}</p>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer navigation">
            <ul className="space-y-3">
              <li className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Company</li>
              <li><a href="/#about" className="text-sm text-white/55 hover:text-white">About</a></li>
              <li><a href="/#work" className="text-sm text-white/55 hover:text-white">Our Work</a></li>
              <li><Link to="/portfolio" className="text-sm text-white/55 hover:text-white">Studio Portfolio</Link></li>
              <li><Link to="/wino" className="text-sm text-white/55 hover:text-white">WINO App</Link></li>
              <li><Link to="/academy" className="text-sm text-white/55 hover:text-white">AI Academy</Link></li>
              <li><Link to="/blog" className="text-sm text-white/55 hover:text-white">Blog</Link></li>
            </ul>
            <ul className="space-y-3">
              <li className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Services</li>
              <li><a href="/#solutions" className="text-sm text-white/55 hover:text-white">AI Solutions</a></li>
              <li><a href="/#automation" className="text-sm text-white/55 hover:text-white">AI Automation</a></li>
              <li><a href="/#services" className="text-sm text-white/55 hover:text-white">Software Development</a></li>
              <li><a href="/#solutions" className="text-sm text-white/55 hover:text-white">Digital Growth</a></li>
              <li><a href="/#solutions" className="text-sm text-white/55 hover:text-white">Business Management Systems</a></li>
            </ul>
            <ul className="space-y-3">
              <li className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Get Started</li>
              <li><a href="#contact" className="text-sm text-white/55 hover:text-white">Start a Project</a></li>
              <li><a href="https://wa.me/2349153541297" target="_blank" rel="noreferrer" className="text-sm text-white/55 hover:text-white">Talk on WhatsApp</a></li>
              <li><a href="mailto:wisnotech@gmail.com" className="text-sm text-white/55 hover:text-white">Email Us</a></li>
              <li><a href="tel:+2349153541297" className="text-sm text-white/55 hover:text-white">Call Us</a></li>
              <li><a href="#faq" className="text-sm text-white/55 hover:text-white">FAQ</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Wisnotech. All rights reserved.</p>
          <div className="flex gap-6 text-sm"><Link to="/privacy" className="text-white/40 hover:text-white">Privacy</Link><Link to="/terms" className="text-white/40 hover:text-white">Terms</Link></div>
          <p className="text-sm text-white/30">Made in Nigeria, for the world.</p>
        </div>
      </div>
    </footer>
  )
}
