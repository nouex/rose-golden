import React from 'react';
import PropTypes from 'prop-types';

import ComplexPresentation from './presentation';
import formatPriceRange from '../../utils/format-price-range';
import iconPicker from './icon-picker';

const Complex = ({ complex: c }) => {
  const rent = formatPriceRange(c.minRent, c.maxRent);

  const data = Object.assign({}, c, { rent });

  const icons = iconPicker(c);

  return (
    <ComplexPresentation data={data} icons={icons} />
  );
};

Complex.propTypes = {
  complex: PropTypes.object.isRequired,
};

export default Complex;
