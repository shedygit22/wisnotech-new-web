import { Helmet } from 'react-helmet-async'
import { SITE } from '../data.js'

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | Wisnotech` : 'Wisnotech — AI, Software & Automation for Growing Businesses'
  const desc = description || 'Wisnotech helps businesses build AI solutions, automate workflows, develop custom software and create digital systems designed for growth.'
  const url = `${SITE.url}${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
