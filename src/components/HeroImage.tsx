import styled from 'styled-components'

import Winners from '../ui/images/hero.svg'

const HEIGHT = 350

const HeroImage = styled.img.attrs({
  src: Winners,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

export default HeroImage
