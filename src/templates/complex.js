import React from 'react';
import { graphql } from 'gatsby';
import {
  Box, Text, DataTable, Meter, Heading, Carousel, Image,
} from 'grommet';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

// TODO: make carousel responsive
const Complex = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['byui', 'housing', 'students', 'approved']} />
    <Box as="main">
      <Box width="600px" margin={{ horizontal: 'auto' }}>
        <Carousel fill>
          { data.postgres.complex.images.map(image => (
            <Box width="550px" margin={{ horizontal: 'auto' }}>
              <Image fit="contain" src={image.slug} key={image.id} />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box>
        <Box as="span">{data.postgres.complex.name}</Box>
        <Box as="span">{data.postgres.complex.contact.address}</Box>
        <Box as="span">{`from: $${data.postgres.complex.minRent}`}</Box>
        ---
        <br />
      </Box>
      <Box>
        <Heading level="2">Floorplans</Heading>
        <DataTable
          columns={[
            {
              property: 'Plan 1',
              header: <Text>Name</Text>,
              primary: true,
            },
            {
              property: 'Plan 2',
              header: 'Complete',
              render: datum => (
                <Box pad={{ vertical: 'xsmall' }}>
                  <Meter
                    values={[{ value: datum.percent }]}
                    thickness="small"
                    size="small"
                  />
                </Box>
              ),
            },
          ]}
          data={[
            { name: 'Alan', percent: 20 },
            { name: 'Bryan', percent: 30 },
            { name: 'Chris', percent: 40 },
            { name: 'Eric', percent: 80 },
          ]}
        />
      </Box>
      <Box>
        <Heading level="3">Amenities</Heading>
        ...
      </Box>
      <Box>
        <Heading level="3">Special Features</Heading>
        ...
      </Box>
      <Box>
        <Heading level="3">Community Features</Heading>
        ...
      </Box>
      <Box>
        [Google Maps goes here]
      </Box>
    </Box>
  </Layout>
);

Complex.propTypes = {
  data: PropTypes.shape({
    postgres: PropTypes.shape({
      complex: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        hasPrivateRoom: PropTypes.bool.isRequired,
        hasMusicRoom: PropTypes.bool.isRequired,
        hasWasher: PropTypes.bool.isRequired,
        isHouse: PropTypes.bool.isRequired,
        minRent: PropTypes.number.isRequired,
        maxRent: PropTypes.number.isRequired,
        contact: PropTypes.shape({
          id: PropTypes.string.isRequired,
          address: PropTypes.string.isRequired,
        }).isRequired,
        images: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Complex;

export const query = graphql`
  query getcomplex($id: PostGraphile_UUID!) {
    postgres {
      complex: complexById(id: $id) {
        id
        name
        hasPrivateRoom
        hasMusicRoom
        hasWasher
        isHouse
        minRent
        maxRent
        contact: contactByContact {
          id
          address
        }
        images: imagesByComplexIdList {
          id
          slug
        }
      }
    }
  }
`;
