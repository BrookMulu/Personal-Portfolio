"use client";
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const groups = [
  ['Frontend', [['HTML', 'html5'], ['CSS', 'css3'], ['React', 'react'], ['Next.js', 'nextjs'], ['Angular', 'angular'], ['Tailwind CSS', 'tailwindcss'], ['Material UI', 'materialui']]],
  ['Languages', [['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['C#', 'csharp'], ['Java', 'java'], ['Kotlin', 'kotlin'], ['Python', 'python'], ['C++', 'cplusplus'], ['C', 'c'], ['R', 'r'], ['PHP', 'php'], ['Scala', 'scala']]],
  ['Backend & data', [['Node.js', 'nodejs'], ['.NET', 'dotnetcore'], ['Spring Boot', 'spring'], ['PostgreSQL', 'postgresql'], ['SQL Server', 'microsoftsqlserver'], ['Oracle SQL', 'oracle'], ['MongoDB', 'mongodb']]],
  ['Cloud & DevOps', [['Docker', 'docker'], ['Kubernetes', 'kubernetes'], ['Microsoft Azure', 'azure'], ['Linux', 'linux'], ['GitHub', 'github'], ['GitLab CI/CD', 'gitlab']]],
  ['Developer tools', [['VS Code', 'vscode'], ['Visual Studio', 'visualstudio'], ['Android Studio', 'androidstudio'], ['Jira', 'jira']]],
];

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const pop = { initial: { y: reduceMotion ? 0 : 38, scale: reduceMotion ? 1 : .985 }, whileInView: { y: 0, scale: 1 }, viewport: { once: true, amount: .15 }, transition: { type: 'spring', stiffness: 240, damping: 14 } };
  return <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="section-heading"><div><span className="eyebrow section-kicker">02 / MY TOOLKIT</span><h2 id="skills-title">The tools behind the work<span className="accent">.</span></h2></div></div>
    <div className="skills-layout"><p className="skills-intro"><strong>From interface to infrastructure.</strong><br />The languages, frameworks, databases, and development tools I’ve worked with across web applications, mobile projects, and professional experience.</p>
      <div className="skill-groups">{groups.map(([title, skills]) => <motion.div className="skill-group" key={title} {...pop}><h3>{title}</h3><ul className="skill-list">{skills.map(([name, icon]) => <li className="skill-chip" key={name}><span className="skill-icon"><Image src={`/images/tools/${icon}.svg`} alt="" width={32} height={32} unoptimized loading="eager" /></span><span>{name}</span></li>)}</ul></motion.div>)}</div>
    </div>
  </section>;
}
