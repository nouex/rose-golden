import React from "react"

import Layout from "../components/layout"
import Content from '../components/Content';
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
      <Content />
  </Layout>
)

export default IndexPage
