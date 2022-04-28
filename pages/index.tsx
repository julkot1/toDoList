import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
import styled from 'styled-components'
import Image from 'next/image'
const Article = styled.div`
  width: 100px;
  height: 20%;
  background-color: #ff00ff;
`

const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session.user?.name}
        <Image
          width={64}
          height={64}
          alt="profile"
          src={session.user?.image || ''}
        ></Image>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Home
