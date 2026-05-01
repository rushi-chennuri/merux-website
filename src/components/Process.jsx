import { MessageSquare, Layers, GitMerge, RefreshCw } from 'lucide-react'

const steps = [
  {
    num:   '01',
    icon:  MessageSquare,
    title: 'Consult',
    desc:  'We deep-dive into your goals, pain points and requirements. Together we map a clear technical roadmap and success criteria.',
    color: 'text-brand-600',
    bg:    'bg-brand-50',
    ring:  'ring-brand-200',
    grad:  'from-brand-500 to-violet-500',
  },
  {
    num:   '02',
    icon:  Layers,
    title: 'Build',
    desc:  'Our engineers architect and develop your solution with clean, scalable code. Regular sprint demos keep you in the loop.',
    color: 'text-violet-600',
    bg:    'bg-violet-50',
    ring:  'ring-violet-200',
    grad:  'from-violet-500 to-purple-500',
  },
  {
    num:   '03',
    icon:  GitMerge,
    title: 'Integrate',
    desc:  'We seamlessly connect your systems, configure third-party integrations, and deploy to production with zero downtime.',
    color: 'text-cyan-600',
    bg:    'bg-cyan-50',
    ring:  'ring-cyan-200',
    grad:  'from-cyan-500 to-teal-500',
  },
  {
    num:   '04',
    icon:  RefreshCw,
    title: 'Maintain',
    desc:  'Continuous support, performance optimisation and feature development ensure your product keeps improving — always.',
    color: 'text-emerald-600',
    bg:    'bg-emerald-50',
    ring:  'ring-emerald-200',
    grad:  'from-emerald-500 to-green-500',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Our <span className="gradient-text">4-Step Process</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            A proven journey from vision to reality — and beyond.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 relative">

          {/* Connector line — desktop only */}
          <div
            className="hidden xl:block absolute top-[28px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px"
            style={{ background: 'linear-gradient(90deg, #818CF8, #A78BFA, #06B6D4, #10B981)' }}
          />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="reveal text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step circle */}
                <div className="relative inline-flex mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${s.bg} ring-2 ${s.ring} flex items-center justify-center
                                transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg cursor-default`}
                  >
                    <Icon className={`w-6 h-6 ${s.color}`} strokeWidth={2} />
                  </div>

                  {/* Step number badge */}
                  <span
                    className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full text-[10px] font-black text-white
                                flex items-center justify-center bg-gradient-to-br ${s.grad}`}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Step number label */}
                <div className="text-xs font-black text-slate-300 tracking-widest uppercase mb-2">{s.num}</div>

                <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand-600 via-violet-600 to-purple-600 p-px reveal">
          <div className="bg-white rounded-[14px] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-1">Ready to start your project?</h3>
              <p className="text-slate-500 text-sm">Book a free 45-minute discovery call — no commitment required.</p>
            </div>
            <a
              href="#contact"
              className="btn-primary px-7 py-3.5 text-sm rounded-xl shadow-brand flex-shrink-0"
            >
              Book Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
