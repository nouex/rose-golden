import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

/**
  * https://github.com/gatsbyjs/gatsby/issues/2293#issuecomment-452460620
  */

export default class ComplexImage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
           query {
             allImageSharp {
               edges {
                 node {
                   fixed(width: 318, height: 190) {
                     ...GatsbyImageSharpFixed
                   }
                 }
               }
             }
           }
         `}
        render={data => (
          <Img fixed={data.allImageSharp.edges.find((element) => {
            // Match string after final slash
            const right = this.props.name.split('.').shift();
            const left = element.node.fixed.src.split('/').pop().split('.').shift();
            return left === right;
          }).node.fixed}
          />
        )}
      />
    );
  }
}

ComplexImage.propTypes = {
  name: PropTypes.string.isRequired,
};
