import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Anchor, Box, Button, Text } from 'grommet';
import { Music as MusicIcon, Bus as BusIcon, Run as RunIcon, Link as LinkIcon } from 'grommet-icons';
import slug from 'slug';

import ComplexImage from '../ComplexImage';
import formatter from "../../utils/currency-formatter";

slug.defaults.mode = "rfc3986"

const Complex = ({complex: c}) => {
  return (
    <Box margin={{bottom: "medium"}}>
      <Link to={`/${slug(c.name)}`}>
        <Box pad="none" align="start" border={{all: "xsmall"}} gap="xsmall" width="320px" as="article">
          <ComplexImage name={c.imageByThumbnail.slug}/>
          <Box pad="small" width="100%">
            <Box direction="row" justify="between" pad={{bottom: "small"}}>
              <Text size="xlarge" weight="bold" color="dark-2">{formatter.format(c.rent)}</Text>
              <Text size="xlarge">{c.name}</Text>
            </Box>
            <Box pad={{bottom: "small"}}>
              <Text size="medium">14908 W 145th St, Rexburg</Text>
              <Text size="medium">(770)-630-0483</Text>
            </Box>
            <Box direction="row" justify="between" pad={{bottom: "small"}}>
              <MusicIcon size="medium" color="dark-2"/>
              <BusIcon size="medium" color="dark-2" />
              <RunIcon size="medium" color="dark-2" />
            </Box>
            <Box pad={{bottom: "small"}}>
              <Box pad={{bottom: "xsmall"}}>
                <Text size="medium" color="dark-3">website <LinkIcon size="small"/></Text>
              </Box>
              <Text size="medium">student capacity <Text weight="bold" color="dark-2">{c.studentCapacity}</Text></Text>
              <Text size="medium">parking spaces <Text weight="bold" color="dark-2">{c.parkingSpaces}</Text></Text>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  )
};;

Complex.propTypes = {
  complex: PropTypes.object.isRequired
}

export default Complex
