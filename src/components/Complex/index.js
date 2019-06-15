import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Anchor, Box, Button, Text } from 'grommet';
import { Attraction, Car } from "grommet-icons";
import slug from 'slug';

slug.defaults.mode = "rfc3986"

const Complex = ({complex: c}) => {
  return (
    <Link to={`/${slug(c.name)}`}>
      <Box pad="small" align="left" border={{all: "xsmall"}} round="xsmall" gap="small" width="350px" background="light-1">
        <Car size="large" color="brand" />
        <Text>{c.name}</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
    </Link>
  )
};;

Complex.propTypes = {
  complex: PropTypes.object.isRequired
}

export default Complex
