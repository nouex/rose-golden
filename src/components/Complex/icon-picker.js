import React from 'react';
import { Text } from 'grommet';

import GenderBothIcon from '../../../static/icons/gender-both.svg';
import GenderMaleIcon from '../../../static/icons/gender-male.svg';
import GenderFemaleIcon from '../../../static/icons/gender-female.svg';
// import HouseIcon from "../../images/icon-house.svg";
import PrivateRoomIcon from '../../../static/icons/private-room.svg';
import MusicRoomIcon from '../../../static/icons/music-room.svg';
import WasherIcon from '../../../static/icons/washer.svg';

const displayText = {
  hasPrivateRoom: "Private Room",
  hasMusicRoom: "Music Room",
  hasWasher: "Washer Available",
  B: "Men and Women's Housing",
  M: "Men's Housing",
  F: "Women's Housing"
}

// TODO: you're prolly gonna wanna export the array of functions for testing
// QUESTION: is using the index a wrong use for 'key' prop
function iconPicker(complex) {
  return [
    function gender(c) {
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

      return <div>{icon}<Text>{displayText[c.gender]}</Text></div>
    },
    generateFnFromBoolAttribute('hasPrivateRoom', PrivateRoomIcon),
    generateFnFromBoolAttribute('hasMusicRoom', MusicRoomIcon),
    generateFnFromBoolAttribute('hasWasher', WasherIcon),
  ].map(fn => fn(complex)).filter(_ => _);
}

export default iconPicker;

function generateFnFromBoolAttribute(attribute, type) {
  return c => (
    c[attribute]
      ? <div>{React.createElement(type, { className: 'custom-icon', key: attribute })}<Text>{displayText[attribute]}</Text></div>
      : null
  );
}
