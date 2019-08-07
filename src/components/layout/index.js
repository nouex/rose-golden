/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

// NOTE: minHeight: "100vh" is a hack so that the footer is not mid screen when we don't have enough
// content to show in <List />


import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { hpe } from 'grommet-theme-hpe';
import { Grommet, Box } from 'grommet';

import Header from '../header';
import Footer from '../Footer';
import './style.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Grommet theme={hpe}>
          <Box background="light-1">
            <Header siteTitle={data.site.siteMetadata.title} />
            <Box
              style={{
                minHeight: '100vh',
              }}
              margin="0"
              width="100%"
              pad={{ horizontal: '120px' }}
              className="content"
            >
              <Box as="main" width="xlarge" margin={{ horizontal: 'auto' }}>{children}</Box>
            </Box>
            <Footer />
          </Box>
        </Grommet>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
