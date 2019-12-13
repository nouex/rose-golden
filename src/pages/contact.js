import React from "react"
import { Box } from 'grommet';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
      <Box as="main">
        Questions, Comments, Concerns ? 💌 ⬇️
        <address><a href="mailto:reecehudson10@gmail.com">reecehudson10@gmail.com</a></address>
      </Box>
  </Layout>
)

export default IndexPage
