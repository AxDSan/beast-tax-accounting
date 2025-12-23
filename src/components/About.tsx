import * as React from "react"
import { motion } from "framer-motion"
import { useI18n } from "../i18n"

const About: React.FC = () => {
  const { t } = useI18n()

  return (
    <section id="about" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              {t.about.title}
            </h2>
            <h3 className="text-xl md:text-2xl text-gold-400 mb-6 font-light">
              {t.about.subtitle}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t.about.description}
            </p>
            <div className="bg-gray-900/50 border-l-4 border-gold-500 p-6 rounded-r-lg">
              <h4 className="text-gold-400 font-bold mb-2">{t.about.whyChooseUs}</h4>
              <p className="text-gray-400">
                {t.about.whyChooseUsText}
              </p>
            </div>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-gold-600 hover:bg-gold-500 text-white px-8 py-3 rounded-sm font-semibold transition-colors uppercase tracking-wider text-sm"
            >
              {t.hero.cta}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-500/20 transform rotate-3 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Tax Strategy"
              className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

