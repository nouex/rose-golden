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
    return (
      <span> This is the List Component</span>
    )
  }
}

export default () => (
  <StaticQuery
    query={
      graphql`
        query someQuery {
          site {
            stuff
          }
        }
      `}

    render={data => {
      return (
        <List data={data} />
      )
    }}
)
