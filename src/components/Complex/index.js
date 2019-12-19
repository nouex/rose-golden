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
  const levels = [ "😊", "🙂", "😐", "🙁", "😞" ].reverse()
  amenities = amenities.filter(amenity => complex[amenity] !== null)
  // const points = amenities.reduce((accum, amenity) => accum + (complex[amenity] === true), 0);
  const points = amenities.filter(amenity => complex[amenity] === true).length
  const base = 10
  const bracketIncrement = base / (levels.length -1) // -1 to make the levels.length exclusive
  const adjustedPoints = +((points / amenities.length) * base).toFixed(0)
  const index = Math.floor(adjustedPoints / bracketIncrement)
  // NOTE: leniency is how nice we wanna be and up the score, it is a final tweak to the scoring system
  // that is mostly artificial
  const leniency = index < levels.length -1 ? 1 : 0
  return levels[index + leniency]
}
