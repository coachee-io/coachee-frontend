import React, {PureComponent} from 'react'

import {
  StyledInput, StyledLabel, ErrorMessage, ErrorAlertCircle,
} from './styled'

interface Props {
  label: string,
  id: string,
  name: string,
  type: string,
  helper?: string | undefined,
  error: boolean | string | undefined,
  errorMessage: string | undefined,
  value: any,
  onChange: any,
  onBlur: any,
  component?: string | undefined
}

class Input extends PureComponent<Props> {
  render() {
    const {
      label, id, name, type, error, errorMessage, value, onChange, onBlur, component,
      helper,
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
          component={component}
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
