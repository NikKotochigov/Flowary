// import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material'
import Layout from '../src/components/layout/layout'
import { chains, wagmiClient } from '../src/consts/wagmaConfiguration'
import { theme } from '../src/theme'
// import { createEmotionCache } from '../src/utils/create-emotion-cache';
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from 'wagmi';
import { Provider } from 'react-redux';
import {store} from '../src/store/store'

import "@rainbow-me/rainbowkit/styles.css";

// const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component,
  // emotionCache = clientSideEmotionCache, 
  pageProps }) => (
  <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* <CacheProvider value={emotionCache}> */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* </CacheProvider> */}
          </ThemeProvider>
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  </>
)

export default MyApp
