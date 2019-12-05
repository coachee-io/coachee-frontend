import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

import HealthImg from '../../ui/images/health-category.jpg'

const Coach = {
  firstName: 'Robin',
  lastName: 'Not Robin',
  vatNo: 123123123123,
  city: 'London',
  country: 'United Kingdom',
  shortDescription: 'Health Coach',
  description: 'BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  averageReviews: 4,
  numberOfReviews: 14,
  pictureUrl: HealthImg,
  certificates: [
    {
      id: 1,
      title: 'Bla',
      institution: 'blaaaaaaaaaaaaa',
      date: new Date().getTime(),
    },
  ],
  programmes: [
    {
      id: 1,
      name: 'Health',
      sessions: 9,
      duration: 45,
      description: 'BLAAAA',
      totalPrice: 9999,
      tax: 1000,
    },
  ],
  tags: 'Meditation, Holistic Health, Nutrition',
  availability: [
    {
      day: 1,
      start: 17,
      end: 20,
    },
  ],
  reviews: [
    {
      star: 5,
      title: 'Amazing Robin helped me not get fired',
      comment: 'Incredibly how he helped me',
    },
    {
      star: 4,
      title: 'Amazing Robin helped me not get fired',
      comment: 'Incredibly how he helped me',
    },
    {
      star: 3,
      title: 'Amazing Robin helped me not get fired',
      comment: 'Incredibly how he helped me',
    },
  ],
}

interface State {
  coach: any
}

class CoachProfile extends PureComponent<{}, State> {
  private reviews: any = React.createRef()

  constructor(props: any) {
    super(props)
    this.state = {
      coach: {},
    }
  }

  componentDidMount = () => {
    setTimeout(async () => {
      await this.setState({
        coach: Coach,
      })
    }, 5000)
  }

  scrollToReviews = () => {
    this.reviews.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const {coach} = this.state
    return (
      <>
        <Row>
          <Col xs={12}>
            <Header
              scrollToReviews={this.scrollToReviews}
              firstName={coach.firstName}
              lastName={coach.lastName}
              pictureUrl={coach.pictureUrl}
              city={coach.city}
              country={coach.country}
              vatNo={coach.vatNo}
              description={coach.description}
              shortDescription={coach.shortDescription}
              averageReviews={coach.averageReviews}
              numberOfReviews={coach.numberOfReviews}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <Sidebar
              tags={coach.tags}
              availability={coach.availability}
            />
          </Col>
          <Col xs={12} md={9}>
            <Content
              certificates={coach.certificates}
              programmes={coach.programmes}
              reviews={coach.reviews}
              reviewsRef={this.reviews}
            />
          </Col>
        </Row>
      </>
    )
  }
}

export default CoachProfile
