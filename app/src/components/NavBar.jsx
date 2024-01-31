"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from "./NavLink";
import {motion} from "framer-motion"
import Image from 'next/image';
const navLinks = [
    {
        title:"Home",
        path:"/"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Skills",
        path:"#skills"
    },
    {
        title:"Experience",
        path:"#experience"
    },
    {
        title:"Contact Me",
        path:"#contact"
    }
]

const NavBar = () =>{
    return( 
        <motion.nav initial = {{opacity: 0, y:100}} animate = {{opacity: 1, y:0}} className="fixed top-0 left-0 right-0 z-10 py-2 md:py-4 bg-black border-b border-b-[#33353F]">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <Image src = {"/images/logo.png"} width = {100} height = {50} className='mx-auto lg:mx-12 mb-2 md:mb-0'></Image>
                <div className="menu md:block md:w-auto mx-auto lg:mx-12">
                    <ul className="flex md:p-0 md:flex-row justify-around">
                        <span className="flex flex-row rounded-full w-full sm: px-1 py-1 bg-orange-600" id="navbar">
                            <span className=" flex flex-wrap bg-black rounded-full px-5 py-2">
                                {
                                    navLinks.map((link,index)=>(
                                        <li key = {index}>
                                            <NavLink href = {link.path} title = {link.title}/>
                                        </li>
                                    ) )
                                }
                            </span>
                        </span>
                    </ul>
                </div>
            </div>
        </motion.nav>
    ) 
}
export default NavBar;