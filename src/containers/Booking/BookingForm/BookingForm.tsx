import React, {PureComponent} from 'react'
import {ReactStripeElements} from 'react-stripe-elements'

import {Row, Col} from '../../../components/Layout/Flexbox'
import {Pulse} from '../../../components/Skeleton'
import {
  SubmitButton, ErrorMessage, ErrorAlertCircle,
} from '../../../components/Form'
import StripeForm from '../../../components/Stripe'

import {BookingService} from '../../../services/public'
import {parseDateToSeconds} from '../../../utils/parseDate/parseDate'

import {H2} from '../../../ui/headings'
import {Para} from '../../../ui/labels'


import PostalCode from './PostalCode'

interface State {
  stripeApiKey?: string,
  stripeClientSecret?: string,
  stripeError: Error | null,
  isLoading: boolean,
  error: Error | null,
  postalCode: string | undefined
}

interface Props {
  coachId: string | number | any,
  introCall: string | number | any,
  programId: string | number | any,
  onStepChange: () => void
}

class BookingForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      stripeApiKey: '',
      stripeClientSecret: '',
      isLoading: false,
      stripeError: null,
      error: null,
      postalCode: '',
    }
  }

  componentDidMount = () => {
    const {introCall, coachId, programId} = this.props
    BookingService.setupBooking({coachId, programId, introCall: parseDateToSeconds(introCall)})
      .then(({publishingKey, clientSecret}) => {
        this.setState({stripeApiKey: publishingKey, stripeClientSecret: clientSecret})
      })
      .catch((error) => {
        this.setState({isLoading: false, error})
      })
  }

  handlePostalCodeChange = (value: string | undefined) => {
    this.setState({postalCode: value})
  }

  onSubmit = (
    stripe: ReactStripeElements.StripeProps | null,
    getElement: (type: ReactStripeElements.TokenType) => ReactStripeElements.HTMLStripeElement | null | undefined,
  ): void => {
    const {stripeClientSecret, postalCode} = this.state
    const {onStepChange} = this.props
    const cardElement = getElement('cardNumber')
    if (stripe && cardElement && stripeClientSecret) {
      this.setState({isLoading: true})
      stripe.confirmCardPayment(stripeClientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            address: {
              postal_code: postalCode,
            },
          },
        },
      })
        .then(({paymentIntent, error}) => {
          if (paymentIntent) {
            onStepChange()
          } else if (error) {
            throw new Error(error.message)
          }
        })
        .catch((stripeError) => {
          this.setState({isLoading: false, stripeError})
        })
    }
  }

  render() {
    const {
      isLoading, error, stripeApiKey, stripeError, postalCode,
    } = this.state

    if (error) {
      return (
        <ErrorMessage>
          <ErrorAlertCircle />
          {error.message}
        </ErrorMessage>
      )
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
              {(stripe, getElement) => (
                <>
                  <Row>
                    <Col xs={12} md={6}>
                      <PostalCode
                        onChange={this.handlePostalCodeChange}
                        value={postalCode}
                      />
                    </Col>
                    <Col md={6} />
                  </Row>
                  <Row marginTop="15px">
                    <Col xs={12}>
                      <Para bold>
                        Upon booking, we request a temporary hold on your account for the total
                        amount of your purchase, but no payment will be taken.
                        If you do not wish to proceed after your intro call, let us know up to
                        12 hours after by emailing admin@coachee.io and
                        we will cancel your booking, no questions asked.
                      </Para>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <SubmitButton
                        onClick={() => this.onSubmit(stripe, getElement)}
                        isLoading={isLoading}
                        disabled={isLoading || !postalCode}
                        error={stripeError}
                        primary
                        loadingText="Confirming..."
                        defaultText="Confirm"
                        width="100%"
                      />
                    </Col>
                  </Row>
                </>
              )}
            </StripeForm>
          </>
        )}
      </>
    )
  }
}

export default BookingForm
