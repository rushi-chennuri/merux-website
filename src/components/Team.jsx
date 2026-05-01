import { Linkedin, Twitter, Github } from 'lucide-react'

const team = [
  {
    name:   'Alex Morgan',
    role:   'CEO & Co-Founder',
    bio:    'Former engineering lead at two acquired startups. Alex drives strategy and client relationships, ensuring every project aligns with your business goals.',
    skills: ['Product Strategy', 'Web Dev', 'Leadership'],
    initials: 'AM',
    grad:   'from-brand-500 to-violet-500',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name:   'Priya Sharma',
    role:   'Head of AI & ML',
    bio:    'PhD in Machine Learning from IIT. Priya architects our AI integration solutions — from fine-tuned LLMs to real-time prediction pipelines.',
    skills: ['LLMs', 'Python', 'LangChain', 'Data Science'],
    initials: 'PS',
    grad:   'from-emerald-500 to-teal-500',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name:   'Jordan Lee',
    role:   'Lead Mobile Engineer',
    bio:    'Published 14 apps across iOS and Android. Jordan leads our mobile team, specialising in performance-critical React Native and Swift applications.',
    skills: ['React Native', 'Swift', 'Flutter', 'Firebase'],
    initials: 'JL',
    grad:   'from-violet-500 to-purple-500',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name:   'Sara Chen',
    role:   'UI/UX Design Lead',
    bio:    'Sara turns complex requirements into beautiful, intuitive interfaces. Her designs consistently achieve sub-3-second task completion times in user testing.',
    skills: ['Figma', 'Design Systems', 'User Research'],
    initials: 'SC',
    grad:   'from-rose-500 to-pink-500',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name:   'Marcus Johnson',
    role:   'Full-Stack Engineer',
    bio:    "Marcus is our go-to for high-throughput backend systems. He's shipped APIs handling over 50M requests per month across three continents.",
    skills: ['Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    initials: 'MJ',
    grad:   'from-amber-500 to-orange-500',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name:   'Nina Patel',
    role:   'DevOps & Cloud Architect',
    bio:    'Nina keeps everything running — zero-downtime deployments, autoscaling infrastructure, and security hardening across AWS and GCP environments.',
    skills: ['AWS', 'Terraform', 'Kubernetes', 'CI/CD'],
    initials: 'NP',
    grad:   'from-cyan-500 to-sky-500',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            The People
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Meet the <span className="gradient-text">Team Behind It</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Senior engineers, designers, and AI specialists who've built and shipped products people actually use.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="reveal group bg-white border border-slate-200 rounded-2xl p-7
                         hover:-translate-y-2 hover:shadow-card-hover hover:border-brand-200 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar + name row */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.grad}
                                  flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-bold text-brand-600">{member.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {member.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-2 pt-4 border-t border-slate-100">
                {[
                  { Icon: Linkedin, href: member.social.linkedin, label: 'LinkedIn' },
                  { Icon: Twitter,  href: member.social.twitter,  label: 'Twitter'  },
                  { Icon: Github,   href: member.social.github,   label: 'GitHub'   },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200
                               flex items-center justify-center text-slate-400
                               hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hiring banner */}
        <div className="mt-14 reveal rounded-2xl bg-gradient-to-r from-brand-600 to-violet-600 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-brand">
          <div>
            <h3 className="text-white font-black text-xl mb-1">We're growing — join us</h3>
            <p className="text-white/70 text-sm">We're always looking for talented engineers, designers, and AI specialists.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-brand-700 font-bold text-sm px-6 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            View Open Roles
          </a>
        </div>
      </div>
    </section>
  )
}
