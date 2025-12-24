import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"

import SEO from "../components/SEO"

import { motion } from "framer-motion"

const TermsAndConditionsPage: React.FC<PageProps> = () => {
  

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
              Terms and Conditions
            </h1>
            <p className="text-gray-400 mb-8">
              Last Updated: To be defined
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                Terms of Use
                
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using this website, you agree to be bound by these Terms and Conditions.
              </p>
            </section>

            {/* Add more sections as needed */}
          
          </motion.div>
          
        </div>
      </Section>
    </Layout>
  )
}

export default TermsAndConditionsPage

export const Head: HeadFC = () => (
  <SEO
    title="Terms and Conditions"
    description="Terms and Conditions for our tax accounting services"
    pathname="/terms-and-conditions"
  />
)
