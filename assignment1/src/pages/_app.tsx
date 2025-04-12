import { LoginProvider } from "@/Context/Login";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
      <Component {...pageProps} />;
    </LoginProvider>
  );
}
