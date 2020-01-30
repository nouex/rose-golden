import React from 'react';
import PropTypes from 'prop-types';

import MapViewPresentation from './presentation';

class MapView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state= {
      hoveredId: null,
      activeId: null
    }

    this.onHoverChange = this.onHoverChange.bind(this)
    this.onActiveChange = this.onActiveChange.bind(this)
  }

  onHoverChange(complexId, isHovered) {
    if (false === isHovered) this.setState({ hoveredId: null })
    else this.setState({ hoveredId: complexId })
  }

  onActiveChange(complexId) {
    this.setState({ activeId: complexId })
  }

  render() {
    return (
      <MapViewPresentation
        complexes={this.props.complexes} onHoverChange={this.onHoverChange}
        hoveredId={this.state.hoveredId} activeId={this.state.activeId}
        onActiveChange={this.onActiveChange} />
    )
  }
}

MapView.propTypes = {
  complexes: PropTypes.array.isRequired
}

export default MapView
