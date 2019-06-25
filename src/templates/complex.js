import React from 'react';
import { graphql } from 'gatsby';
import { Box, Text } from 'grommet';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Complex = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['byui', 'housing', 'students', 'approved']} />
    <Box as="main">
      {
        Object.keys(data.postgres.complexById).map((key, ind) => (
          <Box key={ind}>
            <Text>
              {key}
:
              {' '}
              {String(data.postgres.complexById[key])}
            </Text>
          </Box>
        ))
      }
    </Box>
  </Layout>
);

Complex.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Complex;

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
`;
