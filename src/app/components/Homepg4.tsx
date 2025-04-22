'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function InformativeBlogsContact() {

  const blogData = [
    {
      category: "Sales",
      title: "Drip Marketing Automation",
      description: {
        part1: "Build automated email sequences that convert ",
        part2: "leads while you focus on what drives growth:",
        part3: " closing deals.....",
      },
      image: "/images/blog1.png",
    },
    {
      category: "Cold Email",
      title: "Video Email Marketing",
      description: {
        part1: "Build automated email sequences that convert ",
        part2: "leads while you focus on what drives growth:",
        part3: " closing deals.....",
      },
      image: "/images/blog2.png",
    },
    {
      category: "Cold Email",
      title: "Sales Prospecting Email",
      description: {
        part1: "Build automated email sequences that convert ",
        part2: "leads while you focus on what drives growth:",
        part3: " closing deals.....",
      },
      image: "/images/blog3.png",
    },
  ];

  return (
  <div className="bg-blue-50 py-12 px-4 text-center">
        <h2 className="text-[50px] font-semibold text-gray-800 mb-8">Informative Blog</h2>
        <div className="relative mb-6"></div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={-110}
          slidesPerView={3}
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4 overflow-visible min-h-[580px]"
        >
          {blogData.map((blogData, index) => (
            <SwiperSlide key={index}>
                <div className={`bg-white p-8 rounded-4xl shadow-xl w-108 h-128  mx-auto transition duration-300 relative ${index === 0 ? 'border border-blue-500' : 'rotate-[0deg]'}`}>
                <div className="overflow-hidden w-140 h-49 mx-auto  m-1 mb-5">
                  <img 
                  src={blogData.image}
                  alt={blogData.title}
                  className="w-[385px] h-full rounded-xl object-cover max-h-4xl pr-3"
                  />
                </div>
                <div className="text-left">
                  <p className="px-3 py-0.5 bg-blue-100 text-blue-500 rounded-3xl inline-block mb-2">{blogData.category}</p>
                  <p className="font-semibold text-2xl text-black mb-2">{blogData.title}</p>
                  <p className="text-gray-600 text-[17px] mb-8">{blogData.description.part1} <br />
                 {blogData.description.part2} <br />
                 {blogData.description.part3} 
                  </p>
                  <button className=" text-black  underline text-[17px] px-1 py-1   ">Read more </button><span className=" font-bold text-blue-500"> ↗ </span>
                </div>
                </div>
            </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
  );
}
