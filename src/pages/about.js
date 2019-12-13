import React from "react"
import { Box, Paragraph } from 'grommet';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => (
  <Layout location={location} >
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
      <Box as="main" direction="row" justify="between" wrap align="center">
        <Box>
          <Paragraph>
            The goal of Honeypot is to provide a better experience for students to find BYUI Approved housing.
            I have found that it can be frustrating to use the official website provided by the school; the UI is boring and outdated, not to mention it takes mortifying amounts of time for it to load and update.
          </Paragraph>
          <Paragraph>
            There have been several attempts to create an alternate hubspot to browse all of BYUI approved housing, although improvements have been made, there still seems to lack a hubspot where one can seemlessly and delightfully search for student housing.
          </Paragraph>
          <Paragraph>
            Honeypot aims to provide a fast and modern UX all while keeping apartment information correct and up to date.  This project is by no means complete and will take more time for it to reach that goal.
          </Paragraph>
        </Box>
        <Box>
        </Box>
        <div className="about-page-image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </Box>
  </Layout>
)

export const query = graphql`
  query AboutPageQuery {
    file(relativePath: { eq: "taylor.png" }) {
      childImageSharp {
        fluid(maxWidth: 520) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
