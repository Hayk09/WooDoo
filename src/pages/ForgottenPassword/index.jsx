import React, { useState } from "react";
import {
  Flex,
  Box,
  VStack,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";

const ForgottenPassword = () => {
  const [value, setValue] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    try {
      await Auth.forgotPassword();
    } catch (e) {
      console.log("forgot password", e);
    }
  };

  return (
    <>
      <Flex justifyContent="center" w="full" >
        <Box w="full" maxW="600px" mt='6rem'>
          <form onsubmit={submit}>
            <VStack px="8" spacing="5">
              <Input
                placeholder="email"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button type="submit" color='#E09145'>Reset Password</Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default ForgottenPassword;
