import {Image} from 'components/Image'
import CoachSearch from 'ui/images/looking-for-coaches.svg'

const HEIGHT = 350

const CoachSearchImage = Image.attrs({
  src: CoachSearch,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

export default CoachSearchImage
