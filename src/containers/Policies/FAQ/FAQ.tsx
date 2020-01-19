import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from '../../../components/Layout/SideNav'

import WhatIsCoachee from './WhatIsCoachee'
import HowWeSelectCoaches from './HowWeSelectCoaches'
import UsingTheWebsite from './UsingTheWebsite'
import AboutCoaching from './AboutCoaching'
import Payments from './Payments'
import Refunds from './Refunds'

const list = [
  {
    id: 'what-is-coachee',
    url: '#what-is-coachee',
    text: 'What is coachee.io',
    Component: WhatIsCoachee,
  },
  {
    id: 'how-we-select-coaches',
    url: '#how-we-select-coaches',
    text: 'How we select our coaches',
    Component: HowWeSelectCoaches,
  },
  {
    id: 'using-the-website',
    url: '#using-the-website',
    text: 'Using the website',
    Component: UsingTheWebsite,
  },
  {
    id: 'about-coaching',
    url: '#about-coaching',
    text: 'About coaching',
    Component: AboutCoaching,
  },
  {
    id: 'payments',
    url: '#payments',
    text: 'Payments',
    Component: Payments,
  },
  {
    id: 'refunds',
    url: '#refunds',
    text: 'Refunds',
    Component: Refunds,
  },
]


class TermsAndConditions extends PureComponent {
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

export default TermsAndConditions
