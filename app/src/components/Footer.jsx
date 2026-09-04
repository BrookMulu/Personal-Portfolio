"use client";
import { motion, useReducedMotion } from 'framer-motion';

export default function Footer() {
  const reduceMotion = useReducedMotion();
  return <motion.footer className="site-footer" initial={{ y: reduceMotion ? 0 : 34, scale: reduceMotion ? 1 : .99 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: true, amount: .45 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }}><div className="footer-inner"><a className="wordmark" href="#home" aria-label="Brook, back to top">Brook<span>.</span></a><p>© {new Date().getFullYear()} Brook Gebreeyesus. Built with curiosity.</p><a href="#home">Back to top ↑</a></div></motion.footer>;
}
