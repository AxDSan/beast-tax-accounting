import * as React from "react"
import { motion } from "framer-motion"
import { useI18n } from "../i18n"

const FAQ: React.FC = () => {
  const { t } = useI18n()
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            {t.faq.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-800 rounded-lg overflow-hidden bg-dark/50"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-200">{faq.q}</span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                  <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

