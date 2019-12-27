import React, {PureComponent, MouseEvent} from 'react'

import {
  Button, ButtonProps, ErrorMessage, ErrorAlertCircle,
} from './styled'
import Flex from '../Layout/Flexbox'

interface Props extends ButtonProps {
  isLoading: boolean,
  error: any | null,
  defaultText: string,
  loadingText?: string,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}


class SubmitButton extends PureComponent<Props> {
  render() {
    const {
      isLoading, error, loadingText, defaultText, onClick, primary, accent, width,

    } = this.props
    return (
      <Flex flexDirection="column" marginTop="30px">
        {error && (
        <ErrorMessage>
          <ErrorAlertCircle />
          {error.message}
        </ErrorMessage>
        )}
        {onClick && (
          <Button primary={primary} accent={accent} type="submit" onClick={onClick} width={width}>
            {isLoading ? loadingText : defaultText}
          </Button>
        )}
        {!onClick && (
          <Button primary={primary} accent={accent} type="submit" width={width}>
            {isLoading ? loadingText : defaultText}
          </Button>
        )}
      </Flex>
    )
  }
}

export default SubmitButton
