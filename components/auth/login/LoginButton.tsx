import { signIn } from 'next-auth/react'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
type Props = {}
const StyledButton = styled.button`
  padding: 1rem 3rem;
  font-size: 1.75rem;
  background-color: transparent;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #231651;
  position: relative;
  z-index: 2;
  ::after {
    z-index: -1;
    content: '';
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #231651;
    position: absolute;
    transition: width ease-in-out 200ms;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`

const LoginButton: FunctionComponent<Props> = ({}) => {
  return <StyledButton onClick={() => signIn()}>login</StyledButton>
}
export default LoginButton
