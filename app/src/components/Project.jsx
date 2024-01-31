"use client"
import React, { useRef } from "react";
import Image from 'next/image';
import {useScroll,motion, useTransform} from 'framer-motion';


function Project({title, description,tags,src,linkUrl}){
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1])
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6,1])

    const handleCardClick = () => {
        window.location.href = linkUrl;
    };
    return(
        <motion.div ref = {ref} style={{scale:scaleProgress, opacity:opacityProgress}} className="group mb-3 sm:mb-8 last:mb-0">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleCardClick} className="group">
            <section className="bg-gray-800 max-w-[42rem] border border-gray-100/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] last:mb-0 hover:bg-gray-900 transition sm:group-even:pl-8 mx-auto">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full text-white sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-400">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag,index)=>(
                        <li className="bg-orange-600/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full " key = {index}>{tag}</li>
                    ))}
                    </ul>
                </div>
                <Image className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] 
                rounded-t-lg shadow-2xl transition 
                group-hover:scale-[1.04] 
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2 

                group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2
                group-even:right-[initial] 
                group-even:-left-40" 
                src = {src} 
                alt = "Project I worked on" 
                width={500}
                height={300} 
                quality = {95}/>
            </section>
            </a>
        </motion.div>
    )
}

export default Project;