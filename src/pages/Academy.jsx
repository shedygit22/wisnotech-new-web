import { useState, useEffect } from 'react'
import Seo from '../components/Seo.jsx'
import Logo from '../components/Logo.jsx'

const COHORT = { label: 'AI VIDEO CREATION COHORT — 2026', seats: 40, deadline: 'March 15, 2026' }
const MODULES = [
  ['01', 'Understanding the New AI Video Landscape', "Learn the ecosystem, the major tools, what they are actually capable of, and how to build an efficient creative workflow that doesn't collapse when a platform updates.", ['The tool landscape, de-hyped', 'Choosing the right tool per job', 'A workflow that survives updates']],
  ['02', 'The Art of AI Prompting for Video', 'Write prompts that control camera movement, composition, characters, lighting, environment, mood, style, action and cinematic direction — intentionally, not by luck.', ['Camera and composition control', 'Character, wardrobe and world coherence', 'Light, mood and style direction']],
  ['03', 'Creating Consistent Characters and Worlds', 'The difference between a random clip and a real project is consistency. Learn how to keep the same face, same world and same logic across scenes.', ['Character lock and face consistency', 'World and environment continuity', 'Scene-to-scene coherence']],
  ['04', 'Cinematic AI Filmmaking', 'Story, shot design, scene construction and camera direction. Make AI footage feel like cinema, not a tech demo.', ['Story and structure', 'Shot design and camera language', 'Building a sequence that cuts']],
  ['05', 'AI Commercials and Brand Content', 'Produce premium product and brand videos that a marketing team would actually pay for — from concept to final delivery.', ['Product as hero', 'Brand tone and art direction', 'Ad structure that sells']],
  ['06', 'AI Content for Social Media and YouTube', 'Build repeatable systems for short-form, faceless YouTube, social campaigns, educational content and viral visual formats.', ['Short-form and Reels systems', 'Faceless YouTube workflows', 'Campaign and series thinking']],
  ['07', 'Editing and Post-Production', 'Generated clips are raw material. Learn to transform them into polished final productions — edit, sound, voice, music, colour and delivery.', ['Editing AI footage for rhythm', 'Sound, voice and music', 'Colour and final delivery']],
  ['08', 'Turning AI Video Into Income', 'Freelance services, AI video production, commercial work, content businesses, YouTube, agencies and personal brand — real paths, not theory.', ['Offers that clients understand', 'Pricing and packaging', 'Finding and keeping work']]
]
// m = first 6 published videos (hero showreel)
const HERO_MAIN = { src: '/wino/videos/showreel-1.mp4', poster: '/wino/thumbs/video-thumb-1.jpg', title: 'Fresh at Golden Hour' }
const HERO_THUMBS = [
  { id: 'p2', src: '/wino/videos/showreel-2.mp4', poster: '/wino/thumbs/video-thumb-2.jpg', title: 'Drop Day' },
  { id: 'p3', src: '/wino/videos/showreel-3.mp4', poster: '/wino/thumbs/video-thumb-3.jpg', title: 'Portrait, Alive' },
  { id: 'p4', src: '/wino/videos/showreel-4.mp4', poster: '/wino/thumbs/video-thumb-4.jpg', title: 'The Character Lives' },
  { id: 'p5', src: '/wino/videos/showreel-5.mp4', poster: '/wino/thumbs/video-thumb-5.jpg', title: 'Made for the Feed' }
]
// b = next 8 videos
const PROJECT_VIDEOS = [
  { src: '/wino/videos/vertical-01.mp4', poster: '/wino/thumbs/vertical-01.jpg', title: 'City Pulse 01', desc: 'A vertical slice of street life crafted to hold attention in a scrolling feed.' },
  { src: '/wino/videos/vertical-02.mp4', poster: '/wino/thumbs/vertical-02.jpg', title: 'City Pulse 02', desc: 'Another street, another mood — consistent energy for brand-led social content.' },
  { src: '/wino/videos/vertical-03.mp4', poster: '/wino/thumbs/vertical-03.jpg', title: 'City Pulse 03', desc: 'The third beat in a series — proof a campaign can live on repeat.' },
  { src: '/wino/videos/portrait-moment.mp4', poster: '/wino/thumbs/portrait-moment.jpg', title: 'Portrait in Motion', desc: 'A shallow-depth portrait that moves — cinematic depth for premium brand moments.' },
  { src: '/wino/videos/cinematic-01.mp4', poster: '/wino/thumbs/cinematic-01.jpg', title: 'A Film Still, Breathing', desc: 'A composed 16:9 shot with a filmic grade — the quiet power of a locked-off scene.' },
  { src: '/wino/videos/cinematic-02.mp4', poster: '/wino/thumbs/cinematic-02.jpg', title: 'The Long Take', desc: 'Subtle camera drift across a cinematic frame — motion that never distracts.' },
  { src: '/wino/videos/showcase-matrix.mp4', poster: '/wino/thumbs/showcase-matrix.jpg', title: 'Six Stories, One Frame', desc: 'A wide montage of multiple AI generations — the scale of one workflow.' },
  { src: '/wino/videos/seedance-demo.mp4', poster: '/wino/thumbs/seedance-demo.jpg', title: 'The Wide Frame', desc: 'An ultrawide text-to-video generation — cinematic scope from a single line.' }
]
const IG_ADS = [
  { src: '/portfolio/videos/vertical-a1.mp4', poster: '/portfolio/thumbs/vertical-a1.jpg', title: 'Glow Serum — UGC Ad', brand: 'Skincare · Premium UGC' },
  { src: '/portfolio/videos/vertical-a2.mp4', poster: '/portfolio/thumbs/vertical-a2.jpg', title: 'Streetwear Drop — UGC Ad', brand: 'Fashion · Premium UGC' },
  { src: '/portfolio/videos/vertical-a3.mp4', poster: '/portfolio/thumbs/vertical-a3.jpg', title: 'Matcha Ritual — UGC Ad', brand: 'Food & Beverage · Premium UGC' },
  { src: '/portfolio/videos/vertical-a4.mp4', poster: '/portfolio/thumbs/vertical-a4.jpg', title: 'Gym Bottle — UGC Ad', brand: 'Fitness · Premium UGC' },
  { src: '/portfolio/videos/vertical-a5.mp4', poster: '/portfolio/thumbs/vertical-a5.jpg', title: 'Scent Story — UGC Ad', brand: 'Beauty · Premium UGC' }
]
const FAQS = [
  ['Do I need previous video editing experience?', 'No. We start from fundamentals and build up. If you can use a computer, you can start. Editors move faster but beginners are fully supported with templates and live help.'],
  ['Do I need to know how to use AI already?', 'No. The first two modules give you the landscape and prompting foundations. The rest is hands-on — you learn by making.'],
  ['Which AI tools will we use?', 'The cohort is workflow-first, not tool-locked. We teach principles that survive platform changes and show the current best stack — it updates as tools evolve.'],
  ['Will the sessions be recorded?', 'Yes. Every live session is recorded and available to you for 12 months, along with templates, prompts and project files.'],
  ['How long does the cohort last?', 'Six weeks, live cohort experience with weekly sessions, practical assignments and guided projects. Expect 4–6 hours per week.'],
  ['Can I pay in Naira?', "Yes. Use the NGN toggle on the pricing card. You'll be routed to the correct checkout for your currency."],
  ['Can international students join?', 'Yes. International students join from anywhere and pay in USD. Sessions are scheduled to work across time zones and all recordings are available.'],
  ['What happens after I join?', 'You receive onboarding, community access and your first pre-work within 24 hours. Day one is live and practical.']
]
const TESTIMONIALS = [
  ['I went from experimenting with AI tools to creating complete video projects I could actually show clients.', 'Amara K.', 'Creator, Lagos'],
  ['The workflow is what changed everything. I finally know which tool to use and when — no more random prompting.', 'Daniel O.', 'Filmmaker, London'],
  ['Three weeks in, I delivered my first paid UGC ad. The templates alone paid for the cohort.', 'Sofia M.', 'Marketer, Berlin'],
  ['Feels like a real film program, not a tutorial playlist. The critiques pushed the work to a different level.', 'James T.', 'Entrepreneur, Toronto']
]
function naira(n) { return '₦' + n.toLocaleString('en-NG') }

