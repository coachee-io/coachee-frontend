import React, {PureComponent, ReactNode} from 'react'
import {throttle} from 'lodash'

import {mediaQueryFunctions, MediaQueryInterface} from '../ui/global/mediaQuery'

interface State {
  media: MediaQueryInterface | any
}

interface Props {
  children: (media: MediaQueryInterface) => ReactNode
}

class MediaQuery extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      media: {
        ...mediaQueryFunctions(window.innerWidth),
      },
    }
  }

    componentDidMount = () => {
      window.addEventListener('resize', throttle(this.resize, 100))
    }

    componentWillUnmount = () => {
      window.removeEventListener('resize', this.resize)
    }

    resize = () => {
      this.setState({media: {...mediaQueryFunctions(window.innerWidth)}})
    }

    render() {
      const {children} = this.props
      const {media} = this.state
      return children(media)
    }
}

export default MediaQuery
