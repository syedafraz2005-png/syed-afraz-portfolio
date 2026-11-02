import { footerContent, academy, personalInfo, socialLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white/70 border-t border-white/10 py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Taglines */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a
            href="#home"
            className="text-2xl font-black tracking-tighter text-white hover:text-[#ff2a2a] transition-colors"
          >
            {personalInfo.brandName}
            <span className="text-[#ff2a2a]">.</span>
          </a>
          {footerContent.taglines && footerContent.taglines.length > 0 && (
            <p className="text-xs uppercase tracking-widest text-white/50">
              {footerContent.taglines.join(' • ')}
            </p>
          )}
        </div>

        {/* Training Credit & Copyright */}
        <div className="flex flex-col items-center gap-2 text-center text-sm">
          <p className="text-white/60">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff2a2a] underline font-semibold transition-colors"
            >
              {academy.name}
            </a>
          </p>
          <p className="text-xs text-white/40">
            {footerContent.copyright}
          </p>
        </div>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-6">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          <a
            href="#home"
            aria-label="Scroll back to top"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] transition-all"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

