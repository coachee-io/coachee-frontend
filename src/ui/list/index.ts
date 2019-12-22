import styled from 'styled-components'

interface ListProps {
  listStyle?: string
  padding?: string,
  noPadding?: boolean
}

export const OL = styled.ol<ListProps>`
  margin: 0;
  ${({listStyle}) => listStyle && `
    list-style: ${listStyle};
  `}
  ${({noPadding}) => noPadding && `
    padding: 0;
  `}
  ${({padding}) => padding && `
    padding: ${padding};
  `}
`

export const UL = styled.ul<ListProps>`
  margin: 0;
  ${({listStyle}) => listStyle && `
    list-style: ${listStyle};
  `}
  ${({noPadding}) => noPadding && `
    padding: 0;
  `}
  ${({padding}) => padding && `
    padding: ${padding};
  `}
`

export const LI = styled.li`
  &:first-child {
    margin-top: 0rem;
  }
  margin-top: 0.5rem;
`
