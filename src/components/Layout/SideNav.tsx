import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {OL, LI, UL} from 'ui/list'

import {Anchor} from 'components/Routing'

const Nav = styled.nav`
  overflow-x: hidden;
`

interface Props {
  list: any[],
  ordered?: boolean,
  onClick: any
}


class SideNav extends PureComponent<Props> {
  render() {
    const {
      ordered,
      list,
      onClick,
    } = this.props

    if (ordered) {
      return (
        <Nav>
          <OL listStyle="none" noPadding>
            {list.map((item, index) => (
              <LI key={`${item.id}-${index}`}>
                <Anchor href={`${item.url}`} onClick={(e) => onClick(e, item.id)} primary noUnderline>
                  {`${index + 1}. ${item.text}`}
                </Anchor>
              </LI>
            ))}
          </OL>
        </Nav>
      )
    }

    return (
      <Nav>
        <UL listStyle="none" noPadding>
          {list.map((item, index) => (
            <LI key={`${item.id}-${index}`}>
              <Anchor href={`${item.url}`} onClick={(e) => onClick(e, item.id)} primary noUnderline>
                {`${index + 1}. ${item.text}`}
              </Anchor>
            </LI>
          ))}
        </UL>
      </Nav>
    )
  }
}

export default SideNav
