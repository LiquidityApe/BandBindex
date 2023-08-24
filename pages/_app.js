import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import { wrapper, persistor } from "../store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import Navbar from "@/Components/navbar_components/Navbar";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

// Redux Persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useStore } from "react-redux";
import { useState } from "react";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  // const stores = useStore();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  const Layout = ({ Component, pageProps }) => {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />);
    } else {
      return <Component {...pageProps} />;
    }
  };
  const chains = [bsc, bscTestnet];
  const projectId = "dd87a11ce89ece1fe6a6e70fdd10a0da";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <GoogleOAuthProvider clientId='704139097438-0r081l07jdsiru0ktse80r813pm6mlm3.apps.googleusercontent.com'>
          <Provider store={store}>
            {/* <PersistGate persistor={persistor} loading={<div>Loading</div>}> */}
            <CacheProvider value={emotionCache}>
              <Head>
                <meta
                  name='viewport'
                  content='initial-scale=1, width=device-width'
                />
                <meta name="description" content="The Bear and Bull Index provides a comprehensive solution to the challenges faced in the cryptocurrency market. Through LunarCrush’s AI-driven social insights, simplified analysis, and community engagement, it empowers investors to make informed decisions, navigate market volatility, and stay ahead in the ever-evolving world of cryptocurrencies." />
              </Head>
              <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Navbar />
                <Layout Component={Component} pageProps={pageProps} />
              </ThemeProvider>
            </CacheProvider>
            {/* </PersistGate> */}
          </Provider>
        </GoogleOAuthProvider>
      </WagmiConfig>
      <Web3Modal
        tokenContracts={{ 97: "0xFaaBD9b1E4FDE7C42BF10a8165b21D9Eb19141a4" }}
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode='dark'
        themeVariables={{
          "--w3m-font-family": "Roboto, sans-serif",
          "--w3m-accent-color": "#297373",
        }}
      />
    </>
  );
}

export default App;
// export default wrapper.useWrappedStore(App);
