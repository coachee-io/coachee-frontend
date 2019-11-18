import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {RouterLink, UnstyledRouterLink} from '../../../components/Routing'

import {
  Cards, CategoryCard, CategoryCardImage, CardTitle, CardBody, CardText,
} from '../../../components/Cards'

import SetMargin from '../../../components/Layout/SetMargin'
import {FlexRowJustifyCenter} from '../../../components/Layout/Flexbox'
import {H1} from '../../../ui/headings'

import list from './list'


class Categories extends PureComponent {
  render() {
    return (
      <>
        <SetMargin mt={45}>
          <Row>
            <Col xs={12}>
              <H1 textAlign="center">How can we help you?</H1>
            </Col>
          </Row>
        </SetMargin>
        <FlexRowJustifyCenter>
          <Cards>
            {list.map((category: any) => (
              <UnstyledRouterLink key={category.title} to={category.url}>
                <CategoryCard>
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
              </UnstyledRouterLink>
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
