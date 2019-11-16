import React, {PureComponent} from 'react'

import {
  StyledInput, StyledLabel, ErrorMessage, ErrorAlertCircle,
} from './styled'

interface Props {
  label: string,
  id: string,
  name: string,
  type: string,
  error: boolean | string | undefined,
  errorMessage: string | undefined,
  value: any,
  onChange: any,
  onBlur: any
}

class Input extends PureComponent<Props> {
  render() {
    const {
      label, id, name, type, error, errorMessage, value, onChange, onBlur,
    } = this.props
    return (
      <>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={error}
        />
        {error && (
          <ErrorMessage>
            {errorMessage}
            <ErrorAlertCircle />
          </ErrorMessage>
        )}
      </>
    )
  }
}

export default Input
