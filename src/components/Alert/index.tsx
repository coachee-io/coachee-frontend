import React, {PureComponent} from 'react'
import {Alert} from 'react-bootstrap'
import styled from 'styled-components'

import {Para} from 'ui/labels'
import colors from 'ui/colors'

const StyledAlert = styled(Alert)`
  background-color: ${colors.accent};
  width: 100%;
  max-width: 450px;
  padding: .75rem 0;
  &.alert-dismissible {
    padding-right: 0;
  }
`

interface State {
  show?: boolean
}

interface Props {
  show?: boolean
}

class AlertMessage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      show: props.show,
    }
  }

  handleClose = () => {
    this.setState({show: false})
  }

  render() {
    const {show} = this.state
    return (
      <StyledAlert onClose={this.handleClose} dismissible show={show}>
        <Para textAlign="center" bold>
          Your password has now been changed.
          <br />
          You can now login.
        </Para>
      </StyledAlert>
    )
  }
}

export default AlertMessage
