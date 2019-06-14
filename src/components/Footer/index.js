import React from 'react';
import { Box } from 'grommet';

// NOTE: height="xsmall" is a hack so that the footer is not mid screen when we don't have enough
// content to show in <List />

const Footer = () => (
  <Box
    as="footer"
    background="neutral-1"
    height="xsmall"
    pad={{bottom: "small"}} >
    <Box
      margin={{vertical: 0, horizontal: "auto"}}
      width="xlarge" >
      © {new Date().getFullYear()} {"built with \u2665 by xoxo"}
    </Box>
  </Box>
)

export default Footer
