import Seo from '../components/Seo.jsx'

const FAQS = [
  ['Do I need coding experience?', 'No. We start from foundations. If you can use a computer and are willing to build, you can start. The bootcamp is designed for ambitious beginners and those levelling up.'],
  ['Is it remote or physical?', 'Both. Join remotely from anywhere or physically where available — same curriculum, same live sessions, all recordings included.'],
  ['What will I actually build?', 'AI automations, AI agents, web and mobile applications, SaaS products and client projects — all portfolio-ready and built with modern AI tools.'],
  ['How long is the program?', '3 months, intensive and project-based. Expect live sessions, build sprints and practical assignments each week.'],
  ['Will I get a certificate?', 'Yes, on completion — plus a portfolio of shipped products you can show employers and clients.'],
  ['Can I pay in installments?', 'Contact us on WhatsApp to discuss flexible payment. The listed price is the full bootcamp fee.'],
  ['When does it start?', 'Starts September, 2026. Slots are limited — early application is recommended.']
]

export default function Fae() {
  return (
    <>
      <Seo title="Full-Stack AI Engineer Bootcamp" description="Become a Full-Stack AI Engineer in 3 months. Build AI automations, agents, web & mobile, SaaS." path="/fae" />
      <div className="bg-white text-[#0F1B4D]">
        <section className="pt-32 pb-16">
          <div className="container-wide grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex rounded-full bg-gradient-to-r from-[#3B9DD5] to-[#7DD3E0] px-4 py-1.5 text-xs font-bold text-white">TECH BOOTCAMP</span>
              <h1 className="mt-5 text-5xl font-black leading-none">BECOME A<br />FULL-STACK AI<br />ENGINEER</h1>
              <p className="mt-3 font-bold tracking-widest text-sm">IN 3 MONTHS</p>
              <p className="mt-4 text-sm font-bold">BUILD AI AUTOMATIONS, AI AGENTS,<br />WEB & MOBILE APPLICATIONS,<br />SAAS PRODUCTS & MANY MORE!</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#pricing" className="rounded-full bg-[#0F1B4D] px-7 py-3.5 text-sm font-bold text-white">Secure Your Spot — ₦300,000</a>
                <a href="#curriculum" className="rounded-full border px-7 py-3.5 text-sm font-semibold">Explore Curriculum</a>
              </div>
              <p className="mt-4 text-xs">Remote & Physical • Starts Sept, 2026 • Limited Slots • www.wisnotech.vercel.app/fae/ • WhatsApp & Calls: +2349153541297</p>
            </div>
            <div className="rounded-2xl border p-4 shadow-xl">
              <p className="text-xs font-bold">FULL-STACK AI ENGINEER — FLYER PREVIEW</p>
              <div className="mt-3 grid gap-3">
                <div className="rounded-xl bg-[#F7F9FC] p-4 text-sm"><b>Month 1 — Foundations & AI Core</b><p className="font-normal text-xs mt-1">AI fundamentals & prompt engineering • Python for AI & APIs • Databases & authentication • Web fundamentals — HTML, CSS, modern JS</p></div>
                <div className="rounded-xl bg-[#F7F9FC] p-4 text-sm"><b>Month 2 — Full-Stack AI Engineering</b><p className="font-normal text-xs mt-1">React & Next.js full-stack • AI agents & automations • Building SaaS products • Web & mobile applications</p></div>
                <div className="rounded-xl bg-[#F7F9FC] p-4 text-sm"><b>Month 3 — Ship & Monetize</b><p className="font-normal text-xs mt-1">Deployment, domains & scaling • Building client projects • Portfolio & personal brand • Monetization & freelance pipeline</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="build" className="py-14 bg-white">
          <div className="container-wide">
            <p className="text-xs font-bold text-[#14B8A6]">What You&apos;ll Build</p>
            <h2 className="text-3xl font-extrabold">From Idea to Live Product in 3 Months.</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[['AI Automations', 'Workflows that handle support, sales and operations while you sleep.'], ['AI Agents', 'Autonomous agents that research, reason and execute multi-step tasks.'], ['Web Applications', 'Fast, modern web apps — from landing pages to SaaS platforms.'], ['Mobile Applications', 'Premium mobile experiences, built with AI acceleration.'], ['SaaS Products', 'Your own subscription product — auth, payments, dashboard, shipped.'], ['Client Projects', 'Real briefs from real businesses — portfolio work that pays.']].map(([t, d]) => <div key={t} className="rounded-2xl border p-5"><h3 className="font-bold text-sm">{t}</h3><p className="text-xs mt-1">{d}</p></div>)}
            </div>
          </div>
        </section>

        <section id="curriculum" className="py-14 bg-[#F7F9FC]">
          <div className="container-wide">
            <p className="text-xs font-bold text-[#14B8A6]">Curriculum</p>
            <h2 className="text-3xl font-extrabold">A 3-Month Path to Full-Stack AI Engineering.</h2>
            <p className="mt-4 text-sm">Remote & Physical — Choose your mode • Starts September, 2026 — 3 months intensive • Limited Slots — Cohort size capped</p>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white">
          <div className="container-wide max-w-xl text-center">
            <p className="text-xs font-bold text-[#14B8A6]">Enrollment</p>
            <h2 className="text-3xl font-extrabold">Become a Full-Stack AI Engineer.</h2>
            <p className="text-sm mt-2">One bootcamp. Everything you need to build and ship AI products.</p>
            <div className="mt-6 rounded-3xl border-2 border-[#0F1B4D] bg-white p-8 text-left">
              <p className="text-center text-xs font-bold">Full-Stack AI Engineer — 3-Month Bootcamp</p>
              <p className="text-center text-5xl font-black mt-4">₦300,000</p>
              <p className="text-center text-sm">$199 USD · ONE-TIME • Starts September, 2026 · Remote & Physical · Limited Slots</p>
              <ul className="mt-6 space-y-2 text-sm"><li>3-month intensive bootcamp</li><li>AI automations & AI agents</li><li>Web & mobile applications</li><li>SaaS products & client work</li><li>Live sessions + recordings</li><li>Real projects & portfolio</li><li>Certificate on completion</li></ul>
              <a href="https://wa.me/2349153541297?text=Hi%20Wisnotech%2C%20I%20want%20to%20join%20the%20Full-Stack%20AI%20Engineer%20bootcamp" target="_blank" rel="noreferrer" className="mt-6 flex justify-center rounded-full bg-[#14B8A6] px-6 py-4 font-bold text-white">Apply on WhatsApp</a>
              <a href="tel:+2349153541297" className="mt-3 flex justify-center rounded-full border px-6 py-3 text-sm font-semibold">Call to Enroll</a>
              <p className="mt-3 text-center text-xs">Secure spot · Pay in NGN or USD · Ends August 31, 2026</p>
            </div>
            <div className="mt-8 text-left space-y-3">{FAQS.map(([q, a]) => <details key={q} className="rounded-2xl border p-5"><summary className="font-semibold text-sm cursor-pointer">{q}</summary><p className="text-xs mt-2">{a}</p></details>)}</div>
            <div className="mt-10 rounded-3xl bg-[#0F1B4D] text-white p-10"><h3 className="text-2xl font-extrabold">Your Future as a Full-Stack AI Engineer Starts Here.</h3><p className="text-sm mt-2">Build AI automations, agents, web & mobile apps and SaaS products — in 3 months.</p></div>
          </div>
        </section>
      </div>
    </>
  )
}
