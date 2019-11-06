import {Image} from '../../../../components/Image'
import Winners from '../../../../ui/images/hero.svg'

const HEIGHT = 350

const HeroImage = Image.attrs({
  src: Winners,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

export default HeroImage
