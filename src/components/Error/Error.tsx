import React, {PureComponent} from 'react'

import NotFound from './Codes/NotFound'
import ServiceUnavailable from './Codes/ServiceUnavailable'
import Unauthorized from './Codes/Unauthorized'

interface Props {
  status?: number
}

class Error extends PureComponent<Props> {
  render() {
    const {status} = this.props

    if (status && status === 401) {
      return <Unauthorized />
    }

    if (status && status >= 500) {
      return <ServiceUnavailable />
    }

    // 404
    return <NotFound />
  }
}

export default Error
