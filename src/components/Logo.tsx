import styled from 'styled-components'

import coacheeLogo from '../ui/images/coachee-logo.svg'

const HEIGHT = 38
const WIDTH = 148

const Logo = styled.img.attrs({
  src: coacheeLogo,
})`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`

export default Logo
