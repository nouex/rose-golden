import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Map from '../Map';
import MapList from '../MapList';

const MapViewPresentation = ({ complexes, onHoverChange, hoveredId, activeId, onActiveChange }) => (
  <Box direction="row" margin={{top: "small"}}>
    <Map complexes={complexes} onHoverChange={onHoverChange} hoveredId={hoveredId}
         activeId={activeId} onActiveChange={onActiveChange} />
    <MapList complexes={complexes} onHoverChange={onHoverChange} hoveredId={hoveredId}
             activeId={activeId} onActiveChange={onActiveChange} />
  </Box>
)

MapViewPresentation.propTypes = {
  complexes: PropTypes.array.isRequired,
  onHoverChange: PropTypes.func.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  hoveredId: (props, propName, componentName) => {
    // can be either UUID or null
    if (props[propName] === undefined) return new TypeError("'hoveredId' was undefined")
  },
  activeId: (props, propName, componentName) => {
    // can be either UUID or null
    if (props[propName] === undefined) return new TypeError("'activeId' was undefined")
  },
}

export default MapViewPresentation
