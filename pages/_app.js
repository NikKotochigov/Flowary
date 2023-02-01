// import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material'
import Layout from '../src/components/layout/layout'
import { chains, wagmiClient } from '../src/consts/wagmaConfiguration'
import { theme } from '../src/theme'
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from 'wagmi';

import "@rainbow-me/rainbowkit/styles.css";
// import { createEmotionCache } from '../utils/create-emotion-cache';

// const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component,
  // emotionCache = clientSideEmotionCache, 
  pageProps }) => (
  <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider theme={theme}>
          {/* <CacheProvider value={emotionCache}> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* </CacheProvider> */}
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </>
)

export default MyApp
