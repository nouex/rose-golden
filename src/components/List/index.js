import React from 'react';
import PropTypes from 'prop-types';
import {Box} from 'grommet';

import Complex from '../Complex';
import Filter from '../Filter';

const List = ({complexes, onFilterUpdate}) => (
  <div className="list">
    <Filter onFilterUpdate={onFilterUpdate}/>
    <Box
      direction="row"
      justify="evenly"
      background="light-2"
      wrap
      >
      { complexes.map(comp => <Complex complex={comp} key={comp.id}/>) }
    </Box>
  </div>
)

List.propTypes = {
  complexes: PropTypes.array.isRequired,
  onFilterUpdate: PropTypes.func.isRequired
}

export default List;
