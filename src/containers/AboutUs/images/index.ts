import {Image} from '../../../components/Image'

import BeginChat from '../../../ui/images/begin-chat.svg'
import TermsLSO from '../../../ui/images/terms-lso.svg'
import OnlineChat from '../../../ui/images/online-chat.svg'

const HEIGHT = 350

export const BeginChatImage = Image.attrs({
  src: BeginChat,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

export const TermsLSOImage = Image.attrs({
  src: TermsLSO,
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
