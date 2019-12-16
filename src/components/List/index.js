import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types'

import ListPresentation from "./presentation";
import algos from './sorting-algorithms';
import { getValue, toggle } from "../../utils/favorites";

/**
 * Implement with a class component and then try doing the same thing but with hooks.
 * TODO: add propTypes
 */

export class List extends React.Component {
  allComplexes = null
  filteredComplexesBeforeFavorites = null

  state = {
    complexes: null,
    isShowingFavorites: false,
    showLoader: null
  }

  static onFilterUpdate(settings) {
    // TODO: optimize by matching agasint settings that are "turned on"
    const filteredComplexes = this.allComplexes.filter(complex => settings.every(setting => setting.isMatch(complex)))
    // TODO: compare nextStae to previous state and update only if they differ

    if (this.state.isShowingFavorites) this.filteredComplexesBeforeFavorites = null

    this.flashLoader()
    this.setState({
      complexes: filteredComplexes,
      isShowingFavorites: false
    })
  }

  static onSortUpdate(sortBy, isAscending) {
    const sortedComplexes = (isAscending ? algos.asc : algos.desc)[sortBy](this.state.complexes )

    this.flashLoader()
    this.setState({
      complexes: sortedComplexes
    })
  }

  static onToggleFavorite(complexId) {
    const complex = this.state.complexes.find(c => c.id === complexId)
    const isFavorite = complex.isFavorite = !complex.isFavorite

    toggle(complexId, isFavorite)

    // FIXME: this will work but is it really the best option ???
    this.forceUpdate()
  }

  static onToggleFavorites() {
    const isShowingFavorites = !this.state.isShowingFavorites
    let complexes

    if (isShowingFavorites) {
      this.filteredComplexesBeforeFavorites = this.state.complexes
      complexes = this.allComplexes.filter(complex => complex.isFavorite)
    } else {
      complexes = this.filteredComplexesBeforeFavorites
      this.filteredComplexesBeforeFavorites = null
    }

    this.flashLoader()
    this.setState({
      isShowingFavorites,
      complexes
    })
  }

  static setFavorites(arr) {
    arr.forEach(complex => complex.isFavorite = getValue(complex.id))
  }

  static flashLoader() {
    this.setState({
      showLoader: true
    })

    setTimeout(() => {
      this.setState({
        showLoader: false
      })
    }, 500)
  }

  constructor(props) {
    super(props)

    this.onFilterUpdate = List.onFilterUpdate.bind(this)
    this.onSortUpdate = List.onSortUpdate.bind(this)
    this.onToggleFavorite = List.onToggleFavorite.bind(this)
    this.onToggleFavorites = List.onToggleFavorites.bind(this)
    this.flashLoader = List.flashLoader.bind(this)

    let { data: { postgres: { allComplexesList }}} = props

    if (typeof window !== "undefined")
      List.setFavorites(allComplexesList)
    allComplexesList = algos.asc.name(allComplexesList)
    this.allComplexes = this.state.complexes = allComplexesList
  }

  render() {
    return <ListPresentation
            complexes={this.state.complexes}
            isShowingFavorites={this.state.isShowingFavorites}
            showLoader={this.state.showLoader}
            onFilterUpdate={this.onFilterUpdate}
            onSortUpdate={this.onSortUpdate}
            onToggleFavorite={this.onToggleFavorite}
            onToggleFavorites={this.onToggleFavorites} />
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
              gender
              hasPrivateRoom
              hasMusicRoom
              hasWasher
              isHouse
              minRent
              maxRent
              studentCapacity
              parkingSpaces
              thumbnail: thumbnailByComplex {
                image: imageByImage {
                  id
                  slug
                }
              }
              contact: contactByContact {
                id
                manager
                address
                phone
                email
                fax
                website
              }
  					}
          }
        }
      `}

    render={data => <List data={data} />}
  />
)
