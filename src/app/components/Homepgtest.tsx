"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteRight, FaStar } from "react-icons/fa";

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
  }
];

export default function HomepgTest() {
  return (
    <div className="bg-blue-50 pt-20 pb-24 px-4 text-center overflow-visible">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Testimonial</h2>

      <div className="relative overflow-visible">
        <Swiper
          modules={[Pagination]}
          spaceBetween={-300 } // tighter space between slides
          slidesPerView={3}
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 }
          }}
          className="overflow-visible min-h-[560px]"
        >
          {testimonials.map((testimonial, index) => {
            const curveStyle =
              index === 0
                ? "rotate-[-9deg] translate-y-4"
                : index === 2
                ? "rotate-[9deg] translate-y-4"
                : "border border-blue-400";

            return (
              <SwiperSlide key={index} className="overflow-visible">
                <div
                  className={`bg-white p-8 rounded-[2rem] shadow-lg transition duration-300 w-[390px] h-[390px] mx-auto ${curveStyle}`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-21 h-20 rounded-full object-cover"
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
                  <p className="text-gray-600 text-[18px] mb-4 pb-8 text-left">{testimonial.text.part1} 
                       {testimonial.text.part2}  
                       {testimonial.text.part3} 
                       {testimonial.text.part4}  
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="bg-blue-500 text-white text-sm px-7 py-3 rounded-full ">
                      Read more
                    </button>
                    <span className="text-blue-500 text-2xl font-bold"><FaQuoteRight  /></span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
