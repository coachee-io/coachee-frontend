import React, {PureComponent } from 'react'
import styled from 'styled-components'

import colors from '../ui/colors'

import {
  Card, CardImage, CardBody, CardText, CardTitle,
} from './Cards'

const StyledCard = styled(Card)`
  border-radius: 5px;
  border: 0.5px solid ${colors.primary};
  background-color: ${colors.white};
  height: 435px;
  width: 330px;
  margin-top: 30px;
`

interface Props {
  imgSrc?: string,
  title: string,
  description: string
}

class CategoryCard extends PureComponent<Props> {
  render() {
    const {imgSrc, title, description} = this.props
    return (
      <StyledCard>
        {imgSrc && <CardImage imgSrc={imgSrc} />}
        <CardBody>
          <CardTitle>
            {title}
          </CardTitle>
          <CardText>
            {description}
          </CardText>
        </CardBody>
      </StyledCard>
    )
  }
}

export default CategoryCard
