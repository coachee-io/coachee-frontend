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
  isScrollPositionOver100: boolean
}

class Header extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      isScrollPositionOver100: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.isScrollPositionOver100)
  }

  isScrollPositionOver100 = () => {
    if (window.scrollY > 200) {
      this.setState({isScrollPositionOver100: true})
    } else {
      this.setState({isScrollPositionOver100: false})
    }
  }

  render() {
    const {isScrollPositionOver100} = this.state
    return (
      <StyledHeader boxShadow={isScrollPositionOver100} fixed="top" expand="lg">
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
