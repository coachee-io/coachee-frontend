import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {RouterLink, UnstyledRouterLink} from '../../../components/Routing'
import Flex from '../../../components/Layout/Flexbox'

import {
  CardsGrid, Card, CardImage, CardTitle, CardBody, CardText,
} from '../../../components/Cards'

import {H1} from '../../../ui/headings'

import list from './list'

class Categories extends PureComponent {
  render() {
    return (
      <Flex flexDirection="column" width="100%" marginTop="30px">
        <Row>
          <Col xs={12}>
            <H1 textAlign="center">How can we help you?</H1>
          </Col>
        </Row>
        <Flex flexDirection="row" width="100%" marginTop="30px">
          <CardsGrid>
            {list.map((category: any) => (
              <UnstyledRouterLink key={category.title} to={category.url}>
                <Card>
                  <CardImage
                    src={category.imgSrc}
                    alt="Coach"
                  />
                  <CardBody padding="1rem">
                    <CardTitle>
                      {category.title}
                    </CardTitle>
                    <CardText>
                      {category.description}
                    </CardText>
                  </CardBody>
                </Card>
              </UnstyledRouterLink>
            ))}
          </CardsGrid>
        </Flex>
        <Flex flexDirection="row" justifyContent="center" width="100%" marginTop="30px">
          <RouterLink to="/coaches" primary>
            Browse all coaches
          </RouterLink>
        </Flex>
      </Flex>
    )
  }
}

export default Categories
