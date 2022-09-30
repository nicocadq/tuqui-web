import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";

import "styles/globals.css";

const theme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
