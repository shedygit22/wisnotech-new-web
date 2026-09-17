import { useState } from 'react'
import { SITE } from '../data.js'

const NEEDS = ['AI Solution', 'AI Automation', 'Website', 'Web Application', 'SaaS Product', 'Business Management System', 'Content System', 'Digital Growth', 'Other']
const BUDGETS = ['Under $500', '$500 – $1,000', '$1,000 – $3,000', '$3,000 – $5,000', '$5,000+', 'Not sure yet']

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="section">
      <div className="container-wide grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Start your project.</h2>
          <p className="mt-4 text-muted">Tell us what you need and we&apos;ll get back to you with a clear plan and quote. Prefer to talk? Reach us on WhatsApp.</p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p><b>Address</b> — Forest Guard Street, Uromi, Edo State, Nigeria.</p>
            <p><b>Email</b> — {SITE.email}</p>
            <p><b>Phone</b> — {SITE.phoneDisplay}</p>
            <p>Find us in Uromi, Edo State, Nigeria • We respond within one business day. • Read our Google reviews</p>
          </div>
          <div className="mt-6 flex gap-4">
            <a href={`mailto:${SITE.email}`} className="btn-secondary">Or email us directly</a>
            <a href={`https://wa.me/2349153541297?text=${encodeURIComponent("Hi Wisnotech, I'd like to start a project.")}`} target="_blank" rel="noreferrer" className="btn-secondary">Or send it on WhatsApp</a>
          </div>
        </div>
        <div className="card">
          {sent ? (
            <div><h3 className="text-xl font-semibold">Project request sent.</h3><p className="mt-2 text-sm text-muted">Thanks — we&apos;ve got your request and will reply within one business day at your email.</p><button onClick={() => setSent(false)} className="btn-secondary mt-6">Send another request</button></div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-4">
              <div><label className="text-sm">Your name</label><input required placeholder="Full name" className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm" /></div>
              <div><label className="text-sm">Your email</label><input required type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm" /></div>
              <div><label className="text-sm">Company (optional)</label><input placeholder="Your company" className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm" /></div>
              <div><label className="text-sm">What do you need?</label><select className="mt-1 w-full rounded-xl border border-white/15 bg-[#111] px-4 py-3 text-sm">{NEEDS.map(n => <option key={n}>{n}</option>)}</select></div>
              <div><label className="text-sm">Estimated budget</label><select className="mt-1 w-full rounded-xl border border-white/15 bg-[#111] px-4 py-3 text-sm">{BUDGETS.map(n => <option key={n}>{n}</option>)}</select></div>
              <div><label className="text-sm">Project details</label><textarea required minLength={10} rows={4} placeholder="Tell us about your project — goals, timeline, anything that helps…" className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm" /></div>
              <button className="btn-primary w-full justify-center">Send Project Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
