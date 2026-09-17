import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Seo from '../components/Seo.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { Reveal, Faq } from '../components/Premium.jsx'

const HERO = [
  { src: '/portfolio/videos/dune-trailer.mp4', poster: '/portfolio/thumbs/dune-trailer.jpg', label: 'A Desert Epic' },
  { src: '/wino/videos/seedance-demo.mp4', poster: '/wino/thumbs/seedance-demo.jpg', label: 'The Wide Frame' },
  { src: '/portfolio/videos/web-demo.mp4', poster: '/portfolio/thumbs/web-demo.jpg', label: 'Cinema Without Cameras' },
  { src: '/wino/videos/johnwick-character.mp4', poster: '/wino/thumbs/johnwick-character.jpg', label: 'Unbroken' }
]
// Dt = Lt.slice(2,8): 6 videos
const STUDIO_VIDEOS = [
  { id: 'p3', src: '/wino/videos/showreel-3.mp4', poster: '/wino/thumbs/video-thumb-3.jpg', title: 'Portrait, Alive', description: 'One still portrait, given life — an image-to-video push that turns a frame into a scene.' },
  { id: 'p4', src: '/wino/videos/showreel-4.mp4', poster: '/wino/thumbs/video-thumb-4.jpg', title: 'The Character Lives', description: 'A character with one face and endless emotion — consistent, expressive and ready for its close-up.' },
  { id: 'p5', src: '/wino/videos/showreel-5.mp4', poster: '/wino/thumbs/video-thumb-5.jpg', title: 'Made for the Feed', description: 'A vertical social clip engineered to stop the scroll — punchy, on-brand and repeatable.' },
  { id: 'p9', src: '/wino/videos/showreel-6.mp4', poster: '/wino/thumbs/video-thumb-6.jpg', title: 'First Frames of a Film', description: 'A narrative teaser with filmic grading and deliberate pacing — a story in 44 seconds.' },
  { id: 'p10', src: '/wino/videos/vertical-01.mp4', poster: '/wino/thumbs/vertical-01.jpg', title: 'City Pulse 01', description: 'A vertical slice of street life crafted to hold attention in a scrolling feed.' },
  { id: 'p11', src: '/wino/videos/vertical-02.mp4', poster: '/wino/thumbs/vertical-02.jpg', title: 'City Pulse 02', description: 'Another street, another mood — consistent energy for brand-led social content.' }
]
// b = cinematic / film / character for bottom marquee
const MARQUEE_VIDEOS = [
  { id: 'p4', src: '/wino/videos/showreel-4.mp4', poster: '/wino/thumbs/video-thumb-4.jpg', title: 'The Character Lives' },
  { id: 'p9', src: '/wino/videos/showreel-6.mp4', poster: '/wino/thumbs/video-thumb-6.jpg', title: 'First Frames of a Film' },
  { id: 'p13', src: '/wino/videos/portrait-moment.mp4', poster: '/wino/thumbs/portrait-moment.jpg', title: 'Portrait in Motion' },
  { id: 'p14', src: '/wino/videos/cinematic-01.mp4', poster: '/wino/thumbs/cinematic-01.jpg', title: 'A Film Still, Breathing' },
  { id: 'p18', src: '/wino/videos/johnwick-character.mp4', poster: '/wino/thumbs/johnwick-character.jpg', title: 'Unbroken' },
  { id: 'p20', src: '/portfolio/videos/dune-trailer.mp4', poster: '/portfolio/thumbs/dune-trailer.jpg', title: 'A Desert Epic' }
]

