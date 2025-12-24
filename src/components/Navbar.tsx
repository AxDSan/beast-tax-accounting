import * as React from "react"
import { Link, navigate } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "../i18n"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { language, setLanguage, t } = useI18n()

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.process, href: "#process" },
    { name: t.nav.faq, href: "#faq" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-dark shadow-lg border-b border-red-900/20" : "bg-transparent"}`}>
      <div className="w-full px-6 lg:px-20">
        <div className="flex items-center h-20">
          {/* Logo - Far Left */}
          <div className="flex justify-start flex-shrink-0">
            <Link to="/" className="flex-shrink-0 group">
              <span className="text-2xl font-bold font-heading text-white group-hover:text-red-400 transition-colors">
                BEAST<span className="text-red-500">TAX</span>
              </span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.name} className="flex-shrink-0">
                  <a
                    href={link.href}
                    onClick={link.href === "/" ? handleHomeClick : undefined}
                    target={(link as any).external ? "_blank" : undefined}
                    rel={(link as any).external ? "noopener noreferrer" : undefined}
                    className="transition-all font-sans text-[0.75rem] font-bold uppercase tracking-wider hover:text-red-400 whitespace-nowrap text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Contact Button + Social Media Icons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Contact Button */}
            <a
              href="#contact"
              className="px-6 py-2 font-sans font-semibold text-sm uppercase tracking-wide transition-colors border bg-red-600 text-white hover:bg-red-500 border-red-700 rounded-sm"
            >
              {t.nav.contact}
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 border transition-colors bg-transparent border-red-900/30 text-white hover:border-red-500"
              aria-label="Toggle language"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-sm font-sans font-medium uppercase">{language}</span>
            </button>

            {/* Social Media Links - Far Right */}
            <div className="flex items-center gap-2">
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto transition-colors text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-dark border-t border-red-900/20 overflow-hidden"
            >
              <ul className="py-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={(link as any).external ? "_blank" : undefined}
                      rel={(link as any).external ? "noopener noreferrer" : undefined}
                      className="block py-3 px-6 hover:bg-gray-900 transition-all font-sans text-sm font-bold uppercase tracking-wide text-white hover:text-red-400"
                      onClick={(e) => {
                        setIsOpen(false)
                        if (link.href === "/") handleHomeClick(e)
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-red-900/20 px-6 py-4 space-y-3">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 w-full text-left text-white hover:text-red-400 transition-colors font-sans text-sm uppercase"
                >
                  <span>{language === "es" ? "English" : "Español"}</span>
                </button>
                <a
                  href="#contact"
                  className="block bg-red-600 text-white hover:bg-red-500 px-6 py-3 text-center font-sans font-semibold text-sm uppercase tracking-wide transition-colors border border-red-700"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.contact}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
