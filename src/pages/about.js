import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
      This is the about page
  </Layout>
)

export default IndexPage
