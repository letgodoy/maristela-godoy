/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'
import { Box } from '@chakra-ui/react'
import { ChakraProviderWrapper } from './chakra-provider'
import './layout.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ChakraProviderWrapper>
      <Box
        margin="0 auto"
        maxWidth="var(--size-content)"
        padding="var(--size-gutter)"
      >
        {children}
      </Box>
    </ChakraProviderWrapper>
  )
}

export default Layout
