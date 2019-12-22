import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from '../../components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import WebCookies from './WebCookies'
import UseOfCookies from './UseOfCookies'
import TypesOfCookies from './TypesOfCookies'
import CookieAcceptance from './CookieAcceptance'
import TurnOffCookies from './TurnOffCookies'
import UpdatePolicy from './UpdatePolicy'


import {list} from './urls'


class PrivacyPolicy extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={4}>
          <SideNav
            list={list}
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
