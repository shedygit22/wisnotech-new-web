import { motion } from 'framer-motion'
import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { Reveal, Faq } from '../components/Premium.jsx'
import { HERO_CLIPS, SHOWREEL, PORTFOLIO_VERTICALS, VideoCard, VerticalVideo } from '../videoData.jsx'

const SERVICES = [
  ['AI Advertisements', 'Cinematic product commercials, launch campaigns and branded ads that make products look like films.'],
  ['AI UGC', 'Creator-style videos built for social advertising and organic content — believable, scrolly and on-brand.'],
  ['Social Media Content', 'Short-form video for TikTok, Instagram Reels, Facebook and YouTube Shorts.'],
  ['AI Characters', 'Custom digital characters with a consistent face, wardrobe, personality and world.'],
  ['Cinematic Production', 'Visually rich AI-generated scenes for brands, campaigns, entertainment and storytelling.'],
  ['Music Videos', 'AI-powered music visuals combining artistic direction, scenes, characters and narrative.'],
  ['Film & Trailers', 'Cinematic trailers, teasers, short films and concept productions.'],
  ['Campaign Visuals', 'High-end AI imagery and video for product launches, advertising and brand communication.']
]
const PRICING = [
  ['Social Content', 'From $100', 'Premium short-form content.', ['Creative concept', 'AI visuals', 'Editing', 'Social delivery'], 'Start a Project'],
  ['AI UGC Video', 'From $150', 'Creator-style AI content.', ['AI creator', 'Script support', 'Product integration', 'Editing'], 'Request a Project'],
  ['AI Product Commercial', 'From $300', 'Cinematic product ads.', ['Concept', 'Visualization', 'Cinematic scenes', 'Sound'], 'Create My Ad'],
  ['AI Brand Campaign', 'From $750', 'Launches and initiatives.', ['Direction', 'Concept', 'Multiple assets', 'Video'], 'Build My Campaign'],
  ['AI Music Video', 'From $1,000', 'Complete visual for song.', ['Concept', 'Treatment', 'AI scenes', 'Edit'], 'Start a Music Video'],
  ['Film Trailer', 'From $1,500', 'Trailers and teasers.', ['Concept', 'Treatment', 'Cinematic scenes', 'Sound'], 'Create a Trailer'],
  ['Short Film', 'From $3,000', 'Narrative productions.', ['Development', 'Story', 'AI production', 'Edit + Sound'], 'Discuss My Film'],
  ['Large-Scale Production', 'From $5,000+', 'Major multi-stage.', ['Fully customized plan'], 'Request a Custom Quote']
]
const FAQS = [
  ['How long does a project take?', 'Most social and UGC ships in days. Larger films take 1–4 weeks. First direction within 24 hours.'],
  ['What do I need to start?', 'A rough idea is enough — product, script, reference, images or character.'],
  ['Will the footage look real?', 'Yes. Produced, graded, edited and sound-designed to professional standard.'],
  ['Do I own the final video?', 'Yes. Full rights for advertising, publishing, social and distribution.'],
  ['How do revisions work?', 'Every project includes a revision round, confirmed before production.'],
  ['How do pricing and payment work?', 'Starting points on this page. International in USD. Deposit to start, balance on delivery.'],
  ['Can you match our brand style?', 'Yes. We iterate until it is unmistakably yours. Nothing ships unapproved.']
]

