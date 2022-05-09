import { useSession } from 'next-auth/react'
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import SignOutButton from './SignOutButton'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 0.25rem;
  }
`
type Props = {}
const UserInfo: FunctionComponent<Props> = ({}) => {
  const { data: session } = useSession()
  return (
    <StyledWrapper>
      {session && (
        <>
          <Image
            width={32}
            height={32}
            alt="profile"
            src={session.user?.image || ''}
          ></Image>
          <p> {session.user?.name}</p>
          <SignOutButton />
        </>
      )}
    </StyledWrapper>
  )
}
export default UserInfo
