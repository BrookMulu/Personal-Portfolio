"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion"
import {CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon} from "@heroicons/react/20/solid"
import githubIcon from "../../../public/images/github-icon.svg";
import linkedinIcon from "../../../public/images/linkedin-icon.svg";
const HeaderSection = () => {
    return(
        <header className="lg:-mt-20 -mt-16">
            <div className="lg:pl-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:mt-3">
                <motion.div initial = {{opacity: 0, y:100}} animate = {{opacity: 1, y:0}} className = "col-span-7 place-self-center text-center sm:text-left sm:pt-5">
                    <h1 className="text-white pt-8 mb-4 mt-10 text-4xl sm:text-5xl sm:pt-9 lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-orange-600">Hello, I am{" "} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Brook',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'a Software Developer',
                                1000,
                                'a College Student',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '0.95em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I am a aspiring Software Developer currently majoring in Computer Science with a Computing Concentration. I am currently interning at Doosan Bobcat as a Application Developer Co-op on the MES team. Eager to learn and contribute to innovate projects.
                    </p>
                    <div className="flex flex-col items-center gap-1 sm:flex-row"> 
                        <button className="text-white rounded-full w-full sm:w-fit px-6 py-3 bg-orange-600 hover:opacity-300 border border-white mr-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                            <a href={"#contact"}>Contact Me</a>
                        </button>
                        <button className="text-white rounded-full w-full sm:w-fit px-1 py-1 mt-1 bg-orange-600 hover:opacity-500 hover:scale-110 transition-transform duration-300 mr-4">
                            <a className="block bg-[black] rounded-full px-5 py-2 hover:opacity-80" href="/JobResume.pdf" download={true}>Download Resume</a>
                        </button>
                        <div className="socials flex items-center gap-4">
                            <a href = "https://github.com/BrookMulu" className="hover:scale-110 transition-transform duration-300">
                                <Image src = {githubIcon} alt = "Github Icon" ></Image>
                            </a>
                            <a href = "https://linkedin.com/in/brook-gebreeyesus" className="hover:scale-110 transition-transform duration-300">
                                <Image src = {linkedinIcon} alt = "Linkedin Icon"></Image>
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial = {{opacity: 0, scale:0.5}} animate = {{opacity: 1, scale:1}} transition = {{duration:0.5}} className="lg:col-span-5 place-self-center mt-6 lg:mt-14">
                    <div className="rounded-full border-8 border-orange-600 overflow-hidden bg-[#181818] w-[258px] h-[250px] lg:w-[300px] lg:h-[300px] relative mx-auto sm:mt-8">
                        <Image 
                            src = "/images/BrookGebreeyesusNew.png"
                            alt = "Brook Gebrfeeyesus"
                            className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width = {150}
                            height = {200}
                        >
                        </Image>
                    </div>
                </motion.div> 
            </div>
            </div>
            <div className="-ml-6 lg:-ml-16">
                <motion.div initial = {{opacity: 0, x:0}} animate = {{opacity: 1, x:15}} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                    <div>
                        <div className="bg-orange-600 hover:scale-110 transform tranition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mc-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Frontend</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                        Capable of leveraging HTML, CSS, and JavaScript ensuring optimal user engagement.
                        </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-orange-600 hover:scale-110 transform tranition-all duration-300 uppercase font-semibold text-center p-[2rem]">
                        <RocketLaunchIcon className="w-[6rem] h-[6rem] mc-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Backend</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                        Able to craft efficient server-side logic, managing databases, and optimizing performance.
                        </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-orange-600 hover:scale-110 transform tranition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CommandLineIcon className="w-[6rem] h-[6rem] mc-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Fullstack</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                        Proficient in integrating user interfaces with robust server-side functionalities.
                        </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};
export default HeaderSection;