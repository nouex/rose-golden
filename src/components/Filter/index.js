import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import FilterPresentation from "./presentation"
import initialSettings from './settings.js';
import { findSettingByKey } from './utils.js';

// TODO:  think of the side effects of deep copying
// TODO: as of now, we replace state.settings to trigger a re-render, however it would be more
//       ideal if we replaced only what we changed and triggered a re-render

class Filter extends React.PureComponent {
  state = {
    settings: initialSettings
  }

  oldSettings = null

  constructor(props) {
    super(props);

    this.oldSettings = cloneDeep(this.state.settings)
  }

  // TODO: make these lambda functions into static methods for testing
  render() {
    const onFieldChange = (key, synEvent) => {
      const setting = findSettingByKey(this.state.settings, key)
      setting.assignValue(synEvent)
      this.setState({
        settings: cloneDeep(this.state.settings)
      })
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
