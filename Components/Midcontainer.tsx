"use client";
import { Box, Heading, Text, Image, HStack, Container, SimpleGrid } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, StarIcon } from "@chakra-ui/icons";
import {BiRocket} from "react-icons/bi"
import {RiMoonFoggyLine} from "react-icons/ri"
import {FaPaintBrush} from "react-icons/fa"
import {MdDeveloperMode} from "react-icons/md"
import {FaStarHalfAlt} from "react-icons/fa"

import React from "react";
import Head from "next/head";

export default function midcontainer() {
  return (
    <Box py="50" as="section">
      <Box textAlign={"center"}>
        {/* features */}
        <Text mt="2" fontWeight={"bold"} fontSize={"20"} color={"blue.500"}>
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text fontSize={"20"} py="3">
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured source code files
        </Text>
      </Box>
      {/* First box */}
      <Container maxW={"1400"}>
        <Box mt={'10'}>
        <SimpleGrid columns={{base:1, md:2}} spacing={38}>

        <Box>
          <HStack>
            <Box color={"blue.500"}>
            <StarIcon w={35} height={34} />
            </Box>
            <Box >
              <Heading fontSize={21}>220+ Components</Heading>
              <Text>
                All our components come with a light and dark color mode by
                deafult.
              </Text>
            </Box>
          </HStack>

          {/* second box */}
        </Box>
        <HStack>
        <Box color={"blue.500"}>
            <BiRocket size={50}/>
            </Box>
            <Box>
              <Heading fontSize={21}>Themable</Heading>
              <Text>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>
          {/* 3rd box */}
          <Box>
          <HStack>
          <Box color={"blue.500"}>
            <RiMoonFoggyLine size={50} />
            </Box>
            <Box>
              <Heading fontSize={21}>Light & Dark</Heading>
              <Text>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>

          {/* five box */}
        </Box>
        <HStack>
        <Box color={"blue.500"}>
            <FaPaintBrush size={50} />
            
            </Box><Box>
              <Heading fontSize={21}>Tehmable</Heading>
              <Text>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>
          <Box>
          <HStack>
          <Box color={"blue.500"}>
            <FaStarHalfAlt size={50} />
            </Box>
            <Box>
              <Heading fontSize={21}>Accessible</Heading>
              <Text>
                All our components come with a light and dark color mode by default.
              </Text>
            </Box>
          </HStack>

          {/* six box box */}
        </Box>
        <HStack>
        <Box color={"blue.500"}>
            <MdDeveloperMode size={50} />
            </Box>
            <Box>
              <Heading fontSize={21}>Developer Friendly</Heading>
              <Text>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>
          </SimpleGrid>
          </Box>
      </Container>
    </Box>
  );
}
