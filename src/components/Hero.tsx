import * as React from "react"
import { motion } from "framer-motion"
import { useI18n } from "../i18n"

interface HeroProps {
  videoSrc?: string
  logoSrc?: string
  slogan?: string
}

const Hero: React.FC<HeroProps> = ({
  videoSrc,
  logoSrc,
  slogan,
}) => {
  const { t } = useI18n()
  const title = t.hero.title
  const subtitle = t.hero.subtitle

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="https://videos.pexels.com/video-files/3191422/3191422-uhd_2732_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12"
        >
          {['Licensed Tax Professionals', '23+ Years Experience', 'IRS Approved'].map((badge, i) => (
            <div key={i} className="px-4 py-1.5 rounded-full border border-gray-800 bg-black/40 backdrop-blur-sm text-sm text-gray-300 font-medium tracking-wide uppercase">
              {badge}
            </div>
          ))}
        </motion.div>

        {logoSrc ? (
          <motion.img
            src={logoSrc}
            alt={title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-32 md:h-48 w-auto mx-auto mb-8"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white font-heading">
              <span className="block text-lg md:text-2xl font-sans font-medium text-red-500 uppercase tracking-[0.2em] mb-4">
                Welcome to
              </span>
              {title}
            </h1>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-sm font-bold text-lg transition-all shadow-lg shadow-red-900/20 uppercase tracking-widest min-w-[200px]"
          >
            {t.hero.cta}
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-10 py-4 rounded-sm font-bold text-lg transition-all bg-transparent hover:bg-gray-800/50 uppercase tracking-widest min-w-[200px]"
          >
            {t.hero.services}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-gray-800/50 pt-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">$2.5M+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Tax Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">500+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Business Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">98%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 1 },
          y: { delay: 1.2, duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
