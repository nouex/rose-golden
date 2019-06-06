import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Box, Button, Text } from 'grommet';
import { Attraction, Car } from "grommet-icons";

const Complex = ({complex: c}) => {
  return (
    <Box pad="large" align="center" background="dark-3" round gap="small" width="small">
      <Car size="large" color="light-2" />
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
