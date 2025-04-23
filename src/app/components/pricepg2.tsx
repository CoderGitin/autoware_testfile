import React from 'react'
import Image from 'next/image'
export default function pricepg2() {
  return (
    <div className='mr-12'>
      {/* Pricing Plans */}
      <section className="py-13 pr-2  mr-[47px] ml-0">
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[47px] pl-34 pt-5 mb-12 mt-5 font-semibold ">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-39 mx-0">
          {/* Basic Plan */}
          <div className="border rounded-4xl p-6 shadow-sm border-[#9BC7FF] transition w-[430px] h-[600px]">
        <h3 className="text-2xl font-bold  mb-2 mr-0 text-left">
        Basic{" "}
        <span className="text-3xl font-bold ml-60 text-black mb-7 text-right">
        $0/m
        </span>
        </h3>

        <p className="text-[20px] text-gray-600 text-left py-4">
        Perfect for getting started with <br /> basic tools and content.
        </p>
        <button className="text-blue-500 bg-white px-33 py-3 rounded-2xl font-medium border-1 ">
        Get Started
        </button>
        <p className="text-[20px] text-gray-600 py-6">
        *No credit card required for the Free Plan.
        </p>
        <p className="text-2xl  my-6 text-black text-left font-bold">
        Plan Include:
        </p>
        <ul className="text-left mb-6 space-y-2 ">
        {[
        "Email campaigns",
        "Limited AI insights",
        "Standard reporting",
        "Blacklist monitoring",
        "One account support (1 account)",
        ].map((feat, idx) => (
        <li
        key={idx}
        className="flex items-center text-xl text-gray-600"
        >
        <Image
          src="/images/bluetick.png"
          alt="icon1"
          width={17}
          height={17}
          className=" m-1 mr-2"
        />{" "}
        {feat}
        </li>
        ))}
        </ul>
          </div>

          {/* Premium Plan */}
          <div className="rounded-4xl p-6 shadow-sm border-[#9BC7FF] bg-[#EDF5FF] w-[430px] h-[600px]">
        <h3 className="text-4xl font-bold mb-2 text-left">
        Premium{" "}
        <span className="text-3xl font-bold text-black mb-4 text-right pl-28 ">
        $70/m
        </span>
        </h3>

        <p className="text-[20px] text-gray-600 mt-3 text-left py-4">
        Perfect for getting wide range of <br />
        potential leads and customers.
        </p>
        <button className="bg-blue-500 text-white px-37 py-3 rounded-2xl font-medium ">
        Get Started
        </button>
        <p className="text-xl text-gray-600 my-6">
        *Credit card required for the Pro Plan.
        </p>
        <p className="text-2xl  my-6 text-black text-left font-bold">
        Plan Include:
        </p>
        <ul className="text-left mb-6 space-y-2">
        {[
        "Email campaigns",
        "AI-enabled insights",
        "Unlimited AI reports",
        "Blacklist monitoring",
        "Customer support",
        "Expanse categorization",
        ].map((feat, idx) => (
        <li
        key={idx}
        className="flex items-center text-xl text-gray-600"
        >
        <Image
          src="/images/bluetick.png"
          alt="icon1"
          width={17}
          height={17}
          className=" m-1 mr-2"
        />{" "}
        {feat}
        </li>
        ))}
        </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-4xl p-6 shadow-sm border-[#9BC7FF] transition w-[430px] h-[600px]">
        <h3 className="text-4xl font-bold mb-2 text-left ">
        Enterprise{" "}
        <span className="text-3xl font-bold text-black mb-4 text-right pl-18">
        $120/m
        </span>
        </h3>

        <p className="text-xl text-gray-600 mt-3 text-left py-4">
        Perfect for getting started with <br />
        basic leads and customers.
        </p>

        <button className="text-blue-500 bg-white px-34 py-3 rounded-2xl font-medium border-1 ">
        Get Started
        </button>
        <p className="text-[18px] text-gray-600 my-6">
        *Credit card required for the Enterprise Plan.
        </p>
        <p className="text-2xl  my-6 text-black text-left font-bold">
        Plan Include:
        </p>
        <ul className="text-left mb-6 space-y-2 ">
        {[
        "Email campaigns",
        "Advanced AI analytics",
        "Automated data sync",
        "Dedicated support",
        "Secure data control (multi account)",
        ].map((feat, idx) => (
        <li
        key={idx}
        className="flex items-center text-xl text-gray-600"
        >
        <Image
          src="/images/bluetick.png"
          alt="icon1"
          width={17}
          height={17}
          className=" m-1 mr-2"
        />
        {feat}
        </li>
        ))}
        </ul>
          </div>
          </div>
        </div>
      </section> 
    </div>
  )
}
