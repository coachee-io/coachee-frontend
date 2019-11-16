import styled from 'styled-components'
import {Form} from 'formik'
import colors from '../../ui/colors'

interface FormProps {
  maxWidth?: number
}

const StyledForm = styled(Form)`
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

export default StyledForm
