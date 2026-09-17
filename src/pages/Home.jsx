import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { Reveal, Faq } from '../components/Premium.jsx'
import { POSTS } from '../data.js'
import { SHOWREEL, HERO_CLIPS, VideoCard } from '../videoData.jsx'

const FAQS = [
  ['What does Wisnotech do?', 'We help businesses build AI solutions, automate workflows, develop custom software and create digital systems designed for growth — under one roof.'],
  ['Do you work with startups and small businesses?', "Yes. We work with startups, small and medium businesses and agencies — sizing every project to the stage you're at right now."],
  ['How much does a project cost?', "Every project is scoped to its goals. Send us a brief through the contact form and you'll get a clear, fixed quote before work begins — no surprises."],
  ['How long does a typical project take?', 'It depends on scope. Simple websites and automations can ship in a few weeks, while larger products follow a milestone plan with clear dates.'],
  ['Can you automate my existing business processes?', "Yes. Describe the process and we'll build the workflow — lead capture, follow-ups, support, reporting and more."],
  ['Can Wisnotech build custom AI applications?', 'Yes. Custom AI tools, assistants and integrations are a core part of what we do — built around your workflow and your data.'],
  ['Do you provide support after launch?', 'Yes. Every launch includes support and training, plus a roadmap for improving the system as your business grows.']
]

