"use client"
import React, {useRef,useState} from "react";
import githubIcon from "../../../public/images/github-icon.svg";
import linkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { motion, useScroll } from "framer-motion";
const Email = () => {
    const form = useRef();
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3brmg1g', 'template_fbbou1n', form.current, 'ARboRIcaQzF4ZWtH3')
        .then((result) => {
        console.log(result.text);
        console.log("Message Sent.");
        setEmailSubmitted(true);
        }, (error) => {
          console.log(error.text);
    });
};
    return (
    <div id = "contact">
        <div className="pt-28">
        <h2 className="font-bold text-6xl text-white text-center">
                    Contact Me
        </h2>
        <motion.section initial = {{opacity: 0}} whileInView={{opacity:1}} transition={{duration:1}} className ="grid md:grid-cols-2 my-12 md:my-12  py-24 gap-4 relative" >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-9">
                <h5 className="text-xl font-bold text-white my-2.5">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Feel free to reach out to me. I am always looking to explore new opportunities.
                    If you have any questions or just want to connect, I will do my bes to get back 
                    to you.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href = "https://github.com/BrookMulu" className="hover:scale-110 transition-transform duration-300">
                        <Image src = {githubIcon} alt = "Github Icon" ></Image>
                    </Link>
                    <Link href = "https://linkedin.com/in/brook-gebreeyesus" className="hover:scale-110 transition-transform duration-300">
                        <Image src = {linkedinIcon} alt = "Linkedin Icon"></Image>
                    </Link>
                </div>
            </div>
            <div>
                <form ref={form} className = "flex flex-col" onSubmit={sendEmail}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block text-sm font-medium"> Your email</label>
                        <input name = "email" type="email" id="email" required  className= "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="abc@gmail.com" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block text-sm font-medium"> Subject </label>
                        <input name = "subject" type="text" id="text" required  className= "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Topic of converstation" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm font-medium"> Message </label>
                        <textarea name = "message" type="message" id="message" required  className= "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about....." />
                    </div>
                    <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                    {
                    emailSubmitted &&(
                        <p className="text-green-500 text-sm mt-2">
                            Email Sent Successfully!
                        </p>
                    )  
                    }
                </form>
            </div>
        </motion.section>
        </div>
    </div>
)};

export default Email;