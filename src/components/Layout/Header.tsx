import React from 'react';
import {Container, Navbar} from "react-bootstrap"

const Header = ({fixed, bg, variant, expand, children}: any) => {
  return (
    <Navbar fixed={fixed} bg={bg} variant={variant} expand={expand}>
      <Container>
        {children}
      </Container>
    </Navbar>
  )
}

export default Header