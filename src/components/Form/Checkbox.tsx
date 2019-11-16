import React, {PureComponent} from 'react'
import {FieldArray} from 'formik'
import {StyledLabel, StyledInput} from './styled'

interface Props {
  id: string,
  label: string,
  name: string,
  value: any,
  checked: boolean | string | undefined,
  onChange: any
}

class Checkbox extends PureComponent<Props> {
  render() {
    const {
      id, label, name, value, checked, onChange,
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
          />
          {label}
        </StyledLabel>
      </>
    )
  }
}

export default Checkbox
