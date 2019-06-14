import React from "react"

import Layout from "../components/layout"
import List from "../components/List"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
      <List />
  </Layout>
)

export default IndexPage
