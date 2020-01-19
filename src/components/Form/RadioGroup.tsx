import React, {PureComponent, ReactNode} from 'react'

import {Para} from '../../ui/labels'

import {
  StyledInput, StyledLabel, ErrorMessage, ErrorAlertCircle,
} from './styled'

interface List {
  label: string,
  id: string,
  value: string,
  checked: boolean,
  onChange: any,
  onBlur: any
}

interface Props {
  label: string,
  helperText?: ReactNode,
  name: string,
  list: List[],
  error: boolean | string | undefined,
  errorMessage: string | undefined,
  value: any,
  onChange: any,
  onBlur: any
}

class RadioGroup extends PureComponent<Props> {
  render() {
    const {
      label, name, list, error, errorMessage, value, onChange, onBlur, helperText,
    } = this.props
    return (
      <>
        <StyledLabel>
          {label}
        </StyledLabel>
        {helperText && <Para small>{helperText}</Para>}
        {list.map((radio) => (
          <StyledLabel key={radio.id} htmlFor={radio.id}>
            <StyledInput
              id={radio.id}
              name={name}
              value={radio.value}
              type="radio"
              onChange={onChange}
              onBlur={onBlur}
              checked={value === radio.value}
            />
            {radio.label}
          </StyledLabel>
        ))}
        {error && (
        <ErrorMessage>
          {errorMessage}
          {' '}
          <ErrorAlertCircle />
        </ErrorMessage>
        )}
      </>
    )
  }
}

export default RadioGroup
