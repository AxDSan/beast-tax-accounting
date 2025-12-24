import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import GoHighLevelForm from "../components/GoHighLevelForm"
import SEO from "../components/SEO"
import { useI18n } from "../i18n"
import {
  ScrollFadeIn,
  ScrollStaggerContainer,
  ScrollScaleIn,
  ScrollRotateIn,
  ScrollSlideIn,
} from "../components/Motion"

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useI18n()

  // Certifications data
  const certifications = [
    { name: "Enrolled Agent", image: "/certifications/ea-logo.png" },
    { name: "Departamento de Hacienda", image: "/certifications/hacienda-logo.png" },
    { name: "NAEA", image: "/certifications/naea-logo.png" },
    { name: "Main Street Tax Advisor", image: "/certifications/mainstreet-logo.png" },
  ]

  // Team members
  const teamMembers = [
    {
      name: "Team Member 1",
      title: "CEO & Tax Strategist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Team Member 2",
      title: "Tax Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
  ]

  // Service icons
  const AccountingIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )

  const PayrollIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const IndividualIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )

  const CorporateIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )

  const SelfEmployedIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  const RentIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )

  const TaxAdvisingIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )

  const OtherIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )

  // Main services matching taxes2gofl structure
  const mainServices = [
    { 
      title: t.services.mainServices.accountingBookkeeping, 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      icon: <AccountingIcon />,
      url: "#contact",
    },
    { 
      title: t.services.mainServices.payroll, 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: <PayrollIcon />,
      url: "#contact",
    },
    { 
      title: t.services.mainServices.individualFederal, 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      icon: <IndividualIcon />,
      url: "#contact",
    },
    { 
      title: t.services.mainServices.sCorp, 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: <CorporateIcon />,
      url: "#contact",
    },
    { 
      title: t.services.mainServices.llc, 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      icon: <CorporateIcon />,
      url: "#contact",
    },
    { 
      title: t.services.mainServices.selfEmployed, 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      icon: <SelfEmployedIcon />,
      url: "#contact",
    },
    { 
      title: t.services.mainServices.rent, 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      icon: <RentIcon />,
      url: "#contact",
    },
    { 
      title: t.services.mainServices.taxAdvising, 
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      icon: <TaxAdvisingIcon />,
      url: "#contact",
    },
    {
      title: t.services.mainServices.otherServices,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      icon: <OtherIcon />,
      url: "#contact",
    },
  ]

  // Specialized services matching taxes2gofl structure
  const specializedServices = [
    {
      title: t.services.planificacion.title,
      description: t.services.planificacion.description,
      icon: <IndividualIcon />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    },
    {
      title: t.services.estructura.title,
      description: t.services.estructura.description,
      icon: <CorporateIcon />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      title: t.services.estrategias.title,
      description: t.services.estrategias.description,
      icon: <TaxAdvisingIcon />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
  ]

  // Section Wrapper Component
  const SectionWrapper: React.FC<{
    id?: string
    className?: string
    bgImage?: string
    bgOverlay?: boolean
    children: React.ReactNode
  }> = ({ id, className = "", bgImage, bgOverlay = true, children }) => {
    const baseClasses = className.split(" ").filter(c => !c.startsWith("bg-"))
    const bgClass = className.split(" ").find(c => c.startsWith("bg-")) || ""
    
    return (
      <section
        id={id}
        className={`relative ${baseClasses.join(" ")} ${!bgImage ? bgClass : ""} overflow-hidden`}
      >
        {bgImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            {bgOverlay && (
              <div className="absolute inset-0 bg-dark/80" />
            )}
          </>
        )}
        <div className={bgImage ? "relative z-10" : ""}>
          {children}
        </div>
      </section>
    )
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Hero videoSrc="/taxes2go.mp4" />

      {/* About Section */}
      <SectionWrapper id="about" className="py-24 lg:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900/10 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative group">
              <ScrollScaleIn>
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-red-900/50">
                   <div className="aspect-[3/4] relative">
                     <img
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Tax Strategy"
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                   </div>
                </div>
                <div className="absolute top-4 -left-4 w-full h-full border border-red-500/30 rounded-sm -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              </ScrollScaleIn>
            </div>

            <div className="lg:col-span-7 pl-0 lg:pl-10">
              <ScrollStaggerContainer staggerDelay={0.1}>
                <ScrollSlideIn side="right">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="h-px w-16 bg-red-500"></span>
                    <span className="text-red-500 font-sans font-medium tracking-[0.2em] uppercase text-sm">
                      {t.about.experienceBadge}
                    </span>
                  </div>
                </ScrollSlideIn>
                <ScrollSlideIn side="right">
                  <h2 className="text-4xl md:text-5xl font-heading font-normal text-white mb-4 leading-none">
                    {t.about.title}
                  </h2>
                  <p className="text-xl text-red-400 font-heading italic mb-8">
                    {t.about.subtitle}
                  </p>
                </ScrollSlideIn>
                <ScrollSlideIn side="right">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 font-light leading-relaxed border-l-2 border-red-900 pl-6">
                      {t.about.description}
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed font-sans">
                      {t.about.whyChooseUsText}
                    </p>
                  </div>
                </ScrollSlideIn>
              </ScrollStaggerContainer>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications Marquee */}
      <SectionWrapper className="py-12 bg-gray-900 border-y border-red-900/20 overflow-hidden">
        <ScrollFadeIn direction="up">
          <div className="w-full">
            <div className="flex items-center gap-32 animate-marquee px-4">
              {[...certifications, ...certifications, ...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.name}-${index}`}
                  className="w-64 h-32 flex-shrink-0 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <span className="text-white font-bold text-xl border border-red-500/20 p-4 rounded-sm">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>

      {/* Video Section */}
      <SectionWrapper className="py-24 bg-red-600"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-3xl md:text-4xl underline font-heading font-normal text-center text-white mb-12">
              {t.video.title}
            </h2>
          </ScrollFadeIn>
          <ScrollScaleIn scale={0.9}>
            <div className="aspect-video overflow-hidden border-2 border-red-900/20 shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/p-kasvTzniE"
                title="Beast Tax Accounting Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </ScrollScaleIn>
        </div>
      </SectionWrapper>

      {/* Team Members Section */}
      <SectionWrapper bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" bgOverlay={true} id="team" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-3xl md:text-4xl underline font-heading font-normal text-center text-white mb-12">
              {t.nav.team}
            </h2>
          </ScrollFadeIn>
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 max-w-4xl mx-auto" staggerDelay={0.2} variant="scale">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <ScrollRotateIn angle={-5}>
                  <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden bg-gray-900 border-2 border-red-500/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </ScrollRotateIn>
                <ScrollFadeIn>
                  <h3 className="text-2xl font-heading font-normal text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-400 font-sans font-semibold uppercase tracking-widest text-sm">
                    {member.title}
                  </p>
                </ScrollFadeIn>
              </div>
            ))}
          </ScrollStaggerContainer>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services" className="py-24 bg-dark border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-3xl md:text-5xl underline font-heading font-normal text-center text-white mb-4">
              {t.services.title}
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto font-sans">
              {t.services.subtitle}
            </p>
          </ScrollFadeIn>
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1} variant="scale">
            {mainServices.map((service) => (
              <a
                key={service.title}
                href={service.url}
                className="relative min-h-72 overflow-hidden rounded-sm group cursor-pointer block"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 transition-transform duration-500 group-hover:scale-100"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-dark/80 group-hover:bg-dark/90 transition-colors duration-300" />
                <div className="relative min-h-full flex flex-col justify-between p-6">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-5 flex-shrink-0 rounded-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-heading font-normal text-white leading-tight transition-transform duration-300 group-hover:translate-y-[-2px]">
                    {service.title}
                  </h3>
                </div>
              </a>
            ))}
          </ScrollStaggerContainer>
        </div>
      </SectionWrapper>

      {/* Specialized Services Section */}
      <SectionWrapper id="specialized-services" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-3xl md:text-4xl underline font-heading font-normal text-center text-white mb-4">
               {t.services.specializedTitle}
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto font-sans">
              {t.services.specializedSubtitle}
            </p>
          </ScrollFadeIn>
          
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" staggerDelay={0.15} variant="rotate">
            {specializedServices.map((service) => (
              <div key={service.title} className="relative min-h-80 overflow-hidden rounded-sm group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 transition-transform duration-500 group-hover:scale-100"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-dark/80 group-hover:bg-dark/90 transition-colors duration-300" />
                <div className="relative min-h-full flex flex-col justify-between p-6">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-5 flex-shrink-0 rounded-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="flex-grow flex flex-col justify-end">
                    <h3 className="text-lg font-heading font-normal text-white mb-3 leading-tight transition-transform duration-300 group-hover:translate-y-[-2px]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollStaggerContainer>
        </div>
      </SectionWrapper>

      {/* WhatsApp CTA Section */}
      <SectionWrapper id="whatsapp" className="py-20 bg-dark border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-white">
              <ScrollFadeIn direction="down">
                <h2 className="text-3xl md:text-4xl font-heading font-normal mb-3 text-red-500">
                  {t.whatsappCta.title}
                </h2>
              </ScrollFadeIn>
              <ScrollFadeIn>
                <p className="text-lg text-gray-400 font-sans max-w-2xl">
                  {t.whatsappCta.subtitle}
                </p>
              </ScrollFadeIn>
            </div>
            <div className="lg:col-span-5">
              <ScrollScaleIn>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 w-full lg:w-auto px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wide transition-colors border bg-red-600 text-white hover:bg-red-500 border-red-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.47,12.5l-.94-.48a.87.87,0,0,0-.9.11l-.42.39a.87.87,0,0,1-.9.13,6.93,6.93,0,0,1-2.05-1.63A6.93,6.93,0,0,1,10.63,9a.87.87,0,0,1,.13-.9l.39-.42a.87.87,0,0,0,.11-.9l-.48-.94a.87.87,0,0,0-1.1-.4,2.61,2.61,0,0,0-1.53,1.85,6,6,0,0,0,1.11,4.06,10.39,10.39,0,0,0,3.46,3.2,6,6,0,0,0,4.06,1.11,2.61,2.61,0,0,0,1.85-1.53A.87.87,0,0,0,17.47,12.5ZM12,2A10,10,0,0,0,3.51,17.68L2.11,22l4.32-1.4A10,10,0,1,0,12,2Z" />
                  </svg>
                  <span>
                    {t.whatsappCta.button}
                  </span>
                </a>
              </ScrollScaleIn>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 text-white">
              <h2 className="text-4xl font-heading font-normal mb-8">
                {t.contact.title}
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-sans font-semibold text-lg">{t.contact.address}</p>
                    <p className="font-sans text-white/80">123 Tax Ave, Suite 100</p>
                    <p className="font-sans text-white/80">Miami, FL 33131</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-sans font-semibold text-lg">{t.contact.phone}</p>
                    <p className="font-sans text-white/80">123-456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-sans font-semibold text-lg">{t.contact.email}</p>
                    <p className="font-sans text-white/80">info@beasttax.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 w-full">
              <div className="bg-dark/20 p-8 rounded-lg backdrop-blur-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-dark/50 border border-red-900/30 rounded-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white placeholder-gray-400 transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-dark/50 border border-red-900/30 rounded-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white placeholder-gray-400 transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-dark/50 border border-gold-900/30 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-400 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full px-4 py-3 bg-dark/50 border border-gold-900/30 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white transition-colors">
                      <option value="" className="bg-dark">Select a service</option>
                      <option value="accounting" className="bg-dark">Accounting & Bookkeeping</option>
                      <option value="payroll" className="bg-dark">Payroll Services</option>
                      <option value="individual" className="bg-dark">Individual Tax Returns</option>
                      <option value="corporate" className="bg-dark">Corporate Tax Returns</option>
                      <option value="planning" className="bg-dark">Tax Planning</option>
                      <option value="other" className="bg-dark">Other Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-dark/50 border border-gold-900/30 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-400 transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-wide"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO 
    title="Home"
    description="Licensed Tax Strategists helping business owners reduce their tax bill."
    pathname="/"
  />
)

