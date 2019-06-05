import React from 'react';
import PropTypes from 'prop-types';

const List = ({complexes}) => (
  <div>
    {
      complexes.map(comp => (
            <div>
              <span key={comp.id}>
                {comp.name}
              </span>
              <break/>
            </div>
      ))
    }
  </div>
)

List.propTypes = {
  complexes: PropTypes.array.isRequired
}

export default List;
