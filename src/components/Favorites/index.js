import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import { Star } from 'grommet-icons';

const Favorites = ({ onClick, isShowingFavorites }) => {
  const backgroundColor = isShowingFavorites ? "#4CAA82" : "inherit"

  return (
    <Button
      title="Toggle Favorites"
      icon={<Star />}
      label="Favorites"
      onClick={ onClick }
      margin={{left: "small"}}
      gap="xsmall"
      style={{
        backgroundColor
      }}
    />
  )
}

Favorites.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingFavorites: PropTypes.bool.isRequired
}

export default Favorites
