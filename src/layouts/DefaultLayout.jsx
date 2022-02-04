import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => (
  <Flex direction="column" minHeight="100vh" width="100%" >
    <Box position="relative" flex="1">
      {children}
    </Box>
   
  </Flex>
);

export default DefaultLayout;
