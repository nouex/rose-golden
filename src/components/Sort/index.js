import React from 'react';
import PropTypes from 'prop-types';

import SortPresentation from './presentation';

class Sort extends React.PureComponent {
  savedValue = "name"
  state = {
    currentValue: "name"
  }

  static onSave() {
    if (this.savedValue !== this.state.currentValue) {
      this.savedValue = this.state.currentValue
      this.props.onUpdate(this.savedValue)
    }
  }

  static onChange({target: {value}}) {
    this.setState({
      currentValue: value
    })
  }

  static onClose() {
    this.setState({
      currentValue: this.savedValue
    })
  }

  constructor(props) {
    super(props);

    this.onSave = Sort.onSave.bind(this)
    this.onChange = Sort.onChange.bind(this)
    this.onClose = Sort.onClose.bind(this)
  }

  render() {
    return (
      <SortPresentation onSave={this.onSave} onChange={this.onChange} onClose={this.onClose} value={this.state.currentValue}/>
    )
  }
}

Sort.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default Sort;
