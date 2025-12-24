import * as React from "react"
import { useConfig } from "../context/ConfigContext"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  pathname?: string
  article?: boolean
  noindex?: boolean
  keywords?: string[]
  children?: React.ReactNode
}

// Site metadata - modify these values to update SEO across the site
const siteMetadata = {
  title: "Tax Accounting",
  titleTemplate: "%s | Tax Accounting",
  description: "Professional services for your business needs",
  siteUrl: "https://beast-tax-accounting.com",
  image: "/og-image.jpg",
  twitterUsername: "",
  author: "Tax Accounting Service",
  lang: "en",
  locale: "en_US",
  phone: "000-000-0000",
  whatsapp: "000-000-0000",
  email: "info@clientdomain.com",
  address: {
    street: "123 Main St",
    city: "City",
    state: "ST",
    zip: "12345",
    country: "Country"
  },
  geo: {
    latitude: 0,
    longitude: 0
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: ""
  },
  keywords: [
    "tax accounting",
    "tax planning",
    "business tax services",
    "tax consulting"
  ]
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  pathname = "",
  article = false,
  noindex = false,
  keywords = [],
  children
}) => {
  const { config } = useConfig()

  const brandName = `${config.brandNameFirst} ${config.brandNameSecond}`.trim() || siteMetadata.title

  // Dynamic site metadata using config
  const dynamicSiteMetadata = {
    ...siteMetadata,
    title: config.seoTitle || brandName,
    titleTemplate: `%s | ${brandName}`,
    description: config.seoDescription || siteMetadata.description,
    author: config.companyName || brandName,
    phone: config.phone,
    email: config.email,
    whatsapp: config.whatsapp,
    keywords: config.seoKeywords ? config.seoKeywords.split(',').map(k => k.trim()) : siteMetadata.keywords,
  }

  const seo = {
    title: title || dynamicSiteMetadata.title,
    description: description || dynamicSiteMetadata.description,
    image: `${dynamicSiteMetadata.siteUrl}${image || dynamicSiteMetadata.image}`,
    url: `${dynamicSiteMetadata.siteUrl}${pathname}`,
    keywords: [...dynamicSiteMetadata.keywords, ...keywords].join(", ")
  }

  const fullTitle = title
    ? dynamicSiteMetadata.titleTemplate.replace("%s", title)
    : dynamicSiteMetadata.title

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${dynamicSiteMetadata.siteUrl}/#business`,
    name: dynamicSiteMetadata.title,
    description: dynamicSiteMetadata.description,
    url: dynamicSiteMetadata.siteUrl,
    telephone: dynamicSiteMetadata.phone,
    email: dynamicSiteMetadata.email,
    image: seo.image,
    logo: `${siteMetadata.siteUrl}/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMetadata.address.street,
      addressLocality: siteMetadata.address.city,
      addressRegion: siteMetadata.address.state,
      postalCode: siteMetadata.address.zip,
      addressCountry: siteMetadata.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteMetadata.geo.latitude,
      longitude: siteMetadata.geo.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      }
    ],
    sameAs: [
      siteMetadata.social.facebook,
      siteMetadata.social.instagram,
      siteMetadata.social.linkedin
    ].filter(Boolean)
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${dynamicSiteMetadata.siteUrl}/#website`,
    url: dynamicSiteMetadata.siteUrl,
    name: dynamicSiteMetadata.title,
    description: dynamicSiteMetadata.description,
    publisher: {
      "@id": `${dynamicSiteMetadata.siteUrl}/#organization`
    },
    inLanguage: dynamicSiteMetadata.lang
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${dynamicSiteMetadata.siteUrl}/#organization`,
    name: dynamicSiteMetadata.title,
    url: dynamicSiteMetadata.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteMetadata.siteUrl}/logo.png`,
      width: 512,
      height: 512
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMetadata.phone,
      contactType: "customer service",
      areaServed: siteMetadata.address.state,
      availableLanguage: ["Spanish", "English"]
    },
    sameAs: [
      siteMetadata.social.facebook,
      siteMetadata.social.instagram,
      siteMetadata.social.linkedin
    ].filter(Boolean)
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: dynamicSiteMetadata.siteUrl
      },
      ...(pathname && pathname !== "/" ? [{
        "@type": "ListItem",
        position: 2,
        name: title || "Página",
        item: seo.url
      }] : [])
    ]
  }

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={dynamicSiteMetadata.author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={seo.url} />
      <html lang={siteMetadata.lang} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:site_name" content={dynamicSiteMetadata.title} />
      <meta property="og:locale" content={siteMetadata.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {dynamicSiteMetadata.twitterUsername && (
        <>
          <meta name="twitter:site" content={dynamicSiteMetadata.twitterUsername} />
          <meta name="twitter:creator" content={dynamicSiteMetadata.twitterUsername} />
        </>
      )}

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content={dynamicSiteMetadata.address.state} />
      <meta name="geo.placename" content={`${dynamicSiteMetadata.address.city}, ${dynamicSiteMetadata.address.country}`} />
      <meta name="geo.position" content={`${dynamicSiteMetadata.geo.latitude};${dynamicSiteMetadata.geo.longitude}`} />
      <meta name="ICBM" content={`${dynamicSiteMetadata.geo.latitude}, ${dynamicSiteMetadata.geo.longitude}`} />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {children}
    </>
  )
}

export default SEO

