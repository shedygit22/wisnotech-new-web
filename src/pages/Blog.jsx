import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { POSTS } from '../data.js'

export default function Blog() {
  return (
    <>
      <Seo title="Wisnotech Blog — AI, Automation & Business Guides" description="Practical guides on AI search optimization, automation, chat assistants and building AI-ready businesses — written by Wisnotech." path="/blog" />
      <section className="pt-32 pb-16">
        <div className="container-wide">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-4 text-4xl font-bold">Wisnotech Blog — AI, Automation & Business Guides</h1>
          <p className="mt-3 text-muted">Practical guides on AI search optimization, automation, chat assistants and building AI-ready businesses — written by Wisnotech. From the blog — Insights on AI, automation & growth.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {POSTS.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card hover:border-white/25">
                <p className="text-xs text-neon">{p.category} • {new Date(p.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                <span className="mt-3 inline-block text-sm text-neon">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
