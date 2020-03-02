import React, {PureComponent, ReactNode} from 'react'

import NotFound from './Codes/NotFound'
import ServiceUnavailable from './Codes/ServiceUnavailable'
import Unauthorized from './Codes/Unauthorized'
import Generic from './Codes/Generic'

interface Props {
  status?: number,
  message?: ReactNode
}

class ErrorMessage extends PureComponent<Props> {
  render() {
    const {status, message} = this.props

    if (status && status === 401) {
      return <Unauthorized />
    }

    if (status && status === 404) {
      return <NotFound />
    }

    if (status && status >= 500) {
      return <ServiceUnavailable />
    }

    return <Generic message={message} />
  }
}

export default ErrorMessage
