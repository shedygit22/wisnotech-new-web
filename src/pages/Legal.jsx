import Seo from '../components/Seo.jsx'
export default function Legal({ type }) {
  const isPrivacy = type === 'privacy'
  return (
    <>
      <Seo title={isPrivacy ? 'Privacy Policy' : 'Terms of Service'} path={isPrivacy ? '/privacy' : '/terms'} />
      <div className="container-wide pt-32 pb-20 max-w-3xl">
        {isPrivacy ? (
          <>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-muted">This policy explains what information we collect when you use the Wisnotech website, how we use it, and the choices you have.</p>
            <p className="text-xs text-white/40 mt-2">Last updated: August 2026</p>
            <h2 className="mt-8 font-bold">Information we collect</h2>
            <p className="mt-2 text-muted text-sm">When you use the contact form, AI assistant or course enquiry forms, we collect the details you choose to provide — such as your name, email address, company and project information.</p>
            <h2 className="mt-6 font-bold">How we use your information</h2>
            <p className="mt-2 text-muted text-sm">We use the information you provide to respond to your enquiries, prepare project proposals, manage course enquiries and improve our services. We do not sell your personal information.</p>
            <h2 className="mt-6 font-bold">Analytics and site data</h2>
            <p className="mt-2 text-muted text-sm">Like most websites, we may collect basic technical data (such as browser type and pages visited) to understand how the site is used and keep it working reliably. Conversations with the Wisnotech AI assistant are used to answer your questions and may be reviewed to improve its responses. Avoid sharing sensitive personal or financial details in chat.</p>
            <h2 className="mt-6 font-bold">Data sharing</h2>
            <p className="mt-2 text-muted text-sm">We do not rent or sell your personal information. We only share data with service providers needed to operate the site (such as hosting) or when required by law.</p>
            <h2 className="mt-6 font-bold">Contact us</h2>
            <p className="mt-2 text-muted text-sm">Questions about this policy? Email wisnotech@gmail.com or message +234 915 354 1297.</p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="mt-4 text-muted">These terms govern your use of the Wisnotech website and services. By using the site, you agree to these terms.</p>
            <h2 className="mt-8 font-bold">Our services</h2>
            <p className="mt-2 text-muted text-sm">Wisnotech provides AI solutions, automation, software development and digital growth services. Project specifics, scope, pricing and timelines are agreed in writing for each engagement.</p>
            <h2 className="mt-6 font-bold">Quotes and payment</h2>
            <p className="mt-2 text-muted text-sm">Every project is scoped before work begins and you receive a clear quote upfront. Payment terms are confirmed per project. Prices shown on the site are starting points unless stated otherwise.</p>
            <h2 className="mt-6 font-bold">Intellectual property</h2>
            <p className="mt-2 text-muted text-sm">Once a project is paid for in full, deliverables are yours per the agreed terms. Wisnotech may showcase completed work in its portfolio unless we agree otherwise.</p>
            <h2 className="mt-6 font-bold">Your use of the site</h2>
            <p className="mt-2 text-muted text-sm">You agree not to misuse the website, interfere with its operation, or attempt to access systems you are not authorised to use.</p>
            <h2 className="mt-6 font-bold">Limitation of liability</h2>
            <p className="mt-2 text-muted text-sm">The site and its content are provided as-is. To the fullest extent permitted by law, Wisnotech is not liable for indirect or consequential losses arising from use of the site or services.</p>
            <p className="mt-4 text-muted text-sm">Questions about these terms? Email wisnotech@gmail.com or message +234 915 354 1297.</p>
          </>
        )}
      </div>
    </>
  )
}
