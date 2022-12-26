import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Custom Styles
import "./style.css";

import { ProductCard } from "../..";

const Slides = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      effect="Flip"
      slidesPerView={4}
      spaceBetween={30}
      // navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <ProductCard item={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides;
