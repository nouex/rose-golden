import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Text,
} from 'grommet';

import PrivateRoomIcon from '../../../static/icons/private-room.svg';
import MusicRoomIcon from '../../../static/icons/music-room.svg';
import WasherIcon from '../../../static/icons/washer.svg';

/**
 * NOTE: whenever thes schema of the Complex relation changes, i.e. when we add more possible
 * features to a complex, remember to update this component
 *
 * NOTE: atm we only display boolean attributes
 */

// key, icon, display name
const amenities = [
  ['isPrivateRoom', <PrivateRoomIcon className="custom-icon" />, 'Private Room'],
  ['hasMusicRoom', <MusicRoomIcon className="custom-icon" />, 'Music Room'],
  ['hasWasher', <WasherIcon className="custom-icon" />, 'In-Apartment Washer'],
  ['hasAirConditioning', <PrivateRoomIcon className="custom-icon" />, 'A/C'],
  ['hasCable', <PrivateRoomIcon className="custom-icon" />, 'TV Cable'],
  ['hasWifi', <PrivateRoomIcon className="custom-icon" />, 'Wifi'],
];

const communityFeatures = [
  ['hasExtraStorage', <PrivateRoomIcon className="custom-icon" />, 'Extra Storage'],
  ['hasHotTub', <PrivateRoomIcon className="custom-icon" />, 'Hot Tub'],
  ['hasOfficeCenter', <PrivateRoomIcon className="custom-icon" />, 'Office Center'],
  ['hasShuttleService', <PrivateRoomIcon className="custom-icon" />, 'Shuttle Service'],
  ['hasFitnessCenter', <PrivateRoomIcon className="custom-icon" />, 'Fitness Center'],
];
const specialFeatures = [
  ['isPetFriendly', <PrivateRoomIcon className="custom-icon" />, 'Pet Friendly'],
];
const specifications = []; // student capacity, parking spaces, initial deposti, ...

function pickFeatures(arr, attr, sectionName) {
  const res = arr.map(([key, icon, displayName]) => {
    if (attr[key] === true) {
      return (
        <Box key={key} direction="row" pad={{ bottom: 'small', left: 'small' }}>
          <Text margin={{ right: 'medium' }}>
            {displayName}
          </Text>
          {icon}
        </Box>
      );
    }
    return null;
  });

  if (res.length > 0) {
    return (
      <Box>
        <Heading level="2">{sectionName}</Heading>
        {res}
      </Box>
    );
  }
  return null;
}

const Features = ({ attributes }) => (
  <div>
    { pickFeatures(amenities, attributes, 'Amenities') }
    { pickFeatures(communityFeatures, attributes, 'Community Features') }
    { pickFeatures(specialFeatures, attributes, 'Special Features') }
  </div>
);

// Features.propTypes = {
//
// }

export default Features;
