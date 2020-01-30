import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types'

import ContentPresentation from "./presentation";
import algos from './sorting-algorithms';
import { getValue, toggle } from "../../utils/favorites";

/**
 * Implement with a class component and then try doing the same thing but with hooks.
 * TODO: add propTypes
 */

export class Content extends React.Component {
  allComplexes = null
  filteredComplexesBeforeFavorites = null

  state = {
    complexes: null,
    isShowingFavorites: false,
    showLoader: null,
    view: "list"
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

  static onToggleView() {
    let view

    if (this.state.view === "list")
      view = "map"
    else
      view = "list"

    this.flashLoader() // FIXME: loader doesn't appear
    this.setState({ view })
  }

  constructor(props) {
    super(props)

    this.onFilterUpdate = Content.onFilterUpdate.bind(this)
    this.onSortUpdate = Content.onSortUpdate.bind(this)
    this.onToggleFavorite = Content.onToggleFavorite.bind(this)
    this.onToggleFavorites = Content.onToggleFavorites.bind(this)
    this.flashLoader = Content.flashLoader.bind(this)
    this.onToggleView = Content.onToggleView.bind(this)

    let { data: { postgres: { allComplexesList }}} = props

    if (typeof window !== "undefined")
      Content.setFavorites(allComplexesList)
    allComplexesList = algos.asc.name(allComplexesList)
    this.allComplexes = this.state.complexes = allComplexesList
  }

  render() {
    return <ContentPresentation
            complexes={this.state.complexes}
            isShowingFavorites={this.state.isShowingFavorites}
            showLoader={this.state.showLoader}
            view={this.state.view}
            onToggleView={this.onToggleView}
            onFilterUpdate={this.onFilterUpdate}
            onSortUpdate={this.onSortUpdate}
            onToggleFavorite={this.onToggleFavorite}
            onToggleFavorites={this.onToggleFavorites} />
  }
}


// TODO: use PropTypes.shape instead to be more explicit about what we expect
Content.propTypes = {
  data: PropTypes.object.isRequired,
}

export default () => (
  <StaticQuery
    query={
      graphql`
        query getAllComplexesContent {
          postgres {
  					allComplexesList {
  					  id
              name
              gender
              hasPrivateRoom
              hasMusicRoom
              hasWasher
              hasAirConditioning
              hasCable
              hasWifi
              hasExtraStorage
              hasShuttleService
              hasFitnessCenter
              hasHotTub
              hasOfficeCenter
              isPetFriendly
              isHouse
              minRent
              maxRent
              studentCapacity
              parkingSpaces
              walkToCampus
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
                lat
                lng
              }
  					}
          }
        }
      `}

    render={data => <Content data={data} />}
  />
)
