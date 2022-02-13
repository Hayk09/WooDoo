import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Stack, Text, HStack } from '@chakra-ui/react'
import { ReactComponent as Woodo } from '../../assets/WooDoo.svg'
import { ReactComponent as Pinterest } from '../../assets/p.svg'
import { ReactComponent as Telegram } from '../../assets/t.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram.svg'
import { ReactComponent as Facebook } from '../../assets/f.svg'

const Footer = () => {
  return (
    <>

      <Flex
        bg='#292C35'
        h='full'
        justifyContent='space-between'
        alignItems='center'>
        <Box
          ml={{base:"2rem", md: "4rem"}}
          mt="3rem">
          <Text
            fontWeight='700'
            textDecoration={{base:"column",md:"row"}}
            fontSize={{ base: "10px", md: "18px" }}
            color='white'
            mb='2rem'>
            Address: Dzoraxbyur, Barekamutyan 7
          </Text>
          <Text
            fontSize={{ base: "10px", md: "18px" }}
            textDecoration={{base:"column",md:"row"}}
            fontWeight='700'
            color='white'>
            Phone numbers: +374 98 900 309, +374 430977373
          </Text>
        </Box>
        <Stack
            direction={{base: "column", md:"row"}} 
        >
          <Box>
            <Text
              fontSize={{ base: "10px", md: "18px" }}
              textDecoration={{base:"column",md:"row"}}
              mt='2rem'
              fontWeight='700'
              color='white'>
              Terms of Use Privacy Policy
            </Text>
            <Text
              fontSize={{ base: "10px", md: "18px" }}
              mt='2rem'
              fontWeight='700'
              color='white'
              align='center'>
              © 2022 WooDoo
            </Text>
          </Box>
      </Stack>
          <Box display={{base: "none", md:"initial"}}>
            <Text
              fontSize={{ base: "10px", md: "18px" }}
              textDecoration={{base:"column",md:"row"}}
              fontWeight='700'
              color='white'
              mr='4rem'
              mb='2rem' >
              Find us in social media
            </Text>
            <HStack spacing='2rem'>
              <Link>
                <Pinterest />
              </Link>
              <Link>
                <Telegram />
              </Link>
              <Link>
                <Instagram />
              </Link>
              <Link>
                <Facebook />
              </Link>
            </HStack>
          </Box>
      </Flex>

    </>

  )
};

export default Footer;
