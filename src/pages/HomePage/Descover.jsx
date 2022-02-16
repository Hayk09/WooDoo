import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  HStack,
  Image,
  Button,
  Flex,
  Container,
  Stack,
} from "@chakra-ui/react";

const Descover = () => {
  return (
    <>
      <Box
        w="full"
        mt={{ base: "10rem", md: "14rem" }}
        ml={{ base: "full", md: "6rem" }}
        mr={{ base: "full", md: "6rem"}}
        direction={{ base: "column", md: "row" }}
      >
        <Text
          fontWeight="700"
          align={{ base: "center", md: "left" }}
          fontSize={{ base: "18px", md: "26px" }}
          color="black"
          mb="2rem"
        >
          Materials that we use
        </Text>
        <Stack spacing="4rem" direction={{ base: "column", md: "row" }}>
          <Image
            src="/assets/pic1.png"
            alt="pic1"
            h={{ base: "250px", md: "350px" }}
            w={{ base: "full", md: "400px" }}
          />
          <Image
            src="/assets/pic2.png"
            alt="pic2"
            h={{ base: "250px", md: "350px" }}
            w={{ base: "full", md: "400px" }}
          />
          <Image
            src="/assets/pic3.png"
            alt="pic3"
            h={{ base: "250px", md: "350px" }}
            w={{ base: "full", md: "400px" }}
          />
        </Stack>
        <Flex justifyContent="center" mt="3rem">
          <Button 
            w={{base:"130px", md:"300px"}} 
            // h={{base:"10px", md:"full"}}
            fontSize={{base:"10px", md:"15px"}} 
            variant='pink' 
            bg='white' 
            border='2px' 
            color="black" 
            
            >
            DESCOVER
          </Button>
        </Flex>
        <Text
          color="black"
          align={{ base: "center", md: "left" }}
          fontSize={{ base: "18px", md: "26px" }}
          fontWeight="700"
          mt="2rem"
        >
          Best offer of day
        </Text>
      </Box>
      <Flex
        mt="2rem"
        w="full"
        bg="#292C35"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={{base:"320px", md:"1200px"}}>
        <Image src="/assets/pic4.png" alt="pic4" />
        </Box>

      </Flex>
      <Text
        color="black"
        align={{ base: "center", md: "left" }}
        fontSize={{ base: "18px", md: "26px" }}
        fontWeight="700"
        ml={{ base: "full", md: "8rem" }}
        mt="2rem"
      >
        Recomended for you
      </Text>
    </>
  );
};

export default Descover;
