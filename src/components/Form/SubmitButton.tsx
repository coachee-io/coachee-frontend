import React, {PureComponent, MouseEvent} from 'react'

import {
  Button, ButtonProps, ErrorMessage, ErrorAlertCircle,
} from './styled'
import Flex from '../Layout/Flexbox'

interface Props extends ButtonProps {
  isLoading: boolean,
  disabled?: boolean,
  error?: Error | null | any,
  defaultText: string,
  loadingText?: string,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}


class SubmitButton extends PureComponent<Props> {
  render() {
    const {
      isLoading, error, loadingText, defaultText, onClick, primary, accent, width,
      disabled,
    } = this.props
    return (
      <Flex flexDirection="column" marginTop="15px">
        {error && (
        <ErrorMessage>
          <ErrorAlertCircle />
          {error.message}
        </ErrorMessage>
        )}
        {onClick && (
          <Button disabled={disabled} primary={primary} accent={accent} type="submit" onClick={onClick} width={width}>
            {isLoading ? loadingText : defaultText}
          </Button>
        )}
        {!onClick && (
          <Button disabled={disabled} primary={primary} accent={accent} width={width}>
            {isLoading ? loadingText : defaultText}
          </Button>
        )}
      </Flex>
    )
  }
}

export default SubmitButton
