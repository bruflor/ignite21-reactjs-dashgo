import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/themes'
import { SidebarDrawerProvider } from "@/context/SidebarDrawerContext";

import { QueryClient, QueryClientProvider } from "react-query";
import { makeServer } from "@/services/mirage";

if (process.env.NODE_ENV === "development"){
    makeServer()
}
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </SidebarDrawerProvider>
        </QueryClientProvider>)
}

export default MyApp