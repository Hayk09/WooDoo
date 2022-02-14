import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../../assets/WooDoo.svg";

import SidebarContent from "../Sidebar";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Box ml="4rem" mt="3rem">
        <SidebarContent />
      </Box>
      <Box mt="3rem">
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box mr="4rem" mt="3rem">
        <Box
          display={{ base: "none", md: "hidden" }}
          // visibility={{base:"colapse", md: "visible"}}
        >
          <Link to="/login">
            <Button
              w="90px"
              borderRadius="8px"
              borderColor="#E09145"
              color="white"
            >
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button
              w="90px"
              borderRadius="8px"
              border="25px"
              borderColor="#E5E5E5"
              color="#E09145"
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};
export default Navbar;
