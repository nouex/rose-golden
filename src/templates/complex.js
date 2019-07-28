import React from 'react';
import { graphql } from 'gatsby';
import {
  Box, Text, DataTable, Meter, Heading, Carousel, Image,
} from 'grommet';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Features from '../components/Features';
import formatPriceRange from '../utils/format-price-range';

// TODO: make carousel responsive
const Complex = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['byui', 'housing', 'students', 'approved']} />
    <Box as="main">

      {/** *** Carousal Start **** */}
      <Box width="600px" margin={{ horizontal: 'auto' }}>
        <Carousel fill>
          { data.postgres.complex.images.map(image => (
            <Box width="550px" margin={{ horizontal: 'auto' }} key={image.id}>
              <Image fit="contain" src={image.slug} />
            </Box>
          ))}
        </Carousel>
      </Box>
      {/** *** Carousal End **** */}

      {/** *** General Info Start **** */}
      <Box>
        <Box>
          <Heading level="1">{data.postgres.complex.name}</Heading>
        </Box>
        <Box margin={{ left: 'small' }}>
          <Text size="xlarge">
            {formatPriceRange(data.postgres.complex.minRent, data.postgres.complex.maxRent)}
          </Text>
        </Box>
        <Box margin={{ top: 'small', left: 'small' }}>
          <Text size="large">
            {data.postgres.complex.contact.address}
, Rexburg ID
          </Text>
        </Box>
      </Box>
      {/** *** General Info End **** */}

      {/** *** Floorplans Start **** */}
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

      {/** *** Features Start **** */}
      <Features attributes={cloneDeep(data.postgres.complex)} />
      {/** *** Features End **** */}

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
