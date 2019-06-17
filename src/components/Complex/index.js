import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Anchor, Box, Button, Text } from 'grommet';
import slug from 'slug';

import ComplexImage from '../ComplexImage';

slug.defaults.mode = "rfc3986"

const Complex = ({complex: c}) => {
  return (
    <Link to={`/${slug(c.name)}`}>
      <Box pad="none" align="left" border={{all: "xsmall"}} gap="xsmall" width="320px">
        <ComplexImage name={c.imageByThumbnail.slug}/>
        <Box pad="small">
          <Text>{c.name}</Text>
          <Anchor href="" label="Link" />
          <Button label="Button" onClick={() => {}} />
        </Box>
      </Box>
    </Link>
  )
};;

Complex.propTypes = {
  complex: PropTypes.object.isRequired
}

export default Complex
