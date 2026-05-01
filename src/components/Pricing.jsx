import { BadgeCheck, Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name:    'Discovery',
    price:   'Free',
    period:  'No commitment',
    desc:    'Book a 45-minute strategy call and walk away with a clear tech roadmap and honest ballpark estimate.',
    features:['Business needs analysis', 'Tech stack recommendation', 'High-level project scoping', 'Ballpark cost estimate', 'No obligation whatsoever'],
    cta:     'Book Free Discovery Call',
    hi:      false,
  },
  {
    name:    'Full Project',
    price:   'Custom',
    period:  'Per project',
    desc:    'End-to-end development from discovery through launch, including 3 months of post-launch support.',
    features:['Dedicated project manager', 'Full dev + design team', 'Agile sprint delivery', 'QA & testing included', '3-month post-launch support', 'Documentation & handover'],
    cta:     'Get a Custom Quote',
    hi:      true,
  },
  {
    name:    'Retainer',
    price:   'Monthly',
    period:  'Ongoing partnership',
    desc:    'Your always-on tech department — monthly maintenance, updates and continuous feature development.',
    features:['Dedicated support engineer', 'Priority SLA response', 'Monthly performance report', 'Proactive monitoring', 'Feature development hours', 'Flexible scope each month'],
    cta:     'Discuss a Retainer',
    hi:      false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            No hidden fees. Every project is scoped and quoted around your specific goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal rounded-2xl transition-all duration-300 ${
                p.hi
                  ? 'bg-gradient-to-br from-brand-600 via-violet-600 to-purple-700 text-white shadow-[0_24px_64px_rgba(99,102,241,0.35)] -mt-4 mb-0'
                  : 'bg-white border border-slate-200 hover:border-brand-300 hover:shadow-card-hover'
              }`}
              style={{ transitionDelay: `${i * 80}ms`, padding: p.hi ? 2 : 0 }}
            >
              {/* Inner card (for gradient border effect on highlighted plan) */}
              <div
                className={`h-full rounded-[14px] p-8 ${p.hi ? 'bg-gradient-to-br from-brand-600 via-violet-600 to-purple-700' : ''}`}
              >
                {p.hi && (
                  <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                )}

                {/* Plan name */}
                <div className={`text-xs font-black uppercase tracking-widest mb-2 ${p.hi ? 'text-white/70' : 'text-slate-400'}`}>
                  {p.name}
                </div>

                {/* Price */}
                <div className={`text-5xl font-black leading-none mb-1 ${p.hi ? 'text-white' : 'text-slate-900'}`}>
                  {p.price}
                </div>
                <div className={`text-sm font-semibold mb-4 ${p.hi ? 'text-white/70' : 'text-brand-600'}`}>
                  {p.period}
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${p.hi ? 'text-white/80' : 'text-slate-500'}`}>
                  {p.desc}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${p.hi ? 'bg-white/20' : 'bg-slate-200'}`} />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        p.hi ? 'bg-white/20' : 'bg-brand-50'
                      }`}>
                        <Check className={`w-3 h-3 ${p.hi ? 'text-white' : 'text-brand-600'}`} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium ${p.hi ? 'text-white/90' : 'text-slate-600'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    p.hi
                      ? 'bg-white text-brand-600 hover:bg-slate-50 shadow-lg'
                      : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand'
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-400 text-sm mt-10 reveal">
          All plans include a free consultation. No credit card required.{' '}
          <a href="#contact" className="text-brand-600 font-semibold hover:underline">
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  )
}
