import React, {PureComponent} from 'react'
import {
  Row, Col,
} from 'react-bootstrap'

import {H1} from '../../ui/headings'
import Dropdown from './Dropdown'
import Categories from './Categories'

interface State {
  category: string
}

class Coaches extends PureComponent<any, State> {
  handleCategoryChange = (event: any) => {
    const {value} = event.target
    const {history} = this.props
    history.push(`/coaches/${value}`)
  }


  render() {
    const {match} = this.props
    const {category} = match.params
    return (
      <>
        <Row>
          <Col xs={12}>
            <H1 textAlign="center">
            Our Coaches
            </H1>
          </Col>
        </Row>
        <Dropdown
          onChange={this.handleCategoryChange}
          category={category}
        />
        <Categories category={category} />
      </>
    )
  }
}

export default Coaches
