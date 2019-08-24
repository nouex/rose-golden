import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Complex from '../Complex';
import Filter from '../Filter';
import Sort from '../Sort';
import Favorites from '../Favorites';

const List = ({complexes, showFavorites, onFilterUpdate, onSortUpdate, onToggleFavorite, onFavoritesClick }) => (
  <div className="list">
    <Filter onUpdate={onFilterUpdate}/>
    <Sort onUpdate={onSortUpdate} />
    <Favorites onClick={onFavoritesClick} showFavorites={showFavorites} />
    <Box
      direction="row"
      justify="between"
      wrap
      margin={{top: "xsmall"}}
      >
      {
        complexes.map(comp =>
          <Complex
            complex={comp}
            key={comp.id}
            onToggleFavorite={onToggleFavorite.bind(null, comp.id)} />)
      }
    </Box>
  </div>
)

List.propTypes = {
  complexes: PropTypes.array.isRequired,
  showFavorites: PropTypes.bool.isRequired,
  onFilterUpdate: PropTypes.func.isRequired,
  onSortUpdate: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  onFavoritesClick: PropTypes.func.isRequired
}

export default List;
