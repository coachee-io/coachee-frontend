import {css} from 'styled-components'

const LINE_HEIGHT = 1.2

export const Lato = css`
  font-family: Lato, sans-serif;
  line-height: ${LINE_HEIGHT};
`

export const OpenSans = css`
  font-family: Lato, sans-serif;
  line-height: ${LINE_HEIGHT};
`

export const LatoBold = css`
  font-weight: bold;
  ${Lato};
`

export const OpenSansBold = css`
  font-weight: bold;
  ${OpenSans};
`
