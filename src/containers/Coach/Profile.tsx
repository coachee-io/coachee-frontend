import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

import SetMargin from '../../components/Layout/SetMargin'


class CoachProfile extends PureComponent {
  private reviews: any = React.createRef()

  scrollToReviews = () => {
    this.reviews.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <>
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <Header
                scrollToReviews={this.scrollToReviews}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <Sidebar />
            </Col>
            <Col xs={12} md={9}>
              <Content reviewsRef={this.reviews} />
            </Col>
          </Row>
        </SetMargin>
      </>
    )
  }
}

export default CoachProfile
