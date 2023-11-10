import { ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import {MainLayaout} from '../components//layouts/Mainlayout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<PageTransitionEvent, IP> &{
  getLayout?: (page:ReactElement)=> ReactNode
}
type AppPropsWithLayout = AppProps &{
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <MainLayaout>
      <Component {...pageProps} />
    </MainLayaout>
  )
}
