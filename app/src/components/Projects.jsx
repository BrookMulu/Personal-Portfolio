import Project from './Project';

const projects = [
  {
    title: 'Pokédex Web Application',
    category: 'Full-stack application · Jan — Apr 2024',
    description: 'A containerized full-stack Pokédex with searchable, sortable, and pageable Pokémon data. Built the Next.js interface and Spring Boot REST API around PostgreSQL models and JPA relationships, with CSV data prepared in R. Firebase email/password and Google sign-in secure user-specific capture workflows; Cloud Firestore supports username lookups.',
    tags: ['Next.js', 'React', 'Java', 'Spring Boot', 'Spring MVC', 'PostgreSQL', 'JPA', 'Firebase Auth', 'Cloud Firestore', 'Docker', 'R'],
    src: '/images/pokedex-screenshot.png',
    linkUrl: 'https://github.com/BrookMulu/frontend-pokedex',
    sourceLinks: [
      { label: 'Frontend source', href: 'https://github.com/BrookMulu/frontend-pokedex' },
      { label: 'Backend source', href: 'https://github.com/BrookMulu/Backend-Pokedex' },
    ],
  },
  {
    title: 'Brook’s Financial Observatory',
    category: 'Financial data platform · Aug — Sep 2026',
    description: 'A financial analytics dashboard for exploring company performance through search, annual and quarterly statements, interactive charts, filters, and CSV exports. Built serverless REST APIs on Vercel with Financial Modeling Prep integration, input validation, secure API-key handling, caching, and error handling, plus eight automated tests. OpenAI Codex supported UI design and frontend development.',
    tags: ['Next.js', 'React', 'JavaScript', 'CSS', 'Vercel', 'REST APIs', 'Financial Modeling Prep', 'CSV Export'],
    src: '/images/financial-observatory.png',
    visualClassName: 'project-visual--financial',
    linkUrl: 'https://brooks-financial-observatory.vercel.app',
    sourceLinks: [
      { label: 'Source', href: 'https://github.com/BrookMulu/brooks-financial-observatory' },
    ],
  },
  {
    title: 'Computer Science Society',
    category: 'Community website · Aug — Sep 2023',
    description: 'A shared home for the Computer Science Society. Built to help members connect, find resources, and keep up with club activities.',
    tags: ['Node.js', 'React', 'Next.js', 'Email.js', 'Chakra UI', 'TypeScript'],
    src: '/images/cssWebsiteImage.png',
    linkUrl: 'https://css-website-staging.vercel.app',
    sourceLinks: [
      { label: 'Source', href: 'https://github.com/BrookMulu/CSS_Website' },
    ],
  },
  {
    title: 'Personal Portfolio',
    category: 'Web development · Personal website',
    description: 'My own corner of the web. A portfolio bringing together my projects, technical skills, and the story behind my work.',
    tags: ['Node.js', 'React', 'Next.js', 'Email.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    src: '/images/portfolio-screenshot.png',
    linkUrl: '#home',
    sourceLinks: [
      { label: 'Source', href: 'https://github.com/BrookMulu/Personal-Portfolio' },
    ],
  },
  {
    title: 'Chef’s Laundry',
    category: 'Mobile development · Android game',
    description: 'A single-player Android game that puts you in the kitchen, managing orders and keeping up with life as a chef.',
    tags: ['Android Studio', 'Kotlin', 'XML', 'Android Emulator'],
    src: '/images/chefsLaundryImage.png',
    linkUrl: 'https://github.com/BrookMulu/Chef-s-Laundry-Mobile-App',
    sourceLinks: [
      { label: 'Source', href: 'https://github.com/BrookMulu/Chef-s-Laundry-Mobile-App' },
    ],
  },
];

export default function Projects() {
  return <section id="projects" className="section" aria-labelledby="projects-title">
    <div className="section-heading"><div><span className="eyebrow section-kicker">01 / SELECTED WORK</span><h2 id="projects-title">Ideas, brought to life<span className="accent">.</span></h2></div><a className="text-link" href="https://github.com/BrookMulu" target="_blank" rel="noreferrer">More on GitHub <span aria-hidden="true">↗</span></a></div>
    <div className="projects-grid projects-grid-balanced">{projects.map(project => <Project key={project.title} {...project} />)}</div>
  </section>;
}
