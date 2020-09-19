import {Image} from 'components/Image'
import SecurityLockCoach from 'ui/images/lock-secure-coach.svg'
import DocumentCoach from 'ui/images/document-coach.svg'
import WatchCoach from 'ui/images/watch-coach.svg'

const HEIGHT = 80

export const WatchCoachImage = Image.attrs({
  src: WatchCoach,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
  margin-bottom: 10px;
`

export const DocumentCoachImage = Image.attrs({
  src: DocumentCoach,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
  margin-bottom: 10px;
`

export const SecurityLockImage = Image.attrs({
  src: SecurityLockCoach,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
  margin-bottom: 10px;
`
