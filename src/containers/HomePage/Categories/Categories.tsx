import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {RouterLink} from '../../../components/Routing'
import {
  Cards, CategoryCard, CategoryCardImage, CardTitle, CardBody, CardText,
} from '../../../components/Cards'
import SetMargin from '../../../components/Layout/SetMargin'
import {FlexRowJustifyCenter} from '../../../components/Layout/Flexbox'

import {H1} from '../../../ui/headings'
import Health from '../../../ui/images/health-category.png'

const categoryList: any = []

for (let i: number = 0; i < 6; i += 1) {
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
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H1 textAlign="center">How can we help you?</H1>
            </Col>
          </Row>
        </SetMargin>
        <FlexRowJustifyCenter>
          <Cards>
            {categoryList.map((category: any) => (
              <CategoryCard key={category.title}>
                <CategoryCardImage imgSrc={category.imgSrc} />
                <CardBody>
                  <CardTitle>
                    {category.title}
                  </CardTitle>
                  <CardText>
                    {category.description}
                  </CardText>
                </CardBody>
              </CategoryCard>
            ))}
          </Cards>
        </FlexRowJustifyCenter>
        <SetMargin mt={30}>
          <FlexRowJustifyCenter>
            <RouterLink to="/coaches" primary>
              Browse all coaches
            </RouterLink>
          </FlexRowJustifyCenter>
        </SetMargin>
      </>
    )
  }
}

export default Categories
