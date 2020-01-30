import React from 'react';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Marker from '../Marker';

const { GOOGLE_API_KEY } = process.env
if (GOOGLE_API_KEY === undefined) throw new Error('Goole API Key is undefined');

const Map = ({ complexes, onHoverChange, hoveredId, activeId, onActiveChange }) => {
  return (
    <Box style={{ height: '700px', width: '70%' }}>
      <GoogleMap
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={{
          lat: 43.818078,
          lng: -111.782508
        }}
        defaultZoom={14}
        >
          {
            complexes.map(
              comp => {
                const isHovered = comp.id === hoveredId
                const isActive = comp.id === activeId

                return (
                  <Marker isHovered={isHovered} cb={onHoverChange.bind(null, comp.id)}
                          lat={comp.contact.lat} lng={comp.contact.lng} key={comp.id}
                          isActive={isActive} onClick={onActiveChange.bind(null, comp.id)}
                          gender={comp.gender}
                          />
                )
              }
            )
          }
        </GoogleMap>
    </Box>
  )
}

Map.propTypes = {
  complexes: PropTypes.array.isRequired,
  onHoverChange: PropTypes.func.isRequired,
  hoveredId: (props, propName, componentName) => {
    // can be either UUID or null
    if (props[propName] === undefined) return new TypeError("'hoveredId' was undefined")
  },
  activeId: (props, propName, componentName) => {
    // can be either UUID or null
    if (props[propName] === undefined) return new TypeError("'activeId' was undefined")
  },
  onActiveChange: PropTypes.func.isRequired
}

export default Map
