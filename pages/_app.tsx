import { useRef } from "react";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import "styles/globals.css";

const theme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }: AppProps) {
  const { current: queryClient } = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
        <Toaster />
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
