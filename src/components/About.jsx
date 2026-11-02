import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative 4-point star: Top-right */}
      <div className="absolute top-12 right-12 text-black/30 w-8 h-8 md:w-12 md:h-12 animate-pulse pointer-events-none">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* Decorative 4-point star: Bottom-left */}
      <div
        className="absolute bottom-28 left-8 text-black/30 w-8 h-8 md:w-10 md:h-10 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID badge on a lanyard with 3D Flip */}
        <div className="md:w-[350px] shrink-0 w-full flex justify-center pt-8">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative flex flex-col items-center w-[280px]"
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 pointer-events-none" />

            {/* Grey metal clip connector */}
            <div className="relative w-8 h-4 bg-gray-400 rounded-sm mb-1 z-10 shadow-sm border border-gray-500" />

            {/* 3D Flip Card Container */}
            <div
              role="button"
              tabIndex={0}
              aria-label="Flip ID card"
              onClick={() => setFlipped(!flipped)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setFlipped(!flipped)
                }
              }}
              className="relative w-[280px] h-[375px] -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl select-none"
              style={{ perspective: 1200 }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  WebkitTransformStyle: 'preserve-3d',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT face: Dark badge card with cutout and portrait */}
                <div
                  className="absolute inset-0 bg-gray-900 rounded-2xl p-3 shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                  }}
                >
                  {/* Cutout punch slot */}
                  <div className="mx-auto w-10 h-2 bg-black/80 rounded-full mb-3 border border-white/10 shrink-0" />

                  {/* Portrait Photo */}
                  <div className="flex-1 w-full overflow-hidden rounded-xl bg-gray-800">
                    <img
                      src={stackImage}
                      alt="Syed Afraz — Java Full Stack Developer, TAP Academy student"
                      className="w-full h-full object-cover object-top shadow-md block"
                    />
                  </div>
                </div>

                {/* BACK face: Visiting Card */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl border border-white/10 text-white text-left p-5 flex flex-col justify-between overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    WebkitTransform: 'rotateY(180deg)',
                  }}
                >
                  {/* 6px red bar across the top */}
                  <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#ff2a2a]" />

                  <div>
                    {/* Brand Name */}
                    {personalInfo.brandName && (
                      <h3 className="text-xl font-black tracking-tight text-white mt-1">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </h3>
                    )}

                    {/* Job Title */}
                    {personalInfo.title && (
                      <p className="text-[11px] uppercase tracking-widest text-red-400 font-bold mt-0.5">
                        {personalInfo.title}
                      </p>
                    )}

                    {/* Thin Divider */}
                    <div className="border-b border-white/10 my-3" />

                    {/* Contact Rows */}
                    <div className="space-y-2 text-xs text-white/85">
                      {personalInfo.emails?.primary && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a
                            href={`mailto:${personalInfo.emails.primary}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-400 transition-colors truncate"
                          >
                            {personalInfo.emails.primary}
                          </a>
                        </div>
                      )}

                      {personalInfo.phone && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-400 transition-colors"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="truncate">{personalInfo.location}</span>
                        </div>
                      )}

                      {socialLinks.linkedin && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-400 transition-colors"
                          >
                            LinkedIn
                          </a>
                        </div>
                      )}

                      {socialLinks.github && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-400 transition-colors"
                          >
                            GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* QR Code section */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div className="w-[68px] h-[68px] bg-white rounded-lg p-1 shrink-0 flex items-center justify-center">
                      <QRCode
                        value={socialLinks.linkedin || (`mailto:${personalInfo.emails?.primary || 'contact@example.com'}`)}
                        size={60}
                        viewBox="0 0 256 256"
                      />
                    </div>
                    <span className="text-[10px] text-white/60 leading-tight">
                      Scan to connect
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hint below card */}
            <span className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </span>
          </motion.div>
        </div>

        {/* Right: Bio and Heading */}
        <div data-aos="fade-left" className="flex-1 pt-4">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
            {aboutContent.heading}
          </h2>

          <div
            className="text-white text-base md:text-lg leading-relaxed space-y-4 font-normal"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Quick stats / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-black/10">
            <div className="bg-black/10 rounded-2xl p-4 backdrop-blur-sm">
              <span className="block text-2xl md:text-3xl font-black text-black">BCA</span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-bold">Graduate</span>
            </div>
            <div className="bg-black/10 rounded-2xl p-4 backdrop-blur-sm">
              <span className="block text-2xl md:text-3xl font-black text-black">Java</span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-bold">Specialist</span>
            </div>
            <div className="bg-black/10 rounded-2xl p-4 backdrop-blur-sm col-span-2 sm:col-span-1">
              <span className="block text-2xl md:text-3xl font-black text-black">Full Stack</span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-bold">Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Torn-paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
