import styled from 'styled-components'

interface Props {
  flexBasis: string,
  flexDirection?: string,
  flexWrap?: string,
  alignItems?: string,
  justifyContent?: string,
}

export const Flex = styled.div<Props>`
  display: flex;
  ${({flexBasis}) => flexBasis && `
    flex-basis: ${flexBasis};
  `}
  ${({flexDirection}) => flexDirection && `
    flex-direction: ${flexDirection};
  `}
  ${({flexWrap}) => flexWrap && `
    flex-wrap: ${flexWrap};
  `}
  ${({alignItems}) => alignItems && `
    align-items: ${alignItems};
  `}
  ${({justifyContent}) => justifyContent && `
    justify-content: ${justifyContent};
  `}
`
