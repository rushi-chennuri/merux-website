import { Globe, Target, Users, Clock, ShieldCheck, TrendingUp, CheckCircle, ArrowRight, Layers, Cpu, Lock } from 'lucide-react'

/* ── Dark navy capability cards (OpenText "what we can do" style) ── */
const capabilities = [
  {
    icon: Layers,
    title: 'End-to-end delivery',
    desc: 'We handle everything from UI/UX design and frontend to backend APIs, cloud infrastructure, and post-launch support — one team, full ownership.',
    ghost: (
      <svg viewBox="0 0 120 100" fill="none" className="w-28 h-28 opacity-10">
        <rect x="8" y="8" width="104" height="84" rx="10" stroke="white" strokeWidth="4"/>
        <rect x="22" y="24" width="76" height="8" rx="4" fill="white"/>
        <rect x="22" y="42" width="50" height="8" rx="4" fill="white"/>
        <rect x="22" y="60" width="62" height="8" rx="4" fill="white"/>
      </svg>
    ),
  },
  {
    icon: Cpu,
    title: 'AI-ready technology',
    desc: 'From LLM integration and intelligent chatbots to predictive analytics and automation pipelines — we embed AI where it actually creates value for your business.',
    ghost: (
      <svg viewBox="0 0 120 100" fill="none" className="w-28 h-28 opacity-10">
        <circle cx="60" cy="50" r="30" stroke="white" strokeWidth="4"/>
        <circle cx="60" cy="50" r="12" stroke="white" strokeWidth="4"/>
        <line x1="60" y1="8" x2="60" y2="20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="80" x2="60" y2="92" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <line x1="18" y1="50" x2="30" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <line x1="90" y1="50" x2="102" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    icon: Lock,
    title: 'Secure & compliant',
    desc: 'Security-first development in every project. We build to PCI-DSS, GDPR, and SOC-2 standards so your data — and your customers\' trust — is always protected.',
    ghost: (
      <svg viewBox="0 0 120 100" fill="none" className="w-28 h-28 opacity-10">
        <path d="M60 10 L100 28 L100 55 C100 75 80 90 60 95 C40 90 20 75 20 55 L20 28 Z"
              stroke="white" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M45 50 L55 60 L78 38" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const features = [
  {
    icon:  Globe,
    title: 'Full-Cycle Partnership',
    desc:  "We don't just build and leave. We stay with you from concept to growth as your long-term tech department.",
    color: 'text-brand-600', bg: 'bg-brand-50',
  },
  {
    icon:  Target,
    title: 'Business-First Approach',
    desc:  'Every technical decision begins with your business goals. We translate objectives into the right tech solutions.',
    color: 'text-purple-600', bg: 'bg-purple-50',
  },
  {
    icon:  Users,
    title: 'Dedicated Expert Team',
    desc:  'One cohesive team, start to finish. No handoffs, no miscommunication — focused, consistent execution.',
    color: 'text-brand-600', bg: 'bg-brand-50',
  },
  {
    icon:  Clock,
    title: 'On-Time, On-Budget',
    desc:  'Transparent timelines, honest updates and zero surprises. We set realistic expectations and we meet them.',
    color: 'text-purple-600', bg: 'bg-purple-50',
  },
  {
    icon:  ShieldCheck,
    title: 'Enterprise-Grade Security',
    desc:  "Security-first development practices in everything we build. Your customers' data is always protected.",
    color: 'text-brand-600', bg: 'bg-brand-50',
  },
  {
    icon:  TrendingUp,
    title: 'Built to Scale',
    desc:  'Architecture designed for growth. As your business scales, your technology scales effortlessly alongside it.',
    color: 'text-purple-600', bg: 'bg-purple-50',
  },
]

export default function WhyUs() {
  return (
    <>
      {/* ── Capability Cards (dark navy, OpenText style) ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-5"
                 style={{ background: 'white', color: '#7C3AED', boxShadow: '0 0 0 1.5px #E91E8C' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#E91E8C' }} />
              Our Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
              Here's what we can <span className="gradient-text">do for you</span>
            </h2>
            <div className="flex justify-center mb-5">
              <div className="h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #E91E8C)' }} />
            </div>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              MERUX helps you build, launch and scale products that users love — faster and with less risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="reveal relative rounded-2xl p-8 overflow-hidden text-white
                             transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, #1e1b4b 0%, #2563EB 50%, #7C3AED 100%)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-black text-white mb-3">{c.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{c.desc}</p>

                  {/* Ghost SVG illustration */}
                  <div className="absolute bottom-4 right-4 pointer-events-none">
                    {c.ghost}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why MERUX (white feature grid) ── */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left: copy */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-6"
                   style={{ background: 'white', color: '#7C3AED', boxShadow: '0 0 0 1.5px #E91E8C' }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#E91E8C' }} />
                Why MERUX
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
                More Than a Vendor.{' '}
                <br className="hidden sm:block" />
                <span className="gradient-text">Your Tech Partner.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                We combine deep technical expertise with a genuine understanding of your business goals — and we stay invested in your success long after launch.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Dedicated point of contact for all your technology needs',
                  'Agile delivery with weekly sprint reviews and demos',
                  'Transparent pricing — no hidden costs, ever',
                  'Post-launch support included in every engagement',
                  'Flexible retainer model for ongoing partnership',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#E91E8C' }} />
                    <span className="text-slate-600 text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary px-7 py-3.5 text-base shadow-brand">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Right: feature grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    className="feature-card reveal"
                    style={{ transitionDelay: `${i * 55}ms` }}
                  >
                    <div className={`${f.bg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${f.color}`} strokeWidth={2} />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">{f.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
