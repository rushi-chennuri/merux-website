import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How do you estimate project costs and timelines?',
    a: 'We start with a free discovery call to understand your goals, scope, and technical requirements. From there we provide a detailed written proposal with a fixed-price quote or a time-and-materials breakdown — whichever suits your project better. Timelines are agreed before work begins and tracked against weekly milestones.',
  },
  {
    q: 'Do you work with early-stage startups or only established businesses?',
    a: 'Both. We regularly partner with founders who are at idea stage and need an MVP in 6–8 weeks, as well as with established companies looking to scale existing products or integrate AI capabilities. Our process is the same either way — thorough, collaborative, and transparent.',
  },
  {
    q: 'What does the development process look like end-to-end?',
    a: 'We follow a four-phase cycle: Discover (requirements & architecture), Design (UI/UX prototypes for approval), Build (sprint-based development with weekly demos), and Launch (deployment, QA, and handover). You have full visibility at every stage via a shared project board and a dedicated Slack channel.',
  },
  {
    q: 'Will I own the source code and IP when the project is complete?',
    a: 'Yes — 100%. You own all source code, design files, and intellectual property from day one. We sign a mutual NDA and IP assignment agreement before any work begins. We retain no licence to your codebase after project delivery.',
  },
  {
    q: 'Do you offer post-launch support and maintenance?',
    a: 'Absolutely. Every project can enter our Post-Delivery Support programme — a monthly retainer that covers 24/7 monitoring, priority bug fixes, security patches, dependency updates, and a block of feature development hours. We also offer ad-hoc support if you prefer not to commit to a retainer.',
  },
  {
    q: 'Which technologies do you work with?',
    a: 'Our team is stack-agnostic, though we specialise in React / Next.js, React Native, Node.js, Python, and AWS / Vercel for infrastructure. On the AI side we work extensively with OpenAI, LangChain, HuggingFace, and vector databases like Pinecone. We\'re happy to work within your existing stack if you have one.',
  },
  {
    q: 'Can you integrate with our existing systems and third-party APIs?',
    a: 'Yes — in fact, most of our projects involve deep integrations. We regularly connect to CRM platforms (Salesforce, HubSpot), payment providers (Stripe, Razorpay), communication tools (Twilio, SendGrid), ERP systems, and custom internal APIs. If it has an API, we can integrate it.',
  },
  {
    q: 'How do we get started?',
    a: 'Just fill in the contact form below or email us at bhavanarushi80@gmail.com. We\'ll schedule a free 30-minute discovery call within 24 hours to discuss your project and answer any questions. No hard sell — just a genuine conversation about whether we\'re the right fit for each other.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300
                  ${open ? 'border-brand-300 bg-brand-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-brand-200'}`}
    >
      <button
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-4">
          <span
            className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black
                        transition-colors duration-200
                        ${open ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'}`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-bold text-sm sm:text-base transition-colors duration-200
                            ${open ? 'text-brand-700' : 'text-slate-900'}`}>
            {item.q}
          </span>
        </span>

        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-brand-500
                      ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Answer */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <p className="px-6 pb-6 pl-[68px] text-slate-600 text-sm leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-5"
               style={{ background: 'white', color: '#7C3AED', boxShadow: '0 0 0 1.5px #E91E8C' }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#E91E8C' }} />
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
            Questions? <span className="gradient-text">We've Got Answers.</span>
          </h2>
          <div className="flex justify-center mb-5">
            <div className="h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #E91E8C)' }} />
          </div>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Everything you need to know before starting a project with us.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 reveal">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center reveal">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">
            <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-slate-900 font-bold text-sm">Still have questions?</p>
              <p className="text-slate-500 text-xs">We reply within 24 hours.</p>
            </div>
            <a
              href="#contact"
              className="ml-4 btn-primary px-4 py-2 text-sm rounded-xl"
            >
              Ask Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
