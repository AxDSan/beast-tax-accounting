import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// Also load .env if it exists
dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Summit Tax Advisors",
    titleTemplate: "%s | Summit Tax Advisors",
    description: "Supporting your personal and business finances, step by step. Strategic tax planning and optimization in Puerto Rico.",
    siteUrl: "https://summittaxadvisors.com",
    image: "/og-image.png",
    twitterUsername: "",
    author: "Summit Tax Advisors Inc",
    lang: "en",
    locale: "en_US",
    phone: "787-823-7777",
    whatsapp: "939-228-1422",
    email: "info@summittaxadvisors.com",
    address: {
      street: "Carr 115 Km 16 Bo Rio Grande",
      city: "Rincon",
      state: "PR",
      zip: "00677",
      country: "Puerto Rico"
    },
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: ""
    },
    keywords: [
      "Tax Accounting",
      "Financial Planning",
      "Puerto Rico Taxes",
      "LLC Optimization",
      "Corporate Returns"
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
