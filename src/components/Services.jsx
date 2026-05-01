import { useState, useEffect } from 'react'
import {
  Code2, Smartphone, Bot, Brain, CreditCard, Wrench,
  ArrowUpRight, X, Check, Clock, Layers, ArrowRight,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────
   SERVICE DATA  (card + modal content)
───────────────────────────────────────────────────────── */
const services = [
  {
    icon:    Code2,
    title:   'Web Development',
    short:   'Custom websites, web apps and high-converting e-commerce platforms — fast, scalable, and built to last.',
    tags:    ['React', 'Node.js', 'Next.js', 'E-commerce'],
    accent:  'from-blue-500 to-brand-500',
    bg:      'bg-blue-50',
    ic:      'text-blue-600',
    border:  'hover:border-blue-300',
    grad:    'from-blue-500 to-brand-600',
    // modal
    overview: 'We design and engineer web experiences that look stunning, load instantly and convert visitors into loyal customers. Every project starts with your business goals — not templates.',
    includes: [
      'Responsive, pixel-perfect UI/UX design',
      'Custom React / Next.js front-end development',
      'RESTful & GraphQL API back-end (Node.js)',
      'E-commerce storefronts with cart, checkout & inventory',
      'CMS integration (Contentful, Sanity, Strapi)',
      'SEO-optimised markup & Core Web Vitals optimisation',
      'CI/CD pipeline & cloud deployment (AWS / Vercel)',
    ],
    stack:    ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Vercel'],
    timeline: '4 – 12 weeks depending on scope',
  },
  {
    icon:    Smartphone,
    title:   'Mobile App Development',
    short:   'Native and cross-platform iOS & Android apps that deliver exceptional experiences and drive engagement.',
    tags:    ['React Native', 'iOS', 'Android', 'Flutter'],
    accent:  'from-violet-500 to-purple-500',
    bg:      'bg-violet-50',
    ic:      'text-violet-600',
    border:  'hover:border-violet-300',
    grad:    'from-violet-500 to-purple-600',
    overview: 'From concept to App Store listing, we build mobile applications that users actually enjoy using. We specialise in cross-platform development without compromising on native performance or feel.',
    includes: [
      'iOS & Android apps from a single codebase',
      'Native modules for camera, GPS, biometrics, push notifications',
      'Offline-first architecture with local data sync',
      'App Store & Google Play submission support',
      'Performance profiling & crash monitoring setup',
      'User analytics integration (Mixpanel, Amplitude)',
      'OTA (Over-the-Air) update pipeline',
    ],
    stack:    ['React Native', 'Expo', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Center'],
    timeline: '6 – 16 weeks depending on features',
  },
  {
    icon:    Bot,
    title:   'Chatbot Development',
    short:   'AI-powered bots for customer support, lead capture and workflow automation — operating 24/7 without fatigue.',
    tags:    ['GPT-4', 'NLP', 'Automation', 'CRM Integration'],
    accent:  'from-emerald-500 to-teal-500',
    bg:      'bg-emerald-50',
    ic:      'text-emerald-600',
    border:  'hover:border-emerald-300',
    grad:    'from-emerald-500 to-teal-600',
    overview: 'We build intelligent conversational agents that understand natural language, remember context and hand off to human agents seamlessly. Our bots are deeply integrated into your existing tools and workflows.',
    includes: [
      'Custom NLP pipeline trained on your business domain',
      'Multi-channel deployment (website, WhatsApp, Slack, Teams)',
      'CRM / helpdesk integration (Salesforce, HubSpot, Zendesk)',
      'Smart escalation to live agents with full conversation context',
      'Conversation analytics dashboard',
      'Lead qualification & appointment booking flows',
      'Continuous learning from real conversations',
    ],
    stack:    ['OpenAI GPT-4', 'LangChain', 'Dialogflow', 'Rasa', 'Python', 'Node.js', 'Twilio'],
    timeline: '3 – 8 weeks depending on complexity',
  },
  {
    icon:    Brain,
    title:   'AI Integration',
    short:   'Embed machine learning and large language model capabilities into existing or new applications for smarter workflows.',
    tags:    ['OpenAI', 'LangChain', 'ML Models', 'Analytics'],
    accent:  'from-amber-500 to-orange-500',
    bg:      'bg-amber-50',
    ic:      'text-amber-600',
    border:  'hover:border-amber-300',
    grad:    'from-amber-500 to-orange-600',
    overview: 'We make AI practical. Whether you need document intelligence, predictive analytics, image recognition or a custom LLM-powered feature, we integrate it cleanly into your product without disrupting what already works.',
    includes: [
      'Custom LLM fine-tuning on proprietary data',
      'RAG (Retrieval-Augmented Generation) pipelines',
      'Document parsing, summarisation & classification',
      'Predictive analytics & demand forecasting models',
      'Computer vision & image/video analysis',
      'AI feature A/B testing & performance monitoring',
      'OpenAI, Anthropic, Gemini & open-source model integration',
    ],
    stack:    ['Python', 'LangChain', 'OpenAI API', 'HuggingFace', 'Pinecone', 'FastAPI', 'AWS SageMaker'],
    timeline: '4 – 10 weeks per feature',
  },
  {
    icon:    CreditCard,
    title:   'Payment Gateway Integration',
    short:   'PCI-compliant, multi-currency payment flows that reduce drop-off and maximise conversion across all platforms.',
    tags:    ['Stripe', 'PayPal', 'Razorpay', 'Apple Pay'],
    accent:  'from-rose-500 to-pink-500',
    bg:      'bg-rose-50',
    ic:      'text-rose-600',
    border:  'hover:border-rose-300',
    grad:    'from-rose-500 to-pink-600',
    overview: 'A clunky checkout loses sales. We engineer payment flows that feel effortless — covering every major provider, currency and method your customers expect, while keeping your platform fully PCI-DSS compliant.',
    includes: [
      'Stripe, PayPal, Razorpay, Square, Braintree integration',
      'One-click checkout & saved payment methods',
      'Apple Pay, Google Pay & UPI support',
      'Subscription & recurring billing management',
      'Multi-currency & automatic FX conversion',
      'Refunds, disputes & webhook event handling',
      'Fraud detection & 3DS2 strong authentication',
    ],
    stack:    ['Stripe API', 'PayPal SDK', 'Razorpay', 'Braintree', 'Node.js', 'Webhooks', 'PCI-DSS tooling'],
    timeline: '1 – 4 weeks depending on providers',
  },
  {
    icon:    Wrench,
    title:   'Post-Delivery Support',
    short:   'Ongoing maintenance, security patches, performance monitoring and feature updates long after your product launches.',
    tags:    ['24/7 Monitoring', 'SLA', 'Bug Fixes', 'Upgrades'],
    accent:  'from-cyan-500 to-sky-500',
    bg:      'bg-cyan-50',
    ic:      'text-cyan-600',
    border:  'hover:border-cyan-300',
    grad:    'from-cyan-500 to-sky-600',
    overview: 'We are not a build-and-disappear agency. Every product we ship enters a long-term care programme — monitored, maintained and continuously improved so your investment keeps paying off.',
    includes: [
      '24/7 uptime & performance monitoring',
      'Priority bug fixes with defined SLA response times',
      'Monthly security audits & dependency updates',
      'Database backups & disaster recovery drills',
      'Monthly performance reports & optimisation recommendations',
      'Feature development hours (retainer-based)',
      'Dedicated Slack channel for direct team access',
    ],
    stack:    ['Datadog', 'Sentry', 'PagerDuty', 'GitHub Actions', 'AWS CloudWatch', 'Terraform', 'Grafana'],
    timeline: 'Ongoing — monthly retainer',
  },
]

/* ─────────────────────────────────────────────────────────
   SERVICE MODAL
───────────────────────────────────────────────────────── */
function ServiceModal({ svc, onClose }) {
  const Icon = svc.icon

  // Close on Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modalIn .25s ease' }}
      >
        {/* ── Header gradient strip ── */}
        <div className={`bg-gradient-to-r ${svc.grad} p-8 rounded-t-3xl`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Service Detail</p>
              <h2 className="text-2xl font-black text-white">{svc.title}</h2>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="p-8">

          {/* Overview */}
          <p className="text-slate-600 text-base leading-relaxed mb-8">{svc.overview}</p>

          {/* What's included */}
          <div className="mb-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-500" />
              What's Included
            </h3>
            <ul className="space-y-3">
              {svc.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-500" />
              Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-2">
              {svc.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-50 border border-brand-200 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <div className="text-xs font-black text-brand-400 uppercase tracking-widest">Typical Timeline</div>
              <div className="text-sm font-bold text-slate-800 mt-0.5">{svc.timeline}</div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary w-full py-4 text-base rounded-2xl shadow-brand"
          >
            Start a Conversation About This Service
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-center text-slate-400 text-xs mt-3">
            Free discovery call · No commitment required
          </p>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);     }
        }
      `}</style>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────────────────── */
export default function Services() {
  const [active,   setActive]   = useState(null)
  const [hovered,  setHovered]  = useState(null)

  const defaultBg = 'linear-gradient(145deg, #1e1b4b 0%, #2563EB 50%, #7C3AED 100%)'

  return (
    <>
      <section id="services" className="pt-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16 reveal">
            <div className="section-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
              What We Offer
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Every technology need your business has — covered end-to-end, from day one to beyond launch.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              const isHot = hovered === i
              return (
                <div
                  key={s.title}
                  className="reveal group relative overflow-hidden cursor-pointer rounded-2xl p-8
                             transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: defaultBg,
                    boxShadow: isHot
                      ? '0 20px 48px rgba(233,30,140,0.40), 0 4px 12px rgba(0,0,0,0.08)'
                      : '0 4px 20px rgba(30,27,75,0.20)',
                    transitionDelay: `${i * 60}ms`,
                    transition: 'box-shadow 0.45s ease, transform 0.3s ease',
                  }}
                  onClick={() => setActive(s)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Pink overlay — fades in on hover for smooth colour transition */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: '#E91E8C',
                      opacity: isHot ? 1 : 0,
                      transition: 'opacity 0.45s ease',
                    }}
                  />

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="relative text-xl font-black text-white mb-3">{s.title}</h3>

                  {/* Description */}
                  <p className="relative text-sm leading-relaxed mb-6 text-white/80">{s.short}</p>

                  {/* Tags */}
                  <div className="relative flex flex-wrap gap-2 mb-6">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          color: 'white',
                          borderColor: 'rgba(255,255,255,0.25)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Learn more */}
                  <div className="relative flex items-center gap-2 text-white text-sm font-bold underline underline-offset-2">
                    <ArrowUpRight className="w-4 h-4" />
                    Learn more
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && <ServiceModal svc={active} onClose={() => setActive(null)} />}
    </>
  )
}
