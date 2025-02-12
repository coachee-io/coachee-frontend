import styled, {css} from 'styled-components'

interface PulseProps {
  circle?: boolean,
  width?: number,
  height?: number,
  marginTop?: number
}

const PulseAnimation = css`
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

export const Pulse = styled.span<PulseProps>`
  display: flex;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  border-radius: 5px;
  ${PulseAnimation};
  ${({circle}) => circle && `
    border-radius: 50%;
  `}
  ${({width}) => width && `width: ${width}px;`}
  ${({height}) => height && `height: ${height}px;`}
  ${({marginTop}) => marginTop && `margin-top: ${marginTop}px`};
`
