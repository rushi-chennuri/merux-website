import { useState } from 'react'
import { Mail, MapPin, Send, Loader2, CheckCircle, Linkedin, Twitter } from 'lucide-react'

const contactInfo = [
  { icon: Mail,   label: 'Email Us',   value: 'bhavanarushi80@gmail.com'   },
  { icon: MapPin, label: 'Location',   value: 'Bengaluru, India'           },
]

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', biz: '', svc: '', msg: '' })
  const [sent, setSent]   = useState(false)
  const [busy, setBusy]   = useState(false)

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setBusy(true)
    setTimeout(() => { setBusy(false); setSent(true) }, 1600)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left: info ── */}
          <div className="reveal">
            <div className="section-pill mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
              Get in Touch
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">Great Together.</span>
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Tell us about your project. We will respond within 24 hours with a clear,
              tailored plan and a free consultation.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {contactInfo.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{c.label}</div>
                      <div className="text-sm font-bold text-slate-800 mt-0.5">{c.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Twitter,  label: 'Twitter',  href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500
                             hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="reveal bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-card">
            {sent ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mb-5 shadow-brand">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-6">
                  Thanks for reaching out. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', biz: '', svc: '', msg: '' }) }}
                  className="text-brand-600 font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-slate-900 mb-6">Book a Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text" required className="form-field"
                        value={form.name} onChange={set('name')}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email" required className="form-field"
                        value={form.email} onChange={set('email')}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Business type */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">
                      Business Type *
                    </label>
                    <select required className="form-field" value={form.biz} onChange={set('biz')}>
                      <option value="">Select your business type</option>
                      <option>E-commerce / Retail</option>
                      <option>Healthcare / MedTech</option>
                      <option>Finance / FinTech</option>
                      <option>SaaS / Technology</option>
                      <option>Education / EdTech</option>
                      <option>Logistics / Supply Chain</option>
                      <option>Real Estate</option>
                      <option>Hospitality and Travel</option>
                      <option>Professional Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Service interest */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">
                      Service Interest *
                    </label>
                    <select required className="form-field" value={form.svc} onChange={set('svc')}>
                      <option value="">What can we help you with?</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Chatbot Development</option>
                      <option>AI Integration</option>
                      <option>Payment Gateway Integration</option>
                      <option>Post-Delivery Maintenance and Support</option>
                      <option>Multiple Services / Full Project</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      className="form-field resize-none" rows={4}
                      value={form.msg} onChange={set('msg')}
                      placeholder="Describe your project, goals, timeline, or any questions..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit" disabled={busy}
                    className="btn-primary w-full py-4 text-base rounded-xl shadow-brand disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {busy ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send My Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-slate-400 text-xs">
                    Free consultation · No commitment · Response within 24 hrs
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
