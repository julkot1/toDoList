import type { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'
import styled from 'styled-components'
const StyledWrapper = styled.main`
  height: 10000px;
`
const Home: NextPage = () => {
  const { data: session } = useSession()

  return <StyledWrapper>sd</StyledWrapper>
}

export default Home
