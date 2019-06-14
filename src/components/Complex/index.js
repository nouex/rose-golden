import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Box, Button, Text } from 'grommet';
import { Attraction, Car } from "grommet-icons";

const Complex = ({complex: c}) => {
  return (
    <Box pad="small" align="left" border={{all: "xsmall"}} round="xsmall" gap="small" width="350px" background="light-1">
      <Car size="large" color="brand" />
      <Text>{c.name}</Text>
      <Anchor href="" label="Link" />
      <Button label="Button" onClick={() => {}} />
    </Box>
  )
};;

Complex.propTypes = {
  complex: PropTypes.object.isRequired
}

export default Complex
