import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {getMargin} from '../Layout/SetMargin'
import {FlexCol} from '../Layout/Flexbox'

import {H3} from '../../ui/headings'
import {Para} from '../../ui/labels'
import Checkmark from '../../ui/images/checkmark.svg'

const List = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`

interface IconProps {
  mt?: number
}

const Icon = styled.img.attrs({
  src: Checkmark,
  alt: 'Checkmark',
})`
  flex-shrink: 0;
  height: 12px;
  width: 16px;
  margin-right: 1rem;
  vertical-align: middle;
  ${({mt}: IconProps) => mt && getMargin('mt', mt)}
`

interface List {
  text: string,
  heading?: string
}

interface Props {
  list: List[],
  paraSmall?: boolean,
  paraLarge?: boolean
}

class CheckmarkList extends PureComponent<Props> {
  render() {
    const {list, paraSmall, paraLarge} = this.props
    return (
      <>
        {list.map((item) => (
          <List key={item.text}>
            {item.heading && (
              <>
                <Icon mt={2} />
                <FlexCol>
                  <H3>
                    {item.heading}
                  </H3>
                  <Para small={paraSmall} large={paraLarge}>
                    {item.text}
                  </Para>
                </FlexCol>
              </>
            )}
            {!item.heading && (
              <>
                <Icon mt={5} />
                <Para small={paraSmall} large={paraLarge}>
                  {item.text}
                </Para>
              </>
            )}

          </List>
        ))}
      </>
    )
  }
}

export default CheckmarkList
