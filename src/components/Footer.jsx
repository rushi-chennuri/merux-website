import { Mail, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

const serviceLinks = [
  'Web Development', 'Mobile App Development', 'Chatbot Development',
  'AI Integration', 'Payment Gateways', 'Ongoing Support',
]

const companyLinks = [
  { label: 'Our Process',    href: '#process'   },
  { label: 'Portfolio',      href: '#portfolio' },
  { label: 'FAQ',            href: '#faq'       },
  { label: 'Pricing',        href: '#pricing'   },
  { label: 'Contact Us',     href: '#contact'   },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #2d1b69 60%, #3d0f6b 100%)' }}>

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div>
            <div className="mb-4">
              <Logo size={34} dark />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-1">
              Your full-cycle technology partner — we innovate, build, and elevate your business with technology that truly works.
            </p>
            <p className="text-slate-600 text-xs italic mb-5">Innovate · Build · Elevate</p>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter,  href: '#', label: 'Twitter'  },
                { Icon: Github,   href: '#', label: 'GitHub'   },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {s}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              {[
                { Icon: Mail,   v: 'bhavanarushi80@gmail.com' },
                { Icon: MapPin, v: 'Bengaluru, India'          },
              ].map(({ Icon, v }) => (
                <li key={v} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">{v}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-slate-500 font-semibold mb-2">Get tech insights in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white
                             placeholder-slate-500 outline-none focus:border-brand-500 transition-colors"
                />
                <button
                  className="text-white px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex-shrink-0 hover:-translate-y-0.5"
                  style={{ background: '#2563EB', boxShadow: '0 4px 14px rgba(37,99,235,0.32)' }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.10)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MERUX. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
