import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Star, Award } from 'lucide-react'

const stats = [
  {
    icon:    TrendingUp,
    value:   150,
    suffix:  '+',
    label:   'Projects Delivered',
    sub:     'Across web, mobile & AI',
    color:   'text-brand-600',
    bg:      'bg-brand-50',
    border:  'border-brand-200',
    grad:    'from-brand-500 to-violet-500',
  },
  {
    icon:    Users,
    value:   80,
    suffix:  '+',
    label:   'Happy Clients',
    sub:     'Startups to enterprises',
    color:   'text-purple-600',
    bg:      'bg-purple-50',
    border:  'border-purple-200',
    grad:    'from-purple-500 to-brand-500',
  },
  {
    icon:    Star,
    value:   4.9,
    suffix:  '/5',
    label:   'Average Rating',
    sub:     'Across all engagements',
    color:   'text-brand-600',
    bg:      'bg-brand-50',
    border:  'border-brand-200',
    grad:    'from-brand-500 to-purple-500',
    decimal: true,
  },
  {
    icon:    Award,
    value:   5,
    suffix:  '+ yrs',
    label:   'Industry Experience',
    sub:     'Trusted since 2019',
    color:   'text-violet-600',
    bg:      'bg-violet-50',
    border:  'border-violet-200',
    grad:    'from-violet-500 to-purple-500',
  },
]

function CountUp({ target, decimal, suffix }) {
  const [count, setCount] = useState(0)
  const ref  = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true
          const duration = 1800
          const steps    = 60
          const interval = duration / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            const progress = step / steps
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = decimal
              ? parseFloat((eased * target).toFixed(1))
              : Math.round(eased * target)
            setCount(current)
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, decimal])

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <div className="text-center mb-14 reveal">
          <div className="section-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            By the Numbers
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
            Results That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Every number here represents a real project, a real client, and a real outcome we're proud of.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className={`reveal group relative rounded-2xl border ${s.border} bg-white p-7
                            hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div className={`${s.bg} ${s.border} border w-12 h-12 rounded-2xl
                                  flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${s.color}`} strokeWidth={2} />
                </div>

                {/* Number */}
                <div className={`text-4xl font-black ${s.color} mb-1`}>
                  <CountUp target={s.value} decimal={!!s.decimal} suffix={s.suffix} />
                </div>

                {/* Label */}
                <div className="text-slate-900 font-extrabold text-base mb-1">{s.label}</div>
                <div className="text-slate-400 text-xs font-medium">{s.sub}</div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl
                              bg-gradient-to-r ${s.grad}
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
