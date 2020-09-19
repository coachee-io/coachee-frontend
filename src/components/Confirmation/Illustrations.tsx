import React, {FC} from 'react'

import HighFiveImg from 'ui/images/high-five.svg'
import RedirectWelcomeImg from 'ui/images/welcome-coachee.svg'
import {Image} from 'components/Image'

const HEIGHT = 350

const HighFiveImage = Image.attrs({
  src: HighFiveImg,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

const RedirectImage = Image.attrs({
  src: RedirectWelcomeImg,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

interface Props {
  type?: 'redirect' | 'default'
}

const Illustrations: FC<Props> = ({type}: Props) => {
  switch (type) {
    case 'redirect':
      return <RedirectImage />
    case 'default':
      return <HighFiveImage />
    default:
      return <HighFiveImage />
  }
}

export default Illustrations
