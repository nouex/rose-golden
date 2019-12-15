import React from 'react';
import { Box } from 'grommet';

const Footer = () => (
  <Box
    as="footer"
    background="light-2"
    height="xsmall"
    pad={{ vertical: 'small', horizontal: 'xlarge' }}
  >
    <Box
      margin={{ vertical: '0', horizontal: 'auto' }}
      width="xlarge"
      direction="row"
    >
      ©
      {`${new Date().getFullYear()} `}
      built with
      {'\u2665'}
      {' -'}
      <a href="https://github.com/baaae" target="_blank" style={{ textDecoration: 'underline' }}>xoxo</a>
    </Box>
  </Box>
);

export default Footer;
