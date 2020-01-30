import React from 'react';
import PropTypes from 'prop-types'

import ListPresentation from "./presentation";

export default ({ complexes, onToggleFavorite }) => (
  <ListPresentation complexes={complexes} onToggleFavorite={onToggleFavorite} />
)

ListPresentation.propTypes = {
  complexes: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}
