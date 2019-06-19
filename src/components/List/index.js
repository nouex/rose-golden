import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types'

import ListPresentation from "./presentation";
import sortingAlgorithms from './sorting-algorithms';

/**
 * Implement with a class component and then try doing the same thing but with hooks.
 * TODO: add propTypes
 */

export class List extends React.Component {
  allComplexes = null

  state = {
    complexes: null
  }

  static onFilterUpdate(settings) {
    const fieldsThatMustBeTruthy = Object.keys(settings).filter((name) => settings[name])
    const filteredComplexes = this.allComplexes.filter((complex) => fieldsThatMustBeTruthy.every((name) => complex[name] === true))
    // TODO: compare nextStae to previous state and update only if they differ
    this.setState({
      complexes: filteredComplexes
    })
  }

  static onSortUpdate(sortBy) {
    const sortedComplexes = sortingAlgorithms[sortBy](this.state.complexes)
    this.setState({
      complexes: sortedComplexes
    })
  }

  constructor(props) {
    super(props)

    this.onFilterUpdate = List.onFilterUpdate.bind(this)
    this.onSortUpdate = List.onSortUpdate.bind(this)

    let { data: { postgres: { allComplexesList }}} = props
    allComplexesList = sortingAlgorithms.name(allComplexesList)
    this.allComplexes = this.state.complexes = allComplexesList
  }

  render() {
    return <ListPresentation complexes={this.state.complexes} onFilterUpdate={this.onFilterUpdate} onSortUpdate={this.onSortUpdate} />
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
              hasPrivateRoom
              hasMusicRoom
              hasWasher
              isHouse
              minRent
              maxRent
              studentCapacity
              parkingSpaces
              imageByThumbnail {
                id
                slug
              }
  					}
          }
        }
      `}

    render={data => <List data={data} />}
  />
)