export default function Academy() {
  const [cur, setCur] = useState(() => localStorage.getItem('wisnotech.currency') || 'USD')
  const [menu, setMenu] = useState(false)
  const [faq, setFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); const s = () => setScrolled(window.scrollY > 12); window.addEventListener('scroll', s, { passive: true }); return () => window.removeEventListener('scroll', s) }, [])
  const setCurrency = (t) => { setCur(t); localStorage.setItem('wisnotech.currency', t) }
  const plans = [
    { name: 'Standard', tagline: 'Your entry point — tools included', usd: 35, ngn: 60000, cta: 'Get Started', badge: 'Starter', sub: 'Tools included', features: ['Full cohort access (8 modules)', 'Live training sessions + recordings — 6 months', 'Practical assignments', 'Community access', 'Certificate of completion', 'Templates starter pack'] },
    { name: 'One-on-One', tagline: 'We build it with you — mentorship', usd: 149, ngn: 250000, cta: 'Apply for 1:1', badge: 'Mentorship', sub: 'Tools + private mentorship', featured: true, features: ['Everything in Standard', 'Complete AI tools suite included ($299 value)', '3 × private 1-on-1 mentoring sessions', 'Personal portfolio, pricing & offer review', 'Direct founder feedback', '30-day launch plan for first paid work'] }
  ]
  return (
    <>
      <Seo title="AI Video Academy" description="A practical, hands-on AI Video Academy designed to take you from curiosity to creating cinematic videos, commercials, content, and real projects." path="/academy" />
      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F3EE] antialiased">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');`}</style>
        {/* header — exact */}
        <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || menu ? 'border-white/[0.08] bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_8px_32px_-16px_rgba(0,0,0,0.8)]' : 'border-transparent bg-transparent'}`}>
          <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-5 sm:px-8">
            <a href="/academy" aria-label="AI Video Academy home" className="shrink-0"><Logo /></a>
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Academy navigation">{['Curriculum', 'Projects', 'Pricing', 'FAQ'].map(t => <a key={t} href={`#${t.toLowerCase()}`} className="rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white">{t}</a>)}</nav>
            <a href="#pricing" className="hidden items-center gap-1.5 rounded-full bg-[#FF4D12] px-5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white transition-all hover:bg-[#E84510] hover:shadow-[0_8px_24px_-12px_rgba(255,77,18,0.6)] lg:inline-flex">Apply for the Cohort <span aria-hidden>→</span></a>
            <button onClick={() => setMenu(v => !v)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition-colors hover:border-white/25 hover:text-white lg:hidden">{menu ? '✕' : '☰'}</button>
          </div>
          {menu && <div className="border-t border-white/[0.08] bg-[#0A0A0A]/95 px-5 py-4 backdrop-blur-xl lg:hidden">{['Curriculum', 'Projects', 'Pricing', 'FAQ'].map(t => <a key={t} href={`#${t.toLowerCase()}`} onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 text-[15px] font-medium text-white/75 hover:bg-white/[0.06] hover:text-white">{t}</a>)}<a href="#pricing" onClick={() => setMenu(false)} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#FF4D12] px-5 py-3.5 text-sm font-semibold text-white">Apply for the Cohort <span aria-hidden>→</span></a></div>}
        </header>

        {/* hero */}
        <section className="relative overflow-hidden bg-[#0A0A0A] pt-[64px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,77,18,0.09),transparent_60%)]" />
          <div className="mx-auto grid max-w-[1160px] gap-10 px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45"><span className="h-px w-6 bg-[#FF4D12]" />{COHORT.label}</p>
              <h1 className="mt-5 max-w-[16ch] text-[36px] sm:text-[46px] lg:text-[56px] font-extrabold leading-[0.92] tracking-tight">Learn to Create Videos That Were <span className="font-normal italic" style={{ fontFamily: 'Instrument Serif, serif' }}>Impossible</span> Just a Few Years Ago.</h1>
              <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.65] text-white/55">A practical, hands-on AI Video Academy designed to take you from curiosity to creating cinematic videos, commercials, content, and real projects using the world&apos;s most powerful AI tools.</p>
              <div className="mt-8 flex flex-wrap gap-3"><a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-[#FF4D12] px-7 py-3.5 text-sm font-semibold shadow-[0_12px_32px_-16px_rgba(255,77,18,0.7)] hover:bg-[#E84510]">Join the Next Cohort →</a><a href="#curriculum" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm">Explore the Curriculum</a></div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.14em] text-white/35"><span>Live Cohort</span><span>Hands-On Projects</span><span>Beginner Friendly</span><span>Limited Seats</span></div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#141414] p-2 shadow-[0_40px_80px_-32px_rgba(0,0,0,0.7)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-black">
                  <video autoPlay loop muted playsInline preload="metadata" poster={HERO_MAIN.poster} className="h-full w-full object-cover" style={{ filter: 'contrast(1.04) saturate(1.02)' }}><source src={HERO_MAIN.src} type="video/mp4" /></video>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_45%)]" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4D12]" /><span className="text-[11px] font-semibold uppercase tracking-widest">Studio Showreel</span></div>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-2">{HERO_THUMBS.map(t => <div key={t.id} className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-black"><video autoPlay loop muted playsInline preload="metadata" poster={t.poster} className="h-full w-full object-cover opacity-90"><source src={t.src} type="video/mp4" /></video></div>)}</div>
              </div>
              <p className="mt-3 text-center text-[11px] text-white/30">Frames from student & studio work — portfolio videos</p>
            </div>
          </div>
        </section>

        {/* audiences */}
        <section className="border-y border-white/10 py-10"><div className="mx-auto max-w-[1160px] px-5 sm:px-8 text-center"><h2 className="text-[26px] sm:text-[30px] font-bold">Built for the Next Generation of Creators.</h2><p className="mx-auto mt-3 max-w-2xl text-[15px] text-white/50">Whether you want to create films, commercials, content, faceless videos, or build an AI-powered creative business, this cohort gives you the practical skills to do it.</p><p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/30">Creators • Filmmakers • Entrepreneurs • Marketers • Designers • Content Creators</p></div></section>

        <section className="py-14"><div className="mx-auto max-w-[1160px] px-5 sm:px-8"><h2 className="max-w-[20ch] text-[30px] sm:text-[40px] font-extrabold leading-[0.95]">AI Video Is Moving Fast. Most Creators Are Still Watching From the Sidelines.</h2><div className="mt-8 grid sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">{[['01', 'Stop Guessing', 'Understand which tools to use, when to use them, and how to combine them into a workflow that actually ships.'], ['02', 'Build Real Skills', 'Move beyond random clips and learn to create intentional, professional-quality projects.'], ['03', 'Create Opportunities', 'Use your skills to create content, build a portfolio, offer services, or launch a new AI-powered career.']].map(([n, t, d]) => <div key={n} className="border-l border-white/10 pl-6"><p className="text-[42px] font-extrabold text-white/10">{n}</p><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-white/50">{d}</p></div>)}</div></div></section>

        {/* curriculum */}
        <section id="curriculum" className="py-14 scroll-mt-20"><div className="mx-auto max-w-[1160px] px-5 sm:px-8"><p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF4D12]">Curriculum</p><h2 className="mt-3 text-[30px] sm:text-[40px] font-extrabold">From Your First Prompt to Your Final Production.</h2><div className="mt-10 space-y-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10">{MODULES.map(([n, t, d, b]) => <div key={n} className="grid gap-6 bg-[#141414] p-6 sm:grid-cols-[88px_1fr_1.1fr] sm:p-8"><span className="text-[36px] font-extrabold text-white/10">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-white/50">{d}</p></div><ul className="space-y-2 text-[13px] text-white/60">{b.map(x => <li key={x}>• {x}</li>)}</ul></div>)}</div></div></section>

        {/* projects with videos */}
        <section id="projects" className="py-14 scroll-mt-20"><div className="mx-auto max-w-[1160px] px-5 sm:px-8"><h2 className="text-[30px] sm:text-[40px] font-extrabold">You Won&apos;t Just Learn. You&apos;ll Create.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['Cinematic Short Film', 'A narrative sequence with deliberate pacing, grade and sound — portfolio-ready.'], ['AI Commercial', 'A product ad built to make a brand look cinematic and desirable.'], ['Viral Social Video', 'High-impact vertical content engineered for the feed, not the festival.'], ['Creative Campaign', 'A complete visual concept from idea to final video — and the system behind it.']].map(([t, d]) => <div key={t} className="rounded-2xl border border-white/10 bg-[#141414] p-6"><h3 className="text-sm font-semibold">{t}</h3><p className="mt-2 text-[13px] text-white/50">{d}</p></div>)}</div>
          <h3 className="mt-10 text-[13px] font-semibold uppercase tracking-widest">Portfolio — Selected Work</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{PROJECT_VIDEOS.slice(0, 4).map(v => <div key={v.src} className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]"><div className="aspect-[4/3] bg-black"><video autoPlay loop muted playsInline preload="metadata" poster={v.poster} className="h-full w-full object-cover"><source src={v.src} type="video/mp4" /></video></div><div className="p-4"><p className="text-sm font-semibold">{v.title}</p><p className="mt-1 text-xs text-white/45 line-clamp-2">{v.desc}</p></div></div>)}</div>
          <div className="mt-10 rounded-[20px] border border-white/10 bg-[#141414] p-6"><div className="flex justify-between items-start"><div><h3 className="text-[13px] font-semibold uppercase tracking-widest">Instagram — 5 Premium UGC Ads</h3><p className="mt-1 text-[13px] text-white/45">Pulled from Instagram&apos;s best-performing UGC. Rebuilt as premium AI UGC ads.</p></div><span className="rounded-full border border-[#FF4D12]/30 bg-[#FF4D12]/10 px-3 py-1 text-[11px] text-[#FF4D12]">Included</span></div><div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-5">{IG_ADS.map(a => <div key={a.src} className="overflow-hidden rounded-xl border border-white/10 bg-black"><div className="aspect-[9/16]"><video autoPlay loop muted playsInline preload="metadata" poster={a.poster} className="h-full w-full object-cover"><source src={a.src} type="video/mp4" /></video></div><div className="bg-[#0A0A0A] p-3"><p className="text-xs font-semibold">{a.title}</p><p className="text-[11px] text-white/40">{a.brand}</p></div></div>)}</div></div>
          <div className="mt-10 grid sm:grid-cols-4 gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10">{[['01', 'Join the Cohort', 'Secure your spot before enrollment closes.'], ['02', 'Learn Live', 'Follow the structured lessons and cohort experience.'], ['03', 'Build', 'Complete practical exercises and real-world projects.'], ['04', 'Launch', 'Leave with skills, workflows, projects and a clearer path.']].map(([n, t, d]) => <div key={n} className="bg-[#141414] p-7"><p className="text-[11px] text-[#FF4D12]">{n}</p><h4 className="font-semibold text-[15px] mt-1">{t}</h4><p className="text-[13px] text-white/50">{d}</p></div>)}</div>
        </div></section>

        {/* instructor */}
        <section className="py-14"><div className="mx-auto max-w-[1160px] px-5 sm:px-8 grid lg:grid-cols-2 gap-8 items-center"><img src="/assets/shedrack-akue-640.jpg" alt="Shedrack Akue — Founder, Wisnotech" className="aspect-[4/3] w-full rounded-[20px] border border-white/10 object-cover object-top" loading="lazy" /><div><p className="text-[11px] uppercase tracking-[0.22em] text-white/35">Instructor</p><h2 className="mt-3 text-[30px] sm:text-[38px] font-extrabold">Learn From Someone Actually Building With AI.</h2><p className="mt-4 text-[15px] text-white/55">Wisnotech is built by a working studio — not a theory channel. Every workflow in the cohort is the same one used for real client work, from UGC ads to cinematic campaigns.</p><p className="font-semibold text-sm mt-4">Shedrack Akue — Founder, Wisnotech</p></div></div></section>

        {/* testimonials */}
        <section className="py-14"><div className="mx-auto max-w-[1160px] px-5 sm:px-8"><h2 className="text-[22px] sm:text-[26px] font-bold">What Students Say</h2><div className="mt-8 grid sm:grid-cols-2 gap-4">{TESTIMONIALS.map(([q, n, r]) => <div key={n} className="rounded-2xl border border-white/10 bg-[#141414] p-6"><p className="text-[18px]">“{q}”</p><p className="mt-4 text-xs text-white/35">— {n} · {r}</p></div>)}</div></div></section>

        {/* pricing */}
        <section id="pricing" className="py-14 scroll-mt-20"><div className="mx-auto max-w-[1160px] px-5 sm:px-8"><div className="mx-auto max-w-2xl text-center"><h2 className="text-[30px] sm:text-[40px] font-extrabold">Invest in the Skill That&apos;s Changing Video.</h2><p className="mt-3 text-white/50">One cohort. Practical training. Real projects.</p></div>
          <div className="mx-auto mt-8 flex justify-center"><div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">{['USD', 'NGN'].map(t => <button key={t} onClick={() => setCurrency(t)} className={`rounded-full px-5 py-2 text-xs font-semibold ${cur === t ? 'bg-white text-black' : 'text-white/60'}`}>{t}</button>)}</div></div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">{plans.map(p => <div key={p.name} className={`rounded-[22px] border p-6 ${p.featured ? 'border-[#FF4D12]/30 bg-[#141414]' : 'border-white/10 bg-[#141414]'}`}><span className="rounded-full bg-[#FF4D12] px-3 py-1 text-[10px] font-bold uppercase text-white">{p.badge}</span><h3 className="mt-4 text-lg font-bold">{p.name}</h3><p className="text-xs text-white/45">{p.tagline}</p><p className="mt-4 text-[34px] font-extrabold">{cur === 'USD' ? `$${p.usd}` : naira(p.ngn)} <span className="text-[10px] text-white/30">ONE-TIME</span></p><ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-[12.5px] text-white/65">{p.features.map(f => <li key={f}>• {f}</li>)}</ul><a href="/#contact" className={`mt-6 flex justify-center rounded-full px-5 py-3.5 text-sm font-semibold ${p.featured ? 'bg-[#FF4D12] text-white' : 'border border-white/15'}`}>{p.cta}</a></div>)}</div>
          <p className="mt-6 text-center text-xs text-white/30">{COHORT.seats} seats per cohort · Ends {COHORT.deadline} · Tools included • 6 weeks • Live cohort • Certificate</p>
        </div></section>

        {/* faq */}
        <section id="faq" className="py-14 scroll-mt-20"><div className="mx-auto max-w-[760px] px-5 sm:px-8"><h2 className="text-[28px] sm:text-[34px] font-extrabold">Questions, Answered.</h2><div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">{FAQS.map(([q, a], i) => <div key={q}><button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full justify-between gap-4 px-5 py-5 text-left text-[15px] font-medium">{q}<span className={`flex h-7 w-7 items-center justify-center rounded-full border ${faq === i ? 'rotate-45 border-[#FF4D12] text-[#FF4D12]' : 'border-white/15'}`}>+</span></button>{faq === i && <p className="px-5 pb-5 text-[13px] text-white/50">{a}</p>}</div>)}</div></div></section>

        <section className="py-14"><div className="mx-auto max-w-[1160px] px-5 sm:px-8"><div className="rounded-[24px] border border-white/10 bg-[#141414] px-6 py-12 text-center"><h2 className="mx-auto max-w-[16ch] text-[32px] sm:text-[46px] font-extrabold">The Future of Video Won&apos;t Wait.</h2><p className="mx-auto mt-4 max-w-[48ch] text-white/50">The question is whether you&apos;ll simply watch the industry change — or learn how to create inside it.</p><a href="#pricing" className="mt-7 inline-flex rounded-full bg-[#FF4D12] px-7 py-3.5 text-sm font-semibold">Join the Next Cohort</a><p className="mt-3 text-[11px] uppercase tracking-widest text-white/25">Limited seats. Serious creators only.</p></div></div></section>

        <footer className="border-t border-white/10 bg-[#050505]"><div className="mx-auto max-w-[1160px] px-5 sm:px-8 py-10 flex flex-col sm:flex-row justify-between gap-6"><p className="text-sm text-white/40">AI Video Academy — Practical AI video education for the next generation of creators.</p><p className="text-xs text-white/25">© {new Date().getFullYear()} Wisnotech. All rights reserved.</p></div></footer>
      </div>
    </>
  )
}
