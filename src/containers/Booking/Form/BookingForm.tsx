import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Form from '../Stripe'

class BookingForm extends PureComponent {
  handleClick = (stripe: any) => {
    console.log(stripe)
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={6}>
          <Form>
            {(stripe) => (
              <button type="button" onClick={() => this.handleClick(stripe)}>bla</button>
            )}
          </Form>
        </Col>
      </Row>
    )
  }
}

export default BookingForm
