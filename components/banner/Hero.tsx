"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Hero() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <img
            src="https://placehold.co/1200x500?text=Slide+1"
            alt="Slide 1"
            className="w-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://placehold.co/1200x500?text=Slide+2"
            alt="Slide 2"
            className="w-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://placehold.co/1200x500?text=Slide+3"
            alt="Slide 3"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
