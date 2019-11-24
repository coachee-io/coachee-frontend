import React, {PureComponent} from 'react'
import {
  StyledLabel, StyledInput, ErrorMessage, ErrorAlertCircle,
} from './styled'

interface Props {
  id: string,
  label: string,
  name: string,
  value: any,
  checked: boolean | string | undefined,
  onChange: any,
  onBlur?: any,
  error?: boolean | string | undefined,
  errorMessage?: string | undefined
}

class Checkbox extends PureComponent<Props> {
  render() {
    const {
      id, label, name, value, checked, onChange, error, errorMessage, onBlur,
    } = this.props
    return (
      <>
        <StyledLabel key={id} htmlFor={id}>
          <StyledInput
            id={id}
            name={name}
            type="checkbox"
            value={value}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
          />
          {label}
        </StyledLabel>
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

export default Checkbox
