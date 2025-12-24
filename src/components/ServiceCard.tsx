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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-dark border border-gray-800 rounded-sm p-8 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/10"
    >
      <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
        <div className="text-red-500">{icon}</div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm font-light">
        {description}
      </p>
    </motion.div>
  )
}

export default ServiceCard
