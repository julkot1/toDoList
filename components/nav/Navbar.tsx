import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import UserInfo from './UserInfo'

const StyledNavbar = styled.nav`
  width: 100%;
  height: 3rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #231651;
  color: white;
  position: sticky;
  top: 0;
`
const Title = styled.h1`
  font-size: 1.25rem;
`
type Props = {}
const Navbar: FunctionComponent<Props> = ({}) => {
  return (
    <StyledNavbar>
      <Title>TO DO LIST</Title>
      <UserInfo />
    </StyledNavbar>
  )
}
export default Navbar
