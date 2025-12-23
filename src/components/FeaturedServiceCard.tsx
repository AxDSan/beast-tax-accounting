import * as React from "react"
import { motion } from "framer-motion"

interface FeaturedServiceCardProps {
  icon: React.ReactNode
  title: string
  subtitle?: string
  description?: string
  bgImage?: string
  featured?: boolean
  href?: string
  target?: string
  rel?: string
  overlayClassName?: string
}

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  bgImage,
  featured = false,
  href,
  target,
  rel,
  overlayClassName,
}) => {
  React.useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const Wrapper = href ? motion.a : motion.div
  const wrapperProps = href
    ? { href, target: target ?? "_blank", rel: rel ?? "noopener noreferrer" }
    : {}

  if (featured) {
    return (
      <Wrapper
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="block relative h-64 md:h-72 rounded-2xl overflow-hidden group cursor-pointer border border-gray-800/50 hover:border-primary-500/30 transition-colors"
        {...wrapperProps}
      >
        {bgImage && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-dark/95 via-dark/80 to-dark/60" />
        <div className="relative z-10 h-full flex flex-col p-6 justify-center items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/30 mb-4"
          >
            <div className="text-2xl font-bold" style={{ color: "#006827" }}>{icon}</div>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-2">
            {title}
          </h3>
          {subtitle && (
            <p className="petit-formal-script-regular text-primary-400 text-xl md:text-2xl mb-2">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="block relative h-40 rounded-xl overflow-hidden group cursor-pointer border border-gray-800/50 hover:border-primary-500/30 transition-colors"
      {...wrapperProps}
    >
      {bgImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className={overlayClassName ?? "absolute inset-0 z-[1] bg-gradient-to-t from-dark/95 via-dark/85 to-dark/70"} />
      <div className="relative z-10 h-full flex flex-col p-4 justify-center items-center text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/30 mb-3"
        >
          <div className="text-xl font-bold" style={{ color: "#006827" }}>{icon}</div>
        </motion.div>
        <h3 className="text-sm md:text-base font-heading font-bold text-white uppercase tracking-wide text-center leading-tight">
          {title}
        </h3>
      </div>
    </Wrapper>
  )
}

export default FeaturedServiceCard

