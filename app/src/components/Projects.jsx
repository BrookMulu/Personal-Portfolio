"use client"
import React from "react";
import Project from "./Project";

const Projects = () => {
        const project = [
            {
                title: 'Personal Portfolio Website',
                description:'I worked on a personal portfolio highlighting my ability to construct fluid and captivating digital interactions. ',
                tags: ["Node.JS", "React","Next.js","Email.js","Tailwind CSS","Framer Motion","Javascript"],
                src: '/images/personalPortfolioImg.png',
                linkUrl: "/",
                
            },
            {
                title: 'Computer Science Society Club Website',
                description:'I developed a dynamic website providing a place for members to connect, access resources, and stay updated on club activities.',
                tags: ["Node.JS","React","Next.js","Email.js","Chakra UI","TypeScript"],
                src: '/images/cssWebsiteImage.png',
                linkUrl: "https://css-website-staging.vercel.app",
            },
            {
                title: 'Chefs Laundry',
                description:'I made a single player game simulating a chef managing orders creating  immersive and enjoyable gaming experience on your Android device.',
                tags: ["Android Studio","Kotlin","XML","Android Emulator"],
                src: '/images/chefsLaundryImage.png',
                linkUrl: "https://github.com/BrookMulu/Chef-s-Laundry-Mobile-App",
            }
        ];
    return(
        <div id="projects">
        <section className="lg:mt-28 pt-8">
            <h2 className="font-bold text-6xl text-white pt-20 mb-32 text-center"> Projects</h2> 
            <div>
                {project.map((project, index) => (
                    <React.Fragment key = {index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))} 
            </div>
        </section> 
        </div>
    );
}

export default Projects;