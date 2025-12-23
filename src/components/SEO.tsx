import * as React from "react"

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
  title: "Beast Tax Accounting",
  titleTemplate: "%s | Beast Tax Accounting",
  description: "Professional services for your business needs",
  siteUrl: "https://beast-tax-accounting.com",
  image: "/og-image.jpg",
  twitterUsername: "",
  author: "Beast Tax Accounting",
  lang: "en",
  locale: "en_US",
  phone: "123-456-7890",
  whatsapp: "123-456-7890",
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
    "keyword1",
      "keyword2",
      "keyword3"
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
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${pathname}`,
    keywords: [...siteMetadata.keywords, ...keywords].join(", ")
  }

  const fullTitle = title 
    ? siteMetadata.titleTemplate.replace("%s", title)
    : siteMetadata.title

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${siteMetadata.siteUrl}/#business`,
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    telephone: siteMetadata.phone,
    email: siteMetadata.email,
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
    "@id": `${siteMetadata.siteUrl}/#website`,
    url: siteMetadata.siteUrl,
    name: siteMetadata.title,
    description: siteMetadata.description,
    publisher: {
      "@id": `${siteMetadata.siteUrl}/#organization`
    },
    inLanguage: siteMetadata.lang
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteMetadata.siteUrl}/#organization`,
    name: siteMetadata.title,
    url: siteMetadata.siteUrl,
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
        item: siteMetadata.siteUrl
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
      <meta name="author" content={siteMetadata.author} />
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
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:locale" content={siteMetadata.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {siteMetadata.twitterUsername && (
        <>
          <meta name="twitter:site" content={siteMetadata.twitterUsername} />
          <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
        </>
      )}

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content={siteMetadata.address.state} />
      <meta name="geo.placename" content={`${siteMetadata.address.city}, ${siteMetadata.address.country}`} />
      <meta name="geo.position" content={`${siteMetadata.geo.latitude};${siteMetadata.geo.longitude}`} />
      <meta name="ICBM" content={`${siteMetadata.geo.latitude}, ${siteMetadata.geo.longitude}`} />

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

