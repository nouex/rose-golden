import React from 'react';
import { Box } from 'grommet';

const Footer = () => (
  <Box
    as="footer"
    background="light-3"
    height="xsmall"
    pad={{bottom: "small"}} >
    <Box
      margin={{vertical: "0", horizontal: "auto"}}
      width="xlarge" >
      © {new Date().getFullYear()} {"built with \u2665 by xoxo"}
    </Box>
  </Box>
)

export default Footer
