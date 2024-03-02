import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Image,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "@/Components/Header/NevMenu";


export default function Burger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button
        //  ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        Open
      </Button> */}
      <Box onClick={onOpen}>
        <GiHamburgerMenu size={25} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        //   finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Panaverse</DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <NavMenu/>
          </DrawerBody>

          <DrawerFooter>
            <Image
              src="/images/pana.png"
              alt="logo loading"
              width="30"
              height="65"
            />
            {/* <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
