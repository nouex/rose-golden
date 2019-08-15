import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import FilterPresentation from "./presentation"

// TODO: use a different dat structure that suites us better, instead of array, for settings
// TODO:  think of the side effects of deep copying

export const findSettingByKey = (settings, key) => settings.find(setting => setting.key === key)

const initialSettings = [
  {
    type: "bool",
    value: false,
    key: "hasPrivateRoom",
    name: "Private Room"
  },
  {
    type: "bool",
    value: false,
    key: "hasMusicRoom",
    name: "Music Room"
  },
  {
    type: "bool",
    value: false,
    key: "hasWasher",
    name: "Washer"
  },
  {
    type: "bool",
    value: false,
    key: "isHouse",
    name: "House"
  },
  // {
  //   type: "range",
  //   value: [1000, 1300],
  //   key: ["minRent", "maxRent"],
  //   name: "Price Range"
  // }
]

export const types = {
  "bool" : {
    isMatch: function (complex) {return false === this.value || complex[this.key] === true},
    hasChanged: function (oldSetting) { return this.value !== oldSetting.value},
    assignValue: function (synEvent) { return this.value = synEvent.target.checked }
  },
  "range": {
    isMatch: function (complex) {
      const [ selectedV1, selectedV2 ] = this.value,
            { [ this.key[0] ]: complexV1, [ this.key[1] ]: complexV2} = complex

      if (selectedV1 > selectedV2) throw new Error("`Invalid: selectedV1 > selectedV2`")
      if (copmlexV1 > complexV2) throw new Error("`Invalid: complexV1 > complexV2`")

      return !(selectedV2 < copmlexV1 || selectedV1 > copmlexV2)
    },
    hasChanged: function (oldSetting) {
      return this.value[0] !== oldSetting.value[0] || this.value[1] !== oldSetting.value[1]
    },
    assignValue: (synEvent) => {
      // ...
    }
  },
  "gender": {
    isMatch: function (complex) {complex[this.key] === this.value},
    hasChanged: function (oldSetting) {this.value !== oldSetting.value},
    assignValue: function (synEvent) {this.value = synEvent.target.value} // FIXME: not sure
  },
  // "int": {
  //   isMatch: null,
  //   hasChanged: null,
  //   assignValue: null
  // }
}

initialSettings.forEach(setting => {
  setting.isMatch = types[setting.type].isMatch
  setting.hasChanged = types[setting.type].hasChanged
  setting.assignValue = types[setting.type].assignValue
})

class Filter extends React.PureComponent {
  state = {
    settings: initialSettings
  }

  oldSettings = null

  /**
   * isMatch()      object setting matches the given complex row, so it is not to be filtered out
   * hasChanged()   old  setting value is not equal to current setting value
   * assignValue()  assigns a value derived from syntheticEvent into the value field of the setting
   */

  constructor(props) {
    super(props);

    this.oldSettings = cloneDeep(this.state.settings)
  }

  // TODO: make these lambda functions into static methods for testing
  render() {
    const onFieldChange = (key, synEvent) => {
      const setting = findSettingByKey(this.state.settings, key)
      setting.assignValue(synEvent)
    }

    const onSave = () => {
      const shouldUpdate = this.state.settings.some(setting => {
        return setting.hasChanged(findSettingByKey(this.oldSettings, setting.key))
      })

      if (shouldUpdate) {
        this.oldSettings = cloneDeep(this.state.settings)
        this.props.onUpdate(this.state.settings)
      }
    }

    const onDropButtonClose = () => {
      // TODO: optimize by cloning only if they differ, thereby avoiding an unecessary re-render
      this.setState({
        settings: cloneDeep(this.oldSettings)
      })
    }


    return (
      <FilterPresentation onFieldChange={onFieldChange} onSave={onSave} onDropButtonClose={onDropButtonClose} settings={this.state.settings} />
    )
  }
}

Filter.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default Filter
