import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

import SEO from "../components/SEO"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Welcome to Beast Tax Accounting
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            This is a placeholder page. Please replace this file with the full index.tsx from visionaccountingpr
            and update the URLs as needed.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg text-left">
            <p className="text-sm text-gray-300 mb-2">
              <strong>Next steps:</strong>
            </p>
            <ol className="text-sm text-gray-400 list-decimal list-inside space-y-1">
              <li>Copy the full index.tsx from visionaccountingpr</li>
              <li>Replace GHL Form Script URL with: https://links.beast-tax-accounting.com/js/form_embed.js</li>
              <li>Replace Contact Form URLs (EN: , ES: )</li>
              <li>Replace Booking Widget URLs (Personal: , Business: )</li>
              <li>Replace Service URLs throughout the file</li>
              <li>Update company name references to Beast Tax Accounting</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage


export const Head: HeadFC = () => (
  <SEO 
    title="Home"
    description="Professional services for your business needs"
    pathname="/"
  />
)

