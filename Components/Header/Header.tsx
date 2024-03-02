"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
Box,
Heading,
Image,
List,
ListItem,
HStack,
Button,
Flex,
Link,
Show,
Hide,
useColorMode,
} from "@chakra-ui/react";
import {
PhoneIcon,
AddIcon,
WarningIcon,
SearchIcon,
MoonIcon,
} from "@chakra-ui/icons";
import Burger from "./Burger";
import NavMenu from "@/Components/Header/NevMenu";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ColorMode } from "@chakra-ui/react";
export default function Home() {
  const {colorMode} =useColorMode();
return (
    <Box position={"sticky"} top="0" zIndex={"1"}>
    <Flex
        justifyContent={"space-around"}
        alignItems={"center"} 
        bg={colorMode =='dark'?"black":'white'}
        py="5"
    >
        <Box>
        <HStack>
            <Image
            // boxSize="100px"
            src="/images/pana.png"
            alt="logo loading"
              width="105"
              height="85"
            />
            <Show above="md">
            <List>
                <HStack
            align={"center"}
                spacing={10}
                fontWeight="bold"
                ml="40px"
                >
                <ListItem>Home</ListItem>
                <ListItem>Explore</ListItem>
                <ListItem>Courses</ListItem>
                <ListItem>About us</ListItem>
                </HStack>
              </List>
              <HStack>
                <NavMenu/>
              </HStack>

            
            </Show>
        </HStack>
        </Box>

        <HStack>
          <Box pl="15.5">
            <SearchIcon w="18px" h="18px" />
          </Box>
          {/* <Box pl={"15.5"}>
            <MoonIcon w="18px" h="18px" />
          </Box> */}
          <ColorModeSwitcher/>
          <Show below="md">
            <Burger/>
          </Show>

          <Link target={"_blank"} href="https://portal.piaic.org/signup">
            <Button variant={"outline"}>Apply Now</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
