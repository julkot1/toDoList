import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '../components/Layout'
import { createGlobalStyle } from 'styled-components'
import { useRouter } from 'next/router'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #F9F3EE;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inter', sans-serif;

  }
`
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
