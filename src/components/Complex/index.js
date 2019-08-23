import React from 'react';
import PropTypes from 'prop-types';

import ComplexPresentation from './presentation';
import formatPriceRange from '../../utils/format-price-range';
import iconPicker from './icon-picker';

const Complex = ({ complex: c, onToggleFavorite }) => {
  const rent = formatPriceRange(c.minRent, c.maxRent);

  const data = Object.assign({}, c, { rent });

  const icons = iconPicker(c);

  return (
    <ComplexPresentation data={data} icons={icons} onToggleFavorite={onToggleFavorite}/>
  );
};

Complex.propTypes = {
  complex: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default Complex;
