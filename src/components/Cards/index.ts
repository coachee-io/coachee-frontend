import styled from 'styled-components'

import colors from '../../ui/colors'
import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'
import {minWidthSize, maxWidthSize} from '../../ui/global/mediaQuery'

interface CardsGridProps {
  gap?: string,
}

export const CardsGrid = styled.div<CardsGridProps>`
  display: grid;
  width: 100%;
  gap: 1.5rem;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  ${minWidthSize.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${minWidthSize.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`

interface CardGridProps {
  width?: string,
  height?: string,
  border?: string,
  borderRadius?: string
}

export const Card = styled.div<CardGridProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  border-radius: 5px;
  border: 0.5px solid ${colors.primary};
  background-color: ${colors.white};

  ${({width}) => width && `
    width: ${width};
  `}

  ${({height}) => height && `
    height: ${height};
  `}
`

interface CardImageProps {
  src: string,
  height?: string,
  width?: string,
  borderRadius?: string
}

export const CardImage = styled.img<CardImageProps>`
  display: block;
  width: 100%;
  height: auto;

  ${({width}) => width && `
    width: ${width};
  `}

  ${({height}) => height && `
    height: ${height};
  `}

  ${({borderRadius}) => borderRadius && `
    border-radius: ${borderRadius};
  `}
`

interface CardBodyProps {
  padding?: string
}

export const CardBody = styled.div<CardBodyProps>`
  flex: 1 1 auto;
  ${({padding}) => padding && `
    padding: ${padding};
  `}
`

export const CardTitle = styled(H2)``
export const CardText = styled(Para)``
