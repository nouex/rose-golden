import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';

const ViewButton = ({ onClick, view }) => {
  const label = view === "list" ? "View Map" : "View Grid"
  return <Button className="view-btn" label={label} onClick={onClick} />
}

ViewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired
}

export default ViewButton
