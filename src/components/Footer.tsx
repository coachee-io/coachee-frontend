import React, {PureComponent } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import styled from 'styled-components'


import colors from '../ui/colors'
import {maxWidthSize} from '../ui/global/mediaQuery'

import VerticalMargin from './VerticalMargin'
import {NoStylesRouterLink} from './RouterLink'

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${colors.white};
  flex-shrink: 0;
`

const List = styled.ul`
  display: flex;
  height: 90px;
  padding: 30px 0px 0px;
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

const links = [{
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
              <VerticalMargin mt={30}>
                <List>
                  {links.map((link) => (
                    <ListItem key={link.label}>
                      <NoStylesRouterLink key={link.label} to={link.to}>
                        {link.label}
                      </NoStylesRouterLink>
                    </ListItem>
                  ))}
                </List>
              </VerticalMargin>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer
