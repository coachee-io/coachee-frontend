import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Cards} from '../../../components/Cards'
import CategoryCard from '../../../components/CategoryCard'

import VerticalMargin from '../../../components/VerticalMargin'

import {H1} from '../../../ui/headings'

import Health from '../../../ui/images/health-category.png'

const categoryList: any = []

for (let i: number = 0; i < 10; i += 1) {
  categoryList.push({
    imgSrc: Health,
    title: 'Hero',
    description: 'Ever felt like there is a disconnect between who you want to be and the actions you make towards your body? A health coach will help you ensure that you create new habits that’ll lead to a happier you.',
  })
}

class Categories extends PureComponent {
  render() {
    return (
      <>
        <VerticalMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H1 textAlign="center">How can we help you?</H1>
            </Col>
          </Row>
        </VerticalMargin>
        <Cards>
          {categoryList.map((category: any) => (
            <CategoryCard
              key={`${category.title}-${category.imgSrc}`}
              imgSrc={category.imgSrc}
              title={category.title}
              description={category.description}
            />
          ))}
        </Cards>

      </>
    )
  }
}

export default Categories
