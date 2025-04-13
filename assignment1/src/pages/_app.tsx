import { LoginProvider } from "@/Context/Login";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";



export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <LoginProvider>
      <Component {...pageProps} />;
    </LoginProvider>
  </ChakraProvider>
  );
}
