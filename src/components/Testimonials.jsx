import { useState } from 'react'
import { Star, ShieldCheck, Zap, Users, ThumbsUp } from 'lucide-react'

const testimonials = [
  {
    name:   'Sarah Mitchell',
    role:   'CEO, BrightCart E-commerce',
    avatar: 'SM',
    stars:  5,
    grad:   'from-brand-500 to-violet-500',
    badge:  'Web Dev + Payments',
    text:   "Orbix didn't just build our platform — they transformed our entire online presence. The e-commerce site handles thousands of daily orders with zero downtime. Payment integration was flawless. Their post-launch support team feels like our own in-house tech department. Truly exceptional partners.",
  },
  {
    name:   'Dr. Raj Patel',
    role:   'Founder, MediTrack Health',
    avatar: 'RP',
    stars:  5,
    grad:   'from-violet-500 to-purple-600',
    badge:  'Mobile App + AI',
    text:   "We needed a mobile app and AI-driven patient intake automation. Orbix delivered a solution our patients genuinely love. The AI integration cut administrative workload by 60%. Their business-first mindset meant they understood what we actually needed — not just what we asked for. Outstanding.",
  },
  {
    name:   'James Okonkwo',
    role:   'COO, RetailEdge Group',
    avatar: 'JO',
    stars:  5,
    grad:   'from-emerald-500 to-teal-500',
    badge:  'AI Chatbot + Support',
    text:   "The AI chatbot Orbix built handles 80% of our customer queries automatically, and the human handover is seamless. What impressed us most was the commitment beyond launch. They didn't disappear — they tracked performance, suggested improvements, and continue to iterate. That is real partnership.",
  },
]

const badges = [
  { icon: ShieldCheck, label: 'Enterprise Security',   color: 'text-brand-600',   bg: 'bg-brand-50'   },
  { icon: Zap,         label: 'Fast Delivery',          color: 'text-amber-600',   bg: 'bg-amber-50'   },
  { icon: Users,       label: 'Dedicated Team',         color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: ThumbsUp,    label: '100% Satisfaction',      color: 'text-violet-600',  bg: 'bg-violet-50'  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            Client Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Real results from real businesses we have proudly partnered with.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              onClick={() => setActive(i)}
              className={`reveal rounded-2xl p-7 cursor-pointer border transition-all duration-300
                          ${active === i
                            ? 'border-brand-400 shadow-card-hover bg-white scale-[1.02]'
                            : 'border-slate-200 hover:border-brand-300 hover:shadow-card bg-white'
                          }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars + badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full border border-brand-200">
                  {t.badge}
                </span>
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-xs font-black text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {badges.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.label}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-brand-200 hover:bg-white transition-all"
              >
                <div className={`w-9 h-9 rounded-xl ${b.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${b.color}`} strokeWidth={2} />
                </div>
                <span className="text-sm font-bold text-slate-700">{b.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
