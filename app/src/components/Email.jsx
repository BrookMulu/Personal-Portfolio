"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRightIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

export default function Email() {
  const form = useRef(null);
  const sending = useRef(false);
  const [status, setStatus] = useState('idle');
  async function sendEmail(event) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus('sending');
    try {
      await emailjs.sendForm('service_3brmg1g', 'template_fbbou1n', form.current, 'ARboRIcaQzF4ZWtH3');
      setStatus('success');
      form.current.reset();
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  }
  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <div className="contact-copy"><span className="eyebrow section-kicker">04 / SAY HELLO</span><h2 id="contact-title">Good things start<br />with a <span className="accent">conversation.</span></h2><p>Have a project in mind, an opportunity to share, or just want to connect? I’d love to hear from you.</p><div className="contact-links" aria-label="Contact links"><a href="mailto:brook.mgeb@gmail.com"><EnvelopeIcon /><span>Email<small>brook.mgeb@gmail.com</small></span></a><a href="tel:+12062589848"><PhoneIcon /><span>Phone<small>+1 (206) 258-9848</small></span></a><a href="https://github.com/BrookMulu" target="_blank" rel="noreferrer"><GitHubIcon /><span>GitHub<small>View profile ↗</small></span></a><a href="https://linkedin.com/in/brook-gebreeyesus" target="_blank" rel="noreferrer"><LinkedInIcon /><span>LinkedIn<small>Let’s connect ↗</small></span></a></div></div>
    <form ref={form} className="contact-form" onSubmit={sendEmail} aria-busy={status === 'sending'}>
      <div className="form-field"><label htmlFor="email">Your email</label><input name="email" id="email" type="email" autoComplete="email" placeholder="you@example.com" required disabled={status === 'sending'} /></div>
      <div className="form-field"><label htmlFor="subject">What’s on your mind?</label><input name="subject" id="subject" type="text" placeholder="A project, an opportunity, a hello…" required disabled={status === 'sending'} /></div>
      <div className="form-field"><label htmlFor="message">Your message</label><textarea name="message" id="message" placeholder="Tell me a little about it…" required disabled={status === 'sending'} /></div>
      <button className="button button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}<ArrowUpRightIcon /></button>
      <p className="form-status" role="status" aria-live="polite">{status === 'success' ? 'Thanks for reaching out! Your message has been sent.' : status === 'error' ? 'Your message couldn’t be sent. Please try again, or connect with me on LinkedIn.' : ''}</p>
    </form>
  </section>;
}
