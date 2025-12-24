import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// Also load .env if it exists
dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Tax Accounting Service",
    titleTemplate: "%s | Tax Accounting Service",
    description: "Professional tax services.",
    siteUrl: "https://beast-tax-accounting.com",
    image: "/og-image.png",
    twitterUsername: "",
    author: "Tax Accounting Service",
    lang: "en",
    locale: "en_US",
    phone: "000-000-0000",
    whatsapp: "000-000-0000",
    email: "info@yourbrand.com",
    address: {
      street: "Main St",
      city: "City",
      state: "ST",
      zip: "00000",
      country: "USA"
    },
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: ""
    },
    keywords: [
      "Tax Accounting"
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
        resolveSiteUrl: () => "https://summittaxadvisors.com",
      }
    },
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
