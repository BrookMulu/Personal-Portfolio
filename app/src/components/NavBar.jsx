"use client";
import { useEffect, useRef, useState } from 'react';
const links = [['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#experience'], ['Contact', '#contact']];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeButton = useRef(null);

  useEffect(() => {
    if (!resumeOpen) return;
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        setResumeOpen(false);
        resumeButton.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.add('resume-is-open');
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('resume-is-open');
    };
  }, [resumeOpen]);

  function showResume() {
    setOpen(false);
    setResumeOpen(true);
  }

  function hideResume() {
    setResumeOpen(false);
    resumeButton.current?.focus();
  }

  return <>
    <nav className="site-nav" aria-label="Main navigation"><div className="nav-inner">
      <a className="wordmark" href="#home" aria-label="Brook, home" onClick={() => setOpen(false)}>Brook<span>.</span></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
      <div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button ref={resumeButton} className="nav-resume" type="button" aria-haspopup="dialog" aria-expanded={resumeOpen} onClick={showResume}>Résumé <span aria-hidden="true">↗</span></button>
      </div>
    </div></nav>
    {resumeOpen && <div className="resume-layer">
      <button className="resume-backdrop" type="button" aria-label="Close résumé preview" onClick={hideResume} />
      <aside className="resume-drawer" role="dialog" aria-modal="true" aria-labelledby="resume-title">
        <div className="resume-drawer-header">
          <div><span className="eyebrow">RÉSUMÉ</span><h2 id="resume-title">Brook Gebreeyesus</h2></div>
          <button className="resume-close" type="button" onClick={hideResume} aria-label="Close résumé preview">Close <span aria-hidden="true">×</span></button>
        </div>
        <iframe className="resume-frame" src="/images/JobResumeCurrent.pdf#view=Fit&zoom=page-fit" title="Brook Gebreeyesus résumé" />
        <div className="resume-drawer-footer">
          <a className="button button-primary" href="/images/JobResumeCurrent.pdf" download="Brook-Gebreeyesus-Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="/images/JobResumeCurrent.pdf" target="_blank" rel="noopener noreferrer">Open full page <span aria-hidden="true">↗</span></a>
        </div>
      </aside>
    </div>}
  </>;
}
