import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
type Props = {}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
const ImageContainer = styled.div`
  width: 10%;
  height: 10%;
`
const Loading: FunctionComponent<Props> = ({}) => {
  return (
    <StyledWrapper>
      <ImageContainer>
        <Image
          src="/svg/loading.svg"
          alt="loading"
          width="300px"
          height="300px"
        ></Image>
      </ImageContainer>
    </StyledWrapper>
  )
}
export default Loading
