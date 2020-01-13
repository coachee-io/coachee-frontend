import React, {PureComponent} from 'react'

import {
  StyledHiddenInput, ErrorMessage,
} from './styled'

interface Props {
  id: string,
  name: string,
  error: boolean | string | undefined,
  errorMessage: string | undefined,
  value?: string | number | undefined
}

class Hidden extends PureComponent<Props> {
  render() {
    const {
      id, name, error, errorMessage, value,
    } = this.props
    return (
      <>
        <StyledHiddenInput
          id={id}
          name={name}
          type="hidden"
          value={value}
          error={error}
        />
        {error && (
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        )}
      </>
    )
  }
}

export default Hidden