export default function Portfolio() {
  const [hero, setHero] = useState(0)
  return (
    <>
      <Seo title="AI-Powered Creative Production Studio" description="AI-powered ads, cinematic videos, UGC, music videos, trailers and films." path="/portfolio" />
      <section className="relative overflow-hidden pt-36 pb-24">
        <video key={HERO_CLIPS[hero].src} src={HERO_CLIPS[hero].src} poster={HERO_CLIPS[hero].poster} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[#080808]/50" aria-hidden />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 35%, transparent 0%, rgba(8,8,8,0.55) 70%, #080808 100%)' }} aria-hidden />
        <div className="animate-aurora absolute -left-24 top-16 h-[380px] w-[380px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(59,123,255,0.4) 0%, transparent 65%)' }} />
        <div className="letterbox top-0" aria-hidden /><div className="letterbox letterbox-bottom bottom-0" aria-hidden />
        <div className="container-wide relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs uppercase tracking-[0.22em]">Wisnotech — Creative Production Studio</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8 text-[clamp(2.75rem,7vw,4.75rem)] font-bold leading-[1.03]"><span className="text-shimmer">Video that sells.</span><br />Scenes that stick.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-lg text-muted">AI technology, creative direction, visual storytelling and modern workflows — from idea to cinematic final product.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-10 flex justify-center gap-4"><a href="#contact" className="btn-primary">Start a Project →</a><a href="#work" className="btn-secondary">See the Work</a></motion.div>
          <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4">{[['28', 'Pieces of work'], ['8', 'Disciplines'], ['48h', 'First cut']].map(([v, l]) => <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-5"><p className="text-2xl font-bold">{v}</p><p className="text-xs text-muted">{l}</p></div>)}</div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {HERO_CLIPS.map((c, i) => <button key={c.src} onClick={() => setHero(i)} aria-label={c.label} className={`h-1.5 rounded-full transition-all ${i === hero ? 'w-5 bg-white' : 'w-1.5 bg-white/35'}`} />)}
          </div>
          <p className="mt-3 text-xs text-white/60">{HERO_CLIPS[hero].label} • {hero + 1}/4</p>
        </div>
      </section>

      <div className="relative overflow-hidden border-y border-white/10 py-4"><div className="animate-marquee flex w-max gap-10 text-xs uppercase tracking-[0.25em] text-white/50">{['Cinematic', 'Character', 'Text-to-Video', 'Image-to-Video', 'Social Content', 'Ads & UGC', 'Campaign Stills', 'Film & Trailers', 'Cinematic', 'Character', 'Text-to-Video', 'Image-to-Video'].map((t, i) => <span key={i} className="flex items-center gap-10">{t} <span className="h-1.5 w-1.5 rounded-full bg-neon" /></span>)}</div></div>

      <section className="section"><div className="container-wide"><Reveal><p className="eyebrow">Who this is for</p><h2 className="mt-4 max-w-2xl text-4xl md:text-5xl font-semibold">Made for the teams moving at the speed of culture.</h2></Reveal><div className="mt-10 grid md:grid-cols-3 gap-5">{[['Brands scaling UGC', 'On-brand AI UGC ads in days, not months.'], ['Filmmakers & studios', 'Previs and footage that holds up in the edit.'], ['Creators & channels', 'Consistent worlds, zero studio days.']].map(([t, d]) => <Reveal key={t}><div className="card h-full hover:border-neon/40"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div></Reveal>)}</div></div></section>

      <section id="work" className="section bg-white/[0.02]"><div className="container-wide"><Reveal><p className="eyebrow">Selected work</p><h2 className="mt-4 text-4xl md:text-5xl font-semibold">Proof, not promises.</h2><p className="mt-4 max-w-2xl text-muted">31 pieces of work · updated weekly. Every piece started as a prompt or image.</p></Reveal><div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{SHOWREEL.map(v => <Reveal key={v.src}><VideoCard {...v} /></Reveal>)}</div><div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{PORTFOLIO_VERTICALS.slice(0, 5).map(v => <VerticalVideo key={v.src} {...v} />)}</div></div></section>

      <section id="services" className="section"><div className="container-wide"><Reveal><p className="eyebrow">What we create</p><h2 className="mt-4 text-4xl font-semibold">From a simple idea to a cinematic final product.</h2></Reveal><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{SERVICES.map(([t, d]) => <Reveal key={t}><div className="card h-full"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div></Reveal>)}</div></div></section>

      <section id="pricing" className="section bg-white/[0.02]"><div className="container-wide"><Reveal><p className="eyebrow">Starting prices</p><h2 className="mt-4 text-4xl font-semibold">Serious production. Clear starting points.</h2></Reveal><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{PRICING.map(([n, p, d, inc, cta]) => <Reveal key={n}><div className="card h-full flex flex-col"><h3 className="font-semibold">{n}</h3><p className="mt-2 text-2xl font-bold">{p}</p><p className="text-sm text-muted">{d}</p><ul className="mt-3 text-xs text-muted space-y-1 flex-1">{inc.map(i => <li key={i}>• {i}</li>)}</ul><a href="#contact" className="btn-secondary mt-4 justify-center !px-4 !py-2.5 text-xs">{cta}</a></div></Reveal>)}</div></div></section>

      <section id="process" className="section"><div className="container-wide"><Reveal><p className="eyebrow">How it works</p><h2 className="mt-4 text-4xl font-semibold">Four steps from idea to finished film.</h2></Reveal><div className="mt-8 grid md:grid-cols-4 gap-5">{[['01 Send Your Idea', 'Product, script, image, campaign or rough idea.'], ['02 Creative Direction', 'Direction, approach, deliverables, timeline.'], ['03 Production', 'AI workflows + editing + sound.'], ['04 Final Delivery', 'Ready for ads, social, distribution.']].map(([t, d]) => <Reveal key={t}><div className="card"><h3 className="font-semibold">{t}</h3><p className="text-sm text-muted mt-2">{d}</p></div></Reveal>)}</div></div></section>

      <section className="section bg-white/[0.02]"><div className="container-wide max-w-4xl"><Reveal><p className="eyebrow">Questions, answered</p><h2 className="mt-4 text-4xl font-semibold">Everything you&apos;d ask before starting.</h2></Reveal><div className="mt-8"><Faq items={FAQS} /></div><Reveal><div className="card mt-10 text-center"><p className="eyebrow">Bring your idea to life.</p><h3 className="mt-3 text-2xl font-semibold">A product. A campaign. A character. A music video. A film.</h3></div></Reveal></div></section>
      <ContactSection />
    </>
  )
}
