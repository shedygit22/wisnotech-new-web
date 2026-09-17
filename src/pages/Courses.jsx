import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { COURSES } from '../data.js'

export default function Courses() {
  return (
    <>
      <Seo title="Courses" description="Hands-on courses in AI, automation, prompt engineering and video production. Live + recorded, certificate on completion." path="/courses" />
      <section className="pt-32 pb-16">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Courses — Live + recorded • Certificate on completion</h1>
          <p className="mt-3 text-muted">New cohorts start monthly. Pay once, upfront — no subscriptions. Prices in USD and Naira.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.map(c => (
              <Link key={c.slug} to={`/courses/${c.slug}`} className="card hover:border-white/25">
                <p className="text-xs text-neon">{c.badge} • {c.duration} • {c.level}</p>
                <h2 className="mt-2 font-semibold">{c.title}</h2>
                <p className="mt-2 text-sm text-muted">{c.desc}</p>
                <p className="mt-3 font-bold">${c.usd} / ₦{c.naira.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
