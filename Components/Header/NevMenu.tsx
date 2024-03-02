import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Hide,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function NavMenu({ horizontal = true }) {
  const { colorMode } = useColorMode();
  return (
    <>
    <Hide above="md">
      <List
        fontWeight={"bold"}
        color={colorMode == "light" ? "#4A5568" : "white"}
      >
        
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "left", md: "center" }}
        >
            <Link href={"/"}>Home</Link>
                <ListItem>Explore</ListItem>
                <ListItem>Courses</ListItem>
                <Link href="/About">About us</Link>
        </Stack>
      </List>
      </Hide>
    </>
  );
}