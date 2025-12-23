export type Language = "es" | "en"

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      team: "Nuestro Equipo",
      services: "Nuestros Servicios",
      taxes: "Llename los TAXES",
      portal: "Portal Seguro",
      contact: "Contáctanos",
      followUs: "¡Síguenos!",
    },
    footer: {
      tagline: "Professional services for your business needs",
      contact: "Contacto",
      services: "Servicios",
      copyright: "Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsAndConditions: "Términos y Condiciones",
    },
    services: {
      categories: {
        taxComplianceNegocios: "Tax Compliance Negocios",
        planillasIndividuo: "Planillas Individuo Hacienda",
        planillaFederal: "Planilla Federal Individuo",
        serviciosNegocios: "Servicios a Negocios",
      },
      planillaFederal: {
        title: "Planillas Federales",
        description: "Formulario de Impuestos Personales (Form 1040).",
      },
      entidadesConducto: {
        title: "Planillas Entidades Conducto",
        description: "Planilla Informativa sobre Ingresos de Entidades Conducto (non-profit, trusts, etc.).",
      },
      corporacionesPlanillas: {
        title: "Corporaciones Planillas",
        description: "Planilla de Contribución sobre Ingresos de Corporaciones (Form 480.20).",
      },
      patentesMunicipales: {
        title: "Patentes Municipales",
        description: "Declaración y pago de patentes municipales (licencias municipales por volumen de negocio).",
      },
      deptDelEstado: {
        title: "Dept. del Estado",
        description: "Portal del Departamento de Estado de Puerto Rico (registro de corporaciones, informes anuales, certificados de buena existencia).",
      },
      crimMueble: {
        title: "CRIM Mueble",
        description: "Centro de Recaudación de Ingresos Municipales – Propiedad Mueble (pago de contribución sobre propiedad mueble comercial).",
      },
      individuosPlanillas: {
        title: "Individuos Planillas",
        description: "Planilla de Contribución sobre Ingresos de Individuos (Form 480.30 – renta personal).",
      },
      registroComercio: {
        title: "Registro de Comerciante",
        description: "Certificado del Registro Único de Comerciantes (Merchant's Registration Certificate).",
      },
      suriRegistro: {
        title: "SURI Registro",
        description: "Acceso al registro y gestión de cuenta en SURI (portal principal de Hacienda).",
      },
      estadosFinancieroNegocio: {
        title: "Estados Financieros Negocio",
        description: "Preparación y análisis de estados financieros de negocio.",
      },
      estadosFinancieroProyeccion: {
        title: "Estados Financieros Proyección",
        description: "Proyecciones financieras y presupuestos para negocios.",
      },
      estadosFinancieroPersonal: {
        title: "Estados Financieros Personales",
        description: "Estados financieros personales (para préstamos, planificación, etc.).",
      },
      incorporacionLLC: {
        title: "Incorporación LLC & Corp",
        description: "Servicios de creación de corporaciones y LLC en Puerto Rico y Estados Unidos.",
      },
      contabilidadNegocios: {
        title: "Contabilidad de Negocios",
        description: "Servicios de contabilidad completa para empresas (libros, nómina, IVU, etc.).",
      },
      otrosServicios: {
        title: "Otros Servicios",
        description: "Depósito para cualquier servicio adicional no listado.",
      },
    },
    privacyPolicy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Por definir",
      introduction: {
        heading: "Introducción",
        text: "Esta Política de Privacidad describe cómo Beast Tax Accounting recopila, utiliza y protege su información personal.",
      },
    },
    termsAndConditions: {
      title: "Términos y Condiciones",
      lastUpdated: "Última actualización: Por definir",
      section1: {
        heading: "Términos de Uso",
        text: "Al acceder y usar este sitio web, usted acepta estar sujeto a estos Términos y Condiciones.",
      },
    },
    form: {
      name: "Nombre",
      namePlaceholder: "Ingrese su nombre completo",
      email: "Correo electrónico",
      emailPlaceholder: "Ingrese su dirección de correo",
      phone: "Teléfono",
      phonePlaceholder: "Ingrese su número de teléfono",
      service: "Servicio",
      selectService: "Seleccione un servicio",
      serviceIndividual: "Servicios Tributarios Individuales",
      serviceBusiness: "Servicios Tributarios Empresariales",
      serviceCorporate: "Servicios Tributarios Corporativos",
      servicePlanning: "Planificación Tributaria",
      serviceConsulting: "Consultoría Tributaria",
      serviceOther: "Otro",
      message: "Mensaje",
      messagePlaceholder: "Cuéntenos sobre sus necesidades",
      submit: "Enviar Mensaje",
    },
    ghlForm: {
      noFormAvailable: "No hay formulario disponible",
      languageNotice: "Este formulario se muestra en inglés. Contáctenos para asistencia en español.",
    },
    hero: {
      title: "Beast Tax Accounting",
      subtitle: "Servicios profesionales para las necesidades de su negocio",
      cta: "Contáctenos",
      services: "Nuestros Servicios",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      team: "Our Team",
      services: "Our Services",
      taxes: "File my TAXES",
      portal: "Secure Portal",
      contact: "Contact Us",
      followUs: "Follow Us!",
    },
    footer: {
      tagline: "Professional services for your business needs",
      contact: "Contact",
      services: "Services",
      copyright: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsAndConditions: "Terms & Conditions",
    },
    services: {
      categories: {
        taxComplianceNegocios: "Business Tax Compliance",
        planillasIndividuo: "Individual Tax Returns (PR)",
        planillaFederal: "Federal Individual Tax Returns",
        serviciosNegocios: "Business Services",
      },
      planillaFederal: {
        title: "Federal Tax Returns",
        description: "Personal Tax Form (Form 1040).",
      },
      entidadesConducto: {
        title: "Pass-Through Entities Returns",
        description: "Information return on income of pass-through entities (non-profit, trusts, etc.).",
      },
      corporacionesPlanillas: {
        title: "Corporate Tax Returns",
        description: "Corporate income tax return (Form 480.20).",
      },
      patentesMunicipales: {
        title: "Municipal Licenses",
        description: "Declaration and payment of municipal licenses (municipal licenses by business volume).",
      },
      deptDelEstado: {
        title: "Department of State",
        description: "Puerto Rico Department of State portal (corporation registration, annual reports, certificates of good standing).",
      },
      crimMueble: {
        title: "CRIM Personal Property",
        description: "Municipal Income Collection Center – Personal Property (payment of tax on commercial personal property).",
      },
      individuosPlanillas: {
        title: "Individual Tax Returns",
        description: "Individual income tax return (Form 480.30 – personal income).",
      },
      registroComercio: {
        title: "Merchant Registration",
        description: "Unique Merchant Registration Certificate (Merchant's Registration Certificate).",
      },
      suriRegistro: {
        title: "SURI Registration",
        description: "Unified Internal Revenue System – account access and management in SURI (main Treasury portal).",
      },
      estadosFinancieroNegocio: {
        title: "Business Financial Statements",
        description: "Preparation and analysis of business financial statements.",
      },
      estadosFinancieroProyeccion: {
        title: "Financial Projections",
        description: "Financial projections and budgets for businesses.",
      },
      estadosFinancieroPersonal: {
        title: "Personal Financial Statements",
        description: "Personal financial statements (for loans, planning, etc.).",
      },
      incorporacionLLC: {
        title: "LLC & Corporation Incorporation",
        description: "Corporation and LLC formation services in Puerto Rico and United States.",
      },
      contabilidadNegocios: {
        title: "Business Accounting",
        description: "Complete accounting services for businesses (books, payroll, IVU, etc.).",
      },
      otrosServicios: {
        title: "Other Services",
        description: "Deposit for any additional service not listed.",
      },
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: To be defined",
      introduction: {
        heading: "Introduction",
        text: "This Privacy Policy describes how Beast Tax Accounting collects, uses, and protects your personal information.",
      },
    },
    termsAndConditions: {
      title: "Terms and Conditions",
      lastUpdated: "Last Updated: To be defined",
      section1: {
        heading: "Terms of Use",
        text: "By accessing and using this website, you agree to be bound by these Terms and Conditions.",
      },
    },
    form: {
      name: "Name",
      namePlaceholder: "Enter your full name",
      email: "Email",
      emailPlaceholder: "Enter your email address",
      phone: "Phone",
      phonePlaceholder: "Enter your phone number",
      service: "Service",
      selectService: "Select a service",
      serviceIndividual: "Individual Tax Services",
      serviceBusiness: "Business Tax Services",
      serviceCorporate: "Corporate Tax Services",
      servicePlanning: "Tax Planning",
      serviceConsulting: "Tax Consulting",
      serviceOther: "Other",
      message: "Message",
      messagePlaceholder: "Tell us about your needs",
      submit: "Send Message",
    },
    ghlForm: {
      noFormAvailable: "No form available",
      languageNotice: "This form is displayed in English. Contact us for assistance in Spanish.",
    },
    hero: {
      title: "Beast Tax Accounting",
      subtitle: "Professional services for your business needs",
      cta: "Contact Us",
      services: "Our Services",
    },
  },
}

export type TranslationKeys = typeof translations.es

