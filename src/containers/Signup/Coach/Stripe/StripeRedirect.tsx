import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Col, Row} from 'react-bootstrap'
import qs from 'qs'

import {Pulse} from '../../../../components/Skeleton'
import Flex from '../../../../components/Layout/Flexbox'
import Confirmation from '../../../../components/Confirmation'
import ErrorMessage from '../../../../components/ErrorMessage'

import {CoachesService} from '../../../../services/public'

interface Params {
  id: string | any
}

interface Props extends RouteComponentProps<Params> {}

interface State {
  isLoading: boolean,
  error: Error | null,
  errorStatus?: number
}

class StripeRedirect extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      error: null,
    }
  }

  componentDidMount = () => {
    CoachesService.createStripeExpressCoach({
      authorizationCode: this.getCodeFromParams(),
      state: this.getStateFromParams(),
    })
      .then(() => this.setState({isLoading: false}))
      .catch((error) => {
        if (error && error.response && error.response.status) {
          this.setState({error, errorStatus: error.response.status, isLoading: false})
        } else {
          this.setState({error, isLoading: false})
        }
      })
  }

  getCodeFromParams = () => {
    const {location: {search}} = this.props
    return qs.parse(search, {ignoreQueryPrefix: true})?.code
  }

  getStateFromParams = () => {
    const {location: {search}} = this.props
    return qs.parse(search, {ignoreQueryPrefix: true})?.state
  }

  render() {
    const {isLoading, error, errorStatus} = this.state

    if (isLoading) {
      return (
        <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
          <Col xs={12} sm={6}>
            <Pulse height={50} />
            <Pulse height={50} marginTop={15} />
            <Pulse height={200} marginTop={15} />
          </Col>
        </Flex>
      )
    }

    if (error) {
      return <ErrorMessage status={errorStatus} />
    }

    return (
      <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
        <Confirmation
          heading="Congratulations for taking this step!"
          text="We have now created your account in Stripe and you can now login."
        />
      </Flex>
    )
  }
}

export default StripeRedirect
