import React from 'react';
import Image from 'next/image';
export default function ContactForm() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 pr-10">
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start mr-7 ml-[-40px]">
            <h2 className="text-[48px] font-bold text-gray-800 mb-6 ">Get in touch</h2>
          <div className="flex items-center mb-4 space-x-2"> 
            <div className="bg-blue-500 p-3 rounded-xl text-white text-xl mb-3">
            <Image
               src="/images/contact2.png"
               alt="contact2"
               width={31}
               height={30}
               className=""
              />
            </div>
            <span className="text-gray-700 font-medium text-xl p-1 border-b-1 bg-gray-50 pr-2 mr-8">+381 9875 6231</span>
            <div className="bg-yellow-400 p-3 rounded-xl text-white text-xl mb-3">
            <Image
               src="/images/contact1.png"
               alt="contact1"
               width={31}
               height={30}
               className=""
              />
            </div>
            <span className="text-gray-700 font-medium  text-xl border-b-1 bg-gray-50 p-1 ">info@autowarm.com</span>
          </div>
          <div className="text-yellow-400 text-3xl mb-2 mt-12">★ ★ ★ ★ ★</div>
          <blockquote className="text-black italic mb-2 text-xl">
      &quot;We highly recommend it to any business looking to <br/>  improve their efficiency and profitabilitty.&quot;
          </blockquote>
          <p className="text-[16px] text-black">Rated 5/5 – from over 40 reviews</p>
        </div>

        {/* Right Side - Form */}
        <div className="relative ml-3">
        
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform translate-x-64 translate-y-[-70px] h-[560px] w-[400px]">
            <Image
               src="/images/vector.png"
               alt="vector"
               width={120}
               height={140}
               className="relative transform translate-x-78 translate-y-[-8px]  rotate-8"
              />
            </div>
            
          <form className="relative z-10 bg-white rounded-4xl shadow-xl p-9 space-y-4 h-[410px] ">
            <div className="grid grid-cols-2 gap-4">
              <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-1 ml-1">
                Name
              </label>
            
              <input
                id="name"
                type="text"
                placeholder="John doe"
                className="border border-gray-300 p-2 rounded-xl px-2 py-3 shadow-xs"
              />
              </div>
              <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="person@mail.com"
                className="border border-gray-300 p-2 rounded-xl px-2 py-3 shadow-xs"
              />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black m-3 ">
              Your Message
              </label>
              <textarea
              id="message"
              
              rows={2}
              className="border border-gray-300 p-2 rounded-xl w-full shadow-xs"
              ></textarea>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="privacy" className="w-4 h-4 m-2" />
              <label htmlFor="privacy" className="text-[16px] text-black m-2">
                I agree to the privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-3 rounded-xl"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
