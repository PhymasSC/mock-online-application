//@ts-nocheck
import Navigation from "@/components/Navigation";
import { NextUIProvider, createTheme, useSSR } from "@nextui-org/react";
import { IconlyProvider } from "react-iconly";
import Footer from "@/components/Footer";

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: "$red200",
      primaryLightHover: "$red300",
      primaryLightActive: "$red400",
      primaryLightContrast: "$red600",
      primary: "#de4a4a",
      primaryBorder: "$red",
      primaryBorderHover: "$red600",
      primarySolidHover: "$red700",
      primarySolidContrast: "$white",
      primaryShadow: "$red500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <NextUIProvider theme={theme}>
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
