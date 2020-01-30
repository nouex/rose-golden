import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import BeatLoader from 'react-spinners/BeatLoader';

import Filter from '../Filter';
import Sort from '../Sort';
import Favorites from '../Favorites';
import List from '../List';
import MapView from '../MapView';
import ViewButton from '../ViewButton';

const ContentPresentation = ({complexes, isShowingFavorites, onFilterUpdate, onSortUpdate, onToggleFavorite, onToggleFavorites, showLoader, onToggleView, view }) => (
  <div className="list">
    <Filter onUpdate={onFilterUpdate}/>
    { view === "list" ? <Sort onUpdate={onSortUpdate} /> : null }
    <Favorites onClick={onToggleFavorites} isShowingFavorites={isShowingFavorites} />
    <ViewButton onClick={onToggleView} view={view} />
    <Box className="list-overlay" background="light-1" style={{display: showLoader ? "block" : "none"}}><BeatLoader loading margin="4px"/></Box>
    {
      view === "list" ?
        <List complexes={complexes} onToggleFavorite={onToggleFavorite} /> :
        <MapView complexes={complexes} />
    }
  </div>
)

ContentPresentation.propTypes = {
  complexes: PropTypes.array.isRequired,
  isShowingFavorites: PropTypes.bool.isRequired,
  showLoader: PropTypes.bool.isRequired,
  onFilterUpdate: PropTypes.func.isRequired,
  onSortUpdate: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  onToggleFavorites: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired
}

export default ContentPresentation;
