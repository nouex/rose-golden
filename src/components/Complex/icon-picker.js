import React from 'react';

import GenderBothIcon from '../../images/icons/gender-both.svg';
import GenderMaleIcon from '../../images/icons/gender-male.svg';
import GenderFemaleIcon from '../../images/icons/gender-female.svg';
// import HouseIcon from "../../images/icon-house.svg";
import PrivateRoomIcon from '../../images/icons/private-room.svg';
import MusicRoomIcon from '../../images/icons/music-room.svg';
import WasherIcon from '../../images/icons/washer.svg';

// TODO: you're prolly gonna wanna export the array of functions for testing
// QUESTION: is using the index a wrong use for 'key' prop
function iconPicker(complex) {
  return [
    function gender(c) {
      switch (c.gender) {
        case 'B':
          return <GenderBothIcon className="custom-icon" key="gender-both-icon" />;

        case 'M':
          return <GenderMaleIcon className="custom-icon" key="gender-male-icon" />;

        case 'F':
          return <GenderFemaleIcon className="custom-icon" key="gender-female-icon" />;

        default:
          throw new TypeError(`Uknown gender value for ${c.name}`);
      }
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
      ? React.createElement(type, { className: 'custom-icon', key: attribute })
      : null
  );
}
