import React, {PureComponent} from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {Row, Col} from 'react-bootstrap'

import {Pulse} from '../../../components/Skeleton'

import StripeScript from './StripeScript'
import Form from './Form'

interface State {
  isScriptReady?: boolean
}

class Stripe extends PureComponent<{}, State> {
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
          <StripeProvider apiKey="pk_test_12345">
            <Elements>
              <Form />
            </Elements>
          </StripeProvider>
        )}
      </>
    )
  }
}

export default Stripe
