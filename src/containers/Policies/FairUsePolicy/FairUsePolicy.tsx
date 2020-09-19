import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from 'components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import AboutUs from './AboutUs'
import LinkingRules from './LinkingRules'
import ExternalWebsites from './ExternalWebsites'
import ProhibitedUses from './ProhibitedUses'
import SuppliedContent from './SuppliedContent'
import InteractServices from './InteractiveServices'
import ContentStandard from './ContentStandard'

const list = [
  {
    id: 'about-us',
    url: '#about-us',
    text: 'About us and what we will do for you',
    Component: AboutUs,
  },
  {
    id: 'rules-about-linking',
    url: '#rules-about-linking',
    text: 'Rules about linking to our Platform',
    Component: LinkingRules,
  },
  {
    id: 'no-responsibility-for-external-websites',
    url: '#no-responsibility-for-external-websites',
    text: 'We are not responsible for websites we link to',
    Component: ExternalWebsites,
  },
  {
    id: 'prohibited-uses',
    url: '#prohibited-uses',
    text: 'Prohibited uses',
    Component: ProhibitedUses,
  },
  {
    id: 'content-supplied-by-you',
    url: '#content-supplied-by-you',
    text: 'Content supplied by you',
    Component: SuppliedContent,
  },
  {
    id: 'interactive-services',
    url: '#interactive-services',
    text: 'Interactive services',
    Component: InteractServices,
  },
  {
    id: 'content-standards',
    url: '#content-standards',
    text: 'Content standards',
    Component: ContentStandard,
  },
]

class FairUsePolicy extends PureComponent {
  private nodes: any = list.reduce((acc, value) => {
    acc[value.id] = React.createRef()
    return acc
  }, {} as any)

  scrollTo = (e: any, id: string) => {
    e.preventDefault()
    window.scroll({behavior: 'smooth', top: this.nodes[id].current.offsetTop - 15, left: 0})
  }

  render() {
    return (
      <Row>
        <Col xs={12} lg={4}>
          <SideNav
            list={list}
            onClick={this.scrollTo}
            ordered
          />
        </Col>
        <Col xs={12} lg={8}>
          <ContentHeader />
          {list.map((el: any, index) => {
            const {Component} = el
            return (
              <div key={`${el.url}-${index}`} ref={this.nodes[el.id]}>
                <Component />
              </div>
            )
          })}
        </Col>
      </Row>
    )
  }
}

export default FairUsePolicy
