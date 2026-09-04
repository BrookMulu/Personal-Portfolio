"use client";

import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({ children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: .08 });

  return <div ref={ref} className={`scroll-reveal ${inView || reduceMotion ? 'is-visible' : ''}`}>
    {children}
  </div>;
}
