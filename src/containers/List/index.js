import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
