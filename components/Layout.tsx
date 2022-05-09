import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Loading from './auth/Loading'
import LogIn from './auth/login/LogIn'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import LoginButton from './auth/login/LoginButton'
import Navbar from './nav/Navbar'

type Props = {
  children: JSX.Element
}

const StyledText = styled.p`
  font-size: 1.5rem;
`
const StyledTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 2rem;
  font-weight: 900;
`
const TextWrapper = styled.div`
  text-align: center;
`
const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Layout: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <Loading />
  }
  if (session) {
    return (
      <>
        <Navbar />
        {children}
      </>
    )
  } else if (router.pathname === '/auth/signin') {
    return <>{children}</>
  }

  return (
    <LogIn>
      <LoginWrapper>
        <TextWrapper>
          <StyledTitle>To-Do List</StyledTitle>
          <StyledText>You are not logged in</StyledText>
        </TextWrapper>
        <LoginButton />
      </LoginWrapper>
    </LogIn>
  )
}
export default Layout
