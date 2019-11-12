import {css} from 'styled-components'

const LINE_HEIGHT_OPEN_SANS = 1
const LINE_HEIGHT_LATO = 1.5

export interface BodyFontSizesProps {
  small?: boolean,
  large?: boolean
}

export const BodyFontSizes = css`
  font-size: 1rem; // 16px
  ${({small}: BodyFontSizesProps) => small && `
    font-size: 0.75rem; // 12px
  `}
  ${({large}: BodyFontSizesProps) => large && `
    font-size: 1.5rem; // 24px
  `}
`

export const HeadingFontSizes = css``

export const Lato = css`
  font-family: Lato, sans-serif;
  line-height: ${LINE_HEIGHT_LATO};
`

export const OpenSans = css`
  font-family: Lato, sans-serif;
  line-height: ${LINE_HEIGHT_OPEN_SANS};
`

export const LatoBold = css`
  font-weight: bold;
  ${Lato};
`

export const OpenSansBold = css`
  font-weight: bold;
  ${OpenSans};
`
