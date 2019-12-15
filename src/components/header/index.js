import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box, Heading, Button, Anchor,
} from 'grommet';
import { isBrowser } from 'browser-or-node';

import HoneypotIcon from '../../../static/icons/honeypot.svg';

const Header = ({ siteTitle, location }) => (
  <Box
    as="header"
    background="light-3"
    pad={{ bottom: 'small', horizontal: 'xlarge' }}
    margin={{ bottom: '1.45rem' }}
    className="header"
  >
    <Box
      margin={{ vertical: '0', horizontal: 'auto' }}
      width="xlarge"
    >
      <Link
        to="/"
        style={{
          color: 'white',
        }}
      > 
        <HoneypotIcon />
      </Link>
      <Box
        direction="row"
      >
        <Link to="/" style={{ color: 'white', paddingRight: '10px' }}>
          <Button label="Home" color="brand" active={isBrowser && location.pathname === "/" ? true : false}/>
        </Link>
        <Link to="/contact" style={{ color: 'white', paddingRight: '10px' }}>
          <Button label="Contact" color="brand" active={isBrowser  && location.pathname === "/contact" ? true : false}/>
        </Link>
        <Link to="/about" style={{ color: 'white', paddingRight: '10px' }}>
          <Button label="About" color="brand" active={isBrowser  && location.pathname === "/about" ? true : false}/>
        </Link>
      </Box>
    </Box>
  </Box>


);


Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object.isRequired
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
