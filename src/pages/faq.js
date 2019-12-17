import React from "react"
import { Box, Heading, Text, Markdown } from 'grommet';

import Layout from "../components/layout"
import SEO from "../components/seo"

const FaqPage = ({location}) => (
  <Layout location={location}>
    <SEO title="FAQ" keywords={[`byui`, `housing`, `students`, 'approved']} />
      <Box as="main">
        <Heading level="2">Frequently Asked Questions</Heading>
        <Heading level="3">Where does Honepot get it's data?</Heading>
        <Markdown>All data is taken from [the offical BYUI search site](https://web.byui.edu/tis/search) or the official apartment website.</Markdown>
        <Heading level="3">How is an ammenity score calculated?</Heading>
        <Text id="ammenity-score">
          The more known amenities an apartment has the higher the score will be.
          It is important to note that not all complexes publicize all of their amenities, that
          might seem unfair since we look at the amenities that are known to us by the website
          sources.  We do our best to look at everything and play fair.
        </Text>
        <Heading level="3">I am a manager and have identified misinformation on a page, how do I fix it?</Heading>
        <Text>We do our best to keep everything correct and up to date, however we make mistakes.  If you are a manager and want to update or change somthing on a complex page, contact reecehudson10@gmail.com </Text>
      </Box>
  </Layout>
)

export default FaqPage
