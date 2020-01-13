import React, {PureComponent, ChangeEvent, FocusEvent} from 'react'

import {Para} from '../../ui/labels'

import {
  StyledInput, StyledLabel, ErrorMessage, ErrorAlertCircle,
} from './styled'

interface Props {
  label: string,
  id: string,
  name: string,
  type: string,
  helperText?: string | undefined,
  error: boolean | string | undefined,
  errorMessage: string | undefined,
  value: any,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: FocusEvent<HTMLInputElement>) => void,
  component?: string | undefined
}

class Input extends PureComponent<Props> {
  render() {
    const {
      label, id, name, type, error, errorMessage, value, onChange, onBlur, component,
      helperText, ...rest
    } = this.props
    return (
      <>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {helperText && <Para small>{helperText}</Para>}
        <StyledInput
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={error}
          component={component}
          {...rest}
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
