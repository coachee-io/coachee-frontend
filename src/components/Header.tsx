import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {Navbar, Container, Nav} from 'react-bootstrap'


import colors from '../ui/colors'

import RouterButtonLink from './RouterButtonLink'
import Logo from './Logo'

interface HeaderProps {
  boxShadow: boolean
}
const StyledHeader = styled(Navbar)`
  max-height: 90px;
  width: 100%;

  // Hack this
  & > .container {
    ${({bg}: any) => bg && `
      background-color: ${bg};
    `}
  }

  ${({boxShadow}: HeaderProps) => boxShadow && `
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1)
  `}
`

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`

interface State {
  isScrollPositionOver50: boolean
}

class Header extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      isScrollPositionOver50: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.isScrollPositionOver50)
  }

  isScrollPositionOver50 = () => {
    if (window.scrollY > 50) {
      this.setState({isScrollPositionOver50: true})
    } else {
      this.setState({isScrollPositionOver50: false})
    }
  }

  render() {
    const {isScrollPositionOver50} = this.state
    return (
      <StyledHeader boxShadow={isScrollPositionOver50} fixed="top" expand="sm" bg="white">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as="div">
                <FlexRow>
                  <RouterButtonLink to="signup" accent>
                    Login
                  </RouterButtonLink>
                </FlexRow>

              </Nav.Link>
              <Nav.Link as="div">
                <FlexRow>
                  <RouterButtonLink to="signup" primary>
                    Become a coach
                  </RouterButtonLink>
                </FlexRow>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledHeader>
    )
  }
}

export default Header
