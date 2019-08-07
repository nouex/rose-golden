import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box, Heading, Button, Anchor,
} from 'grommet';

import SkrillaIcon from '../../../static/icons/skrilla.svg';

const Header = ({ siteTitle }) => (
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
        <SkrillaIcon />
      </Link>
      <Box
        direction="row"
      >
        <Link to="/" style={{ color: 'white', paddingRight: '10px' }}>
          <Button label="Home" color="brand" />
        </Link>
        <Link to="/contact" style={{ color: 'white', paddingRight: '10px' }}>
          <Button label="Contact" color="brand" />
        </Link>
        <Link to="/about" style={{ color: 'white', paddingRight: '10px' }}>
          <Button label="About" color="brand" />
        </Link>
      </Box>
    </Box>
  </Box>


);


Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
