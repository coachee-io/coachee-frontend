import styled from 'styled-components'

const HEIGHT = 190

interface ImageProps {
  bgImage: string
}

const Image = styled.div`
  background-image: ${({bgImage}: ImageProps) => bgImage && `
   url(${bgImage});
  `}
  background-repeat: no-repeat;
  background-position: center;
  height: ${HEIGHT}px
  max-width: 100%;
  margin: 15px;
`

export default Image
