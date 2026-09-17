import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { POSTS } from '../data.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)
  if (!post) return <div className="container-wide pt-32 pb-20">Not found. <Link to="/blog" className="text-neon">Back</Link></div>
  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <article className="pt-32 pb-20">
        <div className="container-wide max-w-3xl">
          <Link to="/blog" className="text-sm text-white/50">← Blog</Link>
          <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>
          <p className="mt-2 text-sm text-white/40">{post.date}</p>
          <p className="mt-6 text-lg text-muted leading-relaxed">{post.excerpt} Full guide coming with the new site launch — contact Wisnotech for help implementing this now.</p>
          <a href="#contact" className="btn-primary mt-8">Get Help With This</a>
        </div>
      </article>
    </>
  )
}
