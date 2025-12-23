import * as React from "react"
import { motion } from "framer-motion"

interface TeamCardProps {
  name: string
  title: string
  image?: string
  objectPosition?: string
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, image, objectPosition = "center" }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-700 group-hover:border-primary-500 transition-colors"
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </motion.div>
      <h4 className="text-lg font-semibold text-white">{name}</h4>
      <p className="text-primary-400">{title}</p>
    </motion.div>
  )
}

export default TeamCard