const MODULES = [
  ['01', 'The New Era of AI-Powered Building', 'Understand how AI is changing software development and where opportunities are emerging.', ['The modern AI building ecosystem', 'How vibe coding actually works', 'Choosing the right AI tools', 'Why product thinking beats blind prompting']],
  ['02', 'Turning Ideas Into Product Blueprints', "Before building anything, you need to know what you're building.", ['Validate and structure an idea', 'Break large ideas into features', 'Define users and use cases', 'Create a build roadmap']],
  ['03', 'Vibe Coding: Building With AI', 'Learn to use AI coding tools to create real applications — and fix them when they break.', ['Product prompting & iteration', 'Understanding project structure', 'Debugging and fixing features', 'Scaling a project']],
  ['04', 'Building SaaS Products', 'The architecture behind modern software products.', ['User accounts & auth', 'Dashboards, DB & admin systems', 'Payments, APIs & AI features']],
  ['05', 'Building AI-Powered Applications', 'Turn AI capabilities into useful products.', ['AI chat & assistants', 'AI content & analysis tools', 'AI generation workflows']],
  ['06', 'Agentic AI: Building Systems That Can Do Work', 'Go beyond chatbots — build agents that execute multi-step work.', ['Agent architecture & memory', 'Tools, actions & decision-making', 'Multi-agent orchestration']],
  ['07', 'AI Automation', 'Connect systems and automate workflows.', ['APIs, webhooks & triggers', 'AI-powered business automation', 'Data movement & notifications']],
  ['08', 'Building Mobile Applications With AI', 'From idea to functional mobile app with AI-accelerated workflows.', ['App planning & user flows', 'Interface & core features', 'Testing & iteration']],
  ['09', 'APIs, Integrations & Connecting Systems', 'How modern products communicate.', ['AI, database & payments APIs', 'External services & webhooks', 'Your product ↔ AI ↔ DB ↔ automation']],
  ['10', 'Debugging, Deployment & Shipping', 'Building is only the beginning — ship it.', ['Debug AI-generated projects', 'Test, improve & deploy', 'Connect domains & go live — Build it. Fix it. Ship it.']]
]
const PROJECTS = [
  ['01', 'An AI-Powered SaaS Product', 'A functional web application with real product features — auth, dashboard, AI.'],
  ['02', 'An Autonomous AI Agent', 'A system that handles multi-step tasks, uses tools and delivers results.'],
  ['03', 'An AI Automation System', 'Connected tools and services that run a workflow automatically.'],
  ['04', 'An AI-Powered Mobile Application', 'A mobile app idea taken to a functional product.'],
  ['05', 'Your Own Product Idea', 'Your idea → your blueprint → your product → your launch.']
]
const FAQS = [
  ['Do I need to know how to code?', 'No prior professional programming experience is required. The masterclass is designed to help you understand how to build with modern AI tools. You should be prepared to learn, experiment, troubleshoot and work through technical challenges.'],
  ['Is this for complete beginners?', 'Yes. Beginners can join. The training builds from foundational concepts into more advanced product-building, AI agent, automation and deployment workflows.'],
  ['Will I learn how to build SaaS products?', 'Yes. The masterclass covers the process and systems involved in building modern AI-powered web products.'],
  ['Will we build AI agents?', 'Yes. You will learn the concepts and workflows behind agentic AI systems and how AI agents can perform multi-step tasks.'],
  ['Will I learn automation?', "Yes. You'll explore how APIs, triggers, workflows, AI and external services can be connected to automate useful processes."],
  ['What tools will we use?', 'The AI ecosystem changes quickly. The masterclass focuses on relevant modern tools and, more importantly, the workflows and principles behind using them effectively.'],
  ['How much is the masterclass?', 'Early bird is ₦300,000. After early bird closes, it becomes ₦400,000. Joining early saves you ₦100,000.'],
  ['Will the sessions be recorded?', 'Yes. You will have access to all sessions.'],
  ['How long is the masterclass?', '1 week intensive.'],
  ['What happens after I register?', "After successful registration, you'll receive onboarding information and instructions for accessing the masterclass."],
  ['How do I contact you or learn more?', 'WhatsApp & calls: +234 915 354 1297. You can also reach us through the website — we respond fast.']
]
const AUDIENCES = [
  ['Creators', 'You want to create AI movies, commercials, social content and visual stories.'],
  ['Filmmakers', 'You want to understand how AI can become part of your filmmaking toolkit.'],
  ['Aspiring Builders', "You have software ideas but don't know where to begin."],
  ['Entrepreneurs', 'You want to identify business opportunities created by AI.'],
  ['Freelancers', 'You want to add AI-powered services to your existing skills.'],
  ['Marketers', 'You want to use AI to produce content and systems for businesses.'],
  ['Business Owners', 'You want to understand how AI can automate and improve your operations.'],
  ['Founders', 'You want to prototype ideas faster and explore MVPs without immediately building a large technical team.'],
  ['Beginners', "You've never thought of yourself as technical but you're willing to learn."]
]
const PAYSTACK = 'https://paystack.shop/pay/96toe5qx8t'
const SELAR = 'https://selar.com/1zbx702773'
const WHATSAPP = 'https://wa.me/2349153541297'

