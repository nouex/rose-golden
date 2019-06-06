import React from 'react';
import PropTypes from 'prop-types';

const Complex = ({complex: comp}) => {
  return (
    <article>
      <span>
        {comp.name}
      </span>
      <break/>
    </article>

  )
};;

Complex.propTypes = {
  complex: PropTypes.object.isRequired
}

export default Complex
