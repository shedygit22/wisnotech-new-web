import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { COURSES } from '../data.js'

const DETAILS = {
  'ai-fundamentals': { outcomes: ['Speak AI fluently — Explain how modern AI works and use the right tool for each job.', 'Prompt with precision — Write prompts that consistently produce the output you intended.', 'Ship a real workflow — Automate at least one repetitive task this month using AI.'], includes: ['4 live sessions with an instructor (recorded)', 'Hands-on projects you keep', 'Course certificate on completion', 'Private community access'] },
  'automation-workflow-specialist': { outcomes: ['Map processes fast — Spot the tasks worth automating in under an hour.', 'Build reliable automations — Deploy no-code workflows with proper error handling.', 'Launch an AI support bot — Ship a customer-facing bot trained on your own content.'], includes: ['5 live sessions with an instructor (recorded)', 'Automation templates worth hundreds', 'Course certificate on completion', 'Private community access'] },
  'ai-content-creation-pro': { outcomes: ['Produce studio-grade video — Generate and edit videos that look professionally made.', 'Build a lifelike avatar — Create your own talking-head avatar.', 'Repurpose everything — Turn one asset into a month of content.'], includes: ['5 live sessions with an instructor (recorded)', 'Prompt packs for video, image and voice', 'Course certificate on completion', 'Private community access'] },
  'prompt-engineering-ai-agents': { outcomes: ['Engineer reliable prompts — Design prompts that meet strict requirements at scale.', 'Build working agents — Construct autonomous agents with tools and memory.', 'Ship to production — Deploy an agent that calls your APIs safely.'], includes: ['4 live sessions with an instructor (recorded)', 'Agent blueprints you can remix', 'Course certificate on completion', 'Private community access'] },
  'no-code-app-building': { outcomes: ['Build a real web app — Launch a functional product without writing code.', 'Design with data in mind — Model databases and logic that scale.', 'Start earning — Add payments and pricing.'], includes: ['6 live sessions with an instructor (recorded)', 'App templates and UI kits', 'Course certificate on completion', 'Private community access'] },
  'ai-for-business-growth': { outcomes: ['Build an AI roadmap — Know exactly where AI creates value.', 'Automate growth systems — Deploy lead capture, scoring and nurture flows.', 'Measure real ROI — Report the impact with numbers.'], includes: ['5 live sessions with a growth strategist (recorded)', 'Strategy templates and playbooks', 'Course certificate on completion', 'Private community access'] },
  'web-development-bootcamp': { outcomes: ['Build from scratch — Hand-code responsive sites.', 'Think in React — Build component-based apps.', 'Ship to production — Deploy a real project.'], includes: ['8 live sessions with an instructor (recorded)', 'Capstone project with portfolio review', 'Course certificate on completion', 'Private community access'] },
  'full-stack-software-engineering': { outcomes: ['Ship full-stack apps — Architect production-ready applications.', 'Engineer APIs — Design REST and GraphQL APIs.', 'Integrate AI natively — Add LLM features with grounding and guardrails.'], includes: ['12 live sessions with an instructor (recorded)', '2 capstone projects + code reviews', 'Course certificate on completion', 'Private community access'] }
}
const FAQS = [
  ['Am I too much of a beginner?', 'No — every course starts from where you are and moves step by step. Live sessions go at the pace of the room, and everything is recorded.'],
  ["What does 'live + recorded' mean?", 'You join scheduled live sessions with the instructor, and every session is recorded for you to rewatch or catch up on anytime.'],
  ['How do I pay?', 'Pay once, upfront — no subscriptions. Prices are shown in US Dollars and Nigerian Naira.'],
  ['Will I get a certificate?', "Yes. Complete the course and you'll receive a certificate you can add to LinkedIn and your CV."],
  ['What if I miss a session?', 'No problem. Every live session is recorded, and you keep lifetime access to the course materials, community and updates.']
]

export default function CourseDetail() {
  const { slug } = useParams()
  const c = COURSES.find(x => x.slug === slug)
  if (!c) return <div className="container-wide pt-32 pb-20">Not found.</div>
  const d = DETAILS[slug] || { outcomes: [], includes: [] }
  return (
    <>
      <Seo title={c.title} description={c.desc} path={`/courses/${c.slug}`} />
      <div className="container-wide pt-32 pb-20 max-w-3xl">
        <Link to="/courses" className="text-sm text-white/50">← Courses</Link>
        <p className="mt-4 text-xs uppercase tracking-widest text-neon">{c.badge} • {c.duration} • {c.level} • {c.format}</p>
        <h1 className="mt-3 text-4xl font-bold">{c.title}</h1>
        <p className="mt-4 text-muted text-lg">{c.desc}</p>
        <p className="mt-2 text-sm">Topics: {c.topics.join(' • ')}</p>
        <p className="mt-6 text-3xl font-extrabold">${c.usd.toLocaleString()} / ₦{c.naira.toLocaleString()}</p>
        <p className="text-xs text-white/40">Pay once, upfront — no subscriptions. New cohorts start monthly — Live + recorded lessons — Certificate on completion.</p>
        <h2 className="mt-8 font-bold">What you&apos;ll learn — Skills you can apply the same week.</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">{d.outcomes.map(o => <li key={o}>• {o}</li>)}</ul>
        <h2 className="mt-6 font-bold">Includes</h2>
        <ul className="mt-2 space-y-1.5 text-sm text-muted">{d.includes.map(o => <li key={o}>• {o}</li>)}</ul>
        <div className="mt-8 space-y-3">{FAQS.map(([q, a]) => <details key={q} className="card !p-0"><summary className="px-5 py-3 text-sm font-medium cursor-pointer">{q}</summary><p className="px-5 pb-4 text-xs text-muted">{a}</p></details>)}</div>
        <a href="#contact" className="btn-primary mt-8">Reserve my spot for ${c.usd} — Enrolment interest</a>
        <p className="mt-3 text-xs text-white/40">Contact wisnotech@gmail.com • Your name • Your email</p>
      </div>
    </>
  )
}
