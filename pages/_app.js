import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
    const theme = extendTheme({
        fonts: {
            heading: "Raleway, sans-serif",
            body: "Raleway, sans-serif",
        },
    });

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
