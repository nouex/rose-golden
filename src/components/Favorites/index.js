import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import { Star } from 'grommet-icons';

const Favorites = ({ onClick }) => (
    <Button
      title="Toggle Favorites"
      icon={<Star />}
      label="Favorites"
      onClick={ onClick }
      margin={{left: "small"}}
      gap="xsmall"
    />
  )

Favorites.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Favorites
