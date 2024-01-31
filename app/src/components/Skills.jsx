"use client"
import React from 'react';
import {useScroll,motion, useTransform} from 'framer-motion';

const Skills = (id) => {
    const skills = [
        {
            id: 1,
            title: 'HTML',
            src: '/images/html.png',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            title: 'CSS',
            src: '/images/css.png',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            title: 'C#',
            src: '/images/CSharp.png',
            style: 'shadow-purple-500',
        },
        {
            id: 4,
            title: 'React',
            src: '/images/react.png',
            style: 'shadow-blue-300',
        },
        {
            id: 5,
            title: 'Next.JS',
            src: '/images/next.jpg',
            style: 'shadow-white',
        },
        {
            id: 6,
            title: 'Angular',
            src: '/images/angular.png',
            style: 'shadow-red-500',
        },
        {
            id: 7,
            title: 'Node.JS',
            src: '/images/node.png',
            style: 'shadow-green-400',
        },
        {
            id: 8,
            title: 'Tailwind',
            src: '/images/tailwind.png',
            style: 'shadow-blue-300',
        },
        {
            id: 9,
            title: 'Oracle SQL',
            src: '/images/oracle.png',
            style: 'shadow-green-500',
        },
        {
            id: 10,
            title: 'Java',
            src: '/images/javaImage.png',
            style: 'shadow-orange-500',
        },
        {
            id: 10,
            title: 'Kotlin',
            src: '/images/Kotlin.png',
            style: 'shadow-blue-400',
        },
        {
            id: 10,
            title: 'Mongo DB',
            src: '/images/MongoDB.png',
            style: 'shadow-green-500',
        },
    ];

    const fadeInAnimationVariants = {
        initial:{
            opacity: 0,
            y: 100
        },
        animate: () =>({
            opacity: 1,
            y:0,
            transition: {
                delay: 0.05 * id
            },
        } )
    }
    return (
        <div id = "skills">
            <div className="pt-24">
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full place-self-center text-center">
                    <div>
                        <p className="text-white text-6xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                        <p className="text-white py-6">Here are some of the languages I have worked with: </p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-12 px-8 sm:px-0">
                        {skills.map(({ id, title, src, style }) => (
                            <motion.div key={id} custom = {id} variants={fadeInAnimationVariants} initial = "initial" whileInView="animate" className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg hover: ${style}`} > 
                                    <div className="hover:scale-110 transition-transform duration-300">
                                        <img src={src} alt="" className="w-20 mx-auto"/>
                                        <p className="text-white mt-4">{title}</p>
                                    </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;
