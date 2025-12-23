import * as React from "react"
import { useI18n } from "../i18n"

export interface SocialLink {
  platform: "facebook" | "instagram" | "whatsapp" | "twitter" | "linkedin" | "youtube" | "tiktok"
  href: string
}

interface FooterProps {
  socialLinks?: SocialLink[]
}

const socialIcons: Record<SocialLink["platform"], React.ReactNode> = {
  facebook: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
    </svg>
  ),
  instagram: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
    </svg>
  ),
  whatsapp: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.47,12.5l-.94-.48a.87.87,0,0,0-.9.11l-.42.39a.87.87,0,0,1-.9.13,6.93,6.93,0,0,1-2.05-1.63A6.93,6.93,0,0,1,10.63,9a.87.87,0,0,1,.13-.9l.39-.42a.87.87,0,0,0,.11-.9l-.48-.94a.87.87,0,0,0-1.1-.4,2.61,2.61,0,0,0-1.53,1.85,6,6,0,0,0,1.11,4.06,10.39,10.39,0,0,0,3.46,3.2,6,6,0,0,0,4.06,1.11,2.61,2.61,0,0,0,1.85-1.53A.87.87,0,0,0,17.47,12.5ZM12,2A10,10,0,0,0,3.51,17.68L2.11,22l4.32-1.4A10,10,0,1,0,12,2Z" />
    </svg>
  ),
  twitter: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  youtube: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  tiktok: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
      <title>tiktok</title>
      <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
    </svg>
  ),
}

const defaultSocialLinks: SocialLink[] = [

]

const Footer: React.FC<FooterProps> = ({ socialLinks = defaultSocialLinks }) => {
  const { t } = useI18n()

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#service-")) {
      const targetId = href.substring(1)
      const target = document.getElementById(targetId)

      if (target) {
        // Scroll to element smoothly
        target.scrollIntoView({ behavior: "smooth", block: "start" })

        // Add highlight class after scroll completes
        setTimeout(() => {
          target.classList.add("highlight-service")

          // Remove after animation completes
          setTimeout(() => {
            target.classList.remove("highlight-service")
          }, 3000)
        }, 500)
      }
    }
  }

  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/logo-white.png"
                alt="Beast Tax Accounting"
                className="h-28 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 text-xs leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-5 h-5">{socialIcons[link.platform]}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">{t.footer.contact}</h4>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>123 Main St</li>
              <li>City, ST 12345</li>
              <li>Tel: 123-456-7890</li>
              <li>WhatsApp: 123-456-7890</li>
              <li>info@clientdomain.com</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">{t.services.categories.planillasIndividuo}</h5>
            <ul className="space-y-1">
              <li><a href="#service-individuos-planillas" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.individuosPlanillas.title}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">{t.services.categories.planillaFederal}</h5>
            <ul className="space-y-1">
              <li><a href="#service-1040" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.planillaFederal.title}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">{t.services.categories.taxComplianceNegocios}</h5>
            <ul className="space-y-1">
              <li><a href="#service-entidades-conducto" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.entidadesConducto.title}</a></li>
              <li><a href="#service-corporaciones-planillas" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.corporacionesPlanillas.title}</a></li>
              <li><a href="#service-patentes-municipales" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.patentesMunicipales.title}</a></li>
              <li><a href="#service-dept-del-estado" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.deptDelEstado.title}</a></li>
              <li><a href="#service-crim-mueble" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.crimMueble.title}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">{t.services.categories.serviciosNegocios}</h5>
            <ul className="space-y-1">
              <li><a href="#service-suri-registro" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.suriRegistro.title}</a></li>
              <li><a href="#service-registro-de-comerciante" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.registroComercio.title}</a></li>
              <li><a href="#service-estados-financieros-negocio" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.estadosFinancieroNegocio.title}</a></li>
              <li><a href="#service-estados-financieros-personal" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.estadosFinancieroPersonal.title}</a></li>
              <li><a href="#service-estados-financieros-proyeccion" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.estadosFinancieroProyeccion.title}</a></li>
              <li><a href="#service-incorporacion-llc-corp" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.incorporacionLLC.title}</a></li>
              <li><a href="#service-contabilidad-de-negocios" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.contabilidadNegocios.title}</a></li>
              <li><a href="#service-otros-servicios" onClick={handleServiceClick} className="text-gray-400 hover:text-primary-400 transition-colors text-xs">{t.services.otrosServicios.title}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Beast Tax Accounting. {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="/privacy-policy" className="hover:text-primary-400 transition-colors">
                {t.footer.privacyPolicy}
              </a>
              <a href="/terms-and-conditions" className="hover:text-primary-400 transition-colors">
                {t.footer.termsAndConditions}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

