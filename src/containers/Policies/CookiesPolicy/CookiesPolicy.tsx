import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from '../../../components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import WebCookies from './WebCookies'
import UseOfCookies from './UseOfCookies'
import TypesOfCookies from './TypesOfCookies'
import CookieAcceptance from './CookieAcceptance'
import TurnOffCookies from './TurnOffCookies'
import UpdatePolicy from './UpdatePolicy'


const links = [
  {
    url: '#web-cookies',
    text: 'What are web cookies?',
  },
  {
    url: '#use-of-cookies',
    text: 'Why do we use cookies?',
  },
  {
    url: '#types-of-cookies',
    text: 'What type of cookies do we use?',
  },
  {
    url: '#cookie-acceptance',
    text: 'Website cookie acceptance',
  },
  {
    url: '#turn-off-cookies',
    text: 'Turning off cookies',
  },
  {
    url: '#updating-cookie-policy',
    text: 'Updating our Cookie Policy',
  },

]

class PrivacyPolicy extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={4}>
          <SideNav
            list={links}
            ordered
          />
        </Col>
        <Col xs={8}>
          <ContentHeader />
          <WebCookies />
          <UseOfCookies />
          <TypesOfCookies />
          <CookieAcceptance />
          <TurnOffCookies />
          <UpdatePolicy />
        </Col>
      </Row>
    )
  }
}

export default PrivacyPolicy
