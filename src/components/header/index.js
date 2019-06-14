import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Heading, Button, Anchor } from 'grommet';

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    background="light-3"
    pad={{bottom: "small"}}
    margin={{bottom: "1.45rem"}}
    >
    <Box
      margin={{vertical: "0", horizontal: "auto"}}
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
          <Anchor label={siteTitle} color="brand" style={{textDecoration: "none"}}/>
        </Link>
      </Heading>
      <Box
        direction="row"
        >
        <Link to="/" style={{color: "white", paddingRight: "10px"}}>
          <Button label="Home" color="brand"/>
        </Link>
        <Link to="/contact" style={{color: "white", paddingRight: "10px"}}>
          <Button label="Contact" color="brand"/>
        </Link>
        <Link to="/about" style={{color: "white", paddingRight: "10px"}}>
          <Button label="About" color="brand"/>
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
