import React from "react";
import {CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon} from "@heroicons/react/20/solid"
import {motion} from "framer-motion"
const Services = () => {
    return(
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
    )
}
export default Services;