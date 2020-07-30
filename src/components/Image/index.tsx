import styled from 'styled-components'

const HEIGHT = 80

interface ImageProps {
  bgImage: string,
  height?: number
}

export const DivBackgroundImage = styled.div<ImageProps>`
  ${({bgImage}) => bgImage && `
   background-image: url(${bgImage});
  `}
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: ${HEIGHT}px;
  ${({height}) => height && `
    height: ${height}px;
  `}
  max-width: 100%;
  margin: 15px;
`

export const Image = styled.img
