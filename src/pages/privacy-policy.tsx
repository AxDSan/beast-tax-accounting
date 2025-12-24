import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"

import SEO from "../components/SEO"
import { useConfig } from "../context/ConfigContext"

import { motion } from "framer-motion"

const PrivacyPolicyPage: React.FC<PageProps> = () => {
  const { config } = useConfig()
  

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
          
            <h1 className="text-4xl font-heading font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 mb-8">
              Last Updated: To be defined
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                Introduction
                
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This Privacy Policy describes how {config.companyName} collects, uses, and protects your personal information.
              </p>
            </section>

            {/* Add more sections as needed */}
          
          </motion.div>
          
        </div>
      </Section>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const Head: HeadFC = () => (
  <SEO
    title="Privacy Policy"
    description="Privacy Policy for our tax accounting services"
    pathname="/privacy-policy"
  />
)
