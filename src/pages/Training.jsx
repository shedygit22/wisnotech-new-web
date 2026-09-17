import Seo from '../components/Seo.jsx'
import ContactSection from '../components/ContactSection.jsx'

const MODULES = [
  ['01', 'Vibe Coding', 'Communicate product ideas to AI coding systems — architecture, iteration, debugging and understanding what the AI is doing.', ['Product prompting & architecture', 'AI-assisted coding & iteration', 'Debugging generated code']],
  ['02', 'Building SaaS Products', 'Auth, databases, dashboards, payments, APIs and deployment — the real SaaS stack.', ['Auth, DB & dashboards', 'Payments & user accounts', 'SaaS architecture & deployment']],
  ['03', 'AI Agents', 'Design autonomous systems where AI performs multi-step work with tools, memory and delegation.', ['Agent architecture & memory', 'Multi-agent orchestration', 'Tool use & decision-making']],
  ['04', 'AI Automation', 'Connect systems with APIs, webhooks and triggers — automate real business workflows.', ['API & webhook connections', 'AI-powered workflows', 'Trigger-based business systems']],
  ['05', 'Web Applications', 'Modern web apps — SaaS platforms, AI tools, portals, marketplaces and internal tools.', ['SaaS & AI tools', 'Client portals & dashboards', 'Marketplaces & internal tools']],
  ['06', 'Mobile Applications', 'Turn ideas into premium mobile apps — onboarding to analytics, built with AI.', ['Onboarding & dashboards', 'AI chat & profiles', 'Premium native feel']],
  ['07', 'AI APIs & Integrations', 'How apps talk to AI models, databases, payments and third-party platforms.', ['AI, DB & payments APIs', 'Third-party integrations', 'Clean architecture diagrams']],
  ['08', 'Deployment & Shipping', 'From local build to live product — test, debug, deploy and iterate after launch.', ['Testing & debugging', 'Deploy & domains', 'Monitoring & iteration']]
]
const FAQS = [
  ['Do I need to be a professional programmer?', 'No. This is an advanced program but starts from product thinking. If you can follow logical steps and are comfortable with a computer, we teach the rest.'],
  ['Can a complete beginner join?', "Yes, if you're ambitious and willing to build. Beginners move slightly slower on week one, then accelerate."],
  ['Will I learn to build SaaS products?', 'Yes — authentication, databases, dashboards, payments, APIs and deployment are core. You ship at least one SaaS-style product.'],
  ['Will we build mobile applications?', "Yes. You'll turn ideas into premium mobile experiences, including at least one mobile project."],
  ['What are AI agents?', 'Systems where AI performs multi-step work autonomously — researching, reasoning, using tools, remembering context and delivering outcomes.'],
  ['Will I learn automation?', "Yes — APIs, webhooks, triggers and AI-powered business process automation. You'll connect real systems."],
  ['Which AI coding tools will we use?', "The stack evolves fast, so we teach workflows and principles, not tool-lock. You'll use the current best platforms."],
  ['How long is the cohort?', 'Six weeks, live cohort with weekly live sessions, build sessions, challenges and ongoing support. Expect 6–8 hours per week plus building time.'],
  ['Are sessions recorded?', 'Yes, 12 months access to all recordings, plus the resource vault and community.'],
  ['Can I pay in Naira?', "Yes — toggle NGN on the pricing card. You'll be routed to the correct checkout."],
  ['Can international students join?', 'Yes, from anywhere. Pay in USD, join live or via recordings.'],
  ['What happens after payment?', 'Onboarding + community access within 24 hours, plus pre-work to hit day one ready.']
]

