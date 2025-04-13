import { useEffect } from "react";
import { LoginProvider } from "@/Context/Login";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existing = JSON.parse(localStorage.getItem("users") || "[]");
      if (existing.length === 0) {
        const dummyUsers = [
          {
            email: "abc@gmail.com",
            password: "theAus123",
            role: "tutor"
          },
          {
            email: "bcd@gmail.com",
            password: "theNSW123",
            role: "lecturer"
          }
        ];
        localStorage.setItem("users", JSON.stringify(dummyUsers));
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