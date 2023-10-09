import { AppProps } from "next/app"
import "@/app/globals.css"
import Head from "next/head"

export default function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}