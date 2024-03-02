import { SearchIcon, } from '@chakra-ui/icons'
import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa'

export default function Footer() {
return (
    <Box>
    <Container maxW={'100%'} bg={'gray.100'} py="4">
    <Flex justifyContent={'space-around'}>
        <Text fontSize={'16px'}>
            © 2023 Panaverse. All rights reserved.
        </Text>
        <HStack>
        <Box pl="15" as="span">
    <FaGithub size={'25'}/>
    </Box>
    <Box pl="15" as="span">
    <FaFacebook size={'25'}/>
    </Box>
    <Box pl="15" as="span">
    <FaDiscord size={'25'}/>
    </Box>
    </HStack>
    </Flex>


    </Container>
    </Box>
)
}
