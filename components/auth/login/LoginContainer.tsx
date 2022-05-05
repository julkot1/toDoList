import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import LoginButton from './LoginButton'
type Props = { children: JSX.Element }
const StyledWrapper = styled.div`
  width: 25%;
  height: 50%;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 0px 15px -5px #3b404e;
  background-color: #fafafa;
  padding: 2rem;
  @media only screen and (max-width: 1200px) {
    width: 40%;
    height: 50%;
  }
  @media only screen and (max-width: 900px) {
    width: 60%;
    height: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    height: 90%;
  }
`

const LoginContainer: FunctionComponent<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}
export default LoginContainer
