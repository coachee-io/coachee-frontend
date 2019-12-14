import React, {PureComponent, ReactNode} from 'react'

import Error from '../Error'

interface Props {
  loading?: boolean | undefined | null,
  LComponent?: ReactNode
  error: string | number | undefined | null,
  errorStatus: number | undefined
  children: ReactNode,
}

class Loading extends PureComponent<Props> {
  render() {
    const {
      loading, error, errorStatus, children, LComponent,
    } = this.props

    if (error && !errorStatus) {
      return <Error />
    }

    if (error && errorStatus) {
      return <Error status={errorStatus} />
    }

    if (loading) {
      return LComponent
    }

    return children
  }
}

export default Loading
