import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Text, 
  VStack,
  Image 
} from '@chakra-ui/react'
import { ReactComponent as Woodoo } from '../../assets/WooDoo.svg'
import Descover from './Descover';
import Navbar from '../../components/Navbar';



const HomePage = () => {
  return (
    <>
    <Box>
      <Image src='/assets/body.png' h='1100px' minW='full' position='absolute'/>
      <Box position='relative'>
      <Navbar/>
      </Box>
    <Box ml="11rem" mt="17rem" w="313px" position='relative'>
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
    </Box>
    <Descover/>
    </>
  )

};

export default HomePage;
