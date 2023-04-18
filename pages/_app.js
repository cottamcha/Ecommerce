import '../styles/globals.scss'
import { Provider } from "react-redux"
import store from "../store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

import Head from 'next/head'

let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Inferno</title>
        <meta name="description" content="InfernoMart - Hot deals that you wont want to miss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>    
    </>
  )
}

export default MyApp
