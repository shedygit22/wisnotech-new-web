import { motion } from 'framer-motion'
import Seo from '../components/Seo.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { Reveal, Faq } from '../components/Premium.jsx'
import { SHOWREEL, WINO_VERTICALS, WINO_EXTRA, VideoCard, VerticalVideo } from '../videoData.jsx'

const FEATURES = [
  ['Text-to-Video', 'Turn a written prompt into a moving scene, directly on your phone.'],
  ['Image-to-Video', 'Bring a photo or still frame to life with natural motion.'],
  ['AI Image Creation', 'Generate polished stills to use on their own or as video frames.'],
  ['Prompt Improvement', 'WINO refines rough ideas into detailed cinematic prompts before you spend credits.'],
  ['Mobile-First Creation', 'Designed for Android creators — no desktop or studio required.'],
  ['Credit-Based Generation', 'Pay for what you generate, starting with affordable starter credit.'],
  ['Video History & Downloads', 'Every generation is saved to your history so you can review and download.']
]
const STEPS = [
  ['Idea', 'Start with a thought or a rough concept.'],
  ['Prompt', 'Describe your scene in your own words.'],
  ['Improve', 'WINO sharpens it into a cinematic prompt.'],
  ['Generate', 'Spend credits to create your video.'],
  ['Review', 'Watch, iterate and refine the result.'],
  ['Download', 'Export and share your finished video.']
]
const PLANS = [
  { n: 'Starter', p: '$0', note: 'One-time trial credits', d: 'Try WINO and make your first videos.', c: '15 credits', cap: '~1–2 short videos', f: ['Text-to-video', 'AI image creation', 'Prompt improvement', 'Video history'] },
  { n: 'Creator', p: '$9.99', note: 'per month', d: 'For regular creators making weekly content.', c: '150 credits', cap: '~15–25 short videos', popular: true, f: ['Everything in Starter', 'Image-to-video', 'Higher resolution outputs', 'Faster generation queue', 'Priority support'] },
  { n: 'Pro', p: '$24.99', note: 'per month', d: 'Serious output for agencies and professionals.', c: '450 credits', cap: '~50–75 short videos', f: ['Everything in Creator', 'Largest credit packs', 'Film & cinematic presets', 'Batch creation'] },
  { n: 'Pay As You Go', p: 'From $1', note: 'per credit pack', d: 'Flexible credits, no subscription.', c: 'Any pack size', cap: 'Spend when you create', f: ['All creation features', 'No recurring billing', 'Credits never expire', 'Available on demand'] }
]
const FAQS = [
  ['What is WINO?', 'WINO is a mobile-first AI video generation app for Android, created by Wisnotech. It helps African creators and storytellers turn text and images into AI-generated videos using an affordable, credit-based model.'],
  ['What can WINO create?', 'Text-to-video, image-to-video and AI image generation. Short cinematic scenes, advertising clips, character moments, social loops and more, all from your phone.'],
  ['Can I generate videos from text?', 'Yes. Describe a scene, and WINO converts your prompt into a generated video.'],
  ['Can I animate images?', 'Yes. WINO supports image-to-video, bringing a still photo or frame to life with motion.'],
  ['How does the credit system work?', 'Each generation uses credits. Start with trial credits or buy packs. Subscriptions bundle larger allowances. Prompt improvements help you spend wisely.'],
  ['Is WINO available on Android?', 'Yes, distributed as an APK. Listings for Samsung Galaxy Store and Amazon Appstore are in preparation.'],
  ['Where can I download WINO?', 'Always from official Wisnotech channels — this page and official accounts. Verified store links will appear here.'],
  ['Why isn’t WINO on Google Play yet?', 'Launching directly to creators first. Google Play is planned; the official APK is recommended for now.'],
  ['How do I get support?', 'Contact Wisnotech at wisnotech@gmail.com or through the contact section.']
]

