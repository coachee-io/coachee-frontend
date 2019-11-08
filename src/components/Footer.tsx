import React, {PureComponent } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import styled from 'styled-components'

import {NoStylesRouterLink} from './RouterLink'

const StyledFooter = styled.div`
  width: 100%;
  height: 90px;
  padding-top: 30px;
`

const StyledRow = styled(Row)`
  justify-content: space-between;
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
            <Col xs={6} md={12}>
              <StyledRow>
                {links.map((link) => (
                  <NoStylesRouterLink key={link.label} to={link.to}>
                    {link.label}
                  </NoStylesRouterLink>
                ))}
              </StyledRow>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer
