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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-primary-900/30" />
      )}

      <div className="absolute inset-0 bg-dark/60" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {logoSrc ? (
          <motion.img
            src={logoSrc}
            alt={title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="h-44 md:h-60 lg:h-80 w-auto mx-auto mb-2"
          />
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 800,
            }}
          >
            <span className="text-primary-400">{title.split(" ")[0]}</span>{" "}
            <span className="text-white">{title.split(" ").slice(1).join(" ")}</span>
          </motion.h1>
        )}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {slogan && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-300 italic mb-8"
          >
            "{slogan}"
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            
            {t.hero.cta}
            
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/30 hover:border-primary-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            
            {t.hero.services}
            
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.5, duration: 0.3 },
          y: { delay: 0.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero

