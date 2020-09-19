import {Image} from 'components/Image'

import Founder from 'ui/images/elisabete-founder.jpg'
import TermsLSO from 'ui/images/terms-lso.svg'
import OnlineChat from 'ui/images/online-chat.svg'

const HEIGHT = 350

export const FounderImage = Image.attrs({
  src: Founder,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

export const OnlineChatImage = Image.attrs({
  src: OnlineChat,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`
