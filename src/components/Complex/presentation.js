import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Box, Text } from 'grommet';
import slug from 'slug';
import WalkerIcon from '../../../static/icons/walker.svg';
import ScoreIcon from '../../../static/icons/wifi.svg';

import ComplexImage from '../ComplexImage';
import Favorite from '../Favorite';

slug.defaults.mode = "rfc3986"

/**
 * Next big change: men's housing, amineyt score, 8 minute walk from campus
 * TODO: before we complete this big change we must make sure that what we removce on the complex
 * card will be placed on the complex page and not lost forever.  i.e. private room, music room,
 * and washer... gender will be kept on complex card
 */

const ComplexPresentation = ({data, gender, amenityScore, walkingDistance, onToggleFavorite}) => {
  return (
    <Box margin={{bottom: "medium"}} className="favorite-container-parent">
      <Favorite onToggleFavorite={onToggleFavorite} isFavorite={data.isFavorite}/>
      <Link to={`/${slug(data.name)}`} style={{height: "100%"}} className="scale-on-hover">
        <Box pad="none" align="start" border={{all: "xsmall"}} gap="xsmall" width="320px" height="100%" as="article" background="light-3">
          <ComplexImage name={data.thumbnail.image.slug}/>
          <Box pad="xsmall" width="100%" className="complex-card-title">
            <Text size="xlarge" color="dark-1" textAlign="center">{data.name}</Text>
          </Box>
          <Box pad="small" width="100%">
            <Box direction="row" justify="between" pad={{bottom: "small"}}>
              <Text size="large" color="dark-1">{data.rent}</Text>
            </Box>
            <Box pad={{bottom: "medium"}}>
              <Text size="medium">{data.contact.address}, Rexburg, ID</Text>
              <Text size="medium">{data.contact.phone}</Text>
            </Box>
            <div className="complex-card-icons-container">
              <Box>
                <Box>{gender}</Box>
                <Box><div><ScoreIcon className="custom-icon" /><Text>{"Amenity Score " + amenityScore.toFixed(0) + "%"}</Text></div></Box>
                <Box><div><WalkerIcon className="custom-icon" /><Text>{walkingDistance}</Text></div></Box>
              </Box>
             </div>
          </Box>
        </Box>
      </Link>
    </Box>
  )
};;

ComplexPresentation.propTypes = {
  data: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  // gender: PropTypes.object.isRequired, // Proptypes.reactcomponent.isRequired ???
  amenityScore: PropTypes.number.isRequired,
  walkingDistance: PropTypes.string.isRequired
}

export default ComplexPresentation
