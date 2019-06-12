import React from 'react';
import FilterPresentation from "./presentation"
import PropTypes from 'prop-types';

class Filter extends React.PureComponent {
  settings = {
    hasPrivateRoom: false,
    hasMusicRoom: false,
    hasWasher: false,
    isHouse: false
  }

  oldSettings = null

  constructor(props) {
    super(props);

    this.oldSettings = Object.assign({}, this.settings)
  }

  // TODO: make these lambda functions into static methods for testing
  render() {
    const { settings } = this

    const onFieldChange = (name, synEvent) => {
      settings[name] = synEvent.target.checked
    }

    const onSubmit = () => {
      const shouldUpdate = Object.keys(settings).some((name) => settings[name] !== this.oldSettings[name])
      if (shouldUpdate) {
        Object.assign(this.oldSettings, settings)
        this.props.onUpdate(settings)
      }
    }

    const onDropButtonClose = () => {
      Object.assign(settings, this.oldSettings)
    }


    return (
      <FilterPresentation onFieldChange={onFieldChange} onSubmit={onSubmit} settings={settings} onDropButtonClose={onDropButtonClose}/>
    )
  }
}

Filter.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default Filter
