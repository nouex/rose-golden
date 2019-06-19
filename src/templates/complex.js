import React from "react"
import { graphql } from 'gatsby';
import { Box, Text } from 'grommet';

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`byui`, `housing`, `students`, 'approved']} />
    <Box as="main">
      {
        Object.keys(data.postgres.complexById).map((key, ind) => {
          return (
            <Box key={ind}>
              <Text>{key}: {String(data.postgres.complexById[key])}</Text>
            </Box>
          )
        })
      }
    </Box>
  </Layout>
)

export const query = graphql`
  query getComplexById($id: PostGraphile_UUID!) {
    postgres {
      complexById(id: $id) {
        id
        name
        hasPrivateRoom
        hasMusicRoom
        hasWasher
        isHouse
        minRent
        maxRent
      }
    }
  }
`