export default function Wino() {
  return (
    <>
      <Seo title="WINO — AI Video Generator for Creators" description="WINO is an AI video creation app by Wisnotech, built to help creators turn prompts and images into AI-powered videos directly from Android." path="/wino" />
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden style={{ background: 'radial-gradient(ellipse 55% 45% at 75% 40%, rgba(255,255,255,0.05) 0%, transparent 60%)' }} />
        <div className="animate-aurora pointer-events-none absolute -left-24 top-20 h-[380px] w-[380px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(80,140,255,0.35) 0%, transparent 65%)' }} />
        <div className="container-wide relative grid gap-14 lg:grid-cols-2 items-center">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }} className="max-w-xl">
            <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="eyebrow">WINO by Wisnotech</motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="mt-6 text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-tight">Create more.<br />Imagine without limits.</motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="mt-6 text-lg text-muted">WINO is a mobile-first AI video creation app for Android, built for African creators. Turn text and images into AI-generated videos with an affordable, credit-based model and smarter prompts.</motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="mt-10 flex flex-wrap gap-4"><a href="#download" className="btn-primary">Download WINO ↓</a><a href="#showcase" className="btn-secondary">▶ Watch demos</a></motion.div>
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-10 flex gap-8"><span><b className="text-2xl">Android</b><br /><span className="text-sm text-white/40">First · Mobile</span></span><span className="h-10 w-px bg-white/15" /><span><b className="text-2xl">Credits</b><br /><span className="text-sm text-white/40">Start free</span></span></motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute inset-6 rounded-full" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(80,140,255,0.14) 0%, transparent 60%)' }} />
            <div className="relative z-10 mx-auto w-[280px] rounded-[2.5rem] border border-white/15 bg-[#0d0d14] p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.7)]">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#101019] to-[#0a0a10]">
                <div className="flex items-center justify-between px-6 pb-2 pt-4"><span className="text-xs font-semibold text-white/70">WINO</span><span className="h-4 w-16 rounded-full bg-white/10" /></div>
                <div className="px-5"><p className="eyebrow !text-[9px]">Now generating</p><p className="mt-2 text-lg font-semibold">Lagos, golden hour</p>
                  <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1f33] via-[#0c1120] to-[#2b1b28]"><span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black">▶</span><span className="absolute left-4 top-4 text-[10px] text-white/60">00:02 / 00:08 • HD</span></div>
                  <p className="mt-4 text-xs text-white/45">Prompt improved · ready to generate</p>
                </div>
                <div className="mt-4 flex justify-between px-5 pb-5"><span className="rounded-xl border border-white/15 px-4 py-2 text-[11px]">Improve</span><span className="rounded-xl bg-white px-5 py-2 text-[11px] font-semibold text-black">Generate</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="showcase" className="section"><div className="container-wide"><Reveal><p className="eyebrow">Showcase</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold">Made with WINO.</h2><p className="mt-4 max-w-2xl text-muted">Real generations — text-to-video, image-to-video and AI images.</p></Reveal><div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{SHOWREEL.map(v => <Reveal key={v.src}><VideoCard {...v} /></Reveal>)}</div><div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{WINO_VERTICALS.map(v => <VerticalVideo key={v.src} {...v} />)}</div><div className="mt-6 grid sm:grid-cols-2 gap-5">{WINO_EXTRA.map(v => <Reveal key={v.src}><VideoCard {...v} /></Reveal>)}</div></div></section>

      <section id="features" className="section bg-white/[0.02]"><div className="container-wide"><Reveal><p className="eyebrow">Features</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold">Everything you need to create, on one phone.</h2></Reveal><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{FEATURES.map(([t, d]) => <Reveal key={t}><div className="card h-full hover:border-neon/40"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div></Reveal>)}</div></div></section>

      <section className="section"><div className="container-wide max-w-3xl text-center"><Reveal><p className="eyebrow">Prompt Intelligence</p><h2 className="mt-4 text-4xl font-semibold">A rough idea becomes a cinematic direction.</h2><p className="mt-4 text-muted">WINO expands your idea into subject, action, environment, camera, lighting and composition — before you spend a credit.</p></Reveal><Reveal><div className="mt-8 rounded-2xl border border-white/10 p-6 text-left"><p className="text-xs uppercase tracking-widest text-white/40">You type</p><p className="mt-2 text-lg">&quot;woman walking in Lagos&quot;</p></div><div className="mt-4 rounded-2xl border border-neon/30 bg-gradient-to-br from-[#0b1324]/90 to-[#0d0d16]/90 p-6 text-left"><p className="text-xs uppercase tracking-widest text-neon">WINO improves it to</p><p className="mt-3 text-[15px] leading-[1.9]">A young Nigerian woman in a flowing ankara dress walks along a sunlit Lagos street at golden hour, surrounded by warm market life and soft haze. Camera follows her in a slow tracking shot, shallow depth of field, cinematic 35mm grade.</p></div></Reveal></div></section>

      <section className="section bg-white/[0.02]"><div className="container-wide"><Reveal><p className="eyebrow">Creator Workflow</p><h2 className="mt-4 text-4xl font-semibold">From idea to video in six steps.</h2></Reveal><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{STEPS.map(([t, d], i) => <Reveal key={t} delay={(i % 3) * 0.06}><div className="card relative"><span className="outline-text absolute right-4 top-3 text-4xl font-bold">0{i + 1}</span><h3 className="font-semibold">{t}</h3><p className="text-sm text-muted mt-1">{d}</p></div></Reveal>)}</div></div></section>

      <section className="section"><div className="container-wide"><Reveal><p className="eyebrow">Africa-first</p><h2 className="mt-4 text-4xl font-semibold">Built with African creators in mind.</h2></Reveal><div className="mt-8 grid md:grid-cols-3 gap-5">{[['Mobile-first by design', 'Fits a phone screen, unstable connection, creating on the go.'], ['Made to stay affordable', 'Flexible credits — not enterprise prices.'], ['Built with African creators in mind', 'Lagos streets to Nollywood energy to brand content.']].map(([t, d]) => <Reveal key={t}><div className="card"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div></Reveal>)}</div></div></section>

      <section id="pricing" className="section bg-white/[0.02]"><div className="container-wide"><Reveal><p className="eyebrow">Pricing Preview</p><h2 className="mt-4 text-4xl font-semibold">Plans that fit how creators create.</h2></Reveal><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{PLANS.map(p => <Reveal key={p.n}><div className={`card h-full flex flex-col ${p.popular ? 'border-neon/40' : ''}`}>{p.popular && <span className="mb-3 w-fit rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-[11px] font-semibold text-neon">Most popular</span>}<h3 className="font-semibold">{p.n}</h3><p className="mt-2 text-3xl font-bold">{p.p}</p><p className="text-xs text-white/40">{p.note}</p><p className="mt-2 text-sm text-white/70">{p.c} • ~{p.cap}</p><ul className="mt-4 space-y-1.5 text-sm text-muted flex-1">{p.f.map(f => <li key={f}>• {f}</li>)}</ul></div></Reveal>)}</div><p className="mt-6 text-center text-xs text-white/40">Final pricing confirmed at launch.</p></div></section>

      <section id="download" className="section"><div className="container-wide max-w-3xl text-center"><Reveal><p className="eyebrow">Download</p><h2 className="mt-4 text-4xl font-semibold">WINO is ready when you are.</h2><p className="mt-4 text-muted">Official APK on Android. Samsung Galaxy Store • Amazon Appstore — Coming soon. v1.0.0 • Upcoming release • Always from wisnotech channels.</p><a href="#contact" className="btn-primary mt-8">Download WINO APK</a></Reveal></div></section>

      <section className="section bg-white/[0.02]"><div className="container-wide max-w-4xl"><Reveal><h2 className="text-3xl font-semibold text-center">Questions, answered.</h2></Reveal><div className="mt-8"><Faq items={FAQS} /></div></div></section>
      <ContactSection />
    </>
  )
}
