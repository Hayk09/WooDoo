import React from "react";
import { Flex } from "@chakra-ui/react";

const AuthLayout = ({ children }) => (
  <Flex
    alignItems="center"
    minHeight="100vh"
    width="100%"
    position='relative'
  >
    {children}
  </Flex>
);

export default AuthLayout;
