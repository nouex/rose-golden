import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Text, Compliance,
} from 'grommet';

import DogIcon from '../../../static/icons/dog.svg';
import FeaturesIcon from '../../../static/icons/features.svg';
import GymIcon from '../../../static/icons/gym.svg';
import SpecialIcon from '../../../static/icons/special.svg';

/**
 * NOTE: whenever thes schema of the Complex relation changes, i.e. when we add more possible
 * features to a complex, remember to update this component
 *
 * NOTE: atm we only display boolean attributes
 */

// Feature Types:
// parking
// unique_features
// services
// fitness_and_recreation
// security
// general
// pet_policy

const amenityGroups = Object.create(null);
export const amenities = [];
const GENERAL = Symbol('general');
const UNIQUE_FEATURES = Symbol('unique_features');
const PET_POLICY = Symbol('pet_policy');
const FITNESS_AND_RECREATION = Symbol('fitness_and_recreation');
const groupNames = {
  [GENERAL]: 'General',
  [UNIQUE_FEATURES]: 'Unique Features',
  [PET_POLICY]: 'Pet Policy',
  [FITNESS_AND_RECREATION]: 'Fitness and Recreation',
};

const icons = {
  [GENERAL]: <FeaturesIcon className="custom-icon" />,
  [UNIQUE_FEATURES]: <SpecialIcon className="custom-icon" />,
  [PET_POLICY]: <DogIcon className="custom-icon" />,
  [FITNESS_AND_RECREATION]: <GymIcon className="custom-icon" />,
};

[
  'hasPrivateRoom',
  'hasMusicRoom',
  'hasWasher',
  'hasAirConditioning',
  'hasCable',
  'hasWifi',
].forEach((field) => { amenityGroups[field] = GENERAL; amenities.push(field); });

[
  'hasExtraStorage',
  'hasShuttleService',
].forEach((field) => { amenityGroups[field] = UNIQUE_FEATURES; amenities.push(field); });

[
  'isPetFriendly',
].forEach((field) => { amenityGroups[field] = PET_POLICY; amenities.push(field); });

[
  'hasFitnessCenter',
  'hasHotTub',
].forEach((field) => { amenityGroups[field] = FITNESS_AND_RECREATION; amenities.push(field); });

const names = {
  hasPrivateRoom: 'Private Room',
  hasMusicRoom: 'Music Room',
  hasWasher: 'In-Aparment Washer',
  hasAirConditioning: 'A/C',
  hasCable: 'Cable',
  hasWifi: 'Wifi',
  hasExtraStorage: 'Extra Storage',
  hasShuttleService: 'Shuttle Service',
  isPetFriendly: 'Pet Friendly',
  hasFitnessCenter: 'Fitness Center',
  hasHotTub: 'Hot Tub',
};
// TODO: 'hasOfficeCenter'

const Amenities = ({ attributes }) => {
  const sections = Object.create(null);

  amenities.forEach((a) => {
    if (attributes[a]) {
      const group = amenityGroups[a];
      if (sections[group] === undefined) {
        sections[group] = [];
      }

      sections[group].push(a);
    }
  });

  const rows = [];

  const len = Object.getOwnPropertySymbols(sections).length;
  for (let i = 0; i < len / 3; i++) {
    const row = (
      <Box direction="row" justify="around" wrap>
        {
          Object.getOwnPropertySymbols(sections).slice(i * 3, i * 3 + 3).map(sym => (
            <Box>
              <Heading level="3">
                {groupNames[sym]}
                {icons[sym]}
              </Heading>
              {
                  sections[sym].map(name => (
                    <Box key={name} direction="row" pad={{ bottom: 'small', left: 'xsmall' }}>
                      <Text margin={{ right: 'medium' }}>
                        {`\u2022 ${names[name]}`}
                      </Text>
                    </Box>
                  ))
                }
            </Box>
          ))
        }
      </Box>
    );

    rows.push(row);
  }

  return (
    <Box pad={{ horizontal: '25px' }}>
      {rows}
    </Box>
  );
};

// Features.propTypes = {
//
// }

export default Amenities;
