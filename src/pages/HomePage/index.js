import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Text, Stack, Image } from "@chakra-ui/react";
import { ReactComponent as Woodoo } from "../../assets/WooDoo.svg";
import Descover from "./Descover";
import Swipers from "../../components/Swiper/Swipers";

const HomePage = () => {
  return (
    <Box px={{base:"0.5rem", md:"0"}}>
      <Box
        // px={{base:"2rem", md:"4rem"}}
        ml={{ base: "4rem", md: "11rem" }}
        w={{ base: "320px", md: "400px" }}
        mt="8rem"
      >
        <Stack
          spacing={{ base: "1.5rem", md: "3rem" }}
          // direction={{base: "column",md:"row"}}
        >
          <Woodoo />
          <Text
            fontSize={{ base: "16px", md: "26px" }}
            fontWeight="275"
            color="white"
            mt={6}
            mb="3rem"
          >
            Design Studio
          </Text>
          <Text
            fontSize={{ base: "16px", md: "26px" }}
            fontWeight="300"
            color="white"
          >
            Here you can order any type of furniture making your space
            beautiful, simple but significant.
          </Text>
          <Link>
            <Button
              borderRadius="8px"
              border="2px"
              borderColor="#E09145"
              color="#E09145"
              w={{ base:"250px", md:"345px" }}
              height="36px"
            >
              EXPLORE
            </Button>
          </Link>
        </Stack>
      </Box>
      <Descover />
      <Swipers />
    </Box>
  );
};

export default HomePage;
