import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

import SEO from "../components/SEO"

import { motion } from "framer-motion"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl md:text-9xl font-heading font-bold text-primary-500 mb-4"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4"
          >
            Page Not Found
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-md mx-auto"
          >
            Sorry, we couldn't find the page you're looking for.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
          
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO
    title="Page Not Found"
    description="The page you're looking for doesn't exist."
    pathname="/404"
    noindex={true}
  />
)
