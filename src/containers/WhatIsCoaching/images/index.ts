import {Image} from 'components/Image'

import LaptopRemote from 'ui/images/laptop-remote.jpg'
import FeelingsOfJoy from 'ui/images/feelings-of-joy.svg'

const HEIGHT = 350

export const LaptopRemoteImage = Image.attrs({
  src: LaptopRemote,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

export const FeelingsOfJoyImage = Image.attrs({
  src: FeelingsOfJoy,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`
