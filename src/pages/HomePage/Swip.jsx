import React from 'react';
import { Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Swip = () => {
  return(
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide data-hash="slide1">
      <Image src='/assets/pic5.png' alt='pic1' h='433px' w='433px' />
      </SwiperSlide>
      <SwiperSlide data-hash="slide2">
      <Image src='/assets/pic6.png' alt='pic2' h='433px' w='433px' />
      </SwiperSlide>
      <SwiperSlide data-hash="slide3">
      <Image src='/assets/pic7.png' alt='pic3' h='433px' w='433px' />
      </SwiperSlide>
      <SwiperSlide data-hash="slide4">
      <Image src='/assets/pic8.png' alt='pic3' h='433px' w='433px' />
      </SwiperSlide>
      <SwiperSlide data-hash="slide5">
      <Image src='/assets/pic1.png' alt='pic1' h='433px' w='584px' />
      </SwiperSlide>
      <SwiperSlide data-hash="slide6">
      <Image src='/assets/pic2.png' alt='pic2' h='433px' w='584px' />
      </SwiperSlide>
      <SwiperSlide data-hash="slide7">
      <Image src='/assets/pic3.png' alt='pic3' h='433px' w='584px' />
      </SwiperSlide>
    </Swiper>
  </>
  )
};

export default Swip;
