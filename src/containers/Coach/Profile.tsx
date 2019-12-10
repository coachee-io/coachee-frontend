import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import {CoachesService} from '../../services/public'

import Photo from '../../ui/images/coach-photo.jpg'

import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

interface Params {
  id: any
}

interface Props extends RouteComponentProps<Params> {}

interface State {
  coach: any
}

class CoachProfile extends PureComponent<Props, State> {
  private reviews: any = React.createRef()

  constructor(props: any) {
    super(props)
    this.state = {
      coach: {},
    }
  }

  componentDidMount = () => {
    setTimeout(this.getCoach, 500)
  }

  getCoach = () => {
    const {match: {params}} = this.props
    const {id} = params
    return CoachesService.getCoach(id)
      .then((res) => this.setState({coach: res}))
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
              pictureUrl={coach.pictureURL === '' ? Photo : undefined}
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
