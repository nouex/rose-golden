import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Complex from '../Complex';
import Filter from '../Filter';
import Sort from '../Sort';
import Favorites from '../Favorites';

const List = ({complexes, isShowingFavorites, onFilterUpdate, onSortUpdate, onToggleFavorite, onToggleFavorites }) => (
  <div className="list">
    <Filter onUpdate={onFilterUpdate}/>
    <Sort onUpdate={onSortUpdate} />
    <Favorites onClick={onToggleFavorites} isShowingFavorites={isShowingFavorites} />
    <Box
      direction="row"
      justify="between"
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
  isShowingFavorites: PropTypes.bool.isRequired,
  onFilterUpdate: PropTypes.func.isRequired,
  onSortUpdate: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  onToggleFavorites: PropTypes.func.isRequired
}

export default List;
