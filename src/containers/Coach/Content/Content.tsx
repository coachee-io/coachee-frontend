import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

class Content extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={12}>
          Content
        </Col>
      </Row>
    )
  }
}

export default Content
