import LogIn from 'components/auth/login/LogIn'
import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledProvider = styled.div`
  padding: 5% 0;
  width: 80%;
`
const ProviderButton = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1.15rem;
  background-color: transparent;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #231651;
  position: relative;
  z-index: 2;
  ::after {
    z-index: -1;
    content: '';
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #231651;
    position: absolute;
    transition: width ease-in-out 200ms;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`
export default function SignIn({ providers }: any) {
  return (
    <LogIn>
      <StyledWrapper>
        {Object.values(providers).map((provider) => (
          <StyledProvider key={(provider as any).name}>
            <ProviderButton onClick={() => signIn((provider as any).id)}>
              Sign in with {(provider as any).name}
            </ProviderButton>
          </StyledProvider>
        ))}
      </StyledWrapper>
    </LogIn>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
