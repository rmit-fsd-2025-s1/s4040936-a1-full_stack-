import { useEffect } from "react";
import { LoginProvider } from "@/Context/Login";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DEFAULT_USERS } from "@/types/user"; // ✅ Make sure this path is correct

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existing = JSON.parse(localStorage.getItem("users") || "[]");
      if (existing.length === 0) {
        localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));
      }
    }
  }, []);

  return (
    <ChakraProvider>
      <LoginProvider>
        <Component {...pageProps} />
      </LoginProvider>
    </ChakraProvider>
  );
}
