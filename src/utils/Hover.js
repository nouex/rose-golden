import React from 'react';

// QUESTION: does this belong in utils/ or components/
// TODO: rewrite this using hooks

class Hover extends React.Component {
  constructor(p) {
    super(p)
    console.log("HOVER: constructed")
  }

  shouldComponentUpdate(nextProps) {
    this.shouldCb = this.props.$hover !== nextProps.$hover
    return this.props.$hover !== nextProps.$hover || this.props.isHovered !== nextProps.isHovered
  }

  render() {
    console.log("HOVER: ", this.props)
    if (this.shouldCb)
      this.props.cb(this.props.$hover)
    return this.props.children
  }
}



export default Hover
