import styled from 'styled-components'

const DISPLAY_FLEX = 'flex'
const DIRECTION_COLUMN = 'column'
const DIRECTION_ROW = 'row'

export const FlexAlignCenter = styled.div`
  display: ${DISPLAY_FLEX};
  align-items: center;
`

export const FlexboxColAlignCenter = styled.div`
  display: ${DISPLAY_FLEX};
  flex-direction: ${DIRECTION_COLUMN};
  align-items: center;
`

export const FlexJustifyCenter = styled.div`
  display: ${DISPLAY_FLEX};
  justify-content: center;
`
