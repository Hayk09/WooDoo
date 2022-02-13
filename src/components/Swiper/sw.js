import React from 'react'
import { Flex, Box, Heading, Button, HStack, Stack, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, A11y } from 'swiper'
import { Trans, Link, } from 'gatsby-plugin-react-i18next';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { Container } from '@chakra-ui/layout'
import lines from '../../images/lines_banner.png'
import './index.css'

export default ({slides}) => {
  return (
    <Swiper
      style={{height: 440}}
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {
        slides.map((slide, idx) => (
          <SwiperSlide key={idx} style={{width: '100%', height: '100%'}}>
            <Image opacity=".4" position="absolute" left="0" zIndex="100" height="440px" width="300px" src={lines}/>
            <Flex
              direction={{base:"column", md:"row"}}
              bg="#F1F2F4"
              h="100%"
              justifyContent="space-between">
              <Flex
                flex="1"
                justifyContent="flex-end"
                position="relative">
                <Box
                  position="absolute"
                  display={{base: 'none', md: 'block'}}
                  left="100%"
                  height="100%"
                  zIndex="10"
                  width="200px"
                  background="linear-gradient(270deg, rgba(241,242,244,0) 0%, #F1F2F4 100%)"/>
                <Container
                  w="100%"
                  pr="4"
                  pl={{base: '1.875rem', md: '55px'}}
                  display="flex"
                  mx="0"
                  maxW="600px"
                  pt={{base: '3rem', md: 0}}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start">
                  <Heading
                    fontFamily="Mardoto"
                    textAlign={{base: 'center', sm: 'start'}}
                    fontSize={{base: '2xl', sm: "1.75rem"}}
                    mb={{base: '1.875rem', sm: "2.625rem"}}>
                    {slide.title}
                    some title here to describe more and more 
                  </Heading>
                  <Stack w={{base: "full", sm: 'unset'}} spacing="12px" direction={{base:"column", md:"row"}} mb={{base:"20px"}}>
                    <Button
                      as={Link}
                      to="/submit-claim"
                      variant="green"
                      fontFamily="Mardoto"
                      color="white">
                        {slide.primaryButton}
                      {/* <Trans>{slid</Trans>  */}
                    </Button>
                    <Button
                      fontFamily="Mardoto"
                      variant="transparent" >
                      {slide.secondaryButton}
                    </Button>
                  </Stack>
                </Container>
              </Flex>
              <Image
              overflow={}
                objectFit="cover"
                src={slide.cover.file.url}
                alt="FSM News"
                width={{base: '100%', md: "50%"}}
                height="100%"/>
            </Flex>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};