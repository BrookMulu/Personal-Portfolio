"use client";
import { useState } from 'react';
const links = [['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#experience'], ['Contact', '#contact']];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return <nav className="site-nav" aria-label="Main navigation"><div className="nav-inner">
    <a className="wordmark" href="#home" aria-label="Brook, home" onClick={() => setOpen(false)}>Brook<span>.</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-resume" href="/images/JobResumeCurrent.pdf" download="Brook-Gebreeyesus-Resume.pdf">Résumé <span aria-hidden="true">↗</span></a>
    </div>
  </div></nav>;
}
