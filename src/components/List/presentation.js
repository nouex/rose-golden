import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Complex from '../Complex';
import Filter from '../Filter';
import Sort from '../Sort';

const List = ({complexes, onFilterUpdate, onSortUpdate}) => (
  <div className="list">
    <Filter onUpdate={onFilterUpdate}/>
    <Sort onUpdate={onSortUpdate} />
    <Box
      direction="row"
      justify="evenly"
      background="light-2"
      wrap
      margin={{top: "xsmall"}}
      >
      { complexes.map(comp => <Complex complex={comp} key={comp.id}/>) }
    </Box>
  </div>
)

List.propTypes = {
  complexes: PropTypes.array.isRequired,
  onFilterUpdate: PropTypes.func.isRequired,
  onSortUpdate: PropTypes.func.isRequired
}

export default List;
