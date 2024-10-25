import React from 'react';

const Playbook = () => {
  return (
    <div className="bg-footer-gradient sm:h-[100vh] md:h-[130vh] lg:h-[130vh] xl:h-[100vh] 2xl:h-[100vh] 3xl:h-[100vh] p-3 lg:p-10 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 3xl:mt-6 ">
      <h1 className=" text-[2rem] sm:text-[1rem]  md:text-[3rem]  lg:text-[2rem]  xl:text-[2.5rem]  2xl:text-[3rem]  3xl:text-[5rem] font-bold text-[#00182C]  ">OUR <br /> PLAYBOOK</h1>
      {/* Text Size decreased for Tablet(MD) screen size  */}
      <p className=" text-[1.2rem] sm:text-[1rem]  md:text-[2.0rem]  lg:text-[2rem]  xl:text-[1.5rem]  2xl:text-[1.8rem]  3xl:text-[4rem] text-[#EEF3F5] mb-4">
        You’re the expert in your business, and we’re the experts in supporting it. We prioritize operational excellence by optimizing daily manufacturing processes,
        reducing costs, and increasing productivity to enhance financial performance. We achieve this by deploying and managing advanced technology solutions tailored to your specific needs.
      </p>
      {/* Text Size decreased & decreased Margin bottom for Tablet(MD) screen size  */}
      <p className="text-[1.2rem] sm:text-[1rem]  md:text-[1.3rem]  lg:text-[1.5rem]  xl:text-[1.5rem]  2xl:text-[1.8rem]  3xl:text-[4rem] text-[#00182C] mb-8 md:mb-2">We consume IOT | AI | PMS | HRMS | MSP are our breakfast, lunch & dinner!!</p>
      {/* Column Size increased For Tablet(MD) & Small(SM) screen size */}
      {/* Added Margin Top For Tablet Screen  */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-0 md:mt-8 sm:mb-6">
        <div className="flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out">
          {/* Height & Width decreased for Tablet(MD) Screen & Small(SM) screen */}
          {/* Margin Bottom Addded */}
          <img className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 2xl:w-32 2xl:h-32 3xl:w-56 3xl:h-56 mb-8 md:mb-6 " src="src/assets/img/IOT.png" alt="IOT" />
        </div>
        <div className="flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out">
          {/* Height & Width decreased for Tablet(MD) Screen  */}
          {/* Margin Bottom Addded */}
          <img className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 2xl:w-32 2xl:h-32 3xl:w-56 3xl:h-56 mb-8 md:mb-6" src="src/assets/img/AI.png" alt="AI" />
        </div>
        <div className="flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out">
          {/* Height & Width decreased for Tablet(MD) Screen  */}
          {/* Margin Bottom Addded */}
          <img className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 2xl:w-32 2xl:h-32 3xl:w-56 3xl:h-56 mb-8 md:mb-6" src="src/assets/img/MSP.png" alt="MSP" />
        </div>
        <div className="flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out">
          {/* Height & Width decreased for Tablet(MD) Screen  */}
          {/* Margin Bottom Addded */}
          <img className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 2xl:w-32 2xl:h-32 3xl:w-56 3xl:h-56 mb-8 md:mb-6" src="src/assets/img/PMS.png" alt="PMS" />
        </div>
        <div className="col-span-2 sm:col-span-4 md:col-span-1 flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out">
          <img className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 2xl:w-32 3xl:w-56 mb-8 md:mb-6" src="src/assets/img/HRMS.png" alt="HRMS" />
        </div>
      </div>

    </div>
  );
};

export default Playbook;
