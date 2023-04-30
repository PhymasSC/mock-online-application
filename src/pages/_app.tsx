//@ts-nocheck
import Navigation from "@/components/Navigation";
import { NextUIProvider, useSSR } from "@nextui-org/react";
import { IconlyProvider } from "react-iconly";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <NextUIProvider>
        <IconlyProvider set="curved" primaryColor="gold" secondaryColor="blue">
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </IconlyProvider>
      </NextUIProvider>
    )
  );
}

export default MyApp;
