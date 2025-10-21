import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
})

interface ChakraProviderWrapperProps {
  children: React.ReactNode
}

export const ChakraProviderWrapper: React.FC<ChakraProviderWrapperProps> = ({
  children,
}) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
