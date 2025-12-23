import * as React from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-500/50 transition-colors"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600/30 transition-colors"
      >
        <div style={{ color: "#006827" }}>{icon}</div>
      </motion.div>
      <h3 className="text-xl font-heading font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default ServiceCard

