import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types'

import ListPresentation from "./presentation";

/**
 * Implement with a class component and then try doing the same thing but with hooks.
 * TODO: add propTypes
 */

export class List extends React.Component {
  state = {
    complexes: null
  }

  static onFilterUpdate(self, settings) {
    void(0)
    // const updatedComplexes =  // ...
    // self.setState({
    //   complexes: updatedComplexes
    // })
  }

  constructor(props) {
    super(props)

    this.onFilterUpdate = List.onFilterUpdate.bind(this)

    const { data: { postgres: { allComplexesList }}} = props
    this.state.complexes = allComplexesList
  }

  render() {
    return <ListPresentation complexes={this.state.complexes} onFilterUpdate={this.onFilterUpdate}/>
  }
}


// TODO: use PropTypes.shape instead to be more explicit about what we expect
List.propTypes = {
  data: PropTypes.object.isRequired
}

export default () => (
  <StaticQuery
    query={
      graphql`
        query getAllComplexesList {
          postgres {
  					allComplexesList {
  					  id
              name
  					}
          }
        }
      `}

    render={data => <List data={data} />}
  />
)
