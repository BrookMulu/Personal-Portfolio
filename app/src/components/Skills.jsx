import Image from 'next/image';

const groups = [
  ['Frontend', [['HTML', 'html5'], ['CSS', 'css3'], ['React', 'react'], ['Next.js', 'nextjs'], ['Angular', 'angular'], ['Tailwind CSS', 'tailwindcss'], ['Material UI', 'materialui']]],
  ['Languages', [['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['C#', 'csharp'], ['Java', 'java'], ['Kotlin', 'kotlin'], ['Python', 'python'], ['C++', 'cplusplus'], ['C', 'c'], ['R', 'r'], ['PHP', 'php'], ['Scala', 'scala']]],
  ['Backend & data', [['Node.js', 'nodejs'], ['.NET', 'dotnetcore'], ['Spring Boot', 'spring'], ['PostgreSQL', 'postgresql'], ['SQL Server', 'microsoftsqlserver'], ['Oracle SQL', 'oracle'], ['MongoDB', 'mongodb']]],
  ['Cloud & DevOps', [['Docker', 'docker'], ['Kubernetes', 'kubernetes'], ['Microsoft Azure', 'azure'], ['Linux', 'linux'], ['GitHub', 'github'], ['GitLab CI/CD', 'gitlab']]],
  ['Developer tools', [['VS Code', 'vscode'], ['Visual Studio', 'visualstudio'], ['Android Studio', 'androidstudio'], ['Jira', 'jira']]],
];

export default function Skills() {
  return <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="section-heading"><div><span className="eyebrow section-kicker">02 / MY TOOLKIT</span><h2 id="skills-title">The tools behind the work<span className="accent">.</span></h2></div></div>
    <div className="skills-layout"><p className="skills-intro"><strong>From interface to infrastructure.</strong><br />The languages, frameworks, databases, and development tools I’ve worked with across web applications, mobile projects, and professional experience.</p>
      <div className="skill-groups">{groups.map(([title, skills]) => <div className="skill-group" key={title}><h3>{title}</h3><ul className="skill-list">{skills.map(([name, icon]) => <li className="skill-chip" key={name}><span className="skill-icon"><Image src={`/images/tools/${icon}.svg`} alt="" width={32} height={32} unoptimized loading="eager" /></span><span>{name}</span></li>)}</ul></div>)}</div>
    </div>
  </section>;
}
