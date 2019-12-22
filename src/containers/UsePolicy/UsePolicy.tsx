import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from '../../components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import AboutUs from './AboutUs'
import LinkingRules from './LinkingRules'
import ExternalWebsites from './ExternalWebsites'
import SuppliedContent from './SuppliedContent'
import InteractServices from './InteractiveServices'
import ContentStandard from './ContentStandard'

import {list} from './urls'


class UsePolicy extends PureComponent {
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
          <AboutUs />
          <LinkingRules />
          <ExternalWebsites />
          <SuppliedContent />
          <InteractServices />
          <ContentStandard />
        </Col>
      </Row>
    )
  }
}

export default UsePolicy
