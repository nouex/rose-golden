import React from 'react';
import PropTypes from 'prop-types';
import {Box} from 'grommet';

import Complex from '../Complex';

const List = ({complexes}) => (
  <div className="list">
    <Box
      direction="row"
      justify="evenly"
      pad="large"
      background="light-2"
      gap="medium"
      wrap
      >
      { complexes.map(comp => <Complex complex={comp} key={comp.id}/>) }
    </Box>
  </div>
)

List.propTypes = {
  complexes: PropTypes.array.isRequired
}

export default List;
