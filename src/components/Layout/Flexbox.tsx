import styled from 'styled-components'

const DISPLAY_FLEX = 'flex'
const DIRECTION_COLUMN = 'column'
const DIRECTION_ROW = 'row'

export const FlexRowAlignCenter = styled.div`
  display: ${DISPLAY_FLEX};
  align-items: center;
`

export const FlexColAlignCenter = styled.div`
  display: ${DISPLAY_FLEX};
  flex-direction: ${DIRECTION_COLUMN};
  align-items: center;
`

export const FlexRowJustifyCenter = styled.div`
  display: ${DISPLAY_FLEX};
  justify-content: center;
`

export const FlexRow = styled.div`
  display: ${DISPLAY_FLEX};
  flex-direction: ${DIRECTION_ROW};
`

export const FlexCol = styled.div`
  display: ${DISPLAY_FLEX};
  flex-direction: ${DIRECTION_COLUMN};
`
