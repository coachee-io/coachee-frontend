import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from '../../../components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import AboutUs from './AboutUs'
import LinkingRules from './LinkingRules'
import ExternalWebsites from './ExternalWebsites'
import SuppliedContent from './SuppliedContent'
import InteractServices from './InteractiveServices'
import ContentStandard from './ContentStandard'

const links = [
  {
    url: '#about-us',
    text: 'About us and what we will do for you',
  },
  {
    url: '#rules-about-linking',
    text: 'Rules about linking to our Platform',
  },
  {
    url: '#no-responsibility-for-external-websites',
    text: 'We are not responsible for websites we link to',
  },
  {
    url: '#prohibited-uses',
    text: 'Prohibited uses',
  },
  {
    url: '#content-supplied-by-you',
    text: 'Content supplied by you',
  },
  {
    url: '#interactive-services',
    text: 'Interactive services',
  },
  {
    url: '#content-standards',
    text: 'Content standards',
  },
]

class UsePolicy extends PureComponent {
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
