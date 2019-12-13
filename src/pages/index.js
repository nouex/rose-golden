import React from "react"

import Layout from "../components/layout"
import List from "../components/List"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
      <List />
  </Layout>
)

export default IndexPage
