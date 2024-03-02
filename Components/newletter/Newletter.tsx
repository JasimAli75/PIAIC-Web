import { Box, Container, Heading, Text, Button, HStack, SimpleGrid, Flex, useColorMode } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import React from 'react'
import { ColorMode } from '@chakra-ui/react';
export default function Newletter() {
    const {colorMode} = useColorMode();

  return (
    <Box mt={15}>
    <Container bg={colorMode=="light"?"gray.50":"black"}
    maxW="100%" py={"14"}>
        <Flex justifyContent={'space-around'} flexDirection={{base: "column", md:"row"}}>
        <Box>
            <Heading fontWeight={'semibold'}>Join our Newsletter</Heading>
            <Text fontSize={'18px'} mt={'2'}>
                Don't miss any news new and subscribe to our newsletter today.
            </Text>
        </Box>
        <HStack>
            <Input placeholder='Enter your Email'/>
            <Button>Subscribe</Button>
        </HStack>
        </Flex>
    </Container>
</Box>
  );
}