import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

class Header extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={12}>
          Header
        </Col>
      </Row>
    )
  }
}

export default Header
