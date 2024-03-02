import React from 'react'
import { Heading, Box, Text, Container, Button, HStack, Stack, useColorMode } from '@chakra-ui/react'
import { ColorMode } from '@chakra-ui/react'

export default function Ct() {
  const {colorMode} =useColorMode();

  return (
    <Box textAlign={{base:'center', md:'justify'}}>
      <Container maxW={1200} bg={colorMode=='light'?"blue.50":'black'} p='35'>
      <Stack direction={{ base: "column", md: "row" }}>
              <Box flex={3}>
      <Heading>
      Try our free components
      </Heading>
      <Text fontSize={'20px'}>
      you don't have to buy a pig in a poke-you can experience out free community components before making a purchase decision.
      </Text>
      </Box>
      <Box flex={1} alignSelf={{base:"center", md:"center"}} >
      <Button  colorScheme={'blue'} float={'right'}>
        View Components
        </Button>
        </Box>
      
        </Stack>
      </Container>
    </Box>
  )
}
