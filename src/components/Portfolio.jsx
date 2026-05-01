import { useState } from 'react'
import { ArrowUpRight, TrendingUp, Users, Clock } from 'lucide-react'

const filters = ['All', 'Web', 'Mobile', 'AI']

const projects = [
  {
    category: 'Web',
    industry: 'E-commerce / Retail',
    title:    'ShopNest — E-commerce Platform',
    desc:     'Built a full-stack multi-vendor marketplace with real-time inventory, custom checkout flows, and Stripe integration. Reduced cart abandonment by 34% within 3 months of launch.',
    image:    null,
    color:    'from-blue-500 to-brand-500',
    bg:       'bg-blue-50',
    tags:     ['React', 'Next.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    results: [
      { icon: TrendingUp, stat: '34%',  label: 'Drop in cart abandonment' },
      { icon: Users,      stat: '12k',  label: 'Active users in month 1'  },
      { icon: Clock,      stat: '8 wk', label: 'Delivery timeline'        },
    ],
  },
  {
    category: 'Mobile',
    industry: 'Healthcare / MedTech',
    title:    'MediTrack — Patient App',
    desc:     'Cross-platform iOS & Android app for appointment booking, prescription tracking, and teleconsultation. Integrated with hospital EHR systems and launched on both app stores.',
    image:    null,
    color:    'from-violet-500 to-purple-500',
    bg:       'bg-violet-50',
    tags:     ['React Native', 'Expo', 'Firebase', 'HL7 FHIR', 'Push Notifications'],
    results: [
      { icon: TrendingUp, stat: '4.8/5', label: 'App Store rating'       },
      { icon: Users,      stat: '5k+',   label: 'Patient downloads'       },
      { icon: Clock,      stat: '12 wk', label: 'End-to-end timeline'     },
    ],
  },
  {
    category: 'AI',
    industry: 'SaaS / Technology',
    title:    'SupportBot — AI Help Desk',
    desc:     'Custom GPT-4 chatbot trained on 3 years of support tickets. Handles 70% of incoming queries autonomously, with smart escalation to human agents for complex cases.',
    image:    null,
    color:    'from-brand-500 to-purple-600',
    bg:       'bg-brand-50',
    tags:     ['GPT-4', 'LangChain', 'Python', 'Zendesk API', 'Pinecone'],
    results: [
      { icon: TrendingUp, stat: '70%',  label: 'Queries resolved by AI'  },
      { icon: Users,      stat: '24/7', label: 'Availability'             },
      { icon: Clock,      stat: '6 wk', label: 'Build & deployment'       },
    ],
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="section-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            Our Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Projects We're <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            A snapshot of what we've built — each project delivered on time, on budget, and built to scale.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-all duration-200
                ${active === f
                  ? 'bg-brand-600 text-white border-brand-600 shadow-brand'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-brand-300 hover:text-brand-600'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className="reveal group bg-white rounded-2xl border border-slate-200 overflow-hidden
                         hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Colour banner */}
              <div className={`bg-gradient-to-r ${p.color} h-2`} />

              <div className="p-7">
                {/* Industry badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.bg} border border-slate-200`}>
                    {p.industry}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 transition-colors" />
                </div>

                {/* Title + desc */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                {/* Results row */}
                <div className="grid grid-cols-3 gap-3 mb-5 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  {p.results.map((r) => {
                    const Icon = r.icon
                    return (
                      <div key={r.label} className="text-center">
                        <div className="text-lg font-black text-brand-600">{r.stat}</div>
                        <div className="text-slate-400 text-xs leading-tight">{r.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-slate-500 mb-4">Have a project in mind? Let's talk about it.</p>
          <a href="#contact" className="btn-primary px-8 py-3.5 rounded-xl shadow-brand text-sm">
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
