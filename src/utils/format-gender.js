import React from 'react';
import { Text } from 'grommet';

import GenderBothIcon from '../../static/icons/gender-both.svg';
import GenderMaleIcon from '../../static/icons/gender-male.svg';
import GenderFemaleIcon from '../../static/icons/gender-female.svg';

// TODO: rename to something that resembles what it actually does e.g. getGenderIcon

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

export default formatGender;
