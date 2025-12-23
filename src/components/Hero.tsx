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
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-gold-900/20" />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-dark/80 to-dark" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        {logoSrc ? (
          <motion.img
            src={logoSrc}
            alt={title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="h-32 md:h-48 w-auto mx-auto mb-6"
          />
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: '"Outfit", sans-serif',
            }}
          >
            <span className="text-white block mb-2">Welcome to</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
              {title}
            </span>
          </motion.h1>
        )}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xl md:text-3xl text-gray-200 mb-6 font-light tracking-wide"
        >
          {subtitle}
        </motion.p>

        {t.hero.slogan && (
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4, delay: 0.3 }}
             className="relative inline-block mb-10"
          >
             <span className="text-gold-400 text-4xl absolute -top-4 -left-6">"</span>
             <p className="text-lg md:text-xl text-gray-300 italic max-w-2xl mx-auto px-6">
               {t.hero.slogan}
             </p>
             <span className="text-gold-400 text-4xl absolute -bottom-8 -right-6">"</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white px-10 py-4 rounded-sm font-semibold text-lg transition-all shadow-lg shadow-gold-500/20 uppercase tracking-wider"
          >
            {t.hero.cta}
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gold-500/50 hover:border-gold-400 text-gold-100 hover:text-white px-10 py-4 rounded-sm font-semibold text-lg transition-all bg-dark/50 hover:bg-gold-900/20 uppercase tracking-wider"
          >
            {t.hero.services}
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-8 h-8 text-gold-400/50"
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
