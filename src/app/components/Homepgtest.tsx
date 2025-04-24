"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Mousewheel } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    image: "/images/John.png",
    rating: 5,
    text: {
      part1: "Praesent non enim sed velit malesuada ",
      part2: "consectetur id a justo. Fusce quis eros sit ",
      part3: "amet enim laoreet dignissim. Sed auctor",
      part4: " massa non arcu posuere, id sodales metus interdum.",
    },
  },
  {
    name: "John Doe",
    image: "/images/John.png",
    rating: 5,
    text: {
      part1: "Praesent non enim sed velit malesuada ",
      part2: "consectetur id a justo. Fusce quis eros sit ",
      part3: "amet enim laoreet dignissim. Sed auctor",
      part4: " massa non arcu posuere, id sodales metus interdum.",
    },
  },
  {
    name: "John Doe",
    image: "/images/John.png",
    rating: 5,
    text: {
      part1: "Praesent non enim sed velit malesuada ",
      part2: "consectetur id a justo. Fusce quis eros sit ",
      part3: "amet enim laoreet dignissim. Sed auctor",
      part4: " massa non arcu posuere, id sodales metus interdum.",
    },
  },
];

export default function HomepgTest() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-blue-50 pt-20 pb-24 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Testimonial</h2>

      <Swiper
  modules={[Pagination, Mousewheel]}
  spaceBetween={-50}
  slidesPerView={3}
  centeredSlides={true}
  mousewheel={true}
  slidesPerGroup={1}
  pagination={{ clickable: true }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="min-h-[580px]"
>

        {testimonials.map((testimonial, index) => {
          const position = index - activeIndex;
          let transformStyle = "scale-100";

          if (position === -1) transformStyle = "rotate-[-8deg] scale-95 transform translate-y-10 "; // Left
          if (position === 1) transformStyle = "rotate-[8deg] scale-95 translate-y-10"; // Right
          if (position !== -1 && position !== 0 && position !== 1) transformStyle = "opacity-50 scale-90"; // Outside

          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={index}>
              <div
                className={`bg-white p-8 rounded-[2rem] shadow-lg w-[380px] h-[390px] mx-auto transition duration-500 transform ${transformStyle} ${
                  isActive ? "border-1 border-blue-500" : ""
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-800 text-xl">
                      {testimonial.name}
                    </p>
                    <div className="flex text-blue-500 text-xl">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-[18px] mb-4 pb-6 text-left">
                  {testimonial.text.part1}
                  {testimonial.text.part2}
                  {testimonial.text.part3}
                  {testimonial.text.part4}
                </p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 text-white text-sm px-7 py-3 rounded-full">
                    Read more
                  </button>
                  <span className="text-blue-500 text-2xl font-bold">
                    <FaQuoteRight />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
