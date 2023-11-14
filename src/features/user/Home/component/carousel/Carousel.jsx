import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./carousel.scss";
import CarouselImage from "../../../../../assets/images/carousel.jpg";

const Carousel = ({ propsProduct, rateProps }) => {
  return (
    <Box width="100%" ml="11px">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {propsProduct &&
          rateProps().map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Box className="Product-Slider">
                  <img src={CarouselImage} alt="product" />
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Box className="list-carousel">
        {propsProduct &&
          propsProduct.map((item) => {
            return (
              <Box className="carousel-item" key={item.productId}>
                <img src={CarouselImage} alt="" height={224} />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Carousel;
