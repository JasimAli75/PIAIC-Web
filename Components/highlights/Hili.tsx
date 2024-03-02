import { Box, Text, Heading, Container, Card, CardHeader, CardBody, CardFooter, Button, HStack, Center, SimpleGrid } from '@chakra-ui/react'
import{BsSpeedometer2} from "react-icons/bs"
import{FaCommentsDollar} from "react-icons/fa"
import{AiOutlineSetting} from "react-icons/ai"
import{BiSupport} from "react-icons/bi"

import React from 'react'

export default function Hili() {
return (
    <Box>
    <Box textAlign={'center'} mt={8}>
        <Text fontSize={'18px'} fontWeight={'bold'} color={'blue.500'}>
            Highlights
            </Text>
        <Heading mt={3} fontWeight={'semibold'}>Why Us?</Heading>
        <Text mt={3} fontSize={'21px'}>Because these beautiful and responsive React components will help you realize your next idea in no time.

        </Text>
    </Box>
    <Box textAlign={'center'}>
    <Container maxW={1200}>
        <SimpleGrid columns={{base:1, md:2, lg:4}} gap={5}>
    <Card align={"center"}>
        <CardHeader>
            <Center color={'blue.500'}>
            <BsSpeedometer2 size={80}/>
            </Center>
            <Heading size="md">Speed up workflow</Heading>
        </CardHeader>
        <CardBody>
            <Text>
            Quickly put together different components to create an nearly infinite combination of user experiences.

            </Text>
        </CardBody>
        <CardFooter>
            <Button colorScheme={'blue'}>View here</Button>
        </CardFooter>
    </Card>
    <Card align={"center"}>
        <CardHeader>
        <Center color={'blue.500'}>
            <FaCommentsDollar size={80}/>
            </Center>
            <Heading size="md">Save good money</Heading>
            
        </CardHeader>
        <CardBody>
            <Text>
            Quickly put together different components to create an nearly infinite combination of user experiences.

            </Text>
        </CardBody>
        <CardFooter>
            <Button colorScheme={'blue'}>View here</Button>
        </CardFooter>
    </Card>
    <Card align={"center"}>
        <CardHeader>
        <Center color={'blue.500'}>
            <FaCommentsDollar size={80}/>
            </Center>
            <Heading size="md">Easily customizable</Heading>
        </CardHeader>
        <CardBody>
            <Text>
            Quickly put together different components to create an nearly infinite combination of user experiences.

            </Text>
        </CardBody>
        <CardFooter>
            <Button colorScheme={'blue'}>View here</Button>
        </CardFooter>
    </Card>
    <Card align={"center"}>
        <CardHeader>
        <Center color={'blue.500'}>
            <BiSupport size={80}/>
            </Center>
            <Heading size="md">Support Us</Heading>
        </CardHeader>
        <CardBody>
            <Text>
            Quickly put together different components to create an nearly infinite combination of user experiences.
.
            </Text>
        </CardBody>
        <CardFooter>
            <Button colorScheme={'blue'}>View here</Button>
        </CardFooter>
    </Card>
    </SimpleGrid>
    </Container>
    </Box>
    </Box>
)
}
