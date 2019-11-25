import styled from 'styled-components'

import colors from '../../ui/colors'
import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'
import {minWidthSize} from '../../ui/global/mediaQuery'

interface CardImageProps {
  imgSrc?: string
}

export const Cards = styled.div`
  display: grid;
  row-gap: 1rem;
  ${minWidthSize.tablet`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  `}
  ${minWidthSize.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
  
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 0.5px solid ${colors.primary};
  background-color: ${colors.white};
  margin-top: 30px;
`

export const CardBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`

export const CardTitle = styled(H2)``
export const CardText = styled(Para)``


export const CategoryCard = styled(Card)`
  height: 435px;
`

export const CategoryCardImage = styled.img`
  height: auto;
  width: 100%;
  border: none;
`

interface CoachCardProps {
  isLoading?: boolean
}

export const CoachCard = styled(Card)`
  padding: 2rem;
  ${({isLoading}: CoachCardProps) => isLoading && `
    border: 0.5px solid #E5E5E5;
  `}
`

export const CoachCardImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 76px;
  width: 76px;
  border-radius: 50%;
  background-image: ${({imgSrc}: CardImageProps) => imgSrc && `
    url(${imgSrc});
  `}
`
