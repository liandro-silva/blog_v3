import * as React from "react";
import Head from "next/head";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";

import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../helpers/createEmotionCache";

import theme from "../theme";
import { FragmenStackConsumer } from "src/components/fragment-stack/contex";
import { FragmentStack } from "src/components/fragment-stack";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FragmenStackConsumer>
          <FragmentStack />
          <Component {...pageProps} />
        </FragmenStackConsumer>
      </ThemeProvider>
    </CacheProvider>
  );
}
