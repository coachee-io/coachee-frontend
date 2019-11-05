import React, {PureComponent} from 'react'
import {Navbar, Container} from 'react-bootstrap'
import styled from 'styled-components'

import colors from '../ui/colors'

import Logo from './Logo'

interface HeaderProps {
  boxShadow: boolean
}
const StyledHeader = styled(Navbar)`
  background-color: ${colors.white};
  max-height: 90px;
  width: 100%;
  ${({boxShadow}: HeaderProps) => boxShadow && `
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1)
  `}
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
      <StyledHeader boxShadow={isScrollPositionOver50} fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            Home
          </Navbar.Collapse>
        </Container>
      </StyledHeader>
    )
  }
}

export default Header
