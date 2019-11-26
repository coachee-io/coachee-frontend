import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import BookingForm from './Form'

class Booking extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <BookingForm />
        </Col>
      </Row>
    )
  }
}

export default Booking
