import styled from 'styled-components'

const HEIGHT = 190

interface ImageProps {
  bgImage: string,
  height?: number
}

export const DivBackgroundImage = styled.div`
  background-image: ${({bgImage}: ImageProps) => bgImage && `
   url(${bgImage});
  `}
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: ${HEIGHT}px;
  ${({height}: ImageProps) => height && `
    height: ${height}px;
  `}
  max-width: 100%;
  margin: 15px;
`

export const Image = styled.img
