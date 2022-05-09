import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import ProjectsList from './ProjectsList'
type Props = {}
const Title = styled.h1`
  font-size: 2.5rem;
`
const MyProjects: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <Title>My Projects</Title>
      <ProjectsList />
    </div>
  )
}
export default MyProjects
