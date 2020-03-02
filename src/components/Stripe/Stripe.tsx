// @ts-nocheck
import React, {PureComponent, ReactNode} from 'react'
import {StripeProvider, ReactStripeElements, Elements} from 'react-stripe-elements'
import {Row, Col} from 'react-bootstrap'

import StripeScript from '../../utils/scripts/stripe'
import {Pulse} from '../Skeleton'

import Form from './Form'

interface Props {
  stripeApiKey?: string,
  children: (
    stripe: ReactStripeElements.StripeProps | null,
    getElement: (type: ReactStripeElements.TokenType) => ReactStripeElements.HTMLStripeElement | null | undefined
    ) => ReactNode
}

interface State {
  isScriptReady?: boolean,
}

class Stripe extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      isScriptReady: false,
    }
  }

  componentDidMount = () => {
    StripeScript()
      .then(() => {
        this.setState({isScriptReady: true})
      })
  }

  render() {
    const {stripeApiKey, children} = this.props
    const {isScriptReady} = this.state
    return (
      <>
        {!isScriptReady && !stripeApiKey && (
          <Row>
            <Col xs={12}>
              <Pulse height={24} />
            </Col>
          </Row>
        )}
        {isScriptReady && stripeApiKey && children && (
          <StripeProvider apiKey={stripeApiKey}>
            <Elements>
              <Form>
                {children}
              </Form>
            </Elements>
          </StripeProvider>
        )}
      </>
    )
  }
}

export default Stripe
