import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Logo } from "../../assets/WooDoo.svg";

const SidebarContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        // w="34px"
        // h="20px"
        as={IconButton}
        aria-label="Options"
        icon={<Burger />}
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#292C35">
          <DrawerCloseButton color="#E09145" _hover="none" />
          <DrawerHeader borderBottomWidth="1px">
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <Stack mt={6} ml={2} spacing={4}>
              <Link to="/">
                <Text color="#E5E5E5" fontWeight="700" fontSize="18px">
                  Catalog
                </Text>
              </Link>
              <Link to="/login">
                <Text color="#E5E5E5" fontWeight="700" fontSize="18px">
                  Sign Up
                </Text>
              </Link>
              <Link to="/register">
                <Text color="#E5E5E5" fontWeight="700" fontSize="18px">
                  Sign In
                </Text>
              </Link>
              <Link to="/">
                <Text color="#E5E5E5" fontWeight="700" fontSize="18px">
                  About
                </Text>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarContent;
