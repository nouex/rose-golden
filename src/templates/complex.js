import React from 'react';
import { graphql } from 'gatsby';
import {
  Box, Text, DataTable, Meter, Heading, Carousel, Image, Paragraph,
} from 'grommet';
import { Star } from 'grommet-icons';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Amenities from '../components/Amenities';
import StaticMap from '../components/StaticMap';
import AdditionalInfo from '../components/AdditionalInfo';
import formatPriceRange from '../utils/format-price-range';
import { toggle as toggleFavorite, getValue } from '../utils/favorites';
import GenderBothIcon from '../../static/icons/gender-both.svg';
import GenderMaleIcon from '../../static/icons/gender-male.svg';
import GenderFemaleIcon from '../../static/icons/gender-female.svg';

// TODO: make carousel responsive
// TODO: logic for picking the gender icon is used in two places so far; abstract ig, export it to
// a common utility file, and use that single-source file

class Complex extends React.Component {
  state = {
    isFavorite: null
  }

  static onStarClick () {
    const isFavorite = !this.state.isFavorite
    toggleFavorite(this.props.data.postgres.complex.id, isFavorite)
    this.setState({ isFavorite })
  }

  constructor(props) {
    super(props)

    this.onStarClick = Complex.onStarClick.bind(this)

    this.state.isFavorite = getValue(props.data.postgres.complex.id)
  }

  render() {
    const { data } = this.props
    const starColor = this.state.isFavorite ? "gold" : "dark-6"

    return (
      <Layout>
        <SEO title="Home" keywords={['byui', 'housing', 'students', 'approved']} />
        <Box as="main">


          <Box className="complex-top" pad={{ top: 'medium' }}>
            {/** *** Carousal Start **** */}
            <Box width="600px" margin={{ horizontal: 'auto', bottom: 'medium' }} className="complex-carousel">
              <Carousel fill play="5000">
                { data.postgres.complex.images.map(image => (
                  <Box width="550px" margin={{ horizontal: 'auto' }} key={image.id}>
                    <Image fit="contain" src={image.slug} />
                  </Box>
                ))}
              </Carousel>
            </Box>
            {/** *** Carousal End **** */}


            <Box className="complex-general-info">
              {/** *** Intro Start **** */}
              <Box>
                <Box direction="row">
                  <Heading level="1" margin={{ top: '0' }}>{data.postgres.complex.name}</Heading>
                  <Star size="large" color={starColor} className="lighten-on-hover complex-page-star"
                        onClick={this.onStarClick} />
                </Box>
                <Box margin={{ left: 'small' }}>
                  <Text size="xlarge">
                    {formatPriceRange(data.postgres.complex.minRent, data.postgres.complex.maxRent)}
                  </Text>
                </Box>
                <Box>
                  {
                    (gender => (
                      {
                        M: (
                          <Text size="large" margin={{ left: 'small', top: 'small' }}>
                              Men
                            <GenderMaleIcon className="custom-icon" key="gender-male-icon" />
                          </Text>
                        ),
                        B: (
                          <Text size="large" margin={{ left: 'small', top: 'small' }}>
                              Men and Women
                            <GenderBothIcon className="custom-icon" key="gender-both-icon" />
                          </Text>
                        ),
                        F: (
                          <Text size="large" margin={{ left: 'small', top: 'small' }}>
                              Women
                            <GenderFemaleIcon className="custom-icon" key="gender-female-icon" />
                          </Text>
                        ),
                      }[gender]
                    ))(data.postgres.complex.gender)
                  }
                </Box>
                <Box margin={{ top: 'small', left: 'small' }}>
                  <Text size="large">
                    {data.postgres.complex.contact.address}
      , Rexburg ID
                  </Text>
                </Box>
              </Box>
              {/** *** Intro End **** */}

              {/** *** Description Start **** */}
              <Box className="complex-description-box" margin={{ left: 'small' }}>
                <Paragraph>
                  {data.postgres.complex.description || 'No description provided.'}
                </Paragraph>
                <Text>- Management</Text>
              </Box>
              {/** *** Description End **** */}
            </Box>
          </Box>


          {/** *** Floorplans Start **** */}
          <Box>
            <Heading level="2">Floorplans</Heading>
            <DataTable
              columns={[
                {
                  property: 'name',
                  header: <Text>Plan</Text>,
                  primary: true,
                },
                {
                  property: 'percent',
                  header: 'Sum Graphic',
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
                {
                  property: 'beds',
                  header: 'Beds',
                },
                {
                  property: 'baths',
                  header: 'Baths',
                },
              ]}
              data={[
                {
                  name: 'Single', percent: 20, beds: 2, baths: 1,
                },
                {
                  name: 'Basic', percent: 30, beds: 4, baths: 2,
                },
                {
                  name: 'Lux', percent: 40, beds: 6, baths: 3,
                },
                {
                  name: 'Platinum', percent: 80, beds: 8, baths: 4,
                },
              ]}
            />
          </Box>
          {/** *** Floorplans End **** */}


          {/** *** Amenities Start **** */}
          <Box>
            <Heading level="2">Amenities</Heading>
          </Box>
          <Amenities attributes={cloneDeep(data.postgres.complex)} />
          {/** *** Amenities End **** */}


          {/** *** Additional Info Start **** */}
          <Box>
            <Heading level="2">Additional Info</Heading>
            <AdditionalInfo complex={data.postgres.complex} />
          </Box>
          {/** *** Additional Info End **** */}


          {/** *** Map Start **** */}
          <Box direction="row" justify="center">
            <StaticMap address={data.postgres.complex.contact.address} />
          </Box>
          {/** *** Map End **** */}
        </Box>
      </Layout>
    )
  }
}

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
        description
        gender
        hasPrivateRoom
        hasMusicRoom
        hasWasher
        isHouse
        minRent
        maxRent
        hasHotTub
        hasOfficeCenter
        hasShuttleService
        hasFitnessCenter
        hasCable
        hasAirConditioning
        hasWifi
        isPetFriendly
        hasExtraStorage
        studentCapacity
        parkingSpaces
        processingFee
        securityDeposit
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
