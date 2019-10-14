import React from 'react';
import {Container} from "react-bootstrap"
import styled from "styled-components"

// Container height is calculated based on the viewport and footer height

const StyledContainer = styled(Container)`
  height: calc(100vh - 200px);
`

const Main = (props: any) => {
  return (
    <StyledContainer {...props} />
  )
}

export default Main