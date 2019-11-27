import React, {PureComponent, ReactNode} from 'react'
import {StripeProvider, Elements, ReactStripeElements} from 'react-stripe-elements'
import {Row, Col} from 'react-bootstrap'

import {Pulse} from '../../../components/Skeleton'

import StripeScript from './StripeScript'
import Form from './Form'

interface Props {
  stripeApiKey?: string,
  children: (stripe?: ReactStripeElements.StripeProps) => ReactNode
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
        {!isScriptReady && (
          <Row>
            <Col xs={12}>
              <Pulse height={24} />
            </Col>
          </Row>
        )}
        {isScriptReady && (
          <StripeProvider apiKey={stripeApiKey || 'pk_test_12345'}>
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
