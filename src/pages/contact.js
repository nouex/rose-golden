import React from "react"
import { Box } from 'grommet';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
      <Box as="main">
        reecehudson10@gmail.com
      </Box>
  </Layout>
)

export default IndexPage
