import React from 'react';
import PropTypes from 'prop-types';
import { Indicator } from 'grommet-icons';

const genderColors = {
  M: "#89cff0",
  F: "#FFC0CB",
  B: "#B19CD9"
}

class Marker extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.$hover !== this.props.$hover ) this.props.cb(this.props.$hover)
  }

  render() {
    return (
      <Indicator
        color={this.props.isActive ? "brand" : genderColors[this.props.gender] }
        size={this.props.isHovered ? "27px" : "medium" }
        onClick={this.props.onClick}
        />
    )
  }
}

Marker.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  gender: PropTypes.oneOf(["M", "F", "B"]).isRequired
}

export default Marker
