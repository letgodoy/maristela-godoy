import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'

const Hero: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'white')
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box as="section" id="home" bg={bg} py={20}>
      <Container maxW="container.xl">
        <Flex
          direction={isMobile ? 'column' : 'row'}
          align="center"
          gap={12}
          minH="80vh"
        >
          {/* Text Content */}
          <VStack
            align={isMobile ? 'center' : 'start'}
            spacing={6}
            flex={1}
            textAlign={isMobile ? 'center' : 'left'}
          >
            <Text
              fontSize="lg"
              color="blue.500"
              fontWeight="medium"
              fontStyle="italic"
            >
              Como posso te ajudar?
            </Text>

            <Heading
              as="h1"
              size="2xl"
              color={textColor}
              fontWeight="bold"
              lineHeight="shorter"
            >
              Maristela Godoy
            </Heading>

            <VStack align={isMobile ? 'center' : 'start'} spacing={4}>
              <Heading as="h4" size="lg" color={textColor}>
                Ei, tudo bem?
              </Heading>

              <Text
                fontSize="lg"
                color={textColor}
                lineHeight="tall"
                maxW="600px"
              >
                Se você está passando por um momento difícil e precisa de ajuda
                para lidar com problemas emocionais ou psicológicos, eu estou
                aqui para ajudar! Vamos bater um papo, tomar um café virtual e
                construir juntos um caminho de autoconhecimento e bem-estar.
                Então, vem comigo nessa jornada rumo a uma vida mais leve e
                feliz!
              </Text>
            </VStack>
          </VStack>

          {/* Image Content */}
          <Box flex={1} display="flex" justifyContent="center">
            <Box
              borderRadius="xl"
              overflow="hidden"
              boxShadow="2xl"
              maxW="400px"
              w="100%"
            >
              <StaticImage
                src="../images/hero.jpeg"
                alt="Foto de Maristela Godoy"
                width={400}
                height={600}
                placeholder="blurred"
                formats={['auto', 'webp', 'avif']}
                style={{
                  borderRadius: '12px',
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero
