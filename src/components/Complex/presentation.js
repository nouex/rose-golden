import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Box, Text } from 'grommet';
import slug from 'slug';

import ComplexImage from '../ComplexImage';
import Favorite from '../Favorite';

slug.defaults.mode = "rfc3986"

const ComplexPresentation = ({data, icons, onToggleFavorite}) => {
  return (
    <Box margin={{bottom: "medium"}} className="favorite-container-parent">
      <Favorite onToggleFavorite={onToggleFavorite} isFavorite={data.isFavorite}/>
      <Link to={`/${slug(data.name)}`} style={{height: "100%"}} className="scale-on-hover">
        <Box pad="none" align="start" border={{all: "xsmall"}} gap="xsmall" width="320px" height="100%" as="article" background="light-3">
          <ComplexImage name={data.thumbnail.image.slug}/>
          <Box pad="xsmall" width="100%" className="complex-card-title">
            <Text size="xlarge">{data.name}</Text>
            <Box as="div" width="100%" height="0" pad={{bottom: "xsmall"}} style={{borderBottom: "1px solid rgba(68, 68, 68, 0.6)"}}></Box>
          </Box>
          <Box pad="small" width="100%">
            <Box direction="row" justify="between" pad={{bottom: "small"}}>
              <Text size="large" color="dark-1">{data.rent}</Text>
            </Box>
            <Box pad={{bottom: "small"}}>
              <Text size="medium">{data.contact.address}</Text>
              <Text size="medium">{data.contact.phone}</Text>
            </Box>
            <Box direction="row" justify="between" pad={{bottom: "small"}}>
             {icons}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  )
};;

ComplexPresentation.propTypes = {
  data: PropTypes.object.isRequired,
  icons: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}

export default ComplexPresentation
