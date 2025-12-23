import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Beast Tax Accounting",
    titleTemplate: "%s | Beast Tax Accounting",
    description: "Professional services for your business needs",
    siteUrl: "https://beast-tax-accounting.com",
    image: "/og-image.png",
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
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: ""
    },
    keywords: [
      "keyword1",
      "keyword2",
      "keyword3"
    ]
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404", "/404.html"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => "https://beast-tax-accounting.com",
      }
    },
    // Temporarily disabled - add icon.png to src/images/ and re-enable
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "Beast Tax Accounting",
    //     short_name: "Beast Tax Accounting",
    //     description: "Professional services for your business needs",
    //     start_url: "/",
    //     background_color: "#0a0a0a",
    //     theme_color: "#16a34a",
    //     display: "standalone",
    //     icon: "src/images/icon.png",
    //     icons: [
    //       {
    //         src: "/icons/icon-72x72.png",
    //         sizes: "72x72",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/icons/icon-96x96.png",
    //         sizes: "96x96",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/icons/icon-128x128.png",
    //         sizes: "128x128",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/icons/icon-144x144.png",
    //         sizes: "144x144",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/icons/icon-152x152.png",
    //         sizes: "152x152",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/icons/icon-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/icons/icon-384x384.png",
    //         sizes: "384x384",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/icons/icon-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png"
    //       }
    //     ]
    //   }
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    }
  ]
};

export default config;

