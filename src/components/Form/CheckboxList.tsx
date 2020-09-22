import React, {PureComponent} from 'react'
import {FieldArray} from 'formik'

import {Para} from 'ui/labels'

import Checkbox from './Checkbox'
import {
  StyledLabel, ErrorMessage, ErrorAlertCircle,
} from './styled'

interface Props {
  label: string,
  name: string,
  values: any,
  helperText?: string,
  list: any[],
  errors: any,
  touched: any
}

class CheckboxList extends PureComponent<Props> {
  handleChange = (ev: any, arrayHelpers: any) => {
    const {values, name} = this.props
    if (ev.target.checked) {
      arrayHelpers.push(ev.target.id)
    } else {
      const idx = values[name].findIndex((el: string) => el === ev.target.id)
      arrayHelpers.remove(idx)
    }
  }

  render() {
    const {
      name, label, helperText, list, values, errors, touched,
    } = this.props
    return (
      <>
        <FieldArray
          name={name}
          render={(arrayHelpers) => (
            <>
              <StyledLabel>
                {label}
              </StyledLabel>
              {helperText && <Para small>{helperText}</Para>}
              {list.map((item: any) => (
                <Checkbox
                  key={item.id}
                  id={item.id}
                  checked={values[name]?.includes(item.id as never)}
                  name={name}
                  label={item.name}
                  onChange={(e: any) => this.handleChange(e, arrayHelpers)}
                />
              ))}
              {typeof errors.expertise === 'string' && touched.expertise && (
                <ErrorMessage>
                  {errors.expertise}
                  <ErrorAlertCircle />
                </ErrorMessage>
              )}
            </>
          )}
        />
      </>
    )
  }
}

export default CheckboxList
