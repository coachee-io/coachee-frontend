import styled from 'styled-components'

import {H2} from '../ui/headings'
import {Para} from '../ui/labels'
import {minWidthSize} from '../ui/global/mediaQuery'

interface CardsProps {
  isMobile?: boolean,
  isTablet?: boolean,
  isDesktop?: boolean
}

interface CardImageProps {
  imgSrc: string
}

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${minWidthSize.tablet`
    justify-content: space-evenly;
  `}
  ${minWidthSize.large`
    justify-content: space-between;
  `} 
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const CardBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`

export const CardImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 238px;
  background-image: ${({imgSrc}: CardImageProps) => imgSrc && `
    url(${imgSrc});
 `}
`

export const CardTitle = styled(H2)``
export const CardText = styled(Para)``
