"use client";
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { GitHubIcon } from './SocialIcons';

export default function Project({ title, category, description, tags, src, linkUrl, sourceLinks = [] }) {
  const reduceMotion = useReducedMotion();
  const external = linkUrl.startsWith('https://');
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return <motion.article className="project-card" initial={{ y: reduceMotion ? 0 : 38, scale: reduceMotion ? 1 : .985 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: true, amount: .18 }} transition={{ type: 'spring', stiffness: 240, damping: 14 }}>
    <a className="project-visual" href={linkUrl} {...linkProps} aria-label={`View ${title}${external ? ' (opens in a new tab)' : ''}`}>
      <span className="project-screenshot"><Image src={src} alt={`${title} project screenshot`} fill unoptimized sizes="(max-width: 700px) 90vw, 50vw" /></span>
      <span className="project-arrow" aria-hidden="true">↗</span>
    </a>
    <div className="project-info"><div className="project-meta">{category}</div><h3><a href={linkUrl} {...linkProps}>{title}</a></h3><p>{description}</p><ul className="tags" aria-label="Technologies">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
    {sourceLinks.length > 0 && <div className="project-source-links">{sourceLinks.map(link => <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${title}: ${link.label} (opens in a new tab)`}><GitHubIcon />{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
  </motion.article>;
}
