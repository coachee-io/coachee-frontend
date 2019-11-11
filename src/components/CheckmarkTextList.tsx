import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {Para} from '../ui/labels'

import Checkmark from '../ui/images/checkmark.svg'

const List = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`

const Icon = styled.img.attrs({
  src: Checkmark,
  alt: 'Checkmark',
})`
  flex-shrink: 0;
  height: 12px;
  width: 16px;
  margin-top: 0.3rem;
  margin-right: 1rem;
`

interface Props {
  list: string[]
}

class CheckmarkTextList extends PureComponent<Props> {
  render() {
    const {list} = this.props
    return (
      <>
        {list.map((text) => (
          <List key={text}>
            <Icon />
            <Para>
              {text}
            </Para>
          </List>
        ))}
      </>
    )
  }
}

export default CheckmarkTextList
