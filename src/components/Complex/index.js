import React from 'react';
import PropTypes from 'prop-types';

import ComplexPresentation from './presentation';
import formatPriceRange from '../../utils/format-price-range';
import formatGender from '../../utils/format-gender';
import formatAmenityScore from '../../utils/format-amenity-score';
import { amenities } from '../Amenities';

const Complex = ({ complex: c, onToggleFavorite }) => {
  const rent = formatPriceRange(c.minRent, c.maxRent);
  const data = Object.assign({}, c, { rent });
  const gender = formatGender(c)
  const amenityScore = formatAmenityScore(c, amenities)
  const walkingDistance = `${c.walkToCampus} min to The Crossroads`

  return (
    <ComplexPresentation data={data} gender={gender} onToggleFavorite={onToggleFavorite}
                         amenityScore={amenityScore} walkingDistance={walkingDistance} />
  );
};

Complex.propTypes = {
  complex: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default Complex;
