import React from 'react';
import PropTypes from 'prop-types';

import SortPresentation from './presentation';

class Sort extends React.PureComponent {
  state = {
    currentValue: "name",
    isAscending: true
  }

  saved = {
    value: name,
    isAscending: true
  }

  static onSave() {
    if (this.saved.value !== this.state.currentValue || this.saved.isAscending !== this.state.isAscending) {
      this.saved.value = this.state.currentValue
      this.saved.isAscending = this.state.isAscending
      this.props.onUpdate(this.saved.value, this.saved.isAscending)
    }
  }

  static onChange({target: {value}}) {
    this.setState({
      currentValue: value
    })
  }

  static onClose() {
    this.setState({
      currentValue: this.saved.value,
      isAscending: this.saved.isAscending
    })
  }

  static onOrderChange() {
    this.setState({
      isAscending: !this.state.isAscending
    })
  }

  constructor(props) {
    super(props);

    this.onSave = Sort.onSave.bind(this)
    this.onChange = Sort.onChange.bind(this)
    this.onClose = Sort.onClose.bind(this)
    this.onOrderChange = Sort.onOrderChange.bind(this)
  }

  render() {
    return (
      <SortPresentation onSave={this.onSave} onChange={this.onChange} onClose={this.onClose} onOrderChange={this.onOrderChange} value={this.state.currentValue} isAscending={this.state.isAscending}/>
    )
  }
}

Sort.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default Sort;
