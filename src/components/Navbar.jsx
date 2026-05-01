import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronRight, ChevronDown,
         Code2, Smartphone, Bot, Brain, CreditCard, Wrench,
         Briefcase, HelpCircle, DollarSign,
         ShoppingCart, HeartPulse, TrendingUp, Layers,
         BookOpen, Truck, Home, Plane, Users } from 'lucide-react'
import Logo from './Logo'

/* ── Dropdown data ── */
const serviceItems = [
  { icon: Code2,       label: 'Web Development',          desc: 'Custom websites, web apps & e-commerce',    href: '#services' },
  { icon: Smartphone,  label: 'Mobile App Development',   desc: 'iOS & Android cross-platform apps',         href: '#services' },
  { icon: Bot,         label: 'Chatbot Development',      desc: 'AI-powered bots for support & automation',  href: '#services' },
  { icon: Brain,       label: 'AI Integration',           desc: 'LLMs, RAG pipelines & ML workflows',        href: '#services' },
  { icon: CreditCard,  label: 'Payment Gateways',         desc: 'Stripe, Razorpay, Apple Pay & more',        href: '#services' },
  { icon: Wrench,      label: 'Post-Delivery Support',    desc: '24/7 monitoring & ongoing maintenance',     href: '#services' },
]

const businessItems = [
  { icon: ShoppingCart, label: 'E-commerce / Retail',        desc: 'Stores, marketplaces & checkout flows',     href: '#contact' },
  { icon: HeartPulse,   label: 'Healthcare / MedTech',       desc: 'Patient apps, EHR integrations & portals',  href: '#contact' },
  { icon: TrendingUp,   label: 'Finance / FinTech',          desc: 'Payment systems & financial platforms',     href: '#contact' },
  { icon: Layers,       label: 'SaaS / Technology',          desc: 'Scalable cloud products & dashboards',      href: '#contact' },
  { icon: BookOpen,     label: 'Education / EdTech',         desc: 'LMS platforms & learning experiences',      href: '#contact' },
  { icon: Truck,        label: 'Logistics / Supply Chain',   desc: 'Tracking, routing & ops software',          href: '#contact' },
  { icon: Home,         label: 'Real Estate',                desc: 'Listing platforms & CRM tools',             href: '#contact' },
  { icon: Plane,        label: 'Hospitality & Travel',       desc: 'Booking engines & guest portals',           href: '#contact' },
  { icon: Users,        label: 'Professional Services',      desc: 'Custom tools for agencies & consultancies', href: '#contact' },
]

const companyItems = [
  { icon: Briefcase,   label: 'Portfolio',   desc: "Projects we've built & shipped",  href: '#portfolio' },
  { icon: HelpCircle,  label: 'FAQ',         desc: 'Common questions answered',        href: '#faq'       },
  { icon: DollarSign,  label: 'Pricing',     desc: 'Transparent plans & retainers',   href: '#pricing'   },
]

/* ── Generic dropdown panel ── */
function DropdownPanel({ items, columns = 2, onClose }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50
                 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 min-w-max"
      style={{ animation: 'dropIn .18s ease' }}
    >
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-3 px-4 py-3 rounded-xl
                         hover:bg-brand-50 transition-colors duration-150 group min-w-[200px]"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-50 group-hover:bg-brand-100
                              flex items-center justify-center flex-shrink-0 transition-colors">
                <Icon className="w-[18px] h-[18px] text-brand-600" strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 leading-tight">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">{item.desc}</div>
              </div>
            </a>
          )
        })}
      </div>

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translate(-50%, -6px); }
          to   { opacity: 1; transform: translate(-50%, 0);    }
        }
      `}</style>
    </div>
  )
}

/* ── Nav item with optional dropdown ── */
function NavItem({ label, href, dropdown, columns }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const timer = useRef(null)

  const show = () => { clearTimeout(timer.current); setOpen(true)  }
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120) }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={dropdown ? show : undefined}
      onMouseLeave={dropdown ? hide : undefined}
    >
      {dropdown ? (
        <button
          className="flex items-center gap-1 text-slate-600 hover:text-brand-600
                     text-base font-bold transition-colors duration-200 relative group py-1"
          onClick={() => setOpen((v) => !v)}
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-500 rounded-full
                           transition-all duration-300 group-hover:w-full" />
        </button>
      ) : (
        <a
          href={href}
          className="text-slate-600 hover:text-brand-600 text-base font-bold
                     transition-colors duration-200 relative group py-1 block"
        >
          {label}
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-500 rounded-full
                           transition-all duration-300 group-hover:w-full" />
        </a>
      )}

      {dropdown && open && (
        <DropdownPanel items={dropdown} columns={columns} onClose={() => setOpen(false)} />
      )}
    </div>
  )
}

/* ── Main Navbar ── */
export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Logo size={42} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <NavItem label="Services"  dropdown={serviceItems}  columns={2} />
            <NavItem label="Business"  dropdown={businessItems} columns={3} />
            <NavItem label="Company"   dropdown={companyItems}  columns={1} />
            <NavItem label="Contact"   href="#contact" />
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary px-7 py-3 text-base font-bold shadow-brand"
          >
            Book Free Consultation
            <ChevronRight className="w-4 h-4" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl
                       border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-3 pb-4 border-t border-slate-100 mt-3">

            {/* Services group */}
            <p className="px-4 py-1.5 text-xs font-black text-slate-400 uppercase tracking-widest">Services</p>
            {serviceItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl
                             text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all">
                  <Icon className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm font-bold">{item.label}</span>
                </a>
              )
            })}

            {/* Business group */}
            <p className="px-4 py-1.5 mt-2 text-xs font-black text-slate-400 uppercase tracking-widest">Business</p>
            {businessItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl
                             text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all">
                  <Icon className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm font-bold">{item.label}</span>
                </a>
              )
            })}

            {/* Company group */}
            <p className="px-4 py-1.5 mt-2 text-xs font-black text-slate-400 uppercase tracking-widest">Company</p>
            {companyItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl
                             text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all">
                  <Icon className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm font-bold">{item.label}</span>
                </a>
              )
            })}

            <div className="px-4 mt-3">
              <a href="#contact" onClick={() => setOpen(false)}
                className="btn-primary w-full py-3 text-sm rounded-xl text-center">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