export default function Training() {
  return (
    <>
      <Seo title="Advanced Vibe Coding + Agentic AI" description="Learn how to use AI coding tools, autonomous agents, APIs and modern product workflows to design, build, debug and launch real SaaS products." path="/training" />
      <section id="overview" className="pt-32 pb-16">
        <div className="container-wide max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-lime-300">ADVANCED VIBE CODING + AGENTIC AI COHORT — Cohort 01 — 2026</p>
          <h1 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-extrabold">Build Software at the Speed of Your Ideas.</h1>
          <p className="mt-5 text-muted text-lg">Learn how to use AI coding tools, autonomous agents, APIs and modern product workflows to design, build, debug and launch real SaaS products, apps and digital businesses.</p>
          <div className="mt-8 flex gap-3"><a href="#pricing" className="btn-primary">Join the Next Cohort</a><a href="#build" className="btn-secondary">See What You&apos;ll Build</a></div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/30">Live Cohort • Hands-On Projects • Real Products • Limited Seats • 40 seats</p>
          <div className="card mt-8 font-mono text-xs"><p>SYSTEM STATUS: READY • Revenue $42,380 +12.4% • Active Users 1,284 • Agent Tasks 342 automated</p><p className="mt-2 text-white/50">AGENT WORKFLOW: USER REQUEST → RESEARCH AGENT → BUILD AGENT → TEST → DEPLOY</p></div>
        </div>
      </section>

      <section className="border-y border-white/10 py-10 text-center">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold">You Don&apos;t Need to Do Everything Yourself Anymore.</h2>
          <p className="mt-3 text-muted text-sm">Modern AI has changed how software is created. The new advantage is knowing how to direct intelligent systems, understand architecture, connect technologies and ship real products.</p>
          <p className="mt-4 font-mono text-xs">IDEA + AI + PRODUCT THINKING + AUTOMATION = REAL SOFTWARE</p>
        </div>
      </section>

      <section id="curriculum" className="section">
        <div className="container-wide">
          <p className="font-mono text-xs text-lime-300">Curriculum</p>
          <h2 className="mt-3 text-3xl font-bold">Learn the New Stack for Building With AI.</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {MODULES.map(([n, t, d, b]) => <div key={n} className="bg-[#111] p-6"><p className="font-mono text-xs text-lime-300">{n}</p><h3 className="mt-2 font-semibold">{t}</h3><p className="text-sm text-muted mt-1">{d}</p><ul className="mt-3 space-y-1 text-xs text-muted">{b.map(x => <li key={x}>• {x}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <section id="build" className="section bg-white/[0.02]">
        <div className="container-wide">
          <h2 className="text-3xl font-bold">Don&apos;t Just Watch Tutorials. Ship Products.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[['AI SaaS Platform', 'Landing, dashboard, AI features — a complete web product.'], ['Autonomous AI Agent', 'Multi-step agent that researches, reasons, builds and delivers.'], ['AI-Powered Mobile App', 'Premium mobile experience — onboarding to analytics.'], ['Business Automation System', 'Forms → CRM → AI → Email → DB — a workflow that runs itself.'], ['Your Own Product', 'Your idea, your system, your launch.']].map(([t, d]) => <div key={t} className="card"><h3 className="text-sm font-semibold">{t}</h3><p className="text-xs text-muted mt-2">{d}</p></div>)}
          </div>
          <div className="mt-8 grid sm:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 text-center text-xs">
            {[['01 LEARN', 'Understand principles and tools.'], ['02 BUILD', 'Create real products.'], ['03 DEBUG', 'Find and solve problems.'], ['04 AUTOMATE', 'Connect systems & agents.'], ['05 SHIP', 'Deploy to the real world.']].map(([t, d]) => <div key={t} className="bg-[#111] p-5"><p className="font-mono text-lime-300">{t}</p><p className="text-white/50 mt-1">{d}</p></div>)}
          </div>
          <h3 className="mt-10 font-bold">An Environment Designed for Builders.</h3>
          <p className="text-sm text-muted">Live Sessions • Build Sessions • Challenges • Resources • Community • Support</p>
          <h3 className="mt-8 font-bold">Don&apos;t Start From Zero.</h3>
          <p className="text-xs text-muted mt-2">AI PRODUCT BLUEPRINT.pdf • SAAS ARCHITECTURE FRAMEWORK • AGENT DESIGN SYSTEM • AUTOMATION PLAYBOOK • DEBUGGING GUIDE • PRODUCT PROMPT LIBRARY • API INTEGRATION TEMPLATES • DEPLOYMENT CHECKLIST</p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">Shedrack Akue — Founder, Wisnotech</div>
          <div><p className="font-mono text-xs text-white/40">Your Guide</p><h2 className="mt-3 text-3xl font-bold">Learn From Someone Building Inside the AI Revolution.</h2><p className="mt-4 text-muted text-sm">Wisnotech is built by a working studio — products, automations and AI systems shipped for real clients.</p></div>
        </div>
        <div className="container-wide mt-10 grid sm:grid-cols-3 gap-4">
          {[['The biggest difference was learning how to think about the product before asking AI to build it.', 'Amara K. • Product Builder, Lagos'], ["I shipped my first SaaS in week four. Auth, payments, the whole thing.", 'Daniel O. • Founder, London'], ['The agent module alone was worth the cohort.', 'Sofia M. • Automation Lead, Berlin']].map(([q, n]) => <div key={n} className="card"><p className="text-sm">&ldquo;{q}&rdquo;</p><p className="mt-3 font-mono text-xs text-white/40">— {n}</p></div>)}
        </div>
      </section>

      <section id="pricing" className="section bg-white/[0.02]">
        <div className="container-wide max-w-xl text-center">
          <h2 className="text-3xl font-bold">Your Next Product Could Start Here.</h2>
          <p className="text-muted mt-2 text-sm">One advanced cohort. Real skills. Real projects. ADVANCED VIBE CODING + AGENTIC AI — Cohort 01 — 2026</p>
          <div className="card mt-8 text-left">
            <p className="text-4xl font-extrabold">$89 / ₦150,000</p><p className="font-mono text-xs text-white/40">ONE-TIME • One-time · 40 seats</p>
            <ul className="mt-6 space-y-2 text-sm text-muted"><li>Complete masterclass curriculum (8 modules)</li><li>Live training + build sessions</li><li>AI vibe coding workflows</li><li>SaaS, mobile & AI agent training</li><li>Automation systems & API integration</li><li>Real-world projects</li><li>Prompt frameworks + resource vault</li><li>Community & cohort support</li><li>Session recordings (12 months)</li></ul>
            <a href="#contact" className="btn-primary mt-6 w-full justify-center">Secure Your Seat</a>
            <p className="mt-2 text-center font-mono text-xs text-white/30">Secure checkout · Instant confirmation • Six weeks</p>
          </div>
          <div className="mt-8 text-left space-y-3">{FAQS.map(([q, a]) => <details key={q} className="card !p-0"><summary className="cursor-pointer px-5 py-4 text-sm font-medium">{q}</summary><p className="px-5 pb-5 text-xs text-muted">{a}</p></details>)}</div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
