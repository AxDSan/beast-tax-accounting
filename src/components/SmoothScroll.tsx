import * as React from "react"

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

const smoothScrollTo = (targetY: number, duration: number = 100) => {
  const startY = window.scrollY
  const difference = targetY - startY
  const startTime = performance.now()

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = easeInOutCubic(progress)
    
    window.scrollTo(0, startY + difference * easeProgress)
    
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

export const useSmoothScroll = () => {
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (anchor) {
        const href = anchor.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const targetId = href.slice(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            const navbarOffset = 80
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset
            smoothScrollTo(targetPosition, 100)
          }
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])
}

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useSmoothScroll()
  return <>{children}</>
}

export default SmoothScroll

