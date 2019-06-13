import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Heading, Button } from 'grommet';

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    background="neutral-1"
    pad={{bottom: "small"}}
    margin={{bottom: "1.45rem"}}
    >
    <Box
      margin={{vertical: 0, horizontal: "auto"}}
      width="xlarge"
      >
      <Heading
        level="1"
        margin="0"
        >
        <Link
          to="/"
          style={{
            color: "white"
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
      <Box
        direction="row"
        >
        <Link to="/" style={{color: "white", paddingRight: "10px"}}>
          <Button label="Home" color="neutral-2"/>
        </Link>
        <Link to="/contact" style={{color: "white", paddingRight: "10px"}}>
          <Button label="Contact" color="neutral-2"/>
        </Link>
        <Link to="/about" style={{color: "white", paddingRight: "10px"}}>
          <Button label="About" color="neutral-2"/>
        </Link>
      </Box>
    </Box>
  </Box>




)




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
