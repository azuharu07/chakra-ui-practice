import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      default: "#3ea8ff",
      darker: "#0f83fd",
      bgc: "#edf2f7",
    },
    gray: {
      default: "#93a5b1",
      darker: "#6e7b85",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
