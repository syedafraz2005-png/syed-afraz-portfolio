import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: duration and Internship mini badge */}
        <div className="flex justify-between items-center gap-4 mb-6">
          <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider shrink-0">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white leading-tight mb-2">
          {intern.role}
        </h3>
        <p className="text-sm uppercase font-bold text-red-200 tracking-wide mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained list */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3">
              Skills Gained:
            </p>
            <ul className="space-y-2 text-sm text-red-50/95">
              {intern.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-black font-bold select-none">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies row at bottom */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-5 mt-4">
          <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null
  }

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper divider at the top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left at 20% opacity */}
      <div className="absolute bottom-12 left-8 text-black/20 w-10 h-10 animate-pulse pointer-events-none">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (centred) */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg font-medium">
            Practical industry training, full-stack application development, and engineering milestones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization + index} intern={intern} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
