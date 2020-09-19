import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Navbar, Container, Nav} from 'react-bootstrap'

import colors from 'ui/colors'
import {minWidthSize, maxWidthSize} from 'ui/global/mediaQuery'

import {RouterButtonLink, UnstyledRouterLink} from 'components/Routing'
import Logo from 'components/Logo'

interface HeaderProps {
  boxShadow: boolean,
  bg: string
}

const NavigationBar = styled(Navbar)<HeaderProps>`
  padding: 1rem;
  ${({bg}) => bg === 'white' && `
    background-color: ${colors.white};
  `}
  ${({boxShadow}) => boxShadow && `
    box-shadow: 0px 5px 3px -3px rgba(0,0,0, 0.2);
  `}
`

const StyledNav = styled(Nav)`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${minWidthSize.tablet`
    justify-content: flex-end;
  `}
  ${maxWidthSize.mobile`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

const StyledNavItem = styled(Nav.Item)`
  padding: 0 0.5rem;
  ${maxWidthSize.mobile`
    padding: 0.5rem 0;
  `}
`

interface State {
  isScrollPositionOver50: boolean,
  expanded: boolean,
}

interface Props {
  isLoggedIn: boolean
}

class Header extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      isScrollPositionOver50: false,
      expanded: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.isScrollPositionOver50)
  }

  isScrollPositionOver50 = () => {
    if (window.scrollY > 30) {
      this.setState({isScrollPositionOver50: true})
    } else {
      this.setState({isScrollPositionOver50: false})
    }
  }

  handleCollapseOnSelect = () => {
    this.setState(({expanded: false }))
  }

  handleToggle = () => {
    this.setState((prevState) => ({expanded: !prevState.expanded}))
  }

  render() {
    const {isLoggedIn} = this.props
    const {isScrollPositionOver50, expanded} = this.state
    return (
      <NavigationBar
        expanded={expanded}
        collapseOnSelect
        onToggle={this.handleToggle}
        boxShadow={isScrollPositionOver50}
        bg="white"
        expand="sm"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as="div">
            <UnstyledRouterLink to="/">
              <Logo />
            </UnstyledRouterLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse onClick={this.handleCollapseOnSelect}>
            <StyledNav>
              {!isLoggedIn && (
              <StyledNavItem>
                <RouterButtonLink onClick={this.handleCollapseOnSelect} to="/login" accent>
                  Login
                </RouterButtonLink>
              </StyledNavItem>
              )}
              {isLoggedIn && (
              <StyledNavItem>
                <RouterButtonLink onClick={this.handleCollapseOnSelect} to="/logout" accent>
                  Logout
                </RouterButtonLink>
              </StyledNavItem>
              )}
              <StyledNavItem>
                <RouterButtonLink onClick={this.handleCollapseOnSelect} to="/become-a-coach" primary>
                  Become a Coach
                </RouterButtonLink>
              </StyledNavItem>
            </StyledNav>
          </Navbar.Collapse>
        </Container>
      </NavigationBar>
    )
  }
}

const mapStateToProps = ({auth}: any) => ({
  isLoggedIn: auth.isLoggedIn,
})

export default connect(mapStateToProps)(Header)
