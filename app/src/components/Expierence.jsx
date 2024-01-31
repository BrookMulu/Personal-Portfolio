"use client"
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Info = ({ position, company, companyLink, time, address, desc }) => {
  const ref = useRef(null);

  const fadeInAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.li
      ref={ref}
      variants={fadeInAnimationVariants}
      initial="hidden"
      animate="visible"
      className="text-white my-8 first:mt-0 last:mb-0 w-full md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <div className="hidden md:block">
        <LiIcon reference={ref} />
      </div>
      <div>
        <h3 className="capitalize font-bold text-xl md:text-2xl lg:text-3xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 capitalize lg:text-xl"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-white/75 lg:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full lg:text-base">
          {desc}
        </p>
      </div>
    </motion.li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div id="experience">
      <div className=" pt-20">
        <h2 className="font-bold text-6xl text-white mb-32 text-center">
          Experience
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute -left-16 md:left-8 top-0 w-[2px] md:w-[4px] h-full bg-orange-600 origin-top"
          />
          <motion.ul className="w-full flex flex-col items-center justify-between">
          <Info
              position="Student, Bachelor of Arts in Computer Science"
              company="Concordia College"
              companyLink="https://www.concordiacollege.edu/"
              time="Aug 2020 - Present"
              address="Moorhead, MN"
              desc="I am currently a student atteding Concordia College as a computer science major with a computing concentration.
              At concordia I currently serve as member of board for the intramural soccer club student organization as well as project manger for 
              the computer science society"
            />
          <Info
              position="Study Away Office Assistant"
              company="Concordia College"
              companyLink="https://www.concordiacollege.edu/"
              time="Sept 2021 - May 2022"
              address="Moorhead, MN"
              desc="Interacted with customers by phone, email, or in-person to provide information.
              Managed multiple projects simultaneously using organizational and analytical skills.
              Provided advising sessions including paperwork for students interested in going on Study Away programs."
            />
            <Info
              position="Student Technician"
              company="Information Technology Solution Center, Concordia College"
              companyLink="https://www.concordiacollege.edu/"
              time="May 2022-Present"
              address="Moorhead, MN"
              desc="Showed good problem-solving skills for troubleshooting related problems.
              Ability to install and repair minor software and hardware problems.
              Giving online and on phone support to customers providing great customer service skills"
            />
            <Info
              position="Student Manager"
              company="Information Technology Solution Center, Concordia College"
              companyLink="https://www.concordiacollege.edu/"
              time="Jan 2023-Present"
              address="Moorhead, MN"
              desc="Managing a team of 14 student employees, providing guidance, training, and support to ensure efficient daily operations.
              Assisted in the enforcement of IT policies and procedures, ensuring compliance with college guidelines and standards while encouraging a safe and productive environment."
            />
            <Info
              position="Project Manager"
              company="Computer Science Society, Concordia College"
              companyLink="https://www.concordiacollege.edu/"
              time="May 2023-Present"
              address="Moorhead, MN"
              desc="Directed the proficient planning and execution of the club website. Employing developer tools, including GitHub and Jira, to orchestrate a structured software development lifecycle for efficient
              project management and successful outcomes.Played a pivotal role in revitalizing and relaunching the Computer Science Club by collaborating with fellow members of
              leadership and faculty advisors."
            />
            <Info
              position="Application Developer Co-op(intern)"
              company="Doosan Bobcat"
              companyLink="www.google.com"
              time="May 2023-Dec 2024"
              address="West Fargo, ND"
              desc="Using Angular for the front-end, C# .NET for the back end, REST and Web APIs for data integration and Oracle SQL for data retrievals and optimization, delivering real-time data visualizations, access control mechanisms, performance enhancements. Utilizing Apriso MES to optimize manufacturing processes, including configuration, integration, automation, and performance enhancements."
            />
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;


