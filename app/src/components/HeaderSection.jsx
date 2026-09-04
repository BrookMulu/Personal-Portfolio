"use client";
import Image from 'next/image';
import { ArrowDownIcon, ArrowUpRightIcon, CodeBracketIcon, CircleStackIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
const capabilities = [
  { title: 'Frontend', text: 'Thoughtful interfaces. Fluid interactions. Built for the people using them.', icon: CodeBracketIcon },
  { title: 'Backend', text: 'Server-side logic, connected data, and the foundations behind the experience.', icon: CircleStackIcon },
  { title: 'Full stack', text: 'Bringing it all together, from the first interaction to the last API call.', icon: Squares2X2Icon },
];
export default function HeaderSection() {
  const reduceMotion = useReducedMotion();
  const container = {
    hidden: {},
    visible: { transition: { delayChildren: .12, staggerChildren: 0 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : .55, ease: [0.22, 1, 0.36, 1] } },
  };
  const capabilitiesContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : .45,
        staggerChildren: 0,
      },
    },
  };

  return <motion.header className="hero" variants={container} initial="hidden" animate="visible">
    <div className="hero-grid">
      <div className="hero-copy">
        <motion.p className="eyebrow" variants={item}><span className="status-dot" /> SOFTWARE DEVELOPER & CURIOUS BUILDER</motion.p>
        <motion.h1 variants={item}>Hi, I’m Brook.<br />I turn ideas into<br /><span className="accent">working software.</span></motion.h1>
        <motion.p className="hero-description" variants={item}>From intuitive web experiences to the systems behind them. I’m Brook Gebreeyesus, a developer with a computer science background and hands-on experience building for the real world.</motion.p>
        <motion.div className="hero-actions" variants={item}><a className="button button-primary" href="#projects">Explore my work <ArrowDownIcon /></a><a className="text-link" href="#contact">Let’s connect <ArrowUpRightIcon /></a></motion.div>
        <motion.div className="hero-socials" variants={item}><a href="https://github.com/BrookMulu" target="_blank" rel="noreferrer"><GitHubIcon />GitHub ↗</a><a href="https://linkedin.com/in/brook-gebreeyesus" target="_blank" rel="noreferrer"><LinkedInIcon />LinkedIn ↗</a><span>Always learning. Always building.</span></motion.div>
      </div>
      <motion.figure className="portrait-card" variants={item}>
        <div className="portrait-image"><Image src="/images/brook_upper.jpeg" alt="Brook Gebreeyesus smiling" fill priority sizes="(max-width: 700px) 90vw, 38vw" /></div>
        <div className="portrait-caption"><div><span className="eyebrow">THE PERSON BEHIND THE CODE</span><p>Brook Gebreeyesus</p></div><span className="portrait-symbol" aria-hidden="true">✳</span></div>
      </motion.figure>
    </div>
    <motion.div className="capabilities" variants={capabilitiesContainer}>{capabilities.map(({ title, text, icon: Icon }, index) => <motion.div className="capability" variants={item} key={title}><div className="capability-top"><Icon /><span>0{index + 1}</span></div><h2>{title}</h2><p>{text}</p></motion.div>)}</motion.div>
  </motion.header>;
}
