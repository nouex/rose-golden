import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';

import ComplexPresentation from './presentation';
import formatPriceRange from '../../utils/format-price-range';
import GenderBothIcon from '../../../static/icons/gender-both.svg';
import GenderMaleIcon from '../../../static/icons/gender-male.svg';
import GenderFemaleIcon from '../../../static/icons/gender-female.svg';
import { amenities } from '../Amenities';

const Complex = ({ complex: c, onToggleFavorite }) => {
  const rent = formatPriceRange(c.minRent, c.maxRent);
  const data = Object.assign({}, c, { rent });
  const gender = formatGender(c)
  const amenityScore = getAmenityScore(c, amenities)
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

// TODO: export for testing
function formatGender(c) {
  let icon
  switch (c.gender) {
    case 'B':
      icon = <GenderBothIcon className="custom-icon" key="gender-both-icon" />;
      break;

    case 'M':
      icon = <GenderMaleIcon className="custom-icon" key="gender-male-icon" />;
      break;

    case 'F':
      icon = <GenderFemaleIcon className="custom-icon" key="gender-female-icon" />;
      break;

    default:
      throw new TypeError(`Uknown gender value for ${c.name}`);
  }


  return (
    <div>
      {icon}
      <Text>
        {
          {
            B: "Men and Women's Housing",
            M: "Men's Housing",
            F: "Women's Housing"
          }[c.gender]
        }
      </Text>
    </div>
  )
}

// TODO: export for testing
function getAmenityScore(complex, amenities) {
  // NOTE: don't check for truthy for for strict true, some properties of the complex might be
  //       null and that doens't mean false but that we don't know the value
  // const points = amenities.reduce((accum, amenity) => accum + (complex[amenity] === true), 0);
  const points = amenities.filter(amenity => complex[amenity] === true).length
  return points / amenities.length * 100
}
