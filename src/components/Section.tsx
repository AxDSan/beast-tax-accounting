import * as React from "react"
import { motion, useInView } from "framer-motion"

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  dark?: boolean
  className?: string
  bgImage?: string
  bgOverlay?: boolean
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  dark = true,
  className = "",
  bgImage,
  bgOverlay = true,
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 overflow-hidden ${!bgImage ? (dark ? "bg-dark" : "bg-gray-900") : ""} ${className}`}
    >
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          {bgOverlay && (
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: "rgba(10, 10, 10, 0.85)" }} 
            />
          )}
        </>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section

