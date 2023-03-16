import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/themes'
import { SidebarDrawerProvider } from "@/context/SidebarDrawerContext";
import { makeServer } from "@/services/mirage";


if (process.env.NODE_ENV === "development"){
    makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SidebarDrawerProvider>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </SidebarDrawerProvider>)
}

export default MyApp