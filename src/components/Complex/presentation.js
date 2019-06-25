import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Box, Text } from 'grommet';
import slug from 'slug';

import ComplexImage from '../ComplexImage';

slug.defaults.mode = "rfc3986"

const ComplexPresentation = ({data, icons}) => {
  return (
    <Box margin={{bottom: "medium"}}>
      <Link to={`/${slug(data.name)}`}>
        <Box pad="none" align="start" border={{all: "xsmall"}} gap="xsmall" width="320px" as="article">
          <ComplexImage name={data.thumbnail.slug}/>
          <Box pad="small" width="100%">
            <Box direction="row" justify="between" pad={{bottom: "small"}}>
              <Text size="large" weight="bold" color="dark-1">{data.rent}</Text>
              <Text size="xlarge">{data.name}</Text>
            </Box>
            <Box pad={{bottom: "small"}}>
              <Text size="medium">{data.contact.address}</Text>
              <Text size="medium">{data.contact.phone}</Text>
            </Box>
            <Box direction="row" justify="between" pad={{bottom: "small"}}>
             {icons}
            </Box>
            <Box pad={{bottom: "small"}}>
              <Text size="medium">student capacity <Text weight="bold" color="dark-2">{data.studentCapacity}</Text></Text>
              <Text size="medium">parking spaces <Text weight="bold" color="dark-2">{data.parkingSpaces}</Text></Text>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  )
};;

ComplexPresentation.propTypes = {
  data: PropTypes.object.isRequired,
  icons: PropTypes.array.isRequired
}

export default ComplexPresentation
