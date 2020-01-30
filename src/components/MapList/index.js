import React from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from "react-animate-height";
import { Box, Heading, Text, Button } from 'grommet';
import { FormDown as ArrowDownIcon } from 'grommet-icons';
import { Link } from 'gatsby';
import slug from 'slug';

import { amenities } from '../Amenities';
import formatPriceRange from '../../utils/format-price-range';
import formatGender from '../../utils/format-gender';
import formatAmenityScore from '../../utils/format-amenity-score';
import WalkerIcon from '../../../static/icons/walker.svg';

const MapList = ({ complexes, onHoverChange, hoveredId, activeId, onActiveChange }) => {
  const onMouseEnter = (id) => onHoverChange(id, true)
  const onMouseLeave = (id) => onHoverChange(id, false)

  return (
    <Box width="30%" height="700px" overflow="scroll">
      {
        complexes.map((comp) => {
          const isHovered = comp.id === hoveredId
          const isActive = comp.id === activeId

          const rent = formatPriceRange(comp.minRent, comp.maxRent)
          const gender = formatGender(comp)
          const walkDistance = <Box direction="row"><WalkerIcon className="custom-icon"/><Text>{`${comp.walkToCampus} min to The Crossroads`}</Text></Box>
          const amenityScore = "Amenity Score: " + formatAmenityScore(comp, amenities)
          const linkTo = `/${slug(comp.name)}`

          return (
            <Box key={comp.id} border={{ side: "bottom" }} pad="small"
                 background={isActive || isHovered ? "light-3" : "transparent"}
                 pad={{ bottom: "0", left: "small" }}
                 onMouseEnter={onMouseEnter.bind(null, comp.id)}
                 onMouseLeave={onMouseLeave.bind(null, comp.id)}
                 onClick={onActiveChange.bind(null, comp.id)}
                 style={{minHeight: "min-content" }}
                 as="article"
                 >
              <Box margin={{ bottom: "xsmall"}}>
                <Heading level="1" size="23px" margin={{ bottom: "xsmall" }}
                  className="map-list-item-heading">
                  {comp.name}
                </Heading>
              </Box>
              <Box>{ rent } </Box>
              <AnimateHeight height={isActive ? "auto" : "0"}>
                <Box>
                  <Box>{ gender }</Box>
                  <Box>{ walkDistance }</Box>
                  <Box>
                    <Text>{ amenityScore }</Text>
                  </Box>
                  <Box width="medium" margin={{ vertical: "xsmall" }} align="center"><Link to={ linkTo }><Button color="neutral-5" label="View Complex"/></Link></Box>
                </Box>
              </AnimateHeight>
              {
                isActive ?
                  null :
                  <ArrowDownIcon
                    size="medium"
                    style={{ visibility: isHovered ? "visible" : "hidden" }}
                    className="map-list-item-arrow"/>
              }
            </Box>
          )
        })
      }
    </Box>
  )
}

MapList.propTypes = {
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

export default MapList
