import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax animation for the background text
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Ignore submit if already sending
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value.trim() || ''
    const lastName = form.querySelector('#lastName')?.value.trim() || ''
    const email = form.querySelector('#email')?.value.trim() || ''
    const message = form.querySelector('#message')?.value.trim() || ''

    // Validation: firstName, email, or message empty
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      // Fallback: Open mailto client with pre-filled content
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    // Configured with valid EmailJS credentials
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax giant "Contact" word in the background (not an h1) */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full pointer-events-none z-0 flex justify-center overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Front red card */}
      <div
        data-aos="fade-up"
        className="relative z-10 w-full md:w-[85%] lg:w-[75%] ml-auto bg-[#ff2a2a] p-8 md:p-16 rounded-tl-[3rem] shadow-2xl text-white"
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4 border-b border-white/20 pb-6">
          <span className="text-xs uppercase tracking-[0.2em] font-black text-white/90">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || `mailto:${personalInfo.emails.primary}`}
            target={socialLinks.instagram ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            <span>DM on Instagram</span>
            <span>↗</span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          {/* Two-column layout on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column: Underline-only input fields */}
            <div className="flex flex-col gap-8 justify-between">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Right column: Message textarea */}
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                rows={6}
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors resize-none min-h-[120px]"
              />
            </div>
          </div>

          {/* Bottom section: Permission, notes, urgent email link, and Submit button */}
          <div className="space-y-6 pt-4 border-t border-white/20">
            {/* Permission checkbox */}
            <div className="flex items-start gap-3 text-white/90 text-sm">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                defaultChecked
                required
                className="mt-1 w-4 h-4 rounded accent-black cursor-pointer"
              />
              <label htmlFor="consent" className="cursor-pointer select-none">
                I agree that my submitted information can be stored and processed to respond to this inquiry.
              </label>
            </div>

            {/* Note & Urgent mailto link */}
            <div className="text-white/80 text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p className="shrink-0 text-xs text-white/70">
                Urgent?{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline text-white font-bold hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  status === 'sending'
                    ? 'bg-white/20 text-white border border-white/40 cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-emerald-600 text-white border border-emerald-500 shadow-lg'
                    : status === 'error'
                    ? 'bg-red-950 text-red-200 border border-red-800 shadow-lg'
                    : 'group border-2 border-white text-white hover:bg-white hover:text-[#ff2a2a] shadow-lg cursor-pointer'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}

                {status === 'success' && (
                  <span>Sent Successfully ✓</span>
                )}

                {status === 'error' && (
                  <span>Failed — Try Again</span>
                )}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

