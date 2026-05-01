/* Simulated company logo strip — uses stylised text logos like many real SaaS sites */
const logos = [
  { name: 'BrightCart',   font: 'font-black',   color: 'text-slate-700' },
  { name: 'MediTrack',    font: 'font-extrabold',color: 'text-slate-600' },
  { name: 'RetailEdge',   font: 'font-black',   color: 'text-slate-700' },
  { name: 'FinFlow',      font: 'font-extrabold',color: 'text-slate-600' },
  { name: 'SwiftLogix',   font: 'font-black',   color: 'text-slate-700' },
  { name: 'NovaPharma',   font: 'font-extrabold',color: 'text-slate-600' },
  { name: 'CloudDesk',    font: 'font-black',   color: 'text-slate-700' },
  { name: 'TrueLearn',    font: 'font-extrabold',color: 'text-slate-600' },
]

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by 50+ businesses worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {logos.map((l) => (
            <span
              key={l.name}
              className={`text-lg tracking-tight opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-default ${l.font} ${l.color}`}
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
