import * as React from "react"
import { Link } from "gatsby"
import { useI18n } from "../i18n"

const Footer: React.FC = () => {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white border-t border-gold-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Tagline */}
          <div>
            <div className="mb-8">
              <Link to="/" className="group">
                <span className="text-3xl font-bold font-heading text-white group-hover:text-gold-400 transition-colors">
                  BEAST<span className="text-gold-500">TAX</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed font-sans">
              {t.footer.tagline}
            </p>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-sans font-semibold mb-8 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-sans">
              <li>123 Tax Ave, Suite 100</li>
              <li>Miami, FL 33131</li>
              <li>Tel: 123-456-7890</li>
              <li>Email: info@beasttax.com</li>
            </ul>
          </div>

          {/* Services Column 1 */}
          <div>
            <h5 className="text-white font-sans font-semibold mb-8 text-sm uppercase tracking-wider">
              {t.services.title}
            </h5>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-sans">
                {t.services.mainServices.accountingBookkeeping}
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-sans">
                {t.services.mainServices.individualFederal}
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-sans">
                {t.services.mainServices.llc}
              </a></li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div>
            <h5 className="text-white font-sans font-semibold mb-8 text-sm uppercase tracking-wider">
              {t.services.specializedTitle}
            </h5>
            <ul className="space-y-4">
              <li><a href="#specialized-services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-sans">
                {t.services.planificacion.title}
              </a></li>
              <li><a href="#specialized-services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-sans">
                {t.services.estructura.title}
              </a></li>
              <li><a href="#specialized-services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-sans">
                {t.services.estrategias.title}
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-900/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm font-sans">
              © {year} Beast Tax Accounting. {t.footer.copyright}
            </p>
            <div className="flex gap-8 text-sm font-sans">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gold-400 transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-500 hover:text-gold-400 transition-colors">
                {t.footer.termsAndConditions}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
