import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {RouterLink, UnstyledRouterLink} from '../../../components/Routing'

import {
  Cards, CategoryCard, CategoryCardImage, CardTitle, CardBody, CardText,
} from '../../../components/Cards'

import {H1} from '../../../ui/headings'

import list from './list'

class Categories extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <H1 textAlign="center">How can we help you?</H1>
          </Col>
        </Row>
        <Cards>
          {list.map((category: any) => (
            <UnstyledRouterLink key={category.title} to={category.url}>
              <CategoryCard>
                <CategoryCardImage src={category.imgSrc} />
                <CardBody>
                  <CardTitle>
                    {category.title}
                  </CardTitle>
                  <CardText>
                    {category.description}
                  </CardText>
                </CardBody>
              </CategoryCard>
            </UnstyledRouterLink>
          ))}
        </Cards>
        <RouterLink to="/coaches" primary>
              Browse all coaches
        </RouterLink>
      </>
    )
  }
}

export default Categories
