import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import LoginContainer from './LoginContainer'
type Props = {
  children: JSX.Element
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
const LogIn: FunctionComponent<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <LoginContainer>{children}</LoginContainer>
    </StyledWrapper>
  )
}
export default LogIn
