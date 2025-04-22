import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-10 px-10 h-[650px]">
      <div className="max-w-8xl mx-auto grid grid-cols-[50%_repeat(3,_1fr)] gap-5 pt-[50px]">
        
        {/* About Section */}
        <div className="text-left ml-9">
          <h2 className="text-3xl font-bold mb-3">autowarm</h2>
          <p className="text-[16px] text-grey pb-11">
            We offer a comprehensive suite of digital marketing services that cover all  <br /> 
             aspects of our online presence. From SEO and social media marketing to <br />
            content creation and PPC advertising, they have the expertise and resources to <br /> 
             handle our diverse marketing needs. <br />
           
          </p>
             
          <div className="flex space-x-4 mt-22 mb-6 text-white-400">
            <span className="rounded-full bg-white text-blue-500 text-xl px-4 py-4">
              <FaFacebookF />
            </span>
            <span className="rounded-full bg-white text-blue-500 text-xl px-4 py-4">
              <FaYoutube />
            </span>
            <span className="rounded-full bg-white text-blue-500 text-xl px-4 py-4">
              <FaTwitter />
            </span>
            <span className="rounded-full bg-white text-blue-500 text-xl px-4 py-4">
              <FaInstagram />
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-xl font-semibold mb-10">Navigation</h3>
          <ul className="space-y-6 text-[17px] text-white">
            <li>Service</li>
            <li>Agency</li>
            <li>Case Study</li>
            <li>Resource</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Licence Section */}
        <div>
          <h3 className="text-xl font-semibold mb-10">Licence</h3>
          <ul className="space-y-6 text-[17px] text-white">
            <li>Privacy Policy</li>
            <li>Copyright</li>
            <li>Email Address</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-10">Contact</h3>
          <ul className="space-y-6 text-[17px] text-shadow-gray-200">
            <li className="flex items-center gap-2">
            <MdPhone /> (406) 555-0120
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> info@autowarm.com
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn />
              <span>200, Westheimer Rd, <br/> Delhi 0980</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 ml-9 text-left pt-4 text-[16px] text-white pb-7">
        Copyright ©Krishna | All Rights Reserved
      </div>
    </footer>
  );
}
