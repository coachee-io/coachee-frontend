import React, {PureComponent } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import styled from 'styled-components'

import colors from '../../ui/colors'
import {maxWidthSize} from '../../ui/global/mediaQuery'

import {RegularRouterLink} from '../Routing'

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${colors.white};
  flex-shrink: 0;
  ${maxWidthSize.mobile`
    padding-bottom: 30px;
 `}
`

const List = styled.ul`
  display: flex;
  height: 90px;
  padding: 30px;
  list-style: none;
  justify-content: center;
  align-items: center;
  ${maxWidthSize.mobile`
    flex-direction: column;
  `}
`

const ListItem = styled.li`
 display: inline-block;
 padding: 0 10px;

 ${maxWidthSize.mobile`
  display: block;
  padding: 0;
 `}
`

const links = [
  {
    to: '/about-us',
    label: 'About us',
  },
  {
    to: '/terms-and-conditions',
    label: 'Terms and Conditions',
  },
  {
    to: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    to: '/faq',
    label: 'FAQ',
  },
  {
    to: '/contact-us',
    label: 'Contact us',
  },
]

class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter>
        <Container>
          <Row>
            <Col md={12}>
              <List>
                {links.map((link) => (
                  <ListItem key={link.label}>
                    <RegularRouterLink key={link.label} to={link.to}>
                      {link.label}
                    </RegularRouterLink>
                  </ListItem>
                ))}
              </List>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer
