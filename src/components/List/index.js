import React from 'react';
import PropTypes from 'prop-types';

import Complex from '../Complex';

const List = ({complexes}) => (
  <div className="list">
    {
      complexes.map(comp => <Complex complex={comp} key={comp.id}/>)
    }
  </div>
)

List.propTypes = {
  complexes: PropTypes.array.isRequired
}

export default List;
