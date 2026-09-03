import Image from 'next/image';
import { ArrowDownIcon, ArrowUpRightIcon, CodeBracketIcon, CircleStackIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
const capabilities = [
  { title: 'Frontend', text: 'Thoughtful interfaces. Fluid interactions. Built for the people using them.', icon: CodeBracketIcon },
  { title: 'Backend', text: 'Server-side logic, connected data, and the foundations behind the experience.', icon: CircleStackIcon },
  { title: 'Full stack', text: 'Bringing it all together, from the first interaction to the last API call.', icon: Squares2X2Icon },
];
export default function HeaderSection() {
  return <header className="hero">
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER & CURIOUS BUILDER</p>
        <h1>Hi, I’m Brook.<br />I turn ideas into<br /><span className="accent">working software.</span></h1>
        <p className="hero-description">From intuitive web experiences to the systems behind them. I’m Brook Gebreeyesus, a developer with a computer science background and hands-on experience building for the real world.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownIcon /></a><a className="text-link" href="#contact">Let’s connect <ArrowUpRightIcon /></a></div>
        <div className="hero-socials"><a href="https://github.com/BrookMulu" target="_blank" rel="noreferrer"><GitHubIcon />GitHub ↗</a><a href="https://linkedin.com/in/brook-gebreeyesus" target="_blank" rel="noreferrer"><LinkedInIcon />LinkedIn ↗</a><span>Always learning. Always building.</span></div>
      </div>
      <figure className="portrait-card">
        <div className="portrait-image"><Image src="/images/brook_upper.jpeg" alt="Brook Gebreeyesus smiling" fill priority sizes="(max-width: 700px) 90vw, 38vw" /></div>
        <div className="portrait-caption"><div><span className="eyebrow">THE PERSON BEHIND THE CODE</span><p>Brook Gebreeyesus</p></div><span className="portrait-symbol" aria-hidden="true">✳</span></div>
      </figure>
    </div>
    <div className="capabilities">{capabilities.map(({ title, text, icon: Icon }, index) => <div className="capability" key={title}><div className="capability-top"><Icon /><span>0{index + 1}</span></div><h2>{title}</h2><p>{text}</p></div>)}</div>
  </header>;
}
