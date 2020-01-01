import React, {PureComponent} from 'react'
import {ReactStripeElements} from 'react-stripe-elements'

import {Row, Col} from '../../../components/Layout/Flexbox'
import {Pulse} from '../../../components/Skeleton'

import {SubmitButton} from '../../../components/Form'
import StripeForm from '../../../components/Stripe'

import {BookingService} from '../../../services/public'

import {H2} from '../../../ui/headings'

interface State {
  stripeApiKey?: string,
  stripeClientSecret?: string,
  isLoading: boolean,
  error: any | null,
}

interface Props {
  coachId: string | number | any,
  introCall: string | number | any,
  programId: string | number | any
}

class BookingForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      stripeApiKey: '',
      stripeClientSecret: '',
      isLoading: false,
      error: null,
    }
  }

  componentDidMount = () => {
    this.setState({isLoading: true})
    const {introCall, coachId, programId} = this.props
    BookingService.setupBooking({coachId, programId, introCall})
      .then(({data}) => {
        this.setState({stripeApiKey: data.publishingKey, stripeClientSecret: data.clientSecret})
      })
      .catch((error) => {
        this.setState({isLoading: false, error})
      })
  }

  onSubmit = (stripe?: ReactStripeElements.StripeProps) => {
    const {stripeClientSecret} = this.state
    // console.log(stripe)
  }

  render() {
    const {
      isLoading, error, stripeApiKey, stripeClientSecret,
    } = this.state

    if (error) {
      return <div>{error.message}</div>
    }

    return (
      <>
        {!stripeApiKey && (
          <>
            <Row>
              <Col xs={12}>
                <Pulse height={36} />
              </Col>
            </Row>
            <Row marginTop="30px">
              <Col xs={12}>
                <Pulse height={36} />
              </Col>
            </Row>
            <Row marginTop="30px">
              <Col xs={12} md={6}>
                <Pulse height={36} />
              </Col>
              <Col xs={12} md={6}>
                <Pulse height={36} />
              </Col>
            </Row>
            <Row marginTop="30px">
              <Col xs={12} md={6} />
              <Col xs={12} md={6}>
                <Pulse height={36} />
              </Col>
            </Row>
          </>
        )}
        {stripeApiKey && (
          <>
            <H2 textAlign="center">
              Enter your card details:
            </H2>
            <StripeForm stripeApiKey={stripeApiKey}>
              {(stripe) => (
                <Row>
                  <Col xs={12} md={6} />
                  <Col xs={12} md={6}>
                    <SubmitButton
                      onClick={() => this.onSubmit(stripe)}
                      isLoading={isLoading}
                      error={error}
                      accent
                      loadingText="Adding your card"
                      defaultText="Confirm"
                      width="100%"
                    />
                  </Col>
                </Row>
              )}
            </StripeForm>
          </>
        )}
      </>
    )
  }
}

export default BookingForm
