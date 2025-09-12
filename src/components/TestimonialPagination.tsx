/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TestimonialData } from "@/data/TestimonialData";
import { TestimonialCard } from "./TestimonialCard";
import { PaginationLeftIcon, PaginationRightIcon } from "./SvgComponents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TestimonialSection = () => {
  const [swiper, setSwiperInstance] = useState<any | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-3">
      <button className=" md:block hidden" onClick={() => swiper?.slidePrev()}>
        <PaginationLeftIcon />
      </button>
      <Swiper
        className="w-full"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 45, loop: true },
        }}
        autoHeight
        onSwiper={setSwiperInstance}
      >
        {TestimonialData.map((card, index) => (
          <SwiperSlide key={index} className="py-10">
            <TestimonialCard
              name={card.name}
              description={card.description}
              bio={card.bio}
              image={card.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="md:block hidden ml-3" onClick={() => swiper?.slideNext()}>
        <PaginationRightIcon />
      </button>
      <div className="flex md:hidden mt-6 flex-row items-center space-x-8">
        <button
          className="md:order-1 order-2"
          onClick={() => swiper?.slidePrev()}
        >
          <PaginationLeftIcon />
        </button>
        <button className="order-3" onClick={() => swiper?.slideNext()}>
          <PaginationRightIcon />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