function fmt(n) { return '₦' + n.toLocaleString('en-NG') }

export default function Masterclass() {
  const [n, setN] = useState(0)
  const [prog, setProg] = useState(0)
  const go = (t) => { const p = HERO.length; setN(((t % p) + p) % p); setProg(0) }
  return (
    <>
      <Seo title="Agentic AI + Vibe Coding Masterclass" description="Learn how to turn your ideas into real software, AI agents, SaaS products, mobile apps and automated systems using the new generation of AI-powered building tools." path="/masterclass" />
      {/* HERO — video carousel exactly like original */}
      <section id="overview" className="relative overflow-hidden pt-36 pb-24 sm:pt-40">
        <div className="absolute inset-0 opacity-45" aria-hidden>
          <AnimatePresence initial={false}>
            <motion.video key={HERO[n].src} data-slide={n} autoPlay muted playsInline preload="auto" src={HERO[n].src} poster={HERO[n].poster}
              onTimeUpdate={e => { const v = e.currentTarget; if (String(n) === v.dataset.slide) setProg(v.duration ? v.currentTime / v.duration : 0) }}
              onEnded={() => go(n + 1)}
              initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 0.9 }, scale: { duration: 6, ease: 'linear' } }}
              className="absolute inset-0 h-full w-full object-cover" />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-[#080808]/50" aria-hidden />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 35%, transparent 0%, rgba(8,8,8,0.55) 70%, #080808 100%)' }} aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="animate-aurora absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(59,123,255,0.35) 0%, transparent 65%)' }} />
          <div className="animate-aurora absolute right-[-120px] top-40 h-[460px] w-[460px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(139,122,255,0.32) 0%, transparent 65%)', animationDelay: '-6s' }} />
        </div>

        {/* hero controls */}
        <div className="absolute bottom-5 right-4 z-20 flex flex-col items-end gap-2.5 sm:bottom-8 sm:right-8">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur">
            <button onClick={() => go(n - 1)} aria-label="Previous clip" className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white">‹</button>
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero clips">
              {HERO.map((t, l) => <button key={t.src} role="tab" aria-selected={l === n} aria-label={t.label} onClick={() => go(l)} className={`h-1.5 rounded-full transition-all ${l === n ? 'w-5 bg-white' : 'w-1.5 bg-white/35'}`} />)}
            </div>
            <button onClick={() => go(n + 1)} aria-label="Next clip" className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white">›</button>
          </div>
          <div className="flex items-center gap-2.5"><p className="text-xs text-white/70">{HERO[n].label} <span className="text-white/40">• {n + 1}/{HERO.length}</span></p><div className="h-0.5 w-20 overflow-hidden rounded-full bg-white/15"><div className="h-full rounded-full bg-neon" style={{ width: `${Math.min(100, Math.max(0, prog * 100))}%` }} /></div></div>
        </div>

        <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-white/70 backdrop-blur">Tech Bootcamp — Wisnotech School of Technology</span>
          <h1 className="mt-8 text-[clamp(2.75rem,7vw,4.75rem)] font-bold leading-[1.03] tracking-tight"><span className="text-shimmer">The AI Creator Masterclass.</span><br />Create, Build & Sell.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">Learn how to use AI to create cinematic entertainment, build real software, launch digital products & turn your skills into a business.</p>
          <ul className="mx-auto mt-6 max-w-xl space-y-2 text-left text-[15px] text-white/65">
            <li className="flex gap-2.5">🎬 Create cinematic AI movies, scenes and entertainment.</li>
            <li className="flex gap-2.5">💻 Build real websites, SaaS products and applications.</li>
            <li className="flex gap-2.5">📱 Create mobile applications.</li>
            <li className="flex gap-2.5">🤖 Build AI agents that can perform useful tasks.</li>
            <li className="flex gap-2.5">⚙️ Automate business processes.</li>
            <li className="flex gap-2.5">💼 Package your AI skills into services.</li>
            <li className="flex gap-2.5">🚀 Turn what you learn into potential business opportunities.</li>
          </ul>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={PAYSTACK} target="_blank" rel="noreferrer" className="btn-primary">Secure Your Seat — {fmt(300000)} →</a>
            <a href="#videos" className="btn-secondary">▶ Watch the Work</a>
          </div>
          <div className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4">
            {[['Remote', '& Physical'], ['Dec 2026', 'Starts then'], ['Limited', 'Slots available']].map(([a, b]) => <div key={b} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 backdrop-blur-xl"><p className="text-2xl font-bold">{a}</p><p className="mt-1 text-xs text-muted">{b}</p></div>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#080808]">Fee: {fmt(300000)}</span>
            <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/50 line-through">Late: {fmt(400000)}</span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#080808]">Save {fmt(100000)}</span>
          </div>
          <p className="mt-2 text-[11px] text-white/30">Limited early bird registration.</p>
        </div>

        <a href="#content" aria-label="Scroll to content" className="absolute bottom-28 left-1/2 z-20 -translate-x-1/2 text-white/40 hover:text-white sm:bottom-32"><span className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.3em]">Scroll ↓</span></a>

        {/* bottom video marquee */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/10 bg-[#080808]/80 backdrop-blur-md">
          <div className="animate-marquee flex w-max items-center gap-3 py-3 px-4">
            {[...MARQUEE_VIDEOS, ...MARQUEE_VIDEOS].map((t, l) => (
              <div key={`${t.id}-${l}`} className="group relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black sm:h-20 sm:w-36">
                <video autoPlay loop muted playsInline preload="metadata" poster={t.poster} className="h-full w-full object-cover opacity-80 group-hover:opacity-100"><source src={t.src} type="video/mp4" /></video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-[9px] font-semibold uppercase tracking-wider text-white/70">{t.title.length > 18 ? t.title.slice(0, 18) + '…' : t.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section id="content" className="section">
        <div className="container-wide max-w-3xl">
          <Reveal><p className="eyebrow">Why now</p><h2 className="mt-5 text-4xl md:text-5xl font-semibold">The AI era is creating a new kind of creator.</h2><p className="mt-5 text-muted">That doesn&apos;t mean AI makes expertise irrelevant. It makes expertise more powerful.</p></Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <Reveal><div className="card h-full"><h3 className="font-semibold">But someone who understands:</h3><p className="mt-2 text-sm text-muted">Storytelling + directing + cinematography + prompting + visual consistency + editing + AI tools</p><p className="mt-3 text-sm">can potentially produce work at a completely different level.</p></div></Reveal>
            <Reveal delay={0.08}><div className="card h-full"><h3 className="font-semibold">Product thinking + UX + architecture + AI coding + APIs + databases + debugging + deployment</h3><p className="mt-2 text-sm">can actually turn an idea into something people can use. That&apos;s the difference we&apos;re teaching.</p></div></Reveal>
          </div>
          <Reveal><div className="card mt-6 text-center"><p className="eyebrow">The masterclass</p><h3 className="mt-2 text-2xl font-bold">Three skills. One big opportunity.</h3><p className="mt-2 text-sm text-muted">Because knowing how to create something is valuable. Knowing how to build something is valuable. But knowing how to create, build AND sell? That&apos;s where things become very interesting.</p></div></Reveal>
        </div>
      </section>

      {/* HOLLYWOOD */}
      <section className="section bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <Reveal><p className="eyebrow">Hollywood-Style AI Movie Production</p><h2 className="mt-3 text-3xl font-bold">What if creative capability becomes more important than production infrastructure?</h2><p className="mt-4 text-sm text-muted">The biggest opportunity in AI filmmaking may not be creating cheaper videos. It may be creating an entirely new generation of filmmakers. Case study — Transformers: Dark of the Moon — $195 million → $1.1 billion worldwide. Instead: imagine AI becoming another layer of the production pipeline. Don&apos;t be the person who can only generate a cool clip. Become the person who can produce an entire sequence.</p></Reveal>
        </div>
      </section>

      {/* VIDEOS — exact Dt grid */}
      <section id="videos" className="section bg-white/[0.02]">
        <div className="container-wide">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl"><p className="eyebrow">Student & Studio Work</p><h2 className="mt-5 text-4xl md:text-5xl font-semibold">Watch what you&apos;ll learn to make.</h2><p className="mt-5 text-lg text-muted">A selection of AI video work from the studio — commercials, cinematic clips and social content, all made with the same workflows taught in the masterclass.</p></div>
            <a href="#pricing" className="btn-secondary hidden lg:inline-flex">Start creating →</a>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STUDIO_VIDEOS.map(t => (
              <Reveal key={t.id}>
                <div className="card group overflow-hidden !p-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <video autoPlay loop muted playsInline preload="metadata" poster={t.poster} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"><source src={t.src} type="video/mp4" /></video>
                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur">Studio Work</span>
                    <span className="absolute bottom-3 left-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#080808]">Play</span>
                  </div>
                  <div className="p-5"><p className="text-sm font-semibold">{t.title}</p><p className="mt-1 text-xs text-muted line-clamp-2">{t.description.slice(0, 110)}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET + BUILD */}
      <section className="section">
        <div className="container-wide max-w-4xl">
          <Reveal><h2 className="text-3xl font-bold">The AI gold rush. Don&apos;t wait until it&apos;s over to learn how to mine.</h2><p className="mt-4 text-sm text-muted">How much could an AI creator make? $500–$800 per day, $120,000–$140,000 range — not promises, but direction. Experiment. Fail. Improve. Create again. What if you could turn your ideas into working software? Build real products. Not just landing pages. Because a skill becomes much more valuable when you know how to sell the outcome. You won&apos;t leave with just notes. You&apos;ll build.</p></Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {[{ n: 'Antigravity', img: '/assets/antigravity.jpg', d: 'A versatile AI agent framework for building intelligent systems that reason, plan and execute complex tasks autonomously.' }, { n: 'Hermes Agent', img: '/assets/hermes-agent.jpg', d: 'A powerful AI assistant platform for creating conversational agents that can search, analyze, generate and interact with external tools.' }, { n: 'Open Code', img: '/assets/open-code.jpg', d: 'An open-source AI coding assistant that helps you write, debug, and refactor code faster with intelligent suggestions and context-aware completions.' }].map(t => <Reveal key={t.n}><div className="card !p-0 overflow-hidden"><img src={t.img} alt={t.n} className="aspect-video w-full object-cover" loading="lazy" /><div className="p-5"><h3 className="font-semibold text-sm">{t.n}</h3><p className="mt-2 text-xs text-muted">{t.d}</p><p className="mt-2 text-[11px] text-emerald-300">Free to use</p></div></div></Reveal>)}
          </div>
          <Reveal><p className="mt-6 text-sm text-muted">Tools will change. New models will appear. But the ability to understand the workflow remains. Your Own AI Video Generation Access — Your goal isn&apos;t one cool clip. It&apos;s consistently creating. Learn. Build. Repeat.</p></Reveal>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="section bg-white/[0.02]">
        <div className="container-wide">
          <p className="eyebrow">Curriculum</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Build Real Products With AI.</h2>
          <p className="mt-3 max-w-2xl text-muted text-sm">A structured learning program that takes you from idea to deployment. From your first prompt to your final product.</p>
          <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-white/10">
            {MODULES.map(([nn, t, d, b]) => <div key={nn} className="bg-[#111] p-6 sm:grid sm:grid-cols-[80px_1fr_1fr] gap-6"><span className="font-mono text-lime-300">{nn}</span><div><h3 className="font-semibold text-sm">{t}</h3><p className="text-xs text-muted mt-1">{d}</p></div><ul className="text-xs text-muted space-y-1">{b.map(x => <li key={x}>• {x}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      {/* PROJECTS + AUDIENCE */}
      <section id="projects" className="section">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold">You won&apos;t leave with just notes. You&apos;ll build.</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">{PROJECTS.map(([nn, t, d]) => <div key={nn} className="card"><p className="font-mono text-xs text-lime-300">{nn}</p><h3 className="font-semibold text-sm mt-1">{t}</h3><p className="text-xs text-muted mt-1">{d}</p></div>)}</div>
        </div>
        <div className="container-wide mt-12">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2 className="mt-3 text-3xl font-bold">Who is this masterclass for?</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{AUDIENCES.map(([t, d]) => <div key={t} className="card"><h3 className="font-semibold text-sm">{t}</h3><p className="text-xs text-muted mt-1">{d}</p></div>)}</div>
          <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
            <img src="/assets/shedrack-akue-640.jpg" alt="Shedrack Akue — Founder, Wisnotech" className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover object-top" loading="lazy" />
            <div><p className="eyebrow">Instructor</p><h3 className="mt-2 text-2xl font-bold">Shedrack Akue — Founder, Wisnotech</h3><p className="mt-3 text-sm text-muted">Learn from someone who actually builds with AI. Capability comes from doing. Learn. Build. Repeat. You are building a capability — not simply completing a course.</p></div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section bg-white/[0.02]">
        <div className="container-wide max-w-2xl text-center">
          <p className="eyebrow">Your investment.</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">THE AI CREATOR MASTERCLASS — CREATE. BUILD. SELL.</h2>
          <p className="mt-3 text-sm text-muted">Learn the tools. Build the projects. Create the portfolio. The AI gold rush is happening across Entertainment, Advertising, Software, Marketing, Education, Business automation, Content creation.</p>
          <div className="card mt-8 text-left">
            <p className="text-xs uppercase tracking-widest text-lime-300">Early Bird Access — EARLY BIRD — Full access</p>
            <p className="mt-4 text-4xl font-extrabold">{fmt(300000)} <span className="text-lg text-white/40 line-through">{fmt(400000)}</span></p>
            <p className="text-xs text-white/50">Save {fmt(100000)} • Limited early bird registration. Join before the price moves. Limited Slots — Remote & Physical. Remote & Physical • December 2026.</p>
            <p className="mt-4 font-semibold text-sm">Choose Your Payment Method</p>
            <p className="mt-1 text-xs text-white/40">Select the option that works best for your location.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a href={PAYSTACK} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00C3F7]/50 hover:shadow-[0_16px_40px_-16px_rgba(0,195,247,0.5)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" aria-hidden />
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#00C3F7]/20 blur-2xl transition-opacity opacity-60 group-hover:opacity-100" aria-hidden />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white p-1"><img src="/assets/paystack-banner.png" alt="" className="h-full w-full object-contain" loading="lazy" /></span>
                  <span className="text-left"><span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">For Africa • NGN</span><span className="block text-sm font-bold text-white">Pay with Paystack <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span></span><span className="block text-[11px] text-white/45">Secure • {fmt(300000)}</span></span>
                </div>
              </a>
              <a href={SELAR} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:shadow-[0_16px_40px_-16px_rgba(139,92,246,0.5)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" aria-hidden />
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#8B5CF6]/20 blur-2xl transition-opacity opacity-60 group-hover:opacity-100" aria-hidden />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white p-1"><img src="/assets/selar-banner.png" alt="" className="h-full w-full object-contain" loading="lazy" /></span>
                  <span className="text-left"><span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">International • USD</span><span className="block text-sm font-bold text-white">Pay with Selar <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span></span><span className="block text-[11px] text-white/45">Secure • $222.84</span></span>
                </div>
              </a>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-secondary mt-3 w-full justify-center">Ask on WhatsApp</a>
          </div>
          <div className="mt-8 text-left"><Faq items={FAQS} /></div>
          <div className="card mt-8 text-center"><h3 className="text-2xl font-bold">Stop asking what AI can do. Start building what you want AI to do.</h3><p className="mt-2 text-sm text-muted">Ready to create, build & sell with AI? Your seat is your starting point. Don&apos;t get left behind. The future is being built right now.</p></div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
