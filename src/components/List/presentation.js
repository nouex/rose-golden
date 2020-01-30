import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Complex from '../Complex';

const List = ({complexes, onToggleFavorite }) => (
  <div className="list">
    <Box
      direction="row"
      justify="around"
      wrap
      margin={{top: "small"}}
      >
      {
        (
          complexes.length > 0 ?
            complexes.map(comp =>
              <Complex
                complex={comp}
                key={comp.id}
                onToggleFavorite={onToggleFavorite.bind(null, comp.id)} />) :
            "Nothing to show"
        )
      }
    </Box>
  </div>
)

List.propTypes = {
  complexes: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default List;
