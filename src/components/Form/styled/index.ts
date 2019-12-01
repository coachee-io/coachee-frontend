import styled from 'styled-components'

import {Field} from 'formik'

import colors from '../../../ui/colors'
import {Lato, LatoBold, BodyFontSizes} from '../../../ui/fonts'
import AlertCircle from '../../../ui/images/alert-circle.svg'

import {Image} from '../../Image'


interface InputProps {
  error?: boolean | string | undefined | any,
  type?: string
}

interface ButtonProps {
  primary?: boolean,
  accent?: boolean,
}


const StyledLabel = styled.label`
  ${Lato};
  padding-top: 0.5rem;
  color: ${colors.black};
  display: inline-block;
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
  margin-top: 2rem;
  border-radius: 5px;
  border-style: none;
  ${({primary}) => primary && `
    background-color: ${colors.primary};
    color: ${colors.white};
  `}
  ${({accent}) => accent && `
    background-color: ${colors.accent};
    color: ${colors.black};
  `}

  &:hover {
    ${({primary}) => primary && `
      color: ${colors.white};
    `}
    ${({accent}) => accent && `
      color: ${colors.black};
    `}
  }
`

export {
  StyledLabel,
  StyledInput,
  StyledSelect,
  ErrorMessage,
  ErrorAlertCircle,
  Button,
}