export default function Home() {
  return (
    <>
      <Seo path="/" />
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="animate-aurora absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(59,123,255,0.35) 0%, transparent 65%)' }} />
          <div className="animate-aurora absolute right-[-120px] top-40 h-[460px] w-[460px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(139,122,255,0.32) 0%, transparent 65%)', animationDelay: '-6s' }} />
        </div>
        <div className="container-wide relative grid items-center gap-14 lg:grid-cols-2">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }} className="max-w-xl">
            {['AI • Software • Automation', 'Build Smarter. Automate Faster. Grow Bigger.', 'Wisnotech helps businesses use AI, software and automation to streamline operations, attract customers and build digital products that create real business value.'].map((t, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className={i === 0 ? 'eyebrow' : i === 1 ? 'mt-6 text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.03] tracking-tight' : 'mt-6 text-lg text-muted'}>
                {i === 1 ? <><span className="text-shimmer">Build Smarter.</span><br />Automate Faster.<br />Grow Bigger.</> : t}
              </motion.div>
            ))}
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Start a Project →</a>
              <a href="#work" className="btn-secondary">View Our Work</a>
            </motion.div>
            <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-8 text-xs text-white/40">Automation that pays for itself • Built on modern AI + software</motion.p>
          </motion.div>
          <Reveal className="relative">
            <div className="card relative overflow-hidden !p-0">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3"><span className="font-mono text-xs text-white/50">wisnotech.ai/workflow</span><span className="flex items-center gap-1.5 text-xs text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />Live</span></div>
              <div className="grid grid-cols-3 gap-2 p-4 text-center text-xs">
                {[['Input', 'Forms · Email · Docs'], ['AI Engine', 'Reasoning · Generation'], ['Output', 'CRM · Reports · Replies']].map(([t, d]) => <div key={t} className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><p className="font-semibold text-white">{t}</p><p className="mt-1 text-white/50">{d}</p></div>)}
              </div>
              <div className="space-y-2 px-4 pb-5 text-xs text-white/60">
                <p className="rounded-lg bg-emerald-400/10 border border-emerald-400/20 px-3 py-2">✓ Workflow completed — lead routed to CRM</p>
                <p className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2">✦ AI assistant replied to a customer in seconds</p>
                <p className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2">● Deployed new app build to production</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-5"><div className="container-wide flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/40"><span>Technology for ambitious businesses</span><span>AI • Automation • Web Apps • SaaS • Cloud • Digital Systems</span></div></section>

      <section id="about" className="section">
        <div className="container-wide grid gap-10 lg:grid-cols-2 items-center">
          <Reveal><p className="eyebrow">About Wisnotech</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Technology should solve problems, not create more of them.</h2><p className="mt-5 text-lg text-muted">Wisnotech combines artificial intelligence, software development and digital growth to help people and organizations work smarter.</p><p className="mt-3 text-muted">Practical, useful, scalable technology — built around real business outcomes.</p><div className="mt-6 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-bold text-black">SA</span><div><p className="font-semibold text-sm">Shedrack Akue</p><p className="text-xs text-white/40">Founder, Wisnotech</p></div></div></Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[['Automate Your Business', 'AI workflows that run themselves.'], ['Build Your Software', 'Web apps, SaaS, internal tools.'], ['Generate More Customers', 'Systems to attract and convert.'], ['Create Content at Scale', 'AI content without expanding team.']].map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card h-full"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="solutions" className="section bg-white/[0.02]">
        <div className="container-wide">
          <Reveal><p className="eyebrow">What are you trying to solve?</p><h2 className="mt-4 text-4xl font-semibold">Tell us yours — we&apos;ll bring the technology.</h2></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[['AI', 'Practical AI built into operations.', ['AI Applications', 'AI Automation', 'AI Assistants', 'AI Content Systems', 'AI Integrations']], ['SOFTWARE', 'Custom software engineered to scale.', ['Custom Web Applications', 'SaaS Development', 'Business Management Systems', 'Internal Tools', 'Websites & Platforms']], ['GROWTH', 'Systems to attract, capture, convert.', ['Conversion Websites', 'Lead Generation Systems', 'Content Systems', 'Business Automation', 'AI Marketing Tools']]].map(([g, d, items]) => <Reveal key={g}><div className="card h-full"><h3 className="font-bold">{g}</h3><p className="text-sm text-muted mt-1">{d}</p><ul className="mt-4 space-y-2 text-sm text-muted">{items.map(x => <li key={x}>• {x}</li>)}</ul></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container-wide">
          <Reveal><p className="eyebrow">Services</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold">Technology that moves your business forward.</h2></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              ['Wino • AI Product • In development', 'WINO — AI Video Creation', 'Turns prompts and images into ready-to-publish videos.', '/wino'],
              ['Wisnotech Studios • Live studio', 'Creative Production', 'Cinematic ads, UGC, trailers and social content.', '/portfolio'],
              ['Wisne — AI Assistant • Live on this site', 'AI Advisor + Voice', "Hey there! I'm Wisne — ask about services, pricing, or what to build first.", '/#contact'],
              ['Wisnotech AI Academy • Live courses', 'Education Platform', 'Hands-on AI, automation, prompting and video.', '/academy']
            ].map(([badge, t, d, to]) => <Reveal key={t}><Link to={to} className="card block h-full hover:border-neon/40 hover:shadow-[0_24px_64px_-24px_rgba(59,123,255,0.4)]"><p className="text-xs text-neon">{badge}</p><h3 className="mt-2 text-xl font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p><span className="mt-4 inline-block text-sm text-neon">Open →</span></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section id="work" className="section bg-white/[0.02]">
        <div className="container-wide text-center max-w-2xl"><Reveal><p className="eyebrow">Selected work</p><h2 className="mt-4 text-4xl font-semibold">Built for real-world problems.</h2><p className="mt-4 text-muted">AI Videos • AI Images • Text to Video • Image to Video — Cinematic • Advertising • Character • Social • Film</p></Reveal></div>
        <div className="container-wide mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{SHOWREEL.slice(0, 3).map(v => <Reveal key={v.src}><VideoCard {...v} /></Reveal>)}</div>
        <div className="container-wide mt-6 text-center"><Link to="/portfolio" className="btn-secondary mt-4">See the full studio portfolio</Link><p className="mt-4 text-xs text-white/40">{HERO_CLIPS[0].label} • {HERO_CLIPS[1].label} • {HERO_CLIPS[2].label}</p></div>
        <div className="container-wide mt-8"><video src="/wino/videos/showcase-matrix.mp4" poster="/wino/thumbs/showcase-matrix.jpg" autoPlay muted loop playsInline controls className="w-full rounded-2xl border border-white/10 aspect-video object-cover" /></div>
      </section>

      <section id="automation" className="section">
        <div className="container-wide">
          <Reveal><p className="eyebrow">AI Automation</p><h2 className="mt-4 text-4xl font-semibold">Turn repetitive work into automated systems.</h2><p className="mt-4 max-w-2xl text-muted">Capture, organise, respond and report — so your people focus on what moves the business.</p></Reveal>
          <div className="mt-8 flex flex-wrap gap-2">{['Lead capture', 'Email follow-ups', 'Customer support', 'Appointments', 'Content generation', 'CRM updates', 'Document processing', 'AI assistants', 'Reporting', 'Sales follow-ups'].map(c => <span key={c} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/70">{c}</span>)}</div>
        </div>
      </section>

      <section id="process" className="section bg-white/[0.02]">
        <div className="container-wide">
          <Reveal><p className="eyebrow">How it works</p><h2 className="mt-4 text-4xl font-semibold">From idea to launch in four clear steps.</h2></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[['01 Discover', 'Understand goals and what success looks like.'], ['02 Strategize', 'Clear plan, scope and transparent quote.'], ['03 Build', 'Design, build and iterate in milestones.'], ['04 Launch & Grow', 'Go live with support + roadmap.']].map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card relative"><span className="outline-text absolute right-4 top-3 text-5xl font-bold">{t.slice(0, 2)}</span><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal><p className="eyebrow">From the blog</p><h2 className="mt-4 text-4xl font-semibold">Insights on AI, automation & growth.</h2></Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">{POSTS.slice(0, 2).map(p => <Link key={p.slug} to={`/blog/${p.slug}`} className="card"><p className="text-xs text-neon">{p.category}</p><h3 className="mt-2 font-semibold">{p.title}</h3><p className="mt-2 text-sm text-muted line-clamp-2">{p.excerpt}</p></Link>)}</div>
        </div>
      </section>

      <section id="faq" className="section bg-white/[0.02]">
        <div className="container-wide max-w-4xl"><Reveal><p className="eyebrow text-center">FAQ</p><h2 className="text-3xl font-semibold text-center">Frequently asked questions.</h2></Reveal><div className="mt-10"><Faq items={FAQS} /></div></div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal><div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center sm:p-16" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(80,140,255,0.16) 0%, transparent 65%)' }}><p className="eyebrow">Start building</p><h2 className="mx-auto mt-4 max-w-xl text-4xl md:text-5xl font-semibold">Ready to build something better?</h2><p className="mx-auto mt-4 max-w-xl text-muted">Rated on Google — read our reviews.</p><div className="mt-8 flex justify-center gap-4"><a href="#contact" className="btn-primary">Start a Project</a><a href="#contact" className="btn-secondary">Talk to Wisnotech</a></div></div></Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
