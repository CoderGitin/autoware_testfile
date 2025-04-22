import React from "react";
import Image from "next/image";
export default function PricingPage() {
  return (
    <div className="bg-white text-gray-800 font-inter">
      {/* Features Section */}
      <section className="pt-2 pb-21  text-center max-w-7xl mx-auto px-4">
        <Image
          src="/images/spotone.png"
          alt="vector"
          width={108}
          height={59}
          className="relative transform translate-x-142 translate-y-[50px]"
        />
        <h2 className="text-5xl font-bold mb-10 font-inter">
          Put the spotlight on the
          <p>main features</p>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 px-4 py-12">
          {/* Box 1 */}
          <div className="bg-[#F1F8FF] h-[390px] py-6 px-5 rounded-3xl text-left">
            <Image
              src="/images/icon1.png"
              alt="icon1"
              width={55}
              height={65}
              className="rounded-lg py-1"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold mt-4">Instant Warmup</h3>
              <p className="text-[18px]  mt-2">
                QuickBooks to simplify <br /> financial reporting and cash{" "}
                <br /> flow analysis.
              </p>
            </div>
            <button className="mt-28 text-black hover:underline ">
              Learn More <span className="text-blue-500 font-bold">↗ </span>
            </button>
          </div>

          {/* Box 2 */}
          <div className="bg-[#F1F8FF] h-[390px] py-5 px-4 rounded-3xl text-left  ">
            <Image
              src="/images/icon2.png"
              alt="icon1"
              width={55}
              height={65}
              className="rounded-lg py-1"
            />
            <div className="text-left">
              <h3 className="text-[18px]  font-semibold mt-4">
                Improved Deliverability
              </h3>
              <p className="text-[18px]  mt-2">
                Incoming payments from <br />
                clients, side hustles, and <br /> online sales.
              </p>
            </div>
            <button className="mt-28 text-black hover:underline ">
              Learn More <span className="text-blue-500 font-bold">↗ </span>
            </button>
          </div>

          {/* Box 3 */}
          <div
            className="bg-[#F1F8FF] h-[390px] py-5 px-4 rounded-3xl text-left border border-blue-100"
            style={{
              background: "linear-gradient(to bottom, #B6D8FF, #FFFFFF)",
            }}
          >
            <Image
              src="/images/icon3.png"
              alt="icon1"
              width={55}
              height={65}
              className="rounded-lg py-1"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold mt-4">Automated Reports</h3>
              <p className="text-[18px] mt-2">
                Track of your digital wallet <br />
                transactions effortlessly <br /> and categorize AI-driven <br />{" "}
                insights.
              </p>
            </div>
            <button className="mt-22 text-black hover:underline ">
              Learn More <span className="text-blue-500 font-bold">↗ </span>
            </button>
          </div>

          {/* Box 4 */}
          <div className="bg-[#F1F8FF] h-[390px] py-5 px-4 rounded-3xl text-left border border-blue-100">
            <Image
              src="/images/icon4.png"
              alt="icon1"
              width={55}
              height={65}
              className="rounded-lg py-1"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold mt-4">AI Insights</h3>
              <p className="text-[18px] mt-2">
                Financial institutions for <br /> real-time transaction <br />{" "}
                tracking and auto- <br /> categorization.
              </p>
            </div>
            <button className="mt-23 text-black hover:underline ">
              Learn More <span className="text-blue-500 font-bold">↗ </span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Autowarm */}

      <section className="bg-blue-50 py-12 px-4 ">
        <h2 className="text-5xl font-bold mt-3 pt-7 pr-[162px] pl-24 text-center">
          Why Autowarm
        </h2>
        <div className="max-h-screen grid grid-cols-2 bg-no-repeat bg-cover font-inter">
          <div className="w-[1040.843px] h-[550px] rotate-[0.098deg] flex-shrink-0">
            <div className="mt-35 ml-46 max-w-2xl inline-grid mx-4 my-14">
              <p className="text-5xl font-inter text-black font-semibold">
                Where your emails
              </p>
              <p className="text-5xl font-inter text-black font-semibold">
                directly reach to your
              </p>
              <span className="text-blue-500 font-bold text-5xl mb-2">
                customer
              </span>
              <p className="text-2xl font-inter pb-6 text-gray-700 pt-4">
                A cloud application, or cloud app, is a software
                <br /> program where cloud-based and local <br />
                components work together .
              </p>
              <div className="flex space-x-6 pt-8 mt-2">
                <button className="bg-blue-500 text-white py-5 px-17 rounded-2xl font-inter">
                  Learn More
                </button>
                <button className="text-black bg-white py-5 px-17 rounded-2xl border-1 border-blue-200 font-inter">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="ml-30 mr-10 mt-10 mb-10">
            <div>
              <Image
                src="/images/wya1.png"
                alt="icon1"
                width={40}
                height={42}
                className="rounded-lg py-3"
              />
              <h4 className="font-bold text-2xl mb-4 ml-1">
                Reach more Leads and Customers
              </h4>
              <p className="mb-4 text-xl ml-1">
                We will provide you lead support through the process of <br />{" "}
                setup and if you have any doubt, we will help you out.
              </p>
            </div>
            <div>
              <Image
                src="/images/wya2.png"
                alt="icon1"
                width={40}
                height={42}
                className="rounded-lg pt-6 pb-3"
              />
              <h4 className="font-bold text-2xl mb-2 ml-1">
                Avoid Spam Folders & Blacklist
              </h4>
              <p className="mb-4 text-xl ml-1">
                You can customized your dashboard according to your <br />{" "}
                filters data and report. You will get a overall data there.
              </p>
            </div>
            <div>
              <Image
                src="/images/wya3.png"
                alt="icon1"
                width={40}
                height={42}
                className="rounded-lg pt-6 pb-3"
              />
              <h4 className="font-bold text-2xl mb-2 ml-1">
                AI-Enabled Feedback
              </h4>
              <p className="text-xl ml-1">
                Our AI will help you with that and give you the crucial <br />
                feedback and help you to land direct into the inbox item..
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="py-13 pr-44 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[47px] pl-34 pt-5 mb-12 mt-5 font-semibold">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-58 ">
            {/* Basic Plan */}
            <div className="border rounded-4xl p-6 shadow-sm border-[#9BC7FF] transition w-[460px] h-[600px]">
              <h3 className="text-2xl font-bold  mb-2 mr-0 text-left">
                Basic{" "}
                <span className="text-3xl font-bold ml-60 text-black mb-7 text-right">
                  $0/m
                </span>
              </h3>

              <p className="text-xl text-gray-600 text-left py-4">
                Perfect for getting started with <br /> basic tools and content.
              </p>
              <button className="text-blue-500 bg-white px-38 py-3 rounded-2xl font-medium border-1 ">
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
            <div className=" rounded-4xl p-6 shadow-sm  border-[#9BC7FF] bg-[#EDF5FF] w-[460px] h-[600px]">
              <h3 className="text-4xl font-bold mb-2 text-left">
                Premium{" "}
                <span className="text-3xl font-bold text-black mb-4 text-right ml-35 ">
                  $70/m
                </span>
              </h3>

              <p className="text-xl text-gray-600 mt-3 text-left py-4">
                Perfect for getting wide range of <br />
                potential leads and customers.
              </p>
              <button className="bg-blue-500 text-white px-38 py-3 rounded-2xl font-medium ">
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
            <div className="border rounded-4xl p-6 shadow-sm border-[#9BC7FF] transition w-[460px] h-[600px]">
              <h3 className="text-4xl font-bold mb-2 text-left ">
                Enterprise{" "}
                <span className="text-3xl font-bold text-black mb-4 text-right pl-25">
                  $120/m
                </span>
              </h3>

              <p className="text-xl text-gray-600 mt-3 text-left py-4">
                Perfect for getting started with <br />
                basic leads and customers.
              </p>

              <button className="text-blue-500 bg-white px-38 py-3 rounded-2xl font-medium border-1 ">
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
  );
}
