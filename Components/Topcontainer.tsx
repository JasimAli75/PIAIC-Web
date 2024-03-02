import React from "react";
import { Box, Button, Flex, Heading, HStack, Image, Text, Hide } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Link } from "@chakra-ui/react";

export default function topcontainer() {
  return (
    <Box 
    backgroundImage={'/images/back5.jpg'} 
    backgroundSize='cover'
    backgroundAttachment={"fixed"}
    backgroundPosition={"center"}
    py="20"
    mt={"5"}>
      {/* lef */}
      <HStack>
      <Box w={{base:'100%',lg:"50%"}} color={"white"} px={{base:"10", lg:"50"}}>
        <Heading fontSize={"50"}>Certified Web 3.0 and Metaverse Developer</Heading>
        <Text lineHeight={"7"} fontWeight={'semibold'} textAlign="justify">
          The future of the Web 3.0, Metaverse and Edge Computing. Panaverse DAO
          is a movement to spread these technologies globally. It is community
          of Web 3.0 and Metaverse Developers, Designers, Trainers startup
          founders and service providers.
        </Text>
        <Text lineHeight={"7"} fontWeight={'semibold'} textAlign="justify">
          Consolidating Web 3.0, Metaverse, Artifical Intelligence(AI), Cloud,
          Edge, Ambient Computing/lot, NEtwork Automation and Bioinformatics
          Technology.
        </Text>
        <Box mt="5">
        <Button colorScheme={"blue"} mr="5" >Buy Now</Button>
        <Button colorScheme={"blue"} variant="outline">View Components</Button>
        </Box>
        <Flex alignItems={"center"}>
        <AvatarGroup size='md' max={4} mt="5">
  <Avatar name='Mr.Zia Khan' src='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' />
  <Avatar name='Mr.Adil Altaf' src='https://avatars.githubusercontent.com/u/62209503?v=4' />
  <Avatar name='Mr.Owais Ali' src='https://chakrademosite-ows-ali.vercel.app/me.jpg' />
  <Avatar name='Jasim Ali Rajput' src='/images/Jasimali.jpg' />
  <Avatar name='Miss Hira Khan' src='' />
</AvatarGroup>
<Text mt="5" ml="3" fontWeight={"semibold"}>Created By: <Link 
color="purple.200"
target={"_blank"}
href={"https://www.youtube.com/@owaisali124"}>Jasim Ali Rajput</Link></Text>
</Flex>
      </Box>
      <Hide below="lg">
      <Box w="50%">
        <Image src="/images/banner.png" alt="picture loading" width={"700px"} height={"400px"}/>
      </Box>
      </Hide>
      
      </HStack>
    </Box>
  );
}
