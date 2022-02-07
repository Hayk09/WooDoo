import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Input, Text, HStack } from '@chakra-ui/react'
import { ReactComponent as Woodo } from '../../assets/WooDoo.svg'
import { ReactComponent as Pinterest } from '../../assets/p.svg'
import { ReactComponent as Telegram } from '../../assets/t.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram.svg'
import { ReactComponent as Facebook } from '../../assets/f.svg'

const Footer = () => {
  return (
    <Flex
      bg='#292C35'
      h='270px'
      justifyContent='space-between'
      alignItems='center'>
      <Box ml='4rem'>
        <Text
          fontWeight='700'
          color='white'
          mb='2rem'>
          Address: Dzoraxbyur, Barekamutyan 7
        </Text>
        <Text
          fontWeight='700'
          color='white'>
          Phone numbers: +374 98 900 309, +374 430977373
        </Text>
      </Box>
      <Box>
        <Link to='/'>
          <Woodo />
        </Link>
        <Text
          mt='2rem'
          fontWeight='700'
          color='white'>
          Terms of Use Privacy Policy
          <br />
          © 2022 WooDoo
        </Text>
      </Box>
      <Box
        mr='4rem'>
        {/* <Input /> */}
        <Text
          fontWeight='700'
          color='white'
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

  )
};

export default Footer;
