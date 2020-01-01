import React, {PureComponent} from 'react'
import {ReactStripeElements} from 'react-stripe-elements'

import {Row, Col} from '../../../components/Layout/Flexbox'
import {Pulse} from '../../../components/Skeleton'

import {SubmitButton} from '../../../components/Form'
import StripeForm from '../../../components/Stripe'

import {H2} from '../../../ui/headings'

interface State {
  stripeApiKey?: string,
  stripeClientSecret?: string,
  isLoading: boolean,
  error: any | null,
}

interface Props {
  selectedDate: any,
  programId: any
}

class BookingForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      stripeApiKey: 'pk_test_12345',
      stripeClientSecret: '',
      isLoading: false,
      error: null,
    }
  }

  componentDidMount = () => {
    // console.log(this.props)
    /**
     * Pass final date in time 1590129312398 uint64
     * Access token and programe ID to the BE
     * get stripeApiKey and stripeClientSecret
     */
    const {selectedDate} = this.props
    // console.log(selectedDate)
  }

  onSubmit = (stripe?: ReactStripeElements.StripeProps) => {
    const {stripeClientSecret} = this.state
    // console.log(stripe)
  }

  render() {
    const {
      isLoading, error, stripeApiKey, stripeClientSecret,
    } = this.state
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
