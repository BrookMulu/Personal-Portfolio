import Project from './Project';

const projects = [
  {
    title: 'Pokédex Web Application',
    category: 'Full-stack application · Jan — Apr 2024',
    description: 'Explore, search, sort, and filter Pokémon, then sign in with Google to build a persistent collection. Built with a Next.js frontend, Spring Boot REST services, and PostgreSQL, with Docker for containerization and R for preparing Pokémon datasets.',
    tags: ['Next.js', 'JavaScript', 'Material UI', 'Java', 'Spring Boot', 'Spring MVC', 'PostgreSQL', 'Firebase Auth', 'Docker', 'R'],
    src: '/images/pokedex-screenshot.png',
    linkUrl: 'https://github.com/BrookMulu/frontend-pokedex',
    sourceLinks: [
      { label: 'Frontend code', href: 'https://github.com/BrookMulu/frontend-pokedex' },
      { label: 'Backend code', href: 'https://github.com/BrookMulu/Backend-Pokedex' },
    ],
  },
  {
    title: 'Computer Science Society',
    category: 'Community website · Aug — Sep 2023',
    description: 'A shared home for the Computer Science Society. Built to help members connect, find resources, and keep up with club activities.',
    tags: ['Node.js', 'React', 'Next.js', 'Email.js', 'Chakra UI', 'TypeScript'],
    src: '/images/cssWebsiteImage.png',
    linkUrl: 'https://css-website-staging.vercel.app',
  },
  {
    title: 'Personal Portfolio',
    category: 'Web development · Personal website',
    description: 'My own corner of the web. A portfolio bringing together my projects, technical skills, and the story behind my work.',
    tags: ['Node.js', 'React', 'Next.js', 'Email.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    src: '/images/portfolio-screenshot.png',
    linkUrl: '#home',
  },
  {
    title: 'Chef’s Laundry',
    category: 'Mobile development · Android game',
    description: 'A single-player Android game that puts you in the kitchen, managing orders and keeping up with life as a chef.',
    tags: ['Android Studio', 'Kotlin', 'XML', 'Android Emulator'],
    src: '/images/chefsLaundryImage.png',
    linkUrl: 'https://github.com/BrookMulu/Chef-s-Laundry-Mobile-App',
  },
];

export default function Projects() {
  return <section id="projects" className="section" aria-labelledby="projects-title">
    <div className="section-heading"><div><span className="eyebrow section-kicker">01 / SELECTED WORK</span><h2 id="projects-title">Ideas, brought to life<span className="accent">.</span></h2></div><a className="text-link" href="https://github.com/BrookMulu" target="_blank" rel="noreferrer">More on GitHub <span aria-hidden="true">↗</span></a></div>
    <div className="projects-grid projects-grid-balanced">{projects.map(project => <Project key={project.title} {...project} />)}</div>
  </section>;
}
