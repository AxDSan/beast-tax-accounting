import * as React from "react"
import { motion } from "framer-motion"
import { useI18n } from "../i18n"

const Testimonials: React.FC = () => {
  const { t } = useI18n()

  const testimonials = [
    {
      name: "Client 1",
      role: "Business Owner",
      content: "Summit Tax Accounting transformed our tax strategy. We saved significantly more than we invested in their services.",
      initials: "C1"
    },
    {
      name: "Client 2",
      role: "Real Estate Investor",
      content: "The level of detail and expertise is unmatched. They found deductions my previous CPA completely missed.",
      initials: "C2"
    },
    {
      name: "Client 3",
      role: "Physician",
      content: "Professional, transparent, and results-driven. I highly recommend them to any high-income earner.",
      initials: "C3"
    }
  ]

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-900/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gold-900/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gold-400 mb-6">{t.testimonials.subtitle}</p>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center font-bold text-white text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gold-400/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold-400 inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

