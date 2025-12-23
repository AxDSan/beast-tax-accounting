import * as React from "react"
import { motion, useInView, Variants } from "framer-motion"

// Base FadeIn component (keeping existing one for compatibility if needed, but enhancing)
interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  return (
    <ScrollFadeIn direction={direction} delay={delay} duration={duration} className={className}>
      {children}
    </ScrollFadeIn>
  )
}

// --- New Scroll Components matching taxes2gofl structure ---

interface ScrollFadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
  distance?: number
}

export const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 40,
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  scale?: number
  className?: string
}

export const ScrollScaleIn: React.FC<ScrollScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  scale = 0.8,
  className = "",
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRotateInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  angle?: number
  className?: string
}

export const ScrollRotateIn: React.FC<ScrollRotateInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  angle = -5,
  className = "",
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: angle, scale: 0.9 }}
      animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollSlideInProps {
  children: React.ReactNode
  side?: "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export const ScrollSlideIn: React.FC<ScrollSlideInProps> = ({
  children,
  side = "left",
  delay = 0,
  duration = 0.8,
  className = "",
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const xOffset = side === "left" ? -100 : 100

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollStaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  variant?: "fade" | "scale" | "rotate"
}

export const ScrollStaggerContainer: React.FC<ScrollStaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  variant = "fade",
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  // Define child variants based on type
  // Note: These need to be handled by wrapping children or ensuring children are motion components
  // But for simple staggering, we often assume children will inherit or we use specific Item components.
  // However, looking at taxes2gofl usage:
  /*
    <ScrollStaggerContainer>
       {items.map(... => <div ... />)} 
    </ScrollStaggerContainer>
  */
  // This implies the direct children should be motion components OR the container orchestrates them.
  // If direct children are HTML elements, `staggerChildren` won't work automatically unless they have variants.
  // In Framer Motion, staggerChildren works if children have variants with same names (hidden/visible).

  // Let's modify the children to be motion.divs if they aren't already, or rely on the user using motion components.
  // But strictly speaking, taxes2gofl usage shows mapping divs. 
  // To make it work seamlessly without changing children structure too much, 
  // we can use a wrapper for each child if we were controlling the map, but we aren't.
  
  // Actually, standard framer motion stagger requires children to be motion components with matching variant names.
  // Let's assume taxes2gofl implemented it correctly or we provide a wrapper.

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <ScrollStaggerItem variant={variant}>{child}</ScrollStaggerItem>
      ))}
    </motion.div>
  )
}

const ScrollStaggerItem: React.FC<{ children: React.ReactNode; variant: string }> = ({ children, variant }) => {
  const getVariants = () => {
    switch (variant) {
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        }
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -5, scale: 0.9 },
          visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.5 } },
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }
    }
  }

  return <motion.div variants={getVariants()}>{children}</motion.div>
}
