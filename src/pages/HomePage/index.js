import React from 'react';
import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import { ReactComponent as Woodoo } from '../../assets/WooDoo.svg'


const HomePage = () => {
  return (
    <Box ml="11rem" mt="17rem" w="313px">
      <Woodoo />
      <Text
        fontWeight="275"
        color="white"
        mt={6}
        mb="3rem">
        Design Studio
      </Text>
      <VStack spacing="4rem">
        <Text
          fontWeight="300"
          color="white">
          Here you can order any type of furniture making your space beautiful, simple but significant.
        </Text>
        <Link>
          <Button
            borderRadius="8px"
            border="2px"
            borderColor="#E09145"
            color='#E09145'
            w="290px"
            height="36px" >
            EXPLORE
          </Button>
        </Link>
      </VStack>
    </Box>
  )

};

export default HomePage;
