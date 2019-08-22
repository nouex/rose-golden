// TODO: use a different dat structure that suites us better, instead of array, for settings

/**
 * isMatch()      object setting matches the given complex row, so it is not to be filtered out
 * hasChanged()   old  setting value is not equal to current setting value
 * assignValue()  assigns a value derived from syntheticEvent into the value field of the setting
 */

export const typeHandlers = {
  "bool" : {
    isMatch: function (complex) {return false === this.value || complex[this.key] === true},
    hasChanged: function (oldSetting) { return this.value !== oldSetting.value},
    assignValue: function (synEvent) { return this.value = synEvent.target.checked }
  },
  "range": {
    isMatch: function (complex) {
      const [ selectedV1, selectedV2 ] = this.value,
            { [ this.key[0] ]: complexV1, [ this.key[1] ]: complexV2} = complex

      // TODO: use an assertion lib
      if (selectedV1 > selectedV2) throw new Error("`Invalid: selectedV1 > selectedV2`")
      if (complexV1 > complexV2) throw new Error("`Invalid: complexV1 > complexV2`")

      return !(selectedV2 < complexV1 || selectedV1 > complexV2)
    },
    hasChanged: function (oldSetting) {
      return this.value[0] !== oldSetting.value[0] || this.value[1] !== oldSetting.value[1]
    },
    assignValue: function (range) {
      this.value = [range.min, range.max]
    }
  },
  "gender": {
    isMatch: function (complex) {return "B" === this.value || complex[this.key] === this.value || "B" === complex[this.key]},
    hasChanged: function (oldSetting) {return this.value !== oldSetting.value},
    assignValue: function (synEvent) { this.value = synEvent.target.value }
  },
  // "int": {
  //   isMatch: null,
  //   hasChanged: null,
  //   assignValue: null
  // }
}

// NOTE: settings are rendered in this order
/**
 * {
   type: bool|range|gender|int,
   value: null|bool|int|arr(2), // null: it doesn't apply, arr: range, bool and int: strict comparison
   key: string|arr(2) // arr only applies to range values
   name: string
 }

 */
const settings = [
  {
    type: "gender",
    value: "M",
    key: "gender",
    name: "Gender"
  },
  {
    type: "range",
    value: [1000, 1300],
    key: ["minRent", "maxRent"],
    name: "Price Range"
  },
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
  }
]


settings.forEach(setting => {
  setting.isMatch = typeHandlers[setting.type].isMatch
  setting.hasChanged = typeHandlers[setting.type].hasChanged
  setting.assignValue = typeHandlers[setting.type].assignValue
})

export default settings
