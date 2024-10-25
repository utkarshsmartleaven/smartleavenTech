import React from 'react';
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full min-h-max relative bg-footer-gradient flex flex-col justify-center items-center">
      {/* Connect with us Section */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 lg:gap-80 mt-8 sm:mt-16 px-4 mr-0">
        
        {/* Logo */}
        <img
          className="w-24 h-24 md:w-36 md:h-36 object-cover"
          src="src/assets/img/LogoIcon180.png"
          alt="Smartleaven Technology"
        />

        {/* Text Section */}
        <div className="text-center sm:text-left">
          <div className="text-[#00182c] text-2xl md:text-3xl font-medium font-['Roboto']">
            Connect with us
          </div>
          <div className="mt-2 text-[#00182c] text-sm md:text-base font-normal font-['Roboto']">
            Our team of experts is on hand to answer 
            <br className="block sm:hidden" /> {/* Visible on mobile, hidden on larger screens */}
            your questions.
          </div>
          <div className="mt-4 text-[#00182c] text-lg md:text-xl font-medium font-['Roboto']">
            info@smartleaven.com
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full mt-8 sm:mt-16">
        <hr className="border-t-2 border-white w-4/5 mx-auto" />
      </div>

      {/* Follow Us Section */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 lg:gap-40 mt-8 sm:mt-16 px-4">
        
        {/* Logo */}
        <img
          className="w-1/2 h-1/2 md:w-1/5 md:h-1/5 object-cover"
          src="src/assets/img/LogoTypo.png"
          alt="Smartleaven Technology"
        />

        {/* Text Section */}
        <div className="text-center sm:text-left md:ml-20 2xl:ml-5">
          <div className="text-[#00182c] text-2xl md:text-3xl font-medium font-['Roboto']">
            Follow Us
          </div>
          <div className="mt-2 mb-2 text-[#00182c] text-sm md:text-base font-normal font-['Roboto']">
            Connect with us on social Platforms 
            <br className="block sm:hidden" /> {/* Visible on mobile, hidden on larger screens */}
            for upcoming Happenings
          </div>
          <div className="mb-2 ml-24 md:ml-0 text-[#00182c] text-lg md:text-xl font-medium font-['Roboto']">
            <FaLinkedin size={35} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
