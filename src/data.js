export const SITE = {
  name: 'Wisnotech',
  email: 'wisnotech@gmail.com',
  phone: '+2349153541297',
  phoneDisplay: '+234 915 354 1297',
  address: 'Forest Guard Street, Uromi, Edo State, Nigeria',
  url: 'https://wisnotech.vercel.app'
}

export const SERVICES = [
  { title: 'AI & Automation', desc: 'Intelligent workflows, AI assistants and automated business systems that remove repetitive work.' },
  { title: 'AI Video Content Creation', desc: 'Scripts, AI avatars, editing and motion graphics that produce studio-grade videos without a studio.' },
  { title: 'Software Development', desc: 'Custom web applications, SaaS platforms and business software engineered to scale.' },
  { title: 'Web & Mobile', desc: 'Modern websites and mobile applications designed around real users and real results.' },
  { title: 'AI Education', desc: 'Practical AI training for businesses, creators, professionals and ambitious entrepreneurs.' },
  { title: 'AI Consulting', desc: 'Clear guidance on where AI creates real value in your business and how to get there.' }
]

export const COURSES = [
  {
    slug: 'ai-fundamentals', title: 'AI Fundamentals', badge: 'Foundation',
    duration: '4 weeks', level: 'Beginner', format: 'Live + recorded', usd: 199, naira: 350000,
    desc: 'The zero-to-one foundation in artificial intelligence for complete beginners.',
    topics: ['How AI actually works', 'Using the best AI tools', 'Prompting essentials', 'Your first AI workflow']
  },
  {
    slug: 'automation-workflow-specialist', title: 'Automation & Workflow Specialist', badge: 'Specialist',
    duration: '5 weeks', level: 'Beginner—Intermediate', format: 'Live + recorded', usd: 299, naira: 520000,
    desc: 'Automate repetitive business tasks with no-code tools, workflows and AI agents.',
    topics: ['No-code automation tools', 'Business process mapping', 'AI customer support bots', 'Workflow SOPs']
  },
  {
    slug: 'ai-content-creation-pro', title: 'AI Content Creation Pro', badge: 'Creative',
    duration: '5 weeks', level: 'Beginner—Intermediate', format: 'Live + recorded', usd: 249, naira: 430000,
    desc: 'Produce studio-grade videos, images and campaign content with AI.',
    topics: ['AI video generation', 'Avatars & talking heads', 'AI image creation', 'Content repurposing']
  },
  {
    slug: 'prompt-engineering-ai-agents', title: 'Prompt Engineering & AI Agents', badge: 'Advanced',
    duration: '4 weeks', level: 'Intermediate', format: 'Live + recorded', usd: 279, naira: 490000,
    desc: 'Master advanced prompting and build autonomous AI agents that do real work.',
    topics: ['Advanced prompt design', 'Chain-of-thought patterns', 'Building AI agents', 'Agent tooling & APIs']
  },
  {
    slug: 'no-code-app-building', title: 'No-Code & App Building', badge: 'Builder',
    duration: '6 weeks', level: 'Beginner', format: 'Live + recorded', usd: 299, naira: 520000,
    desc: 'Build and launch functional web apps without writing code.',
    topics: ['No-code platforms', 'Databases & logic', 'Launching your first app', 'Monetization basics']
  },
  {
    slug: 'ai-for-business-growth', title: 'AI for Business Growth', badge: 'Growth', featured: true,
    duration: '5 weeks', level: 'All levels', format: 'Live + recorded', usd: 349, naira: 610000,
    desc: 'A practical roadmap to apply AI across marketing, sales, operations and service.',
    topics: ['AI growth strategy', 'Sales & marketing automation', 'Customer experience', 'ROI measurement']
  },
  {
    slug: 'web-development-bootcamp', title: 'Web Development Bootcamp', badge: 'Bootcamp',
    duration: '8 weeks', level: 'Beginner', format: 'Live + recorded', usd: 399, naira: 700000,
    desc: 'From zero to building modern, production-ready websites that actually ship.',
    topics: ['HTML, CSS & JavaScript', 'React fundamentals', 'Responsive design', 'Deploying to production']
  },
  {
    slug: 'full-stack-software-engineering', title: 'Full-Stack Software Engineering', badge: 'Flagship', featured: true,
    duration: '12 weeks', level: 'Intermediate', format: 'Live + recorded', usd: 599, naira: 1050000,
    desc: 'A complete program covering front-end, back-end, APIs and AI integration.',
    topics: ['Front-end with React', 'Back-end & databases', 'REST & GraphQL APIs', 'Integrating AI features']
  }
]

export const POSTS = [
  {
    slug: 'ai-search-optimization',
    title: 'How to Get Your Business Recommended by AI Search (2026 Guide)',
    date: '2026-08-01', category: 'AI Search', image: '/assets/blog/ai-search-optimization.jpg',
    excerpt: 'When people ask ChatGPT which business to hire, the answer comes from specific, verifiable signals. Here is what actually moves the needle for AI recommendations.'
  },
  {
    slug: 'ai-automations-small-business',
    title: '7 AI Automations That Save Small Businesses 10+ Hours a Week',
    date: '2026-07-18', category: 'Automation', image: '/assets/blog/ai-automations-small-business.jpg',
    excerpt: "You don't need a big IT budget to automate your business with AI. These seven automations pay for themselves in the first month."
  },
  {
    slug: 'ai-chat-assistant-for-business',
    title: 'What Does an AI Chat Assistant Do for Your Business? A Full Breakdown',
    date: '2026-06-30', category: 'AI Assistants', image: '/assets/blog/ai-chat-assistant.jpg',
    excerpt: "A website without someone ready to talk is a visitor you lose in ten seconds. Here's what an AI chat assistant actually does, and how to set one up right."
  },
  {
    slug: 'llms-txt-explained',
    title: 'llms.txt Explained: The Simple File That Makes AI Crawlers Understand Your Website',
    date: '2026-06-15', category: 'AI Infrastructure', image: '/assets/blog/llms-txt-explained.jpg',
    excerpt: "llms.txt is a plain markdown file that tells AI models what your website is about in one glance. Here's what it is, why it matters in 2026, and exactly what to write."
  }
]
