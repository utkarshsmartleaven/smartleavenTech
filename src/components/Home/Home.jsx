import React, { useEffect, useState, useRef } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { Helmet } from 'react-helmet-async';
import Carousal from "./Carousal";
import playbookIcon from '/src/assets/img/Playbook1.png'
import Badge from '/src/assets/img/Badge.png'
import Logo from '/src/assets/img/Logo1.png';
import Playbook from '../PlayBook/Playbook';
import Contact from '../Contact/Contact';

const Home = ({ scrollToPlaybook, scrollToContact }) => {
    const [isSecondlineVisible, setSecondlineVisible] = useState(false);
    const [isAnimationComplete, setAnimationComplete] = useState(false);
    const [isForVisible, setForVisible] = useState(false);
    const [currentText, setCurrentText] = useState("SMART FACTORIES"); // Set the initial text

    const rotatingTexts = ["SMART FACTORIES", "SMART CITIES", "SMART MACHINES"];


    useEffect(() => {
        // Delay second line animation by 3.5 seconds
        const timer = setTimeout(() => {
            setSecondlineVisible(true);
        }, 3500);

        const forTimer = setTimeout(() => {
            setForVisible(true); // Show "FOR" after the second line
        }, 7000);

        // Start rotating text only after the heading animation is complete
        const rotationTimer = setTimeout(() => {
            setAnimationComplete(true);
        }, 7000);

        let textRotationInterval;
        if (isAnimationComplete) {
            // Text rotation logic every 6 seconds
            textRotationInterval = setInterval(() => {
                setCurrentText((prevText) => {
                    const currentIndex = rotatingTexts.indexOf(prevText);
                    const nextIndex = (currentIndex + 1) % rotatingTexts.length;
                    return rotatingTexts[nextIndex];
                });
            }, 5500);
        }

        return () => {
            clearTimeout(timer);
            clearTimeout(rotationTimer);
            clearTimeout(forTimer);
            clearInterval(textRotationInterval);
        };
    }, [isAnimationComplete]);

    return (
        <div className="relative bg-[#eef3f5] min-h-screen">
           <Helmet>
                <title>SmartLeaven Technologies Pvt. Ltd.</title>
                <meta name="description" content="Discover SmartLeaven's innovative solutions for smart factories, smart cities, and operational excellence. Enhance efficiency and drive digital transformation." />
                <meta name="keywords" content="Smart Factory, Smart City, Smart Machine, Automation, Operational Excellence" />
                <meta property="og:title" content="SmartLeaven Technologies Pvt. Ltd." />
                <meta property="og:description" content="Explore our comprehensive services for smart solutions that enhance operational efficiency." />
                <meta property="og:image" content={Logo} /> 
                <meta property="og:url" content="https://www.smartleaven.com" /> 
                <meta name="author" content="Vijay Khupse" />
            </Helmet>
            {/* Increased Height 93vh to 97vh */}
            <div className="w-full h-[93vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] bg-custom-gradient relative">
                {/* Carousel as Background */}
                <div className="w-full md:w-full lg:w-1/2 absolute right-0 top-12 md:top-48 lg:top-0  h-full z-0">
                    <Carousal currentText={currentText} /> {/* Pass currentText prop */}
                </div>

                {/* Menu */}
                <div className="absolute top-4 md:top-2 lg:top-2 left-4 md:left-6 lg:left-10 flex items-center z-10">
                    <div className="w-8 h-8 md:w-14 md:h-10 lg:w-12 lg:h-10 relative mr-2">
                        <HiOutlineMenuAlt2 className="w-full h-full text-[#eef3f5]" />
                    </div>
                    <span className="text-[#eef3f5] text-[1rem] md:text-[2rem] lg:text-[1.5rem] font-medium font-['Roboto']">MENU</span>
                </div>

                {/* Logo */}
                <div className="absolute top-4 md:top-2 lg:top-2 right-4 md:right-6 lg:right-10 flex items-center z-10">
                    <div className="w-30 h-5 md:w-30 md:h-10 lg:w-44 lg:h-10 relative">
                        <img
                            src={Logo}
                            alt="SmartLeaven Technology"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Headline with Typing Animation */}
                {/* Margin Top Changed For MD & SM Screen */}
                <div className="absolute left-5 md:left-10 lg:left-10 top-[18%] md:top-[16%] lg:top-[35%] flex flex-col justify-center items-start z-10">
                    <div className="w-max">
                        {/* First Line Animation */}
                        {/* Text Size decreased for Tablet(MD) Screen Size */}
                        <div className="animate-typing overflow-hidden whitespace-nowrap pr-5 lg:top-4 text-[#00e0ff] text-[2rem] md:text-[2rem] lg:text-[2.9rem] xl:text-[3.5rem] 2xl:text-[4.4rem] 3xl:text-[5.1rem] font-bold font-['Roboto']">
                            <span className="text-white">A
                                <span className='text-[#00e0ff]'> FULL SERVICE</span>
                            </span>
                        </div>

                        {/* Second Line Animation Initially Hidden */}
                        {/* Text Size decreased for Tablet(MD) Screen Size & Padding-right Changed */}
                        <div className={`overflow-hidden whitespace-nowrap pr-0 pl-0 text-[2rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.9rem] xl:text-[3.5rem] 2xl:text-[4.2rem] 3xl:text-[5.1rem] lg:py-1 font-bold font-['Roboto'] ${isSecondlineVisible ? 'animate-typing-delay' : 'hidden'}`}>
                            <span className="text-white">
                                {/* Only show the break on mobile */}
                                {/* Remove The sm:hidden & Add lg:hidden */}
                                <span className="block lg:hidden mt-0 text-[1.8rem] md:text-[2rem] lg:text-[2.9rem]">OPERATION PARTNER<br /> {isForVisible && <span className="animate-typing text-white sm:mt-4">FOR</span>}</span>
                                {/* On medium and above, keep it on the same line */}
                                {/* Remove md:inline & Add lg:inline */}
                                <span className="hidden lg:inline text-[1.8rem] md:text-[2.2rem] lg:text-[2.9rem] xl:text-[3.9rem] 2xl:text-[4.4rem]">OPERATION PARTNER FOR</span>
                                {/* Rotating Text Section */}
                                {isAnimationComplete && (
                                    <div className="absolute sm:top-3  sm:left-10 mb-1 md:right-0 md:top-32 md:left-0 lg:left-80 xl:left-64 xl:mt-4  2xl:mt-8 2xl:left-80 2xl:ml-32 3xl:mt-7 3xl:ml-60 lg:top-5 flex z-10 ">
                                        {/* lg:top-24 to 20  */}
                                        <div className="w-max">
                                            {/* Text Size decreased for Tablet(MD) Screen Size */}
                                            {/* SMART CITY CODE */}
                                            <div className={`whitespace-nowrap sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.9rem] xl:text-[3.5rem] 2xl:text-[4.4rem] 3xl:text-[5.1rem] font-bold font-['Roboto'] `}>
                                                <span className=" text-white bg-[#00e0ff] bg-opacity-40 sm:left-56 md:left-0 lg:left-64 sm:mt-7 lg:mt-14 xl:left-[33rem] 2xl:left-[26.5rem]  absolute">{currentText}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </span>
                        </div>

                    </div>
                </div>

                {/* Buttons (Our Playbook & Talk to Expert) */}
                {/* Increased left Margin 4% to 16% */}
                <div className="absolute bottom-[0%] md:bottom-[0%] lg:bottom-[0%] left-[2%] md:left-[2%] lg:left-[5%] flex space-x-[2.5vw] z-10">
                    {/* Our Playbook Button */}
                    <button onClick={scrollToPlaybook} className="bg-[#00182C]  text-[#EEF3F5] text-[3vw] md:text-[1.5vw] lg:text-[1.5vw] font-bold py-[0.5vh] px-[1vw] md:py-[1vh] md:px-[3vw] lg:py-[0vh] lg:px-[1vw] rounded-t-lg shadow-lg flex items-center">
                        OUR <br /> PLAYBOOK
                        <img src={playbookIcon} alt="Playbook Icon showing our guide to operational excellence" className="w-10 h-10 sm:w-10 md:w-10 lg:w-10 ml-4 mt-0" />
                    </button>

                    {/* Talk to Expert Button */}
                    <button onClick={scrollToContact} className="bg-transparent border-4 border-[#00182C] text-#00182C text-[3vw] md:text-[1.5vw] lg:text-[1.5vw] font-bold py-[0.5vh] px-[2vw] md:py-[1vh] md:px-[3vw] lg:py-[0vh] lg:px-[2vw] rounded-t-lg shadow-lg flex items-center">
                        TALK TO <br /> EXPERT
                        <img src={Badge} alt="Badge icon for contacting our experts" className="w-10 h-10 ml-4 mt-0" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;
