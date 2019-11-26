import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Form from '../Stripe'

class BookingForm extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form />
        </Col>
      </Row>
    )
  }
}

export default BookingForm
