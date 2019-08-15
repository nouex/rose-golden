import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import FilterPresentation from "./presentation"

// TODO: use a different dat structure that suites us better, instead of array, for settings

export const findSettingByKey = (settings, key) => settings.find(setting => setting.key === key)

class Filter extends React.PureComponent {
  state = {
    settings: [
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
  }

  oldSettings = null

  // TODO: i think we should export the types object, bc isMatch() will be used by <List /> to
  // filter
  /**
   * isMatch()      object setting matches the given complex row, so it is not to be filtered out
   * hasChanged()   old  setting value is not equal to current setting value
   * assignValue()  assigns a value derived from syntheticEvent into the value field of the setting
   */
  types = {
    "bool" : {
      isMatch: function (complex) {return false === this.value || complex[this.key] === true},
      hasChanged: (o1, o2) => o1.value !== o2.value,
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

  constructor(props) {
    super(props);

    // QUESTION:  think of the side effects of NOT deep copying
    // TODO: settings.forEach... assing methods per type
    const {state: {settings}, types} = this
    settings.forEach(setting => {
      setting.isMatch = types[setting.type].isMatch
      setting.hasChanged = types[setting.type].hasChanged
      setting.assignValue = types[setting.type].assignValue
    })
    this.oldSettings = cloneDeep(this.state.settings)
  }

  // TODO: make these lambda functions into static methods for testing
  render() {
    const onFieldChange = (key, synEvent) => {
      const setting = findSettingByKey(this.state.settings, key)
      setting.assignValue(synEvent)
    }

    const onSave = () => {
      /// NOTE: since we use the 'ind' of the new settings to get it form the old settings then order
      // must not change when cloning... just use findSettingByKey() instead
      const shouldUpdate = this.state.settings.some((setting, ind) => setting.hasChanged(this, this.oldSettings[ind]))

      if (shouldUpdate) {
        this.oldSettings = cloneDeep(this.state.settings)
        this.props.onUpdate(this.state.settings)
      }
    }

    const onDropButtonClose = () => {
      this.setState({
        settings: cloneDeep(this.oldSettings)
      })
    }


    return (
      <FilterPresentation onFieldChange={onFieldChange} onSave={onSave} settings={this.state.settings} onDropButtonClose={onDropButtonClose}/>
    )
  }
}

Filter.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default Filter
