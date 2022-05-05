import type { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'
import styled from 'styled-components'
import Image from 'next/image'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      {session && (
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
      )}
    </>
  )
}

export default Home
