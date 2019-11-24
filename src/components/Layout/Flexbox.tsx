import styled from 'styled-components'

const DISPLAY_FLEX = 'flex'
const DIRECTION_COLUMN = 'column'
const DIRECTION_ROW = 'row'

export const FlexRow = styled.div`
  display: ${DISPLAY_FLEX};
  flex-direction: ${DIRECTION_ROW};
  height: 100%;
  width: 100%;
`

export const FlexCol = styled.div`
  display: ${DISPLAY_FLEX};
  flex-direction: ${DIRECTION_COLUMN};
  height: 100%;
  width: 100%;
`

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

export const FlexColAlignEnd = styled(FlexCol)`
  align-items: flex-end;
`

export const FlexColJustifyEnd = styled(FlexCol)`
  justify-content: flex-end;
`

export const FlexColCenter = styled(FlexCol)`
  align-items: center;
  justify-content: center;
`
