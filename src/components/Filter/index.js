import React from 'react';
import FilterPresentation from "./presentation"
import PropTypes from 'prop-types';

const Filter = ({onFilterUpdate}) => {
  const settings = {
    apple: true,
    banana: true,
    caterpillar: true
  }

  const oldSettings = Object.assign({}, settings)

  const onFieldChange = (name, synEvent) => {
    settings[name] = synEvent.target.checked
  }

  // call submit both on save and when we close the dropdown, rename it to onSave()
  const onSubmit = () => {
    const shouldUpdate = Object.keys(settings).some((name) => settings[name] !== oldSettings[name])
    if (shouldUpdate) {
      Object.assign(oldSettings, settings)
      onFilterUpdate(settings)
    }
  }

  const onDropButtonClose = () => {
    Object.assign(settings, oldSettings)
  }


  return (
    <FilterPresentation onFieldChange={onFieldChange} onSubmit={onSubmit} settings={settings} onDropButtonClose={onDropButtonClose}/>
  )
};

Filter.propTypes = {
  onFilterUpdate: PropTypes.func.isRequired
}

export default Filter
