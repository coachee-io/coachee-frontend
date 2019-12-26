import React, {PureComponent} from 'react'

import {
  Button, ButtonProps, ErrorMessage, ErrorAlertCircle,
} from './styled'
import Flex from '../Layout/Flexbox'

interface Props extends ButtonProps {
  isLoading: boolean,
  error: any | null,
  defaultText: string,
  loadingText?: string,
}


class SubmitButton extends PureComponent<Props> {
  render() {
    const {
      isLoading, error, primary, accent, loadingText, defaultText,
    } = this.props
    return (
      <Flex flexDirection="column" marginTop="30px">
        {error && (
        <ErrorMessage>
          <ErrorAlertCircle />
          {error.message}
        </ErrorMessage>
        )}
        <Button primary={primary} accent={accent} type="submit">
          {isLoading ? loadingText : defaultText}
        </Button>
      </Flex>
    )
  }
}

export default SubmitButton
