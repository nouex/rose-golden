import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types'

/**
 * Implement with a class component and then try doing the same thing but with hooks.
 * TODO: add propTypes
 */

export class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data: { postgres: { allComplexesList }}} = this.props

    return allComplexesList.map(postGraphileNode => <p key={postGraphileNode.id}>{postGraphileNode.name}</p>)
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

    render={data => <List data={data} /> }
  />
)
