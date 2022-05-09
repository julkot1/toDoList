import React, { FunctionComponent } from 'react'
import { signOut } from 'next-auth/react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: rotate(0) scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 200ms ease-in-out;
  :hover {
    transform: rotate(-90deg) scale(1.1);
  }
`

type Props = {}
const SignOutButton: FunctionComponent<Props> = ({}) => {
  return (
    <StyledButton onClick={() => signOut()}>
      <Image
        src="/svg/signout.svg"
        alt="signout"
        width="30px"
        height="30px"
      ></Image>
    </StyledButton>
  )
}
export default SignOutButton
