import React from 'react';
import { Link } from 'react-router-dom'
import {
  Box,
  Text,
  HStack,
  Image,
  Button,
  Flex
} from '@chakra-ui/react'
import Swip from './Swip';



const Descover = () => {
  return (
    <Box>
      <Box w='full' h='full' mt='30rem' ml='6rem' mr='6rem'>
        <Text
          fontWeight='700'
          fontSize='34px'
          color='black'
          mb='2rem'>
          Materials that we use
        </Text>
        <HStack spacing='4rem'>
          <Image src='/assets/pic1.png' alt='pic1' h='433px' w='584px' />
          <Image src='/assets/pic2.png' alt='pic2' h='433px' w='584px' />
          <Image src='/assets/pic3.png' alt='pic3' h='433px' w='584px' />
        </HStack>
        <Flex justifyContent='center' mt='2rem'>
          <Button
            w='580px'
            h='70px'
            color='black'
            borderColor='#E09145' >
            DESCOVER
          </Button>
        </Flex>
        <Text
          color='black'
          fontSize='34px'
          fontWeight='700'
          mt='2rem'>
          Best offer of day
        </Text>
      </Box>
      <Flex
        mt='2rem'
        w='full'
        bg='#292C35'
        alignItems='center'
        justifyContent='center'>
        <Image src='/assets/pic4.png' w='1500PX' h='750px' alt='pic4' />
      </Flex>
      <Box w='full' h='full' mt='2rem' ml='6rem'>
      <Text
        color='black'
        fontSize='34px'
        fontWeight='700'
        mt='2rem'>
        Recomended for you
      </Text>
      </Box>
    </Box>

  )
};

export default Descover;
