import styled from 'styled-components'

import {Image} from '../Image'

import colors from '../../ui/colors'
import {Lato, LatoBold} from '../../ui/fonts'

import AlertCircle from '../ui/images/alert-circle.svg'

interface FormProps {
  maxWidth?: number
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 30px;
  background-color: #f7f7f7;
  color: ${colors.black};
  width: 100%;
  max-width: ${({maxWidth}: FormProps) => maxWidth && `
    ${maxWidth}px;
  `}
`

const Label = styled.label`
  ${Lato};
  padding-top: 0.5rem;
  color: ${colors.black};
`

interface InputProps {
  error: boolean | '' | undefined
}

const Input = styled.input`
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

const ErrorMessage = styled.span`
  ${Lato};
  padding: 0.5rem 0;
  color: red;
`

const ErrorAlertCircle = Image.attrs({
  src: AlertCircle,
})`
  height: 16px;
  width: 16px;
  margin: 0.5rem;
  color: red;
`

interface ButtonProps {
  primary?: boolean,
  accent?: boolean,
}

const Button = styled.button`
  ${LatoBold};
  display: block;
  font-size: 16px;
  line-height: 45px;
  height: 44px;
  width: 156px;
  margin-top: 2rem;
  border-radius: 5px;
  border-style: none;
  text-align: center;
  ${({primary}: ButtonProps) => primary && `
    background-color: ${colors.primary};
    color: ${colors.white};
  `}
  ${({accent}: ButtonProps) => accent && `
    background-color: ${colors.accent};
    color: ${colors.black};
  `}

  &:hover {
    ${({primary}: ButtonProps) => primary && `
      color: ${colors.white};
    `}
    ${({accent}: ButtonProps) => accent && `
      color: ${colors.black};
    `}
  }
`

export {
  Label,
  Input,
  ErrorMessage,
  ErrorAlertCircle,
  Button,
}

export default Form
