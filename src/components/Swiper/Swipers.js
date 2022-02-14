import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Swipers = () => {
  return (
    <>
      <Box display={{ base: "none", md: "flex" }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Scrollbar, Navigation]}
          Scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide
            data-hash="slide1"
            style={{ width: "100%", height: "100%" }}
          >
            <Image src="/assets/pic5.png" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            <Image src="/assets/pic6.png" alt="pic2" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide3">
            <Image src="/assets/pic7.png" alt="pic3" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide4">
            <Image src="/assets/pic8.png" alt="pic3" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide5">
            <Image src="/assets/pic1.png" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide6">
            <Image src="/assets/pic2.png" alt="pic2" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide7">
            <Image src="/assets/pic3.png" alt="pic3" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide7">
            <Image src="/assets/pic3.png" alt="pic3" />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box display={{ base: "flex", md: "none" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Scrollbar, Navigation]}
          Scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide
            data-hash="slide1"
            style={{ width: "100%", height: "100%" }}
          >
            <Image src="/assets/pic5.png" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            <Image src="/assets/pic6.png" alt="pic2" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide3">
            <Image src="/assets/pic7.png" alt="pic3" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide4">
            <Image src="/assets/pic8.png" alt="pic3" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide5">
            <Image src="/assets/pic1.png" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide6">
            <Image src="/assets/pic2.png" alt="pic2" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide7">
            <Image src="/assets/pic3.png" alt="pic3" />
          </SwiperSlide>
          <SwiperSlide data-hash="slide7">
            <Image src="/assets/pic3.png" alt="pic3" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Swipers;
