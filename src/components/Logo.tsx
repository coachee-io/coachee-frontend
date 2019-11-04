import styled from 'styled-components'

import coacheeLogo from '../ui/images/coachee-logo.png'

const HEIGHT = 67
const WIDTH = 166

const Logo = styled.img.attrs({
  src: coacheeLogo,
})`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`

export default Logo
