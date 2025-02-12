import styled from 'styled-components'

import {Field} from 'formik'

import colors from 'ui/colors'
import {Lato, LatoBold, BodyFontSizes} from 'ui/fonts'
import AlertCircle from 'ui/images/alert-circle.svg'

import {Image} from 'components/Image'

interface InputProps {
  error?: boolean | string | undefined | any,
  type?: string
}

export interface ButtonProps {
  primary?: boolean,
  accent?: boolean,
  width?: string,
  selected?: boolean,
  hover?: boolean,
  disabled?: boolean
}


const StyledLabel = styled.label`
  ${Lato};
  padding-top: 0.5rem;
  color: ${colors.black};
  display: block;
  &::first-letter {
    text-transform: capitalize;
  }
`

const StyledSelect = styled.select`
  ${Lato};
  padding: 0.5rem;
  background-color: ${colors.white};
  color: ${colors.black};
  border: none;
  border-radius: 5px;
  ${({error}: InputProps) => error && `
    border: 1px solid red;
  `}
`

const StyledInput = styled(Field)`
  ${Lato};
  padding: 0.5rem;
  background-color: ${colors.white};
  color: ${colors.black};
  border: none;
  border-radius: 5px;
  ${({type}: InputProps) => (type === 'checkbox' || type === 'radio') && `
    height: 16px;
    width: 16px;
    vertical-align: middle;
    margin-right: 0.5rem;
    margin-bottom: 0.3rem;
    border: none !important;
  `}
  ${({error}: InputProps) => error && `
    border: 1px solid red;
  `}
`

const StyledHiddenInput = styled.input`
  margin-bottom: 0;
  ${({error}: InputProps) => error && `
    border: 1px solid red;
  `}
`

const ErrorMessage = styled.span`
  ${Lato};
  font-size: 14px;
  color: red;
`

const ErrorAlertCircle = Image.attrs({
  src: AlertCircle,
})`
  height: 16px;
  width: 16px;
  margin: 0.5rem;
  fill: red;
`

const Button = styled.button<ButtonProps>`
  ${LatoBold};
  ${BodyFontSizes};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 156px;
  border-radius: 5px;
  border-style: none;
  outline:none;
  color: ${colors.black};
  ${({width}) => width && `
    width: ${width};
  `}

  ${({primary}) => primary && `
    background-color: ${colors.primary};
    color: ${colors.white};
  `}
  
  ${({accent}) => accent && `
    background-color: ${colors.accent};
  `}

  ${({primary, hover}) => primary && hover && `
    &:hover {
      color: ${colors.black};
      background-color: ${colors.accent};
    }
  `}
  
  ${({accent}) => accent && `
    background-color: ${colors.accent};
  `}

  ${({selected}) => selected && `
    background-color: ${colors.accent};
    color: ${colors.black};
  `}

  ${({disabled}) => disabled && `
    background-color: #cacccd;
    color: ${colors.black};
  `}

  ${({width}) => width && `
    width: ${width};
  `}

  &:focus {
    ${({selected}) => selected && `
      outline: none;
    `}
  }
`

export {
  StyledLabel,
  StyledInput,
  StyledHiddenInput,
  StyledSelect,
  ErrorMessage,
  ErrorAlertCircle,
  Button,
}
