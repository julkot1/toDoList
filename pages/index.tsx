import MyProjects from 'components/myprojects/MyProjects'
import type { NextPage } from 'next'
import styled from 'styled-components'

const StyledWrapper = styled.main`
  width: 100%;
  padding: 5%;
`
const Home: NextPage = () => {
  return (
    <StyledWrapper>
      <MyProjects />
    </StyledWrapper>
  )
}

export default Home
