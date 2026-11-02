import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

function TagCard({
  number,
  title,
  text,
  className = '',
  aosDelay = 0,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) {
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef(null)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()

    // Card top position relative to the container
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const containerHeight = containerRect.height

    // Position of the line tip along container height
    const lineTip = latest * containerHeight

    // Active when line tip passes card top + 50px
    if (lineTip >= cardTopRelativeToContainer + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_20px_45px_rgba(255,42,42,0.35)] scale-[1.02]'
          : 'bg-white shadow-xl border border-gray-200'
      } ${className}`}
    >
      {/* Punched hole circle at top */}
      <div className="relative pt-2 flex justify-center">
        <div
          className={`w-5 h-5 rounded-full border-2 transition-colors duration-700 shadow-inner ${
            isActive ? 'bg-white/90 border-red-300' : 'bg-gray-100 border-gray-300'
          }`}
        />
      </div>

      {/* Inner panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-900'
        }`}
      >
        <div>
          <span
            className={`block font-serif italic text-4xl mb-3 transition-colors duration-700 ${
              isActive ? 'text-white/70' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black mb-2 tracking-tight transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const cardLayouts = [
    {
      className:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight relative inline-block">
              {skillsContent.heading}
              {/* Hand-drawn arrow SVG */}
              <svg
                className="absolute -bottom-2 -right-8 w-7 h-7 text-[#ff2a2a] stroke-current fill-none pointer-events-none"
                viewBox="0 0 20 20"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
              </svg>
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop SVG Path with Mask */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
                fill="none"
                stroke="white"
                strokeWidth={20}
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. Faint guide path */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />

          {/* 3. Real dashed path */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile SVG Path with Mask */}
        <svg
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth={20}
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. Faint mobile guide path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* 3. Real dashed mobile path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Cards container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const config = cardLayouts[index] || {}
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosType={config.aosType}
                aosDelay={config.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Handwritten end note */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 pointer-events-none select-none">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  )
}

