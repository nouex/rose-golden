import React from 'react';
import PropTypes from 'prop-types';

import ComplexPresentation from './presentation';
import formatter from "../../utils/currency-formatter";
import iconPicker from './icon-picker';

const Complex = ({complex: c}) => {
  const rent =
    c.minRent === c.maxRent ?
     formatter.format(c.minRent) :
     `${formatter.format(c.minRent)} - ${formatter.format(c.maxRent)}`

  const data = Object.assign({}, c, { rent })

  const icons = iconPicker(c)

  return (
    <ComplexPresentation data={data} icons={icons}/>
  )
}

Complex.propTypes = {
  complex: PropTypes.object.isRequired
}

export default Complex
