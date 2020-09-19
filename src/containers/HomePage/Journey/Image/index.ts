import {Image} from 'components/Image'
import Laptop from 'ui/images/laptop-blog.jpg'

const HEIGHT = 480

const JourneyImage = Image.attrs({
  src: Laptop,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

export default JourneyImage
