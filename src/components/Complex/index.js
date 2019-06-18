import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Anchor, Box, Button, Text } from 'grommet';
import { Music as MusicIcon, Bus as BusIcon, Run as RunIcon } from 'grommet-icons';
import slug from 'slug';

import ComplexImage from '../ComplexImage';
import formatter from "../../utils/currency-formatter";

slug.defaults.mode = "rfc3986"

const Complex = ({complex: c}) => {
  return (
    <Link to={`/${slug(c.name)}`}>
      <Box pad="none" align="start" border={{all: "xsmall"}} gap="xsmall" width="320px" as="article" margin={{bottom: "medium"}}>
        <ComplexImage name={c.imageByThumbnail.slug}/>
        <Box pad="small" width="100%">
          <Box direction="row" justify="between" pad={{bottom: "small"}}>
            <Text size="xlarge" weight="bold">{formatter.format(c.rent)}</Text>
            <Text size="xlarge">{c.name}</Text>
          </Box>
          <Box pad={{bottom: "small"}}>
            <Text size="medium">14908 W 145th St, Rexburg</Text>
            <Text size="medium">(770)-630-0483</Text>
          </Box>
          <Box direction="row" justify="between" pad={{bottom: "small"}}>
            <MusicIcon size="medium" color="dark-1"/>
            <BusIcon size="medium" color="dark-1" />
            <RunIcon size="medium" color="dark-1" />
          </Box>
          <Box pad={{bottom: "small"}}>
            <Text size="medium">Go to Website</Text>
            <Text size="medium">Student Capacity</Text>
            <Text size="medium">Parking Spaces</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
};;

Complex.propTypes = {
  complex: PropTypes.object.isRequired
}

export default Complex
