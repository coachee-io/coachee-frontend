import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import {CoachesService} from '../../services/public'
import ErrorMessage from '../../components/ErrorMessage'

import {
  GetCoachRequest,
} from '../../services/public/coaches/types'

import Header from './Header'
import Content from './Content'

const sortAvailability = (availability: any[]): any[] => {
  if (!availability || availability.length === 0) {
    return []
  }

  const sortByHour = (arr: any[]): any[] => arr.sort((a, b) => a.start - b.start)

  const sortByWeekDay = (arr: any[]): any[] => arr.sort((a, b) => a.weekDay - b.weekDay)

  // Make a copy of the array and mutate by sorting it
  const sortedAvailability = [...availability]
  return sortByWeekDay(sortByHour(sortedAvailability))
}

interface Params {
  id: string | any
}

interface Props extends RouteComponentProps<Params> {}

interface State {
  coach: GetCoachRequest | any,
  error?: null | any,
  errorStatus?: string | number | any
}

class CoachProfile extends PureComponent<Props, State> {
  private reviews: any = React.createRef()

  constructor(props: any) {
    super(props)
    this.state = {
      coach: {},
      error: null,
      errorStatus: null,
    }
  }

  componentDidMount = () => {
    this.getCoach()
  }

  getCoach = () => {
    const {match: {params}} = this.props
    const {id} = params

    return CoachesService.getCoach(id)
      .then((res) => {
        const coach = {
          ...res,
          certifications: res.certifications,
          availability: sortAvailability(res.availability),
        }
        this.setState({coach})
      })
      .catch((err) => {
        if (err && err.response && err.response.status) {
          this.setState({error: err, errorStatus: err.response.status})
        } else {
          this.setState({error: err})
        }
      })
  }


  scrollToReviews = () => {
    this.reviews.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const {coach, error, errorStatus} = this.state

    if (error) {
      return <ErrorMessage status={errorStatus} />
    }

    return (
      <>
        <Row>
          <Col xs={12}>
            <Header
              scrollToReviews={this.scrollToReviews}
              firstName={coach.firstName}
              lastName={coach.lastName}
              pictureUrl={coach.pictureURL}
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
          <Col xs={12}>
            <Content
              coach={coach}
              certifications={coach.certifications}
              programs={coach.programs}
              availability={coach.availability}
            />
          </Col>
        </Row>
      </>
    )
  }
}

export default CoachProfile
