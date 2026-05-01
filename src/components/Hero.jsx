import { ChevronRight, Clock, Headphones, Layers, Sparkles } from 'lucide-react'

const skyStyle = {
  background: `linear-gradient(
    to bottom,
    #1e1b5e 0%,
    #2d1b8e 12%,
    #2563eb 28%,
    #3b82f6 44%,
    #7c3aed 56%,
    #a78bfa 68%,
    #ddd6fe 82%,
    #f5f3ff 92%,
    #ffffff 100%
  )`,
}

const stats = [
  { icon: Layers,     n: '6',      l: 'Core Services'        },
  { icon: Clock,      n: '24 hrs', l: 'Response Guarantee'   },
  { icon: Sparkles,   n: 'Free',   l: 'Discovery Sprint'     },
  { icon: Headphones, n: '100%',   l: 'Post-Launch Support'  },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={skyStyle}>

      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 35% at 50% 0%, rgba(255,255,255,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ paddingTop: '130px', paddingBottom: '40px' }}
      >

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm
                        text-white text-xs font-bold px-5 py-2 rounded-full
                        border border-white/30 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-200 inline-block" />
          Full-Cycle IT Solutions &amp; Consultancy
        </div>

        {/* Brand tagline */}
        <p className="text-purple-200 text-xs font-medium mb-7 tracking-widest uppercase">
          Innovate &nbsp;·&nbsp; Build &nbsp;·&nbsp; Elevate
        </p>

        {/* Headline — pure white, no gradient clip (avoids the broken-box bug) */}
        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.07]
                       tracking-tight text-balance mb-5">
          <span className="text-white">Technology that powers</span>
          <br />
          {/* Purple accent — matches MERUX theme */}
          <span className="text-purple-200">your growth.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-purple-100 text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl mx-auto">
          End-to-end web, mobile, AI, and payment solutions — built around your goals,
          delivered on time, and supported long after launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#services"
            className="inline-flex items-center gap-2 font-bold text-brand-700
                       bg-white rounded-full px-8 py-3.5 text-base
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explore our services
            <ChevronRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-white
                       border-2 border-white/60 rounded-full px-8 py-3.5 text-base
                       transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5"
          >
            Book free consultation
          </a>
        </div>

        {/* Stats — solid white card, always readable */}
        <div className="inline-flex flex-wrap items-center justify-center
                        bg-white rounded-2xl shadow-xl overflow-hidden"
             style={{ border: '1.5px solid rgba(37,99,235,0.16)' }}>
          <div className="w-full h-1 col-span-full"
               style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #A855F7)' }} />
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
            <div key={s.n}
                 className="px-7 py-5 text-center"
                 style={{ borderRight: i < stats.length - 1 ? '1px solid #ede9fe' : 'none' }}>
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50">
                <Icon className="h-[18px] w-[18px] text-brand-600" />
              </div>
              <div className="text-3xl font-black leading-none mb-1" style={{ color: '#2563EB' }}>
                {s.n}
              </div>
              <div className="text-xs text-slate-500 font-semibold">{s.l}</div>
            </div>
          )})}
        </div>
      </div>

      {/* Bottom fade into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-blue-300 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
