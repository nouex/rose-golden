import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading,
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
  ['isPrivateRoom', <PrivateRoomIcon />, 'Private Room'],
  ['hasMusicRoom', <MusicRoomIcon />, 'Music Room'],
  ['hasWasher', <WasherIcon />, 'In-Apartment Washer'],
];
const communityFeatures = [];
const specialFeatures = [];

function pickFeatures(arr, attr) {
  return arr.map(([key, icon, displayName]) => {
    if (attr[key] === true) {
      return (
        <div>
          <span>{displayName}</span>
          {icon}
        </div>
      );
    }
    return null;
  });
}

const Features = ({ attributes }) => (
  <div>
    <Box>
      <Heading level="2">Amenities</Heading>
      { pickFeatures(amenities, attributes) }
    </Box>

    <Box>
      <Heading level="2">Special Features</Heading>
      { /* pickFeatures(communityFeatures) */}
    </Box>

    <Box>
      <Heading level="2">Community Features</Heading>
      { /* pickFeatures(specialFeatures) */}
    </Box>
  </div>
);

// Features.propTypes = {
//
// }

export default Features;
