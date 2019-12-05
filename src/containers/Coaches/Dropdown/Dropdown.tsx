import React, {PureComponent} from 'react'
import {
  Row, Col, FormGroup, FormLabel, FormControl,
} from 'react-bootstrap'


interface Props {
  onChange: (data: any) => any,
  category: string,
}

class Dropdown extends PureComponent<Props> {
  render() {
    const {category, onChange} = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <FormGroup>
              <FormLabel>
                Coaches
              </FormLabel>
              <FormControl as="select" onChange={onChange} value={category}>
                <option value="">All</option>
                <option value="health">Health</option>
                <option value="finance">Finance</option>
                <option value="relationship">Relationship</option>
                <option value="nutrition">Nutrition</option>
                <option value="feminity">Feminity</option>
                <option value="life">Life</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
      </>
    )
  }
}

export default Dropdown
